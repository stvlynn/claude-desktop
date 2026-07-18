// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CoworkSpaces", method);

export function createCurrentCoworkSpacesPreloadApi(
  onEvent: (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ) => () => void,
) {
  return {
    getAllSpaces: () => ipcRenderer.invoke(channel("getAllSpaces")),
    getSpace: (spaceId: string) =>
      ipcRenderer.invoke(channel("getSpace"), spaceId),
    createSpace: (input: unknown) =>
      ipcRenderer.invoke(channel("createSpace"), input),
    updateSpace: (spaceId: string, update: unknown) =>
      ipcRenderer.invoke(channel("updateSpace"), spaceId, update),
    deleteSpace: (spaceId: string) =>
      ipcRenderer.invoke(channel("deleteSpace"), spaceId),
    addFolderToSpace: (spaceId: string, folderPath: string) =>
      ipcRenderer.invoke(channel("addFolderToSpace"), spaceId, folderPath),
    removeFolderFromSpace: (spaceId: string, folderPath: string) =>
      ipcRenderer.invoke(channel("removeFolderFromSpace"), spaceId, folderPath),
    addProjectToSpace: (spaceId: string, projectId: string) =>
      ipcRenderer.invoke(channel("addProjectToSpace"), spaceId, projectId),
    removeProjectFromSpace: (spaceId: string, projectId: string) =>
      ipcRenderer.invoke(channel("removeProjectFromSpace"), spaceId, projectId),
    addLinkToSpace: (spaceId: string, link: unknown) =>
      ipcRenderer.invoke(channel("addLinkToSpace"), spaceId, link),
    removeLinkFromSpace: (spaceId: string, url: string) =>
      ipcRenderer.invoke(channel("removeLinkFromSpace"), spaceId, url),
    getAutoMemoryDir: (spaceId: string) =>
      ipcRenderer.invoke(channel("getAutoMemoryDir"), spaceId),
    readSpaceMemoryIndex: (spaceId: string) =>
      ipcRenderer.invoke(channel("readSpaceMemoryIndex"), spaceId),
    listFolderContents: (spaceId: string, requestedPath: string) =>
      ipcRenderer.invoke(channel("listFolderContents"), spaceId, requestedPath),
    readFileContents: (spaceId: string, requestedPath: string) =>
      ipcRenderer.invoke(channel("readFileContents"), spaceId, requestedPath),
    openFile: (spaceId: string, requestedPath: string) =>
      ipcRenderer.invoke(channel("openFile"), spaceId, requestedPath),
    createSpaceFolder: (parentPath: string, folderName: string) =>
      ipcRenderer.invoke(channel("createSpaceFolder"), parentPath, folderName),
    copyFilesToSpaceFolder: (spaceId: string, paths: string[]) =>
      ipcRenderer.invoke(channel("copyFilesToSpaceFolder"), spaceId, paths),
    classifySessions: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("classifySessions"), ...args),
    summarizeSpace: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("summarizeSpace"), ...args),
    setAutoDescription: (spaceId: string, description: string) =>
      ipcRenderer.invoke(channel("setAutoDescription"), spaceId, description),
    getRemoteSessionSpaces: () =>
      ipcRenderer.invoke(channel("getRemoteSessionSpaces")),
    setRemoteSessionSpace: (entry: unknown) =>
      ipcRenderer.invoke(channel("setRemoteSessionSpace"), entry),
    removeRemoteSessionSpace: (sessionId: string) =>
      ipcRenderer.invoke(channel("removeRemoteSessionSpace"), sessionId),
    onOnSpaceEvent: (listener: (...args: unknown[]) => void) =>
      onEvent("CoworkSpaces", "onSpaceEvent", listener),
  };
}
