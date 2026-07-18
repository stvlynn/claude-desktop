// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CoworkArtifacts", method);

export function createCurrentCoworkArtifactsPreloadApi(
  onEvent: (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ) => () => void,
) {
  return {
    getAllArtifacts: () => ipcRenderer.invoke(channel("getAllArtifacts")),
    getArtifactMetadata: (artifactId: string) =>
      ipcRenderer.invoke(channel("getArtifactMetadata"), artifactId),
    getArtifactThumbnail: (artifactId: string) =>
      ipcRenderer.invoke(channel("getArtifactThumbnail"), artifactId),
    deleteArtifact: (artifactId: string, removeFiles?: boolean) =>
      ipcRenderer.invoke(channel("deleteArtifact"), artifactId, removeFiles),
    getArtifactIndexHtmlPath: (artifactId: string) =>
      ipcRenderer.invoke(channel("getArtifactIndexHtmlPath"), artifactId),
    showArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("showArtifact"), ...args),
    hideArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("hideArtifact"), ...args),
    parkAndCaptureArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("parkAndCaptureArtifact"), ...args),
    reloadArtifactView: () => ipcRenderer.invoke(channel("reloadArtifactView")),
    printArtifactToPdf: () => ipcRenderer.invoke(channel("printArtifactToPdf")),
    restoreArtifactVersion: (artifactId: string, version: number) =>
      ipcRenderer.invoke(
        channel("restoreArtifactVersion"),
        artifactId,
        version,
      ),
    setArtifactStarred: (artifactId: string, starred: boolean) =>
      ipcRenderer.invoke(channel("setArtifactStarred"), artifactId, starred),
    setArtifactLastModifiedSession: (artifactId: string, sessionId: string) =>
      ipcRenderer.invoke(
        channel("setArtifactLastModifiedSession"),
        artifactId,
        sessionId,
      ),
    setArtifactMcpTools: (artifactId: string, tools: string[]) =>
      ipcRenderer.invoke(channel("setArtifactMcpTools"), artifactId, tools),
    isSharingEnabled: () => ipcRenderer.invoke(channel("isSharingEnabled")),
    isAutoPublishEnabled: () =>
      ipcRenderer.invoke(channel("isAutoPublishEnabled")),
    setArtifactAutoPublish: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("setArtifactAutoPublish"), ...args),
    shareArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("shareArtifact"), ...args),
    unshareArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("unshareArtifact"), ...args),
    refreshImportedArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("refreshImportedArtifact"), ...args),
    importArtifact: (...args: unknown[]) =>
      ipcRenderer.invoke(channel("importArtifact"), ...args),
    onOnArtifactsChanged: (listener: (...args: unknown[]) => void) =>
      onEvent("CoworkArtifacts", "onArtifactsChanged", listener),
  };
}
