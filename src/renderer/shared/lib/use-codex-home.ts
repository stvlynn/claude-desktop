// @ts-nocheck
// Restored from ref/webview/assets/use-codex-home-CG1itsCv.js
// use-codex-home-CG1itsCv chunk restored from the Codex webview bundle.
import { _appScopeA as useScopedSignalValue } from "../runtime/app-scope";
import { codexHomeQuery } from "../runtime/thread-context-inputs";
type CodexHomeQueryResult = {
  data?: { codexHome?: string | null } | null;
};

export function useCodexHomeQuery(hostId?: string | null): CodexHomeQueryResult {
  const queryParams =
    hostId == null
      ? undefined
      : {
          hostId,
        };
  return useScopedSignalValue(codexHomeQuery, queryParams) as CodexHomeQueryResult;
}
export function useCodexHome(hostId?: string | null): string | null | undefined {
  return useCodexHomeQuery(hostId).data?.codexHome;
}
