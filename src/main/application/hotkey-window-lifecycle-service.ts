// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Hotkey window lifecycle manager.
//
// The shortcut registrar owns registration. This manager owns the quick-window
// visibility boundary used by navigation and application shutdown.

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
        desktopLogger.info(
          "[Hotkey] hide requested but no quick window active",
        );
        return;
      }
      window.hide();
      desktopLogger.info("[Hotkey] hid quick window");
    },
    dispose() {
      const window = quickWindowRef?.getWindow();
      if (window != null && !window.isDestroyed()) window.hide();
      desktopLogger.info("[Hotkey] disposing lifecycle manager");
    },
  };
}
