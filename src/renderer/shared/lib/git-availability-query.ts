// @ts-nocheck
// Restored from ref/webview/assets/git-availability-query-Bg0jv6sY.js
// GitAvailabilityQuery chunk restored from the Codex webview bundle.
import { _appScopeH, appScopeRoot } from "../runtime/app-scope";
import { er, Zn } from "../runtime/thread-context-inputs";
import { vscodeApiU } from "../runtime/vscode-api-runtime";

type GitAvailabilityParams = {
  hostConfig: unknown;
  operationSource?: string;
};

export const gitAvailabilityQuery = _appScopeH(
  appScopeRoot,
  (params?: GitAvailabilityParams) => ({
    queryKey: ["git", "availability", Zn(params?.hostConfig)],
    queryFn: ({ signal }: { signal?: AbortSignal }) =>
      er("git").request({
        method: "availability",
        params: {
          hostConfig: params?.hostConfig,
          operationSource: params?.operationSource,
        },
        signal,
      }),
    refetchOnWindowFocus: true,
    staleTime: vscodeApiU.THIRTY_SECONDS,
  }),
  {
    excludeFieldsFromKey: ["operationSource"],
  },
);
