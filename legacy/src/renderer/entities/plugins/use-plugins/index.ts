// Public plugin marketplace API for promoted modules.
// Re-exports only the modules that have been moved out of restored/.

export { resolvePluginIconPaths } from "./icons";
export {
  buildMarketplaceSourceRequest,
  resolvePluginInstallName,
  getPluginSourceKey,
  requireRemotePluginId,
  normalizeSuggestedPluginSummary,
  buildPluginInstallRequest,
  resolvePluginName,
} from "./marketplace-source";
export {
  pluginsQueryKey,
  BUNDLED_MARKETPLACE_NAME,
  getBuildFlavor,
  getBundledMarketplaceName,
  isBundledMarketplaceName,
  getMarketplaceNameSuffix,
  getCuratedMarketplaceName,
} from "./marketplace-constants";
export {
  isComputerUsePluginId,
  isExternalBrowserPluginId,
  isInAppBrowserPluginId,
  isBuiltInMarketplaceName,
  supportsPluginAuthMethod,
} from "./plugin-filters";
export * from "./types";
