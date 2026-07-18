// Restored from ref/webview assets: app terminal controller for local conversation surfaces.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";
import { sendHostRequest } from "./host-request-runtime";

export type EnvironmentTerminalRunAction = {
  command: string;
  cwd: string;
  title?: string | null;
};

export type EnvironmentTerminalController = {
  addSessionForConversation(
    conversationId: string,
    sessionId?: string,
    options?: unknown,
  ): string;
  attach(options: unknown): void;
  create(options: unknown): string;
  getSessionForConversation(conversationId: string): string | null;
  runAction(sessionId: string, action: EnvironmentTerminalRunAction): void;
  runHeadlessAction(
    sessionId: string,
    action: EnvironmentTerminalRunAction,
  ): void;
};

const sessionsByConversation = new Map<string, string>();
let nextSessionId = 1;

function dispatch(method: string, params: Record<string, unknown>): void {
  void sendHostRequest(method, { params }).catch(() => {});
}

export const environmentTerminalControllerService: EnvironmentTerminalController =
  {
    addSessionForConversation(conversationId, sessionId) {
      const resolvedSessionId = sessionId ?? `environment-${nextSessionId++}`;
      sessionsByConversation.set(conversationId, resolvedSessionId);
      return resolvedSessionId;
    },
    attach(options) {
      dispatch("terminal-attach", { options });
    },
    create(options) {
      const sessionId = `environment-${nextSessionId++}`;
      dispatch("terminal-create", { options, sessionId });
      return sessionId;
    },
    getSessionForConversation(conversationId) {
      return sessionsByConversation.get(conversationId) ?? null;
    },
    runAction(sessionId, action) {
      dispatch("terminal-run-action", { sessionId, ...action });
    },
    runHeadlessAction(sessionId, action) {
      dispatch("terminal-run-headless-action", { sessionId, ...action });
    },
  };

export const environmentTerminalControllerSignal =
  createAppScopeSignal<EnvironmentTerminalController>(
    appScopeRoot,
    environmentTerminalControllerService,
  );

export function initEnvironmentTerminalRuntime(): void {}
