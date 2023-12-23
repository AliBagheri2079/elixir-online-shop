import type { ProductResults, PromiseResponse } from '@/types';

type ReducerState = PromiseResponse<ProductResults>;
type ReducerAction =
  | { type: 'SET_SINGLE_PRODUCT_ITEM'; payload: ProductResults }
  | { type: 'HANDLE_ERROR'; payload: Error };

type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

export const singleProductReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SINGLE_PRODUCT_ITEM': {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case 'HANDLE_ERROR': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
