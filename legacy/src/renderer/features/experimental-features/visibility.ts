// Restored from ref/webview/assets/experimental-feature-visibility-Bvp90zWX.js
// Visibility predicate for experimental feature rows.

const HIDDEN_BETA_FEATURES = new Set([
  "memories",
  "multi_agent",
  "plugins",
  "plugin",
  "remote_control",
  "chronicle",
  "workspace_dependencies",
]);

const HIDDEN_BETA_FEATURE_PREFIXES = ["realtime_"] as const;

type ExperimentalFeatureVisibilityInput = {
  name: string;
  stage: string;
};

export function isExperimentalFeatureVisible(
  feature: ExperimentalFeatureVisibilityInput,
): boolean {
  return (
    feature.stage === "beta" &&
    !HIDDEN_BETA_FEATURES.has(feature.name) &&
    !HIDDEN_BETA_FEATURE_PREFIXES.some((prefix) =>
      feature.name.startsWith(prefix),
    )
  );
}

export const initExperimentalFeatureVisibilityChunk = () => {};
