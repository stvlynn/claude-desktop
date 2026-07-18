// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

import type {
  ClaudeBuddyApi,
  ClaudeFindInPageApi,
  ClaudeHybridApi,
  ClaudeInternalUiApi,
  ClaudeMenuApi,
} from "../../../shared/contracts/preload-api";
import type { ClaudeWindowKind } from "../../../shared/contracts/window-entry";

export {};

declare global {
  interface ClaudeElectronBridge {
    getAppSessionId?: () => string | undefined;
    getBuildFlavor?: () => string;
    getPathForFile?: (file: File) => string | null;
    getSentryInitOptions?: () => Record<string, unknown>;
    getSharedObjectSnapshotValue?: (key: string) => unknown;
    getSystemThemeVariant?: () => "light" | "dark";
    sendMessageFromView?: (message: {
      type: string;
      [key: string]: unknown;
    }) => void | Promise<void>;
    sendWorkerMessageFromView?: (
      workerId: string,
      message: unknown,
    ) => Promise<void>;
    showApplicationMenu?: (
      menuId: string,
      x: number,
      y: number,
    ) => void | Promise<void>;
    showContextMenu?: (
      items: unknown[],
    ) => { id?: string } | undefined | Promise<{ id?: string } | undefined>;
    subscribeToSystemThemeVariant?: (listener: () => void) => () => void;
    subscribeToWorkerMessages?: (
      workerId: string,
      listener: (message: unknown) => void,
    ) => () => void;
    triggerSentryTestError?: () => Promise<void>;
  }

  interface Window {
    /** Safe process subset exposed by the Electron preload. */
    process?: {
      env?: { CI?: string };
    };

    /** Host bridge exposed by the Electron preload. */
    electronBridge?: ClaudeElectronBridge;

    /** Locale injected by the main process before the renderer bundle loads. */
    initialLocale?: string;

    /** Flat message map injected by the main process for the initial locale. */
    initialMessages?: Record<string, string>;

    /**
     * Hybrid API namespace exposed by the preload script.
     *
     * The original bundle accessed this as `globalThis["claude.hybrid"]`
     * (a single property name containing a dot). The dot-notation alias
     * `window.claude.hybrid` is also declared so restored source can read
     * it idiomatically.
     */
    "claude.hybrid"?: ClaudeHybridApi;
    "claude.internal.ui"?: ClaudeInternalUiApi;
    "claude.internal.findInPage"?: ClaudeFindInPageApi;
    "claude.buddy"?: ClaudeBuddyApi;
    "claude.menu"?: ClaudeMenuApi;

    claude?: {
      hybrid?: ClaudeHybridApi;
      internal?: {
        ui?: ClaudeInternalUiApi;
        findInPage?: ClaudeFindInPageApi;
      };
      buddy?: ClaudeBuddyApi;
      menu?: ClaudeMenuApi;
    };

    /** Electron file-path bridge for drag-and-drop File objects. */
    buddy?: { getPathForFile?: (file: File) => string };

    /** Open an auxiliary Claude window by kind. */
    openClaudeWindow?: (kind: ClaudeWindowKind) => void;

    /** Notify the main process that the error overlay is visible. */
    notifyOverlayShown?: () => void;

    /** Notify the main process that the error overlay is hidden. */
    notifyOverlayHidden?: () => void;

    /** Gate used by the bundle to skip Sentry init when telemetry is disabled. */
    desktopEssentialTelemetryDisabled?: boolean;

    /** Sentinel used by Sentry to avoid double initialization in renderer + preload. */
    __SENTRY__RENDERER_INIT__?: boolean;

    /**
     * Legacy global set by the original bundle.
     * @deprecated Import `attachReactToElement` from `shared/runtime` instead.
     */
    attachReactToElement?: (
      container: Element,
      importPromise: Promise<{ default: import("react").ComponentType }>,
      componentProps?: Record<string, unknown>,
    ) => Promise<() => void>;
  }
}
