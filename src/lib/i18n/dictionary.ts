// import 'server-only';
import type { Locale } from '@/types';

const dictionaries = {
  en: () =>
    import('@/data/dictionaries/en.json').then(module => module.default),
  fa: () =>
    import('@/data/dictionaries/fa.json').then(module => module.default),
};

export async function getDictionary(lang: Locale) {
  return dictionaries[lang]();
}
