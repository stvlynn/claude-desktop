// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import {
  LOCAL_SESSION_METHODS,
  type LocalSessionMethod,
} from "../../shared/contracts/local-sessions";
import type { LocalSessionsService } from "../application/local-sessions-service";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "LocalSessions", method);

export function registerCurrentLocalSessionsIpc({
  service,
  trustedWebContents,
}: {
  service: LocalSessionsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender))
      throw new Error("Rejected LocalSessions request from an untrusted view");
  };
  for (const method of LOCAL_SESSION_METHODS) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      assertTrusted(event.sender);
      return service.invoke(method as LocalSessionMethod, args, event.sender);
    });
  }
  const bindings = [
    ["event", "onEvent"],
    ["toolPermissionRequest", "onToolPermissionRequest"],
    ["sshPasswordRequired", "onSSHPasswordRequired"],
  ] as const;
  const listeners = bindings.map(([serviceEvent, ipcEvent]) => {
    const listener = (...args: unknown[]): void => {
      for (const contents of trustedWebContents) {
        if (!contents.isDestroyed()) contents.send(channel(ipcEvent), ...args);
      }
    };
    service.on(serviceEvent, listener);
    return { serviceEvent, listener };
  });
  return () => {
    for (const method of LOCAL_SESSION_METHODS)
      ipcMain.removeHandler(channel(method));
    for (const { serviceEvent, listener } of listeners)
      service.off(serviceEvent, listener);
  };
}
