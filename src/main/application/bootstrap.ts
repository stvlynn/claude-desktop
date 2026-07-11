// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js
// Application: bootstrap the Electron app and create the main window.

import { app, BrowserWindow, ipcMain, Menu, Tray } from "electron";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import {
  aboutWindowIpcChannels,
  buddyIpcChannels,
  findInPageIpcChannels,
  mainWindowIpcChannels,
  overlayIpcChannels,
  quickWindowIpcChannels,
  windowIpcChannels,
} from "../../shared/contracts/preload-api";
import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";
import {
  RuntimeAppBrands,
  parseRuntimeAppBrand,
} from "../domain/app-brand";
import type { DeepLinkRoute } from "../infrastructure/desktop-runtime-types";
import { createClaudeWindow } from "../infrastructure/window-factory";
import { createMainWindow } from "../infrastructure/main-window";
import { shouldUseSingleInstanceLock } from "../infrastructure/desktop-process-utils";
import { focusOrCreateMainWindow } from "../infrastructure/tray-controller";
import { DesktopTrayController } from "../infrastructure/desktop-tray-controller";
import { loadDesktopTrayIcons } from "../infrastructure/tray-icons";
import { TitleBarService } from "./title-bar-service";
import { FindInPageService } from "./find-in-page-service";
import { BuddyService } from "./buddy-service";
import { DesktopIntlService } from "./desktop-intl-service";
import { desktopLogger } from "./desktop-logger";
import { LifecycleService } from "./lifecycle-service";
import { createApplicationMenuService } from "./application-menu-service";
import {
  registerShowApplicationMenuIpc,
  registerShowContextMenuIpc,
} from "./native-menu-service";
import { createLocalConversationActivityTracker } from "./local-conversation-activity-tracker";
import { createAutomationStateTracker } from "./automation-state-tracker";
import {
  createComputerUseConfigSync,
  type ComputerUseConfigSyncService,
} from "./computer-use-config-sync";
import {
  getAppName,
  getBuildProps,
  getSupport,
  openHelp,
} from "./about-window-service";
import { createQuitStateController } from "../domain/quit-state";
import { registerDesktopViewIpcHandlers } from "./view-message-ipc";
import {
  createGlobalDictationLifecycleManager,
  type GlobalDictationLifecycleManager,
} from "./global-dictation-lifecycle-service";
import {
  createHotkeyWindowLifecycleManager,
  type QuickWindowRef,
} from "./hotkey-window-lifecycle-service";
import {
  createQuickWindowShortcutService,
  type QuickWindowShortcutService,
} from "./quick-window-shortcut-service";
import {
  CONNECT_APP_HOST_CHANNEL,
  registerAppHostConnectionIpc,
} from "./app-host-connection-ipc";
import { createDeepLinkCoordinator } from "./deep-link-coordinator";
import {
  createDesktopRuntimePaths,
  getDesktopRuntimeState,
} from "../infrastructure/desktop-runtime-state";
import type { DesktopUpdateManager } from "../infrastructure/desktop-runtime-types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_NAME = "Claude";
const APP_BUNDLE_IDENTIFIER = "com.anthropic.claude";

const PRODUCTION_RENDERER_HTML = path.resolve(
  __dirname,
  "..",
  "renderer",
  "index.html",
);

const DEV_RENDERER_URL = "http://localhost:5173";

function getRendererUrl(): string {
  if (process.env.RENDERER_URL) {
    return process.env.RENDERER_URL;
  }

  if (fs.existsSync(PRODUCTION_RENDERER_HTML)) {
    return `file://${PRODUCTION_RENDERER_HTML}`;
  }

  return DEV_RENDERER_URL;
}

function resolveUserDataPath(appDataPath: string): string {
  const override = process.env.CLAUDE_ELECTRON_USER_DATA_PATH?.trim();
  if (override) return path.resolve(override);
  return path.join(appDataPath, APP_BUNDLE_IDENTIFIER);
}

function configureAppIdentity(): void {
  app.setName(APP_NAME);
  app.setPath("userData", resolveUserDataPath(app.getPath("appData")));
  if (process.platform === "win32") {
    app.setAppUserModelId(APP_BUNDLE_IDENTIFIER);
  }
}

function focusExistingMainWindow(): void {
  const existing = BrowserWindow.getAllWindows().find(
    (window) =>
      window.webContents.getURL().includes("index.html") ||
      window.title === APP_NAME,
  );
  if (existing) {
    if (existing.isMinimized()) existing.restore();
    existing.focus();
  }
}

