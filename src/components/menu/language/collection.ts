import { getDictionary } from '@/lib';
import type { LanguageProps, Locale } from '@/types';

export async function getLanguageCollection(lang: Locale) {
  const { language } = await getDictionary(lang);

  const collection: LanguageProps[] = [
    {
      label: 'en',
      title: language.english,
    },
    {
      label: 'fa',
      title: language.persian,
    },
  ];
  return collection;
}
