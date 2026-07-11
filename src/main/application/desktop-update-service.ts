// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Application: desktop update service helpers (native addon loading, theme,
// internal CDN toggle).

import * as path from "node:path";
import { nativeTheme } from "electron";
import { createScopedStructuredLogger } from "../infrastructure/structured-logger";
import { requireFromWorkspaceBoundary } from "../infrastructure/desktop-runtime-utils";
import type { KeyValueStore } from "../infrastructure/desktop-runtime-types";

const logger = createScopedStructuredLogger("desktop-update-service");

export function loadWindowsUpdaterNativeAddon(): unknown {
  try {
    return requireFromWorkspaceBoundary(
      path.join(process.resourcesPath, "native", "windows-updater.node"),
    );
  } catch (error) {
    logger.error("Failed to load native Windows updater addon", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}

export function applyNativeThemeSource(theme: string): void {
  nativeTheme.themeSource =
    theme === "light" || theme === "dark" ? theme : "system";
}

export async function setInternalUpdateCdnEnabled(
  store: KeyValueStore,
  enabled: boolean,
): Promise<void> {
  store.set("electron-internal-update-cdn-enabled", enabled);
  await store.flush?.();
}
