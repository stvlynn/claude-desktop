// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Electron app badge: mirrors the unread badge count onto the OS dock/taskbar icon.
import { useEffect } from "react";
import { appBadgeCountAtom } from "../../shared/runtime/onboarding-commons-externals.facade";
import { useAppScopeValue } from "../../shared/runtime/app-scope";
import { vscodeApiF } from "../../shared/runtime/vscode-api";

export function ElectronAppBadge(): null {
  const count = useAppScopeValue<number>(appBadgeCountAtom);
  useEffect(() => {
    vscodeApiF.dispatchMessage("electron-set-badge-count", { count });
  }, [count]);
  return null;
}
