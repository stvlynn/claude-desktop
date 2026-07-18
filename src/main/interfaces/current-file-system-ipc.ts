// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { FileSystemService } from "../application/file-system-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "FileSystem", method);

export function registerCurrentFileSystemIpc({
  service,
  trustedWebContents,
}: {
  service: FileSystemService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers: Record<
    string,
    (sender: WebContents, args: unknown[]) => unknown
  > = {
    writeFileDownloadAndOpen: (_sender, args) =>
      service.writeFileDownloadAndOpen(stringArg(args, 0), stringArg(args, 1)),
    writeFileDownload: (_sender, args) =>
      service.writeFileDownload(stringArg(args, 0), stringArg(args, 1)),
    whichApplication: (_sender, args) =>
      service.whichApplication(stringArg(args, 0)),
    browseFolder: (sender, args) =>
      service.browseFolder(
        sender,
        stringArg(args, 0),
        booleanArg(args, 1),
        booleanArg(args, 2),
      ),
    browseFolders: (sender, args) =>
      service.browseFolders(
        sender,
        stringArg(args, 0),
        booleanArg(args, 1),
        booleanArg(args, 2),
      ),
    listDirectory: (_sender, args) => service.listDirectory(stringArg(args, 0)),
    getSystemPath: (_sender, args) => service.getSystemPath(stringArg(args, 0)),
    openLocalFile: (sender, args) =>
      service.openLocalFile(
        sender,
        stringArg(args, 0),
        stringArg(args, 1),
        booleanArg(args, 2),
      ),
    listFilesInFolder: (sender, args) =>
      service.listFilesInFolder(sender, stringArg(args, 0), stringArg(args, 1)),
    readLocalFile: (sender, args) =>
      service.readLocalFile(sender, stringArg(args, 0), stringArg(args, 1)),
    getLocalFileThumbnail: (sender, args) =>
      service.getLocalFileThumbnail(
        sender,
        stringArg(args, 0),
        stringArg(args, 1),
        numberArg(args, 2),
      ),
    writeLocalFile: (sender, args) =>
      service.writeLocalFile(
        sender,
        stringArg(args, 0),
        stringArg(args, 1),
        stringArg(args, 2),
      ),
    showInFolder: (_sender, args) => service.showInFolder(stringArg(args, 0)),
    savePastedFile: (_sender, args) =>
      service.savePastedFile(
        stringArg(args, 0),
        stringArg(args, 1),
        stringArg(args, 2),
      ),
    browseFiles: (sender, args) =>
      service.browseFiles(sender, stringArg(args, 0)),
    exportLocalFileToGoogleDrive: () => service.exportLocalFileToGoogleDrive(),
    promoteScratchpadFile: () => service.promoteScratchpadFile(),
  };

  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error("Rejected FileSystem request from an untrusted view");
      }
      return handler(event.sender, args);
    });
  }
  return () => {
    for (const method of Object.keys(handlers)) {
      ipcMain.removeHandler(channel(method));
    }
  };
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}

function booleanArg(args: unknown[], index: number): boolean {
  const value = args[index];
  if (typeof value !== "boolean")
    throw new TypeError(`Argument ${index} must be a boolean`);
  return value;
}

function numberArg(args: unknown[], index: number): number {
  const value = args[index];
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`Argument ${index} must be a finite number`);
  }
  return value;
}
