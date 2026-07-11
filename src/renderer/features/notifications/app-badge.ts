// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// @ts-nocheck
// Electron app badge: mirrors the unread badge count onto the OS dock/taskbar icon.
import { useEffect } from "react";
import {
  appBadgeCountAtom,
  useAtomValue,
} from "../../shared/runtime/onboarding-commons-externals.facade";
import { vscodeApiF } from "../../shared/runtime/vscode-api";

export function ElectronAppBadge(): null {
  const count = useAtomValue(appBadgeCountAtom) as number;
  useEffect(() => {
    vscodeApiF.dispatchMessage("electron-set-badge-count", { count });
  }, [count]);
  return null;
}
