// complete dictionary contract for the AKETOO site
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

/** title + body pair used by feature groups, timeline rows, process steps */
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
    address: string;
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
    items: Array<{ title: string; body: string; href: string }>;
  };
  flagship: {
    heading: string;
    specs: Figure[];
    summary: string;
    linkLabel: string;
    linkHref: string;
    imageAlt: string;
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
  timeline: {
    heading: string;
    items: Array<{ year: string; event: string }>;
  };
  facility: {
    heading: string;
    items: Figure[];
    footnote: string;
  };
  footprint: {
    heading: string;
    items: TitledText[];
  };
}

export interface ProductsDict {
  header: {
    title: string;
    lead: string;
  };
  flagship: {
    tag: string;
    heading: string;
    body: string;
    specs: Figure[];
    imageAlt: string;
  };
  features: {
    heading: string;
    groups: ListGroup[];
  };
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
  anchorYear: string;
  imageAlt: string;
}

export interface ApplicationsDict {
  header: {
    title: string;
    lead: string;
  };
  aiComputing: ApplicationEntry;
  busbar: ApplicationEntry;
  passive: ApplicationEntry;
  automotive: ApplicationEntry;
}

export interface QualityDict {
  header: {
    title: string;
    lead: string;
  };
  investment: {
    heading: string;
    items: Figure[];
    footnote: string;
  };
  labMatrix: {
    heading: string;
    groups: ListGroup[];
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
