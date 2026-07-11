// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js
// Application: real Electron app lifecycle handlers.
//
// Registers the app-level events that the original main process bundle used to
// track web contents, detect crashed renderer/child processes, perform a
// graceful quit sequence, and recreate the main window on macOS activate.

import { app, BrowserWindow, type WebContents } from "electron";
import * as path from "node:path";
import { desktopLogger } from "./desktop-logger";
import { registerDesktopAppLifecycleHandlers } from "./desktop-app-lifecycle";
import type {
  AppForegroundEventBus,
  ApplicationMenuManager,
  AppWindowLifecycleController,
  DisposableRuntimeService,
  FatalErrorReporter,
  FlushableStore,
  StructuredLogger,
} from "./desktop-app-lifecycle/types";
import type { KeyValueStore } from "../infrastructure/desktop-runtime-types";
import type { QuitStateController } from "../domain/quit-state";
import { FileBackedGlobalStateStore } from "../infrastructure/global-state-store";
import { FileBackedSettingsStoreBoundary } from "../infrastructure/desktop-settings-store";
import {
  createGlobalDictationLifecycleManager,
  type GlobalDictationLifecycleManager,
} from "./global-dictation-lifecycle-service";
import {
  createHotkeyWindowLifecycleManager,
  type HotkeyWindowLifecycleManager,
} from "./hotkey-window-lifecycle-service";
import type { LocalConversationActivityTracker } from "./local-conversation-activity-tracker";
import {
  createAutomationStateTracker,
  type AutomationStateTracker,
} from "./automation-state-tracker";

export type LifecycleServiceOptions = {
  appName: string;
  createMainWindow: () => BrowserWindow;
  quitState: QuitStateController;
  applicationMenuManager?: ApplicationMenuManager;
  automationStateTracker?: AutomationStateTracker;
  disableQuitConfirmationPrompt?: boolean;
  getHasEnabledAutomations?: () => boolean;
  getHasInProgressLocalConversation?: () => boolean;
  globalDictationLifecycleManager?: GlobalDictationLifecycleManager;
  globalState?: KeyValueStore & FlushableStore;
  hotkeyWindowLifecycleManager?: HotkeyWindowLifecycleManager;
  localConversationActivityTracker?: LocalConversationActivityTracker;
  settingsStore?: FlushableStore;
  isWindows?: boolean;
};

const noopDisposable: DisposableRuntimeService = {
  dispose() {
    // no-op until the generic runtime disposables surface is restored
  },
};

function resolveUserDataFilePath(fileName: string): string {
  return path.join(app.getPath("userData"), fileName);
}

export class LifecycleService {
  private readonly options: LifecycleServiceOptions;
  private unregisterLifecycleHandlers: (() => void) | null = null;

  constructor(options: LifecycleServiceOptions) {
    this.options = options;
  }

  listen(): void {
    const globalState: KeyValueStore & FlushableStore =
      this.options.globalState ??
      new FileBackedGlobalStateStore(resolveUserDataFilePath("global-state.json"));
    const settingsStore: FlushableStore =
      this.options.settingsStore ??
      new FileBackedSettingsStoreBoundary(
        resolveUserDataFilePath("config.toml"),
        globalState,
      );
    const globalDictationLifecycleManager =
      this.options.globalDictationLifecycleManager ??
      createGlobalDictationLifecycleManager();
    const hotkeyWindowLifecycleManager =
      this.options.hotkeyWindowLifecycleManager ??
      createHotkeyWindowLifecycleManager();
    const automationStateTracker =
      this.options.automationStateTracker ?? createAutomationStateTracker();

    this.unregisterLifecycleHandlers = registerDesktopAppLifecycleHandlers({
      appEvent: createAppForegroundEventBus(),
      appInstance: app,
      applicationMenuManager: this.options.applicationMenuManager ?? {
        refresh() {
          // no-op until the application menu manager is wired
        },
      },
      browserWindowApi: BrowserWindow,
      disableQuitConfirmationPrompt:
        this.options.disableQuitConfirmationPrompt ?? false,
      disposables: noopDisposable,
      ensureWindow: () => this.options.createMainWindow(),
      errorReporter: createFatalErrorReporter(),
      flushAndDisposeContext() {
        Promise.all([globalState.flush(), settingsStore.flush()]).catch(
          (error) => {
            desktopLogger.error("[Lifecycle] failed to flush stores", {
              error: error instanceof Error ? error.message : String(error),
            });
          },
        );
      },
      getHasEnabledAutomations: () =>
        this.options.getHasEnabledAutomations?.() ??
        automationStateTracker.getHasEnabledAutomations(),
      getHasInProgressLocalConversation:
        this.options.getHasInProgressLocalConversation ?? (() => false),
      globalDictationLifecycleManager,
      globalState,
      hotkeyWindowLifecycleManager,
      isWindows: this.options.isWindows ?? process.platform === "win32",
      logger: desktopLogger as StructuredLogger,
      quitState: this.options.quitState,
      settingsStore,
      windows: createAppWindowLifecycleController(this.options.createMainWindow),
    });

    app.on("web-contents-created", this.handleWebContentsCreated);
    app.on("browser-window-created", this.handleBrowserWindowCreated);
    app.on("render-process-gone", this.handleRenderProcessGone);
  }

