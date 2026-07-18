// Restored from ref/.vite/build/coworkArtifact.js

import { contextBridge, ipcRenderer } from "electron";

const IPC_PREFIX =
  "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_";

interface UserActivationContext {
  hasUserActivation: boolean;
}

type NavigationDirection = "back" | "forward";

const invokeBridge = (method: string, ...args: unknown[]) =>
  ipcRenderer.invoke(`${IPC_PREFIX}${method}`, ...args);

export const coworkArtifactHost = {
  callMcpTool: (
    server: unknown,
    tool: unknown,
    context: UserActivationContext,
  ) => invokeBridge("callMcpTool", server, tool, context),
  askClaude: (prompt: unknown, options?: unknown) =>
    invokeBridge("askClaude", prompt, options),
  runScheduledTask: (task: unknown, context: UserActivationContext) =>
    invokeBridge("runScheduledTask", task, context),
  navigateHost: (direction: NavigationDirection) =>
    invokeBridge("navigateHost", direction),
  openExternalUrl: (url: string) => invokeBridge("openExternalUrl", url),
};

contextBridge.exposeInMainWorld("cowork", {
  callMcpTool: (server: unknown, tool: unknown) =>
    coworkArtifactHost.callMcpTool(server, tool, {
      hasUserActivation: navigator.userActivation.isActive,
    }),
  askClaude: coworkArtifactHost.askClaude,
  sample: coworkArtifactHost.askClaude,
  runScheduledTask: (task: unknown) =>
    coworkArtifactHost.runScheduledTask(task, {
      hasUserActivation: navigator.userActivation.isActive,
    }),
});

const handleExternalLink = (event: MouseEvent) => {
  if (!event.isTrusted) return;
  const anchor = (event.target as Element | null)?.closest?.("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return;
  if (!anchor.protocol || anchor.protocol === "cowork-artifact:") return;
  event.preventDefault();
  void coworkArtifactHost.openExternalUrl(anchor.href);
};

window.addEventListener(
  "click",
  (event) => {
    if (event.button === 0) handleExternalLink(event);
  },
  true,
);
window.addEventListener(
  "auxclick",
  (event) => {
    if (event.button === 1) handleExternalLink(event);
  },
  true,
);

if (process.platform === "darwin") {
  window.addEventListener(
    "mouseup",
    (event) => {
      if (!event.isTrusted) return;
      if (event.button === 3) {
        event.preventDefault();
        void coworkArtifactHost.navigateHost("back");
      } else if (event.button === 4) {
        event.preventDefault();
        void coworkArtifactHost.navigateHost("forward");
      }
    },
    true,
  );
}
