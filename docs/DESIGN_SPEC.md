# 阿克图（AKETOO）官网设计规格书 v1.0

> 本文件是唯一设计与内容依据。所有实现必须严格遵循本规格。冲突时以本文件为准。
> 站点：www.aketoo.com ｜ 公司：阿克图（东莞）电子绝缘材料有限公司
> AKETOO (DONGGUAN) ELECTRONIC INSULATION MATERIALS CO., LTD.

## 0. 定位与设计判读

- 页面类型：B2B 制造企业官网（landing + 内容页），受众为新能源电池、储能、算力电气、被动元器件企业的采购与研发工程师。
- 气质：trust-first、工程精密感、外资高端材料公司质感。不做花哨营销站。
- Dials：DESIGN_VARIANCE 4 / MOTION_INTENSITY 3 / VISUAL_DENSITY 5。
- 视觉方向由品牌素材决定（三张深色调图片）：**深色主题锁定（dark-locked）+ 铜色单点缀**。全站唯一主题，禁止任何浅色区块反转。

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
| `--color-text-faint` | `#6E757C` | 脚注、来源标注（仅用于≥14px 非关键文本） |
| `--color-accent` | `#C97C4E` | 铜色，唯一点缀色（取自铜排图） |
| `--color-accent-strong` | `#E09563` | 铜色 hover/高亮态、深底上的强调文字 |
| `--color-accent-ink` | `#1A0F08` | 铜色按钮上的文字（近黑，对比>8:1） |

- 圆角体系锁定：交互控件（按钮/输入框/聊天气泡）`8px`；面板与图片容器 `14px`；其余直角。禁止混入 pill 或其它圆角。
- 阴影：深色主题基本不用投影，用发丝线 + 层级底色表达。允许 `inset 0 1px 0 rgba(255,255,255,0.06)` 的顶缘高光。
- 禁止紫色/霓虹渐变、禁止 glow。铜色是唯一彩色。绿色只存在于粉末照片里，不做 UI 色。

## 3. 字体

- 全站系统字体栈（中国部署，零外链）：
  - 正文/标题：`"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",system-ui,-apple-system,"Segoe UI",sans-serif`
  - 数据/参数数字：`ui-monospace,"SF Mono","JetBrains Mono","Cascadia Mono",Menlo,monospace`，并设 `font-variant-numeric: tabular-nums`。所有关键数字（45、17°、180℃、12,980㎡、105℃/130℃ 等）一律 mono。
- 标题：中文标题 font-weight 600，`tracking-normal`（中文不加负字距）；纯拉丁大标题可 `tracking-tight`。
- h1 尺寸克制：`text-4xl md:text-5xl lg:text-6xl` 上限。正文 `text-base leading-relaxed max-w-[65ch]`。
- 小型字母间距标签（eyebrow，如 `EPOXY INSULATION POWDER`）全站严格配额：**每 3 个 section 至多 1 个**，单页至多 3 个。

## 4. 全局部件

### 4.1 Header（每页相同）
- 高度 68px，sticky，`background: rgba(12,14,16,0.85)` + `backdrop-filter: blur(12px)`，底部发丝线。
- 左：品牌标。SVG 标记 = 一个铜色实心正方形旋转 45°（12×12，代表一粒粉末晶体）+ 文字 `AKETOO`（拉丁，600，tracking-[0.08em]）+ 分隔竖线 + `阿克图`（en 版不显示中文字）。
- 中/右导航（桌面一行，6 项）：首页 / 关于阿克图 / 产品中心 / 应用领域 / 研发与品质 / 联系我们。EN：Home / About / Products / Applications / Quality / Contact。当前页导航项用铜色下划线（2px，offset 6px）标识。
- 最右：语言切换 `中 / EN`（链接到对应 locale 同路径页面）。
- <1024px：汉堡菜单，全屏下拉面板（同底色），列表纵排。菜单按钮必须可键盘操作、有 aria-label。

