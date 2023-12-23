import { swellJS } from '@/config';
import type { Locale } from '@/types';
import { changeSwellLocale } from '@/utils';

type ProductQuery = swellJS.ProductQuery;

export async function getProducts(lang: Locale, input?: ProductQuery) {
  changeSwellLocale(lang);
  return await swellJS.products.list(input);
}

export async function getProductBySlugOrId(
  lang: Locale,
  id: string,
  input?: ProductQuery,
) {
  changeSwellLocale(lang);
  return await swellJS.products.get(id, input);
}