function createAppServices() {
  const findInPageService = new FindInPageService();
  const buddyService = new BuddyService();
  findInPageService.listen();
  buddyService.listen();
  return { findInPageService, buddyService };
}

function showAndFocusWindow(window: BrowserWindow): void {
  if (window.isDestroyed()) return;
  if (window.isMinimized()) window.restore();
  window.show();
  window.focus();
}

function registerDesktopIpcHandlers({
  mainContentWebContents,
  mainWindow,
  overlayWebContents,
  updateManager,
  globalDictationLifecycleManager,
  hotkeyWindowLifecycleManager,
  trayController,
}: {
  mainContentWebContents: Electron.WebContents;
  mainWindow: BrowserWindow;
  overlayWebContents: Electron.WebContents;
  updateManager: DesktopUpdateManager;
  globalDictationLifecycleManager: GlobalDictationLifecycleManager;
  hotkeyWindowLifecycleManager: { hide(): void };
  trayController?: DesktopTrayController;
}): () => void {
  const trustedWebContents = new Set<Electron.WebContents>([
    mainContentWebContents,
    overlayWebContents,
  ]);
  const isTrustedIpcEvent = (event: {
    sender: Electron.WebContents;
  }): boolean => trustedWebContents.has(event.sender);

  const appHostContext = {
    createAppHost: () => ({}),
    registerAppView: () => {},
  };

  const viewMessageContext = {
    getBrowserSidebarManager: () => ({
      getPreferredWindowStateForConversation: () => ({ window: mainWindow }),
    }),
    handleMessage: async (_sender: Electron.WebContents, message: unknown) => {
      desktopLogger.info("[ViewMessage] received message", {
        type:
          typeof message === "object" && message != null && "type" in message
            ? (message as { type: string }).type
            : "unknown",
      });
    },
    setChronicleConfig: () => {},
  };

  const getAppHostContextForWebContents = (
    webContents: Electron.WebContents,
  ) => (trustedWebContents.has(webContents) ? appHostContext : null);

  const getViewMessageContextForWebContents = (
    webContents: Electron.WebContents,
  ) => (trustedWebContents.has(webContents) ? viewMessageContext : null);

  function getPrimaryWindow(): BrowserWindow | null {
    return mainWindow.isDestroyed() ? null : mainWindow;
  }

  const disposeViewMessageIpc = registerDesktopViewIpcHandlers({
    browserSidebarRuntimeMessageSchema: {
      safeParse: () => ({ success: false as const }),
    },
    codexHome: app.getPath("userData"),
    createFreshWindow: async () => getPrimaryWindow(),
    desktopSentry: {
      captureException: (error, context) => {
        desktopLogger.error("[Sentry] captured exception", {
          error: error instanceof Error ? error.message : String(error),
          context,
        });
      },
    },
    ensureWindow: async () => getPrimaryWindow(),
    getContextForWebContents: getViewMessageContextForWebContents,
    getDockMenuController: () => null,
    getFastModeRolloutMetrics: () => null,
    getPrimaryWindow,
    getTrayController: () => trayController ?? null,
    globalDictationLifecycleManager,
    hasBrowserPaneEnabled: () => false,
    hotkeyWindowLifecycleManager,
    isTrustedIpcEvent,
    isValidAppRoute: (path) =>
      path.startsWith("/") || path.startsWith("https://claude.ai/"),
    logger: desktopLogger,
    navigateToRoute: (_window, path) => {
      const url = path.startsWith("https://claude.ai/")
        ? path
        : `https://claude.ai${path}`;
      if (!mainContentWebContents.isDestroyed()) {
        void mainContentWebContents.loadURL(url);
      }
    },
    restoreAvatarOverlayOpenState: async () => {},
    sendMessageToWindow: () => {},
    setAutomaticBackgroundDownloadsEnabled: (enabled) => {
      updateManager.setAutomaticBackgroundDownloadsEnabled(enabled);
    },
    setAvatarOverlayFeedbackDiagnosticsEnabled: () => {},
    setDesktopFeatureAvailability: () => {},
    setInternalUpdateCdnEnabled: async () => {},
    setMacMenuBarEnabled: async () => {},
    showPrimaryWindow: () => {
      const window = getPrimaryWindow();
      if (window != null) showAndFocusWindow(window);
    },
  });

  const disposeAppHostIpc = registerAppHostConnectionIpc({
    createRemoteMain: () => ({}),
    getContextForWebContents: getAppHostContextForWebContents,
    isTrustedIpcEvent,
    logger: desktopLogger,
  });

  // Register the channel name so the preload bridge can observe it.
  ipcMain.on(CONNECT_APP_HOST_CHANNEL, () => {});

  return () => {
    disposeViewMessageIpc();
    disposeAppHostIpc();
  };
}

