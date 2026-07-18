// Restored from ref/webview/assets/appshot-availability-BgG_Trde.js
// Statsig feature-gate access for hooks and app-scope consumers.

import { appScopeL, appScopeRoot } from "../boundaries/app-scope";
import {
  readStatsigGateValue,
  useGateValue,
  useLayer,
} from "../vendor/statsig-current-runtime";

type GateScope = {
  get?<T = unknown>(signal: unknown, key?: unknown): T;
};

export const featureGateSignal = appScopeL(
  appScopeRoot,
  (gateName: unknown) => readStatsigGateValue(String(gateName)),
);

export function useStatsigGate(gateName: string): boolean {
  return useGateValue(gateName);
}

export const useStatsigLayer = useLayer;

export function getFeatureGateValue(
  scope: GateScope | null | undefined,
  gateName: string,
): boolean {
  return (
    scope?.get?.<boolean>(featureGateSignal, gateName) ??
    readStatsigGateValue(gateName)
  );
}

export const evaluateFeatureGate = getFeatureGateValue;

export function initFeatureGateSignalRuntime(): void {}
export function initStatsigFeatureGateRuntime(): void {}
