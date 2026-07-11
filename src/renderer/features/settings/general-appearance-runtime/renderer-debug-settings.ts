// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// @ts-nocheck
// Renderer debug settings signal and chunk initializer.

export type RendererDebugSettings = Record<string, unknown>;

const listeners = new Set<(value: RendererDebugSettings) => void>();
let currentValue: RendererDebugSettings = {};

export const rendererDebugSettingsSignal = {
  get: () => currentValue,
  set: (updater: (value: RendererDebugSettings) => RendererDebugSettings) => {
    currentValue = updater(currentValue);
    listeners.forEach((listener) => listener(currentValue));
  },
  subscribe: (listener: (value: RendererDebugSettings) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export function setRendererDebugSetting(key: string, value: unknown): void {
  rendererDebugSettingsSignal.set((prev) => ({ ...prev, [key]: value }));
}

export function initRendererDebugSettingsChunk(): void {
  // no-op initializer for the restored debug settings surface
}
// Added to satisfy relative import checks.
export const initWslRemoteConnectionImportRuntimeChunk = undefined as never;
export const isWslRemoteConnectionImportEnabled = undefined as never;
