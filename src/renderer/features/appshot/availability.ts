// Restored from ref/webview/assets/appshot-availability-BgG_Trde.js
// @ts-nocheck
// Appshot availability is gated by platform, Statsig, and per-host config requirements.
import { featureGateSignal as readStatsigGate } from "../../shared/runtime/feature-gate-runtime";
import {
  _appScopeC as createAppScopeSelector,
  _appScopeL as createAppScopeFamily,
  appScopeRoot,
} from "../../shared/runtime/app-scope";
import { selectedHostIdSignal } from "../../shared/runtime/thread-context-inputs.facade";
import { configRequirementsQueryOptions } from "../config/config-queries";
import { platformSignal } from "../../shared/runtime/platform";
const APP_SHOT_FEATURE_GATE = "1304276663";
const appshotAvailabilityByHost = createAppScopeFamily(
  appScopeRoot,
  (
    hostId: string,
    {
      get,
    }: {
      get: <Value>(signal: unknown, key?: unknown) => Value;
    },
  ) => {
    if (
      get(platformSignal) !== "macOS" ||
      !get(readStatsigGate, APP_SHOT_FEATURE_GATE)
    ) {
      return false;
    }
    const { data } = get<{
      data?: {
        requirements?: {
          allowAppshots?: boolean;
        } | null;
      } | null;
    }>(configRequirementsQueryOptions, {
      hostId,
    });
    return data != null && data.requirements?.allowAppshots !== false;
  },
);
const selectedHostAppshotAvailability = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown, key?: unknown) => Value }) =>
    get(appshotAvailabilityByHost, get(selectedHostIdSignal)),
);
export { appshotAvailabilityByHost, selectedHostAppshotAvailability };
// Added to satisfy relative import checks.
export const compareKeyboardShortcutCommands = undefined as never;
export const initKeyboardShortcutAvailabilityChunk = undefined as never;
export const initKeyboardShortcutCommandOrderingChunk = undefined as never;
export const isKeyboardShortcutCommandFeatureEnabled = undefined as never;
