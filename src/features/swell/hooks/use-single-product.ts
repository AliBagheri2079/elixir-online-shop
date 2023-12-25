'use client';

import { useEffect, useReducer } from 'react';

import { getProductBySlugOrId } from '@/lib';
import type { Locale } from '@/types';

import {
  initialSingleProductState as initialState,
  singleProductReducer as reducer,
} from '../state';

type Props = {
  lang: Locale;
  slug: string;
};

export function useSingleProduct({ lang, slug }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;

    getProductBySlugOrId(lang, slug)
      .then(data => {
        if (mounted) {
          dispatch({ type: 'SET_SINGLE_PRODUCT_ITEM', payload: data });
        }
      })
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }));

    return () => {
      mounted = false;
    };
  }, [lang, slug]);

  return state;
}
