'use client';

import { useEffect, useReducer, useState } from 'react';

import { getProducts } from '@/lib';
import type { Locale } from '@/types';

import {
  initialProductsState as initialState,
  productsReducer as reducer,
} from '../state';

type Props = {
  lang: Locale;
  limit: number;
  search?: string;
  filter?: number;
};

export function useProducts({ lang, limit, search, filter }: Props) {
  const [{ data, error }, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    getProducts(lang, {
      $filters: {
        price: [0, filter],
      },
      limit,
      search,
    })
      .then(({ results, count }) => {
        dispatch({ type: 'SET_PRODUCTS_ITEM', payload: results });
        setTotal(count);
      })
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }))
      .finally(() => setLoading(false));
  }, [lang, search, filter, limit]);

  return { data, error, isLoading, total };
}
