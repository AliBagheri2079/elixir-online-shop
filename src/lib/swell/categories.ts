import { swellJS } from '@/config';
import type { Locale } from '@/types';
import { changeSwellLocale } from '@/utils';

type CategoryQuery = swellJS.Query;

export async function getCategories(lang: Locale, input?: CategoryQuery) {
  changeSwellLocale(lang);
  return await swellJS.categories.list(input);
}

export async function getCategoryBySlugOrId(lang: Locale, id: string) {
  changeSwellLocale(lang);
  return await swellJS.categories.get(id);
}
