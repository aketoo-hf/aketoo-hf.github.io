import type { Dict } from './types';

// english dictionary: a native b2b rewrite of the zh copy, not a literal translation.
// terminology: 环氧绝缘粉末 = epoxy insulation powder, 母排 = busbar,
// 浸塑溶胶 = plastisol, 打样 = sampling, 大州电子 = Daejoo Electronic Materials
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
    brandLatin: 'HENGFENG',
    brandLocal: '',
    brandHomeLabel: 'Hengfeng Technology home',
  },

  footer: {
    tagline:
      'Complete insulation material solutions: epoxy insulation powders and PVC insulating plastisols.',
    navHeading: 'Site navigation',
    contactHeading: 'Contact',
    companyHeading: 'Company',
    companyNameLocal: 'Dongguan Hengfeng Technology Co., Ltd.',
    companyNameLatin: 'DONGGUAN HENGFENG TECHNOLOGY CO., LTD.',
    copyright: '© 2026 Dongguan Hengfeng Technology Co., Ltd.',
    icpText: '粤ICP备XXXXXXXX号',
    icpHref: 'https://beian.miit.gov.cn/',
    icpNote: 'TODO replace with the issued ICP filing number',
    policeText: '粤公网安备 XXXXXXXXXXXXX号',
    policeHref: 'https://beian.mps.gov.cn/',
    policeNote: 'TODO replace with the issued public security filing number and link',
    sourceNote:
      'Daejoo technology and certification details are drawn from Daejoo Electronic Materials corporate materials.',
  },

  common: {
    cta: {
      heading: 'Request a sample or a custom formulation',
      body:
        'Custom formulation development, fast sampling and full process support, from first trial to series production. Technical documentation available on request.',
      button: 'Request a sample',
      buttonHref: '/en/contact/#inquiry',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    buttons: {
      requestSample: 'Request a sample',
      exploreProducts: 'Explore products',
      viewProductDetail: 'View product details',
      learnAboutCompany: 'About the company',
      backToTop: 'Back to top',
    },
    contact: {
      phone: '+86 139 4711 3888',
      phoneHref: 'tel:+8613947113888',
      phoneLabel: 'Phone',
      email: 'sales@aketoo.com',
      emailHref: 'mailto:sales@aketoo.com',
      emailLabel: 'Email',
      addresses: [
        {
          label: 'Office and R&D base (owned)',
          value:
            'Building 25, Changping Jewellery Culture Industrial Centre, 568 Huanchang North Road, Changping, Dongguan, Guangdong',
        },
        {
          label: 'Manufacturing site (former Daejoo plant)',
          value:
            'Guancheng Zone, Eastern Industrial Park, Jiangnan Avenue, Boxia Village, Qishi Town, Dongguan',
        },
      ],
      addressLabel: 'Address',
    },
    sourceFootnote:
      'Daejoo technology and certification details are drawn from Daejoo Electronic Materials corporate materials.',
  },

  chat: {
    launcherLabel: 'Open live chat',
    panelLabel: 'Hengfeng Technology assistant chat window',
    title: 'Hengfeng assistant',
    welcome:
      'Hello. I can answer questions about our epoxy insulation powders and PVC insulating plastisols, the sampling process, and how to reach us.',
    chips: [
      'How do I request a sample?',
      'What is the difference between the two lines?',
      'How flexible is the coating?',
      'What is the cure schedule?',
    ],
    faq: [
      {
        id: 'sampling',
        keywords: ['sample', 'sampling', 'trial', 'test piece', 'request'],
        answer:
          'We offer custom formulation development, fast sampling and full process support. Send us the application, the substrate and your process requirements, and we will prepare samples and support your validation testing. Call +86 139 4711 3888 or email sales@aketoo.com.',
      },
      {
        id: 'products',
        keywords: ['product', 'difference', 'powder', 'pvc', 'plastisol', 'range', 'which'],
        answer:
          'Two product lines. The epoxy insulation powder is developed for dip-coating oversized copper and aluminium busbars in AI computing centres, with high flexibility and repeated-bend resistance. The PVC insulating plastisol handles precision metal structures, with wide temperature tolerance and strong corrosion protection. Tell us your operating conditions and we will recommend the right route.',
      },
      {
        id: 'flexibility',
        keywords: ['flex', 'bend', 'busbar', 'crack', 'long bar', 'flexible', 'angle'],
        answer:
          'The high-flexibility busbar powder reaches a bend angle within 17 degrees. It resists repeated bending and thermal cycling without cracking the coating, and is developed specifically for dip-coating oversized copper and aluminium busbars.',
      },
      {
        id: 'certification',
        keywords: ['certification', 'ul', 'iso', 'iatf', 'automotive', 'standard', 'approval'],
        answer:
          'The epoxy powder line carries the international certification system inherited from Daejoo Electronic Materials: IATF 16949 for automotive, UL 105°C and UL 130°C dual temperature ratings, and the full ISO system.',
      },
      {
        id: 'curing',
        keywords: ['cure', 'curing', 'bake', 'temperature', 'oven', '180'],
        answer:
          'Reference cure for the epoxy powder is 180 degrees Celsius for 20 minutes. The exact schedule can be adjusted for your substrate and coating thickness, and we will support the validation.',
      },
      {
        id: 'thickness',
        keywords: ['thickness', 'coating', 'film', 'mm', 'thick'],
        answer:
          'Coating thickness for the epoxy powder is 0.4-1.0 mm, made to order, at UL94 V-0. Tell us the application and dielectric requirement and we will recommend the formulation and process window.',
      },
      {
        id: 'custom',
        keywords: ['custom', 'formulation', 'develop', 'adjust', 'tailor', 'bespoke'],
        answer:
          'Both lines support customisation. The epoxy powder line offers full custom formulation development; the PVC plastisol line offers formulation fine-tuning. Both come with fast sampling and end-to-end technical support. Share your substrate, operating conditions and performance targets.',
      },
      {
        id: 'contact',
        keywords: ['contact', 'phone', 'address', 'email', 'reach', 'where', 'visit'],
        answer:
          'Phone +86 139 4711 3888, email sales@aketoo.com. Our office and R&D base is in Changping, Dongguan; the manufacturing site is in Qishi Town, Dongguan. Please arrange visits and sampling in advance.',
      },
      {
        id: 'company',
        keywords: ['company', 'background', 'daejoo', 'history', 'acquisition', 'about', 'who'],
        answer:
          'Dongguan Hengfeng Technology has worked in insulation materials for 25 years. It acquired the Dongguan polymer powder division of Daejoo Electronic Materials, a KOSDAQ-listed Korean company, taking over the full formulation database, core technology, production lines, technical team and international certification system, with production continuing at the original site.',
      },
    ],
    fallback:
      'That one needs an engineer to confirm. Please call +86 139 4711 3888 or email sales@aketoo.com and we will come back to you shortly.',
    inputLabel: 'Type your question',
    inputPlaceholder: 'Type your question',
    sendLabel: 'Send',
    closeLabel: 'Close chat window',
    youLabel: 'You',
    botLabel: 'Assistant',
  },

  form: {
    heading: 'Enquiry',
    intro: 'Send us the details below and our engineering and sales team will get back to you.',
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
      name: 'Your name',
      company: 'Full company name',
      phone: 'Mobile or landline',
      email: 'Work email',
      message:
        'Product line (epoxy powder or PVC plastisol), application, substrate and performance requirements',
    },
    errors: {
      name: 'Please enter your name',
      company: 'Please enter your company name',
      phone: 'Please enter a phone number',
      phoneFormat: 'Please enter a valid phone number',
      email: 'Please enter a valid email address',
      message: 'Please describe your requirement',
    },
    submit: 'Send enquiry',
    submitting: 'Sending',
    success: 'Thank you. We will be in touch within one working day.',
    failure: 'The message did not go through. Please try again, or call +86 139 4711 3888.',
    mailtoNote:
      'Your email client is open. Send the message to sales@aketoo.com to complete the enquiry.',
    mailtoSubject: 'Hengfeng Technology enquiry',
    mailtoIntro: 'Enquiry submitted through www.aketoo.com:',
  },

  seo: {
    siteName: 'Dongguan Hengfeng Technology Co., Ltd.',
    ogImage: '/og/busbar-epoxy-1200.jpg',
    ogImageAlt: 'Copper busbars coated with green epoxy insulation powder',
    home: {
      title: 'HENGFENG · High-Performance Insulation Material Solutions',
      description:
        'Dongguan Hengfeng Technology has worked in insulation materials for 25 years and has acquired the Dongguan polymer powder division of Korea-based Daejoo Electronic Materials. Epoxy insulation powders and PVC insulating plastisols for AI computing, electric vehicles, hydrogen, wind power and industrial control.',
    },
    about: {
      title: 'About · Dongguan Hengfeng Technology Co., Ltd.',
      description:
        '25 years of domestic insulation-material experience combined with 45 years of Daejoo global technology. Hengfeng has taken over the formulation database, core technology, production lines, technical team and international certification system of the Daejoo Dongguan powder division, with production continuing at the original site.',
    },
    products: {
      title: 'Products · Dongguan Hengfeng Technology Co., Ltd.',
      description:
        'High-flexibility epoxy insulation powder for dip-coating oversized copper and aluminium busbars: bend angle within 17 degrees, coating thickness 0.4-1.0 mm made to order, reference cure 180 degrees Celsius for 20 minutes, UL94 V-0. Plus high-performance PVC insulating plastisol with wide temperature tolerance and strong corrosion protection.',
    },
    applications: {
      title: 'Applications · Dongguan Hengfeng Technology Co., Ltd.',
      description:
        'Five strategic industries: AI computing centres, electric vehicles, hydrogen vehicles and equipment, wind power, and high-end industrial control and charging systems. Busbar insulation and precision metal structure coating solutions.',
    },
    quality: {
      title: 'Quality · Dongguan Hengfeng Technology Co., Ltd.',
      description:
        'The full process standards and precision testing platform inherited from Daejoo Electronic Materials, with IATF 16949 automotive certification and UL dual temperature ratings, plus physical, thermal, dielectric and insulation testing across every core specification.',
    },
    contact: {
      title: 'Contact · Dongguan Hengfeng Technology Co., Ltd.',
      description:
        'Enquiries on samples, custom formulations and technical cooperation. Phone +86 139 4711 3888, email sales@aketoo.com. Office and R&D base in Changping, Dongguan; manufacturing site in Qishi Town, Dongguan.',
    },
  },

  home: {
    hero: {
      eyebrow: 'HENGFENG TECHNOLOGY · SINCE 2001',
      titleLine1: 'High-performance',
      titleLine2: 'insulation materials',
      subtitle:
        '25 years in insulation materials, now carrying the acquired Daejoo Dongguan powder division.',
      imageAlt: 'Copper busbars coated with green epoxy insulation powder',
    },
    stats: {
      heading: 'Key figures',
      items: [
        { value: '25', unit: 'yrs', label: 'In insulation materials' },
        { value: '45', unit: 'yrs', label: 'Of Daejoo global technology' },
        { value: 'IATF', unit: '16949', label: 'Automotive quality system' },
        { value: '105/130', unit: '°C', label: 'UL dual temperature ratings' },
      ],
    },
    domains: {
      heading: 'Key application areas',
      feature: {
        title: 'AI computing centres',
        body:
          'A dedicated high-flexibility insulation solution for the oversized copper and aluminium busbars used in AI computing halls.',
        href: '/en/applications/#ai-computing',
        imageAlt: 'Copper busbars coated with green epoxy insulation powder',
      },
      items: [
        {
          title: 'Electric vehicles',
          body: 'Battery pack and high-voltage busbar system insulation.',
          href: '/en/applications/#new-energy-vehicle',
        },
        {
          title: 'Hydrogen vehicles and equipment',
          body: 'Fuel cells and high-voltage hydrogen control systems.',
          href: '/en/applications/#hydrogen',
        },
        {
          title: 'Wind power equipment',
          body: 'Core insulating structural parts for wind turbines.',
          href: '/en/applications/#wind-power',
        },
        {
          title: 'Industrial control and charging',
          body: 'Metal connector coating for control gear and chargers.',
          href: '/en/applications/#industrial',
        },
      ],
    },
    lineup: {
      heading: 'Two product lines',
      items: [
        {
          title: 'Epoxy insulation powder for AI computing',
          body: 'Developed for dip-coating the oversized copper and aluminium busbars.',
          highlights: [
            'High flexibility',
            'Repeated-bend resistance',
            'Stable dielectric strength',
            'Strong at high temperature',
          ],
          imageAlt: 'Copper busbars coated with green epoxy insulation powder',
        },
        {
          title: 'High-performance PVC insulating plastisol',
          body: 'Suited to precision metal structures, with strong corrosion protection.',
          highlights: [
            'Wide temperature range',
            'Stable insulation resistance',
            'Strong corrosion protection',
            'High adhesion',
          ],
          imageAlt: 'Copper busbars coated with blue PVC insulating plastisol',
        },
      ],
      linkLabel: 'View product details',
      linkHref: '/en/products/',
    },
    customers: {
      heading: 'Selected customers',
      lead: 'Serving leading manufacturers, with product quality proven in demanding production.',
      names: [
        'Huawei',
        'BYD',
        'CATL',
        'Parker',
        'GWM',
        'Lead Intelligent',
        'Leadmicro',
        'Kaizhong Precision',
        'Xiangxin Technology',
        'Sunway Communication',
        'Feilongda',
        'Huaxian',
        'Shenzhen Numeric Mould',
        'Zhongshan Numeric Mould',
        'Hydrogine',
        'Darui Electronics',
      ],
      note: 'A partial list of partners, in no particular order.',
    },
    endorsement: {
      heading: '25 local years, 45 global years',
      body:
        'Hengfeng acquired the Dongguan polymer powder division of Daejoo Electronic Materials, a KOSDAQ-listed Korean company, taking over the complete formulation database, core technology, industrial production lines, technical team and international certification system. Production continues at the original site.',
      certifications: 'IATF 16949 · UL 105°C / UL 130°C · Full ISO system (inherited)',
      linkLabel: 'About the company',
      linkHref: '/en/about/',
    },
  },

  about: {
    header: {
      title: 'About Hengfeng',
      lead:
        'Dongguan Hengfeng Technology has worked in insulation materials for 25 years, from its own office and R&D base, with dedicated laboratory facilities and a portfolio of granted invention patents.',
    },
    story: {
      heading: 'Acquisition and technology transfer',
      paragraphs: [
        'Backed by industrial capital and integration capability, Hengfeng acquired the Dongguan polymer powder division of Daejoo Electronic Materials, a KOSDAQ-listed Korean company, taking over the division’s complete formulation database, accumulated core technology, industrial production lines, technical team and full international certification system.',
        'Daejoo Electronic Materials brings 45 years of polymer insulation material development and manufacturing. Its epoxy powder business holds IATF 16949 automotive certification, UL 105°C and UL 130°C safety approvals and the full ISO system, and has long served leading global manufacturers.',
        'Epoxy powder production continues at the original plant. Hengfeng combines 25 years of domestic experience with 45 years of Daejoo global technology to supply AI computing, electric vehicles, hydrogen vehicles, wind power equipment and high-voltage industrial control.',
      ],
    },
    strengths: {
      heading: 'Technical background and capability',
      items: [
        {
          title: '25 years in the field',
          body:
            'A working knowledge of domestic high-end manufacturing conditions, and the capacity to execute large industrial acquisitions and technology integration.',
        },
        {
          title: 'Acquired a listed company division',
          body:
            'The full powder business of a multinational: assets, technology, production lines and international certifications.',
        },
        {
          title: '45 years of international technology',
          body: 'Daejoo global development processes, production standards and quality control, adopted in full.',
        },
        {
          title: 'International certifications',
          body: 'IATF 16949, UL 105°C and UL 130°C safety approvals and the full ISO system, inherited with the division.',
        },
        {
          title: 'Own R&D base',
          body: 'An independent office and R&D facility, equipped laboratories, and several granted invention patents.',
        },
        {
          title: 'Production continues on site',
          body: 'Lines, processes and the technical team all retained, holding the quality standard of an international manufacturer.',
        },
      ],
    },
    dualAdvantage: {
      heading: 'Two sources of advantage',
      local: { value: '25', unit: 'yrs', label: 'Hengfeng domestic industry experience' },
      global: { value: '45', unit: 'yrs', label: 'Daejoo global technology' },
      statement:
        'Understanding local operating conditions, working to global technical standards. That combination is what sets Hengfeng apart in high-end insulation materials.',
    },
  },

  products: {
    header: {
      title: 'Products',
      lead:
        'Two product lines covering the main process routes for high-end insulation coating: epoxy insulation powder and PVC insulating plastisol.',
    },
    lineup: [
      {
        id: 'epoxy-powder',
        tag: 'Product one · AI computing',
        heading: 'High-flexibility epoxy insulation powder for long busbars',
        body:
          'Built on 45 years of Daejoo powder technology and developed specifically for dip-coating the oversized copper and aluminium busbars used in AI computing centres.',
        specs: [
          { value: '≤ 17', unit: '°', label: 'Bend angle' },
          { value: '0.4-1.0', unit: 'mm', label: 'Coating thickness, made to order' },
          { value: '180', unit: '°C / 20 min', label: 'Reference cure' },
          { value: 'V-0', unit: '', label: 'Flammability rating (UL94)' },
        ],
        performance: [
          'High flexibility',
          'Resists repeated bending',
          'Stable dielectric strength',
          'Strong high-temperature performance',
          'Reliable insulation',
        ],
        applications: [
          'Insulation for oversized busbars in AI computing centres',
          'High-voltage busbar systems in EV battery packs',
          'Fuel cell and high-voltage control components in hydrogen vehicles',
          'Wind turbine structural parts, chargers and industrial control equipment',
        ],
        service: 'Custom formulation development · Fast sampling · Full process support',
        certifications: 'Inherited UL 105°C, UL 130°C and IATF 16949 certification',
        imageAlt: 'Copper busbars coated with green epoxy insulation powder',
      },
      {
        id: 'pvc-plastisol',
        tag: 'Product two · Precision metal parts',
        heading: 'High-performance PVC insulating plastisol',
        body:
          'Wide temperature tolerance, stable insulation and strong corrosion protection, suited to insulation coating of precision metal structures.',
        specs: [],
        performance: [
          'Wide temperature range',
          'Stable insulation resistance',
          'Strong corrosion protection',
          'High adhesion',
          'Smooth, even surface',
        ],
        applications: [
          'Insulation for high-voltage connectors in EV and hydrogen vehicles',
          'Metal connector coating for power, wind and industrial control equipment',
          'Corrosion, insulation and wear protection for precision metal parts',
        ],
        service: 'Formulation fine-tuning · Fast sampling · Full technical support',
        certifications: '',
        imageAlt: 'Copper busbars coated with blue PVC insulating plastisol',
      },
    ],
    performanceLabel: 'Performance',
    applicationsLabel: 'Applications',
    serviceLabel: 'Support',
    process: {
      heading: 'How we work',
      steps: [
        {
          title: 'Define conditions',
          body: 'Application, substrate, process route and performance targets.',
        },
        {
          title: 'Sample and validate',
          body: 'Custom formulation and fast sampling, supporting your test programme.',
        },
        {
          title: 'Series delivery',
          body: 'Volume production with ongoing quality tracking and process support.',
        },
      ],
    },
  },

  applications: {
    header: {
      title: 'Key application areas',
      lead: 'Five strategic industries, served with high-end insulation materials.',
    },
    items: [
      {
        id: 'ai-computing',
        heading: 'AI computing centres',
        body:
          'A dedicated high-flexibility insulation solution for dip-coating the oversized copper and aluminium busbars used in AI computing halls.',
        note: '',
        imageAlt: '',
      },
      {
        id: 'new-energy-vehicle',
        heading: 'Electric vehicles',
        body:
          'Insulation for battery packs and high-voltage busbar systems, including the connecting busbars inside the pack.',
        note: 'Both the epoxy powder and PVC plastisol routes can be matched to different parts and line conditions.',
        imageAlt: 'Copper busbars coated with green epoxy insulation powder',
      },
      {
        id: 'hydrogen',
        heading: 'Hydrogen vehicles and equipment',
        body:
          'Insulation for fuel cells and high-voltage hydrogen control systems, where reliability and environmental resistance are critical.',
        note: '',
        imageAlt: '',
      },
      {
        id: 'wind-power',
        heading: 'Wind power equipment',
        body:
          'Core insulating structural parts for wind turbines, giving metal components long-term insulation and corrosion protection outdoors.',
        note: '',
        imageAlt: 'Copper busbars coated with blue PVC insulating plastisol',
      },
      {
        id: 'industrial',
        heading: 'Industrial control and charging systems',
        body:
          'Insulation coating, corrosion and wear protection for metal connectors in industrial control equipment and charging stations.',
        note: '',
        imageAlt: '',
      },
    ],
  },

  quality: {
    header: {
      title: 'Quality system',
      lead:
        'The R&D system and precision testing platform of an international manufacturer, inherited in full and run to a strict quality standard.',
    },
    framework: {
      heading: 'Five pillars',
      items: [
        {
          title: 'Inherited global R&D system',
          body: 'The complete Daejoo process standards and precision testing platform.',
        },
        {
          title: 'International certification base',
          body: 'IATF 16949 automotive certification and UL dual temperature ratings.',
        },
        {
          title: 'Full performance testing',
          body:
            'Physical, thermal, dielectric and insulation testing across every core specification.',
        },
        {
          title: 'Formulation development',
          body:
            'Continuous formulation work for the AI computing, EV, hydrogen and wind power sectors.',
        },
        {
          title: 'Own intellectual property',
          body: 'Several granted invention patents, with ongoing development in high-end insulation materials.',
        },
      ],
    },
    labMatrix: {
      heading: 'Testing platform',
      lead:
        'Analytical equipment taken over with the Daejoo Dongguan division, covering incoming material verification, microstructure, thermal characterisation and finished-product reliability.',
      groups: [
        {
          title: 'Composition',
          items: ['ICP-OES elemental analysis', 'FT-IR spectroscopy', 'XRF spectroscopy'],
        },
        {
          title: 'Particle',
          items: ['SEM-EDX electron microscopy', 'PSA particle size', 'BET surface area'],
        },
        {
          title: 'Thermal',
          items: ['DSC calorimetry', 'TGA thermogravimetry'],
        },
        {
          title: 'Reliability',
          items: ['Temperature and humidity cycling', 'Thermal shock', 'PCT accelerated ageing'],
        },
      ],
      footnote: 'Equipment list drawn from Daejoo Electronic Materials corporate materials.',
    },
    systems: {
      heading: 'Standards',
      body:
        'The epoxy powder line carries the international certification system inherited from Daejoo Electronic Materials: IATF 16949 for automotive, UL 105°C and UL 130°C dual temperature ratings, and the full ISO system. Lines, processes and the technical team remain at the original plant, holding the quality standard of an international manufacturer.',
    },
  },

  contact: {
    header: {
      title: 'Contact',
      lead: 'Enquiries on samples, custom formulations and technical cooperation are welcome.',
    },
    info: {
      heading: 'Contact details',
      note: 'Please arrange visits and sampling in advance by phone or email.',
    },
  },
};

export default en;
