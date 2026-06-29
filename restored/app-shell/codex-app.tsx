// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Electron Codex application root shell.
import React, { type ReactNode } from "react";
import { AppPreloader } from "../ui/app-preloader";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";
import { once } from "../runtime/commonjs-interop";

export type CodexAppProps = {
  children?: ReactNode;
};

export function CodexApp({ children }: CodexAppProps = {}) {
  React.useEffect(() => {
    vscodeBridge.dispatchMessage("log-message", {
      level: "info",
      message: `[startup][renderer] restored CodexApp shell mounted after ${Math.round(performance.now())}ms`,
    });
    vscodeBridge.dispatchMessage("ready", {});
  }, []);

  if (children != null) return <>{children}</>;

  return (
    <main
      className="bg-token-main-surface-primary text-token-text-primary flex h-full min-h-0 w-full min-w-0 flex-col"
      data-codex-app-root=""
    >
      <AppPreloader debugName="CodexApp" />
    </main>
  );
}

export const initAutomationsRuntimeChunk = once(() => {});
export const initAutomationsStateChunk = once(() => {});
export const initCodexAppChunk = once(() => {});
