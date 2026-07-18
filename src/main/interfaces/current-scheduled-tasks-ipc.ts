// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { ScheduledTasksService } from "../application/scheduled-tasks-service";
import type { ScheduledTaskEvent } from "../domain/scheduled-task";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

export function registerCurrentScheduledTasksIpc({
  service,
  trustedWebContents,
}: {
  service: ScheduledTasksService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const contract =
    service.surface === "cowork" ? "CoworkScheduledTasks" : "CCDScheduledTasks";
  const channel = (method: string): string =>
    currentClaudeIpcChannel("claude.web", contract, method);
  const methods: string[] = [];
  const handle = (
    method: string,
    implementation: (...args: unknown[]) => unknown,
  ): void => {
    methods.push(method);
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(`Rejected ${contract} request from an untrusted view`);
      }
      return implementation(...args);
    });
  };
  const string = (value: unknown, method: string): string => {
    if (typeof value !== "string") {
      throw new TypeError(`${contract}.${method} expects a string`);
    }
    return value;
  };
  const object = (value: unknown, method: string): Record<string, unknown> => {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      throw new TypeError(`${contract}.${method} expects an object`);
    }
    return value as Record<string, unknown>;
  };

  handle("getAllScheduledTasks", () => service.getAllScheduledTasks());
  handle("getScheduledTaskFileContent", (id) =>
    service.getScheduledTaskFileContent(
      string(id, "getScheduledTaskFileContent"),
    ),
  );
  handle("updateScheduledTaskFileContent", (id, content) =>
    service.updateScheduledTaskFileContent(
      string(id, "updateScheduledTaskFileContent"),
      string(content, "updateScheduledTaskFileContent"),
    ),
  );
  handle("updateScheduledTaskStatus", (id, status, removeFiles) =>
    service.updateScheduledTaskStatus(
      string(id, "updateScheduledTaskStatus"),
      string(status, "updateScheduledTaskStatus"),
      removeFiles === true,
    ),
  );
  handle("createScheduledTask", (input) =>
    service.createScheduledTask(object(input, "createScheduledTask")),
  );
  handle("updateScheduledTask", (input) =>
    service.updateScheduledTask(object(input, "updateScheduledTask")),
  );
  handle("removeApprovedPermission", (id, toolName, ruleContent) =>
    service.removeApprovedPermission(
      string(id, "removeApprovedPermission"),
      string(toolName, "removeApprovedPermission"),
      ruleContent === undefined
        ? undefined
        : string(ruleContent, "removeApprovedPermission"),
    ),
  );
  if (service.surface === "cowork") {
    handle("clearChromePermissions", (id) =>
      service.clearChromePermissions(string(id, "clearChromePermissions")),
    );
  }
  handle("getWatcherHistory", (id) => {
    string(id, "getWatcherHistory");
    return service.getWatcherHistory();
  });

  const onScheduledTaskEvent = (event: ScheduledTaskEvent): void => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) {
        webContents.send(channel("onScheduledTaskEvent"), event);
      }
    }
  };
  service.on("scheduled-task-event", onScheduledTaskEvent);

  return () => {
    service.off("scheduled-task-event", onScheduledTaskEvent);
    for (const method of methods) ipcMain.removeHandler(channel(method));
  };
}
