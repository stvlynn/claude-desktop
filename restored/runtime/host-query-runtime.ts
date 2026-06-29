// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Host-query hook and shared query duration constants.
import {
  g as initQueryDurationConstantsRaw,
  h as QUERY_DURATIONS,
  s as createHostQuerySignalRaw,
  u as useHostQueryRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import {
  fu as initTaskWorkspaceQueryRuntime,
  pu as useDebouncedValueRaw,
} from "../vendor/pull-request-thread-actions-runtime";

export { QUERY_DURATIONS };
export const queryDurations = QUERY_DURATIONS;

export function initHostQueryRuntime(): void {
  initQueryDurationConstants();
}

export function initQueryDurationConstants(): void {
  initQueryDurationConstantsRaw();
}

export function initTaskWorkspaceHostQueryRuntime(): void {
  initTaskWorkspaceQueryRuntime();
}

export function createHostQuerySignal<TParams>(
  scope: unknown,
  queryName: string,
  getQueryOptions: (params: TParams) => unknown,
): unknown {
  return createHostQuerySignalRaw(scope, queryName, getQueryOptions);
}

export function useHostQuery<TResult = unknown>(
  queryName: string,
  options: unknown,
): TResult {
  return useHostQueryRaw(queryName, options) as TResult;
}

export function useDebouncedValue<TValue>(
  value: TValue,
  delayMs: number,
): TValue {
  return useDebouncedValueRaw(value, delayMs) as TValue;
}
