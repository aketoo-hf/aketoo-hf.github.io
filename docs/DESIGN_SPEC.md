# 亨丰（HENGFENG）官网设计规格书 v1.0

> 本文件是唯一设计与内容依据。所有实现必须严格遵循本规格。冲突时以本文件为准。
> 站点：www.aketoo.com ｜ 公司：东莞亨丰科技有限公司
> DONGGUAN HENGFENG TECHNOLOGY CO., LTD.

## 0. 定位与设计判读

- 页面类型：B2B 制造企业官网（landing + 内容页），受众为 AI 算力、新能源汽车、氢能、风电、高端工控行业的采购与研发工程师。
- 气质：trust-first、工程精密感、外资高端材料公司质感。不做花哨营销站。
- Dials：DESIGN_VARIANCE 4 / MOTION_INTENSITY 3 / VISUAL_DENSITY 5。
- 视觉方向：**深色主题锁定（dark-locked）+ 铜色单点缀**。页面内禁止区块级主题反转；
  `/preview/light/` 是独立的浅色对比版（`data-theme="light"` 覆盖令牌），定稿后删除。

## 1. 技术栈（不可变更）

- Astro 5，`output: 'static'`。Node 20.9 / npm 10 已就绪。
- Tailwind CSS v4（`@tailwindcss/vite` 插件方式，CSS 里 `@import "tailwindcss";`）。
- 不用 React/Vue。交互用原生 JS（`<script>` in Astro components）。
- **零外部依赖**：不引入 Google Fonts、任何 CDN 脚本、任何第三方图标 CDN。部署目标是中国大陆服务器。
- 图标：不引入图标库 npm 包也行——本站图标需求极少（菜单、箭头、聊天、电话、邮件、地址、关闭），统一用一套 1.5px stroke 的极简线性 SVG，集中放在 `src/components/ui/Icon.astro` 内以 name 切换。风格必须统一（24×24 viewBox、round cap）。这是唯一允许手写 SVG 的场景（功能图形，非装饰插画）。
- 图片：用 Astro 内置 `<Image>`（sharp）做优化。源图在 `assets-src/`，移入 `src/assets/images/` 使用。
- sitemap：`@astrojs/sitemap`。`site: 'https://www.aketoo.com'`。
- 代码注释：行内注释以小写字母开头（用户全局规范）。

## 2. 设计令牌（tokens，写入 global.css 的 @theme / CSS 变量）

深色锁定，全站一套：

| token | 值 | 用途 |
|---|---|---|
| `--color-bg` | `#0C0E10` | 页面底色（近黑，冷灰） |
| `--color-bg-raised` | `#14171B` | 面板/表单底 |
| `--color-bg-sunken` | `#08090B` | footer、深色带 |
| `--color-line` | `rgba(255,255,255,0.09)` | 发丝线 |
| `--color-line-strong` | `rgba(255,255,255,0.18)` | 强调分隔/输入框描边 |
| `--color-text` | `#F3F2EF` | 主文本（禁纯白） |
| `--color-text-dim` | `#A6ACB2` | 次文本（对 bg 对比度≈7:1） |
| `--color-text-faint` | `#828990` | 脚注、来源标注、字段标签（承载正文标签，须全表面达 AA，最低 5.08:1） |
| `--color-accent` | `#C97C4E` | 铜色，唯一点缀色（取自铜排图） |
| `--color-accent-strong` | `#E09563` | 铜色 hover/高亮态、深底上的强调文字 |
| `--color-accent-ink` | `#1A0F08` | 铜色按钮上的文字（近黑，对比>8:1） |

- 圆角体系锁定：交互控件（按钮/输入框/聊天气泡）`8px`；面板与图片容器 `14px`；其余直角。禁止混入 pill 或其它圆角。
- 阴影：深色主题基本不用投影，用发丝线 + 层级底色表达。允许 `inset 0 1px 0 rgba(255,255,255,0.06)` 的顶缘高光。
- 禁止紫色/霓虹渐变、禁止 glow。铜色是唯一彩色。绿色与蓝色只存在于产品照片里，不做 UI 色。
- 浅色对比版令牌见 `global.css` 的 `[data-theme="light"]` 块；打印样式强制白底黑字，见同文件 `@media print`。

## 3. 字体

- 全站系统字体栈（中国部署，零外链）：
  - 正文/标题：`"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",system-ui,-apple-system,"Segoe UI",sans-serif`
  - 数据/参数数字：`ui-monospace,"SF Mono","JetBrains Mono","Cascadia Mono",Menlo,monospace`，并设 `font-variant-numeric: tabular-nums`。所有关键数字（25、45、IATF 16949、105/130℃、≤17°、0.4-1.0mm、180℃/20min、V-0 等）一律 mono。
