// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// @ts-nocheck
// Boundary stub for @tanstack/react-query to unblock home-ambient-suggestions promotion.

export function useQuery<TData = unknown>(options: {
  queryKey?: unknown;
  queryFn?: () => Promise<TData> | TData;
  enabled?: boolean;
  staleTime?: number;
  refetchInterval?: number;
}): { data?: TData; isLoading: boolean; error?: Error | null } {
  return { data: undefined, isLoading: false, error: null };
}

export function useMutation<TVariables = unknown, TData = unknown>(_options?: {
  mutationFn?: (variables: TVariables) => Promise<TData> | TData;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}): { mutate: (variables: TVariables) => void; isPending: boolean } {
  return { mutate: () => {}, isPending: false };
}

export function useQueryClient(): unknown {
  return {};
}

export function QueryClient(): unknown {
  return {};
}

export function QueryClientProvider(props: { children: unknown }): unknown {
  return props.children;
}
