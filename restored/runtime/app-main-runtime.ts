// Restored from ref/webview/assets/app-main-lwTO-JL9.js
// Semantic app-main runtime bindings backed by shared producer chunks.
import {
  GA as refreshStatsigDiagnostics,
  WA as initAppRuntimeChunk,
  cP as initAppLoggingChunk,
  lP as hostMessageBridge,
  mP as appMainLogger,
  pP as initAppFeatureRuntimeChunk,
} from "../vendor/appg-thread-shared-runtime";
import {
  So as initProjectsAppEntryChunk,
  bo as getCodexWindowChrome,
  wo as readCompactWindowPreference,
  xo as initProjectsSharedRuntimeChunk,
} from "../vendor/projects-app-shared-runtime";
import {
  c as initAutomationsRuntimeChunk,
  r as initAutomationsStateChunk,
  s as CodexApp,
  t as initCodexAppChunk,
} from "../vendor/automations-page-runtime";

export type CodexOs = "win32" | "darwin" | "linux" | "unknown";
export type RendererLogLevel = "error" | "info" | "warn";

export {
  CodexApp,
  initAppFeatureRuntimeChunk,
  initAppLoggingChunk,
  initAppRuntimeChunk,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
  initProjectsAppEntryChunk,
  initProjectsSharedRuntimeChunk,
  refreshStatsigDiagnostics,
};

export function logAppMainStatsigRenderRequest(): void {
  appMainLogger.info(
    "[statsig-refresh-diagnostics] React root render requested",
    {
      safe: { windowType: "electron" },
    },
  );
}

export function dispatchRendererLogMessage(
  level: RendererLogLevel,
  message: string,
): void {
  hostMessageBridge.dispatchMessage("log-message", {
    level,
    message,
  });
}

export function getElectronWindowChrome(codexOs: CodexOs): string {
  return getCodexWindowChrome("electron", codexOs);
}

export function isCompactWindowPreferred(): boolean {
  return readCompactWindowPreference();
}
