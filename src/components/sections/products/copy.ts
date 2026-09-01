// local copy for the products sections only, for strings the shared dictionary
// does not carry. shared i18n files are never edited from here.
import type { Locale } from '../../../i18n/types';

interface ProductsSectionCopy {
  /** text link from the flagship block into the matching application section */
  applicationsLink: string;
}

export const productsCopy: Record<Locale, ProductsSectionCopy> = {
  zh: {
    applicationsLink: '查看应用场景',
  },
  en: {
    applicationsLink: 'See where it is used',
  },
};
