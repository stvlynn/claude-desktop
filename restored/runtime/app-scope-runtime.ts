// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// AppScope root comes from the current shared-object host runtime.
// App-scope signal primitives shared by restored conversation/runtime modules.
import {
  Ao as initScopeRuntimeRaw,
  bs as createScopedDerivedSignalFamilyRaw,
  Ds as createScopedSignalRaw,
  Os as createScopedSignalFamilyRaw,
  ys as createDerivedSignalRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import {
  appScopeRoot,
  initSharedObjectAppScopeRoot,
} from "./shared-object-host-runtime";

export type ScopedSignalGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export type ScopedSignalInitialValue<TKey, TValue> =
  | TValue
  | ScopedSignalInitializer<TKey, TValue>;

export type ScopedSignalFamilyInitializer<TKey, TValue> = (
  key: TKey,
  context: ScopedSignalGetter,
) => TValue;

export { appScopeRoot };
export const appScope = appScopeRoot;

export function initScopeRuntime(): void {
  initScopeRuntimeRaw();
}

export function initAppScope(): void {
  initSharedObjectAppScopeRoot();
}

export function initAppScopeSignalRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function createAppScopedSignal<TValue>(initialValue: TValue): unknown;
export function createAppScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown;
export function createAppScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitialValue<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(appScopeRoot, initializer);
}

export function createScopedSignal<TValue>(
  scope: unknown,
  initialValue: TValue,
): unknown;
export function createScopedSignal<TKey, TValue>(
  scope: unknown,
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown;
export function createScopedSignal<TKey, TValue>(
  scope: unknown,
  initializer: ScopedSignalInitialValue<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(scope, initializer);
}

export function createAppScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalFamilyRaw(appScopeRoot, initializer);
}

export function createAppScopedDerivedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedDerivedSignalFamilyRaw(appScopeRoot, initializer);
}

export function createDerivedSignal<TValue>(
  scope: unknown,
  derive: (context: ScopedSignalGetter) => TValue,
): unknown {
  return createDerivedSignalRaw(scope, derive);
}
