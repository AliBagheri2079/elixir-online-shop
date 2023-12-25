import type { ProductResults, PromiseResponse } from '@/types';

export const initialProductsState: PromiseResponse<ProductResults[]> = {
  data: undefined,
  error: null,
  isLoading: true,
};
