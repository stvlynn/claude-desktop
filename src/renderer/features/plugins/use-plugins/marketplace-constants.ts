// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// @ts-nocheck
// Minimal marketplace-constants stub for the use-plugins cluster.

export const CURATED_MARKETPLACE_GATE = "curated-marketplace";

export const EMPTY_FEATURED_PLUGIN_IDS: string[] = [];

export const EMPTY_MARKETPLACE_LOAD_ERRORS: unknown[] = [];

export const EMPTY_MARKETPLACES: unknown[] = [];

export const EMPTY_PLUGIN_ITEMS: unknown[] = [];

export const HIDDEN_CURATED_MARKETPLACES_QUERY_KEY = [
  "hidden-curated-marketplaces",
] as const;

export const LOCAL_INTERNAL_TESTING_MARKETPLACE_RELATIVE_PATH =
  "local-internal-testing";

export const PLUGIN_IMAGE_INLINE_CONCURRENCY = 3;

export function getBuildFlavor(): string {
  return "stable";
}

export function getCuratedMarketplaceName(): string | null {
  return null;
}

export const pluginsQueryKey = ["plugins"] as const;
export const getBundledMarketplaceName = () => "";
// Added to satisfy relative import checks.
export const BUNDLED_MARKETPLACE_NAME = undefined as never;
export const CURATED_MARKETPLACE_NAME = undefined as never;
export const CURATED_REMOTE_MARKETPLACE_NAME = undefined as never;
