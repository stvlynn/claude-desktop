// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Statsig current-ref compatibility stub. Replaces the original @statsig/*
// vendor bundle with typed no-ops so that dependent renderer modules can be
// promoted before the real Statsig integration is wired up.
import type { ReactElement, ReactNode } from "react";

type StatsigUserCustomValue = string | number | boolean | string[] | number[];

export type StatsigUserLike = {
  userID?: string;
  customIDs?: Record<string, string | undefined>;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  appVersion?: string;
  custom?: Record<string, StatsigUserCustomValue>;
  privateAttributes?: Record<string, StatsigUserCustomValue> | null;
  analyticsOnlyMetadata?: Record<string, string | number | boolean>;
  [key: string]: unknown;
};

type StatsigUpdateUserResult = {
  success?: boolean;
  error?: unknown;
};

export type StatsigConfigLike = {
  value: unknown;
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

export type StatsigLayerLike = {
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

export type StatsigClientLike = {
  loadingStatus?: string;
  dataAdapter: {
    setData(payload: string): void;
    prefetchData(user: unknown): Promise<unknown>;
  };
  getContext(): { user: StatsigUserLike };
  initializeSync(): void;
  updateUserAsync(user: unknown): Promise<StatsigUpdateUserResult>;
  updateUserSync(
    user: unknown,
    options: { disableBackgroundCacheRefresh: boolean },
  ): StatsigUpdateUserResult;
  on(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  off(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  checkGate(name: string, options?: unknown): boolean;
  getFeatureGate(
    name: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(name: string, options?: unknown): StatsigConfigLike;
  getLayer(name: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  flush(): Promise<void>;
};

type UseStatsigClientResult = {
  client: StatsigClientLike;
  checkGate(gateName: string, options?: unknown): boolean;
  getFeatureGate(
    gateName: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(configName: string, options?: unknown): StatsigConfigLike;
  getLayer(layerName: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  isLoading: boolean;
};

type StatsigSessionRecord = {
  data: {
    sessionID: string;
    startTime: number;
    lastUpdate: number;
  };
};

type StableIDModule = {
  get(statsigClientKey: string): string | null;
  setOverride(stableId: string, statsigClientKey: string): void;
};

type StatsigSessionModule = {
  get(statsigClientKey: string, updateLastUsed?: boolean): StatsigSessionRecord;
  overrideInitialSessionID(sessionId: string, statsigClientKey: string): void;
  checkForIdleSession(statsigClientKey: string): void;
};

type StatsigMetadataProviderModule = {
  get(): Record<string, unknown>;
  add(metadata: Record<string, unknown>): void;
};

type StatsigClientConstructor = new (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => StatsigClientLike;

type StatsigClientStatic = StatsigClientConstructor & {
  instance(statsigClientKey?: string): StatsigClientLike;
};

type StatsigProviderComponent = (
  props:
    | {
        client: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      }
    | {
        sdkKey: string;
        user: unknown;
        options?: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      },
) => ReactElement | null;

type UseClientAsyncInit = (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => {
  client: StatsigClientLike;
  isLoading: boolean;
};

const noopClient: StatsigClientLike = {
  loadingStatus: "Ready",
  dataAdapter: {
    setData: () => {},
    prefetchData: async () => undefined,
  },
  getContext: () => ({ user: {} }),
  initializeSync: () => {},
  updateUserAsync: async () => ({ success: true }),
  updateUserSync: () => ({ success: true }),
  on: () => {},
  off: () => {},
  checkGate: () => false,
  getFeatureGate: () => ({ value: false, details: { reason: "stub" } }),
  getDynamicConfig: () => ({ value: {}, get: (_key, fallback) => fallback }),
  getLayer: () => ({ get: (_key, fallback) => fallback }),
  logEvent: () => {},
  flush: async () => {},
};

const stableIDModule: StableIDModule = {
  get: () => null,
  setOverride: () => {},
};

const statsigSessionModule: StatsigSessionModule = {
  get: () => ({
    data: { sessionID: "", startTime: 0, lastUpdate: 0 },
  }),
  overrideInitialSessionID: () => {},
  checkForIdleSession: () => {},
};

const statsigMetadataProviderModule: StatsigMetadataProviderModule = {
  get: () => ({}),
  add: () => {},
};

export const StableID = stableIDModule;
export const StatsigSession = statsigSessionModule;
export const StatsigMetadataProvider = statsigMetadataProviderModule;

export const StatsigClient = class implements StatsigClientLike {
  static instance(_statsigClientKey?: string): StatsigClientLike {
    return noopClient;
  }

  loadingStatus = noopClient.loadingStatus;
  dataAdapter = noopClient.dataAdapter;
  getContext = noopClient.getContext;
  initializeSync = noopClient.initializeSync;
  updateUserAsync = noopClient.updateUserAsync;
  updateUserSync = noopClient.updateUserSync;
  on = noopClient.on;
  off = noopClient.off;
  checkGate = noopClient.checkGate;
  getFeatureGate = noopClient.getFeatureGate;
  getDynamicConfig = noopClient.getDynamicConfig;
  getLayer = noopClient.getLayer;
  logEvent = noopClient.logEvent;
  flush = noopClient.flush;
} as unknown as StatsigClientStatic;

export const StatsigProvider: StatsigProviderComponent = () => null;

export const useClientAsyncInit: UseClientAsyncInit = () => ({
  client: noopClient,
  isLoading: false,
});

export const useDynamicConfig = (
  _configName: string,
  _options?: unknown,
): StatsigConfigLike => ({
  value: {},
  get: (_key, fallback) => fallback,
});

export const useGateValue = (_gateName: string, _options?: unknown): boolean =>
  false;

export const useLayer = (_layerName: string, _options?: unknown): StatsigLayerLike => ({
  get: (_key, fallback) => fallback,
});

export const useStatsigClient = (): UseStatsigClientResult => ({
  client: noopClient,
  checkGate: () => false,
  getFeatureGate: () => ({ value: false, details: { reason: "stub" } }),
  getDynamicConfig: () => ({ value: {}, get: (_key, fallback) => fallback }),
  getLayer: () => ({ get: (_key, fallback) => fallback }),
  logEvent: () => {},
  isLoading: false,
});

export function loadStatsigCore(): {
  StableID: StableIDModule;
  StatsigSession: StatsigSessionModule;
  StatsigMetadataProvider: StatsigMetadataProviderModule;
} {
  return {
    StableID,
    StatsigSession,
    StatsigMetadataProvider,
  };
}

export function getStatsigClient(_statsigClientKey?: string): StatsigClientLike {
  return noopClient;
}

export function readStatsigGateValue(_gateName: string): boolean {
  return false;
}

export function getStatsigDynamicConfig(
  client: StatsigClientLike,
  configName: string,
  options?: unknown,
): StatsigConfigLike {
  return client.getDynamicConfig(configName, options);
}

export function useStatsigLoading(): boolean {
  return false;
}
