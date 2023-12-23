import type { Locale } from '@/types';

export function changePathnameLocale(pathname: string, lang: Locale) {
  if (!pathname) return '/';
  const segments = pathname.split('/');
  segments[1] = lang;

  return segments.join('/');
}