  dispose(): void {
    this.unregisterLifecycleHandlers?.();
    this.unregisterLifecycleHandlers = null;
    this.options.automationStateTracker?.dispose();
    this.options.localConversationActivityTracker?.dispose();
    app.off("web-contents-created", this.handleWebContentsCreated);
    app.off("browser-window-created", this.handleBrowserWindowCreated);
    app.off("render-process-gone", this.handleRenderProcessGone);
  }

  private handleWebContentsCreated = (
    _event: Electron.Event,
    contents: WebContents,
  ): void => {
    contents.on("did-navigate", (_event, url) => {
      desktopLogger.info("[Lifecycle] webcontents navigated", { url });
    });

    contents.on("page-title-updated", (_event, title) => {
      desktopLogger.info("[Lifecycle] webcontents title updated", { title });
    });

    contents.on("will-navigate", (event, url) => {
      // Only allow navigation inside the claude.ai origin. The main content
      // view loads https://claude.ai and we do not want external redirects to
      // take over the embedded webview.
      if (!url.startsWith("https://claude.ai/")) {
        desktopLogger.warning("[Lifecycle] blocked navigation", { url });
        event.preventDefault();
      }
    });

    contents.setWindowOpenHandler(({ url }) => {
      // External links should open in the system browser, not a new Electron
      // window.
      desktopLogger.info("[Lifecycle] opening external url", { url });
      return { action: "deny" };
    });
  };

  private handleBrowserWindowCreated = (
    _event: Electron.Event,
    window: Electron.BrowserWindow,
  ): void => {
    desktopLogger.info("[Lifecycle] browser window created", {
      id: window.webContents.id,
    });
  };

  private handleRenderProcessGone = (
    _event: Electron.Event,
    webContents: WebContents,
    details: Electron.RenderProcessGoneDetails,
  ): void => {
    desktopLogger.error("[Lifecycle] render process gone", {
      webContentsId: webContents.id,
      reason: details.reason,
      exitCode: details.exitCode,
    });
  };
}

function createAppForegroundEventBus(): AppForegroundEventBus {
  return {
    emit(event) {
      desktopLogger.info(`[Lifecycle] app ${event}`);
    },
  };
}

function createFatalErrorReporter(): FatalErrorReporter {
  return {
    reportFatal(error, context) {
      desktopLogger.error("[Lifecycle] fatal error", {
        message: error.message,
        context,
      });
    },
  };
}

function createAppWindowLifecycleController(
  createMainWindow: () => BrowserWindow,
): AppWindowLifecycleController {
  let isAppQuitting = false;
  return {
    markAppQuitting() {
      isAppQuitting = true;
    },
    showLastActivePrimaryWindow() {
      if (isAppQuitting) return false;
      const windows = BrowserWindow.getAllWindows();
      const mainWindow =
        windows.find(
          (window) =>
            window.webContents.getURL().includes("index.html") ||
            window.title === "Claude",
        ) ?? windows[windows.length - 1];
      if (mainWindow == null || mainWindow.isDestroyed()) return false;
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
      return true;
    },
  };
}
