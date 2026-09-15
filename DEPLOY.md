# 亨丰科技官网部署说明

站点：https://www.aketoo.com
技术栈：Astro 5（static）+ Tailwind CSS v4，产物为纯静态文件，无需 Node 运行时（AI 客服与询盘接口除外）。

---

## 1. 构建与产物

```bash
npm ci
npm run build     # 产物输出到 dist/
```

- `dist/` 为全静态站点，直接由 nginx 托管即可。
- 构建需要 Node 20.9 以上、npm 10 以上。
- 本地预览：`npm run preview`；开发：`npm run dev`；类型检查：`npm run check`。

产物结构：

```
dist/
  index.html                 首页（中文，根路径）
  about/ products/ applications/ quality/ contact/
  en/index.html              英文首页
  en/about/ ... en/contact/
  _astro/                    带 hash 的 css / js / 图片
  og/powder-green-1024.jpg   社交分享图
  robots.txt  favicon.svg
  sitemap-index.xml  sitemap-0.xml
```

---

## 2. 临时部署：GitHub Pages（备案期间过渡方案）

备案要 1-3 周，这段时间先把站挂到 GitHub Pages 上，方便内部评审和给客户预览。
**这是过渡方案，不是最终线路**：GitHub Pages 服务器在境外，国内访问不稳定，正式对外仍以第 3 节的阿里云方案为准。

### 2.1 一次性设置

仓库已配好 `.github/workflows/deploy.yml`，推送到 `main` 分支即自动构建并发布。

在公司 GitHub 账号 `aketoo-hf` 下新建仓库，**仓库名必须是 `aketoo-hf.github.io`**（这样站点在根路径，不需要配 base 路径），设为 Public，不要勾选任何初始化文件。然后本地：

```bash
git remote add origin git@github.com:aketoo-hf/aketoo-hf.github.io.git
git push -u origin main
```

推送后在仓库页面进入 `Settings` → `Pages`，把 **Source** 设为 **GitHub Actions**。
第一次部署约 2 分钟，完成后访问：`https://aketoo-hf.github.io/`

### 2.2 预览站不会被搜索引擎收录

`astro.config.mjs` 的 `site` 由环境变量 `SITE_URL` 控制，默认是 `https://www.aketoo.com`。
GitHub Actions 里设成了 `https://aketoo-hf.github.io`，构建时会自动：

- 每个页面输出 `<meta name="robots" content="noindex, nofollow">`
- `robots.txt` 输出 `Disallow: /`

这样预览站不会和将来的正式站抢搜索排名。本地或服务器上直接 `npm run build`（不带 `SITE_URL`）则是正式配置，canonical 指向 `www.aketoo.com`，robots 正常放行。

### 2.3 后续切换到正式域名

备案通过、阿里云服务器就绪后，按第 3 节部署即可。GitHub Pages 仓库可以保留作为备份和源码托管，也可以直接删掉。
如果决定长期用 GitHub Pages 而不是国内服务器（不推荐，国内访问慢），需要：删掉 workflow 里的 `SITE_URL` 环境变量、在仓库 `Settings` → `Pages` 绑定自定义域名 `www.aketoo.com`、在阿里云 DNS 加一条 CNAME 指向 `aketoo-hf.github.io`。

---

## 3. 阿里云轻量服务器 + nginx

建议地域：深圳或广州。系统 Ubuntu 22.04 或 Alibaba Cloud Linux 3。

把 `dist/` 上传到 `/var/www/aketoo`（示例）：

```bash
rsync -avz --delete dist/ root@<server-ip>:/var/www/aketoo/
```

nginx 配置示例 `/etc/nginx/conf.d/aketoo.conf`：

```nginx
# http 跳转 https
server {
    listen 80;
    listen [::]:80;
    server_name www.aketoo.com aketoo.com;
    return 301 https://www.aketoo.com$request_uri;
}

# 裸域跳 www
server {
    listen 443 ssl;
    http2 on;
    server_name aketoo.com;

    ssl_certificate     /etc/nginx/ssl/aketoo.com.pem;
    ssl_certificate_key /etc/nginx/ssl/aketoo.com.key;

    return 301 https://www.aketoo.com$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name www.aketoo.com;

    root /var/www/aketoo;
    index index.html;

    ssl_certificate     /etc/nginx/ssl/aketoo.com.pem;
    ssl_certificate_key /etc/nginx/ssl/aketoo.com.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 1d;

    # gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/javascript application/json image/svg+xml;

    # 安全头
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;

    # html 不缓存，保证发版即时生效
    location ~* \.html$ {
        add_header Cache-Control "no-cache, must-revalidate";
        try_files $uri =404;
    }

    # 带 hash 的静态资源长缓存
    location /_astro/ {
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }

    location ~* \.(?:jpg|jpeg|png|webp|avif|svg|ico|woff2)$ {
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri =404;
    }

    # 目录形式的路由（/about/ -> /about/index.html）
    location / {
        try_files $uri $uri/ $uri/index.html /index.html;
    }

    # AI 客服接口，见第 4 节
    location /api/chat {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_read_timeout 60s;
    }

    # 询盘接口，见第 5 节
    location /api/inquiry {
        proxy_pass http://127.0.0.1:8788;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

证书可用阿里云免费证书或 certbot 签发，放在 `/etc/nginx/ssl/`。
修改后 `nginx -t && systemctl reload nginx`。

---

## 4. 备案号替换

页脚备案号是占位文案，上线前必须替换。位置在 i18n 字典，中英两份都要改：

- `src/i18n/zh.ts` → `footer.icpText` / `footer.policeText`
- `src/i18n/en.ts` → `footer.icpText` / `footer.policeText`

替换要点：

1. ICP 备案：把 `粤ICP备XXXXXXXX号` 改为工信部下发的真实备案号，链接保持 `https://beian.miit.gov.cn/`。
2. 公安联网备案：备案完成后拿到备案编号，把 `粤公网安备 XXXXXXXXXXXXX号` 换成真实编号，链接改为公安部备案系统给出的查询地址（形如 `https://beian.mps.gov.cn/#/query/webSearch?code=XXXXXXXXXXXXX`）。公安备案号前通常还需展示警徽图标，图标文件放 `public/` 后在 `src/components/Footer.astro` 的备案行补上即可。
3. 改完重新 `npm run build` 并重新同步 `dist/`。

