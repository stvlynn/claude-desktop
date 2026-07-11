// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Renderer debug flags exposed in the general settings runtime.

import {
  createSignalToken,
  type SignalStore,
} from "./signal-token";

export type RendererDebugSettings = {
  disableBackdropBlur: boolean;
  disableCssMotion: boolean;
  disableScrollFadeMask: boolean;
  disableScrollFadeMaskAnimation: boolean;
  disableSquircles: boolean;
  forceOpaqueRendererBackground: boolean;
};

export const DEFAULT_RENDERER_DEBUG_SETTINGS: RendererDebugSettings = {
  disableBackdropBlur: false,
  disableCssMotion: false,
  disableScrollFadeMask: false,
  disableScrollFadeMaskAnimation: false,
  disableSquircles: false,
  forceOpaqueRendererBackground: false,
};

export const rendererDebugSettingsSignal = createSignalToken(
  "renderer-debug-settings",
  DEFAULT_RENDERER_DEBUG_SETTINGS,
);

export const WSL_REMOTE_CONNECTIONS_SHARED_OBJECT_KEY =
  "wsl_remote_connections";

export function setRendererDebugSetting(
  store: SignalStore,
  key: keyof RendererDebugSettings,
  value: boolean,
): void {
  store.set(rendererDebugSettingsSignal, (current) => ({
    ...DEFAULT_RENDERER_DEBUG_SETTINGS,
    ...current,
    [key]: value,
  }));
}

export function isWslRemoteConnectionImportEnabled(
  readSharedObject: (key: string) => unknown,
): boolean {
  return readSharedObject(WSL_REMOTE_CONNECTIONS_SHARED_OBJECT_KEY) === true;
}
