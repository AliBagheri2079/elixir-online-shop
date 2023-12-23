import type { ProductResults, PromiseResponse } from '@/types';

type InitialState = Omit<PromiseResponse<ProductResults[]>, 'isLoading'>;

export const initialProductsState: InitialState = {
  data: undefined,
  error: null,
};
