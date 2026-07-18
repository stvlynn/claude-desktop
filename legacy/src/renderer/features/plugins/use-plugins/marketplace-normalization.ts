// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Minimal marketplace-normalization stub for the use-plugins cluster.

import type { LoadedPluginsData, PluginMarketplace } from "./types";

export function emptyLoadedPluginsData(): LoadedPluginsData {
  return { marketplaces: [], plugins: [] };
}

export function normalizePluginsFromMarketplaces(
  _marketplaces: PluginMarketplace[],
): LoadedPluginsData {
  return { marketplaces: _marketplaces, plugins: [] };
}

export function summarizeMarketplaces(
  _marketplaces: PluginMarketplace[],
): unknown {
  return {};
}
