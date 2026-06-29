// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Chrome native-host runtime copy helpers used before bundled plugin install.

import {
  createBundledPluginInstallFailure,
  type BundledPluginInstallFailure,
} from "./install-failures";
import type { BundledMarketplacePlugin } from "./types";

export type NativeHostNameForPlugin = (pluginName: string) => string | null;

export type CopyChromePluginAppServerCodexRuntime = (options: {
  codexHome: string;
  devRuntimeRepoRoot?: string | null;
  nativeHostName: string;
  resourcesPath?: string | null;
}) => Promise<void> | void;

export async function copyChromePluginAppServerCodexRuntimes({
  codexHome,
  copyAppServerCodexRuntime,
  devRuntimeRepoRoot,
  marketplacePath,
  nativeHostNameForPlugin,
  plugins,
  resourcesPath,
}: {
  codexHome: string;
  copyAppServerCodexRuntime: CopyChromePluginAppServerCodexRuntime;
  devRuntimeRepoRoot?: string | null;
  marketplacePath: string;
  nativeHostNameForPlugin: NativeHostNameForPlugin;
  plugins: readonly BundledMarketplacePlugin[];
  resourcesPath?: string | null;
}): Promise<BundledPluginInstallFailure | null> {
  const pluginCount = plugins.length;
  const failures = await Promise.all(
    plugins.map(async (plugin, pluginIndex) => {
      const nativeHostName = nativeHostNameForPlugin(plugin.name);
      if (nativeHostName == null) return null;

      try {
        await copyAppServerCodexRuntime({
          codexHome,
          devRuntimeRepoRoot,
          nativeHostName,
          resourcesPath,
        });
        return null;
      } catch (error) {
        return createBundledPluginInstallFailure({
          error,
          installPhase: "copy_chrome_plugin_app_server_codex_runtime",
          marketplacePath,
          pluginCount,
          pluginIndex,
          pluginName: plugin.name,
          sourcePath: plugin.source.path,
        });
      }
    }),
  );

  return failures.find((failure) => failure != null) ?? null;
}
