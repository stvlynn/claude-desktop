// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Minimal plugin-filters stub for the use-plugins cluster.

export function isComputerUsePluginId(_pluginId: string | null | undefined): boolean {
  return false;
}

export function isExternalBrowserPluginId(_pluginId: string | null | undefined): boolean {
  return false;
}

export function isInAppBrowserPluginId(_pluginId: string | null | undefined): boolean {
  return false;
}

export function isBuiltInMarketplaceName(_name: string | null | undefined): boolean {
  return false;
}

export function supportsPluginAuthMethod(_authMethod: string | null | undefined): boolean {
  return false;
}

export function filterBlockedFeaturedPluginIds(
  _featuredIds: string[],
  _blockedIds: string[],
): string[] {
  return _featuredIds;
}

export function filterFeaturedPluginIdsByAvailability(
  _featuredIds: string[],
  _installedIds: string[],
): string[] {
  return _featuredIds;
}

export function filterFeaturedPluginIdsByBuildFlavor(
  _featuredIds: string[],
  _buildFlavor: string,
): string[] {
  return _featuredIds;
}

export function filterMarketplacesByName(
  _marketplaces: unknown[],
  _hiddenNames: string[],
): unknown[] {
  return _marketplaces;
}

export function filterPluginsByAvailability(
  _plugins: unknown[],
  _availabilities: unknown[],
): unknown[] {
  return _plugins;
}

export function filterPluginsByBuildFlavor(
  _plugins: unknown[],
  _buildFlavor: string,
): unknown[] {
  return _plugins;
}

export function getHiddenMarketplaceNames(_options: {
  hideCuratedMarketplaces?: boolean;
  supportsRemotePluginCatalog?: boolean;
  curatedMarketplaceGateEnabled?: boolean;
}): string[] {
  return [];
}

export function getInstalledPlugins(_plugins: unknown[]): unknown[] {
  return [];
}