### 4.2 Footer（每页相同，bg-sunken）
- 三列（移动端纵排）：① 公司中英文全称 + 一句定位；② 站内导航链接；③ 联系方式（电话 13947113888、邮箱 sales@aketoo.com、地址 东莞市企石镇博夏村江南大道东部工业园莞城园区）。
- 底条：`© 2026 阿克图（东莞）电子绝缘材料有限公司` + 备案占位链接：`粤ICP备XXXXXXXX号`（href="https://beian.miit.gov.cn/" 注明 TODO 替换）+ `粤公网安备 XXXXXXXXXXXXX号`（TODO 注释）。
- Footer 数据来源脚注一行（text-faint）：`部分历史数据与资质信息源自韩国大州电子官方企业资料（Ver.5 · 2025.3）`。

### 4.3 AI 客服组件 `ChatWidget.astro`（全站挂载于 BaseLayout）
- 右下浮动圆角方形按钮（56px，bg-raised + 发丝线 + 铜色聊天图标），点击展开 360×520 面板（移动端全屏）。
- 面板头：`阿克图客服助手`＋副行 `演示版 · 正式版将接入AI大模型`。
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

## 6. 页面规格与全部中文文案

> 英文版由实现者按第 5 节标准改写，结构一致。以下文案已通过合规审校，**不得擅自增改事实性表述**（见第 8 节红线）。

### 6.1 首页 `/`（sections/home/）

**S1 Hero（asymmetric split，非居中）**
- 左 55%：
  - eyebrow（本页唯一）：`EPOXY INSULATION POWDER`（mono，11px，tracking-[0.18em]，text-faint）
  - h1：`高端环氧绝缘粉末` 换行 `研发与制造`（两行锁定）
  - 副文（≤20词）：`承接韩国KOSDAQ上市企业大州电子东莞粉末事业部，四十五年绝缘材料技术积淀。`
  - CTA：主按钮 `申请试样`（铜底、accent-ink 文字，链到 /contact/#inquiry）+ 次按钮 `了解产品`（描边线框，链到 /products/）。主按钮文案全站唯一表达"联系/试样"意图，footer 与其它页复用同一文案。
  - Hero 必须首屏完整呈现（headline+副文+CTA 无需滚动），顶部留白 ≤ pt-24。
- 右 45%：`powder-green.jpg`（圆角14px 容器，微弱发丝线描边）。此图为 LCP，`loading="eager"` + priority。
- 背景：底色之上叠 `texture-dark.jpg` 低透明度（opacity 0.25，右侧渐隐 mask），`pointer-events-none`。
- alt：`深绿色环氧绝缘粉末堆` / `Pile of green epoxy insulation powder`。

**S2 数据带（trust numbers）**
- 一行四组（移动端 2×2），mono 大数字 + 中文短标签，组间发丝竖线分隔，无卡片：
  - `45` 年功能绝缘材料积淀
  - `1986` 年起环氧粉体量产
  - `105/130` ℃ · UL RTI 技术体系
  - `12,980` ㎡ 东莞生产基地

**S3 应用领域（bento，4 cell 不对称：左1大 + 右2×2其中一格并置，即 1 大 + 3 小）**
- 大格（带 `busbar-coated.jpg` 作为背景图底、深色渐变压暗保证文字 AA）：`AI算力中心高压构件` ｜ 描述：`算力服务器电气部件与高压金属件绝缘，主打高柔韧性新品。`
- 小格 ×3（bg-raised，其中一格加铜色 8% tint 背景做差异化）：
  - `电力母排与动力电池铜排` ｜ `新能源汽车动力电池连接铜排、电力母排绝缘包覆。`
  - `被动电子元器件` ｜ `电容、电阻、电感、压敏电阻器等绝缘封装。`
  - `开关与汽车电气零部件` ｜ `开关主回路零配件绝缘、汽车励磁线圈包覆。`
- 每格整体可点击 → /applications/ 对应锚点。格内无图片叠加文字标签、无角标编号。

**S4 主打产品（full-width split，与 S3 布局家族不同）**
- 左图 `powder-green.jpg` 裁切窄条或复用（与 hero 不同裁切比例 4:3），右文：
  - h2：`高柔韧性环氧绝缘粉末`
  - 三个关键参数（mono）：`折弯角度 ≤ 17°`、`涂层厚度 0.4 – 1.0 mm 定制`、`固化 180 ℃ / 20 min`
  - 一句：`抗冷热交变，杜绝涂层开裂，面向AI算力中心与新能源高压场景。`
  - 文字链：`查看产品详情 →`（箭头用 Icon 组件，非字符）
