// Restored from ref/.vite/build/worker.js
// Synced-branch state reader for Git worker branch synchronization UI.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type SyncedBranchState = {
  branch: string | null;
  base: string | null;
  hasConflicts: boolean;
};

type SyncedBranchConfig = {
  branch: string;
  lastSyncedTreeRef: string;
};

export async function readSyncedBranch({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<SyncedBranchState> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return emptySyncedBranchState();

  const config = await readSyncedBranchConfig(host, metadata.root, signal);
  if (config == null) return emptySyncedBranchState();

  return {
    branch: normalizeBranchName(config.branch),
    base: config.lastSyncedTreeRef,
    hasConflicts: await hasMergeConflicts(host, metadata.root, signal),
  };
}

function emptySyncedBranchState(): SyncedBranchState {
  return {
    branch: null,
    base: null,
    hasConflicts: false,
  };
}

async function hasMergeConflicts(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<boolean> {
  const result = await runGitCommand({
    args: ["ls-files", "-u"],
    cwd: root,
    host,
    signal,
  });
  return result.success ? result.stdout.trim().length > 0 : false;
}

async function readSyncedBranchConfig(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<SyncedBranchConfig | null> {
  const gitDir = await readGitDir(host, root, signal);
  if (gitDir == null) return null;

  const pathApi = await host.platformPath();
  const configPath = pathApi.join(gitDir, "codex-synced-branch.json");
  try {
    const contents = await new Response(
      (await host.readFile(configPath)) as unknown as BodyInit,
    ).text();
    return parseSyncedBranchConfig(contents);
  } catch {
    return null;
  }
}

async function readGitDir(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}

function parseSyncedBranchConfig(value: string): SyncedBranchConfig | null {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!isRecord(parsed)) return null;
    const { branch, lastSyncedTreeRef } = parsed;
    return typeof branch === "string" && typeof lastSyncedTreeRef === "string"
      ? { branch, lastSyncedTreeRef }
      : null;
  } catch {
    return null;
  }
}

function normalizeBranchName(branch: string): string {
  return branch.startsWith("refs/heads/") ? branch.slice(11) : branch;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
