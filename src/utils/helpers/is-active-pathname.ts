export function isActivePathname(pathname: string, href: string) {
  const segments = pathname.split('/').slice(2);
  const mainSegment = `/${segments.join('/')}`;

  return mainSegment === href;
}
