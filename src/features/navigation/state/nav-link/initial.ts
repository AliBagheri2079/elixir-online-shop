import type { NavLinkProps, PromiseResponse } from '@/types';

export const initialNavLinkState: PromiseResponse<NavLinkProps[]> = {
  data: undefined,
  error: null,
  isLoading: true,
};