- 标题：中文标题 font-weight 600，`tracking-normal`（中文不加负字距）；纯拉丁大标题可 `tracking-tight`。
- h1 尺寸克制：`text-4xl md:text-5xl lg:text-6xl` 上限。正文 `text-base leading-relaxed max-w-[65ch]`。
- 小型字母间距标签（eyebrow，如 `HENGFENG TECHNOLOGY · SINCE 2001`）全站严格配额：**每 3 个 section 至多 1 个**，单页至多 3 个。

## 4. 全局部件

### 4.1 Header（每页相同）
- 高度 68px，sticky，`background: rgba(12,14,16,0.85)` + `backdrop-filter: blur(12px)`，底部发丝线。
- 左：品牌标。SVG 标记 = 一个铜色实心正方形旋转 45°（12×12，代表一粒粉末晶体）+ 文字 `HENGFENG`（拉丁，600，tracking-[0.08em]）+ 分隔竖线 + `亨丰`（en 版不显示中文字）。
- 中/右导航（桌面一行，6 项）：首页 / 关于亨丰 / 产品中心 / 应用领域 / 研发与品质 / 联系我们。EN：Home / About / Products / Applications / Quality / Contact。当前页导航项用铜色下划线（2px，offset 6px）标识。
- 最右：语言切换 `中 / EN`（链接到对应 locale 同路径页面）。
- <1024px：汉堡菜单，全屏下拉面板（同底色），列表纵排。菜单按钮必须可键盘操作、有 aria-label。

### 4.2 Footer（每页相同，bg-sunken）
- 三列（移动端纵排）：① 公司中英文全称 + 一句定位；② 站内导航链接；③ 联系方式（电话 13947113888、邮箱 sales@aketoo.com、**两处地址**：常平办公研发基地与企石生产基地，各带角色标签）。
- 底条：`© 2026 东莞亨丰科技有限公司` + 备案占位链接：`粤ICP备XXXXXXXX号`（href="https://beian.miit.gov.cn/" 注明 TODO 替换）+ `粤公网安备 XXXXXXXXXXXXX号`（TODO 注释）。
- Footer 数据来源脚注一行（text-faint）：`大州电子相关技术与资质信息源自其官方企业资料`。

### 4.3 AI 客服组件 `ChatWidget.astro`（全站挂载于 BaseLayout）
- 右下浮动圆角方形按钮（56px，bg-raised + 发丝线 + 铜色聊天图标），点击展开 360×520 面板（移动端全屏）。
- 面板头：`亨丰客服助手`＋副行 `演示版 · 正式版将接入AI大模型`。
- 逻辑（原生 JS，无依赖）：内置 FAQ 关键词匹配（意图：打样/样品、折弯/柔韧、固化条件、涂层厚度、认证/UL/ISO、联系方式/电话/地址、公司背景/大州），命中则回答（答案取自 i18n 字典），未命中回复引导语并给出电话+邮箱。首条欢迎消息 + 4 个快捷问题 chips（点击即发送）。
- 代码顶部 `const CHAT_API_ENDPOINT = null;`——注释说明设为 `'/api/chat'` 后走 fetch 到后端（阿里云百炼代理），null 时走本地 FAQ。消息区滚动、Enter 发送、输入框 AA 对比度、`prefers-reduced-motion` 下禁用展开动画。
- 会话不持久化（keep it simple）。

### 4.4 询盘表单 `InquiryForm.astro`（用于联系页）
- 字段：姓名*、公司名称*、联系电话*、电子邮箱、需求描述*（textarea，placeholder 提示写明应用场景/基材/厚度要求）。label 在输入框上方，错误文案在下方，禁止 placeholder 当 label。
- 提交逻辑：`const FORM_ENDPOINT = null;` 为 null 时降级为 `mailto:sales@aketoo.com` 拼装主题与正文并提示用户将通过邮件客户端发送；设置后 POST JSON。内联成功/失败态（非 toast）。前端必填校验 + 手机号粗校验。

## 5. i18n 架构

