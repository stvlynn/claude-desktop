// Restored from ref/webview/assets/pinned-threads-query-BicPYERW.js
// PinnedThreadsQuery chunk restored from the Codex webview bundle.
import { _appScopeM } from "../runtime/app-scope";
import { createVscodeQueryOptions, vscodeApiU } from "../runtime/vscode-api";

export function initPinnedThreadsQueryChunk(): void {}

export const pinnedThreadsQuery = createVscodeQueryOptions(
  _appScopeM,
  "list-pinned-threads",
  {
    refetchOnWindowFocus: true,
    staleTime: vscodeApiU.FIVE_SECONDS,
  },
);
