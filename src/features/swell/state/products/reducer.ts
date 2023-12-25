import type { ProductResults, PromiseResponse } from '@/types';

type ReducerState = PromiseResponse<ProductResults[]>;
type ReducerAction =
  | { type: 'SET_PRODUCTS_DATA'; payload: ProductResults[] }
  | { type: 'HANDLE_LOADING'; payload: boolean }
  | { type: 'HANDLE_ERROR'; payload: Error };

type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

export const productsReducer: Reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_PRODUCTS_DATA': {
      return {
        ...state,
        data: payload,
      };
    }
    case 'HANDLE_LOADING': {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case 'HANDLE_ERROR': {
      return {
        ...state,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
