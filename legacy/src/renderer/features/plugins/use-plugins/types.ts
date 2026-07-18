// Stubs for use-plugins local types.
// These are placeholders to allow the restored cluster to compile while
// real shapes are reverse-engineered from the ref chunk.

export type ListPluginsResponse = unknown;

export type LoadedPluginsData = {
  marketplaces?: PluginMarketplace[] | null;
  plugins?: PluginDisplayItem[] | null;
};

export type PluginAvailability = string;

export type PluginDisplayItem = {
  id?: string | null;
  name?: string | null;
};

export type PluginMarketplace = {
  id?: string | null;
  name?: string | null;
  plugins?: PluginDisplayItem[] | null;
};

export type QueryClientLike = {
  fetchQuery: <TData>(options: {
    queryFn: (ctx: { signal?: AbortSignal }) => Promise<TData>;
    queryKey: readonly unknown[];
    retry?: boolean;
    gcTime?: number;
    staleTime?: number;
  }) => Promise<TData>;
};

export type UseMarketplaceKindPluginsOptions = {
  hostId?: string | null;
  marketplaceKind?: string | null;
  enabled?: boolean;
};

export type UsePluginsOptions = {
  additionalMarketplaceKinds?: string[];
  enabled?: boolean;
  includeRemoteCatalog?: boolean;
  installSuggestionPluginNames?: string[] | null;
};

export type UsePluginsResult = {
  data?: LoadedPluginsData | null;
  isLoading: boolean;
  isFetching: boolean;
};
