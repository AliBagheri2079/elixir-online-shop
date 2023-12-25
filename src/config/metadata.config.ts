import type { Metadata } from 'next';

export const rootMetadata: Metadata = {
  metadataBase: new URL('https://elixir-online-shop.vercel.app/'),
  title: {
    template: '%s | Elixir Online Shop',
    default: 'Elixir Online Shop • Online Shopping Marketplace',
  },
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
  generator: 'Elixir',
  applicationName: 'Elixir',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Elixir',
    'Online Shop',
    'Clothes',
    'Shoes',
    'Beauty',
    'Electronics',
  ],
  authors: [
    { name: 'Ali Bagheri', url: 'https://www.github.com/alibagheri2079' },
  ],
  creator: 'Ali Bagheri',
  publisher: 'Ali Bagheri',
  twitter: {
    card: 'summary_large_image',
    title: 'Elixir Online Shop',
    description:
      'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://elixir-online-shop.vercel.app/screenshot.png',
      alt: 'Elixir Online Shop Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fa-IR': '/fa',
    },
  },
};
