// Restored from ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js
// Domain: mutable state for the main renderer window and its title bar.

import type { LoadErrorDetails } from "../../shared/contracts/window-api";

export type MainWindowState = {
  title: string;
  loadError: LoadErrorDetails | null;
  isReady: boolean;
  isFocused: boolean;
  isMaximized: boolean;
  isFullScreen: boolean;
};

export function createInitialMainWindowState(): MainWindowState {
  return {
    title: "Claude",
    loadError: null,
    isReady: false,
    isFocused: false,
    isMaximized: false,
    isFullScreen: false,
  };
}

export function updateTitle(
  state: MainWindowState,
  title: string,
): MainWindowState {
  return { ...state, title };
}

export function showLoadError(
  state: MainWindowState,
  details: LoadErrorDetails,
): MainWindowState {
  return { ...state, loadError: details };
}

export function hideLoadError(state: MainWindowState): MainWindowState {
  return { ...state, loadError: null };
}

export function markTitleBarReady(state: MainWindowState): MainWindowState {
  return { ...state, isReady: true };
}

export function updateWindowFocus(
  state: MainWindowState,
  isFocused: boolean,
): MainWindowState {
  return { ...state, isFocused };
}

export function updateWindowMaximized(
  state: MainWindowState,
  isMaximized: boolean,
): MainWindowState {
  return { ...state, isMaximized };
}

export function updateWindowFullScreen(
  state: MainWindowState,
  isFullScreen: boolean,
): MainWindowState {
  return { ...state, isFullScreen };
}
