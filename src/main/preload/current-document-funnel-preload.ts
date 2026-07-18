// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "DocumentFunnel", method);

export function createCurrentDocumentFunnelPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  return {
    ensureScratchRoot: (...args: unknown[]) =>
      invoke("ensureScratchRoot", ...args),
    writeScratchFile: (...args: unknown[]) =>
      invoke("writeScratchFile", ...args),
    listScratchWorkingFiles: (...args: unknown[]) =>
      invoke("listScratchWorkingFiles", ...args),
    runClarkdownConvert: (...args: unknown[]) =>
      invoke("runClarkdownConvert", ...args),
    runClarkdownDownloadExport: (...args: unknown[]) =>
      invoke("runClarkdownDownloadExport", ...args),
    revealDownloadExport: (...args: unknown[]) =>
      invoke("revealDownloadExport", ...args),
    injectDocumentContext: (...args: unknown[]) =>
      invoke("injectDocumentContext", ...args),
  };
}
