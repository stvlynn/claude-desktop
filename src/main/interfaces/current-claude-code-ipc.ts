// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { ClaudeCodeService } from "../application/claude-code-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "ClaudeCode", method);

export function registerCurrentClaudeCodeIpc({
  service,
  trustedWebContents,
}: {
  service: ClaudeCodeService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected ClaudeCode request from an untrusted view");
    }
  };
  const noArgumentMethods = {
    getStatus: () => service.getStatus(),
    prepare: () => service.prepare(),
    checkGitAvailable: () => service.checkGitAvailable(),
    getPeriodUsage: () => service.getPeriodUsage(),
  };
  for (const [method, handler] of Object.entries(noArgumentMethods)) {
    ipcMain.handle(channel(method), (event) => {
      assertTrusted(event.sender);
      return handler();
    });
  }
  ipcMain.handle(
    channel("resolveLocalSettings"),
    (event, workspace: unknown) => {
      assertTrusted(event.sender);
      if (!(workspace === undefined || typeof workspace === "string")) {
        throw new TypeError("ClaudeCode.resolveLocalSettings expects a path");
      }
      return service.resolveLocalSettings(workspace);
    },
  );
  ipcMain.handle(channel("patchUserSettings"), (event, patch: unknown) => {
    assertTrusted(event.sender);
    if (typeof patch !== "object" || patch === null || Array.isArray(patch)) {
      throw new TypeError("ClaudeCode.patchUserSettings expects an object");
    }
    return service.patchUserSettings(
      patch as Record<string, string | boolean | undefined>,
    );
  });
  ipcMain.handle(channel("setEnableWorkflows"), (event, value: unknown) => {
    assertTrusted(event.sender);
    if (!(value === undefined || typeof value === "boolean")) {
      throw new TypeError("ClaudeCode.setEnableWorkflows expects a boolean");
    }
    return service.setEnableWorkflows(value);
  });
  return () => {
    for (const method of Object.keys(noArgumentMethods)) {
      ipcMain.removeHandler(channel(method));
    }
    ipcMain.removeHandler(channel("resolveLocalSettings"));
    ipcMain.removeHandler(channel("patchUserSettings"));
    ipcMain.removeHandler(channel("setEnableWorkflows"));
  };
}
