export type PromiseResponse<T> = {
  data: T | undefined;
  error: Error | null;
  isLoading: boolean;
};