- Astro 内置 i18n：`defaultLocale: 'zh'`，`locales: ['zh','en']`，zh 在根路径，en 前缀 `/en/`。`prefixDefaultLocale: false`。
- 字典：`src/i18n/zh.ts`、`src/i18n/en.ts`，导出同一 `Dict` 类型（`src/i18n/types.ts` 定义完整嵌套结构：nav、footer、chat、form、home、about、products、applications、quality、contact、seo）。页面从 `src/i18n/index.ts` 的 `getDict(locale)` 取字典传给 section 组件。**所有可见文案必须来自字典**，组件内不得硬编码文案。
- 每页 `<html lang>` 正确；head 内输出 hreflang alternates（zh-CN、en、x-default→zh）；canonical 绝对地址。
- 英文文案：不是逐字翻译，是母语级 B2B 文案改写（简洁、无中式英语），术语：环氧绝缘粉末 = epoxy insulation powder；铜排 = busbar；打样 = sampling；大州电子 = Daejoo Electronic Materials（品牌名可写 Daejoo）。

## 6. 页面结构（文案以 i18n 字典为准）

> **文案的唯一来源是 `src/i18n/zh.ts` 与 `src/i18n/en.ts`**，本节只描述页面结构。
> 早期版本曾在此逐字抄录文案，导致改版后规格书与实现漂移，现已移除。
> 事实性表述依据《东莞亨丰科技有限公司 - 高性能绝缘新材料整体解决方案》官方资料。

| 页面 | 区块顺序 | 字典节点 |
|---|---|---|
| `/` | Hero, Stats, Domains(bento 1+4), Lineup(2 产品), Customers, Endorsement, CtaBand | `home.*` |
| `/about/` | 页头, Story(3 段), Strengths(6 点), DualAdvantage(25+45), CtaBand | `about.*` |
| `/products/` | 页头, ProductDetail x2（环氧粉末 / PVC 浸塑溶胶，第二个镜像翻转）, Process, CtaBand | `products.*` |

环氧粉末线带 4 项实测参数（`specs`，mono 瓦片，正文之后、性能清单之前）：折弯角度 ≤17°、涂层厚度 0.4-1.0 mm、固化 180℃/20min、阻燃 V-0（UL94）。参数沿用大州事业部原产线数据，已由公司确认仍适用。PVC 线 `specs` 为空数组，不渲染瓦片。
| `/applications/` | 页头, DomainSection x5（布局按 banner / split-left / stack / split-right / banner 轮换）, CtaBand | `applications.items` |
| `/quality/` | 页头, Framework(5 点), LabMatrix, Systems, CtaBand | `quality.*` |
| `/contact/` | 页头, ContactInfo(双地址) + InquiryForm, CtaBand | `contact.*` |

结构约束：
- 相邻区块不得使用同一布局家族；应用领域页的 5 个区块按索引轮换布局并交替 `bg-raised` 底色。
- bento 恰好 5 格对应 5 个应用领域，不留空格。
- 压在照片遮罩上的文字必须用 `.on-scrim*` 固定浅色，不跟随主题令牌。
- 客户名单只以纯文本呈现，不使用客户 logo（商标授权风险）。

## 7. SEO / 元信息

- 每页 title 模板：`{页面名} · 东莞亨丰科技有限公司`；首页：`亨丰科技 HENGFENG · 高性能绝缘新材料整体解决方案`。EN 相应改写。
- description 每页独立（字典 seo 节点，中文 60-90 字，英文 120-160 字符）。
- OG：og:title/description/type/url/image（用 `/og/busbar-epoxy-1200.jpg`，1200x630，绝对 URL）。
- 首页 JSON-LD `Organization`：name 中英、url、email、telephone、address（常平办公基地）、foundingDate 2001。
- 预览部署（github.io）自动输出 `noindex` 与 `Disallow: /`，由 `SITE_URL` 环境变量驱动。
- robots.txt 允许全部 + sitemap 地址。
- 语义化标签（header/nav/main/section/footer）、跳转链接 `跳到主要内容`。

## 8. 内容红线（合规，必须逐条遵守）

1. **认证表述**：只允许「承继/继承 IATF 16949、UL 105℃/130℃、ISO 体系」这类承接口径。**禁止**写「已获UL认证 / UL certified」，除非证书已正式转到亨丰名下。
2. **客户名单**：仅使用官方资料中列出的名称，纯文本呈现，保留「以上为部分合作客户，排名不分先后」免责声明。不得使用客户 logo 或商标图形。
3. 禁用广告法极限词：最、第一、顶级、国家级、唯一、绝对。（「高端」「旗舰」「核心」允许。）
4. 涉及大州电子的历史数据（45年、检测设备清单）需标注来源脚注，每页至多一条。
5. 全站可见文本**禁止 em-dash（—）与 en-dash（–）**；范围用连字符。中文不使用破折号，改用逗号或冒号。
6. 电话统一 `139 4711 3888`，邮箱 `sales@aketoo.com`，域名 `www.aketoo.com`（公司更名为亨丰后域名保持不变）。
7. 中点分隔符 `·` 每行至多 1 处；认证清单行与配套服务行为例外。
8. **图片来源**：只使用公司自有或已获授权的素材。企业介绍 PDF 中第三方公众号截图（带「知化汽车」水印的电池包图）已排除，不得使用。

