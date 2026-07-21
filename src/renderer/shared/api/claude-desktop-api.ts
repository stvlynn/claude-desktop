// Restored from ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js

import type { LoadErrorDetails } from "../../../shared/contracts/window-api";
export type { LoadErrorDetails } from "../../../shared/contracts/window-api";

export type AboutWindowBuildProps = {
  commitHash?: string;
  commitTimestamp?: string;
};

export type AboutWindowApi = {
  getAppName?: () => Promise<string | undefined>;
  getBuildProps?: () => Promise<AboutWindowBuildProps>;
  getSupport?: () => Promise<void> | void;
  openHelp?: () => Promise<void> | void;
};

export type FindInPageResult = {
  activeIndex?: number;
  total?: number;
};

export type FindInPageOptions = {
  findNext: boolean;
  forward?: boolean;
};

export type FindInPageApi = {
  endFindSession?: () => Promise<void>;
  findInPage?: (
    query: string,
    options: FindInPageOptions,
  ) => Promise<FindInPageResult | null>;
  onBlurInput?: (listener: () => void) => (() => void) | void;
  onFocusInput?: (listener: () => void) => (() => void) | void;
  onStepToMatch?: (listener: (forward: boolean) => void) => (() => void) | void;
  stopFindInPage?: () => Promise<void>;
};

export type BuddyPreview =
  | {
      color?: string;
      frames?: string[];
      kind?: "text";
    }
  | {
      dataUrl?: string;
      kind: "gif";
    };

export type BuddyConnectionStatus = {
  connected?: boolean;
  paired?: {
    id?: string;
    name?: string;
  } | null;
};

export type BuddyDeviceStatus = {
  bat: {
    mA: number;
    pct: number;
    usb?: boolean;
  };
  name: string;
  sec?: boolean;
  stats: {
    appr: number;
    lvl: number;
    vel?: number | string;
  };
  sys: {
    heap: number;
    up: number;
  };
};

export type BuddyDiscoveredDevice = {
  id: string;
  name?: string;
};

export type BuddyApi = {
  cancelScan?: () => Promise<void> | void;
  deviceStatus?: () => Promise<BuddyDeviceStatus | null>;
  forgetDevice?: () => Promise<void>;
  install?: (folderPath: string) => Promise<void>;
  onPairingPrompt?: (
    listener: (deviceName: string) => void,
  ) => (() => void) | void;
  onProgress?: (listener: (message: string) => void) => (() => void) | void;
  pairDevice?: () => Promise<void>;
  pickDevice?: (deviceId: string) => Promise<void>;
  pickFolder?: () => Promise<string | null>;
  preview?: (folderPath: string) => Promise<BuddyPreview | null>;
  scanDevices?: () => Promise<BuddyDiscoveredDevice[] | null>;
  setName?: (name: string) => Promise<boolean>;
  status?: () => Promise<BuddyConnectionStatus>;
  submitPin?: (pin: string | null) => Promise<void> | void;
};

export type BuddyFileBridge = {
  getPathForFile?: (file: File) => string;
};

export type MainWindowTitleBarApi = {
  isClaudeCurrentlyHealthy?: () => boolean | Promise<boolean>;
  onHideLoadError?: (listener: () => void) => (() => void) | void;
  onShowLoadError?: (
    listener: (details: LoadErrorDetails) => void,
  ) => (() => void) | void;
  onUpdateTitleBar?: (listener: (title: string) => void) => (() => void) | void;
  requestMainMenuPopup?: () => Promise<void> | void;
  requestReloadMainView?: () => void;
  titleBarReady?: () => void;
};

export type QuickWindowApi = {
  requestDismiss?: (prompt: string | null) => Promise<void> | void;
  requestSkooch?: (width: number, height: number) => Promise<void> | void;
};

export type NativeContextMenuSeparatorItem = {
  type: "separator";
};

export type NativeContextMenuCommandItem = {
  id: string;
  type?: "normal" | "checkbox" | "radio" | "submenu";
  label?: string;
  role?: "undo" | "redo" | "cut" | "copy" | "paste" | "selectAll" | "delete";
  enabled?: boolean;
  icon?: string | null;
  toolTip?: string;
  submenu?: NativeContextMenuItem[];
};

export type NativeContextMenuItem =
  NativeContextMenuSeparatorItem | NativeContextMenuCommandItem;

export type NativeContextMenuResult = {
  id: string | null;
};

export type ShowApplicationMenuRequest = {
  menuId: string;
  x: number;
  y: number;
};

export type ClaudeMenuApi = {
  showApplicationMenu?: (
    request: ShowApplicationMenuRequest,
  ) => Promise<void> | void;
  showContextMenu?: (
    items: NativeContextMenuItem[],
  ) => Promise<NativeContextMenuResult> | void;
  onNewWindow?: (listener: () => void) => (() => void) | void;
  onHelp?: (listener: () => void) => (() => void) | void;
};

export type DesktopIntlInitialLocale = {
  locale: string;
  messages: Record<string, string>;
};

export type DesktopIntlApi = {
  getInitialLocale?: () => DesktopIntlInitialLocale;
  requestLocaleChange?: (locale: string) => Promise<void> | void;
  onLocaleChanged?: (
    callback: (locale: string, messages: Record<string, string>) => void,
  ) => (() => void) | void;
};

type ClaudeInternalUi = {
  AboutWindow?: AboutWindowApi;
  MainWindowTitleBar?: MainWindowTitleBarApi;
  QuickWindow?: QuickWindowApi;
};

type ClaudeGlobal = typeof globalThis & {
  buddy?: BuddyFileBridge;
  "claude.buddy"?: {
    Buddy?: BuddyApi;
  };
  "claude.hybrid"?: {
    DesktopIntl?: DesktopIntlApi;
  };
  "claude.internal.ui"?: ClaudeInternalUi;
  "claude.internal.findInPage"?: {
    FindInPage?: FindInPageApi;
  };
  "claude.menu"?: ClaudeMenuApi;
  openClaudeWindow?: (
    kind: import("../../../shared/contracts/window-entry").ClaudeWindowKind,
  ) => void;
  notifyOverlayShown?: () => void;
  notifyOverlayHidden?: () => void;
};

export function getMainWindowTitleBarApi(): MainWindowTitleBarApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.internal.ui"]?.MainWindowTitleBar;
}

export function getAboutWindowApi(): AboutWindowApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.internal.ui"]?.AboutWindow;
}

export function getFindInPageApi(): FindInPageApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.internal.findInPage"]?.FindInPage;
}

export function getBuddyApi(): BuddyApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.buddy"]?.Buddy;
}

export function getBuddyFileBridge(): BuddyFileBridge | undefined {
  return (globalThis as ClaudeGlobal).buddy;
}

export function getQuickWindowApi(): QuickWindowApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.internal.ui"]?.QuickWindow;
}

export function getDesktopIntlApi(): DesktopIntlApi | undefined {
  return (globalThis as ClaudeGlobal)["claude.hybrid"]?.DesktopIntl;
}
