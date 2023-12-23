import type { Metadata } from 'next';

import { SingleProduct } from '@/features';
import { getProductBySlugOrId, getProducts } from '@/lib';
import type { Locale } from '@/types';

type Props = {
  params: { lang: Locale; slug: string };
};

export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  const { name: title, description } = await getProductBySlugOrId(lang, slug);

  return {
    title,
    description,
  };
}

export async function generateStaticParams({ params: { lang } }: Props) {
  const { results } = await getProducts(lang, { limit: 0 });

  return results.map(({ slug }) => ({
    slug,
  }));
}

export default function Product({ params: { lang, slug } }: Props) {
  return <SingleProduct lang={lang} slug={slug} />;
}
