// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { CoworkFeedbackService } from "../application/cowork-feedback-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CoworkFeedback", method);

export function registerCurrentCoworkFeedbackIpc({
  service,
  trustedWebContents,
}: {
  service: CoworkFeedbackService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected CoworkFeedback request from an untrusted view");
    }
  };
  const noArgumentMethods = {
    getSystemInfo: () => service.getSystemInfo(),
    captureScreenshot: () => service.captureScreenshot(),
  };
  for (const [method, handler] of Object.entries(noArgumentMethods)) {
    ipcMain.handle(channel(method), (event) => {
      assertTrusted(event.sender);
      return handler();
    });
  }
  for (const method of ["discardScreenshot", "getScreenshotDataUrl"] as const) {
    ipcMain.handle(channel(method), (event, token: unknown) => {
      assertTrusted(event.sender);
      if (typeof token !== "string") {
        throw new TypeError(`CoworkFeedback.${method} expects a token`);
      }
      return service[method](token);
    });
  }
  ipcMain.handle(channel("submitFeedback"), (event, form: unknown) => {
    assertTrusted(event.sender);
    if (typeof form !== "object" || form === null || Array.isArray(form)) {
      throw new TypeError("CoworkFeedback.submitFeedback expects a form");
    }
    return service.submitFeedback(form as Record<string, unknown>);
  });
  return () => {
    for (const method of Object.keys(noArgumentMethods)) {
      ipcMain.removeHandler(channel(method));
    }
    ipcMain.removeHandler(channel("discardScreenshot"));
    ipcMain.removeHandler(channel("getScreenshotDataUrl"));
    ipcMain.removeHandler(channel("submitFeedback"));
  };
}
