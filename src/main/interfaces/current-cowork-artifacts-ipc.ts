// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { CoworkArtifactsService } from "../application/cowork-artifacts-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CoworkArtifacts", method);

export function registerCurrentCoworkArtifactsIpc({
  service,
  trustedWebContents,
}: {
  service: CoworkArtifactsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const methods: string[] = [];
  const handle = (
    method: string,
    implementation: (...args: unknown[]) => unknown,
  ): void => {
    methods.push(method);
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(
          "Rejected CoworkArtifacts request from an untrusted view",
        );
      }
      return implementation(...args);
    });
  };
  const string = (value: unknown, method: string): string => {
    if (typeof value !== "string") {
      throw new TypeError(`CoworkArtifacts.${method} expects a string`);
    }
    return value;
  };

  handle("getAllArtifacts", () => service.getAllArtifacts());
  handle("getArtifactMetadata", (id) =>
    service.getArtifactMetadata(string(id, "getArtifactMetadata")),
  );
  handle("getArtifactThumbnail", (id) =>
    service.getArtifactThumbnail(string(id, "getArtifactThumbnail")),
  );
  handle("deleteArtifact", (id, removeFiles) =>
    service.deleteArtifact(string(id, "deleteArtifact"), removeFiles === true),
  );
  handle("getArtifactIndexHtmlPath", (id) =>
    service.getArtifactIndexHtmlPath(string(id, "getArtifactIndexHtmlPath")),
  );
  handle("showArtifact", () => service.showArtifact());
  handle("hideArtifact", () => service.hideArtifact());
  handle("parkAndCaptureArtifact", () => service.parkAndCaptureArtifact());
  handle("reloadArtifactView", () => service.reloadArtifactView());
  handle("printArtifactToPdf", () => service.printArtifactToPdf());
  handle("restoreArtifactVersion", (id, version) => {
    if (typeof version !== "number") {
      throw new TypeError(
        "CoworkArtifacts.restoreArtifactVersion expects a number",
      );
    }
    return service.restoreArtifactVersion(
      string(id, "restoreArtifactVersion"),
      version,
    );
  });
  handle("setArtifactStarred", (id, starred) => {
    if (typeof starred !== "boolean") {
      throw new TypeError(
        "CoworkArtifacts.setArtifactStarred expects a boolean",
      );
    }
    return service.setArtifactStarred(
      string(id, "setArtifactStarred"),
      starred,
    );
  });
  handle("setArtifactLastModifiedSession", (id, sessionId) =>
    service.setArtifactLastModifiedSession(
      string(id, "setArtifactLastModifiedSession"),
      string(sessionId, "setArtifactLastModifiedSession"),
    ),
  );
  handle("setArtifactMcpTools", (id, tools) => {
    if (
      !Array.isArray(tools) ||
      !tools.every((tool) => typeof tool === "string")
    ) {
      throw new TypeError("CoworkArtifacts.setArtifactMcpTools expects tools");
    }
    return service.setArtifactMcpTools(
      string(id, "setArtifactMcpTools"),
      tools,
    );
  });
  handle("isSharingEnabled", () => service.isSharingEnabled());
  handle("isAutoPublishEnabled", () => service.isAutoPublishEnabled());
  handle("setArtifactAutoPublish", () => service.setArtifactAutoPublish());
  handle("shareArtifact", () => service.shareArtifact());
  handle("unshareArtifact", () => service.unshareArtifact());
  handle("refreshImportedArtifact", () => service.refreshImportedArtifact());
  handle("importArtifact", () => service.importArtifact());

  const changed = (): void => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) {
        webContents.send(channel("onArtifactsChanged"));
      }
    }
  };
  service.on("changed", changed);
  return () => {
    service.off("changed", changed);
    for (const method of methods) ipcMain.removeHandler(channel(method));
  };
}
