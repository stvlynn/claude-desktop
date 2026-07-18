// Restored from ref/webview/assets/app-scope-Cp_DWew0.js
// Lightweight app-scope signal/query runtime used by restored chunks.

import { createPortal } from "react-dom";
import {
  createContext,
  useContext,
  useEffect,
  type ReactElement,
  type ReactNode,
} from "react";
import { atom, type PrimitiveAtom } from "jotai";

type Signal<T = unknown> = {
  defaultValue?: T | ((...args: any[]) => T);
  id: string;
  read?: (key: unknown, store: AppScopeStore) => T;
};

type QueryState<T = unknown> = {
  data?: T;
  error?: unknown;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
};

type Snapshot<T = unknown> = {
  cancel(): Promise<void>;
  getData(): T | undefined;
  invalidate(): Promise<void>;
  queryKey: readonly unknown[];
  setData(data: T | undefined): void;
};

type AppScopeProviderProps = {
  children: ReactNode;
  scope: unknown;
  value?: unknown;
};

let nextSignalId = 0;

function signalKey(signal: unknown, key?: unknown): string {
  const id =
    typeof signal === "object" && signal !== null && "id" in signal
      ? String((signal as { id: unknown }).id)
      : String(signal);
  return key === undefined ? id : `${id}:${JSON.stringify(key)}`;
}

function resolveDefault<T>(signal: Signal<T>): T | undefined {
  return typeof signal.defaultValue === "function"
    ? (signal.defaultValue as (...args: any[]) => T)()
    : signal.defaultValue;
}

class AppScopeStore {
  private readonly values = new Map<string, unknown>();
  readonly query = {
    snapshot: <T,>(query: unknown): Snapshot<T> => {
      const key = signalKey(query);
      return {
        cancel: async () => {},
        getData: () => this.values.get(key) as T | undefined,
        invalidate: async () => {},
        queryKey: [key],
        setData: (data: T | undefined) => {
          if (data === undefined) this.values.delete(key);
          else this.values.set(key, data);
        },
      };
    },
    setData: (query: unknown, keyOrValue: unknown, value?: unknown): void => {
      const key =
        value === undefined ? signalKey(query) : signalKey(query, keyOrValue);
      this.values.set(key, value === undefined ? keyOrValue : value);
    },
  };
  constructor(readonly value: unknown = null) {}
  get<T = unknown>(signal: unknown, key?: unknown): T {
    const typedSignal = signal as Signal<T>;
    if (typedSignal?.read) return typedSignal.read(key, this);
    const storageKey = signalKey(signal, key);
    if (this.values.has(storageKey)) return this.values.get(storageKey) as T;
    return resolveDefault(typedSignal) as T;
  }
  set(signal: unknown, keyOrUpdater: unknown, value?: unknown): void {
    const hasKey = value !== undefined || arguments.length >= 3;
    const key = hasKey ? keyOrUpdater : undefined;
    const nextValue = hasKey ? value : keyOrUpdater;
    const storageKey = signalKey(signal, key);
    const currentValue = this.values.get(storageKey);
    this.values.set(
      storageKey,
      typeof nextValue === "function"
        ? (nextValue as (current: unknown) => unknown)(currentValue)
        : nextValue,
    );
  }
  watch(callback: (store: AppScopeStore) => void): () => void {
    callback(this);
    return () => {};
  }
}

const rootStore = new AppScopeStore();

export const appScopeRoot = { id: "appScopeRoot" };
export const appScopeT = appScopeRoot;
export const _appScopeT = appScopeRoot;

export function createAppScopeSignal<T>(
  _scope: unknown,
  defaultValue?: T | ((...args: any[]) => T),
): Signal<T> {
  return {
    defaultValue,
    id: `signal:${nextSignalId++}`,
  };
}

export const appScopeG = createAppScopeSignal;
export const _appScopeG = createAppScopeSignal;
export const createAppScopedSignal = createAppScopeSignal;

export function initScopeRuntime(): void {}
export function initAppScope(): void {}
export function initAppScopeSignalRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function appScopeUnderscore<T>(
  scope: unknown,
  defaultValue?: T | ((...args: any[]) => T),
  ..._rest: unknown[]
): Signal<T> {
  return createAppScopeSignal(scope, defaultValue);
}

