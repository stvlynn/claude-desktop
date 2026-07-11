// @ts-nocheck
// Restored from ref/webview/assets/send-open-file-request-DcwYnVp4.js
// send-open-file-request-DcwYnVp4 chunk restored from the Codex webview bundle.
import { vscodeApiN as sendVscodeMessage } from "../runtime/vscode-api";
export type OpenFileRequest = {
  [key: string]: unknown;
};
export function sendOpenFileRequest(params: OpenFileRequest): void {
  sendVscodeMessage("open-file", {
    params,
  });
}
