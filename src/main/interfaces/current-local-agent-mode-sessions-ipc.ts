// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import {
  LOCAL_AGENT_MODE_SESSIONS_CONTRACT,
  localAgentModeSessionMethods,
  type LocalAgentModeSessionMethod,
} from "../../shared/contracts/local-agent-mode-sessions";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import type { LocalAgentModeSessionsService } from "../application/local-agent-mode-sessions-service";

const channel = (method: string): string =>
  currentClaudeIpcChannel(
    "claude.web",
    LOCAL_AGENT_MODE_SESSIONS_CONTRACT,
    method,
  );

export function registerCurrentLocalAgentModeSessionsIpc({
  service,
  trustedWebContents,
}: {
  service: LocalAgentModeSessionsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender))
      throw new Error(
        "Rejected LocalAgentModeSessions request from an untrusted view",
      );
  };
  for (const method of localAgentModeSessionMethods) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      assertTrusted(event.sender);
      return service.invoke(method as LocalAgentModeSessionMethod, args);
    });
  }
  const eventBindings = [
    ["onEvent", "onEvent"],
    ["toolPermissionRequest", "onToolPermissionRequest"],
    ["onDirectMcpServerStatusesChanged", "onDirectMcpServerStatusesChanged"],
    ["onManagedAskToolNamesChanged", "onManagedAskToolNamesChanged"],
    ["onBridgePermissionPreflight", "onBridgePermissionPreflight"],
    ["onCoworkFromMain", "onCoworkFromMain"],
    ["onRemoteSessionStart", "onRemoteSessionStart"],
    ["onCuEmergencyStop", "onCuEmergencyStop"],
    ["watchRecordingComplete", "watchRecordingComplete"],
  ] as const;
  const listeners = eventBindings.map(([serviceEvent, ipcEvent]) => {
    const listener = (...args: unknown[]): void => {
      for (const contents of trustedWebContents)
        if (!contents.isDestroyed()) contents.send(channel(ipcEvent), ...args);
    };
    service.on(serviceEvent, listener);
    return { serviceEvent, listener };
  });
  const stores = [
    {
      name: "sessionsBridgeStatus",
      get: () => service.getBridgeState(),
      event: "bridgeStateChanged",
    },
    {
      name: "interactiveAuth",
      get: () => service.getInteractiveAuthState(),
      event: "interactiveAuthChanged",
    },
  ] as const;
  const storeDisposers = stores.map((store) => {
    const asyncChannel = channel(`${store.name}_$store$_getState`);
    const syncChannel = channel(`${store.name}_$store$_getStateSync`);
    ipcMain.handle(asyncChannel, (event) => {
      assertTrusted(event.sender);
      return store.get();
    });
    const syncListener = (event: Electron.IpcMainEvent): void => {
      try {
        assertTrusted(event.sender);
        event.returnValue = { result: store.get() };
      } catch (error) {
        event.returnValue = {
          error: error instanceof Error ? error.message : String(error),
        };
      }
    };
    ipcMain.on(syncChannel, syncListener);
    const updateListener = (state: unknown): void => {
      for (const contents of trustedWebContents)
        if (!contents.isDestroyed())
          contents.send(channel(`${store.name}_$store$_update`), state);
    };
    service.on(store.event, updateListener);
    return () => {
      ipcMain.removeHandler(asyncChannel);
      ipcMain.off(syncChannel, syncListener);
      service.off(store.event, updateListener);
    };
  });
  return () => {
    for (const method of localAgentModeSessionMethods)
      ipcMain.removeHandler(channel(method));
    for (const { serviceEvent, listener } of listeners)
      service.off(serviceEvent, listener);
    for (const dispose of storeDisposers) dispose();
  };
}
