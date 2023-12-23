'use client';

import { useEffect, useReducer } from 'react';

import { useLocale } from '@/hooks';

import {
  getNavLinkCollection as getCollection,
  initialNavLinkState as initialState,
  navLinkReducer as reducer,
} from '../state';

export function useNavLink() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const locale = useLocale();

  useEffect(() => {
    getCollection(locale)
      .then(response =>
        dispatch({ type: 'SET_NAVLINK_ITEM', payload: response }),
      )
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }));
  }, [locale]);

  return state;
}