**S5 技术背书（纵排 statement，无卡片）**
- h2：`源自大州电子的完整技术承接`
- 段落：`阿克图完整承接大州电子东莞高分子材料事业部的量产配方、生产工艺、核心设备与质量评价体系，原事业部客户业务正逐步转接阿克图。`
- 其下一行认证列表（发丝线分隔的行内清单，非徽章墙）：`ISO 9001 · ISO 14001 · IATF 16949 · UL黄卡技术体系（传承）`（中点分隔符此行仅出现这一处）
- 文字链：`了解公司背景 →`（/about/）

**S6 行动带（CTA band，bg-raised 全宽，居中允许——manifesto 例外）**
- h2：`欢迎垂询试样与配方定制`
- 一句：`提供配方调整、试样打样到量产落地的全流程技术支持。`
- 主按钮 `申请试样`；旁列电话与邮箱（mono）。

### 6.2 关于阿克图 `/about/`（sections/about/）

- S1 页头：h1 `关于阿克图`；lead 段：`阿克图（东莞）电子绝缘材料有限公司，承接韩国KOSDAQ上市企业大州电子东莞高分子材料事业部，专注高端环氧绝缘粉末的研发、生产与销售。`
- S2 承接故事（两段正文，max-w-[65ch]）：
  - `大州电子自1981年在韩国创立，1986年起持续研发生产环氧绝缘粉体，全球布局韩国、上海、青岛、东莞、台湾、越南生产基地，研发人员占比25%，持有数百项授权专利。`
  - `2026年，阿克图完整承接其东莞粉末事业部：全套量产配方、成熟生产工艺、核心生产设备、UL黄卡RTI 105℃/130℃技术体系及全套质量评价分析检测设备，并逐步承接原事业部客户的生产与服务。`
- S3 时间线（垂直，左侧年份 mono，右侧事件，发丝线轴）：
  - 1981 大州电子于韩国京畿道创立
  - 1986 环氧绝缘粉体研发与量产启动
  - 2004 大州电子KOSDAQ上市；东莞大州成立
  - 2017 东莞新工厂竣工，产能扩张
  - 2022 越南大州成立，布局东南亚
  - 2026 阿克图承接东莞环氧粉末事业部
- S4 基地数据（2×2 数据网格，mono 数字，无卡片、发丝线分隔）：
  - 注册资本 `USD 10.2M`；总投资 `USD 20M+`；占地 `12,980 ㎡`；建筑 `10,355 ㎡`
- S5 市场布局（三栏纵排文本，标题+两行描述）：`立足珠三角`（生产基地设于东莞，依托珠三角完整制造业产业链，快速响应华南客户）/ `服务全国`（面向全国新能源、储能、算力电气行业客户，承接原事业部存量业务）/ `辐射东南亚`（依托大州全球基地网络，服务出海制造企业）。
- S6 页尾复用行动带（同首页 S6 组件，文案共享）。
- 本页数据来源脚注置于 S4 下方。

### 6.3 产品中心 `/products/`（sections/products/）

- S1 页头：h1 `产品中心`；lead：`电气、电子绝缘涂料核心原料环氧树脂化合物，具备优异的机械强度、耐湿性、耐热性与电气特性。`
- S2 旗舰产品（split：右 `powder-green.jpg`，左内容）：
  - 标签行（非eyebrow，普通小字 text-dim）：`旗舰新品 · AI算力中心专用`（此处中点1个，合规）
  - h2：`高柔韧性环氧绝缘粉末`
  - 段：`针对AI算力中心高压构件与新能源高压场景开发，抗冷热交变，杜绝涂层开裂。`
  - 关键参数 2×2 展示瓦片（bg-raised，14px 圆角，mono 大数字 + 小标签）：
    - `≤ 17°` 折弯角度 ｜ `0.4–1.0 mm` 涂层厚度按需定制 ｜ `180℃ / 20min` 固化参考条件 ｜ `V-0` 阻燃等级（UL94）
