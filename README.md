# HENGFENG 官网

东莞亨丰科技有限公司官方网站源码。
唯一设计与内容依据：[`docs/DESIGN_SPEC.md`](docs/DESIGN_SPEC.md)。冲突时以规格书为准。

## 技术栈

- Astro 5，`output: 'static'`
- Tailwind CSS v4（`@tailwindcss/vite`，CSS 里 `@import "tailwindcss";`）
- 原生 JS 交互，不用 React / Vue
- 零外部依赖：无 Google Fonts、无 CDN 脚本、无第三方图标库
- 图片走 Astro 内置 `<Image>`（sharp）

## 常用命令

```bash
npm install
npm run dev       # 本地开发
npm run check     # astro check，类型与模板诊断
npm run build     # 构建到 dist/
npm run preview   # 预览 dist/
```

Node 20.9 / npm 10 起步。

## 目录结构

```
src/
  assets/images/           powder-green.jpg / busbar-coated.jpg / texture-dark.jpg
  styles/global.css        全部设计令牌、基础样式、动效工具类
  i18n/
    types.ts               Dict 类型契约（完整嵌套结构）
    zh.ts  en.ts           全站可见文案
    index.ts               getDict / 路径与语言工具
  layouts/BaseLayout.astro head、SEO、Header、Footer、ChatWidget 挂载
  components/
    ui/                    Icon / Button / SectionHeading / Reveal
    Header.astro  Footer.astro  ChatWidget.astro  InquiryForm.astro  CtaBand.astro
    sections/{home,about,products,applications,quality,contact}/
  pages/
    index / about / products / applications / quality / contact
    en/ 同上六页
public/                    robots.txt、favicon.svg、og 分享图
server/chat-proxy.example.mjs   百炼接入示例
docs/DESIGN_SPEC.md
DEPLOY.md
```

## 约定

**文案**
- 所有可见文案来自 `src/i18n/zh.ts` 与 `src/i18n/en.ts`，组件内不得硬编码任何可见字符串。
- 英文不是逐字翻译，是母语级 B2B 改写。术语：epoxy insulation powder / busbar / sampling / Daejoo。

**合规红线**（详见规格书第 8 节）
- 禁止出现任何客户公司名称。
- UL 只能写「传承大州电子UL黄卡技术体系（RTI 105℃/130℃）」或 `UL Yellow Card technical system (inherited from Daejoo)`，禁止「已获UL认证 / UL certified」。
- 禁用广告法极限词（最、第一、顶级、王牌、国家级、唯一、绝对）。
- 全站可见文本禁止 em-dash 与 en-dash，范围一律用连字符，例如 `0.4-1.0 mm`。
- 中点分隔符 `·` 每行至多 1 处，仅认证清单行允许 3 处。
- 电话统一 `139 4711 3888`，邮箱 `sales@aketoo.com`。

**设计**
- 深色锁定，铜色是唯一点缀色，禁止浅色区块反转、禁止紫色 / 霓虹 / glow / 渐变文字。
- 圆角只有两档：交互控件 8px（`rounded-control`），面板与图片容器 14px（`rounded-panel`）。
- 关键数字一律 mono + tabular-nums，用 `.num` 工具类。
- eyebrow 标签有配额：每 3 个 section 至多 1 个，单页至多 3 个。
- 联系意图按钮文案全站唯一：`申请试样` / `Request a sample`。

**组件契约**

所有 section 组件统一接收：

```ts
interface Props {
  t: Dict;
  locale: 'zh' | 'en';
}
```

页面文件是薄壳：取字典 → BaseLayout → 按规格书顺序拼 section 组件，中英共用组件，仅 locale 不同。

**两个接口开关**

站点默认零后端，两处常量控制是否走服务端：

| 位置 | 常量 | 默认 | 置空时的行为 |
|---|---|---|---|
| `src/components/ChatWidget.astro` | `CHAT_API_ENDPOINT` | `null` | 本地 FAQ 关键词匹配，命中意图直接作答，未命中给电话与邮箱 |
| `src/components/InquiryForm.astro` | `FORM_ENDPOINT` | `null` | 降级为 `mailto:sales@aketoo.com`，自动拼装主题与正文 |

改成 `'/api/chat'` 与 `'/api/inquiry'` 即走后端，接法见 DEPLOY.md 第 4、5 节。`server/chat-proxy.example.mjs` 是零依赖的百炼代理示例。

## 上线

见 [`DEPLOY.md`](DEPLOY.md)：构建、nginx 配置、备案号替换、AI 客服与询盘接口接入。
