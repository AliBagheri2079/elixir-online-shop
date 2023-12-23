import type { ProductResults, PromiseResponse } from '@/types';

type ReducerState = Omit<PromiseResponse<ProductResults[]>, 'isLoading'>;
type ReducerAction =
  | { type: 'SET_PRODUCTS_ITEM'; payload: ProductResults[] }
  | { type: 'HANDLE_ERROR'; payload: Error };

type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

export const productsReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_ITEM': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'HANDLE_ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
