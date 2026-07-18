// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type {
  AgentModeFeedbackOptions,
  AgentModeFeedbackService,
} from "../application/agent-mode-feedback-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "AgentModeFeedback", method);

function parseOptions(value: unknown): AgentModeFeedbackOptions {
  if (
    typeof value !== "object" ||
    value == null ||
    typeof (value as { url?: unknown }).url !== "string"
  ) {
    throw new Error("Invalid AgentModeFeedback options");
  }
  const options = value as Record<string, unknown>;
  for (const key of ["prefillErrorText", "source"] as const) {
    if (options[key] !== undefined && typeof options[key] !== "string") {
      throw new Error(`Invalid AgentModeFeedback ${key}`);
    }
  }
  return value as AgentModeFeedbackOptions;
}

export function registerCurrentAgentModeFeedbackIpc({
  service,
  trustedWebContents,
}: {
  service: AgentModeFeedbackService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error(
        "Rejected AgentModeFeedback request from an untrusted view",
      );
    }
  };
  const methods = [
    "openFeedbackWindow",
    "openFeedbackAndConfirmReinstall",
    "reportErrorToSlack",
  ] as const;
  ipcMain.handle(channel(methods[0]), (event, options: unknown) => {
    assertTrusted(event.sender);
    return service.openFeedbackWindow(parseOptions(options));
  });
  ipcMain.handle(channel(methods[1]), (event, options: unknown) => {
    assertTrusted(event.sender);
    return service.openFeedbackAndConfirmReinstall(parseOptions(options));
  });
  ipcMain.handle(
    channel(methods[2]),
    (
      event,
      sessionId?: unknown,
      errorMessage?: unknown,
      slackUrl?: unknown,
    ) => {
      assertTrusted(event.sender);
      for (const value of [sessionId, errorMessage, slackUrl]) {
        if (value !== undefined && typeof value !== "string") {
          throw new Error("Invalid AgentModeFeedback error report argument");
        }
      }
      return service.reportErrorToSlack(
        sessionId as string | undefined,
        errorMessage as string | undefined,
        slackUrl as string | undefined,
      );
    },
  );
  return () => {
    for (const method of methods) ipcMain.removeHandler(channel(method));
    service.dispose();
  };
}
