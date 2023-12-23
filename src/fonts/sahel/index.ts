import localFont from 'next/font/local';

export const sahel = localFont({
  src: [
    {
      path: './default/index.woff2',
      weight: 'normal',
    },
    {
      path: './bold/index.woff2',
      weight: 'bold',
    },
    {
      path: './light/index.woff2',
      weight: '300',
    },
    {
      path: './semi-bold/index.woff2',
      weight: '600',
    },
    {
      path: './black/index.woff2',
      weight: '900',
    },
  ],
  style: 'normal',
  variable: '--font-sahel',
  display: 'swap',
});
