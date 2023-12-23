import { swellJS } from '@/config';
import type { Locale } from '@/types';

export function changeSwellLocale(lang: Locale) {
  const defaultLocale = 'en';
  const alternateLocale = 'az';

  return swellJS.locale.select(lang === 'en' ? defaultLocale : alternateLocale);
}
