// @ts-nocheck
// Restored from ref/webview/assets/legacy-video-plugins-BzriPR2f.js

export type LegacyVideoPluginTarget = {
  _plugins?: unknown;
};
export async function loadLegacyVideoPlugins(
  target: LegacyVideoPluginTarget,
): Promise<void> {
  const { default: analyticsVideoPlugins } = await import(
    "../runtime/analytics-video-plugins"
  );
  target._plugins = analyticsVideoPlugins;
}
