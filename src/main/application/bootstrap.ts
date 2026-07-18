// Restored from ref/.vite/build/index.pre.js
// Application: bootstrap the Electron app and create the main window.

import { app, BrowserWindow, ipcMain, Menu, session, Tray } from "electron";
import {
  aboutWindowIpcChannels,
  findInPageIpcChannels,
  mainWindowIpcChannels,
  overlayIpcChannels,
  quickWindowIpcChannels,
  windowIpcChannels,
} from "../../shared/contracts/preload-api";
import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { RuntimeAppBrands, parseRuntimeAppBrand } from "../domain/app-brand";
import type { DeepLinkRoute } from "../infrastructure/desktop-runtime-types";
import { createClaudeWindow } from "../infrastructure/window-factory";
import { createMainWindow } from "../infrastructure/main-window";
import { shouldUseSingleInstanceLock } from "../infrastructure/desktop-process-utils";
import { updateClaudeProtocolClient } from "../infrastructure/desktop-early-startup";
import { readThirdPartyConfiguration } from "../infrastructure/claude-user-data";
import { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";
import { focusOrCreateMainWindow } from "../infrastructure/tray-controller";
import { DesktopTrayController } from "../infrastructure/desktop-tray-controller";
import { loadDesktopTrayIcons } from "../infrastructure/tray-icons";
import { TitleBarService } from "./title-bar-service";
import { FindInPageService } from "./find-in-page-service";
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
  CONNECT_APP_HOST_CHANNEL,
  registerAppHostConnectionIpc,
} from "./app-host-connection-ipc";
import { createDeepLinkCoordinator } from "./deep-link-coordinator";
import {
  createDesktopRuntimePaths,
  getDesktopRuntimeState,
} from "../infrastructure/desktop-runtime-state";
import type { DesktopUpdateManager } from "../infrastructure/desktop-runtime-types";
import {
  broadcastCurrentLocaleChanged,
  registerCurrentWindowIpc,
} from "../interfaces/current-window-ipc";
import { registerCurrentMainViewIpc } from "../interfaces/current-main-view-ipc";
import { registerCurrentFilePickerIpc } from "../interfaces/current-file-picker-ipc";
import { registerCurrentStartupIpc } from "../interfaces/current-startup-ipc";
import { registerCurrentOfficeAddinIpc } from "../interfaces/current-office-addin-ipc";
import { registerCurrentAppConfigIpc } from "../interfaces/current-app-config-ipc";
import { registerCurrentAppPreferencesIpc } from "../interfaces/current-app-preferences-ipc";
import { registerCurrentCustom3pHelperIpc } from "../interfaces/current-custom-3p-helper-ipc";
import { registerCurrentLocalSessionEnvironmentIpc } from "../interfaces/current-local-session-environment-ipc";
import { SkillFilePreviewService } from "./skill-file-preview-service";
import { BuddyRemoteFeedService } from "./buddy-remote-feed-service";
import { BuddyWindowLifecycleService } from "./buddy-window-lifecycle-service";
import { ChromeExtensionService } from "../infrastructure/chrome-extension-service";
import { DesktopNotificationService } from "../infrastructure/desktop-notification-service";
import { CoworkMemoryService } from "../infrastructure/cowork-memory-service";
import { GlobalShortcutService } from "./global-shortcut-service";
import { registerCurrentGlobalShortcutIpc } from "../interfaces/current-global-shortcut-ipc";
import { ClaudeLogExportService } from "../infrastructure/claude-log-export-service";
import { registerCurrentDesktopInfoIpc } from "../interfaces/current-desktop-info-ipc";
import { registerCurrentWakeSchedulerIpc } from "../interfaces/current-wake-scheduler-ipc";
import { ResourceMentionService } from "./resource-mention-service";
import { CoworkUserFilesService } from "../infrastructure/cowork-user-files-service";
import { McpSettingsService } from "../infrastructure/mcp-settings-service";
import { registerCurrentMcpSettingsIpc } from "../interfaces/current-mcp-settings-ipc";
import { AppFeaturesService } from "./app-features-service";
import { registerCurrentAppFeaturesIpc } from "../interfaces/current-app-features-ipc";
import { SupportBundleService } from "./support-bundle-service";
import { registerCurrentSupportBundleIpc } from "../interfaces/current-support-bundle-ipc";
import { AgentModeFeedbackService } from "./agent-mode-feedback-service";
import { registerCurrentAgentModeFeedbackIpc } from "../interfaces/current-agent-mode-feedback-ipc";
import { registerCurrentCoreCapabilityIpc } from "./register-current-core-capability-ipc";
import { CoworkFeedbackService } from "./cowork-feedback-service";
import { registerCurrentCoworkFeedbackIpc } from "../interfaces/current-cowork-feedback-ipc";
import { configureClaudeAppIdentity } from "./app-identity-service";
import {
  resolveModuleDirectory,
  resolveRendererUrl,
} from "../infrastructure/renderer-entry";

