// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { CoworkSpacesService } from "../application/cowork-spaces-service";
import type {
  CoworkSpaceEvent,
  CoworkSpaceLink,
  RemoteSessionSpace,
} from "../domain/cowork-space";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CoworkSpaces", method);

export function registerCurrentCoworkSpacesIpc({
  service,
  trustedWebContents,
}: {
  service: CoworkSpacesService;
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
        throw new Error("Rejected CoworkSpaces request from an untrusted view");
      }
      return implementation(...args);
    });
  };
  const string = (value: unknown, label: string): string => {
    if (typeof value !== "string") {
      throw new TypeError(`CoworkSpaces.${label} expects a string`);
    }
    return value;
  };

  handle("getAllSpaces", () => service.getAllSpaces());
  handle("getSpace", (id) => service.getSpace(string(id, "getSpace")));
  handle("createSpace", (input) => {
    if (typeof input !== "object" || input === null || Array.isArray(input)) {
      throw new TypeError("CoworkSpaces.createSpace expects an object");
    }
    return service.createSpace(
      input as Parameters<CoworkSpacesService["createSpace"]>[0],
    );
  });
  handle("updateSpace", (id, update) => {
    if (
      typeof update !== "object" ||
      update === null ||
      Array.isArray(update)
    ) {
      throw new TypeError("CoworkSpaces.updateSpace expects an object");
    }
    return service.updateSpace(
      string(id, "updateSpace"),
      update as Parameters<CoworkSpacesService["updateSpace"]>[1],
    );
  });
  handle("deleteSpace", (id) => service.deleteSpace(string(id, "deleteSpace")));
  handle("addFolderToSpace", (id, folder) =>
    service.addFolderToSpace(
      string(id, "addFolderToSpace"),
      string(folder, "addFolderToSpace"),
    ),
  );
  handle("removeFolderFromSpace", (id, folder) =>
    service.removeFolderFromSpace(
      string(id, "removeFolderFromSpace"),
      string(folder, "removeFolderFromSpace"),
    ),
  );
  handle("addProjectToSpace", (id, projectId) =>
    service.addProjectToSpace(
      string(id, "addProjectToSpace"),
      string(projectId, "addProjectToSpace"),
    ),
  );
  handle("removeProjectFromSpace", (id, projectId) =>
    service.removeProjectFromSpace(
      string(id, "removeProjectFromSpace"),
      string(projectId, "removeProjectFromSpace"),
    ),
  );
  handle("addLinkToSpace", (id, link) => {
    if (
      typeof link !== "object" ||
      link === null ||
      Array.isArray(link) ||
      !("url" in link) ||
      typeof link.url !== "string"
    ) {
      throw new TypeError("CoworkSpaces.addLinkToSpace expects a link");
    }
    return service.addLinkToSpace(
      string(id, "addLinkToSpace"),
      link as CoworkSpaceLink,
    );
  });
  handle("removeLinkFromSpace", (id, url) =>
    service.removeLinkFromSpace(
      string(id, "removeLinkFromSpace"),
      string(url, "removeLinkFromSpace"),
    ),
  );
  handle("getAutoMemoryDir", (id) =>
    service.getAutoMemoryDir(string(id, "getAutoMemoryDir")),
  );
  handle("readSpaceMemoryIndex", (id) =>
    service.readSpaceMemoryIndex(string(id, "readSpaceMemoryIndex")),
  );
  handle("listFolderContents", (id, requestedPath) =>
    service.listFolderContents(
      string(id, "listFolderContents"),
      string(requestedPath, "listFolderContents"),
    ),
  );
  handle("readFileContents", (id, requestedPath) =>
    service.readFileContents(
      string(id, "readFileContents"),
      string(requestedPath, "readFileContents"),
    ),
  );
  handle("openFile", (id, requestedPath) =>
    service.openFile(string(id, "openFile"), string(requestedPath, "openFile")),
  );
  handle("createSpaceFolder", (parent, name) =>
    service.createSpaceFolder(
      string(parent, "createSpaceFolder"),
      string(name, "createSpaceFolder"),
    ),
  );
  handle("copyFilesToSpaceFolder", (id, paths) => {
    if (
      !Array.isArray(paths) ||
      !paths.every((value) => typeof value === "string")
    ) {
      throw new TypeError("CoworkSpaces.copyFilesToSpaceFolder expects paths");
    }
    return service.copyFilesToSpaceFolder(
      string(id, "copyFilesToSpaceFolder"),
      paths,
    );
  });
  handle("classifySessions", () => service.classifySessions());
  handle("summarizeSpace", () => service.summarizeSpace());
  handle("setAutoDescription", (id, description) =>
    service.setAutoDescription(
      string(id, "setAutoDescription"),
      string(description, "setAutoDescription"),
    ),
  );
  handle("getRemoteSessionSpaces", () => service.getRemoteSessionSpaces());
  handle("setRemoteSessionSpace", (entry) => {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      throw new TypeError(
        "CoworkSpaces.setRemoteSessionSpace expects an entry",
      );
    }
    return service.setRemoteSessionSpace(entry as RemoteSessionSpace);
  });
  handle("removeRemoteSessionSpace", (sessionId) =>
    service.removeRemoteSessionSpace(
      string(sessionId, "removeRemoteSessionSpace"),
    ),
  );

  const onSpaceEvent = (event: CoworkSpaceEvent): void => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) {
        webContents.send(channel("onSpaceEvent"), event);
      }
    }
  };
  service.on("space-event", onSpaceEvent);

  return () => {
    service.off("space-event", onSpaceEvent);
    for (const method of methods) ipcMain.removeHandler(channel(method));
  };
}
