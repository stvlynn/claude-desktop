// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Minimal boundary stub for workspace artifact-tab opener.
// TODO: promote the full restored/workspace/open-artifact-tab.ts implementation
// once its boundary dependencies are unblocked.

export interface OpenArtifactTabOptions {
  activate?: boolean;
  artifactNavigationTarget?: unknown;
  hostId: string;
  icon?: unknown;
  isPreview?: boolean;
  syncOpenTabs?: boolean;
  target?: "left" | "right" | "main";
  tabId?: string;
  title?: string;
}

export function openArtifactTab(
  _store: unknown,
  _path: string,
  _options: OpenArtifactTabOptions,
): boolean {
  return true;
}
