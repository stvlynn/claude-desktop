// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// @ts-nocheck
// Thread handoff operation type definitions.

export type ThreadHandoffStepStatus = "pending" | "running" | "completed" | "failed";

export type ThreadHandoffStep = {
  id: string;
  status: ThreadHandoffStepStatus;
};

export type ThreadHandoffOperation = {
  id: string;
  sourceConversationId?: string | null;
  targetConversationId?: string | null;
  status: string;
  steps: ThreadHandoffStep[];
  errorMessage?: string | null;
  warningMessage?: string | null;
  execOutput?: unknown;
  hasUnseenTerminalState?: boolean;
};

export type ThreadHandoffOperationInput = {
  stepIds: string[];
};

export type ThreadHandoffOperationUpdate =
  | Partial<ThreadHandoffOperation>
  | ((draft: ThreadHandoffOperation) => ThreadHandoffOperation | void);

export type ThreadHandoffOperationsState = {
  activeOperationId: string | null;
  operations: ThreadHandoffOperation[];
};

export type ThreadHandoffDirection = "up" | "down";

export type ThreadHandoffOperationStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled";
