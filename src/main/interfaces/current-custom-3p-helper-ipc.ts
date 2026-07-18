// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const RESTRICTED_ERROR = "Custom3pHelperRun is restricted to the setup window";

const helperChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Custom3pHelperRun", method);

export function registerCurrentCustom3pHelperIpc(
  mainView: WebContents,
): () => void {
  const channels = [
    helperChannel("runCredentialHelper"),
    helperChannel("probeInference"),
    helperChannel("discoverModels"),
  ];
  for (const channel of channels) {
    ipcMain.handle(channel, (event) => {
      if (event.sender !== mainView) {
        throw new Error("Rejected Custom3pHelperRun from an untrusted view");
      }
      return Promise.reject(new Error(RESTRICTED_ERROR));
    });
  }
  return () => {
    for (const channel of channels) ipcMain.removeHandler(channel);
  };
}
