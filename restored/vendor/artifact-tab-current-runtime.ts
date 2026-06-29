// Restored from ref/webview/assets/artifact-tab-content.electron-CggSRQ3S.js
// Current artifact tab producer aliases forwarded from the onboarding shared
// chunk while the full artifact tab bundle remains vendored.
import {
  createAppScopedSignal,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";

type ArtifactEntrypointKey = {
  entrypoint: string;
};

const fallbackArtifactConversationIds = new Map<string, string>();

export const artifactRouteScope = createAppScopedSignal(false);

export function getFallbackArtifactConversationId({
  entrypoint,
}: ArtifactEntrypointKey): string {
  const existingId = fallbackArtifactConversationIds.get(entrypoint);
  if (existingId != null) return existingId;

  const fallbackId = `artifact:${entrypoint}`;
  fallbackArtifactConversationIds.set(entrypoint, fallbackId);
  return fallbackId;
}

export function initArtifactRouteScopeRuntime(): void {
  initAppScopeSignalRuntime();
}

export function initArtifactPanelRuntime(): void {
  initArtifactRouteScopeRuntime();
}
