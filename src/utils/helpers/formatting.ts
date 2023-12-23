import type { Locale } from '@/types';

export const formatting = {
  currency: function (lang: Locale) {
    return new Intl.NumberFormat(lang, {
      style: 'currency',
      currency: lang === 'en' ? 'USD' : 'IRR',
      maximumFractionDigits: 2,
    });
  },
  compact: function (lang: Locale) {
    return new Intl.NumberFormat(lang, {
      notation: 'compact',
      compactDisplay: 'short',
    });
  },
};
