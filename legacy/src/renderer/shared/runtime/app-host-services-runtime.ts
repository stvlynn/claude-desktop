// Restored from ref/webview/assets/app-host-services-runtime-*.js
// Compatibility stub for app-server host services consumed by restored modules.

export interface AppHostServices {
  appInfo: {
    get(): Promise<{ version: string; buildNumber?: number | null; buildFlavor?: string | null }>;
  };
  workspaceFiles: {
    read(_params: { hostId: string; path: string; representation: unknown }): Promise<unknown>;
  };
}

export interface AppHostServicesBridge extends AppHostServices {}

export const appHostServices: AppHostServices = {
  appInfo: {
    get: async () => ({
      version: "0.0.0",
      buildNumber: null,
      buildFlavor: null,
    }),
  },
  workspaceFiles: {
    read: async () => {
      throw new Error("workspaceFiles.read is not implemented");
    },
  },
};

export interface PersistentSignal<T> {
  get(): T;
  set(updater: (value: T) => T): void;
  subscribe(listener: (value: T) => void): () => void;
}

export function createPersistentSignal<T>(
  _key: string,
  initialValue: T,
): PersistentSignal<T> {
  let value = initialValue;
  const listeners = new Set<(value: T) => void>();
  return {
    get: () => value,
    set: (updater) => {
      value = updater(value);
      listeners.forEach((listener) => listener(value));
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function initPersistentSignalRuntime(): void {
  // no-op initializer for restored persistent-signal consumers
}

export const onboardingWizardAction = {
  CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED: "CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED",
  CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED: "CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED",
} as const;

// Added to unblock restored settings promotion.
export const initAppHostServicesRuntimeChunk = () => {}; // Added to unblock settings promotion.
// Added to satisfy relative import checks.
export const getCachedConversationTurns = undefined as never;
// Added to satisfy relative import checks.
export const connectAppHostServices = undefined as never;
