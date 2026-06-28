// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Global state query helpers.
import { globalSettingKeys as GLOBAL_STATE_KEYS } from "../boundaries/src-l0hb-mz-p";
import {
  Gu as initGlobalStateQueryRuntimeRaw,
  Ku as useGlobalStateQueryRaw,
} from "../vendor/projects-app-shared-runtime";

export { GLOBAL_STATE_KEYS };

export type GlobalStateQueryResult<TData = unknown> = {
  data?: TData;
  error?: unknown;
  isFetching?: boolean;
  isLoading?: boolean;
};

export function initGlobalStateQueryRuntime(): void {
  initGlobalStateQueryRuntimeRaw();
}

export function useGlobalStateQuery<TData = unknown>(
  key: unknown,
  options?: unknown,
): GlobalStateQueryResult<TData> {
  return (
    options === undefined
      ? useGlobalStateQueryRaw(key)
      : useGlobalStateQueryRaw(key, options)
  ) as GlobalStateQueryResult<TData>;
}
