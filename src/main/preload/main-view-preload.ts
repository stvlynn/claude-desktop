// Restored from ref/.vite/build/mainView.js
// Restored IPC surface: claude.web.WebBuild
// Restored IPC surface: claude.web.WindowControl
// Restored IPC surface: claude.web.Account
// Restored IPC surface: claude.settings.FilePickers
// Restored IPC surface: claude.settings.Startup
// Restored IPC surface: claude.officeAddin.OfficeAddinFiles
// Restored IPC surface: claude.web.Auth
// Restored IPC surface: claude.skills.Skills
// Restored IPC surface: claude.web.Toast
// Restored IPC surface: claude.web.Navigation
// Restored IPC surface: claude.settings.AppConfig
// Restored IPC surface: claude.web.LocalSessionEnvironment
// Restored IPC surface: claude.web.NestDev
// Restored IPC surface: claude.web.BuddyRemoteFeed
// Restored IPC surface: claude.web.WindowState
// Restored IPC surface: claude.web.BrowserNavigation
// Restored IPC surface: claude.web.FramebufferPreview
// Restored IPC surface: claude.simulator.Simulator
// Restored IPC surface: claude.web.MenuEvents
// Restored IPC surface: claude.web.FindInPageProvider
// Restored IPC surface: claude.settings.Custom3pHelperRun
// Restored IPC surface: claude.web.QuickEntry
// Restored IPC surface: claude.web.FloatingPenguinMini
// Restored IPC surface: claude.web.ChromeExtension
// Restored IPC surface: claude.settings.AppPreferences
// Restored IPC surface: claude.web.DesktopNotifications
// Restored IPC surface: claude.settings.GlobalShortcut
// Restored IPC surface: claude.web.CoworkMemory
// Restored IPC surface: claude.web.DeepLink
// Restored IPC surface: claude.settings.DesktopInfo
// Restored IPC surface: claude.web.OpenDocuments
// Restored IPC surface: claude.settings.WakeScheduler
// Restored IPC surface: claude.web.Resources
// Restored IPC surface: claude.web.CoworkUserFiles
// Restored IPC surface: claude.settings.MCP
// Restored IPC surface: claude.settings.AppFeatures
// Restored IPC surface: claude.settings.SupportBundle
// Restored IPC surface: claude.web.AgentModeFeedback
// Restored IPC surface: claude.web.AutoUpdater
// Restored IPC surface: claude.web.DeviceRegistry
// Restored IPC surface: claude.settings.ClaudeAiImport
// Restored IPC surface: claude.web.ComputerUseTcc
// Restored IPC surface: claude.web.GrandPrix
// Restored IPC surface: claude.web.CoworkFeedback
// Restored IPC surface: claude.web.ClaudeCode
// Restored IPC surface: claude.web.PluginBridgeMcp
// Restored IPC surface: claude.web.CoworkFilePreview
// Restored IPC surface: claude.web.CoworkSpaces
// Restored IPC surface: claude.web.CoworkScheduledTasks
// Restored IPC surface: claude.web.CCDScheduledTasks
// Restored IPC surface: claude.web.CoworkArtifacts
// Restored IPC surface: claude.web.Launch
// Restored IPC surface: claude.web.ClaudeVM
// Restored IPC surface: claude.web.FileSystem
// Restored IPC surface: claude.web.DocumentFunnel
// Restored IPC surface: claude.settings.Extensions
// Restored IPC surface: claude.settings.Custom3pSetup
// Restored IPC surface: claude.web.LocalPlugins
// Restored IPC surface: claude.web.CustomPlugins
// Restored IPC surface: claude.web.LocalAgentModeSessions
// Restored IPC surface: claude.web.LocalSessions
// Restored IPC surface: claude.buddy.BuddyBleTransport

import { contextBridge, ipcRenderer } from "electron";
import { webFrame } from "electron/renderer";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { registerDesktopIntlPreload } from "./claude-window-preload-runtime";
import { createCurrentClaudeSettingsPreloadApi } from "./current-settings-preload";
import { createCurrentCoworkSpacesPreloadApi } from "./current-cowork-spaces-preload";
import { createCurrentScheduledTasksPreloadApi } from "./current-scheduled-tasks-preload";
import { createCurrentCoworkArtifactsPreloadApi } from "./current-cowork-artifacts-preload";
import { createCurrentLaunchPreloadApi } from "./current-launch-preload";
import { createCurrentClaudeVmPreloadApi } from "./current-claude-vm-preload";
import { createCurrentFileSystemPreloadApi } from "./current-file-system-preload";
import { createCurrentDocumentFunnelPreloadApi } from "./current-document-funnel-preload";
import { createCurrentLocalPluginsPreloadApi } from "./current-local-plugins-preload";
import { createCurrentCustomPluginsPreloadApi } from "./current-custom-plugins-preload";
import { createCurrentLocalAgentModeSessionsPreloadApi } from "./current-local-agent-mode-sessions-preload";
import { createCurrentLocalSessionsPreloadApi } from "./current-local-sessions-preload";

