// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "FileSystem", method);

export function createCurrentFileSystemPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  return {
    writeFileDownloadAndOpen: (...args: unknown[]) =>
      invoke("writeFileDownloadAndOpen", ...args),
    writeFileDownload: (...args: unknown[]) =>
      invoke("writeFileDownload", ...args),
    whichApplication: (...args: unknown[]) =>
      invoke("whichApplication", ...args),
    browseFolder: (...args: unknown[]) => invoke("browseFolder", ...args),
    browseFolders: (...args: unknown[]) => invoke("browseFolders", ...args),
    listDirectory: (...args: unknown[]) => invoke("listDirectory", ...args),
    getSystemPath: (...args: unknown[]) => invoke("getSystemPath", ...args),
    openLocalFile: (...args: unknown[]) => invoke("openLocalFile", ...args),
    listFilesInFolder: (...args: unknown[]) =>
      invoke("listFilesInFolder", ...args),
    readLocalFile: (...args: unknown[]) => invoke("readLocalFile", ...args),
    getLocalFileThumbnail: (...args: unknown[]) =>
      invoke("getLocalFileThumbnail", ...args),
    writeLocalFile: (...args: unknown[]) => invoke("writeLocalFile", ...args),
    showInFolder: (...args: unknown[]) => invoke("showInFolder", ...args),
    savePastedFile: (...args: unknown[]) => invoke("savePastedFile", ...args),
    browseFiles: (...args: unknown[]) => invoke("browseFiles", ...args),
    exportLocalFileToGoogleDrive: (...args: unknown[]) =>
      invoke("exportLocalFileToGoogleDrive", ...args),
    promoteScratchpadFile: (...args: unknown[]) =>
      invoke("promoteScratchpadFile", ...args),
  };
}
