// @ts-nocheck
// Restored from ref/webview/assets/open-in-targets-query-CrvqPdrF.js
// Open-in-targets query restored from the current Codex webview bundle.
import { _appScopeM } from "../runtime/app-scope";
import { vscodeApiI, vscodeApiU } from "../runtime/vscode-api";
export const openInTargetsQuery = vscodeApiI(
  _appScopeM,
  "open-in-targets",
  () => ({
    staleTime: vscodeApiU.ONE_MINUTE,
  }),
);
export function initOpenInTargetsQueryChunk(): void {}
