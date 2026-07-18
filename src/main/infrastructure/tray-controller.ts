// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Tray-related window focus helpers.

import { BrowserWindow } from "electron";

export function focusOrCreateMainWindow(
  createWindow: () => BrowserWindow,
): void {
  const existing = BrowserWindow.getAllWindows().find(
    (window) => !window.isDestroyed(),
  );
  if (existing) {
    if (existing.isMinimized()) existing.restore();
    existing.focus();
    return;
  }
  createWindow();
}
