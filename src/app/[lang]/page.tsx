import type { Metadata } from 'next';

import { Products } from '@/features';
import type { Locale } from '@/types';

type Props = {
  params: { lang: Locale };
  searchParams: { search?: string; filter?: string };
};

export const metadata: Metadata = {
  title: 'Home | Elixir Online Shop',
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
};

export default function Home({
  params: { lang },
  searchParams: { search, filter },
}: Props) {
  return <Products lang={lang} search={search} filter={filter} />;
}
