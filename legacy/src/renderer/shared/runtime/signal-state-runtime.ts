import * as React from "react";
import {
  appScopeO,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";

export function createAtomSignal<T>(defaultValue: T) {
  return createAppScopeSignal(appScopeRoot, defaultValue);
}
export function initSignalStateRuntime(): void {}
export function useSignalState<T>(
  signal: unknown,
): [T, (value: T | ((current: T) => T)) => void] {
  const store = appScopeO();
  const [value, setValue] = React.useState<T>(() => store.get<T>(signal));
  return [
    value,
    (valueOrUpdater) => {
      setValue((current) => {
        const nextValue =
          typeof valueOrUpdater === "function"
            ? (valueOrUpdater as (current: T) => T)(current)
            : valueOrUpdater;
        store.set(signal, nextValue);
        return nextValue;
      });
    },
  ];
}
