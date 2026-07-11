// Restored from ref/webview/assets/use-app-connect-flow-B7CQFxUf.js
// @ts-nocheck
// Boundary stub for use-app-connect-flow to unblock Google Workspace resource runtime promotion.

import type { AppConnectApp } from "../../features/connectors/apps-queries";

export type UseAppConnectFlowOptions = {
  hostId?: string;
  onConnectStarted?: (app: AppConnectApp) => void;
};

export type AppConnectOAuthStartedInput = {
  app: AppConnectApp;
  redirectUrl: string;
  resumeTarget?: unknown;
};

export type UseAppConnectFlowResult = {
  connectingApp: AppConnectApp | null;
  clearConnectingApp: () => void;
  clearPendingAppConnect: (input: { appId: string }) => void;
  handleAppConnectOAuthStarted: (input: AppConnectOAuthStartedInput) => void;
  handleConnectApp: (app: AppConnectApp) => Promise<void>;
  handleOpenAppUrl: (url: string | null | undefined) => void;
  isAppConnectPending: (app: AppConnectApp) => boolean;
};

export function useAppConnectFlow(
  _options: UseAppConnectFlowOptions = {},
): UseAppConnectFlowResult {
  return {
    connectingApp: null,
    clearConnectingApp: () => {},
    clearPendingAppConnect: () => {},
    handleAppConnectOAuthStarted: () => {},
    handleConnectApp: async () => {},
    handleOpenAppUrl: () => {},
    isAppConnectPending: () => false,
  };
}
