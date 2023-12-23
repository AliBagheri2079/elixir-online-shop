import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

import { i18n } from '@/config';
import { getPreferredLocale } from '@/utils';

export function withInternationalization(next: NextMiddleware): NextMiddleware {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = i18n.locales.some(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return next(request, event);

    // Redirect if there is no locale
    const locale = getPreferredLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return Response.redirect(request.nextUrl);
  };
}
