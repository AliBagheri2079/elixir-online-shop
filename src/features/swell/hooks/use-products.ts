'use client';

import { useEffect, useReducer, useState } from 'react';

import { useIntersection } from '@mantine/hooks';

import { getProducts } from '@/lib';
import type { Locale } from '@/types';
import { PRODUCT_MAX_PRICE, PRODUCTS_PER_PAGE } from '@/utils';

import {
  initialProductsState as initialState,
  productsReducer as reducer,
} from '../state';

type Props = {
  root: Element | Document | null | undefined;
  lang: Locale;
  search?: string;
  filter?: string;
};

export function useProducts({ root, lang, search, filter }: Props) {
  const [{ data, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [limit, setLimit] = useState(PRODUCTS_PER_PAGE);
  const [total, setTotal] = useState(0);

  const { ref: loaderRef, entry } = useIntersection({
    root,
    threshold: 1,
  });

  const inView = entry?.isIntersecting;
  const isLoaderMounted = total > limit;
  const isInfiniteScroll = total - limit >= PRODUCTS_PER_PAGE;

  useEffect(() => {
    if (inView) {
      setLimit(preLimit =>
        isInfiniteScroll ? preLimit + PRODUCTS_PER_PAGE : total,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    let mounted = true;

    if (mounted) dispatch({ type: 'HANDLE_LOADING', payload: true });

    getProducts(lang, {
      $filters: {
        price: [0, +(filter ?? PRODUCT_MAX_PRICE)],
      },
      limit,
      search,
    })
      .then(({ results, count }) => {
        if (mounted) {
          dispatch({
            type: 'SET_PRODUCTS_DATA',
            payload: results,
          });
          setTotal(count);
        }
      })
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }))
      .finally(() => dispatch({ type: 'HANDLE_LOADING', payload: false }));

    return () => {
      mounted = false;
    };
  }, [lang, search, filter, limit]);

  return { data, error, isLoading, isLoaderMounted, loaderRef };
}
