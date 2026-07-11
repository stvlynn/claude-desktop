// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js
// Feature: workspace dependency feature detection and shared preview fallback.

import { once } from "../../shared/lib/once";
import {
  ImageWithFallbackIcon,
  type ImageWithFallbackIconProps,
} from "../../shared/ui/image-with-fallback-icon";

export type { ImageWithFallbackIconProps };

export const initImageWithFallbackIconChunk = once(() => {});
export const initWorkspaceDependenciesFeatureChunk = once(() => {});

export { ImageWithFallbackIcon };

export type WorkspaceDependencyFeatureFlag = {
  enabled?: boolean;
  name?: string;
};

export function hasWorkspaceDependenciesFeature(
  features: readonly WorkspaceDependencyFeatureFlag[] | null | undefined,
): boolean {
  return (
    features?.some(
      (feature) =>
        feature.name === "workspace_dependencies" && feature.enabled === true,
    ) ?? false
  );
}