## 9. 动效（MOTION 3）

- 仅三类：① CSS hover/active 态（按钮 `active:translate-y-px`、链接下划线过渡）；② 首屏 hero 淡入上移一次性入场（CSS animation，120ms delay 级联，仅 hero 内 3 个元素）；③ 滚动进入淡入（IntersectionObserver 单次触发，`opacity 0→1 / translateY 16px→0`，0.5s ease-out，每 section 一次，不做级联海）。
- 全部动效包裹在 `@media (prefers-reduced-motion: no-preference)` 内；聊天面板展开在 reduce 下瞬时。
- 禁止 marquee、视差、scroll-hijack、无限循环动画。

## 10. 性能与验收

- `npm run build` 零错误零警告通过；产物在 `dist/`。
- 图片经 Astro Image 输出 webp（保留 jpg fallback 由 Astro 处理），hero 图 `fetchpriority="high"`。texture 背景图可直接 `<img>` + loading lazy（首页 hero 背景除外）。
- 移动端 375px、平板 768px、桌面 1440px 三档无横向滚动、无布局破碎；nav 桌面单行。
- 页面（zh/en 各 6 页 + 浅色对比页，共 13 个 HTML）互链无死链；语言切换在每页正确对应，非翻译路由回落到该语言首页。
- 验收清单：em/en dash 扫描为 0；旧品牌「阿克图 / AKETOO」零出现；「已获UL认证 / UL certified」零出现；广告法极限词零出现；eyebrow 配额；CTA 意图唯一（「申请试样」）；全站文本 WCAG AA（压在照片遮罩上的文字需按实际像素采样核验，DOM 取底色会误报）；圆角体系一致；375/1440 无横向溢出。

## 11. 目录结构（scaffold 建立，页面 agent 按此填充，避免文件冲突）

```
src/
  assets/images/{busbar-epoxy-green.jpg,busbar-pvc-blue.jpg,powder-green.jpg,texture-dark.jpg}
  styles/global.css
  i18n/{types.ts,index.ts,zh.ts,en.ts}
  layouts/BaseLayout.astro        # head/seo/header/footer/chatwidget 挂载
  components/
    ui/{Icon.astro,Button.astro,SectionHeading.astro,Reveal.astro}
    Header.astro  Footer.astro  ChatWidget.astro  InquiryForm.astro  CtaBand.astro
    sections/
      home/{Hero.astro,Stats.astro,Domains.astro,Flagship.astro,Endorsement.astro}
      about/{Story.astro,Timeline.astro,Facility.astro,Footprint.astro}
      products/{FlagshipDetail.astro,Features.astro,Process.astro}
      applications/{AiComputing.astro,Busbar.astro,Passive.astro,Automotive.astro}
      quality/{Investment.astro,LabMatrix.astro,Systems.astro}
      contact/{ContactInfo.astro}
  pages/
    {index,about,products,applications,quality,contact}.astro
    en/{index,about,products,applications,quality,contact}.astro
public/robots.txt
docs/DESIGN_SPEC.md（本文件）
DEPLOY.md  README.md
server/chat-proxy.example.mjs     # 阿里云百炼接入示例（Node http，不装依赖）
```

- 页面文件是薄壳：取字典 → BaseLayout → 顺序拼 section 组件。zh/en 页面共用组件，仅传 locale。
- `CtaBand.astro`、行动带文案全站共享（dict.common.cta）。

## 12. DEPLOY.md 要点（交付文档，中文）

1. 构建与产物：`npm ci && npm run build` → `dist/` 全静态。
2. 阿里云轻量服务器（深圳/广州）+ nginx 配置示例（gzip、http2、443 证书路径、`try_files`、缓存头：html no-cache，assets 30d immutable）。
3. 备案：footer 备案号替换位置（i18n 字典 footer.icp），公安备案说明。
4. AI 客服正式接入：百炼(通义千问) API Key 放服务器环境变量 → 运行 `server/chat-proxy.example.mjs`（或 pm2）→ nginx 反代 `/api/chat` → 前端 `CHAT_API_ENDPOINT` 改为 `'/api/chat'`。附知识库建议（上传企业介绍与TDS做RAG）。
5. 询盘表单接入：同理反代 `/api/inquiry`，或临时保持 mailto 降级。
