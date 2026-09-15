import type { Dict } from './types';

// 中文字典：文案依据《东莞亨丰科技有限公司 - 高性能绝缘新材料整体解决方案》官方资料
// 不得擅自增改事实性表述，合规红线见 docs/DESIGN_SPEC.md 第 8 节
export const zh: Dict = {
  locale: 'zh',
  htmlLang: 'zh-CN',

  nav: {
    home: '首页',
    about: '关于亨丰',
    products: '产品中心',
    applications: '应用领域',
    quality: '研发与品质',
    contact: '联系我们',
    menuOpen: '打开导航菜单',
    menuClose: '关闭导航菜单',
    menuLabel: '主导航',
    langLabel: '语言切换',
    langZh: '中',
    langEn: 'EN',
    skipToContent: '跳到主要内容',
    brandLatin: 'HENGFENG',
    brandLocal: '亨丰科技',
    brandHomeLabel: '亨丰科技首页',
  },

  footer: {
    tagline: '高性能绝缘新材料整体解决方案提供商，环氧绝缘粉末与PVC绝缘浸塑溶胶。',
    navHeading: '站内导航',
    contactHeading: '联系方式',
    companyHeading: '公司',
    companyNameLocal: '东莞亨丰科技有限公司',
    companyNameLatin: 'DONGGUAN HENGFENG TECHNOLOGY CO., LTD.',
    copyright: '© 2026 东莞亨丰科技有限公司',
    icpText: '粤ICP备XXXXXXXX号',
    icpHref: 'https://beian.miit.gov.cn/',
    icpNote: 'TODO 替换为正式备案号',
    policeText: '粤公网安备 XXXXXXXXXXXXX号',
    policeHref: 'https://beian.mps.gov.cn/',
    policeNote: 'TODO 替换为正式公安备案号与链接',
    sourceNote: '大州电子相关技术与资质信息源自其官方企业资料',
  },

  common: {
    cta: {
      heading: '欢迎垂询试样与配方定制',
      body: '提供定制配方开发、快速样品打样到量产落地的全流程技术支持，并可索取技术资料。',
      button: '申请试样',
      buttonHref: '/contact/#inquiry',
      phoneLabel: '电话',
      emailLabel: '邮箱',
    },
    buttons: {
      requestSample: '申请试样',
      exploreProducts: '了解产品',
      viewProductDetail: '查看产品详情',
      learnAboutCompany: '了解公司背景',
      backToTop: '回到顶部',
    },
    contact: {
      phone: '139 4711 3888',
      phoneHref: 'tel:+8613947113888',
      phoneLabel: '电话',
      email: 'sales@aketoo.com',
      emailHref: 'mailto:sales@aketoo.com',
      emailLabel: '邮箱',
      addresses: [
        {
          label: '办公 & 研发基地（自有）',
          value: '广东省东莞市常平镇环常北路568号常平珠宝文化产业中心25栋',
        },
        {
          label: '生产基地（原韩国大州厂区）',
          value: '东莞市企石镇博夏村江南大道东部工业园莞城园区',
        },
      ],
      addressLabel: '地址',
    },
    sourceFootnote: '大州电子相关技术与资质信息源自其官方企业资料',
  },

  chat: {
    launcherLabel: '打开在线客服',
    panelLabel: '亨丰科技客服助手对话窗口',
    title: '亨丰科技客服助手',
    welcome:
      '您好，我是亨丰科技客服助手。可以为您介绍环氧绝缘粉末与PVC绝缘浸塑溶胶的产品性能、打样流程与联系方式。',
    chips: ['如何申请试样？', '两款产品有什么区别？', '折弯性能如何？', '固化条件是什么？'],
    faq: [
      {
        id: 'sampling',
        keywords: ['打样', '试样', '样品', '送样', '取样', 'sample'],
        answer:
          '我们提供定制配方开发、快速样品打样与全程工艺技术支持。请提供应用场景、基材类型与工艺要求，我们会安排打样并配合您的测试验证。可致电 139 4711 3888 或发送邮件至 sales@aketoo.com。',
      },
      {
        id: 'products',
        keywords: ['产品', '区别', '几种', '粉末', 'pvc', '浸塑', '溶胶', '选型', 'product'],
        answer:
          '我们有两条产品线：一是AI算力专用环氧绝缘粉末，面向超大长尺寸铜铝母排浸涂工艺，柔韧性优异、耐反复弯折；二是高性能PVC绝缘浸塑溶胶，耐高低温、防腐防护优异，适配各类精密金属结构绝缘包覆。具体选型可告知您的工况，我们给出建议。',
      },
      {
        id: 'flexibility',
        keywords: ['折弯', '柔韧', '弯曲', '开裂', '母排', '铜排', '角度', 'flex', 'busbar'],
        answer:
          '高柔韧性长母排专用环氧绝缘粉末的折弯角度可达 17° 以内，耐反复弯折、抗冷热交变，杜绝涂层开裂，专为AI算力中心超大铜铝长母排浸涂工艺定制研发。',
      },
      {
        id: 'certification',
        keywords: ['认证', '资质', '体系', 'ul', 'iso', 'iatf', '汽车', '温级'],
        answer:
          '环氧粉末板块承继韩国大州电子的国际认证体系，包含IATF 16949汽车行业体系、UL 105℃与UL 130℃双温级安全认证及全套ISO国际体系。',
      },
      {
        id: 'curing',
        keywords: ['固化', '烘烤', '温度', '工艺', '180', 'cure'],
        answer:
          '环氧绝缘粉末的固化参考条件为 180 ℃ / 20 min。实际工艺可根据基材与涂层厚度调整，我们会配合验证。',
      },
      {
        id: 'thickness',
        keywords: ['厚度', '涂层', '膜厚', '涂覆', 'mm', 'thickness'],
        answer:
          '环氧绝缘粉末的涂层厚度 0.4-1.0 mm 按需定制，阻燃等级 V-0（UL94）。请告知应用场景与耐压要求，我们据此推荐配方与工艺窗口。',
      },
      {
        id: 'custom',
        keywords: ['定制', '配方', '开发', '调整', '微调', 'custom'],
        answer:
          '两条产品线均支持配方定制：环氧粉末提供定制配方开发，PVC浸塑溶胶提供配方微调定制，并均配套快速打样与全程技术支持。请告知基材、工况与性能要求。',
      },
      {
        id: 'contact',
        keywords: ['联系', '电话', '地址', '邮箱', '邮件', '怎么找', '在哪', 'contact', 'phone'],
        answer:
          '电话 139 4711 3888，邮箱 sales@aketoo.com。办公与研发基地位于东莞市常平镇环常北路568号常平珠宝文化产业中心25栋，生产基地位于东莞市企石镇博夏村江南大道东部工业园莞城园区。到访或安排打样请提前预约。',
      },
      {
        id: 'company',
        keywords: ['公司', '背景', '大州', '历史', '介绍', '收购', '并购', 'daejoo', 'about'],
        answer:
          '东莞亨丰科技有限公司深耕绝缘新材料行业25年，战略收购韩国KOSDAQ上市企业大州电子的东莞高分子粉末事业部，全盘承接其配方数据库、核心技术、工业化产线、技术团队与国际认证体系，并保留原厂区原址量产。',
      },
    ],
    fallback:
      '这个问题需要工程师进一步确认。请致电 139 4711 3888 或发送邮件至 sales@aketoo.com，我们会尽快回复。',
    inputLabel: '输入您的问题',
    inputPlaceholder: '请输入您的问题',
    sendLabel: '发送',
    closeLabel: '关闭对话窗口',
    youLabel: '您',
    botLabel: '客服助手',
  },

  form: {
    heading: '在线询盘',
    intro: '填写以下信息，我们的工程与销售团队会尽快与您联系。',
    requiredMark: '必填',
    optionalMark: '选填',
    labels: {
      name: '姓名',
      company: '公司名称',
      phone: '联系电话',
      email: '电子邮箱',
      message: '需求描述',
    },
    placeholders: {
      name: '请输入您的姓名',
      company: '请输入公司全称',
      phone: '请输入手机或座机号码',
      email: '请输入常用邮箱',
      message: '请简述产品方向（环氧粉末或PVC浸塑溶胶）、应用场景、基材类型与性能要求',
    },
    errors: {
      name: '请填写姓名',
      company: '请填写公司名称',
      phone: '请填写联系电话',
      phoneFormat: '请填写有效的联系电话',
      email: '请填写有效的电子邮箱',
      message: '请填写需求描述',
    },
    submit: '提交询盘',
    submitting: '正在提交',
    success: '已收到您的询盘，我们会在一个工作日内与您联系。',
    failure: '提交未成功，请稍后重试，或直接致电 139 4711 3888。',
    mailtoNote: '已为您打开邮件客户端，请确认后发送至 sales@aketoo.com 即可完成询盘。',
    mailtoSubject: '亨丰科技询盘',
    mailtoIntro: '以下为通过 www.aketoo.com 提交的询盘信息：',
  },

  seo: {
    siteName: '东莞亨丰科技有限公司',
    ogImage: '/og/busbar-epoxy-1200.jpg',
    ogImageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
    home: {
      title: '亨丰科技 HENGFENG · 高性能绝缘新材料整体解决方案',
      description:
        '东莞亨丰科技有限公司深耕绝缘新材料行业25年，战略收购韩国大州电子东莞高分子粉末事业部，提供AI算力专用环氧绝缘粉末与PVC绝缘浸塑溶胶，服务AI算力、新能源汽车、氢能、风电与高端工控领域。',
    },
    about: {
      title: '关于亨丰 · 东莞亨丰科技有限公司',
      description:
        '亨丰科技25年本土绝缘材料产业经验，叠加韩国大州电子45年全球化技术积淀。全盘承接大州东莞高分子粉末事业部的配方数据库、核心技术、工业化产线、技术团队与国际认证体系，原厂区原址持续量产。',
    },
    products: {
      title: '产品中心 · 东莞亨丰科技有限公司',
      description:
        '高柔韧性长母排专用环氧绝缘粉末，折弯角度17度以内，涂层厚度0.4-1.0毫米按需定制，固化参考条件180摄氏度20分钟，阻燃等级V-0；高性能PVC绝缘浸塑溶胶，耐高低温、绝缘阻值稳定、防腐防护优异。均支持配方定制与快速打样。',
    },
    applications: {
      title: '应用领域 · 东莞亨丰科技有限公司',
      description:
        '聚焦AI算力中心、新能源汽车、氢能汽车与氢能装备、风电装备、高端工控与充电系统五大高端产业，提供母排绝缘防护与精密金属结构绝缘包覆的整体材料解决方案。',
    },
    quality: {
      title: '研发与品质 · 东莞亨丰科技有限公司',
      description:
        '完整继承韩国大州电子成熟工艺标准与全套精密检测平台，承继IATF 16949汽车工业体系与UL双温级国际安全认证，全项理化、耐温、耐压与绝缘性能专项检测，严控核心指标。',
    },
    contact: {
      title: '联系我们 · 东莞亨丰科技有限公司',
      description:
        '欢迎垂询试样、配方定制与技术合作。电话139 4711 3888，邮箱sales@aketoo.com。办公与研发基地位于东莞常平，生产基地位于东莞企石原大州厂区，到访与打样请提前预约。',
    },
  },

  home: {
    hero: {
      eyebrow: 'HENGFENG TECHNOLOGY · SINCE 2001',
      titleLine1: '高性能绝缘新材料',
      titleLine2: '整体解决方案',
      subtitle: '深耕绝缘新材料25年，战略收购韩国大州电子东莞高分子粉末事业部。',
      imageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
    },
    stats: {
      heading: '核心数据',
      items: [
        { value: '25', unit: '年', label: '本土绝缘材料行业深耕' },
        { value: '45', unit: '年', label: '大州电子全球化技术积淀' },
        { value: 'IATF', unit: '16949', label: '汽车行业体系认证' },
        { value: '105/130', unit: '℃', label: 'UL 双温级安全认证' },
      ],
    },
    domains: {
      heading: '重点应用领域',
      feature: {
        title: 'AI算力中心',
        body: '超大长母排高柔韧绝缘专属解决方案，面向算力中心铜铝长母排浸涂工艺。',
        href: '/applications/#ai-computing',
        imageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
      },
      items: [
        {
          title: '新能源汽车',
          body: '整车电池包、高压母排系统绝缘配套。',
          href: '/applications/#new-energy-vehicle',
        },
        {
          title: '氢能汽车与氢能装备',
          body: '燃料电池、高压氢系统电控高端绝缘。',
          href: '/applications/#hydrogen',
        },
        {
          title: '风电装备',
          body: '风电整机核心绝缘结构零部件。',
          href: '/applications/#wind-power',
        },
        {
          title: '高端工控与充电系统',
          body: '工控设备与充电桩金属连接件绝缘包覆。',
          href: '/applications/#industrial',
        },
      ],
    },
    lineup: {
      heading: '两条产品线',
      items: [
        {
          title: 'AI算力专用环氧绝缘粉末',
          body: '专为AI算力中心超大铜铝长母排浸涂工艺定制研发。',
          highlights: ['柔韧性优异', '耐反复弯折', '耐压稳定', '耐高温性能突出'],
          imageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
        },
        {
          title: '高性能PVC绝缘浸塑溶胶',
          body: '适配各类精密金属结构绝缘包覆工艺，防腐防护性能优异。',
          highlights: ['耐高低温', '绝缘阻值稳定', '防腐防护优异', '附着力强'],
          imageAlt: '完成蓝色PVC浸塑绝缘包覆的铜排',
        },
      ],
      linkLabel: '查看产品详情',
      linkHref: '/products/',
    },
    customers: {
      heading: '部分服务客户',
      lead: '长期服务全球头部制造企业，产品品质经过市场严苛验证。',
      names: [
        '华为',
        '比亚迪',
        '宁德时代',
        '美国派克',
        '长城汽车',
        '先导智能',
        '微导',
        '凯中精密',
        '祥鑫科技',
        '硕贝德',
        '飞龙达',
        '华先',
        '深圳数码模',
        '中山数码模',
        '氢晨科技',
        '达瑞电子',
      ],
      note: '以上为部分合作客户，排名不分先后。',
    },
    endorsement: {
      heading: '本土25年 叠加 全球45年',
      body:
        '亨丰凭借雄厚产业资本与整合能力，战略收购韩国KOSDAQ上市企业大州电子的东莞高分子粉末事业部，全盘承接全套配方数据库、核心技术沉淀、完整工业化产线、技术团队及国际化认证体系，并保留原厂区原址量产。',
      certifications: 'IATF 16949 · UL 105℃ / UL 130℃ · 全套ISO国际体系（承继）',
      linkLabel: '了解公司背景',
      linkHref: '/about/',
    },
  },

  about: {
    header: {
      title: '关于亨丰',
      lead:
        '东莞亨丰科技有限公司深耕绝缘新材料行业25年，自持自有办公研发基地，配套完善研发实验设施，拥有多项发明专利。',
    },
    story: {
      heading: '战略收购与技术承接',
      paragraphs: [
        '公司凭借雄厚产业资本与整合能力，战略收购韩国KOSDAQ上市企业大州电子的东莞高分子粉末事业部，全盘承接事业部全套配方数据库、核心技术沉淀、完整工业化产线、技术团队及全套国际化认证体系。',
        '韩国大州电子拥有45年高分子绝缘材料研发制造历史，环氧粉末板块具备IATF 16949汽车行业体系、UL 105℃与UL 130℃安全认证及全套ISO国际体系，长期服务全球头部制造企业。',
        '环氧粉末生产保留原厂区原址量产。依托亨丰25年本土经验与大州45年全球化技术的双重优势，面向AI算力、新能源汽车、氢能汽车、风电装备、高压工控等高端领域提供整体解决方案。',
      ],
    },
    strengths: {
      heading: '技术背景与硬核实力',
      items: [
        {
          title: '25年行业深耕沉淀',
          body: '深谙国内高端制造工况标准，具备大型产业并购与技术整合实力。',
        },
        {
          title: '并购韩国上市企业事业部',
          body: '完整承接跨国企业粉末板块资产、技术、产线与国际认证体系。',
        },
        {
          title: '承袭45年国际大厂技术',
          body: '全盘沿用韩国大州全球化研发工艺、生产标准与品控体系。',
        },
        {
          title: '国际权威资质加持',
          body: '承继IATF 16949汽车体系、UL 105℃/130℃安全认证与全套ISO国际体系。',
        },
        {
          title: '自有专业化研发基地',
          body: '独立办公研发载体、完善实验设备、多项核心发明专利。',
        },
        {
          title: '原厂原址持续量产',
          body: '产线、工艺、技术团队全部保留，品质延续国际大厂标准。',
        },
      ],
    },
    dualAdvantage: {
      heading: '双重核心优势',
      local: { value: '25', unit: '年', label: '亨丰本土产业实战经验' },
      global: { value: '45', unit: '年', label: '大州全球化技术积淀' },
      statement: '本土工况理解与全球化技术标准叠加，构成亨丰在高端绝缘材料赛道的核心壁垒。',
    },
  },

  products: {
    header: {
      title: '产品中心',
      lead: '两条产品线覆盖高端绝缘包覆的主要工艺路径：环氧绝缘粉末与PVC绝缘浸塑溶胶。',
    },
    lineup: [
      {
        id: 'epoxy-powder',
        tag: '核心产品一 · AI算力专用',
        heading: '高柔韧性长母排专用环氧绝缘粉末',
        body:
          '传承韩国大州电子45年全球化粉末技术积淀，专为AI算力中心超大铜铝长母排浸涂工艺定制研发。',
        specs: [
          { value: '≤ 17', unit: '°', label: '折弯角度' },
          { value: '0.4-1.0', unit: 'mm', label: '涂层厚度按需定制' },
          { value: '180', unit: '℃ / 20 min', label: '固化参考条件' },
          { value: 'V-0', unit: '', label: '阻燃等级（UL94）' },
        ],
        performance: ['柔韧性优异', '耐反复弯折', '耐压稳定', '耐高温性能突出', '绝缘性能可靠'],
        applications: [
          'AI算力中心超大长尺寸母排绝缘防护',
          '新能源汽车电池包高压母排系统',
          '氢能汽车燃料电池、高压电控绝缘部件',
          '风电结构件、充电桩、高端工控设备',
        ],
        service: '定制配方开发 · 快速样品打样 · 全程工艺技术支持',
        certifications: '承继 UL 105℃、UL 130℃ 与 IATF 16949 国际认证体系',
        imageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
      },
      {
        id: 'pvc-plastisol',
        tag: '核心产品二 · 精密金属结构',
        heading: '高性能PVC绝缘浸塑溶胶',
        body:
          '产品耐高低温、绝缘性能稳定、防腐防护性能优异，适配各类精密金属结构绝缘包覆工艺。',
        specs: [],
        performance: ['耐高低温', '绝缘阻值稳定', '防腐防护优异', '附着力强', '表面光滑平整'],
        applications: [
          '新能源、氢能汽车高压连接五金绝缘防护',
          '电力、风电、工控设备金属连接件绝缘包覆',
          '高端精密五金部件防腐、绝缘、耐磨防护',
        ],
        service: '配方微调定制 · 快速打样 · 全程技术支持',
        certifications: '',
        imageAlt: '完成蓝色PVC浸塑绝缘包覆的铜排',
      },
    ],
    performanceLabel: '核心性能',
    applicationsLabel: '核心应用',
    serviceLabel: '配套服务',
    process: {
      heading: '合作流程',
      steps: [
        { title: '沟通工况', body: '明确应用场景、基材类型、工艺路径与性能要求。' },
        { title: '打样验证', body: '定制配方开发与快速样品打样，配合客户测试验证。' },
        { title: '量产交付', body: '批量生产与持续品质跟踪，全程工艺技术支持。' },
      ],
    },
  },

  applications: {
    header: {
      title: '重点应用领域',
      lead: '聚焦五大高端战略性产业，专注高端绝缘材料配套。',
    },
    items: [
      {
        id: 'ai-computing',
        heading: 'AI算力中心',
        body: '超大长母排高柔韧绝缘专属解决方案，面向算力中心超大尺寸铜铝母排的浸涂绝缘防护。',
        note: '',
        imageAlt: '',
      },
      {
        id: 'new-energy-vehicle',
        heading: '新能源汽车',
        body: '整车电池包与高压母排系统绝缘配套，覆盖电池包内部连接铜排的绝缘包覆需求。',
        note: '环氧粉末与PVC浸塑两条工艺路径均可适配不同结构件与产线条件。',
        imageAlt: '完成绿色环氧绝缘粉末包覆的铜排',
      },
      {
        id: 'hydrogen',
        heading: '氢能汽车与氢能装备',
        body: '燃料电池、高压氢系统电控高端绝缘，适配氢能装备对绝缘可靠性与环境耐受的严苛要求。',
        note: '',
        imageAlt: '',
      },
      {
        id: 'wind-power',
        heading: '风电装备',
        body: '风电整机核心绝缘结构零部件，为长期户外运行的金属结构件提供绝缘与防腐防护。',
        note: '',
        imageAlt: '完成蓝色PVC浸塑绝缘包覆的铜排',
      },
      {
        id: 'industrial',
        heading: '高端工控与充电系统',
        body: '高端工控设备与充电桩金属连接件的绝缘包覆、防腐与耐磨防护。',
        note: '',
        imageAlt: '',
      },
    ],
  },

  quality: {
    header: {
      title: '研发与品质保障体系',
      lead: '继承国际大厂研发体系与全套精密检测平台，执行严苛品控标准。',
    },
    framework: {
      heading: '五大保障',
      items: [
        {
          title: '全球化研发体系继承',
          body: '完整继承韩国大州电子成熟工艺标准与全套精密检测平台。',
        },
        {
          title: '高端国际资质底座',
          body: '承继IATF 16949汽车工业体系与UL双温级国际安全认证。',
        },
        {
          title: '全项性能检测管控',
          body: '全套理化、耐温、耐压、绝缘性能专项检测，严控核心指标。',
        },
        {
          title: '高端赛道配方迭代',
          body: '针对AI算力、新能源、氢能、风电赛道持续迭代专属配方。',
        },
        {
          title: '自主知识产权储备',
          body: '自有多项发明专利，持续深耕高端绝缘新材料技术升级。',
        },
      ],
    },
    labMatrix: {
      heading: '精密检测平台',
      lead: '承接自大州电子东莞事业部的分析检测设备，覆盖来料验证、微观结构、热性能表征到成品可靠性评价的全流程。',
      groups: [
        {
          title: '成分分析',
          items: ['ICP-OES 元素分析', 'FT-IR 红外光谱', 'XRF 荧光光谱'],
        },
        {
          title: '粒子分析',
          items: ['SEM-EDX 扫描电镜', 'PSA 粒度分析', 'BET 比表面积'],
        },
        {
          title: '热分析',
          items: ['DSC 差示扫描量热', 'TGA 热重分析'],
        },
        {
          title: '信赖性评价',
          items: ['温湿度循环', '冷热冲击', 'PCT高压加速老化'],
        },
      ],
      footnote: '设备清单源自韩国大州电子官方企业资料',
    },
    systems: {
      heading: '体系与标准',
      body:
        '环氧粉末板块承继韩国大州电子的国际认证体系，包含IATF 16949汽车行业体系、UL 105℃与UL 130℃双温级安全认证及全套ISO国际体系。产线、工艺与技术团队保留于原厂区，品质标准延续国际大厂水准。',
    },
  },

  contact: {
    header: {
      title: '联系我们',
      lead: '欢迎垂询试样、配方定制与技术合作。',
    },
    info: {
      heading: '联系信息',
      note: '如需到访或安排打样，请提前电话或邮件预约。',
    },
  },
};

export default zh;
