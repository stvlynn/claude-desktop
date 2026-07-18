// Restored from ref/.vite/build/index.js

import {
  dialog,
  ipcMain,
  type BrowserWindow,
  type WebContents,
} from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const filePickerChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "FilePickers", method);

export function registerCurrentFilePickerIpc({
  mainWindow,
  trustedWebContents,
}: {
  mainWindow: BrowserWindow;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers = new Map<
    string,
    { kind: "directory" | "file"; method: string }
  >([
    [
      filePickerChannel("getDirectoryPath"),
      { kind: "directory", method: "getDirectoryPath" },
    ],
    [filePickerChannel("getFilePath"), { kind: "file", method: "getFilePath" }],
  ]);

  for (const [channel, definition] of handlers) {
    ipcMain.handle(channel, async (event, multiple: unknown) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(
          `Rejected FilePickers.${definition.method} from an untrusted view`,
        );
      }
      if (mainWindow.isDestroyed()) return [];
      const result = await dialog.showOpenDialog(mainWindow, {
        properties: [
          definition.kind === "directory" ? "openDirectory" : "openFile",
          ...(multiple === true ? (["multiSelections"] as const) : []),
        ],
      });
      return result.canceled ? [] : result.filePaths;
    });
  }

  return () => {
    for (const channel of handlers.keys()) ipcMain.removeHandler(channel);
  };
}
