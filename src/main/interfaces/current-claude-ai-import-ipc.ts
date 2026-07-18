// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type {
  ClaudeAiImportAuthState,
  ClaudeAiImportService,
} from "../application/claude-ai-import-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "ClaudeAiImport", method);

export function registerCurrentClaudeAiImportIpc({
  service,
  trustedWebContents,
}: {
  service: ClaudeAiImportService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected ClaudeAiImport request from an untrusted view");
    }
  };
  const methods = {
    isAvailable: () => service.isAvailable(),
    getAuthState: () => service.getAuthState(),
    startAuth: () => service.startAuth(),
    reopenAuthTab: () => service.reopenAuthTab(),
    clearAuth: () => service.clearAuth(),
    runImport: () => service.runImport(),
  };
  for (const [method, handler] of Object.entries(methods)) {
    ipcMain.handle(channel(method), (event) => {
      assertTrusted(event.sender);
      return handler();
    });
  }

  const dispatchAuthState = (state: ClaudeAiImportAuthState): void => {
    for (const contents of trustedWebContents) {
      if (!contents.isDestroyed()) {
        contents.send(channel("onAuthStateChange"), state);
      }
    }
  };
  const dispatchUserCode = (code: string): void => {
    for (const contents of trustedWebContents) {
      if (!contents.isDestroyed()) {
        contents.send(channel("onAuthUserCode"), code);
      }
    }
  };
  service.on("authStateChange", dispatchAuthState);
  service.on("authUserCode", dispatchUserCode);

  return () => {
    service.off("authStateChange", dispatchAuthState);
    service.off("authUserCode", dispatchUserCode);
    for (const method of Object.keys(methods)) {
      ipcMain.removeHandler(channel(method));
    }
  };
}
