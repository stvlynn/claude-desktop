// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import {
  getMaskedLocalSessionEnvironment,
  parseEnvironmentVariables,
  saveLocalSessionEnvironment,
} from "../infrastructure/local-session-environment";

const environmentChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "LocalSessionEnvironment", method);

export function registerCurrentLocalSessionEnvironmentIpc(
  mainView: WebContents,
): () => void {
  const getChannel = environmentChannel("get");
  const saveChannel = environmentChannel("save");
  ipcMain.handle(getChannel, (event) => {
    if (event.sender !== mainView) {
      throw new Error(
        "Rejected LocalSessionEnvironment.get from an untrusted view",
      );
    }
    return getMaskedLocalSessionEnvironment();
  });
  ipcMain.handle(saveChannel, (event, value: unknown) => {
    if (event.sender !== mainView) {
      throw new Error(
        "Rejected LocalSessionEnvironment.save from an untrusted view",
      );
    }
    return saveLocalSessionEnvironment(parseEnvironmentVariables(value));
  });
  return () => {
    ipcMain.removeHandler(getChannel);
    ipcMain.removeHandler(saveChannel);
  };
}