const __dirname = resolveModuleDirectory(import.meta.url);

const APP_NAME = "Claude";
function getRendererUrl(): string {
  return resolveRendererUrl(__dirname);
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
  findInPageService.listen();
  return { findInPageService };
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
  getTrayController,
}: {
  mainContentWebContents: Electron.WebContents;
  mainWindow: BrowserWindow;
  overlayWebContents: Electron.WebContents;
  updateManager: DesktopUpdateManager;
  globalDictationLifecycleManager: GlobalDictationLifecycleManager;
  hotkeyWindowLifecycleManager: { hide(): void };
  getTrayController: () => DesktopTrayController | null;
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
    getTrayController,
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
  configureClaudeAppIdentity(app);

  const runtime = getDesktopRuntimeState();
  const paths = createDesktopRuntimePaths({ moduleDir: __dirname });

  let currentMainContentWebContents: Electron.WebContents | null = null;
  const skillFilePreviewService = new SkillFilePreviewService(app);
  skillFilePreviewService.listen(process.argv);
  const buddyRemoteFeedService = new BuddyRemoteFeedService();
  const resourceMentionService = new ResourceMentionService();
  let resourcesFindClaimed = false;

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
        case "navigate": {
          currentMainContentWebContents.send(
            currentClaudeIpcChannel("claude.web", "Navigation", "navigate"),
            route.path,
          );
          break;
        }
        case "handleDeepLink": {
          currentMainContentWebContents.send(
            currentClaudeIpcChannel("claude.web", "DeepLink", "handleDeepLink"),
            route.url,
          );
          break;
        }
        case "googleAuth": {
          if (route.anonymousId) {
            await currentMainContentWebContents.session.cookies.set({
              url: "https://claude.ai",
              name: "_cross_domain_anonymous_id",
              value: route.anonymousId,
              path: "/",
              httpOnly: false,
              secure: true,
              sameSite: "lax",
              expirationDate:
                Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60,
            });
          }
          currentMainContentWebContents.send("googleAuthCode", {
            code: route.code,
          });
          break;
        }
        case "authenticatedNavigation": {
          const target = new URL(route.path, "https://claude.ai");
          if (route.removeAnonymousIdFromQuery) {
            target.searchParams.delete("anon_id");
          }
          if (route.anonymousId) {
            await currentMainContentWebContents.session.cookies.set({
              url: "https://claude.ai",
              name: "_cross_domain_anonymous_id",
              value: route.anonymousId,
              path: "/",
              httpOnly: false,
              secure: true,
              sameSite: "lax",
              expirationDate:
                Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60,
            });
          }
          await currentMainContentWebContents
            .loadURL(target.toString())
            .catch((error) => {
              if (
                !(error instanceof Error) ||
                !("code" in error) ||
                error.code !== "ERR_ABORTED"
              ) {
                throw error;
              }
            });
          break;
        }
      }
    },
  });

  runtime.setSecondInstanceArgsHandler?.((argv) => {
    desktopLogger.info("Second instance requested activation");
    if (deepLinkCoordinator.queueProcessArgs(argv)) {
      desktopLogger.info("[DeepLink] queued second-instance args", { argv });
    }
    skillFilePreviewService.handleArgv(argv);
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
  let supportBundleService: SupportBundleService | null = null;
  const desktopIntlService = new DesktopIntlService({
    onLocaleChanged(locale) {
      computerUseConfigSync?.requestWrite();
      broadcastCurrentLocaleChanged(
        locale,
        desktopIntlService.getInitialLocale().messages,
      );
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

  const { findInPageService } = createAppServices();

  let findInPageWindow: BrowserWindow | null = null;

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
    });
    findInPageWindow = window;
    window.on("closed", () => {
      findInPageWindow = null;
    });
    findInPageService.focusInput();
  }

  if (shouldRequestSingleInstanceLock) {
    app.on("second-instance", (_event, argv) => {
      runtime.queueSecondInstanceArgs(argv);
    });
  }

  const beforeQuitDisposers: Array<() => void> = [
    () => computerUseConfigSync?.stop(),
    () => skillFilePreviewService.dispose(),
    () => findInPageService.dispose(),
  ];
  app.once("before-quit", () => {
    for (const dispose of beforeQuitDisposers.splice(0).reverse()) {
      try {
        dispose();
      } catch (error) {
        desktopLogger.error("Failed to dispose desktop service", { error });
      }
    }
  });

  app.whenReady().then(async () => {
    computerUseConfigSync?.start();
    applicationMenuService.setMenu({
      onFindInPage: () => {
        if (
          resourcesFindClaimed &&
          currentMainContentWebContents &&
          !currentMainContentWebContents.isDestroyed()
        ) {
          currentMainContentWebContents.send(
            currentClaudeIpcChannel("claude.web", "Resources", "findRequested"),
          );
          return;
        }
        openFindInPageWindow();
      },
      onFindStep: (forward) => {
        if (
          resourcesFindClaimed &&
          currentMainContentWebContents &&
          !currentMainContentWebContents.isDestroyed()
        ) {
          currentMainContentWebContents.send(
            currentClaudeIpcChannel(
              "claude.web",
              "Resources",
              "findStepRequested",
            ),
            forward,
          );
        }
      },
      onGenerateDiagnosticReport: () => {
        void supportBundleService?.generate();
      },
    });

    registerShowApplicationMenuIpc(() => true);
    registerShowContextMenuIpc([], () => true);

    const appBrand =
      parseRuntimeAppBrand(process.env.CLAUDE_APP_BRAND) ??
      RuntimeAppBrands.Claude;
    const trayIcons = await loadDesktopTrayIcons(
      runtime.buildFlavor,
      appBrand,
      paths.repoRoot,
    );
    const createMainWindowOnce = () =>
      createMainWindow({
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
      }).window;

    let trayController: DesktopTrayController | null = null;
    const setMenuBarEnabled = (enabled: boolean): void => {
      if (!enabled) {
        trayController?.destroy();
        trayController = null;
        return;
      }
      if (trayController != null) return;
      const tray = new Tray(trayIcons.defaultIcon);
      tray.setToolTip(APP_NAME);
      trayController = new DesktopTrayController(
        tray,
        () => focusOrCreateMainWindow(createMainWindowOnce),
        () => focusOrCreateMainWindow(createMainWindowOnce),
        () => {
          if (
            !deepLinkCoordinator.queueClaudeDeepLinkUrl("claude://cowork/new")
          ) {
            focusOrCreateMainWindow(createMainWindowOnce);
          }
        },
        (path) => {
          if (!deepLinkCoordinator.queueClaudeDeepLinkUrl(path)) {
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
    };
    const claudeAppConfiguration = new ClaudeAppConfigurationRepository(app);
    setMenuBarEnabled(await claudeAppConfiguration.getMenuBarEnabled());

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
    skillFilePreviewService.attachMainView(mainContentWebContents);

    deepLinkCoordinator.registerProtocolClient();
    updateClaudeProtocolClient(
      readThirdPartyConfiguration(app)?.authentication?.disableDeepLinks ===
        true,
    );
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
    const coworkUserFilesService = new CoworkUserFilesService(
      app,
      claudeAppConfiguration,
      () => false,
    );
    const disposeCurrentCoreCapabilityIpc = registerCurrentCoreCapabilityIpc({
      app,
      updateManager,
      coworkUserFilesService,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentCoreCapabilityIpc);

    const disposeDesktopIpc = registerDesktopIpcHandlers({
      mainContentWebContents,
      mainWindow,
      overlayWebContents,
      updateManager,
      globalDictationLifecycleManager,
      hotkeyWindowLifecycleManager,
      getTrayController: () => trayController,
    });
    beforeQuitDisposers.push(disposeDesktopIpc);
    const disposeCurrentMainViewIpc = registerCurrentMainViewIpc({
      mainView: mainContentWebContents,
      mainWindow,
      chromeExtensionService: new ChromeExtensionService(),
      desktopNotificationService: new DesktopNotificationService(),
      coworkMemoryService: new CoworkMemoryService(app, session.defaultSession),
      resourceMentionService,
      coworkUserFilesService,
      onResourcesFindClaimedChange: (claimed) => {
        resourcesFindClaimed = claimed;
        if (claimed && findInPageWindow && !findInPageWindow.isDestroyed()) {
          findInPageWindow.hide();
        }
      },
    });
    beforeQuitDisposers.push(disposeCurrentMainViewIpc);
    const disposeCurrentFilePickerIpc = registerCurrentFilePickerIpc({
      mainWindow,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentFilePickerIpc);
    const disposeCurrentStartupIpc = registerCurrentStartupIpc({
      app,
      configuration: claudeAppConfiguration,
      onMenuBarEnabledChange: setMenuBarEnabled,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentStartupIpc);
    const disposeCurrentAppConfigIpc = registerCurrentAppConfigIpc({
      configuration: claudeAppConfiguration,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentAppConfigIpc);
    const disposeCurrentAppPreferencesIpc = registerCurrentAppPreferencesIpc({
      configuration: claudeAppConfiguration,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentAppPreferencesIpc);
    const disposeCurrentAppFeaturesIpc = registerCurrentAppFeaturesIpc({
      service: new AppFeaturesService(app, claudeAppConfiguration),
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentAppFeaturesIpc);
    const logExportService = new ClaudeLogExportService(app);
    const disposeCurrentCoworkFeedbackIpc = registerCurrentCoworkFeedbackIpc({
      service: new CoworkFeedbackService(
        app,
        mainWindow,
        mainContentWebContents,
        logExportService,
      ),
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentCoworkFeedbackIpc);
    const disposeCurrentDesktopInfoIpc = registerCurrentDesktopInfoIpc({
      service: logExportService,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentDesktopInfoIpc);
    supportBundleService = new SupportBundleService(
      app,
      mainWindow,
      logExportService,
    );
    const disposeCurrentSupportBundleIpc = registerCurrentSupportBundleIpc({
      service: supportBundleService,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentSupportBundleIpc);
    const disposeCurrentAgentModeFeedbackIpc =
      registerCurrentAgentModeFeedbackIpc({
        service: new AgentModeFeedbackService(
          app,
          mainWindow,
          logExportService,
        ),
        trustedWebContents: new Set([
          mainContentWebContents,
          overlayWebContents,
        ]),
      });
    beforeQuitDisposers.push(disposeCurrentAgentModeFeedbackIpc);
    const disposeCurrentWakeSchedulerIpc = registerCurrentWakeSchedulerIpc(
      new Set([mainContentWebContents, overlayWebContents]),
    );
    beforeQuitDisposers.push(disposeCurrentWakeSchedulerIpc);
    const disposeCurrentMcpSettingsIpc = registerCurrentMcpSettingsIpc({
      service: new McpSettingsService(app, claudeAppConfiguration),
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentMcpSettingsIpc);
    const disposeCurrentCustom3pHelperIpc = registerCurrentCustom3pHelperIpc(
      mainContentWebContents,
    );
    beforeQuitDisposers.push(disposeCurrentCustom3pHelperIpc);
    const disposeCurrentOfficeAddinIpc = registerCurrentOfficeAddinIpc(
      mainContentWebContents,
    );
    beforeQuitDisposers.push(disposeCurrentOfficeAddinIpc);
    const disposeCurrentLocalSessionEnvironmentIpc =
      registerCurrentLocalSessionEnvironmentIpc(mainContentWebContents);
    beforeQuitDisposers.push(disposeCurrentLocalSessionEnvironmentIpc);
    const disposeBuddyRemoteFeed = buddyRemoteFeedService.register(
      mainContentWebContents,
    );
    beforeQuitDisposers.push(disposeBuddyRemoteFeed);
    const buddyWindowService = new BuddyWindowLifecycleService(
      app,
      mainContentWebContents,
      buddyRemoteFeedService,
      paths.preloadPath,
      getRendererUrl(),
    );
    beforeQuitDisposers.push(() => buddyWindowService.dispose());

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
      return showMainMenu(ownerWindow);
    });

    titleBarService.subscribe((state) => {
      if (overlayWebContents.isDestroyed()) return;

      overlayWebContents.send(
        mainWindowIpcChannels.subscribeTitle,
        state.title,
      );
      overlayWebContents.send(
        currentClaudeIpcChannel(
          "claude.internal.ui",
          "MainWindowTitleBar",
          "updateTitleBar",
        ),
        state.title,
      );

      if (state.loadError) {
        overlayWebContents.send(
          mainWindowIpcChannels.subscribeLoadError,
          state.loadError,
        );
        overlayWebContents.send(
          currentClaudeIpcChannel(
            "claude.internal.ui",
            "MainWindowTitleBar",
            "showLoadError",
          ),
          state.loadError,
        );
      } else {
        overlayWebContents.send(mainWindowIpcChannels.subscribeHideLoadError);
        overlayWebContents.send(
          currentClaudeIpcChannel(
            "claude.internal.ui",
            "MainWindowTitleBar",
            "hideLoadError",
          ),
        );
      }
    });

    let quickWindow: BrowserWindow | null = null;

    const createQuickWindow = () => {
      const window = createClaudeWindow({
        kind: "quick",
        preloadScriptPath: paths.preloadPath,
        rendererUrl: getRendererUrl(),
        findInPageService,
      });
      quickWindow = window;
      quickWindowRef.getWindow = () => window;
      window.on("closed", () => {
        quickWindow = null;
        quickWindowRef.getWindow = () => null;
      });
      return window;
    };

    const toggleQuickWindow = (): void => {
      if (quickWindow != null && !quickWindow.isDestroyed()) {
        if (quickWindow.isVisible()) {
          quickWindow.hide();
        } else {
          showAndFocusWindow(quickWindow);
        }
        return;
      }
      showAndFocusWindow(createQuickWindow());
    };
    const globalShortcutService = new GlobalShortcutService(
      claudeAppConfiguration,
      toggleQuickWindow,
    );
    await globalShortcutService.initialize();
    const disposeCurrentGlobalShortcutIpc = registerCurrentGlobalShortcutIpc({
      service: globalShortcutService,
      trustedWebContents: new Set([mainContentWebContents, overlayWebContents]),
    });
    beforeQuitDisposers.push(disposeCurrentGlobalShortcutIpc);

    const requestQuickWindowSkooch = (width: number, height: number): void => {
      if (quickWindow == null || quickWindow.isDestroyed()) return;
      quickWindow.setSize(width, height, true);
    };

    const requestQuickWindowDismiss = (prompt: string | null): void => {
      if (prompt != null && prompt.length > 0) {
        const targetWindow = BrowserWindow.getAllWindows().find(
          (window) =>
            window.webContents.getURL().includes("index.html") ||
            window.title === APP_NAME,
        );
        if (targetWindow != null && !targetWindow.isDestroyed()) {
          targetWindow.webContents.send(
            quickWindowIpcChannels.dismissedWithPrompt,
            prompt,
          );
        }
      }
      if (quickWindow != null && !quickWindow.isDestroyed()) {
        quickWindow.close();
      }
      quickWindow = null;
    };

    function showMainMenu(
      ownerWindow: BrowserWindow | null,
    ): Promise<void> | void {
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
    }

    const disposeCurrentWindowIpc = registerCurrentWindowIpc({
      getAppName,
      getBuildProps,
      getInitialLocale: () => desktopIntlService.getInitialLocale(),
      getSupport,
      isClaudeCurrentlyHealthy: () => isMainContentHealthy(),
      openHelp,
      requestDismiss: requestQuickWindowDismiss,
      requestDismissWithPayload: (payload) =>
        requestQuickWindowDismiss(
          typeof payload === "object" &&
            payload != null &&
            "prompt" in payload &&
            typeof payload.prompt === "string"
            ? payload.prompt
            : null,
        ),
      requestLocaleChange: (locale) => desktopIntlService.setLocale(locale),
      requestMainMenuPopup: showMainMenu,
      requestReloadMainView: reloadMainView,
      requestSkooch: requestQuickWindowSkooch,
      titleBarReady: () => titleBarService.markReady(),
    });
    beforeQuitDisposers.push(disposeCurrentWindowIpc);

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
          buddyWindowService.open();
          return;
        }
        createClaudeWindow({
          kind,
          preloadScriptPath: paths.preloadPath,
          rendererUrl: getRendererUrl(),
          findInPageService,
        });
      },
    );

    ipcMain.handle(
      quickWindowIpcChannels.requestSkooch,
      (_event, width: number, height: number) => {
        requestQuickWindowSkooch(width, height);
      },
    );

    ipcMain.handle(
      quickWindowIpcChannels.requestDismiss,
      (_event, prompt: string | null) => {
        requestQuickWindowDismiss(prompt);
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
