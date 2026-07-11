// Restored from ref/webview/assets/use-is-plugins-enabled-Dn_J-WZf.js
// @ts-nocheck
// use-is-plugins-enabled-Dn_J-WZf chunk restored from the Codex webview bundle.
import { _appScopeA as useAppScopeQueryValue } from "../../../shared/runtime/app-scope";
import { experimentalFeaturesQueryOptions } from "../../experimental-features/queries";
import type {
  ExperimentalFeaturesQueryResult,
  FeatureAvailability,
  FeatureAvailabilityOptions,
} from "./types";
function useExperimentalFeatureAvailability({
  defaultEnabled = true,
  featureName,
  hostId,
}: FeatureAvailabilityOptions): FeatureAvailability {
  const { data = [], isLoading } = useAppScopeQueryValue(
    experimentalFeaturesQueryOptions,
    hostId,
  ) as ExperimentalFeaturesQueryResult;
  const feature = data.find((item) => item.name === featureName);
  return {
    enabled: feature?.enabled ?? defaultEnabled,
    isLoading,
  };
}
export { useExperimentalFeatureAvailability };
