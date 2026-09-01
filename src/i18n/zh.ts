import type { Dict } from './types';

// 中文字典：文案严格依据 docs/DESIGN_SPEC.md 第 6 节，不得擅自增改事实性表述
export const zh: Dict = {
  locale: 'zh',
  htmlLang: 'zh-CN',

  nav: {
    home: '首页',
    about: '关于阿克图',
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
    brandLatin: 'AKETOO',
    brandLocal: '阿克图',
    brandHomeLabel: '阿克图首页',
  },

  footer: {
    tagline: '高端环氧绝缘粉末研发与制造，服务新能源、储能与算力电气行业。',
    navHeading: '站内导航',
    contactHeading: '联系方式',
    companyHeading: '公司',
    companyNameLocal: '阿克图（东莞）电子绝缘材料有限公司',
    companyNameLatin: 'AKETOO (DONGGUAN) ELECTRONIC INSULATION MATERIALS CO., LTD.',
    copyright: '© 2026 阿克图（东莞）电子绝缘材料有限公司',
    icpText: '粤ICP备XXXXXXXX号',
    icpHref: 'https://beian.miit.gov.cn/',
    icpNote: 'TODO 替换为正式备案号',
    policeText: '粤公网安备 XXXXXXXXXXXXX号',
    policeHref: 'https://beian.mps.gov.cn/',
    policeNote: 'TODO 替换为正式公安备案号与链接',
    sourceNote: '部分历史数据与资质信息源自韩国大州电子官方企业资料（Ver.5 · 2025.3）',
  },

  common: {
    cta: {
      heading: '欢迎垂询试样与配方定制',
      body: '提供配方调整、试样打样到量产落地的全流程技术支持，并可索取技术资料。',
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
      address: '东莞市企石镇博夏村江南大道东部工业园莞城园区',
      addressLabel: '地址',
    },
    sourceFootnote: '数据源自韩国大州电子官方企业资料（Ver.5 · 2025.3）',
  },

  chat: {
    launcherLabel: '打开在线客服',
    panelLabel: '阿克图客服助手对话窗口',
    title: '阿克图客服助手',
    subtitle: '演示版 · 正式版将接入AI大模型',
    welcome: '您好，我是阿克图客服助手。可以为您介绍环氧绝缘粉末的性能参数、打样流程与联系方式。',
    chips: ['如何申请试样？', '折弯性能如何？', '固化条件是什么？', '有哪些认证体系？'],
    faq: [
      {
        id: 'sampling',
        keywords: ['打样', '试样', '样品', '送样', '取样', 'sample'],
        answer:
          '我们提供从配方调整、试样打样到量产落地的全流程支持。请提供应用场景、基材类型与厚度耐压要求，我们会安排试样与配方调整，并配合您的测试验证。可致电 139 4711 3888 或发送邮件至 sales@aketoo.com。',
      },
      {
        id: 'flexibility',
        keywords: ['折弯', '柔韧', '弯曲', '开裂', '冷热', '角度', 'flex'],
        answer:
          '高柔韧性环氧绝缘粉末的折弯角度可达 17° 以内，抗冷热交变，杜绝涂层开裂，面向AI算力中心与新能源高压场景。',
      },
      {
        id: 'curing',
        keywords: ['固化', '烘烤', '温度', '工艺', '180', 'cure'],
        answer: '固化参考条件为 180 ℃ / 20 min。实际工艺可根据基材与涂层厚度调整，我们会配合验证。',
      },
      {
        id: 'thickness',
        keywords: ['厚度', '涂层', '膜厚', '涂覆', 'mm', 'thickness'],
        answer: '涂层厚度 0.4-1.0 mm 按需定制。请告知应用场景与耐压要求，我们据此推荐配方与工艺窗口。',
      },
      {
        id: 'certification',
        keywords: ['认证', '资质', '体系', 'ul', 'iso', 'iatf', '黄卡', '阻燃', 'v-0'],
        answer:
          '质量体系通过 ISO 9001、ISO 14001 与 IATF 16949 汽车行业认证，并传承大州电子UL黄卡技术体系（RTI 105℃/130℃）。阻燃等级 V-0（UL94）。',
      },
      {
        id: 'contact',
        keywords: ['联系', '电话', '地址', '邮箱', '邮件', '怎么找', '在哪', 'contact', 'phone'],
        answer:
          '电话 139 4711 3888，邮箱 sales@aketoo.com，地址东莞市企石镇博夏村江南大道东部工业园莞城园区。如需到访或安排打样，请提前电话或邮件预约。',
      },
      {
        id: 'company',
        keywords: ['公司', '背景', '大州', '历史', '介绍', '承接', 'daejoo', 'about'],
        answer:
          '阿克图（东莞）电子绝缘材料有限公司承接韩国KOSDAQ上市企业大州电子东莞高分子材料事业部，完整承接其量产配方、生产工艺、核心设备与质量评价体系，专注高端环氧绝缘粉末的研发、生产与销售。',
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
      message: '请简述应用场景、基材类型、涂层厚度与耐压要求',
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
    mailtoSubject: '阿克图询盘',
    mailtoIntro: '以下为通过 www.aketoo.com 提交的询盘信息：',
  },

  seo: {
    siteName: '阿克图（东莞）电子绝缘材料有限公司',
    ogImage: '/og/powder-green-1024.jpg',
    ogImageAlt: '深绿色环氧绝缘粉末堆',
    home: {
      title: '阿克图 AKETOO · 高端环氧绝缘粉末研发与制造',
      description:
        '阿克图（东莞）电子绝缘材料有限公司承接韩国大州电子东莞粉末事业部，专注高端环氧绝缘粉末研发与制造，产品用于AI算力中心高压构件、动力电池铜排、被动元器件与汽车电气零部件绝缘。',
    },
    about: {
      title: '关于阿克图 · 阿克图（东莞）电子绝缘材料有限公司',
      description:
        '阿克图完整承接大州电子东莞高分子材料事业部的量产配方、生产工艺、核心设备与质量评价体系，东莞生产基地占地12,980平方米，服务新能源、储能与算力电气行业客户。',
    },
    products: {
      title: '产品中心 · 阿克图（东莞）电子绝缘材料有限公司',
      description:
        '高柔韧性环氧绝缘粉末，折弯角度17度以内，涂层厚度0.4-1.0毫米按需定制，固化参考条件180摄氏度20分钟，具备优异的机械强度、耐湿性、耐热性与电气特性。',
    },
    applications: {
      title: '应用领域 · 阿克图（东莞）电子绝缘材料有限公司',
      description:
        '环氧绝缘粉末覆盖AI算力中心高压构件、电力母排与动力电池铜排、被动电子元器件封装、开关与汽车电气零部件绝缘等关键场景，提供高可靠电气隔离与机械保护。',
    },
    quality: {
      title: '研发与品质 · 阿克图（东莞）电子绝缘材料有限公司',
      description:
        '阿克图继承大州电子全套质量评价分析设备，覆盖成分分析、粒子分析、热分析与信赖性评价，质量体系通过ISO 9001、ISO 14001与IATF 16949汽车行业认证。',
    },
    contact: {
      title: '联系我们 · 阿克图（东莞）电子绝缘材料有限公司',
      description:
        '欢迎垂询试样、配方定制与技术合作。电话139 4711 3888，邮箱sales@aketoo.com，地址东莞市企石镇博夏村江南大道东部工业园莞城园区，到访与打样请提前预约。',
    },
  },

  home: {
    hero: {
      eyebrow: 'EPOXY INSULATION POWDER',
      titleLine1: '高端环氧绝缘粉末',
      titleLine2: '研发与制造',
      subtitle: '承接韩国KOSDAQ上市企业大州电子东莞粉末事业部，四十五年绝缘材料技术积淀。',
      imageAlt: '深绿色环氧绝缘粉末堆',
    },
    stats: {
      heading: '核心数据',
      items: [
        { value: '45', unit: '年', label: '功能绝缘材料积淀' },
        { value: '1986', unit: '年起', label: '环氧粉体量产' },
        { value: '105/130', unit: '℃', label: 'UL RTI 技术体系' },
        { value: '12,980', unit: '㎡', label: '东莞生产基地' },
      ],
    },
    domains: {
      heading: '应用领域',
      feature: {
        title: 'AI算力中心高压构件',
        body: '算力服务器电气部件与高压金属件绝缘，主打高柔韧性新品。',
        href: '/applications/#ai-computing',
        imageAlt: '完成绝缘粉末包覆的铜排',
      },
      items: [
        {
          title: '电力母排与动力电池铜排',
          body: '新能源汽车动力电池连接铜排、电力母排绝缘包覆。',
          href: '/applications/#busbar',
        },
        {
          title: '被动电子元器件',
          body: '电容、电阻、电感、压敏电阻器等绝缘封装。',
          href: '/applications/#passive-components',
        },
        {
          title: '开关与汽车电气零部件',
          body: '开关主回路零配件绝缘、汽车励磁线圈包覆。',
          href: '/applications/#automotive',
        },
      ],
    },
    flagship: {
      heading: '高柔韧性环氧绝缘粉末',
      specs: [
        { value: '≤ 17', unit: '°', label: '折弯角度' },
        { value: '0.4-1.0', unit: 'mm', label: '涂层厚度定制' },
        { value: '180', unit: '℃ / 20 min', label: '固化条件' },
      ],
      summary: '抗冷热交变，杜绝涂层开裂，面向AI算力中心与新能源高压场景。',
      linkLabel: '查看产品详情',
      linkHref: '/products/',
      imageAlt: '深绿色环氧绝缘粉末特写',
    },
    endorsement: {
      heading: '源自大州电子的完整技术承接',
      body:
        '阿克图完整承接大州电子东莞高分子材料事业部的量产配方、生产工艺、核心设备与质量评价体系，原事业部客户业务正逐步转接阿克图。',
      certifications: 'ISO 9001 · ISO 14001 · IATF 16949 · UL黄卡技术体系（传承）',
      linkLabel: '了解公司背景',
      linkHref: '/about/',
    },
  },

  about: {
    header: {
      title: '关于阿克图',
      lead:
        '阿克图（东莞）电子绝缘材料有限公司，承接韩国KOSDAQ上市企业大州电子东莞高分子材料事业部，专注高端环氧绝缘粉末的研发、生产与销售。',
    },
    story: {
      heading: '技术承接',
      paragraphs: [
        '大州电子自1981年在韩国创立，1986年起持续研发生产环氧绝缘粉体，全球布局韩国、上海、青岛、东莞、台湾、越南生产基地，研发人员占比25%，持有数百项授权专利。',
        '2026年，阿克图完整承接其东莞粉末事业部：全套量产配方、成熟生产工艺、核心生产设备、UL黄卡RTI 105℃/130℃技术体系及全套质量评价分析检测设备，并逐步承接原事业部客户的生产与服务。',
      ],
    },
    timeline: {
      heading: '发展历程',
      items: [
        { year: '1981', event: '大州电子于韩国京畿道创立' },
        { year: '1986', event: '环氧绝缘粉体研发与量产启动' },
        { year: '2004', event: '大州电子KOSDAQ上市，东莞大州成立' },
        { year: '2017', event: '东莞新工厂竣工，产能扩张' },
        { year: '2022', event: '越南大州成立，布局东南亚' },
        { year: '2026', event: '阿克图承接东莞环氧粉末事业部' },
      ],
    },
    facility: {
      heading: '基地数据',
      items: [
        { value: 'USD 10.2M', unit: '', label: '注册资本' },
        { value: 'USD 20M+', unit: '', label: '总投资' },
        { value: '12,980', unit: '㎡', label: '占地面积' },
        { value: '10,355', unit: '㎡', label: '建筑面积' },
      ],
      footnote: '数据源自韩国大州电子官方企业资料（Ver.5 · 2025.3）',
    },
    footprint: {
      heading: '市场布局',
      items: [
        {
          title: '立足珠三角',
          body: '生产基地设于东莞，依托珠三角完整制造业产业链，快速响应华南客户。',
        },
        {
          title: '服务全国',
          body: '面向全国新能源、储能、算力电气行业客户，承接原事业部存量业务。',
        },
        {
          title: '辐射东南亚',
          body: '依托大州全球基地网络，服务出海制造企业。',
        },
      ],
    },
  },

  products: {
    header: {
      title: '产品中心',
      lead: '电气、电子绝缘涂料核心原料环氧树脂化合物，具备优异的机械强度、耐湿性、耐热性与电气特性。',
    },
    flagship: {
      tag: '旗舰新品 · AI算力中心专用',
      heading: '高柔韧性环氧绝缘粉末',
      body: '针对AI算力中心高压构件与新能源高压场景开发，抗冷热交变，杜绝涂层开裂。',
      specs: [
        { value: '≤ 17', unit: '°', label: '折弯角度' },
        { value: '0.4-1.0', unit: 'mm', label: '涂层厚度按需定制' },
        { value: '180', unit: '℃ / 20 min', label: '固化参考条件' },
        { value: 'V-0', unit: '', label: '阻燃等级（UL94）' },
      ],
      imageAlt: '深绿色环氧绝缘粉末堆',
    },
    features: {
      heading: '通用特性',
      groups: [
        {
          title: '电气性能',
          items: ['高绝缘耐压', '电气特性优异'],
        },
        {
          title: '机械与环境',
          items: ['耐热、耐湿、耐高温', '机械保护性能强'],
        },
        {
          title: '体系与定制',
          items: [
            '传承UL黄卡技术体系（RTI 105℃/130℃）',
            '通过 ISO 9001、ISO 14001、IATF 16949 认证',
            '支持定制化配方开发，适配特殊工况',
          ],
        },
      ],
    },
    process: {
      heading: '定制流程',
      steps: [
        { title: '沟通工况', body: '明确应用场景、基材、厚度与耐压要求。' },
        { title: '打样验证', body: '提供试样与配方调整，配合客户测试。' },
        { title: '量产交付', body: '批量生产与持续品质跟踪。' },
      ],
    },
  },

  applications: {
    header: {
      title: '应用领域',
      lead: '用于电子装置与组件的高可靠电绝缘，覆盖从算力基础设施到汽车电气的关键场景。',
    },
    aiComputing: {
      id: 'ai-computing',
      heading: 'AI算力中心高压构件',
      body: '算力服务器电气部件、高压金属件绝缘。高柔韧性新品主打赛道，自2020年起投入研发。',
      note: '',
      anchorYear: '2020',
      imageAlt: '',
    },
    busbar: {
      id: 'busbar',
      heading: '电力母排与动力电池铜排',
      body: '新能源汽车动力电池连接铜排、电力母排绝缘包覆，自2015年起量产。',
      note: '绝缘粉末涂层在高压环境下提供可靠电气隔离与机械保护。',
      anchorYear: '2015',
      imageAlt: '完成绝缘粉末包覆的铜排',
    },
    passive: {
      id: 'passive-components',
      heading: '被动电子元器件',
      body: '电容、电阻、电感、压敏电阻器等大容量电容器绝缘封装，环氧涂层长期服务全球被动元器件制造企业。',
      note: '',
      anchorYear: '',
      imageAlt: '',
    },
    automotive: {
      id: 'automotive',
      heading: '开关与汽车电气零部件',
      body: '开关一次主回路零配件绝缘、汽车用励磁线圈包覆，自2005年起量产。',
      note: '',
      anchorYear: '2005',
      imageAlt: '',
    },
  },

  quality: {
    header: {
      title: '研发与品质',
      lead: '继承大州电子全套质量评价分析设备，覆盖来料验证、微观结构、热性能表征到成品可靠性评价的全流程。',
    },
    investment: {
      heading: '研发投入',
      items: [
        { value: '10', unit: '%', label: '销售额持续投入研发' },
        { value: '25', unit: '%', label: '研发人员占比' },
      ],
      footnote: '数据源自韩国大州电子官方企业资料（Ver.5 · 2025.3）',
    },
    labMatrix: {
      heading: '检测能力矩阵',
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
    },
    systems: {
      heading: '设备与体系',
      body:
        '检测设备源自 PerkinElmer、Shimadzu、FRITSCH、Emcrafts 等国际品牌。质量体系通过 ISO 9001、ISO 14001 与 IATF 16949 汽车行业认证，传承大州电子UL黄卡技术体系。',
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
