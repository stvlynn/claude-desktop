// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// @ts-nocheck
// Type stubs for codex-mobile/setup-flow cluster.

export type CodexMobileSetupStepOverride = "initial" | "mfa-required" | string;
export type CodexMobileSetupStep = CodexMobileSetupStepOverride;

export type RemoteControlHostKind = "local" | "remote" | string;

export type RemoteControlStatus = "available" | "unavailable" | string;

export type RemoteControlClient = {
  id: string;
  name?: string;
};

export type InitialStepInput = {
  isMfaSetupRequiredError: boolean;
  mfaSetupRequired: boolean;
  remoteControlStatus: RemoteControlStatus;
};

export type ShouldShowSetupInput = {
  initialRemoteControlStatus: RemoteControlStatus;
  isMfaSetupRequiredError: boolean;
  mfaSetupRequired: boolean;
};

export type CodexMobileSetupFlowProps = {
  initialStep?: CodexMobileSetupStep;
  onClose?: () => void;
  variant?: string;
};

export type ScopeQueryContext = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue | undefined;
  queryClient?: unknown;
};

export type WaitForAddedClientQueryInput = {
  hostId: string;
  clientId: string;
};
