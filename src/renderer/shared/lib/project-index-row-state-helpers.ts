// @ts-nocheck
// Restored from ref/webview/assets/projects-index-page-CJjk7dRY.js
// Helpers for deriving row state in the projects index list.

export type ThreadStatusType = "idle" | "loading" | "error";

export type ThreadStatusState = {
  type: ThreadStatusType;
  unread: boolean;
  unreadCount?: number;
};

export type LocalProjectEntry = {
  kind: "local";
};

export type RemoteProjectEntry = {
  kind: "remote";
  task: {
    has_unread_turn?: boolean;
    task_status_display?: {
      latest_turn_status_display?: {
        turn_status?: string;
      };
    };
  };
};

export type PendingWorktreeProjectEntry = {
  kind: "pending-worktree";
  pendingWorktree: {
    needsAttention?: boolean;
    phase?: string;
  };
};

export type ProjectIndexEntry =
  | LocalProjectEntry
  | RemoteProjectEntry
  | PendingWorktreeProjectEntry;

export type ProjectIndexLocalStatus = {
  localHasUnreadTurn?: boolean;
  localStatusType?: ThreadStatusType;
  localUnreadMessageCount?: number;
};

export class ProjectIndexRowStateHelpers {
  static getThreadStatusState({
    entry,
    localHasUnreadTurn,
    localStatusType,
    localUnreadMessageCount,
  }: ProjectIndexLocalStatus & { entry?: ProjectIndexEntry }): ThreadStatusState | null {
    switch (entry?.kind) {
      case "local":
        return {
          type: localStatusType ?? "idle",
          unread: localHasUnreadTurn === true,
          unreadCount: localUnreadMessageCount ?? 0,
        };
      case "remote": {
        const remoteTurnStatus =
          entry.task.task_status_display?.latest_turn_status_display?.turn_status;
        return {
          type:
            remoteTurnStatus === "in_progress" || remoteTurnStatus === "pending"
              ? "loading"
              : remoteTurnStatus === "failed"
                ? "error"
                : "idle",
          unread: entry.task.has_unread_turn === true,
        };
      }
      case "pending-worktree":
        return {
          type:
            entry.pendingWorktree.phase === "queued" ||
            entry.pendingWorktree.phase === "creating"
              ? "loading"
              : entry.pendingWorktree.phase === "failed"
                ? "error"
                : "idle",
          unread: entry.pendingWorktree.needsAttention === true,
        };
      default:
        return null;
    }
  }

  static togglePinnedProjectId(
    pinnedProjectIds: string[] | null | undefined,
    projectId: string,
  ): string[] {
    return pinnedProjectIds?.includes(projectId) === true
      ? pinnedProjectIds.filter((id) => id !== projectId)
      : [...(pinnedProjectIds ?? []), projectId];
  }

  static getEditableProjectDescriptor(project: {
    isLocalProject?: boolean;
    path?: string | null;
    projectId: string;
  }): {
    isLocalProject?: true;
    path?: string;
    projectId: string;
  } {
    if (project.isLocalProject === true) {
      return {
        isLocalProject: true,
        projectId: project.projectId,
      };
    }
    if (project.path == null) {
      return {
        projectId: project.projectId,
      };
    }
    return {
      path: project.path,
      projectId: project.projectId,
    };
  }
}
