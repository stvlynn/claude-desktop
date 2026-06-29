// Restored from ref/.vite/build/worker.js
// Git worktree list reader and porcelain parser.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitWorktreeHeadRef =
  | {
      sha: string;
      type: "branch";
      string: string;
    }
  | {
      sha: string;
      type: "detached";
    };

export type GitWorktreeEntry = {
  root: string;
  prunable: boolean;
  locked: boolean;
  headRef: GitWorktreeHeadRef;
};

export async function listWorktrees({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<GitWorktreeEntry[]> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return [];

  const result = await runGitCommand({
    args: ["worktree", "list", "--porcelain"],
    cwd: metadata.root,
    host,
    signal,
  });
  if (!result.success) {
    throw Error(
      result.stderr ||
        result.stdout ||
        "Failed to list worktrees for repository",
    );
  }
  return parseWorktreePorcelain(result.stdout ?? "");
}

function parseWorktreePorcelain(value: string): GitWorktreeEntry[] {
  const worktrees: GitWorktreeEntry[] = [];
  let current: GitWorktreeEntry | null = null;

  for (const line of value.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      if (current != null) {
        worktrees.push(current);
        current = null;
      }
      continue;
    }

    if (trimmed.startsWith("worktree ")) {
      if (current != null) worktrees.push(current);
      const root = trimmed.slice("worktree ".length).trim();
      current =
        root.length === 0
          ? null
          : {
              root,
              prunable: false,
              locked: false,
              headRef: {
                sha: "",
                type: "detached",
              },
            };
      continue;
    }

    if (current == null) continue;
    if (trimmed.startsWith("HEAD ")) {
      current.headRef = {
        sha: trimmed.slice("HEAD ".length).trim(),
        type: "detached",
      };
      continue;
    }
    if (trimmed.startsWith("branch ")) {
      const branchRef = trimmed.slice("branch ".length).trim();
      current.headRef = {
        sha: current.headRef.sha,
        type: "branch",
        string: branchRef.startsWith("refs/heads/")
          ? branchRef.slice("refs/heads/".length)
          : branchRef,
      };
      continue;
    }
    if (trimmed === "detached") {
      current.headRef = {
        sha: current.headRef.sha,
        type: "detached",
      };
      continue;
    }
    if (trimmed.startsWith("prunable")) {
      current.prunable = true;
      continue;
    }
    if (trimmed.startsWith("locked")) {
      current.locked = true;
    }
  }

  if (current != null) worktrees.push(current);
  return worktrees;
}
