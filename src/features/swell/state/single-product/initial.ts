import type { ProductResults, PromiseResponse } from '@/types';

export const initialSingleProductState: PromiseResponse<ProductResults> = {
  data: undefined,
  error: null,
  isLoading: true,
};
