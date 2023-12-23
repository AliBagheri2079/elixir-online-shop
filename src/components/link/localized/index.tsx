'use client';

import Link from 'next/link';

import { useLocale } from '@/hooks';

type Props = React.ComponentPropsWithoutRef<typeof Link>;

export function LocalizedLink({ href, ...props }: Props) {
  const locale = useLocale();

  const urlPath = `/${locale}`;
  let fullUrl = urlPath as typeof href;
  if (typeof href === 'string') {
    fullUrl = urlPath.concat(href);
  } else {
    const { pathname, ...options } = href;
    fullUrl = {
      pathname: urlPath.concat(pathname!),
      ...options,
    };
  }

  return <Link href={fullUrl} {...props} />;
}
