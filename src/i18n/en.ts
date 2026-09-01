import type { Dict } from './types';

// english dictionary: a native B2B rewrite of the zh copy, not a literal translation
export const en: Dict = {
  locale: 'en',
  htmlLang: 'en',

  nav: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    applications: 'Applications',
    quality: 'Quality',
    contact: 'Contact',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    menuLabel: 'Main navigation',
    langLabel: 'Language',
    langZh: '中',
    langEn: 'EN',
    skipToContent: 'Skip to main content',
    brandLatin: 'AKETOO',
    brandLocal: '',
    brandHomeLabel: 'AKETOO home',
  },

  footer: {
    tagline:
      'Development and manufacture of high-performance epoxy insulation powders for the new energy, energy storage and computing power industries.',
    navHeading: 'Navigation',
    contactHeading: 'Contact',
    companyHeading: 'Company',
    companyNameLocal: '阿克图（东莞）电子绝缘材料有限公司',
    companyNameLatin: 'AKETOO (DONGGUAN) ELECTRONIC INSULATION MATERIALS CO., LTD.',
    copyright: '© 2026 AKETOO (Dongguan) Electronic Insulation Materials Co., Ltd.',
    icpText: '粤ICP备XXXXXXXX号',
    icpHref: 'https://beian.miit.gov.cn/',
    icpNote: 'TODO replace with the issued ICP filing number',
    policeText: '粤公网安备 XXXXXXXXXXXXX号',
    policeHref: 'https://beian.mps.gov.cn/',
    policeNote: 'TODO replace with the issued public security filing number and link',
    sourceNote:
      'Selected historical data and qualification details are taken from the official Daejoo Electronic Materials company profile (Ver.5 · 2025.3)',
  },

  common: {
    cta: {
      heading: 'Request a sample or a custom formulation',
      body:
        'We support the full path from formulation adjustment and sampling through to volume production. Technical documentation is available on request.',
      button: 'Request a sample',
      buttonHref: '/en/contact/#inquiry',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    buttons: {
      requestSample: 'Request a sample',
      exploreProducts: 'Explore products',
      viewProductDetail: 'View product details',
      learnAboutCompany: 'Learn about the company',
      backToTop: 'Back to top',
    },
    contact: {
      phone: '139 4711 3888',
      phoneHref: 'tel:+8613947113888',
      phoneLabel: 'Phone',
      email: 'sales@aketoo.com',
      emailHref: 'mailto:sales@aketoo.com',
      emailLabel: 'Email',
      address:
        'Guancheng Zone, Eastern Industrial Park, Jiangnan Avenue, Boxia Village, Qishi Town, Dongguan, Guangdong, China',
      addressLabel: 'Address',
    },
    sourceFootnote:
      'Figures from the official Daejoo Electronic Materials company profile (Ver.5 · 2025.3)',
  },

  chat: {
    launcherLabel: 'Open the customer service assistant',
    panelLabel: 'AKETOO customer service assistant chat window',
    title: 'AKETOO Assistant',
    subtitle: 'Demo build · an AI model will power the production version',
    welcome:
      'Hello, this is the AKETOO assistant. I can walk you through powder performance data, the sampling process and how to reach our team.',
    chips: [
      'How do I request a sample?',
      'How flexible is the coating?',
      'What are the cure conditions?',
      'Which certifications apply?',
    ],
    faq: [
      {
        id: 'sampling',
        keywords: ['sample', 'sampling', 'trial', 'test piece', 'evaluate', '打样', '试样'],
        answer:
          'We support the full path from formulation adjustment and sampling through to volume production. Send us your application, substrate type, coating thickness and dielectric requirements and we will prepare samples and adjust the formulation alongside your testing. Call 139 4711 3888 or write to sales@aketoo.com.',
      },
      {
        id: 'flexibility',
        keywords: ['flex', 'bend', 'crack', 'thermal cycle', 'angle', 'brittle', '折弯'],
        answer:
          'Our high-flexibility epoxy insulation powder achieves a bend angle within 17°, resists thermal cycling and prevents coating cracks. It is developed for AI data center and new energy high-voltage applications.',
      },
      {
        id: 'curing',
        keywords: ['cure', 'curing', 'bake', 'oven', 'temperature', '180', 'schedule'],
        answer:
          'The reference cure schedule is 180 ℃ for 20 min. The actual process can be adjusted for your substrate and coating thickness, and we will validate it with you.',
      },
      {
        id: 'thickness',
        keywords: ['thickness', 'coating', 'film', 'mm', 'layer', '厚度'],
        answer:
          'Coating thickness is customised from 0.4-1.0 mm. Tell us the application and the dielectric requirement and we will recommend a formulation and a process window.',
      },
      {
        id: 'certification',
        keywords: ['certification', 'certified', 'iso', 'iatf', 'ul', 'yellow card', 'flame', 'v-0'],
        answer:
          'Our quality system is certified to ISO 9001, ISO 14001 and IATF 16949 for the automotive industry, and we inherit the Daejoo UL Yellow Card technical system (RTI 105℃/130℃). Flame rating is V-0 (UL94).',
      },
      {
        id: 'contact',
        keywords: ['contact', 'phone', 'email', 'address', 'visit', 'call', 'where', 'reach'],
        answer:
          'Phone 139 4711 3888, email sales@aketoo.com. Our site is in the Guancheng Zone, Eastern Industrial Park, Jiangnan Avenue, Boxia Village, Qishi Town, Dongguan. Please book a visit or a sampling session by phone or email in advance.',
      },
      {
        id: 'company',
        keywords: ['company', 'about', 'background', 'daejoo', 'history', 'who', 'takeover'],
        answer:
          'AKETOO (Dongguan) Electronic Insulation Materials Co., Ltd. is the successor to the Dongguan polymer materials division of Daejoo Electronic Materials, a KOSDAQ-listed Korean company. We have taken over its production formulations, manufacturing processes, core equipment and quality evaluation system.',
      },
    ],
    fallback:
      'That one needs an engineer to confirm. Please call 139 4711 3888 or write to sales@aketoo.com and we will come back to you quickly.',
    inputLabel: 'Type your question',
    inputPlaceholder: 'Type your question',
    sendLabel: 'Send',
    closeLabel: 'Close the chat window',
    youLabel: 'You',
    botLabel: 'Assistant',
  },

  form: {
    heading: 'Send an inquiry',
    intro: 'Share a few details and our engineering and sales team will get back to you.',
    requiredMark: 'required',
    optionalMark: 'optional',
    labels: {
      name: 'Name',
      company: 'Company',
      phone: 'Phone',
      email: 'Email',
      message: 'Your requirement',
    },
    placeholders: {
      name: 'Your full name',
      company: 'Registered company name',
      phone: 'Mobile or landline number',
      email: 'Your work email',
      message: 'Outline the application, substrate type, coating thickness and dielectric requirements',
    },
    errors: {
      name: 'Please enter your name',
      company: 'Please enter your company name',
      phone: 'Please enter a phone number',
      phoneFormat: 'Please enter a valid phone number',
      email: 'Please enter a valid email address',
      message: 'Please describe your requirement',
    },
    submit: 'Send inquiry',
    submitting: 'Sending',
    success: 'Thank you, we have your inquiry and will reply within one business day.',
    failure: 'The inquiry could not be sent. Please try again shortly or call 139 4711 3888.',
    mailtoNote:
      'Your email client is now open. Send the message to sales@aketoo.com to complete the inquiry.',
    mailtoSubject: 'AKETOO inquiry',
    mailtoIntro: 'Inquiry submitted through www.aketoo.com:',
  },

  seo: {
    siteName: 'AKETOO (Dongguan) Electronic Insulation Materials Co., Ltd.',
    ogImage: '/og/powder-green-1024.jpg',
    ogImageAlt: 'Pile of green epoxy insulation powder',
    home: {
      title: 'AKETOO · High-Performance Epoxy Insulation Powders',
      description:
        'AKETOO develops and manufactures high-performance epoxy insulation powders in Dongguan, China, for AI data center hardware, busbars, passive components and automotive parts.',
    },
    about: {
      title: 'About · AKETOO (Dongguan) Electronic Insulation Materials',
      description:
        'AKETOO has taken over the Dongguan polymer materials division of Daejoo: production formulations, manufacturing processes, core equipment and the full quality evaluation system.',
    },
    products: {
      title: 'Products · AKETOO (Dongguan) Electronic Insulation Materials',
      description:
        'High-flexibility epoxy insulation powder with a bend angle within 17 degrees, coating thickness of 0.4-1.0 mm on request and a reference cure of 180 C for 20 minutes.',
    },
    applications: {
      title: 'Applications · AKETOO (Dongguan) Electronic Insulation Materials',
      description:
        'Epoxy insulation powders for AI data center high-voltage hardware, power and EV battery busbars, passive component encapsulation, switchgear and automotive electrical parts.',
    },
    quality: {
      title: 'Quality · AKETOO (Dongguan) Electronic Insulation Materials',
      description:
        'Composition, particle, thermal and reliability testing inherited from Daejoo, with a quality system certified to ISO 9001, ISO 14001 and IATF 16949 for automotive supply.',
    },
    contact: {
      title: 'Contact · AKETOO (Dongguan) Electronic Insulation Materials',
      description:
        'Contact AKETOO in Dongguan, China for samples, custom formulation and technical support. Phone 139 4711 3888, email sales@aketoo.com. Visits by appointment.',
    },
  },

  home: {
    hero: {
      eyebrow: 'EPOXY INSULATION POWDER',
      titleLine1: 'High-Performance Epoxy',
      titleLine2: 'Insulation Powders',
      subtitle:
        'Successor to the Dongguan powder division of KOSDAQ-listed Daejoo Electronic Materials, built on forty-five years of insulation materials expertise.',
      imageAlt: 'Pile of green epoxy insulation powder',
    },
    stats: {
      heading: 'Key figures',
      items: [
        { value: '45', unit: 'yrs', label: 'of functional insulation materials expertise' },
        { value: '1986', unit: '', label: 'Epoxy powder in volume production since' },
        { value: '105/130', unit: '℃', label: 'UL RTI technical system' },
        { value: '12,980', unit: 'm²', label: 'Dongguan production base' },
      ],
    },
    domains: {
      heading: 'Applications',
      feature: {
        title: 'High-voltage hardware for AI data centers',
        body: 'Insulation for server electrical parts and high-voltage metal components, led by our high-flexibility grade.',
        href: '/en/applications/#ai-computing',
        imageAlt: 'Busbar finished with an insulation powder coating',
      },
      items: [
        {
          title: 'Power busbars and EV battery busbars',
          body: 'Insulation coating for EV battery interconnect busbars and power distribution busbars.',
          href: '/en/applications/#busbar',
        },
        {
          title: 'Passive electronic components',
          body: 'Insulation encapsulation for capacitors, resistors, inductors and varistors.',
          href: '/en/applications/#passive-components',
        },
        {
          title: 'Switchgear and automotive electrical parts',
          body: 'Insulation for switchgear main-circuit parts and coating for automotive field coils.',
          href: '/en/applications/#automotive',
        },
      ],
    },
    flagship: {
      heading: 'High-flexibility epoxy insulation powder',
      specs: [
        { value: '≤ 17', unit: '°', label: 'Bend angle' },
        { value: '0.4-1.0', unit: 'mm', label: 'Coating thickness to specification' },
        { value: '180', unit: '℃ / 20 min', label: 'Cure schedule' },
      ],
      summary:
        'Resists thermal cycling and prevents coating cracks, for AI data center and new energy high-voltage applications.',
      linkLabel: 'View product details',
      linkHref: '/en/products/',
      imageAlt: 'Close view of green epoxy insulation powder',
    },
    endorsement: {
      heading: 'A complete technology handover from Daejoo',
      body:
        'AKETOO has taken over the production formulations, manufacturing processes, core equipment and quality evaluation system of the Daejoo Dongguan polymer materials division, and the customer business of that division is being transferred to AKETOO in stages.',
      certifications: 'ISO 9001 · ISO 14001 · IATF 16949 · UL Yellow Card technical system (inherited from Daejoo)',
      linkLabel: 'Learn about the company',
      linkHref: '/en/about/',
    },
  },

  about: {
    header: {
      title: 'About AKETOO',
      lead:
        'AKETOO (Dongguan) Electronic Insulation Materials Co., Ltd. is the successor to the Dongguan polymer materials division of Daejoo Electronic Materials, a KOSDAQ-listed Korean company. We develop, manufacture and sell high-performance epoxy insulation powders.',
    },
    story: {
      heading: 'The handover',
      paragraphs: [
        'Daejoo was founded in Korea in 1981 and has developed and produced epoxy insulation powders continuously since 1986, with production bases in Korea, Shanghai, Qingdao, Dongguan, Taiwan and Vietnam. R&D staff account for 25% of headcount and the company holds several hundred granted patents.',
        'In 2026 AKETOO took over its Dongguan powder division in full: the complete set of production formulations, mature manufacturing processes, core production equipment, the UL Yellow Card RTI 105℃/130℃ technical system and the full suite of quality evaluation and analysis instruments. Production and service for the customers of the former division are being transferred in stages.',
      ],
    },
    timeline: {
      heading: 'Milestones',
      items: [
        { year: '1981', event: 'Daejoo founded in Gyeonggi-do, Korea' },
        { year: '1986', event: 'Epoxy insulation powder R&D and volume production begin' },
        { year: '2004', event: 'Daejoo lists on KOSDAQ, Dongguan Daejoo established' },
        { year: '2017', event: 'New Dongguan plant completed, capacity expanded' },
        { year: '2022', event: 'Vietnam Daejoo established, Southeast Asia footprint added' },
        { year: '2026', event: 'AKETOO takes over the Dongguan epoxy powder division' },
      ],
    },
    facility: {
      heading: 'The Dongguan base',
      items: [
        { value: 'USD 10.2M', unit: '', label: 'Registered capital' },
        { value: 'USD 20M+', unit: '', label: 'Total investment' },
        { value: '12,980', unit: 'm²', label: 'Site area' },
        { value: '10,355', unit: 'm²', label: 'Building area' },
      ],
      footnote:
        'Figures from the official Daejoo Electronic Materials company profile (Ver.5 · 2025.3)',
    },
    footprint: {
      heading: 'Market footprint',
      items: [
        {
          title: 'Rooted in the Greater Bay Area',
          body: 'Our plant in Dongguan draws on the complete manufacturing supply chain of the Pearl River Delta for fast response to customers across South China.',
        },
        {
          title: 'Serving all of China',
          body: 'We supply new energy, energy storage and computing power customers nationwide, including the existing business of the former division.',
        },
        {
          title: 'Reaching Southeast Asia',
          body: 'Through the global Daejoo network of production bases we support manufacturers expanding overseas.',
        },
      ],
    },
  },

  products: {
    header: {
      title: 'Products',
      lead:
        'Epoxy resin compounds, the core raw material for electrical and electronic insulation coatings, with strong mechanical properties, moisture resistance, heat resistance and electrical performance.',
    },
    flagship: {
      tag: 'Flagship grade · for AI data centers',
      heading: 'High-flexibility epoxy insulation powder',
      body:
        'Developed for high-voltage hardware in AI data centers and new energy high-voltage applications. It resists thermal cycling and prevents coating cracks.',
      specs: [
        { value: '≤ 17', unit: '°', label: 'Bend angle' },
        { value: '0.4-1.0', unit: 'mm', label: 'Coating thickness to specification' },
        { value: '180', unit: '℃ / 20 min', label: 'Reference cure schedule' },
        { value: 'V-0', unit: '', label: 'Flame rating (UL94)' },
      ],
      imageAlt: 'Pile of green epoxy insulation powder',
    },
    features: {
      heading: 'General characteristics',
      groups: [
        {
          title: 'Electrical performance',
          items: ['High dielectric strength', 'Strong electrical characteristics'],
        },
        {
          title: 'Mechanical and environmental',
          items: ['Heat, moisture and high-temperature resistance', 'Strong mechanical protection'],
        },
        {
          title: 'Systems and customisation',
          items: [
            'Inherited UL Yellow Card technical system (RTI 105℃/130℃)',
            'Certified to ISO 9001, ISO 14001 and IATF 16949',
            'Custom formulation development for demanding operating conditions',
          ],
        },
      ],
    },
    process: {
      heading: 'How a custom grade comes together',
      steps: [
        {
          title: 'Define the application',
          body: 'We confirm the use case, substrate, coating thickness and dielectric requirements.',
        },
        {
          title: 'Sample and validate',
          body: 'We supply samples and adjust the formulation alongside your testing.',
        },
        {
          title: 'Deliver at volume',
          body: 'Series production with continuous quality monitoring.',
        },
      ],
    },
  },

  applications: {
    header: {
      title: 'Applications',
      lead:
        'High-reliability electrical insulation for electronic devices and assemblies, from computing infrastructure through to automotive electrical parts.',
    },
    aiComputing: {
      id: 'ai-computing',
      heading: 'High-voltage hardware for AI data centers',
      body:
        'Insulation for server electrical parts and high-voltage metal components. This is the lead application for our high-flexibility grade, in development since 2020.',
      note: '',
      anchorYear: '2020',
      imageAlt: '',
    },
    busbar: {
      id: 'busbar',
      heading: 'Power busbars and EV battery busbars',
      body:
        'Insulation coating for EV battery interconnect busbars and power distribution busbars, in volume production since 2015.',
      note: 'The insulation powder coating provides reliable electrical isolation and mechanical protection under high voltage.',
      anchorYear: '2015',
      imageAlt: 'Busbar finished with an insulation powder coating',
    },
    passive: {
      id: 'passive-components',
      heading: 'Passive electronic components',
      body:
        'Insulation encapsulation for capacitors, resistors, inductors, varistors and large-capacity capacitors. Our epoxy coatings have served passive component manufacturers worldwide for many years.',
      note: '',
      anchorYear: '',
      imageAlt: '',
    },
    automotive: {
      id: 'automotive',
      heading: 'Switchgear and automotive electrical parts',
      body:
        'Insulation for switchgear primary main-circuit parts and coating for automotive field coils, in volume production since 2005.',
      note: '',
      anchorYear: '2005',
      imageAlt: '',
    },
  },

  quality: {
    header: {
      title: 'R&D and Quality',
      lead:
        'The complete quality evaluation and analysis equipment inherited from Daejoo covers incoming material verification, microstructure, thermal characterisation and finished-product reliability.',
    },
    investment: {
      heading: 'R&D investment',
      items: [
        { value: '10', unit: '%', label: 'of revenue invested in R&D' },
        { value: '25', unit: '%', label: 'of headcount working in R&D' },
      ],
      footnote:
        'Figures from the official Daejoo Electronic Materials company profile (Ver.5 · 2025.3)',
    },
    labMatrix: {
      heading: 'Testing capability',
      groups: [
        {
          title: 'Composition analysis',
          items: [
            'ICP-OES elemental analysis',
            'FT-IR infrared spectroscopy',
            'XRF fluorescence spectroscopy',
          ],
        },
        {
          title: 'Particle analysis',
          items: ['SEM-EDX electron microscopy', 'PSA particle size analysis', 'BET surface area'],
        },
        {
          title: 'Thermal analysis',
          items: ['DSC differential scanning calorimetry', 'TGA thermogravimetric analysis'],
        },
        {
          title: 'Reliability evaluation',
          items: ['Temperature and humidity cycling', 'Thermal shock', 'PCT accelerated ageing'],
        },
      ],
    },
    systems: {
      heading: 'Equipment and systems',
      body:
        'Test equipment comes from international brands including PerkinElmer, Shimadzu, FRITSCH and Emcrafts. Our quality system is certified to ISO 9001, ISO 14001 and IATF 16949 for the automotive industry, and inherits the Daejoo UL Yellow Card technical system.',
    },
  },

  contact: {
    header: {
      title: 'Contact us',
      lead: 'We welcome inquiries about samples, custom formulation and technical cooperation.',
    },
    info: {
      heading: 'Contact details',
      note: 'Please book a visit or a sampling session by phone or email in advance.',
    },
  },
};

export default en;
