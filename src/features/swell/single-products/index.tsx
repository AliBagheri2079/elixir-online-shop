'use client';

import {
  ErrorAlert,
  ProductDetails,
  ProductDetailsPlaceholder,
} from '@/components';
import type { Locale } from '@/types';

import { useSingleProduct } from '../hooks';

type Props = {
  lang: Locale;
  slug: string;
};

export function SingleProduct({ lang, slug }: Props) {
  const { data, isLoading, error } = useSingleProduct({
    lang,
    slug,
  });

  return (
    <>
      {error ? (
        <ErrorAlert message={error.message} />
      ) : isLoading ? (
        <ProductDetailsPlaceholder />
      ) : (
        <ProductDetails {...data!} />
      )}
    </>
  );
}
