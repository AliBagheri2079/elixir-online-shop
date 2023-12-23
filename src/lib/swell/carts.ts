import { swellJS } from '@/config';
import type { Locale } from '@/types';
import { changeSwellLocale } from '@/utils';

type CartItem = swellJS.CartItem;

export async function getCart(lang: Locale, input?: string) {
  changeSwellLocale(lang);
  return await swellJS.cart.get(input);
}

export async function addCartItem(input: CartItem) {
  return await swellJS.cart.addItem(input);
}

export async function updateCartItem(
  lang: Locale,
  id: string,
  input: CartItem,
) {
  changeSwellLocale(lang);
  return await swellJS.cart.updateItem(id, input);
}

export async function removeCartItem(input: string) {
  return await swellJS.cart.removeItem(input);
}

export async function emptyTheCart() {
  return await swellJS.cart.setItems([]);
}
