// Restored from ref/.vite/build/index.js (current unconfigured branch)

import { EventEmitter } from "node:events";

export type ClaudeAiImportAuthState =
  | { status: "signed-out" }
  | { status: "awaiting-approval"; userCode: string }
  | {
      status: "signed-in";
      account: { email: string; lastImportedAt?: number };
    }
  | {
      status: "failed";
      errorCode?: "USER_MISMATCH" | "GATEWAY_SIGNED_OUT";
    };

export type ClaudeAiImportResult = {
  ok: boolean;
  imported?: { conversations: number; projects: number; files: number };
  skipped?: number;
  error?: string;
  errorCode?: string;
};

type ClaudeAiImportEvents = {
  authStateChange: [state: ClaudeAiImportAuthState];
  authUserCode: [code: string];
};

/**
 * The current bundled configuration does not define `claudeAiImport`.
 * Preserve the reference application's exact unconfigured behavior while
 * retaining the complete IPC lifecycle for a future configured gateway.
 */
export class ClaudeAiImportService extends EventEmitter<ClaudeAiImportEvents> {
  private authState: ClaudeAiImportAuthState = { status: "signed-out" };

  isAvailable(): boolean {
    return false;
  }

  getAuthState(): ClaudeAiImportAuthState {
    return this.authState;
  }

  startAuth(): void {
    this.setAuthState({ status: "failed" });
  }

  reopenAuthTab(): void {}

  clearAuth(): void {
    this.setAuthState({ status: "signed-out" });
  }

  runImport(): ClaudeAiImportResult {
    return {
      ok: false,
      error: "not configured",
      errorCode: "NOT_CONFIGURED",
    };
  }

  private setAuthState(state: ClaudeAiImportAuthState): void {
    this.authState = state;
    this.emit("authStateChange", state);
  }
}
