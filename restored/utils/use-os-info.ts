// Restored from ref/webview/assets/use-os-info-C5UGPaac.js
// UseOsInfo chunk restored from the Codex webview bundle.
import { _appScopeS } from "../boundaries/app-scope";
import { osInfoQuery } from "../runtime/platform";
export function useOsInfo() {
  let _useOsInfo = _appScopeS(osInfoQuery);
  return {
    data: _useOsInfo.data,
    isLoading: _useOsInfo.isLoading,
  };
}
