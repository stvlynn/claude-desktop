// Restored from ref/.vite/build/index.js

export type SessionLifecycle =
  "initializing" | "running" | "idle" | "stopping" | "archived" | "error";

export type SessionPermissionMode =
  "default" | "acceptEdits" | "bypassPermissions" | "plan" | "dontAsk" | "auto";

export type SessionEffort = "low" | "medium" | "high" | "xhigh" | "max";

export interface LocalSessionStart {
  sessionId?: string;
  cwd?: string;
  message: string;
  messageUuid?: string;
  title?: string;
  model?: string;
  effort?: SessionEffort;
  permissionMode?: SessionPermissionMode;
  systemPrompt?: string;
  systemPromptAppend?: string;
  userSelectedFolders?: string[];
  additionalDirectories?: string[];
  mcpServers?: Record<string, unknown>;
  scheduledTaskId?: string;
  spaceId?: string;
  sessionType?: string;
  parentSessionId?: string;
  extendedThinkingEnabled?: boolean;
  fastMode?: boolean;
  agent?: string;
  sshConfig?: Record<string, unknown>;
  images?: Array<{ base64: string; mimeType: string }>;
}

export interface LocalSessionRecord {
  sessionId: string;
  sdkSessionId?: string;
  cwd: string;
  title: string;
  model?: string;
  effort: SessionEffort;
  permissionMode: SessionPermissionMode;
  lifecycleState: SessionLifecycle;
  createdAt: number;
  lastActivityAt: number;
  archivedAt?: number;
  scheduledTaskId?: string;
  spaceId?: string;
  sessionType?: string;
  parentSessionId?: string;
  additionalDirectories: string[];
  systemPrompt?: string;
  systemPromptAppend?: string;
  fastMode: boolean;
  extendedThinkingEnabled: boolean;
  metadata: Record<string, unknown>;
  sshConfig?: Record<string, unknown>;
  mcpServers?: Record<string, unknown>;
}

export interface PendingToolPermission {
  sessionId: string;
  requestId: string;
  toolName: string;
  input: Record<string, unknown>;
  suggestions?: unknown[];
  blockedPath?: string;
  title?: string;
  displayName?: string;
  description?: string;
}

export function assertSessionId(value: string): void {
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
  ) {
    throw new Error("Invalid session id");
  }
}