- S3 通用特性（分组块状，3 组，每组小标题+2-3行清单，组间留白而非满行分隔线）：
  - `电气性能`：高绝缘耐压 / 电气特性优异
  - `机械与环境`：耐热、耐湿、耐高温 / 机械保护性能强
  - `体系与定制`：传承UL黄卡技术体系（RTI 105℃/130℃）/ 通过ISO 9001·ISO 14001·IATF 16949 / 支持定制化配方开发，适配特殊工况
- S4 定制流程（三步横排，动词命名，禁止"步骤1/2/3"字样；用铜色序号数字 mono 01 02 03 是允许的吗？——不允许，skill 禁编号眉标；改为纯动词标题）：
  - `沟通工况` 明确应用场景、基材、厚度与耐压要求 → `打样验证` 提供试样与配方调整，配合客户测试 → `量产交付` 批量生产与持续品质跟踪
  - 布局：横向三栏，栏间箭头图标，移动端纵排。
- S5 行动带（复用，文案微调首行为 `索取TDS与试样`？——否：CTA意图唯一性，仍用 `申请试样`，副文提及可索取技术资料）。

### 6.4 应用领域 `/applications/`（sections/applications/）

- S1 页头：h1 `应用领域`；lead：`用于电子装置与组件的高可靠电绝缘，覆盖从算力基础设施到汽车电气的关键场景。`
- 四个领域 section，锚点 id：`ai-computing` / `busbar` / `passive-components` / `automotive`。布局节奏（避免之字形超2连）：
  - S2 AI算力中心高压构件：full-width 文本段 + 底部窄横幅图（texture-dark.jpg 裁切，装饰性 alt=""）。内容：`算力服务器电气部件、高压金属件绝缘。高柔韧性新品主打赛道，自2020年起投入研发。`
  - S3 电力母排与动力电池铜排：split 左图（busbar-coated.jpg）右文：`新能源汽车动力电池连接铜排、电力母排绝缘包覆，自2015年起量产。`＋补充一句涂层价值：`绝缘粉末涂层在高压环境下提供可靠电气隔离与机械保护。`
  - S4 被动电子元器件：纯文本纵排（无图）：`电容、电阻、电感、压敏电阻器等大容量电容器绝缘封装，环氧涂层长期服务全球被动元器件制造企业。`
  - S5 开关与汽车电气零部件：split 右对齐文本 + 左侧 mono 年份大字 `2005`（量产起始年做视觉锚点）：`开关一次主回路零配件绝缘、汽车用励磁线圈包覆，自2005年起量产。`
- S6 行动带复用。

### 6.5 研发与品质 `/quality/`（sections/quality/）

- S1 页头：h1 `研发与品质`；lead：`继承大州电子全套质量评价分析设备，覆盖来料验证、微观结构、热性能表征到成品可靠性评价的全流程。`
- S2 研发投入（双数字并排，mono 特大）：`10%` 销售额持续投入研发 ｜ `25%` 研发人员占比（注明为大州电子集团数据，脚注）
- S3 检测能力矩阵（四组分组块，组标题 + 设备清单行，设备名 mono；组间大留白）：
  - `成分分析`：ICP-OES 元素分析 / FT-IR 红外光谱 / XRF 荧光光谱
  - `粒子分析`：SEM-EDX 扫描电镜 / PSA 粒度分析 / BET 比表面积
  - `热分析`：DSC 差示扫描量热 / TGA 热重分析
  - `信赖性评价`：温湿度循环 / 冷热冲击 / PCT高压加速老化
- S4 设备与体系一段：`检测设备源自 PerkinElmer、Shimadzu、FRITSCH、Emcrafts 等国际品牌。质量体系通过 ISO 9001、ISO 14001 与 IATF 16949 汽车行业认证，传承大州电子UL黄卡技术体系。`
- S5 行动带复用。
- 数据来源脚注。

### 6.6 联系我们 `/contact/`（sections/contact/）

- S1 页头：h1 `联系我们`；lead：`欢迎垂询试样、配方定制与技术合作。`
- S2 双栏（移动纵排）：
  - 左：联系信息列表（Icon + 行）：电话 `139 4711 3888`（tel: 链接）/ 邮箱 `sales@aketoo.com`（mailto:）/ 地址 `东莞市企石镇博夏村江南大道东部工业园莞城园区`。下方小段：`如需到访或安排打样，请提前电话或邮件预约。`
  - 右：`InquiryForm`（锚点 id="inquiry"）。
