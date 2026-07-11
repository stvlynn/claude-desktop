// @ts-nocheck
// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Toast signal and controller initialization helpers.
import { toastApiSignal } from "./toast-signal";
import { initAppScopeSignalRuntime } from "./app-scope";

export const toastSignal = toastApiSignal;

export function initToastRuntime(): void {
  initAppScopeSignalRuntime();
}
