// Restored from ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js

export type LoadErrorDetails = {
  errorDescription?: string;
};

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
  requestReloadMainView?: () => void;
  titleBarReady?: () => void;
};

export type QuickWindowApi = {
  requestDismiss?: (prompt: string | null) => Promise<void> | void;
  requestSkooch?: (width: number, height: number) => Promise<void> | void;
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
  "claude.internal.ui"?: ClaudeInternalUi;
  "claude.internal.findInPage"?: {
    FindInPage?: FindInPageApi;
  };
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