- 不放地图 iframe（外链依赖），地址纯文本。

## 7. SEO / 元信息

- 每页 title 模板：`{页面名} · 阿克图（东莞）电子绝缘材料有限公司`；首页：`阿克图 AKETOO · 高端环氧绝缘粉末研发与制造`。EN 相应改写（`AKETOO · High-Performance Epoxy Insulation Powders`）。
- description 每页独立（字典 seo 节点，中文 60-90 字，英文 120-160 字符）。
- OG：og:title/description/type/url/image（用 powder-green 1024 图，绝对 URL）。
- 首页 JSON-LD `Organization`：name 中英、url、email、telephone、address（东莞）。
- robots.txt 允许全部 + sitemap 地址。
- 语义化标签（header/nav/main/section/footer）、跳转链接 `跳到主要内容`。

## 8. 内容红线（合规，必须逐条遵守）

1. **禁止出现任何客户名称**（LG、三星、华为、TDK、国巨、风华高科等一律不得出现）。只允许"全球头部新能源电池、被动元器件企业"这类不点名表述。
2. UL 表述只允许：`传承大州电子UL黄卡技术体系（RTI 105℃/130℃）`或`UL黄卡技术体系（传承）`。**禁止**写"已获UL认证/UL certified"。EN 用 `UL Yellow Card technical system (inherited from Daejoo)`。
3. 禁用广告法极限词：最、第一、顶级、王牌、国家级、唯一、绝对。（"高端""主打""旗舰"允许。）
4. 涉及大州电子的规模数据（45年、530名员工、专利数、10%/25%）出现处需有本页脚注`数据源自韩国大州电子官方企业资料（Ver.5 · 2025.3）`（每页至多一条，置于相关 section 或 footer）。
5. 全站（中英文、代码注释除外的可见文本）**禁止 em-dash（—）与 en-dash（–）**；范围用连字符（0.4-1.0 mm 可用 `–`吗？不可，用 `0.4-1.0 mm` 或 `0.4 ~ 1.0 mm`，统一选连字符 `-`）。中文破折号不使用，改用逗号或冒号。
6. 电话统一格式 `139 4711 3888`，邮箱 `sales@aketoo.com`，域名 `www.aketoo.com`。
7. 中点分隔符 `·` 每行至多 1 处（认证清单行例外允许 3 处，全站仅此一处例外）。

## 9. 动效（MOTION 3）

- 仅三类：① CSS hover/active 态（按钮 `active:translate-y-px`、链接下划线过渡）；② 首屏 hero 淡入上移一次性入场（CSS animation，120ms delay 级联，仅 hero 内 3 个元素）；③ 滚动进入淡入（IntersectionObserver 单次触发，`opacity 0→1 / translateY 16px→0`，0.5s ease-out，每 section 一次，不做级联海）。
- 全部动效包裹在 `@media (prefers-reduced-motion: no-preference)` 内；聊天面板展开在 reduce 下瞬时。
- 禁止 marquee、视差、scroll-hijack、无限循环动画。

## 10. 性能与验收

- `npm run build` 零错误零警告通过；产物在 `dist/`。
- 图片经 Astro Image 输出 webp（保留 jpg fallback 由 Astro 处理），hero 图 `fetchpriority="high"`。texture 背景图可直接 `<img>` + loading lazy（首页 hero 背景除外）。
- 移动端 375px、平板 768px、桌面 1440px 三档无横向滚动、无布局破碎；nav 桌面单行。
- 页面（含 en 全部 12 个 HTML）互链无死链；语言切换在每页正确对应。
- 验收清单（集成审查 agent 逐项检查）：em-dash 扫描为 0（`grep -rn '—\|–' dist/*.html` 类似手段）；eyebrow 配额；CTA 意图唯一（"申请试样"是唯一联系意图按钮文案）；按钮/表单对比度；圆角体系一致；客户名零出现；"UL认证"字样零出现。

## 11. 目录结构（scaffold 建立，页面 agent 按此填充，避免文件冲突）

```
src/
  assets/images/{powder-green.jpg,busbar-coated.jpg,texture-dark.jpg}
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
