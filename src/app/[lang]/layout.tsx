import type { Metadata } from 'next';

import { ColorSchemeScript } from '@mantine/core';

import '@/styles/global.css';

import { Wallpaper } from '@/components';
import { i18n, rootMetadata } from '@/config';
import { poppins, sahel } from '@/fonts';
import { PublicLayout } from '@/layouts';
import Providers from '@/providers';
import type { Locale } from '@/types';

export const metadata: Metadata = rootMetadata;

export async function generateStaticParams() {
  return i18n.locales.map(lang => ({ lang }));
}

type Props = React.PropsWithChildren<{
  params: { lang: Locale };
}>;

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html
      className={`${poppins.variable} ${sahel.variable}`}
      lang={lang}
      dir='ltr'
    >
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body>
        <Providers>
          <Wallpaper />
          <PublicLayout>{children}</PublicLayout>
        </Providers>
      </body>
    </html>
  );
}
