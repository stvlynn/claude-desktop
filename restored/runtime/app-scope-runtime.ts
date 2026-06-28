// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// App-scope signal primitives shared by restored conversation/runtime modules.
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  QP as appScopeRoot,
  bV as createScopedSignalRaw,
  dV as createDerivedSignalRaw,
  fV as createScopedSignalFamilyRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type ScopedSignalGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export type ScopedSignalFamilyInitializer<TKey, TValue> = (
  key: TKey,
  context: ScopedSignalGetter,
) => TValue;

export { appScopeRoot };

export function initAppScopeSignalRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function createAppScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(appScopeRoot, initializer);
}

export function createAppScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalFamilyRaw(appScopeRoot, initializer);
}

export function createDerivedSignal<TValue>(
  scope: unknown,
  derive: (context: ScopedSignalGetter) => TValue,
): unknown {
  return createDerivedSignalRaw(scope, derive);
}
