// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Last non-settings route used by Settings Back navigation.

import { appScopeRoot, createAppScopeSignal } from "../../../shared/runtime/app-scope";

export const settingsReturnRouteSignal = createAppScopeSignal<string | null>(
  appScopeRoot,
  null,
);

export function initSettingsReturnRouteSignalChunk(): void {}
