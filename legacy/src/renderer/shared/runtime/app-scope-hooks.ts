// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// React hooks for reading and mutating the active app scope.

import {
  appScopeO,
  appScopeR,
  useAppScopeValue,
  type AppScopeStore,
} from "../boundaries/app-scope";

export function useScopedValue<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return useAppScopeValue<TValue>(signal, key);
}

export function useSignalValue<TValue = unknown>(signal: unknown): TValue {
  return useAppScopeValue<TValue>(signal);
}

export function useScope<TScope = AppScopeStore>(scope?: unknown): TScope {
  return appScopeO(scope) as TScope;
}

export const ScopeValueProvider = appScopeR;
