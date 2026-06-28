// Restored from ref/webview/assets/use-platform-D3fl3oDu.js
import { resolveCodexPlatform } from "../runtime/platform";
import { useOsInfo } from "../utils/use-os-info";
function getPlatformModifierSymbol(platform: string) {
  return platform === "macOS" ? "⌘" : "^";
}
function usePlatform() {
  const { data, isLoading } = useOsInfo();
  const platform = resolveCodexPlatform(data?.platform);
  return {
    platform,
    modifierSymbol: getPlatformModifierSymbol(platform),
    isLoading,
  };
}
export { usePlatform };
