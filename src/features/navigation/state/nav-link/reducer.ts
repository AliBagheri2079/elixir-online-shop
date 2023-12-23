import type { NavLinkProps, PromiseResponse } from '@/types';

type ReducerState = PromiseResponse<NavLinkProps[]>;
type ReducerAction =
  | { type: 'SET_NAVLINK_ITEM'; payload: NavLinkProps[] }
  | { type: 'HANDLE_ERROR'; payload: Error };

type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

export const navLinkReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAVLINK_ITEM': {
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
