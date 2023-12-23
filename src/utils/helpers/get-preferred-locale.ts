import type { NextRequest } from 'next/server';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { i18n } from '@/config';

export function getPreferredLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const requestedLocales: readonly string[] = new Negotiator({
    headers: negotiatorHeaders,
  }).languages();
  const availableLocales: readonly string[] = [...i18n.locales];
  const defaultLocale: string = i18n.defaultLocale;

  return match(requestedLocales, availableLocales, defaultLocale);
}
