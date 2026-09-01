import type { Dict, Locale, PageKey } from './types';
import { zh } from './zh';
import { en } from './en';

export type { Dict, Locale, PageKey, SectionProps } from './types';

export const defaultLocale: Locale = 'zh';
export const locales: readonly Locale[] = ['zh', 'en'] as const;

const dicts: Record<Locale, Dict> = { zh, en };

/** html lang attribute + hreflang code per locale */
export const htmlLang: Record<Locale, string> = { zh: 'zh-CN', en: 'en' };

/** canonical locale-neutral path of every page, keyed by page id */
export const pagePaths: Record<PageKey, string> = {
  home: '/',
  about: '/about/',
  products: '/products/',
  applications: '/applications/',
  quality: '/quality/',
  contact: '/contact/',
};

/** navigation order used by both the header and the footer */
export const navOrder: readonly PageKey[] = [
  'home',
  'about',
  'products',
  'applications',
  'quality',
  'contact',
] as const;

export function isLocale(value: unknown): value is Locale {
  return value === 'zh' || value === 'en';
}

/** the dictionary for a locale, falling back to zh */
export function getDict(locale: Locale | string | undefined): Dict {
  return isLocale(locale) ? dicts[locale] : dicts[defaultLocale];
}

/** locale implied by a pathname, e.g. /en/about/ -> en */
export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

/** strip the /en prefix so a path can be re-localised */
export function stripLocale(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname || '/';
}

/** prefix a locale-neutral path for the target locale (zh stays at the root) */
export function localizePath(path: string, locale: Locale): string {
  const base = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'zh') return base;
  return base === '/' ? '/en/' : `/en${base}`;
}

/** the same page in the other locale, used by the language switch */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(stripLocale(pathname), target);
}

/** localized href for a known page */
export function pageHref(page: PageKey, locale: Locale): string {
  return localizePath(pagePaths[page], locale);
}

export interface NavLink {
  key: PageKey;
  label: string;
  href: string;
}

/** header and footer navigation, already localized */
export function getNavLinks(t: Dict, locale: Locale): NavLink[] {
  return navOrder.map((key) => ({
    key,
    label: t.nav[key],
    href: pageHref(key, locale),
  }));
}

/** true when the current pathname is the given page, ignoring trailing slash */
export function isCurrentPage(pathname: string, page: PageKey, locale: Locale): boolean {
  const target = pageHref(page, locale).replace(/\/$/, '');
  const current = pathname.replace(/\/$/, '');
  return (current || '/') === (target || '/');
}

/** absolute url against the configured site origin, for canonical / og tags */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ? site.origin : 'https://www.aketoo.com';
  return new URL(path, origin).href;
}