---

## 5. AI 客服正式接入（阿里云百炼 / 通义千问）

当前 `src/components/ChatWidget.astro` 顶部为：

```js
const CHAT_API_ENDPOINT = null;   // null 时走本地 FAQ 关键词匹配
```

接入步骤：

1. 在阿里云百炼控制台开通服务并申请 API Key。
2. 服务器上把 Key 放进环境变量，不要写进代码仓库：
   ```bash
   export DASHSCOPE_API_KEY=sk-xxxxxxxx
   ```
3. 启动代理服务（示例脚本零依赖，只用 Node 内置模块）：
   ```bash
   node server/chat-proxy.example.mjs
   # 或常驻
   pm2 start server/chat-proxy.example.mjs --name aketoo-chat --update-env
   pm2 save
   ```
   默认监听 `127.0.0.1:8787`，可用 `CHAT_PROXY_PORT` 改端口，`CHAT_MODEL` 改模型（默认 qwen-plus）。
4. nginx 按第 2 节反代 `/api/chat`。
5. 把 `ChatWidget.astro` 里的常量改成 `const CHAT_API_ENDPOINT = '/api/chat';`，重新构建发布。

接入后的降级行为：接口超时、报错或返回空内容时，前端自动回落到内置 FAQ 关键词匹配，不会给访客留下空白气泡。

流式输出默认关闭。代理一次性返回 `{ "reply": "..." }`，前端只解析这一种响应体，nginx 也不必关闭缓冲。若确实需要打字机效果，按 `server/chat-proxy.example.mjs` 末尾「开启流式」注释改三处：上游 `stream: true`、本服务转发 SSE、nginx 该 location 加 `proxy_buffering off;`。

限流建议（放在 http 段与 location 段）：

```nginx
# http 段
limit_req_zone $binary_remote_addr zone=chat:10m rate=20r/m;

# location /api/chat 段
limit_req zone=chat burst=10 nodelay;
```

知识库建议（RAG）：

- 在百炼「应用」里新建 RAG 应用，上传企业介绍、产品 TDS、常见问答文档，把检索结果拼进系统提示词。
- 上传前先做一次合规清洗：删除任何客户公司名称，UL 相关表述统一为「传承大州电子UL黄卡技术体系（RTI 105℃/130℃）」，删除广告法极限词。
- 代理脚本里的 `SYSTEM_PROMPT` 已内置这几条红线，替换为 RAG 应用时请把同样的约束带过去。
- 参数不确定时让模型引导用户致电或发邮件，不要编造数值。

---

## 6. 询盘表单接入

当前 `src/components/InquiryForm.astro` 顶部为：

```js
const FORM_ENDPOINT = null;   // null 时降级为 mailto 草稿
```

- 保持 `null`：用户提交后浏览器打开邮件客户端，收件人 sales@aketoo.com，主题与正文已拼好。零后端成本，适合先上线。
- 正式接入：写一个和 `server/chat-proxy.example.mjs` 同构的小服务，监听 `127.0.0.1:8788`，接收 JSON `{name, company, phone, email, message}` 后转发到企业邮箱或写入数据库；nginx 反代 `/api/inquiry`；然后把常量改为 `const FORM_ENDPOINT = '/api/inquiry';` 重新构建。
- 建议加基础反垃圾措施：同 IP 频率限制、蜜罐字段、必要时接入验证码。

---

## 7. 发版检查清单

- [ ] `npm run build` 零错误零警告
- [ ] 备案号已替换为真实编号（中英两份字典）
- [ ] 12 个页面均可访问，中英语言切换在每页对应正确
- [ ] `https://www.aketoo.com/sitemap-index.xml` 可访问
- [ ] `https://www.aketoo.com/robots.txt` 可访问
- [ ] 移动端 375px、平板 768px、桌面 1440px 无横向滚动
- [ ] 客服组件与询盘表单在真机上可用
