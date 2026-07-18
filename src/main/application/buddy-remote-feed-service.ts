// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { desktopLogger } from "./desktop-logger";

type PendingToolPermission = {
  requestId: string;
  toolName: string;
  [key: string]: unknown;
};

type RemoteFeedSession = {
  isRunning: boolean;
  pendingToolPermissions: PendingToolPermission[];
  sessionId: string;
};

const feedChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "BuddyRemoteFeed", method);

function parseSessions(value: unknown): RemoteFeedSession[] {
  if (!Array.isArray(value)) {
    throw new TypeError("BuddyRemoteFeed.sync expects an array");
  }
  for (const session of value) {
    if (
      typeof session !== "object" ||
      session == null ||
      typeof session.sessionId !== "string" ||
      typeof session.isRunning !== "boolean" ||
      !Array.isArray(session.pendingToolPermissions) ||
      session.pendingToolPermissions.some(
        (permission: unknown) =>
          typeof permission !== "object" ||
          permission == null ||
          typeof (permission as Record<string, unknown>).requestId !==
            "string" ||
          typeof (permission as Record<string, unknown>).toolName !== "string",
      )
    ) {
      throw new TypeError("BuddyRemoteFeed.sync received an invalid session");
    }
  }
  return value as RemoteFeedSession[];
}

export class BuddyRemoteFeedService {
  private mainView: WebContents | null = null;
  private sessions: RemoteFeedSession[] = [];

  register(mainView: WebContents): () => void {
    this.mainView = mainView;
    const syncChannel = feedChannel("sync");
    ipcMain.handle(syncChannel, (event, value: unknown) => {
      if (event.sender !== mainView) {
        throw new Error("Rejected BuddyRemoteFeed.sync from an untrusted view");
      }
      this.sessions = parseSessions(value);
    });
    const clear = (): void => {
      if (this.mainView === mainView) {
        this.mainView = null;
        this.sessions = [];
      }
    };
    mainView.once("destroyed", clear);
    return () => {
      ipcMain.removeHandler(syncChannel);
      mainView.off("destroyed", clear);
      clear();
    };
  }

  getAllSessions(): readonly RemoteFeedSession[] {
    return this.sessions;
  }

  respondToToolPermission(requestId: string, decision: string): boolean {
    const mainView = this.mainView;
    if (!mainView || mainView.isDestroyed()) return false;
    for (const session of this.sessions) {
      const permission = session.pendingToolPermissions.find(
        (candidate) => candidate.requestId === requestId,
      );
      if (!permission) continue;
      desktopLogger.info("[BuddyRemoteFeed] forwarding permission decision", {
        sessionId: session.sessionId,
        toolName: permission.toolName,
      });
      mainView.send(
        feedChannel("permissionDecision"),
        session.sessionId,
        requestId,
        decision,
      );
      return true;
    }
    return false;
  }
}
