// @ts-nocheck
// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Hotkey window lifecycle manager.
//
// The original bundle uses this manager to show/hide the global hotkey-triggered
// quick window and to unregister global shortcuts on quit. This implementation
// wires the quick window through a shared mutable reference so the renderer can
// ask the main process to hide the window (e.g. when navigating away from a
// quick prompt). Global shortcut registration is left as a no-op until the
// renderer settings store that configures the shortcut is promoted.

import type { BrowserWindow } from "electron";
import { desktopLogger } from "./desktop-logger";

export type QuickWindowRef = {
  getWindow(): BrowserWindow | null | undefined;
};

export type HotkeyWindowLifecycleManager = {
  hide(): void;
  dispose(): void;
};

export function createHotkeyWindowLifecycleManager(
  quickWindowRef?: QuickWindowRef,
): HotkeyWindowLifecycleManager {
  return {
    hide() {
      const window = quickWindowRef?.getWindow();
      if (window == null || window.isDestroyed()) {
        desktopLogger.info("[Hotkey] hide requested but no quick window active");
        return;
      }
      window.hide();
      desktopLogger.info("[Hotkey] hid quick window");
    },
    dispose() {
      // Global shortcuts will be unregistered here once OS-level shortcut
      // configuration is restored.
      desktopLogger.info("[Hotkey] disposing lifecycle manager");
    },
  };
}
