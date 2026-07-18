// Restored from ref/webview/assets/host-query-runtime.js
// Host-backed query helpers shared by renderer features.

import * as React from "react";

import { appScopeL } from "../boundaries/app-scope";
import { sendHostRequest } from "./host-request-runtime";
import {
  useQuery,
  type QueryOptions,
  type QueryResult,
} from "./query-client/react-query-runtime";

export const queryDurations = Object.freeze({
  FIVE_SECONDS: 5_000,
  ONE_MINUTE: 60_000,
  FIVE_MINUTES: 300_000,
  INFINITE: Number.POSITIVE_INFINITY,
});

export const QUERY_DURATIONS = queryDurations;

export type HostQueryConfig<TResponse = unknown, TResult = TResponse> =
  QueryOptions<TResponse, TResult> & {
    refetchInterval?: number | false;
    refetchOnMount?: boolean | "always";
    refetchOnWindowFocus?: boolean;
    retry?: boolean | number;
  };

export interface HostQueryOptions<TResponse = unknown, TResult = TResponse> {
  params?: Record<string, unknown>;
  queryConfig?: HostQueryConfig<TResponse, TResult>;
  select?: (response: TResponse) => TResult;
  source?: string;
}

function stableSerialize(value: unknown): string {
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value, (_key, item) => {
      if (typeof item !== "object" || item == null || Array.isArray(item)) {
        return item;
      }
      return Object.fromEntries(
        Object.entries(item as Record<string, unknown>).sort(([a], [b]) =>
          a.localeCompare(b),
        ),
      );
    });
  } catch {
    return String(value);
  }
}

export function useHostQuery<TResponse = unknown, TResult = TResponse>(
  method: string,
  options: HostQueryOptions<TResponse, TResult> = {},
): QueryResult<TResult> {
  const paramsKey = stableSerialize(options.params);
  const enabled = options.queryConfig?.enabled ?? true;
  const staleTime = options.queryConfig?.staleTime;
  const select = options.select ?? options.queryConfig?.select;
  const source = options.source;

  const queryOptions = React.useMemo<QueryOptions<TResponse, TResult>>(
    () => ({
      enabled,
      queryFn: () =>
        sendHostRequest<TResponse>(method, {
          params: options.params,
          source,
        }),
      queryKey: ["host", method, paramsKey],
      select,
      staleTime,
    }),
    [enabled, method, paramsKey, select, source],
  );

  return useQuery(queryOptions);
}

export function createHostQuerySignal<
  TArg,
  TResponse = unknown,
  TResult = TResponse,
>(
  scope: unknown,
  method: string,
  getOptions: (
    arg: TArg,
  ) => HostQueryOptions<TResponse, TResult>["queryConfig"] &
    Omit<HostQueryOptions<TResponse, TResult>, "queryConfig">,
) {
  return appScopeL(scope, (arg) => {
    const options = getOptions(arg as TArg);
    const { enabled, staleTime, ...requestOptions } = options;
    return {
      enabled,
      method,
      ...requestOptions,
      staleTime,
    };
  });
}

export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedValue(value), delayMs);
    return () => window.clearTimeout(timeout);
  }, [delayMs, value]);
  return debouncedValue;
}

export function initQueryDurationConstants(): void {}
export function initHostQueryRuntime(): void {}
export function initTaskWorkspaceHostQueryRuntime(): void {}
