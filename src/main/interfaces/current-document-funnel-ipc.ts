// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { DocumentFunnelService } from "../application/document-funnel-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "DocumentFunnel", method);

export function registerCurrentDocumentFunnelIpc({
  service,
  trustedWebContents,
}: {
  service: DocumentFunnelService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    ensureScratchRoot: (args) => service.ensureScratchRoot(stringArg(args, 0)),
    writeScratchFile: (args) =>
      service.writeScratchFile(
        stringArg(args, 0),
        stringArg(args, 1),
        stringArg(args, 2),
      ),
    listScratchWorkingFiles: (args) =>
      service.listScratchWorkingFiles(stringArg(args, 0)),
    runClarkdownConvert: (args) =>
      service.runClarkdownConvert(stringArg(args, 0), objectArg(args, 1)),
    runClarkdownDownloadExport: (args) =>
      service.runClarkdownDownloadExport(
        stringArg(args, 0),
        objectArg(args, 1),
      ),
    revealDownloadExport: (args) =>
      service.revealDownloadExport(stringArg(args, 0), stringArg(args, 1)),
    injectDocumentContext: (args) =>
      service.injectDocumentContext(stringArg(args, 0), stringArg(args, 1)),
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(
          "Rejected DocumentFunnel request from an untrusted view",
        );
      }
      return handler(args);
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

function objectArg(args: unknown[], index: number): Record<string, unknown> {
  const value = args[index];
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`Argument ${index} must be an object`);
  }
  return value as Record<string, unknown>;
}
