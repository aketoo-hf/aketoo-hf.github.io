// AI 客服后端代理示例（阿里云百炼 / 通义千问）
//
// 特点：零 npm 依赖，仅用 Node 20 内置模块，可直接 `node server/chat-proxy.example.mjs`
// 或用 pm2 常驻。前端把 ChatWidget.astro 里的 CHAT_API_ENDPOINT 改为 '/api/chat'，
// 由 nginx 把 /api/chat 反向代理到本进程即可。
//
// 环境变量：
//   DASHSCOPE_API_KEY  百炼控制台申请的 API Key（必填，不要写进代码仓库）
//   CHAT_PROXY_PORT    监听端口，默认 8787
//   CHAT_MODEL         模型名，默认 qwen-plus
//
// 启动：
//   export DASHSCOPE_API_KEY=sk-xxxx
//   node server/chat-proxy.example.mjs
//
// 流式输出：默认关闭（stream: false）。前端 ChatWidget 只解析 { reply } 这一种
// 响应体，一次性返回整段答案，逻辑最简单，也不需要 nginx 关闭缓冲。
// 若要改成流式（SSE），需要三处配合，见文件末尾「开启流式」注释。

import http from 'node:http';

const PORT = Number(process.env.CHAT_PROXY_PORT || 8787);
const API_KEY = process.env.DASHSCOPE_API_KEY || '';
const MODEL = process.env.CHAT_MODEL || 'qwen-plus';
const UPSTREAM = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

// 系统提示词：合规红线与首页规格书保持一致
const SYSTEM_PROMPT = [
  '你是阿克图（东莞）电子绝缘材料有限公司的官网客服助手。',
  '公司承接韩国KOSDAQ上市企业大州电子东莞高分子材料事业部，主营高端环氧绝缘粉末。',
  '联系方式：电话 139 4711 3888，邮箱 sales@aketoo.com。',
  '回答要求：简洁、专业、不夸大。',
  '禁止提及任何客户公司名称。',
  '涉及 UL 只能表述为“传承大州电子UL黄卡技术体系（RTI 105℃/130℃）”，禁止写“已获UL认证”。',
  '禁用广告法极限词（最、第一、顶级、唯一、绝对等）。',
  '不确定的技术参数请引导用户致电或发邮件，不要编造。',
].join('\n');

const readBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      // 简单限流，避免超大请求体
      if (size > 32 * 1024) {
        reject(new Error('payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });

const send = (res, status, payload) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
  });
  res.end(body);
};

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST' || !req.url?.startsWith('/api/chat')) {
    send(res, 404, { error: 'not found' });
    return;
  }

  if (!API_KEY) {
    send(res, 500, { error: 'DASHSCOPE_API_KEY is not set' });
    return;
  }

  let message = '';
  try {
    const raw = await readBody(req);
    const parsed = JSON.parse(raw || '{}');
    message = String(parsed.message || '').slice(0, 1000).trim();
  } catch {
    send(res, 400, { error: 'bad request' });
    return;
  }

  if (!message) {
    send(res, 400, { error: 'empty message' });
    return;
  }

  try {
    const upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        // 温度调低，参数类问答要稳定，不要发挥
        temperature: 0.3,
        max_tokens: 600,
        // 流式关闭，一次性返回整段答案
        stream: false,
      }),
    });

    if (!upstream.ok) {
      send(res, 502, { error: 'upstream error', status: upstream.status });
      return;
    }

    const json = await upstream.json();
    const reply = json?.choices?.[0]?.message?.content?.trim() || '';
    send(res, 200, { reply });
  } catch (error) {
    // 详情只进服务端日志，不回传给访客
    console.error('[chat-proxy] upstream unreachable:', error);
    send(res, 502, { error: 'upstream unreachable' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`chat proxy listening on http://127.0.0.1:${PORT}/api/chat`);
});

// ---------------------------------------------------------------------------
// 开启流式（可选，默认不需要）
//
// 1. 上游请求体把 stream 改为 true，并在读取时用 upstream.body 逐块解析
//    text/event-stream，每行形如 `data: {...}`，最后一行是 `data: [DONE]`。
// 2. 本服务用 res.writeHead(200, { 'Content-Type': 'text/event-stream',
//    'Cache-Control': 'no-cache', Connection: 'keep-alive' }) 把增量转发出去。
// 3. nginx 的 /api/chat 段要加 proxy_buffering off; proxy_cache off;
//    否则响应会被缓冲，前端仍然是一次性收到。
//    前端 ChatWidget.astro 里的 reply() 也要改成读 res.body 的 ReadableStream，
//    逐块追加到同一个气泡里。
//
// 只有在答案普遍偏长、需要打字机效果时才值得做这一步。
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 其它建议
//
// - 反垃圾：nginx 层用 limit_req_zone 对 /api/chat 做每 IP 限流即可，
//   例如 limit_req_zone $binary_remote_addr zone=chat:10m rate=20r/m;
// - 日志：生产环境建议把 message 与 reply 落到文件，便于回看常见问题，
//   落盘前请去掉访客留下的手机号邮箱等个人信息。
// - 知识库：把百炼「应用」的 RAG 检索结果拼进 SYSTEM_PROMPT 前面即可，
//   上传语料前先做合规清洗，红线见 docs/DESIGN_SPEC.md 第 8 节。
// ---------------------------------------------------------------------------
