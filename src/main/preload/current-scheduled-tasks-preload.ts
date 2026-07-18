// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

type ScheduledTaskContract = "CoworkScheduledTasks" | "CCDScheduledTasks";

export function createCurrentScheduledTasksPreloadApi(
  contract: ScheduledTaskContract,
  onEvent: (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ) => () => void,
) {
  const channel = (method: string): string =>
    currentClaudeIpcChannel("claude.web", contract, method);
  return {
    getAllScheduledTasks: () =>
      ipcRenderer.invoke(channel("getAllScheduledTasks")),
    getScheduledTaskFileContent: (taskId: string) =>
      ipcRenderer.invoke(channel("getScheduledTaskFileContent"), taskId),
    updateScheduledTaskFileContent: (taskId: string, content: string) =>
      ipcRenderer.invoke(
        channel("updateScheduledTaskFileContent"),
        taskId,
        content,
      ),
    updateScheduledTaskStatus: (
      taskId: string,
      status: string,
      removeFiles?: boolean,
    ) =>
      ipcRenderer.invoke(
        channel("updateScheduledTaskStatus"),
        taskId,
        status,
        removeFiles,
      ),
    createScheduledTask: (input: unknown) =>
      ipcRenderer.invoke(channel("createScheduledTask"), input),
    updateScheduledTask: (input: unknown) =>
      ipcRenderer.invoke(channel("updateScheduledTask"), input),
    removeApprovedPermission: (
      taskId: string,
      toolName: string,
      ruleContent?: string,
    ) =>
      ipcRenderer.invoke(
        channel("removeApprovedPermission"),
        taskId,
        toolName,
        ruleContent,
      ),
    ...(contract === "CoworkScheduledTasks"
      ? {
          clearChromePermissions: (taskId: string) =>
            ipcRenderer.invoke(channel("clearChromePermissions"), taskId),
        }
      : {}),
    getWatcherHistory: (taskId: string) =>
      ipcRenderer.invoke(channel("getWatcherHistory"), taskId),
    onOnScheduledTaskEvent: (listener: (...args: unknown[]) => void) =>
      onEvent(contract, "onScheduledTaskEvent", listener),
  };
}
