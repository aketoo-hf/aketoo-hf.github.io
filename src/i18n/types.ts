// complete dictionary contract for the HENGFENG site
// every visible string on the site must originate from one of these fields

export type Locale = 'zh' | 'en';

export type PageKey =
  | 'home'
  | 'about'
  | 'products'
  | 'applications'
  | 'quality'
  | 'contact';

/** a labelled figure rendered with the mono / tabular-nums stack */
export interface Figure {
  value: string;
  unit: string;
  label: string;
}

/** title + body pair used by capability points, process steps, product cards */
export interface TitledText {
  title: string;
  body: string;
}

export interface ListGroup {
  title: string;
  items: string[];
}

export interface SeoEntry {
  title: string;
  description: string;
}

/** one of the company's two sites (office / r&d base and the plant) */
export interface AddressEntry {
  label: string;
  value: string;
}

export interface NavDict {
  home: string;
  about: string;
  products: string;
  applications: string;
  quality: string;
  contact: string;
  /** aria labels + assistive copy for the header shell */
  menuOpen: string;
  menuClose: string;
  menuLabel: string;
  langLabel: string;
  langZh: string;
  langEn: string;
  skipToContent: string;
  brandLatin: string;
  /** empty string on the en build, per spec 4.1 */
  brandLocal: string;
  brandHomeLabel: string;
}

export interface FooterDict {
  tagline: string;
  navHeading: string;
  contactHeading: string;
  companyHeading: string;
  companyNameLocal: string;
  companyNameLatin: string;
  copyright: string;
  icpText: string;
  icpHref: string;
  icpNote: string;
  policeText: string;
  policeHref: string;
  policeNote: string;
  sourceNote: string;
}

export interface CommonDict {
  /** shared CTA band copy, reused verbatim on every page (spec 6.1 S6) */
  cta: {
    heading: string;
    body: string;
    button: string;
    buttonHref: string;
    phoneLabel: string;
    emailLabel: string;
  };
  buttons: {
    /** the single global "contact / sample" intent wording */
    requestSample: string;
    exploreProducts: string;
    viewProductDetail: string;
    learnAboutCompany: string;
    backToTop: string;
  };
  contact: {
    phone: string;
    phoneHref: string;
    phoneLabel: string;
    email: string;
    emailHref: string;
    emailLabel: string;
    /** two sites: the owned office / r&d base and the acquired plant */
    addresses: AddressEntry[];
    addressLabel: string;
  };
  /** spec 8.4 footnote, at most one per page */
  sourceFootnote: string;
}

export interface ChatFaqEntry {
  id: string;
  /** lowercase match tokens, zh and en tokens may be mixed in one entry */
  keywords: string[];
  answer: string;
}

export interface ChatDict {
  launcherLabel: string;
  panelLabel: string;
  title: string;
  subtitle: string;
  welcome: string;
  chips: string[];
  faq: ChatFaqEntry[];
  fallback: string;
  inputLabel: string;
  inputPlaceholder: string;
  sendLabel: string;
  closeLabel: string;
  youLabel: string;
  botLabel: string;
}

export interface FormDict {
  heading: string;
  intro: string;
  requiredMark: string;
  optionalMark: string;
  labels: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
  };
  placeholders: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
  };
  errors: {
    name: string;
    company: string;
    phone: string;
    phoneFormat: string;
    email: string;
    message: string;
  };
  submit: string;
  submitting: string;
  success: string;
  failure: string;
  /** shown when FORM_ENDPOINT is null and the mailto fallback runs */
  mailtoNote: string;
  mailtoSubject: string;
  mailtoIntro: string;
}

export interface HomeDict {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    imageAlt: string;
  };
  stats: {
    heading: string;
    items: Figure[];
  };
  domains: {
    heading: string;
    feature: {
      title: string;
      body: string;
      href: string;
      imageAlt: string;
    };
    /** four secondary cells, so the bento holds exactly five application areas */
    items: Array<{ title: string; body: string; href: string }>;
  };
  /** the two product lines, previewed side by side */
  lineup: {
    heading: string;
    items: Array<{ title: string; body: string; highlights: string[]; imageAlt: string }>;
    linkLabel: string;
    linkHref: string;
  };
  customers: {
    heading: string;
    lead: string;
    names: string[];
    note: string;
  };
  endorsement: {
    heading: string;
    body: string;
    /** the one line where 3 middle dots are allowed (spec 8.7) */
    certifications: string;
    linkLabel: string;
    linkHref: string;
  };
}

export interface AboutDict {
  header: {
    title: string;
    lead: string;
  };
  story: {
    heading: string;
    paragraphs: string[];
  };
  /** the six hard-capability points */
  strengths: {
    heading: string;
    items: TitledText[];
  };
  /** local depth plus acquired global technology, stated as one equation */
  dualAdvantage: {
    heading: string;
    local: Figure;
    global: Figure;
    statement: string;
  };
}

export interface ProductEntry {
  id: string;
  tag: string;
  heading: string;
  body: string;
  /** 核心性能 */
  performance: string[];
  /** 核心应用 */
  applications: string[];
  /** 配套服务 */
  service: string;
  /** optional certification line, only the epoxy line carries one */
  certifications: string;
  imageAlt: string;
}

export interface ProductsDict {
  header: {
    title: string;
    lead: string;
  };
  /** exactly two entries: epoxy powder, then pvc plastisol */
  lineup: ProductEntry[];
  performanceLabel: string;
  applicationsLabel: string;
  serviceLabel: string;
  process: {
    heading: string;
    steps: TitledText[];
  };
}

export interface ApplicationEntry {
  id: string;
  heading: string;
  body: string;
  note: string;
  imageAlt: string;
}

export interface ApplicationsDict {
  header: {
    title: string;
    lead: string;
  };
  /** five strategic industries, rendered with alternating layouts by index */
  items: ApplicationEntry[];
}

export interface QualityDict {
  header: {
    title: string;
    lead: string;
  };
  /** the five pillars of the inherited quality system */
  framework: {
    heading: string;
    items: TitledText[];
  };
  labMatrix: {
    heading: string;
    lead: string;
    groups: ListGroup[];
    footnote: string;
  };
  systems: {
    heading: string;
    body: string;
  };
}

export interface ContactDict {
  header: {
    title: string;
    lead: string;
  };
  info: {
    heading: string;
    note: string;
  };
}

export interface SeoDict {
  siteName: string;
  /** absolute og image path, resolved against `site` at render time */
  ogImage: string;
  ogImageAlt: string;
  home: SeoEntry;
  about: SeoEntry;
  products: SeoEntry;
  applications: SeoEntry;
  quality: SeoEntry;
  contact: SeoEntry;
}

export interface Dict {
  locale: Locale;
  htmlLang: string;
  nav: NavDict;
  footer: FooterDict;
  common: CommonDict;
  chat: ChatDict;
  form: FormDict;
  seo: SeoDict;
  home: HomeDict;
  about: AboutDict;
  products: ProductsDict;
  applications: ApplicationsDict;
  quality: QualityDict;
  contact: ContactDict;
}

/** uniform props contract for every section component */
export interface SectionProps {
  t: Dict;
  locale: Locale;
}
