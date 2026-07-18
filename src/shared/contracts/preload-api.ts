// Restored from ref/.vite/build/index.pre.js
// Contracts shared between the Electron preload script and the renderer.

import type {
  AboutWindowApi,
  BuddyApi,
  BuddyFileBridge,
  ClaudeMenuApi,
  DesktopIntlApi,
  FindInPageApi,
  LoadErrorDetails,
  MainWindowTitleBarApi,
  NativeContextMenuItem,
  NativeContextMenuResult,
  QuickWindowApi,
  ShowApplicationMenuRequest,
} from "../../renderer/shared/api/claude-desktop-api";
import type { ClaudeWindowKind } from "./window-entry";

export type {
  ClaudeMenuApi,
  NativeContextMenuItem,
  NativeContextMenuResult,
  ShowApplicationMenuRequest,
} from "../../renderer/shared/api/claude-desktop-api";

export const mainWindowIpcChannels = {
  subscribeTitle: "main-window:title-changed",
  subscribeLoadError: "main-window:load-error-shown",
  subscribeHideLoadError: "main-window:load-error-hidden",
  titleBarReady: "main-window:title-bar-ready",
  requestReloadMainView: "main-window:reload-main-view",
  requestMainMenuPopup: "main-window:request-main-menu-popup",
  isClaudeCurrentlyHealthy: "main-window:is-healthy",
} as const;

export const windowIpcChannels = {
  openClaudeWindow: "claude:open-window",
} as const;

export const overlayIpcChannels = {
  overlayShown: "overlay:shown",
  overlayHidden: "overlay:hidden",
} as const;

export const findInPageIpcChannels = {
  findInPage: "find-in-page:find",
  stopFindInPage: "find-in-page:stop",
  endFindSession: "find-in-page:end-session",
  focusInput: "find-in-page:focus-input",
  blurInput: "find-in-page:blur-input",
  stepToMatch: "find-in-page:step-to-match",
  foundInPage: "find-in-page:found",
} as const;

export const buddyIpcChannels = {
  status: "buddy:status",
  deviceStatus: "buddy:device-status",
  scanDevices: "buddy:scan-devices",
  cancelScan: "buddy:cancel-scan",
  pickDevice: "buddy:pick-device",
  pairDevice: "buddy:pair-device",
  submitPin: "buddy:submit-pin",
  forgetDevice: "buddy:forget-device",
  setName: "buddy:set-name",
  preview: "buddy:preview",
  install: "buddy:install",
  pickFolder: "buddy:pick-folder",
  pairingPrompt: "buddy:pairing-prompt",
  progress: "buddy:progress",
  getPathForFile: "buddy:get-path-for-file",
} as const;

export const desktopIntlIpcChannels = {
  getInitialLocale: "desktop-intl:get-initial-locale",
  requestLocaleChange: "desktop-intl:request-locale-change",
  localeChanged: "desktop-intl:locale-changed",
} as const;

export const menuIpcChannels = {
  showApplicationMenu: "claude_desktop:show-application-menu",
  showContextMenu: "claude_desktop:show-context-menu",
  menuNewWindow: "claude:menu:new-window",
  menuHelp: "claude:menu:help",
} as const;

export const quickWindowIpcChannels = {
  requestSkooch: "quick-window:request-skooch",
  requestDismiss: "quick-window:request-dismiss",
  dismissedWithPrompt: "quick-window:dismissed-with-prompt",
} as const;

export const aboutWindowIpcChannels = {
  getAppName: "about-window:get-app-name",
  getBuildProps: "about-window:get-build-props",
  openHelp: "about-window:open-help",
  getSupport: "about-window:get-support",
} as const;

export type ClaudeHybridApi = {
  DesktopIntl?: DesktopIntlApi;
};

export type ClaudeInternalUiApi = {
  AboutWindow?: AboutWindowApi;
  MainWindowTitleBar?: MainWindowTitleBarApi;
  QuickWindow?: QuickWindowApi;
};

export type ClaudeBuddyApi = {
  Buddy?: BuddyApi;
};

export type ClaudeFindInPageApi = {
  FindInPage?: FindInPageApi;
};

export type ClaudePreloadGlobals = {
  initialLocale?: string;
  initialMessages?: Record<string, string>;
  "claude.hybrid"?: ClaudeHybridApi;
  "claude.internal.ui"?: ClaudeInternalUiApi;
  "claude.internal.findInPage"?: ClaudeFindInPageApi;
  "claude.buddy"?: ClaudeBuddyApi;
  "claude.menu"?: ClaudeMenuApi;
  buddy?: BuddyFileBridge;
  openClaudeWindow?: (kind: ClaudeWindowKind) => void;
  notifyOverlayShown?: () => void;
  notifyOverlayHidden?: () => void;
};