export function bootstrapApp() {
  configureAppIdentity();

  const runtime = getDesktopRuntimeState();
  const paths = createDesktopRuntimePaths({ moduleDir: __dirname });

  let currentMainContentWebContents: Electron.WebContents | null = null;

  const deepLinkCoordinator = createDeepLinkCoordinator({
    app,
    ensurePrimaryWindowVisible: async () => {
      const existing = BrowserWindow.getAllWindows().find(
        (window) => !window.isDestroyed(),
      );
      if (existing) {
        if (existing.isMinimized()) existing.restore();
        existing.focus();
        return existing;
      }
      return createMainWindow({
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
      }).window;
    },
    errorReporter: {
      reportNonFatal: (error, context) => {
        desktopLogger.error("[DeepLink] non-fatal error", {
          error: error instanceof Error ? error.message : String(error),
          context,
        });
      },
    },
    initialArgv: process.argv,
    isMacOS: process.platform === "darwin",
    navigateToRoute: async (_window, route: DeepLinkRoute) => {
      if (
        !currentMainContentWebContents ||
        currentMainContentWebContents.isDestroyed()
      ) {
        return;
      }
      switch (route.kind) {
        case "newThread": {
          const target = route.path ?? "/";
          const url = target.startsWith("https://")
            ? target
            : `https://claude.ai${target.startsWith("/") ? target : `/${target}`}`;
          await currentMainContentWebContents.loadURL(url);
          break;
        }
        case "localConversation": {
          await currentMainContentWebContents.loadURL(
            `https://claude.ai/chat/${route.conversationId}`,
          );
          break;
        }
        default:
          desktopLogger.info("[DeepLink] route not yet routed", {
            kind: route.kind,
          });
      }
    },
  });

  runtime.setSecondInstanceArgsHandler?.((argv) => {
    desktopLogger.info("Second instance requested activation");
    if (deepLinkCoordinator.queueProcessArgs(argv)) {
      desktopLogger.info("[DeepLink] queued second-instance args", { argv });
    }
    focusExistingMainWindow();
  });

  const quitState = createQuitStateController();
  const applicationMenuService = createApplicationMenuService();
  const localConversationActivityTracker =
    createLocalConversationActivityTracker();
  const automationStateTracker = createAutomationStateTracker();

  const quickWindowRef: { getWindow: () => BrowserWindow | null } = {
    getWindow: () => null,
  };
  const hotkeyWindowLifecycleManager =
    createHotkeyWindowLifecycleManager(quickWindowRef);
  const globalDictationLifecycleManager =
    createGlobalDictationLifecycleManager();

  const lifecycleService = new LifecycleService({
    appName: APP_NAME,
    quitState,
    applicationMenuManager: applicationMenuService,
    localConversationActivityTracker,
    automationStateTracker,
    getHasInProgressLocalConversation: () =>
      localConversationActivityTracker.getHasInProgressLocalConversation(),
    getHasEnabledAutomations: () =>
      automationStateTracker.getHasEnabledAutomations(),
    globalDictationLifecycleManager,
    hotkeyWindowLifecycleManager,
    globalState: paths.globalState,
    settingsStore: paths.settingsStore,
    createMainWindow: () =>
      createMainWindow({
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
      }).window,
  });
  lifecycleService.listen();

  let computerUseConfigSync: ComputerUseConfigSyncService | null = null;
  let quickWindowShortcutService: QuickWindowShortcutService | null = null;
  const desktopIntlService = new DesktopIntlService({
    onLocaleChanged(locale) {
      computerUseConfigSync?.requestWrite();
    },
  });
  desktopIntlService.listen();

  computerUseConfigSync = createComputerUseConfigSync({
    codexHome: paths.codexHome,
    repoRoot: paths.repoRoot,
    settingsStore: paths.settingsStore,
    getAppLocale: () => desktopIntlService.getLocale(),
  });

  const isMacOS = process.platform === "darwin";
  const shouldRequestSingleInstanceLock = shouldUseSingleInstanceLock({
    isMacOS,
    isPackaged: app.isPackaged,
  });

  if (shouldRequestSingleInstanceLock && !app.requestSingleInstanceLock()) {
    desktopLogger.info("Exiting second desktop instance", {
      safe: { packaged: app.isPackaged, platform: process.platform },
    });
    app.exit(0);
    return;
  }

  const { findInPageService, buddyService } = createAppServices();

  let findInPageWindow: BrowserWindow | null = null;
  let buddyWindow: BrowserWindow | null = null;

  function openFindInPageWindow(): void {
    if (findInPageWindow && !findInPageWindow.isDestroyed()) {
      showAndFocusWindow(findInPageWindow);
      findInPageService.focusInput();
      return;
    }
    const window = createClaudeWindow({
      kind: "find-in-page",
      preloadScriptPath: paths.preloadPath,
      rendererUrl: getRendererUrl(),
      findInPageService,
      buddyService,
    });
    findInPageWindow = window;
    window.on("closed", () => {
      findInPageWindow = null;
    });
    findInPageService.focusInput();
  }

  function openBuddyWindow(): void {
    if (buddyWindow && !buddyWindow.isDestroyed()) {
      showAndFocusWindow(buddyWindow);
      return;
    }
    const window = createClaudeWindow({
      kind: "buddy",
      preloadScriptPath: paths.preloadPath,
      rendererUrl: getRendererUrl(),
      findInPageService,
      buddyService,
    });
    buddyWindow = window;
    window.on("closed", () => {
      buddyWindow = null;
    });
  }

  if (shouldRequestSingleInstanceLock) {
    app.on("second-instance", (_event, argv) => {
      runtime.queueSecondInstanceArgs(argv);
    });
  }

  app.once("before-quit", () => {
    computerUseConfigSync?.stop();
    quickWindowShortcutService?.unregister();
  });

  app.whenReady().then(async () => {
    computerUseConfigSync?.start();
    applicationMenuService.setMenu({
      onFindInPage: openFindInPageWindow,
      onOpenBuddy: openBuddyWindow,
    });

    registerShowApplicationMenuIpc(() => true);
    registerShowContextMenuIpc([], () => true);

    const appBrand =
      parseRuntimeAppBrand(process.env.CLAUDE_APP_BRAND) ??
      RuntimeAppBrands.Codex;
    const trayIcons = await loadDesktopTrayIcons(
      runtime.buildFlavor,
      appBrand,
      paths.repoRoot,
    );
    const tray = new Tray(trayIcons.defaultIcon);
    tray.setToolTip(APP_NAME);

    const createMainWindowOnce = () =>
      createMainWindow({
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
      }).window;

    const trayController = new DesktopTrayController(
      tray,
      () => focusOrCreateMainWindow(createMainWindowOnce),
      () => focusOrCreateMainWindow(createMainWindowOnce),
      () => {
        if (!deepLinkCoordinator.queueCodexDeepLinkUrl("codex://threads/new")) {
          focusOrCreateMainWindow(createMainWindowOnce);
        }
      },
      (path) => {
        if (!deepLinkCoordinator.queueCodexDeepLinkUrl(path)) {
          focusOrCreateMainWindow(createMainWindowOnce);
        }
      },
      null,
      null,
      trayIcons,
      {
        formatMessage({ defaultMessage }) {
          return defaultMessage;
        },
      },
      APP_NAME,
    );

    const titleBarService = new TitleBarService();

    const {
      window: mainWindow,
      mainContentWebContents,
      isMainContentHealthy,
      overlayWebContents,
      reloadMainView,
      setOverlayActive,
    } = createMainWindow({
      preloadScriptPath: paths.preloadPath,
      rendererUrl: getRendererUrl(),
    });

    findInPageService.attachTarget(mainContentWebContents);
    currentMainContentWebContents = mainContentWebContents;

    deepLinkCoordinator.registerProtocolClient();
    void deepLinkCoordinator.flushPendingDeepLinks();

    titleBarService.attachWindow(mainWindow);
    titleBarService.setTitle(APP_NAME);

    const updateManager = runtime.sparkleManager;
    runtime.setSparkleBridgeHandlers?.({
      isTrustedIpcEvent: (event) =>
        event.sender === mainContentWebContents ||
        event.sender === overlayWebContents,
    });
    void updateManager.initialize();

    const disposeDesktopIpc = registerDesktopIpcHandlers({
      mainContentWebContents,
      mainWindow,
      overlayWebContents,
      updateManager,
      globalDictationLifecycleManager,
      hotkeyWindowLifecycleManager,
      trayController,
    });
    app.once("before-quit", disposeDesktopIpc);

    ipcMain.on(mainWindowIpcChannels.titleBarReady, () => {
      titleBarService.markReady();
    });

    ipcMain.handle(mainWindowIpcChannels.isClaudeCurrentlyHealthy, () =>
      isMainContentHealthy(),
    );

    ipcMain.on(mainWindowIpcChannels.requestReloadMainView, () => {
      reloadMainView();
    });

    ipcMain.handle(mainWindowIpcChannels.requestMainMenuPopup, (event) => {
      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      const applicationMenu = Menu.getApplicationMenu();
      if (applicationMenu == null || ownerWindow == null) return;
      return new Promise<void>((resolve) => {
        applicationMenu.popup({
          window: ownerWindow,
          x: 0,
          y: 0,
          callback: resolve,
        });
      });
    });

    titleBarService.subscribe((state) => {
      if (overlayWebContents.isDestroyed()) return;

      overlayWebContents.send(
        mainWindowIpcChannels.subscribeTitle,
        state.title,
      );

      if (state.loadError) {
        overlayWebContents.send(
          mainWindowIpcChannels.subscribeLoadError,
          state.loadError,
        );
      } else {
        overlayWebContents.send(mainWindowIpcChannels.subscribeHideLoadError);
      }
    });

    let quickWindow: BrowserWindow | null = null;

    const createQuickWindow = () => {
      const window = createClaudeWindow({
        kind: "quick",
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
        findInPageService,
        buddyService,
      });
      quickWindow = window;
      quickWindowRef.getWindow = () => window;
      window.on("closed", () => {
        quickWindow = null;
        quickWindowRef.getWindow = () => null;
      });
      return window;
    };

    quickWindowShortcutService = createQuickWindowShortcutService({
      createQuickWindow,
      getQuickWindow: () => quickWindow,
    });
    quickWindowShortcutService.register();

    ipcMain.on(
      windowIpcChannels.openClaudeWindow,
      (_event, kind: ClaudeWindowKind) => {
        if (kind === "main") {
          return;
        }
        if (kind === "quick") {
          if (quickWindow && !quickWindow.isDestroyed()) {
            showAndFocusWindow(quickWindow);
            return;
          }
          createQuickWindow();
          return;
        }
        if (kind === "buddy") {
          openBuddyWindow();
          return;
        }
        createClaudeWindow({
          kind,
          preloadScriptPath: paths.preloadPath,
          rendererUrl: getRendererUrl(),
          findInPageService,
          buddyService,
        });
      },
    );

    ipcMain.handle(
      quickWindowIpcChannels.requestSkooch,
      (_event, width: number, height: number) => {
        if (quickWindow == null || quickWindow.isDestroyed()) return;
        quickWindow.setSize(width, height, true);
      },
    );

    ipcMain.handle(
      quickWindowIpcChannels.requestDismiss,
      (_event, prompt: string | null) => {
        if (prompt != null && prompt.length > 0) {
          const mainWindow = BrowserWindow.getAllWindows().find(
            (window) =>
              window.webContents.getURL().includes("index.html") ||
              window.title === APP_NAME,
          );
          if (mainWindow != null && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send(
              quickWindowIpcChannels.dismissedWithPrompt,
              prompt,
            );
          }
        }
        if (quickWindow != null && !quickWindow.isDestroyed()) {
          quickWindow.close();
        }
        quickWindow = null;
      },
    );

    ipcMain.handle(aboutWindowIpcChannels.getAppName, () => getAppName());
    ipcMain.handle(aboutWindowIpcChannels.getBuildProps, () => getBuildProps());
    ipcMain.handle(aboutWindowIpcChannels.openHelp, () => openHelp());
    ipcMain.handle(aboutWindowIpcChannels.getSupport, () => getSupport());

    ipcMain.on(overlayIpcChannels.overlayShown, () => {
      setOverlayActive(true);
    });

    ipcMain.on(overlayIpcChannels.overlayHidden, () => {
      setOverlayActive(false);
    });

    // Global shortcuts/menu items can ask the find bar to focus or blur.
    ipcMain.on(findInPageIpcChannels.focusInput, () => {
      findInPageService.focusInput();
    });

    ipcMain.on(findInPageIpcChannels.blurInput, () => {
      findInPageService.blurInput();
    });
  });
}
