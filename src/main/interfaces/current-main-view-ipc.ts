// Restored from ref/.vite/build/index.js

import {
  BrowserWindow,
  ipcMain,
  Menu,
  nativeTheme,
  screen,
  shell,
  type WebContents,
} from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { desktopLogger } from "../application/desktop-logger";
import type { ChromeExtensionService } from "../infrastructure/chrome-extension-service";
import type { DesktopNotificationService } from "../infrastructure/desktop-notification-service";
import type { CoworkMemoryService } from "../infrastructure/cowork-memory-service";
import type { ResourceMentionService } from "../application/resource-mention-service";
import type { CoworkUserFilesService } from "../infrastructure/cowork-user-files-service";
import {
  resetClaudeAccountDetails,
  setClaudeAccountDetails,
} from "../domain/account-details";

const webChannel = (contract: string, method: string): string =>
  currentClaudeIpcChannel("claude.web", contract, method);
const simulatorChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.simulator", "Simulator", method);

const MAX_SCREENSHOT_WIDTH = 1280;

export function registerCurrentMainViewIpc({
  mainView,
  mainWindow,
  chromeExtensionService,
  desktopNotificationService,
  coworkMemoryService,
  resourceMentionService,
  onResourcesFindClaimedChange,
  coworkUserFilesService,
}: {
  mainView: WebContents;
  mainWindow: BrowserWindow;
  chromeExtensionService: ChromeExtensionService;
  desktopNotificationService: DesktopNotificationService;
  coworkMemoryService: CoworkMemoryService;
  resourceMentionService: ResourceMentionService;
  onResourcesFindClaimedChange(claimed: boolean): void;
  coworkUserFilesService: CoworkUserFilesService;
}): () => void {
  let modalScrimActive = false;
  let modalScrimBackdrop: unknown = null;
  let navigationState = {
    canGoBack: mainView.navigationHistory.canGoBack(),
    canGoForward: mainView.navigationHistory.canGoForward(),
  };
  let recentChats: Array<{ chatId: string; chatName: string }> = [];
  let activeChatId: string | null = null;
  const channels: string[] = [];

  function handle(
    contract: string,
    method: string,
    handler: (...args: unknown[]) => unknown,
  ): void {
    const channel = webChannel(contract, method);
    channels.push(channel);
    ipcMain.handle(channel, (event, ...args: unknown[]) => {
      if (event.sender !== mainView) {
        throw new Error(
          `Rejected ${contract}.${method} from an untrusted view`,
        );
      }
      return handler(...args);
    });
  }

  function handleSimulator(
    method: string,
    handler: (...args: unknown[]) => unknown,
  ): void {
    const channel = simulatorChannel(method);
    channels.push(channel);
    ipcMain.handle(channel, (event, ...args: unknown[]) => {
      if (event.sender !== mainView) {
        throw new Error(`Rejected Simulator.${method} from an untrusted view`);
      }
      return handler(...args);
    });
  }

  handle("WebBuild", "reportCommitHash", (value) => {
    if (typeof value !== "string" || !/^[\w.-]+$/.test(value)) return;
    let origin = "[unknown]";
    try {
      const url = new URL(mainView.getURL());
      origin = `${url.protocol}//${url.host}`;
    } catch {}
    desktopLogger.info(
      `Loaded ${origin} (web commit ${value}, desktop commit ${process.env.CLAUDE_DESKTOP_COMMIT ?? "unknown"})`,
    );
  });
  handle("Account", "setAccountDetails", (details) => {
    setClaudeAccountDetails(details);
  });
  const resetAccountOnNavigation = (event: Electron.Event): void => {
    const navigation = event as Electron.Event & {
      isMainFrame?: boolean;
      isSameDocument?: boolean;
    };
    if (navigation.isMainFrame && !navigation.isSameDocument) {
      resetClaudeAccountDetails();
    }
  };
  mainView.on("did-start-navigation", resetAccountOnNavigation);
  const toggleSidebarShortcut = (
    event: Electron.Event,
    input: Electron.Input,
  ): void => {
    if (
      input.type !== "keyDown" ||
      input.isAutoRepeat ||
      input.shift ||
      input.alt ||
      !(process.platform === "darwin" ? input.meta : input.control) ||
      input.key.toLowerCase() !== "b"
    ) {
      return;
    }
    event.preventDefault();
    if (!mainView.isDestroyed()) {
      mainView.send(webChannel("MenuEvents", "toggleSidebar"));
    }
  };
  mainView.on("before-input-event", toggleSidebarShortcut);

  const isNavigationState = (
    value: unknown,
  ): value is { canGoBack: boolean; canGoForward: boolean } =>
    typeof value === "object" &&
    value != null &&
    "canGoBack" in value &&
    typeof value.canGoBack === "boolean" &&
    "canGoForward" in value &&
    typeof value.canGoForward === "boolean";
  const navigationStateSyncChannel = webChannel(
    "BrowserNavigation",
    "navigationState_$store$_getStateSync",
  );
  const getNavigationStateSync = (event: Electron.IpcMainEvent): void => {
    if (event.sender !== mainView) {
      event.returnValue = { error: "Rejected BrowserNavigation store request" };
      return;
    }
    event.returnValue = { result: navigationState };
  };
  ipcMain.on(navigationStateSyncChannel, getNavigationStateSync);
  handle("BrowserNavigation", "goBack", () => {
    mainView.navigationHistory.goBack();
  });
  handle("BrowserNavigation", "goForward", () => {
    mainView.navigationHistory.goForward();
  });
  handle("BrowserNavigation", "requestMainMenuPopup", () => {
    if (!mainWindow.isDestroyed()) {
      Menu.getApplicationMenu()?.popup({ window: mainWindow });
    }
  });
  handle("BrowserNavigation", "reportNavigationState", (state) => {
    if (!isNavigationState(state)) {
      throw new TypeError(
        "BrowserNavigation.reportNavigationState expects navigation state",
      );
    }
    navigationState = state;
    if (!mainView.isDestroyed()) {
      mainView.send(
        webChannel("BrowserNavigation", "navigationState_$store$_update"),
        state,
      );
    }
  });
  handle(
    "BrowserNavigation",
    "navigationState_$store$_getState",
    () => navigationState,
  );

  handle("FramebufferPreview", "requestFramePort", async () => false);
  handle("FramebufferPreview", "listSources", async () => []);
  handle("FramebufferPreview", "attach", async () => {
    throw new Error("FramebufferPreview not available in this window");
  });
  handle("FramebufferPreview", "detach", async () => {});
  handle("FramebufferPreview", "setStreamHints", async () => {});
  handle("FramebufferPreview", "sendPointer", async () => {});
  handle("FramebufferPreview", "sendKey", async () => {});
  handle("FramebufferPreview", "sendScroll", async () => {});

  // The current bundle's native preview master gate defaults to false and the
  // Swift VM addon is not shipped in this restored source tree. Preserve the
  // exact gate-off contract instead of resolving untrusted renderer paths.
  handle("CoworkFilePreview", "isEnabled", () => false);
  handle("CoworkFilePreview", "isEpitaxyPreviewEnabled", () => false);
  handle("CoworkFilePreview", "isOpenInDefaultAppEnabled", () => false);
  handle("CoworkFilePreview", "isVmReady", () => false);
  handle("CoworkFilePreview", "show", () => ({
    ok: false,
    declineReason: "gate_disabled",
  }));
  handle("CoworkFilePreview", "hide", () => false);
  handle("CoworkFilePreview", "parkAndCapture", () => null);

  handle("ChromeExtension", "isInstalled", () =>
    chromeExtensionService.isInstalled(),
  );
  handle("ChromeExtension", "installExtension", () =>
    chromeExtensionService.installExtension(),
  );
  handle("ChromeExtension", "restartChrome", () =>
    chromeExtensionService.restartChrome(),
  );

  handle("DesktopNotifications", "getAuthorizationStatus", () =>
    desktopNotificationService.getAuthorizationStatus(),
  );
  handle("DesktopNotifications", "requestAuthorization", () =>
    desktopNotificationService.requestAuthorization(),
  );
  handle("DesktopNotifications", "openNotificationSettings", () =>
    desktopNotificationService.openNotificationSettings(),
  );
  handle(
    "DesktopNotifications",
    "showNotification",
    (title, body, tag, navigateTo, notificationType) => {
      if (
        typeof title !== "string" ||
        typeof body !== "string" ||
        !(tag === undefined || typeof tag === "string") ||
        !(navigateTo === undefined || typeof navigateTo === "string") ||
        !(
          notificationType === undefined || typeof notificationType === "string"
        )
      ) {
        throw new TypeError(
          "DesktopNotifications.showNotification received invalid arguments",
        );
      }
      desktopNotificationService.showNotification({
        title,
        body,
        tag,
        onClick:
          navigateTo === undefined
            ? undefined
            : () => {
                if (!mainView.isDestroyed()) {
                  mainView.send(
                    webChannel("Navigation", "navigate"),
                    navigateTo,
                  );
                }
                if (!mainWindow.isDestroyed()) {
                  if (!mainWindow.isVisible()) mainWindow.show();
                  mainWindow.focus();
                }
              },
      });
    },
  );

  handle("CoworkMemory", "readGlobalMemory", () =>
    coworkMemoryService.readGlobalMemory(),
  );
  handle("CoworkMemory", "writeGlobalMemory", (content) => {
    if (typeof content !== "string") {
      throw new TypeError("CoworkMemory.writeGlobalMemory expects a string");
    }
    return coworkMemoryService.writeGlobalMemory(content);
  });
  handle("CoworkMemory", "listAccountMemories", (includeContent) => {
    if (typeof includeContent !== "boolean") {
      throw new TypeError("CoworkMemory.listAccountMemories expects a boolean");
    }
    return coworkMemoryService.listAccountMemories(includeContent);
  });
  handle("CoworkMemory", "readAccountMemory", (memoryPath) => {
    if (typeof memoryPath !== "string") {
      throw new TypeError("CoworkMemory.readAccountMemory expects a string");
    }
    return coworkMemoryService.readAccountMemory(memoryPath);
  });
  handle("CoworkMemory", "writeAccountMemory", (memoryPath, content) => {
    if (typeof memoryPath !== "string" || typeof content !== "string") {
      throw new TypeError(
        "CoworkMemory.writeAccountMemory expects two strings",
      );
    }
    return coworkMemoryService.writeAccountMemory(memoryPath, content);
  });
  handle("CoworkMemory", "deleteAccountMemory", (memoryPath) => {
    if (typeof memoryPath !== "string") {
      throw new TypeError("CoworkMemory.deleteAccountMemory expects a string");
    }
    return coworkMemoryService.deleteAccountMemory(memoryPath);
  });
  handle("CoworkMemory", "resetMemories", () =>
    coworkMemoryService.resetMemories(),
  );

  handle("CoworkUserFiles", "getInfo", () => coworkUserFilesService.getInfo());
  handle("CoworkUserFiles", "pickTarget", () =>
    coworkUserFilesService.pickTarget(),
  );
  handle("CoworkUserFiles", "migrate", (targetRoot) => {
    if (typeof targetRoot !== "string") {
      throw new TypeError("CoworkUserFiles.migrate expects a string");
    }
    return coworkUserFilesService.migrate(targetRoot);
  });
  handle("CoworkUserFiles", "reveal", () => coworkUserFilesService.reveal());

  handle("OpenDocuments", "getOpenDocuments", async () => []);
  handle("OpenDocuments", "readOpenDocumentAsBase64", async (fileToken) => {
    if (typeof fileToken !== "string") {
      throw new TypeError(
        "OpenDocuments.readOpenDocumentAsBase64 expects a string",
      );
    }
    return null;
  });

  handle("Resources", "fetchMentionOptions", (query, filter) => {
    if (
      typeof query !== "string" ||
      !(filter === undefined || typeof filter === "string")
    ) {
      throw new TypeError(
        "Resources.fetchMentionOptions received invalid arguments",
      );
    }
    return resourceMentionService.fetchMentionOptions(query, filter);
  });
  handle("Resources", "handleMentionSelect", (optionId) => {
    if (typeof optionId !== "string") {
      throw new TypeError("Resources.handleMentionSelect expects a string");
    }
    return resourceMentionService.handleMentionSelect(optionId);
  });
  handle("Resources", "setFocusedCwd", (cwd) => {
    if (!(cwd === null || typeof cwd === "string")) {
      throw new TypeError("Resources.setFocusedCwd expects a string or null");
    }
    resourceMentionService.setFocusedCwd(cwd);
  });
  handle("Resources", "setFocusedSshTarget", (cwd, sshConfigId) => {
    if (
      !(cwd === null || typeof cwd === "string") ||
      !(sshConfigId === null || typeof sshConfigId === "string")
    ) {
      throw new TypeError(
        "Resources.setFocusedSshTarget expects strings or null",
      );
    }
    resourceMentionService.setFocusedSshTarget(cwd, sshConfigId);
  });
  handle("Resources", "listProjectFiles", () =>
    resourceMentionService.listProjectFiles(),
  );
  handle("Resources", "searchFileContents", (query, maxResults) => {
    if (
      typeof query !== "string" ||
      !(maxResults === undefined || typeof maxResults === "number")
    ) {
      throw new TypeError(
        "Resources.searchFileContents received invalid arguments",
      );
    }
    return resourceMentionService.searchFileContents(query, maxResults);
  });
  handle("Resources", "setFindInPageClaimed", (claimed) => {
    if (typeof claimed !== "boolean") {
      throw new TypeError("Resources.setFindInPageClaimed expects a boolean");
    }
    onResourcesFindClaimedChange(claimed);
    if (claimed && !mainView.isDestroyed()) {
      mainView.stopFindInPage("clearSelection");
    }
  });

  handle("QuickEntry", "setRecentChats", (chats, activeId) => {
    if (
      !Array.isArray(chats) ||
      !chats.every(
        (chat) =>
          typeof chat === "object" &&
          chat != null &&
          "chatId" in chat &&
          typeof chat.chatId === "string" &&
          "chatName" in chat &&
          typeof chat.chatName === "string",
      ) ||
      !(activeId === null || typeof activeId === "string")
    ) {
      throw new TypeError("QuickEntry.setRecentChats received invalid state");
    }
    recentChats = chats as Array<{ chatId: string; chatName: string }>;
    activeChatId = activeId;
  });

  const simulatorAttachmentSyncChannel = simulatorChannel(
    "attachment_$store$_getStateSync",
  );
  const getSimulatorAttachmentStateSync = (
    event: Electron.IpcMainEvent,
  ): void => {
    if (event.sender !== mainView) {
      event.returnValue = { error: "Rejected Simulator store request" };
      return;
    }
    event.returnValue = { result: [] };
  };
  ipcMain.on(simulatorAttachmentSyncChannel, getSimulatorAttachmentStateSync);
  handleSimulator("attachment_$store$_getState", () => []);
  handleSimulator("attach", () => ({
    code: "unsupported_platform",
    message: "Device simulator is not available in this build",
  }));
  handleSimulator("detach", () => {});
  handleSimulator("listDevices", () => []);
  handleSimulator("installAndLaunch", () => {});
  handleSimulator("gesture", () => {});

  handle("NestDev", "getState", (cwd) => {
    if (typeof cwd !== "string") {
      throw new TypeError("NestDev.getState expects a string");
    }
    return null;
  });
  handle("NestDev", "focus", (cwd) => {
    if (typeof cwd !== "string") {
      throw new TypeError("NestDev.focus expects a string");
    }
    return false;
  });

  handle("Auth", "doAuthInBrowser", (rawUrl) => {
    if (typeof rawUrl !== "string") {
      throw new TypeError("Auth.doAuthInBrowser expects a string");
    }
    const url = new URL(rawUrl);
    if (url.protocol !== "https:") {
      desktopLogger.warning("[Auth] rejected non-HTTPS auth URL", {
        protocol: url.protocol,
      });
      return;
    }
    const externalUrl = rawUrl.startsWith("https://claude.ai/")
      ? `https://claude.com/cai${rawUrl.slice("https://claude.ai".length)}`
      : rawUrl === "https://claude.ai"
        ? "https://claude.com/cai/"
        : rawUrl;
    desktopLogger.info("[Auth] using system browser", { path: url.pathname });
    void shell.openExternal(externalUrl).catch((error: unknown) => {
      desktopLogger.error("[Auth] failed to open system browser", {
        error: error instanceof Error ? error.message : String(error),
        origin: url.origin,
      });
      if (!mainView.isDestroyed()) {
        mainView.send(
          webChannel("Toast", "showToast"),
          "Failed to login, it may have been cancelled",
          "error",
          { messageForLogging: "system_browser_auth_failed" },
        );
      }
    });
  });

  const sendWindowState = (method: string, ...args: unknown[]): void => {
    if (!mainView.isDestroyed()) {
      mainView.send(webChannel("WindowState", method), ...args);
    }
  };
  const reportFullscreenEntered = (): void =>
    sendWindowState("fullscreenChanged", true);
  const reportFullscreenLeft = (): void =>
    sendWindowState("fullscreenChanged", false);
  const reportShown = (): void => sendWindowState("visibilityChanged", true);
  const reportHidden = (): void => sendWindowState("visibilityChanged", false);
  const reportZoomFactor = (): void =>
    sendWindowState("zoomFactorChanged", mainView.getZoomFactor());

  handle("WindowState", "getFullscreen", () =>
    mainWindow.isDestroyed() ? false : mainWindow.isFullScreen(),
  );
  handle("WindowState", "getVisibility", () =>
    mainWindow.isDestroyed() ? true : mainWindow.isVisible(),
  );
  handle("WindowState", "getZoomFactor", () =>
    mainView.isDestroyed() ? 1 : mainView.getZoomFactor(),
  );
  mainWindow.on("enter-full-screen", reportFullscreenEntered);
  mainWindow.on("leave-full-screen", reportFullscreenLeft);
  mainWindow.on("show", reportShown);
  mainWindow.on("hide", reportHidden);
  mainWindow.on("focus", reportShown);
  mainWindow.on("blur", reportHidden);
  mainView.on("zoom-changed", reportZoomFactor);

  handle("WindowControl", "resize", (widthValue, heightValue, optionsValue) => {
    if (mainWindow.isDestroyed()) return;
    const width = Number(widthValue);
    const height = Number(heightValue);
    if (!Number.isFinite(width) || !Number.isFinite(height)) return;
    const bounds = mainWindow.getBounds();
    const next = {
      height: Math.max(1, Math.round(height)),
      width: Math.max(1, Math.round(width)),
      x: bounds.x + Math.floor((bounds.width - width) / 2),
      y: bounds.y + Math.floor((bounds.height - height) / 2),
    };
    if (
      typeof optionsValue === "object" &&
      optionsValue != null &&
      "center" in optionsValue &&
      optionsValue.center === true
    ) {
      const display =
        screen.getDisplayMatching(bounds) ?? screen.getPrimaryDisplay();
      next.x =
        display.workArea.x +
        Math.max(0, Math.floor((display.workArea.width - next.width) / 2));
      next.y =
        display.workArea.y +
        Math.max(0, Math.floor((display.workArea.height - next.height) / 2));
    }
    mainWindow.setBounds(next, true);
    mainWindow.show();
  });
  handle("WindowControl", "focus", () => {
    if (!mainWindow.isDestroyed()) mainWindow.focus();
  });
  handle("WindowControl", "close", () => {
    if (!mainWindow.isDestroyed()) mainWindow.close();
  });
  handle("WindowControl", "setThemeMode", (mode) => {
    if (mode === "system" || mode === "light" || mode === "dark") {
      nativeTheme.themeSource = mode;
    }
  });
  handle("WindowControl", "setIncognitoMode", () => {});
  handle("WindowControl", "setModalScrimActive", (active) => {
    modalScrimActive = active === true;
    modalScrimBackdrop = null;
  });
  handle("WindowControl", "reportModalScrim", (active, backdrop) => {
    modalScrimActive = active === true;
    modalScrimBackdrop = modalScrimActive ? backdrop : null;
  });
  handle("WindowControl", "captureScreenshot", async () => {
    if (mainView.isDestroyed()) return "";
    const image = await mainView.capturePage();
    const { width } = image.getSize();
    return (
      width > MAX_SCREENSHOT_WIDTH
        ? image.resize({ width: MAX_SCREENSHOT_WIDTH })
        : image
    )
      .toPNG()
      .toString("base64");
  });

  void modalScrimActive;
  void modalScrimBackdrop;
  void recentChats;
  void activeChatId;

  return () => {
    for (const channel of channels) ipcMain.removeHandler(channel);
    mainView.off("did-start-navigation", resetAccountOnNavigation);
    mainView.off("before-input-event", toggleSidebarShortcut);
    ipcMain.off(navigationStateSyncChannel, getNavigationStateSync);
    ipcMain.off(
      simulatorAttachmentSyncChannel,
      getSimulatorAttachmentStateSync,
    );
    mainWindow.off("enter-full-screen", reportFullscreenEntered);
    mainWindow.off("leave-full-screen", reportFullscreenLeft);
    mainWindow.off("show", reportShown);
    mainWindow.off("hide", reportHidden);
    mainWindow.off("focus", reportShown);
    mainWindow.off("blur", reportHidden);
    mainView.off("zoom-changed", reportZoomFactor);
    desktopNotificationService.dispose();
  };
}