export function appScopeL<T>(
  _scope: unknown,
  read: (...args: any[]) => T,
  _options?: unknown,
): Signal<T> {
  return {
    id: `derived:${nextSignalId++}`,
    read: read as (key: unknown, store: AppScopeStore) => T,
  };
}

export function _appScopeC<T>(
  _scope: unknown,
  read: (store: AppScopeStore) => T,
): Signal<T> {
  return {
    id: `computed:${nextSignalId++}`,
    read: (_key, store) => read(store),
  };
}

export const appScopeC = _appScopeC;

export function _appScopeL<T>(
  _scope: unknown,
  read: (...args: any[]) => T,
  options?: unknown,
): Signal<T> {
  return appScopeL(_scope, read, options);
}

export function _appScopeM<T, K = unknown>(
  scope: unknown,
  queryFactory: (key?: K) => T,
  options?: unknown,
): Signal<T> {
  return appScopeL(
    scope,
    (...args: unknown[]) => queryFactory(args[0] as K),
    options,
  );
}

export const appScopeM = _appScopeM;
export const appScopeP = _appScopeM;
export const _appScopeP = _appScopeM;
export const _appScopeD = _appScopeM;

export function useAppScopeValue<T>(signal: unknown, key?: unknown): T {
  return rootStore.get<T>(signal, key);
}

export const _appScopeA = useAppScopeValue;
export const _appScopeS = useAppScopeValue;
export const appScopeA = useAppScopeValue;
export const appScopeS = useAppScopeValue;

export function _appScopeO(_scope?: unknown): AppScopeStore {
  return rootStore;
}

export const appScopeO = _appScopeO;
export const appScopeD = _appScopeO;

const queryClientContext = createContext<unknown>(undefined);

export function _appScopeN({
  children,
  queryClient,
}: {
  children: ReactNode;
  queryClient: {
    mount?: () => void;
    unmount?: () => void;
  };
}): ReactElement {
  useEffect(() => {
    queryClient.mount?.();
    return () => {
      queryClient.unmount?.();
    };
  }, [queryClient]);

  return (
    <queryClientContext.Provider value={queryClient}>
      {children}
    </queryClientContext.Provider>
  );
}

export function appScopeH(name: string, value: unknown = null): AppScopeStore {
  return new AppScopeStore({ name, value });
}

export const createScopedScope = appScopeH;
export const _appScopeH = _appScopeM;

export function appScopeU<T extends (...args: any[]) => unknown>(
  _scope: unknown,
  resolver: T,
): { resolve: (...args: any[]) => ReturnType<T> } {
  return { resolve: resolver as (...args: any[]) => ReturnType<T> };
}
export const _appScopeU = appScopeU;

export function createSignalFamily<Args extends unknown[], Value>(
  factory: (...args: Args) => Value,
): (...args: Args) => Value {
  const cache = new Map<string, Value>();
  return (...args: Args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, factory(...args));
    return cache.get(key) as Value;
  };
}

export const appScopeV = createSignalFamily;

export const _appScopeJ = {
  batch<T>(callback: () => T): T {
    return callback();
  },
  batchCalls<Args extends unknown[], Result>(
    callback: (...args: Args) => Result,
  ): (...args: Args) => Result {
    return (...args: Args) => callback(...args);
  },
};

export function appScopeQ(left: unknown, right: unknown): boolean {
  return Object.is(left, right);
}

export function appScopeB<T>(value: T): T {
  return value;
}

export function _appScopeI<T>(value: T): T {
  return value;
}

export function _appScopeY<T>(value: T): PrimitiveAtom<T>;
export function _appScopeY<T>(
  storageKey: string,
  initialValue: T,
  storage?: unknown,
): PrimitiveAtom<T>;
export function _appScopeY<T>(
  valueOrStorageKey: T | string,
  initialValue?: T,
  _storage?: unknown,
): PrimitiveAtom<T> {
  return atom(
    arguments.length >= 2 ? (initialValue as T) : (valueOrStorageKey as T),
  ) as PrimitiveAtom<T>;
}

export function appScopeR({ children }: AppScopeProviderProps): ReactElement {
  return <>{children}</>;
}

export const appScopeX = createContext;
export const appScopeZ = useContext;
export const _appScopeX = appScopeX;
export const _appScopeZ = appScopeZ;
export { createPortal };
