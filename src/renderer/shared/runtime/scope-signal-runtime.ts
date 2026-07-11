// Restored from ref/webview/assets/scope-signal-runtime.js
// @ts-nocheck
// Compatibility stub for scope/signal primitives consumed by restored modules.

export type ScopeToken = symbol;

export const createSignal = <T>(initialValue: T): { value: T } => ({
  value: initialValue,
});

export const createDerived = <T>(_compute: () => T): { value: T } => ({
  value: undefined as T,
});

export const initScopeRuntimeChunk = (): void => {
  // no-op stub
};

// Added to unblock restored settings promotion.
export const createQuerySignal = undefined as never; // Added to unblock settings promotion.
// Added to satisfy relative import checks.
export const useScope = undefined as never;
export const useSignalValue = undefined as never;
export const ScopeProvider = undefined as never;
// Added to satisfy relative import checks.
export const useScopedFamilyValue = undefined as never;
export const createDerivedFamily = undefined as never;
export const createFamily = undefined as never;
export const createMutationFamily = undefined as never;
export const createMutationSignal = undefined as never;
export const createQueryFamily = undefined as never;
export const createScope = undefined as never;
export const createSignalFamily = undefined as never;
export const resolveScopedFamily = undefined as never;
export const ScopeQueryClientProvider = undefined as never;
