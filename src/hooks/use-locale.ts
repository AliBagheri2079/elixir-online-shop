'use client';

import { usePathname } from 'next/navigation';

import type { Locale } from '@/types';

export function useLocale() {
  const pathname = usePathname();
  const locale = pathname.split('/').at(1) as Locale;

  return locale;
}
