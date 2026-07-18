// Restored from ref/.vite/build/index.js
// Application: global shortcut to show/hide the quick window.
//
// The original bundle reads the shortcut accelerator from desktop settings. This
// restored version registers a sensible platform default and exposes an option
// to override it. Settings-driven configuration will be wired once the renderer
// settings store is promoted.

import { globalShortcut, type BrowserWindow } from "electron";
import { desktopLogger } from "./desktop-logger";

export type QuickWindowShortcutService = {
  register(): void;
  unregister(): void;
  toggleQuickWindow(): void;
};

export type QuickWindowShortcutOptions = {
  accelerator?: string;
  createQuickWindow(): BrowserWindow;
  getQuickWindow(): BrowserWindow | null | undefined;
};

const DEFAULT_SHORTCUTS: Record<NodeJS.Platform, string> = {
  aix: "Alt+Space",
  android: "Alt+Space",
  cygwin: "Alt+Space",
  darwin: "Option+Space",
  freebsd: "Alt+Space",
  haiku: "Alt+Space",
  linux: "Alt+Space",
  netbsd: "Alt+Space",
  openbsd: "Alt+Space",
  sunos: "Alt+Space",
  win32: "Alt+Space",
};

export function createQuickWindowShortcutService({
  accelerator,
  createQuickWindow,
  getQuickWindow,
}: QuickWindowShortcutOptions): QuickWindowShortcutService {
  const resolveAccelerator = () =>
    accelerator ?? DEFAULT_SHORTCUTS[process.platform] ?? "Alt+Space";

  const toggleQuickWindow = () => {
    const existing = getQuickWindow();
    if (existing && !existing.isDestroyed()) {
      if (existing.isVisible()) {
        existing.hide();
        desktopLogger.info("[QuickShortcut] hid quick window");
      } else {
        existing.show();
        existing.focus();
        desktopLogger.info("[QuickShortcut] showed quick window");
      }
      return;
    }

    const window = createQuickWindow();
    window.show();
    window.focus();
    desktopLogger.info("[QuickShortcut] created and showed quick window");
  };

  const register = () => {
    const resolved = resolveAccelerator();
    if (globalShortcut.isRegistered(resolved)) {
      desktopLogger.info("[QuickShortcut] accelerator already registered", {
        accelerator: resolved,
      });
      return;
    }

    try {
      const success = globalShortcut.register(resolved, toggleQuickWindow);
      if (!success) {
        desktopLogger.warning(
          "[QuickShortcut] globalShortcut.register returned false",
          { accelerator: resolved },
        );
        return;
      }
      desktopLogger.info("[QuickShortcut] registered global shortcut", {
        accelerator: resolved,
      });
    } catch (error) {
      desktopLogger.warning("[QuickShortcut] failed to register global shortcut", {
        accelerator: resolved,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const unregister = () => {
    globalShortcut.unregisterAll();
    desktopLogger.info("[QuickShortcut] unregistered all global shortcuts");
  };

  return {
    register,
    unregister,
    toggleQuickWindow,
  };
}
