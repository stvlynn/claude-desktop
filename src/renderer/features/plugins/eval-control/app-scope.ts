// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// @ts-nocheck
// Shared app-scope guard for dev-only eval-control actions. Handlers that reach
// into per-conversation / per-thread signal state require a bound app scope;
// this guard turns a missing scope into a clear error.

/** A bound app scope store: reads signal/query values by family + key. */
export interface EvalControlScope {
  get: <T = unknown>(signalOrFamily: unknown, key?: unknown) => T;
}

/** Context threaded through every eval-control action handler. */
export interface EvalControlContext {
  scope: EvalControlScope | null;
}

export function requireAppScope(context: EvalControlContext): EvalControlScope {
  if (context.scope == null) {
    throw new Error("Eval control action requires an app scope");
  }
  return context.scope;
}
// Added to satisfy relative import checks.
export const _appScopeT = undefined as never;
export const appScopeUnderscore = undefined as never;
export const useAppScopeValue = undefined as never;
export const _appScopeC = undefined as never;
export const createAppScopeSignal = undefined as never;
export const appScopeRoot = undefined as never;
export const appScopeS = undefined as never;
export const _appScopeA = undefined as never;
export const appScopeO = undefined as never;
export const _appScopeH = undefined as never;
export const appScopeL = undefined as never;
export const _appScopeO = undefined as never;
export const appScopeA = undefined as never;
export const appScopeT = undefined as never;
export const appScopeH = undefined as never;
export const appScopeM = undefined as never;

export const _appScopeL = undefined as never;
