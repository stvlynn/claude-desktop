// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const officeAddinChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.officeAddin", "OfficeAddinFiles", method);

const EMPTY_CONNECTED_FILES_STATE = Object.freeze({
  files: [] as readonly unknown[],
  isFeatureEnabled: false,
});

export function registerCurrentOfficeAddinIpc(
  mainView: WebContents,
): () => void {
  const invokeChannels: string[] = [];

  function handle(
    method: string,
    implementation: (...args: unknown[]) => unknown,
  ): void {
    const channel = officeAddinChannel(method);
    invokeChannels.push(channel);
    ipcMain.handle(channel, (event, ...args: unknown[]) => {
      if (event.sender !== mainView) {
        throw new Error(
          `Rejected OfficeAddinFiles.${method} from an untrusted view`,
        );
      }
      return implementation(...args);
    });
  }

  handle("getConnectedFiles", (sessionId) => {
    if (typeof sessionId !== "string") {
      throw new TypeError(
        "OfficeAddinFiles.getConnectedFiles expects a string",
      );
    }
    return [];
  });
  handle("isFeatureEnabled", () => false);
  for (const method of ["focusFile", "selectFile"]) {
    handle(method, (fileId) => {
      if (typeof fileId !== "string") {
        throw new TypeError(`OfficeAddinFiles.${method} expects a string`);
      }
      return false;
    });
  }
  handle("updateActiveConversationSummary", () => undefined);
  handle("connectedFilesState_$store$_getState", () =>
    structuredClone(EMPTY_CONNECTED_FILES_STATE),
  );

  const syncChannel = officeAddinChannel(
    "connectedFilesState_$store$_getStateSync",
  );
  const syncHandler = (event: Electron.IpcMainEvent): void => {
    if (event.sender !== mainView) {
      event.returnValue = {
        error: "Rejected OfficeAddinFiles state read from an untrusted view",
      };
      return;
    }
    event.returnValue = {
      result: structuredClone(EMPTY_CONNECTED_FILES_STATE),
    };
  };
  ipcMain.on(syncChannel, syncHandler);

  return () => {
    for (const channel of invokeChannels) ipcMain.removeHandler(channel);
    ipcMain.off(syncChannel, syncHandler);
  };
}