const webChannel = (contract: string, method: string): string =>
  currentClaudeIpcChannel("claude.web", contract, method);
const buddyChannel = (contract: string, method: string): string =>
  currentClaudeIpcChannel("claude.buddy", contract, method);

function isTopFrame(): boolean {
  if (
    "frameToken" in webFrame &&
    webFrame.top &&
    "frameToken" in webFrame.top
  ) {
    return webFrame.top.frameToken === webFrame.frameToken;
  }
  return webFrame.top?.routingId === webFrame.routingId;
}

if (isTopFrame()) {
  const onWebEvent = (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ): (() => void) => {
    const channel = webChannel(contract, method);
    const handler = (_event: Electron.IpcRendererEvent, ...args: unknown[]) =>
      listener(...args);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.off(channel, handler);
  };
  const onBuddyEvent = (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ): (() => void) => {
    const channel = buddyChannel(contract, method);
    const handler = (_event: Electron.IpcRendererEvent, ...args: unknown[]) =>
      listener(...args);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.off(channel, handler);
  };
  contextBridge.exposeInMainWorld("claude.buddy", {
    BuddyBleTransport: {
      rx: (line: string) =>
        ipcRenderer.invoke(buddyChannel("BuddyBleTransport", "rx"), line),
      reportState: (state: string, name?: string) =>
        ipcRenderer.invoke(
          buddyChannel("BuddyBleTransport", "reportState"),
          state,
          name,
        ),
      log: (message: string) =>
        ipcRenderer.invoke(buddyChannel("BuddyBleTransport", "log"), message),
      onTx: (listener: (line: string) => void) =>
        onBuddyEvent(
          "BuddyBleTransport",
          "tx",
          listener as (...args: unknown[]) => void,
        ),
    },
  });
  contextBridge.exposeInMainWorld("claude.web", {
    LocalPlugins: createCurrentLocalPluginsPreloadApi(),
    CustomPlugins: createCurrentCustomPluginsPreloadApi(),
    LocalAgentModeSessions: createCurrentLocalAgentModeSessionsPreloadApi(),
    LocalSessions: createCurrentLocalSessionsPreloadApi(),
    AgentModeFeedback: {
      openFeedbackWindow: (options: unknown) =>
        ipcRenderer.invoke(
          webChannel("AgentModeFeedback", "openFeedbackWindow"),
          options,
        ),
      openFeedbackAndConfirmReinstall: (options: unknown) =>
        ipcRenderer.invoke(
          webChannel("AgentModeFeedback", "openFeedbackAndConfirmReinstall"),
          options,
        ),
      reportErrorToSlack: (
        sessionId?: string,
        errorMessage?: string,
        slackChannelUrl?: string,
      ) =>
        ipcRenderer.invoke(
          webChannel("AgentModeFeedback", "reportErrorToSlack"),
          sessionId,
          errorMessage,
          slackChannelUrl,
        ),
    },
    AutoUpdater: {
      restartToUpdate: () =>
        ipcRenderer.invoke(webChannel("AutoUpdater", "restartToUpdate")),
      checkForUpdates: () =>
        ipcRenderer.invoke(webChannel("AutoUpdater", "checkForUpdates")),
      getRunningLocalSessionCount: () =>
        ipcRenderer.invoke(
          webChannel("AutoUpdater", "getRunningLocalSessionCount"),
        ),
      getRunningLocalSessions: () =>
        ipcRenderer.invoke(
          webChannel("AutoUpdater", "getRunningLocalSessions"),
        ),
      restartToUpdateWhenIdle: () =>
        ipcRenderer.invoke(
          webChannel("AutoUpdater", "restartToUpdateWhenIdle"),
        ),
      cancelPendingRestart: () =>
        ipcRenderer.invoke(webChannel("AutoUpdater", "cancelPendingRestart")),
      updaterStateStore: {
        getState: () =>
          ipcRenderer.invoke(
            webChannel("AutoUpdater", "updaterState_$store$_getState"),
          ),
        getStateSync: () => {
          const response = ipcRenderer.sendSync(
            webChannel("AutoUpdater", "updaterState_$store$_getStateSync"),
          ) as { error?: string; result?: unknown };
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (listener: (state: unknown) => void) =>
          onWebEvent("AutoUpdater", "updaterState_$store$_update", listener),
      },
    },
    DeviceRegistry: {
      getAvailability: (accountUuid: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "getAvailability"),
          accountUuid,
        ),
      getPublicKey: (accountUuid: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "getPublicKey"),
          accountUuid,
        ),
      signAttestationPreimage: (accountUuid: string, preimageB64: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "signAttestationPreimage"),
          accountUuid,
          preimageB64,
        ),
      signForSessionHeader: (
        accountUuid: string,
        orgUuid: string,
        sessionUuid: string,
      ) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "signForSessionHeader"),
          accountUuid,
          orgUuid,
          sessionUuid,
        ),
      signCreateSessionBind: (accountUuid: string, orgUuid: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "signCreateSessionBind"),
          accountUuid,
          orgUuid,
        ),
      signTriggerOp: (
        accountUuid: string,
        orgUuid: string,
        op: string,
        subjectId: string,
        fireContentHashHex: string,
      ) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "signTriggerOp"),
          accountUuid,
          orgUuid,
          op,
          subjectId,
          fireContentHashHex,
        ),
      getLocalDeviceInfo: (accountUuid: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "getLocalDeviceInfo"),
          accountUuid,
        ),
      notifyRegistered: (accountUuid: string) =>
        ipcRenderer.invoke(
          webChannel("DeviceRegistry", "notifyRegistered"),
          accountUuid,
        ),
    },
    GrandPrix: {
      pair: (partnerId: string, context?: { hasUserActivation: boolean }) =>
        ipcRenderer.invoke(webChannel("GrandPrix", "pair"), partnerId, context),
      disconnect: (partnerId: string) =>
        ipcRenderer.invoke(webChannel("GrandPrix", "disconnect"), partnerId),
      request: (request: object) =>
        ipcRenderer.invoke(webChannel("GrandPrix", "request"), request),
      grandPrixStatusStore: {
        getState: () =>
          ipcRenderer.invoke(
            webChannel("GrandPrix", "grandPrixStatus_$store$_getState"),
          ),
        getStateSync: () => {
          const response = ipcRenderer.sendSync(
            webChannel("GrandPrix", "grandPrixStatus_$store$_getStateSync"),
          ) as { error?: string; result?: unknown };
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (listener: (state: unknown) => void) =>
          onWebEvent("GrandPrix", "grandPrixStatus_$store$_update", listener),
      },
    },
    PluginBridgeMcp: {
      listServers: () =>
        ipcRenderer.invoke(webChannel("PluginBridgeMcp", "listServers")),
      onChanged: (listener: () => void) =>
        onWebEvent("PluginBridgeMcp", "changed", listener),
    },
    Account: {
      setAccountDetails: (details: unknown) =>
        ipcRenderer.invoke(webChannel("Account", "setAccountDetails"), details),
    },
    Auth: {
      doAuthInBrowser: (url: string) =>
        ipcRenderer.invoke(webChannel("Auth", "doAuthInBrowser"), url),
    },
    BuddyRemoteFeed: {
      sync: (sessions: unknown[]) =>
        ipcRenderer.invoke(webChannel("BuddyRemoteFeed", "sync"), sessions),
      onPermissionDecision: (
        listener: (
          sessionId: string,
          requestId: string,
          decision: string,
        ) => void,
      ) =>
        onWebEvent(
          "BuddyRemoteFeed",
          "permissionDecision",
          listener as (...args: unknown[]) => void,
        ),
    },
    BrowserNavigation: {
      goBack: () =>
        ipcRenderer.invoke(webChannel("BrowserNavigation", "goBack")),
      goForward: () =>
        ipcRenderer.invoke(webChannel("BrowserNavigation", "goForward")),
      requestMainMenuPopup: () =>
        ipcRenderer.invoke(
          webChannel("BrowserNavigation", "requestMainMenuPopup"),
        ),
      reportNavigationState: (state: {
        canGoBack: boolean;
        canGoForward: boolean;
      }) =>
        ipcRenderer.invoke(
          webChannel("BrowserNavigation", "reportNavigationState"),
          state,
        ),
      navigationStateStore: {
        getState: () =>
          ipcRenderer.invoke(
            webChannel("BrowserNavigation", "navigationState_$store$_getState"),
          ),
        getStateSync: () => {
          const response: { error?: string; result?: unknown } =
            ipcRenderer.sendSync(
              webChannel(
                "BrowserNavigation",
                "navigationState_$store$_getStateSync",
              ),
            );
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (
          listener: (state: {
            canGoBack: boolean;
            canGoForward: boolean;
          }) => void,
        ) =>
          onWebEvent(
            "BrowserNavigation",
            "navigationState_$store$_update",
            listener as (...args: unknown[]) => void,
          ),
      },
    },
    ChromeExtension: {
      isInstalled: () =>
        ipcRenderer.invoke(webChannel("ChromeExtension", "isInstalled")),
      installExtension: () =>
        ipcRenderer.invoke(webChannel("ChromeExtension", "installExtension")),
      restartChrome: () =>
        ipcRenderer.invoke(webChannel("ChromeExtension", "restartChrome")),
    },
    ClaudeCode: {
      getStatus: () =>
        ipcRenderer.invoke(webChannel("ClaudeCode", "getStatus")),
      prepare: () => ipcRenderer.invoke(webChannel("ClaudeCode", "prepare")),
      checkGitAvailable: () =>
        ipcRenderer.invoke(webChannel("ClaudeCode", "checkGitAvailable")),
      resolveLocalSettings: (workspacePath?: string) =>
        ipcRenderer.invoke(
          webChannel("ClaudeCode", "resolveLocalSettings"),
          workspacePath,
        ),
      patchUserSettings: (patch: object) =>
        ipcRenderer.invoke(
          webChannel("ClaudeCode", "patchUserSettings"),
          patch,
        ),
      setEnableWorkflows: (value?: boolean) =>
        ipcRenderer.invoke(
          webChannel("ClaudeCode", "setEnableWorkflows"),
          value,
        ),
      getPeriodUsage: () =>
        ipcRenderer.invoke(webChannel("ClaudeCode", "getPeriodUsage")),
    },
    ComputerUseTcc: {
      getState: () =>
        ipcRenderer.invoke(webChannel("ComputerUseTcc", "getState")),
      requestAccessibility: () =>
        ipcRenderer.invoke(
          webChannel("ComputerUseTcc", "requestAccessibility"),
        ),
      requestScreenRecording: () =>
        ipcRenderer.invoke(
          webChannel("ComputerUseTcc", "requestScreenRecording"),
        ),
      openSystemSettings: (pane: string) =>
        ipcRenderer.invoke(
          webChannel("ComputerUseTcc", "openSystemSettings"),
          pane,
        ),
      getCurrentSessionGrants: (sessionId: string) =>
        ipcRenderer.invoke(
          webChannel("ComputerUseTcc", "getCurrentSessionGrants"),
          sessionId,
        ),
      revokeGrant: (sessionId: string, bundleId: string) =>
        ipcRenderer.invoke(
          webChannel("ComputerUseTcc", "revokeGrant"),
          sessionId,
          bundleId,
        ),
      listInstalledApps: () =>
        ipcRenderer.invoke(webChannel("ComputerUseTcc", "listInstalledApps")),
    },
    CoworkMemory: {
      readGlobalMemory: () =>
        ipcRenderer.invoke(webChannel("CoworkMemory", "readGlobalMemory")),
      writeGlobalMemory: (content: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkMemory", "writeGlobalMemory"),
          content,
        ),
      listAccountMemories: (includeContent: boolean) =>
        ipcRenderer.invoke(
          webChannel("CoworkMemory", "listAccountMemories"),
          includeContent,
        ),
      readAccountMemory: (memoryPath: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkMemory", "readAccountMemory"),
          memoryPath,
        ),
      writeAccountMemory: (memoryPath: string, content: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkMemory", "writeAccountMemory"),
          memoryPath,
          content,
        ),
      deleteAccountMemory: (memoryPath: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkMemory", "deleteAccountMemory"),
          memoryPath,
        ),
      resetMemories: () =>
        ipcRenderer.invoke(webChannel("CoworkMemory", "resetMemories")),
    },
    CoworkFeedback: {
      getSystemInfo: () =>
        ipcRenderer.invoke(webChannel("CoworkFeedback", "getSystemInfo")),
      captureScreenshot: () =>
        ipcRenderer.invoke(webChannel("CoworkFeedback", "captureScreenshot")),
      discardScreenshot: (token: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkFeedback", "discardScreenshot"),
          token,
        ),
      getScreenshotDataUrl: (token: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkFeedback", "getScreenshotDataUrl"),
          token,
        ),
      submitFeedback: (form: object) =>
        ipcRenderer.invoke(
          webChannel("CoworkFeedback", "submitFeedback"),
          form,
        ),
    },
    CoworkUserFiles: {
      getInfo: () =>
        ipcRenderer.invoke(webChannel("CoworkUserFiles", "getInfo")),
      pickTarget: () =>
        ipcRenderer.invoke(webChannel("CoworkUserFiles", "pickTarget")),
      migrate: (targetRoot: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkUserFiles", "migrate"),
          targetRoot,
        ),
      reveal: () => ipcRenderer.invoke(webChannel("CoworkUserFiles", "reveal")),
    },
    DesktopNotifications: {
      getAuthorizationStatus: () =>
        ipcRenderer.invoke(
          webChannel("DesktopNotifications", "getAuthorizationStatus"),
        ),
      requestAuthorization: () =>
        ipcRenderer.invoke(
          webChannel("DesktopNotifications", "requestAuthorization"),
        ),
      openNotificationSettings: () =>
        ipcRenderer.invoke(
          webChannel("DesktopNotifications", "openNotificationSettings"),
        ),
      showNotification: (
        title: string,
        body: string,
        tag?: string,
        navigateTo?: string,
        notificationType?: string,
      ) =>
        ipcRenderer.invoke(
          webChannel("DesktopNotifications", "showNotification"),
          title,
          body,
          tag,
          navigateTo,
          notificationType,
        ),
      onOnNotificationClicked: (listener: (result: unknown) => void) =>
        onWebEvent(
          "DesktopNotifications",
          "onNotificationClicked",
          listener as (...args: unknown[]) => void,
        ),
    },
    DeepLink: {
      onHandleDeepLink: (listener: (url: string) => void) =>
        onWebEvent(
          "DeepLink",
          "handleDeepLink",
          listener as (...args: unknown[]) => void,
        ),
    },
    OpenDocuments: {
      getOpenDocuments: () =>
        ipcRenderer.invoke(webChannel("OpenDocuments", "getOpenDocuments")),
      readOpenDocumentAsBase64: (fileToken: string) =>
        ipcRenderer.invoke(
          webChannel("OpenDocuments", "readOpenDocumentAsBase64"),
          fileToken,
        ),
    },
    Resources: {
      fetchMentionOptions: (query: string, filter?: string) =>
        ipcRenderer.invoke(
          webChannel("Resources", "fetchMentionOptions"),
          query,
          filter,
        ),
      handleMentionSelect: (optionId: string) =>
        ipcRenderer.invoke(
          webChannel("Resources", "handleMentionSelect"),
          optionId,
        ),
      setFocusedCwd: (cwd: string | null) =>
        ipcRenderer.invoke(webChannel("Resources", "setFocusedCwd"), cwd),
      setFocusedSshTarget: (cwd: string | null, sshConfigId: string | null) =>
        ipcRenderer.invoke(
          webChannel("Resources", "setFocusedSshTarget"),
          cwd,
          sshConfigId,
        ),
      listProjectFiles: () =>
        ipcRenderer.invoke(webChannel("Resources", "listProjectFiles")),
      searchFileContents: (query: string, maxResults?: number) =>
        ipcRenderer.invoke(
          webChannel("Resources", "searchFileContents"),
          query,
          maxResults,
        ),
      setFindInPageClaimed: (claimed: boolean) =>
        ipcRenderer.invoke(
          webChannel("Resources", "setFindInPageClaimed"),
          claimed,
        ),
      onFindRequested: (listener: () => void) =>
        onWebEvent("Resources", "findRequested", listener),
      onFindStepRequested: (listener: (forward: boolean) => void) =>
        onWebEvent(
          "Resources",
          "findStepRequested",
          listener as (...args: unknown[]) => void,
        ),
    },
    FramebufferPreview: {
      requestFramePort: () =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "requestFramePort"),
        ),
      listSources: (options?: unknown) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "listSources"),
          options,
        ),
      attach: (source: unknown, options: unknown) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "attach"),
          source,
          options,
        ),
      detach: (sessionId: string) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "detach"),
          sessionId,
        ),
      setStreamHints: (sessionId: string, hints: unknown) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "setStreamHints"),
          sessionId,
          hints,
        ),
      sendPointer: (...args: unknown[]) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "sendPointer"),
          ...args,
        ),
      sendKey: (...args: unknown[]) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "sendKey"),
          ...args,
        ),
      sendScroll: (...args: unknown[]) =>
        ipcRenderer.invoke(
          webChannel("FramebufferPreview", "sendScroll"),
          ...args,
        ),
      onSessionResized: (listener: (...args: unknown[]) => void) =>
        onWebEvent("FramebufferPreview", "sessionResized", listener),
      onSessionFatal: (listener: (...args: unknown[]) => void) =>
        onWebEvent("FramebufferPreview", "sessionFatal", listener),
      onOpenSourceRequested: (listener: (...args: unknown[]) => void) =>
        onWebEvent("FramebufferPreview", "openSourceRequested", listener),
    },
    CoworkFilePreview: {
      isEnabled: () =>
        ipcRenderer.invoke(webChannel("CoworkFilePreview", "isEnabled")),
      isEpitaxyPreviewEnabled: () =>
        ipcRenderer.invoke(
          webChannel("CoworkFilePreview", "isEpitaxyPreviewEnabled"),
        ),
      isOpenInDefaultAppEnabled: () =>
        ipcRenderer.invoke(
          webChannel("CoworkFilePreview", "isOpenInDefaultAppEnabled"),
        ),
      isVmReady: () =>
        ipcRenderer.invoke(webChannel("CoworkFilePreview", "isVmReady")),
      show: (
        sessionId: string,
        path: string,
        bounds: unknown,
        consumerId?: string,
      ) =>
        ipcRenderer.invoke(
          webChannel("CoworkFilePreview", "show"),
          sessionId,
          path,
          bounds,
          consumerId,
        ),
      hide: (consumerId?: string) =>
        ipcRenderer.invoke(webChannel("CoworkFilePreview", "hide"), consumerId),
      parkAndCapture: (bounds: unknown, consumerId?: string) =>
        ipcRenderer.invoke(
          webChannel("CoworkFilePreview", "parkAndCapture"),
          bounds,
          consumerId,
        ),
    },
    CoworkSpaces: createCurrentCoworkSpacesPreloadApi(onWebEvent),
    CoworkArtifacts: createCurrentCoworkArtifactsPreloadApi(onWebEvent),
    Launch: createCurrentLaunchPreloadApi(onWebEvent),
    ClaudeVM: createCurrentClaudeVmPreloadApi(onWebEvent),
    FileSystem: createCurrentFileSystemPreloadApi(),
    DocumentFunnel: createCurrentDocumentFunnelPreloadApi(),
    CoworkScheduledTasks: createCurrentScheduledTasksPreloadApi(
      "CoworkScheduledTasks",
      onWebEvent,
    ),
    CCDScheduledTasks: createCurrentScheduledTasksPreloadApi(
      "CCDScheduledTasks",
      onWebEvent,
    ),
    FindInPageProvider: {
      setProviderActive: (active: boolean) =>
        ipcRenderer.invoke(
          webChannel("FindInPageProvider", "setProviderActive"),
          active,
        ),
      reportFindResult: (requestId: number, result: unknown) =>
        ipcRenderer.invoke(
          webChannel("FindInPageProvider", "reportFindResult"),
          requestId,
          result,
        ),
      onFindRequest: (
        listener: (
          requestId: number,
          query: string,
          forward: boolean,
          isNewSearch: boolean,
        ) => void,
      ) =>
        onWebEvent(
          "FindInPageProvider",
          "findRequest",
          listener as (...args: unknown[]) => void,
        ),
      onFindClear: (listener: () => void) =>
        onWebEvent("FindInPageProvider", "findClear", listener),
    },
    FloatingPenguinMini: {
      onOnMiniStateChanged: (listener: (state: unknown) => void) =>
        onWebEvent(
          "FloatingPenguinMini",
          "onMiniStateChanged",
          listener as (...args: unknown[]) => void,
        ),
      requestToggleMini: () =>
        ipcRenderer.invoke(
          webChannel("FloatingPenguinMini", "requestToggleMini"),
        ),
      requestSetMiniExpanded: (expanded: boolean) =>
        ipcRenderer.invoke(
          webChannel("FloatingPenguinMini", "requestSetMiniExpanded"),
          expanded,
        ),
    },
    Navigation: {
      onNavigate: (listener: (path: string) => void) =>
        onWebEvent(
          "Navigation",
          "navigate",
          listener as (...args: unknown[]) => void,
        ),
    },
    QuickEntry: {
      setRecentChats: (
        chats: Array<{ chatId: string; chatName: string }>,
        activeChatId: string | null,
      ) =>
        ipcRenderer.invoke(
          webChannel("QuickEntry", "setRecentChats"),
          chats,
          activeChatId,
        ),
      onOnQuickEntrySubmit: (listener: (payload: unknown) => void) =>
        onWebEvent(
          "QuickEntry",
          "onQuickEntrySubmit",
          listener as (...args: unknown[]) => void,
        ),
    },
    LocalSessionEnvironment: {
      get: () =>
        ipcRenderer.invoke(webChannel("LocalSessionEnvironment", "get")),
      save: (environment: Record<string, string>) =>
        ipcRenderer.invoke(
          webChannel("LocalSessionEnvironment", "save"),
          environment,
        ),
    },
    MenuEvents: {
      onOpenFile: (listener: () => void) =>
        onWebEvent("MenuEvents", "openFile", listener),
      onCloseWindow: (listener: () => void) =>
        onWebEvent("MenuEvents", "closeWindow", listener),
      onToggleSidebar: (listener: () => void) =>
        onWebEvent("MenuEvents", "toggleSidebar", listener),
    },
    NestDev: {
      getState: (cwd: string) =>
        ipcRenderer.invoke(webChannel("NestDev", "getState"), cwd),
      focus: (cwd: string) =>
        ipcRenderer.invoke(webChannel("NestDev", "focus"), cwd),
    },
    Toast: {
      onShowToast: (
        listener: (
          message: string,
          toastType: "success" | "error",
          options?: unknown,
        ) => void,
      ) => {
        return onWebEvent(
          "Toast",
          "showToast",
          listener as (...args: unknown[]) => void,
        );
      },
    },
    WindowState: {
      onFullscreenChanged: (listener: (isFullscreen: boolean) => void) =>
        onWebEvent(
          "WindowState",
          "fullscreenChanged",
          listener as (...args: unknown[]) => void,
        ),
      getFullscreen: () =>
        ipcRenderer.invoke(webChannel("WindowState", "getFullscreen")),
      onVisibilityChanged: (listener: (isVisible: boolean) => void) =>
        onWebEvent(
          "WindowState",
          "visibilityChanged",
          listener as (...args: unknown[]) => void,
        ),
      getVisibility: () =>
        ipcRenderer.invoke(webChannel("WindowState", "getVisibility")),
      onZoomFactorChanged: (listener: (zoomFactor: number) => void) =>
        onWebEvent(
          "WindowState",
          "zoomFactorChanged",
          listener as (...args: unknown[]) => void,
        ),
      getZoomFactor: () =>
        ipcRenderer.invoke(webChannel("WindowState", "getZoomFactor")),
      onCuDockStateChanged: (
        listener: (isDocked: boolean, holderSessionId: string | null) => void,
      ) =>
        onWebEvent(
          "WindowState",
          "cuDockStateChanged",
          listener as (...args: unknown[]) => void,
        ),
    },
    WebBuild: {
      reportCommitHash: (commitHash: string) =>
        ipcRenderer.invoke(
          webChannel("WebBuild", "reportCommitHash"),
          commitHash,
        ),
    },
    WindowControl: {
      resize: (width: number, height: number, options?: { center?: boolean }) =>
        ipcRenderer.invoke(
          webChannel("WindowControl", "resize"),
          width,
          height,
          options,
        ),
      focus: () => ipcRenderer.invoke(webChannel("WindowControl", "focus")),
      close: () => ipcRenderer.invoke(webChannel("WindowControl", "close")),
      setThemeMode: (mode: "system" | "light" | "dark") =>
        ipcRenderer.invoke(webChannel("WindowControl", "setThemeMode"), mode),
      setIncognitoMode: (enabled: boolean) =>
        ipcRenderer.invoke(
          webChannel("WindowControl", "setIncognitoMode"),
          enabled,
        ),
      setModalScrimActive: (active: boolean) =>
        ipcRenderer.invoke(
          webChannel("WindowControl", "setModalScrimActive"),
          active,
        ),
      reportModalScrim: (active: boolean, backdrop: unknown) =>
        ipcRenderer.invoke(
          webChannel("WindowControl", "reportModalScrim"),
          active,
          backdrop,
        ),
      captureScreenshot: () =>
        ipcRenderer.invoke(webChannel("WindowControl", "captureScreenshot")),
    },
  });
  const simulatorChannel = (method: string): string =>
    currentClaudeIpcChannel("claude.simulator", "Simulator", method);
  contextBridge.exposeInMainWorld("claude.simulator", {
    Simulator: {
      attach: (...args: unknown[]) =>
        ipcRenderer.invoke(simulatorChannel("attach"), ...args),
      detach: (udid: string) =>
        ipcRenderer.invoke(simulatorChannel("detach"), udid),
      listDevices: (platform?: unknown) =>
        ipcRenderer.invoke(simulatorChannel("listDevices"), platform),
      installAndLaunch: (request: unknown) =>
        ipcRenderer.invoke(simulatorChannel("installAndLaunch"), request),
      gesture: (udid: string, message: unknown) =>
        ipcRenderer.invoke(simulatorChannel("gesture"), udid, message),
      attachmentStore: {
        getState: () =>
          ipcRenderer.invoke(simulatorChannel("attachment_$store$_getState")),
        getStateSync: () => {
          const response: { error?: string; result?: unknown } =
            ipcRenderer.sendSync(
              simulatorChannel("attachment_$store$_getStateSync"),
            );
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (listener: (attachments: unknown[]) => void) => {
          const channel = simulatorChannel("attachment_$store$_update");
          const handler = (
            _event: Electron.IpcRendererEvent,
            attachments: unknown[],
          ) => listener(attachments);
          ipcRenderer.on(channel, handler);
          return () => ipcRenderer.off(channel, handler);
        },
      },
    },
  });
  contextBridge.exposeInMainWorld(
    "claude.settings",
    createCurrentClaudeSettingsPreloadApi(),
  );
  const officeAddinChannel = (method: string): string =>
    currentClaudeIpcChannel("claude.officeAddin", "OfficeAddinFiles", method);
  const onOfficeAddinEvent = (
    method: string,
    listener: (...args: unknown[]) => void,
  ): (() => void) => {
    const channel = officeAddinChannel(method);
    const handler = (_event: Electron.IpcRendererEvent, ...args: unknown[]) =>
      listener(...args);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.off(channel, handler);
  };
  contextBridge.exposeInMainWorld("claude.officeAddin", {
    OfficeAddinFiles: {
      getConnectedFiles: (sessionId: string) =>
        ipcRenderer.invoke(officeAddinChannel("getConnectedFiles"), sessionId),
      isFeatureEnabled: () =>
        ipcRenderer.invoke(officeAddinChannel("isFeatureEnabled")),
      focusFile: (fileId: string) =>
        ipcRenderer.invoke(officeAddinChannel("focusFile"), fileId),
      selectFile: (fileId: string) =>
        ipcRenderer.invoke(officeAddinChannel("selectFile"), fileId),
      onOnFileStateChanged: (listener: (file: unknown) => void) =>
        onOfficeAddinEvent("onFileStateChanged", listener),
      onOnFileAdded: (listener: (file: unknown) => void) =>
        onOfficeAddinEvent("onFileAdded", listener),
      onOnFileRemoved: (listener: (fileId: unknown) => void) =>
        onOfficeAddinEvent("onFileRemoved", listener),
      updateActiveConversationSummary: (summary: unknown) =>
        ipcRenderer.invoke(
          officeAddinChannel("updateActiveConversationSummary"),
          summary,
        ),
      onOnAddinNeedsContext: (listener: () => void) =>
        onOfficeAddinEvent("onAddinNeedsContext", listener),
      connectedFilesStateStore: {
        getState: () =>
          ipcRenderer.invoke(
            officeAddinChannel("connectedFilesState_$store$_getState"),
          ),
        getStateSync: () => {
          const response: { error?: string; result?: unknown } =
            ipcRenderer.sendSync(
              officeAddinChannel("connectedFilesState_$store$_getStateSync"),
            );
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (listener: (state: unknown) => void) =>
          onOfficeAddinEvent("connectedFilesState_$store$_update", listener),
      },
    },
  });
  contextBridge.exposeInMainWorld("claude.skills", {
    Skills: {
      onPreviewSkillFile: (
        listener: (data: Uint8Array, filename: string) => void,
      ) => {
        const channel = currentClaudeIpcChannel(
          "claude.skills",
          "Skills",
          "previewSkillFile",
        );
        const handler = (
          _event: Electron.IpcRendererEvent,
          data: Uint8Array,
          filename: string,
        ) => listener(data, filename);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
  });
}

registerDesktopIntlPreload();
