// Restored from ref/.vite/build/worker.js
// Read-only Git branch search helpers.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function searchBranches({
  host,
  limit,
  query,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  query: string;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const terms = normalizeBranchSearchText(query)
    .split(" ")
    .filter((term) => term.length > 0);
  if (terms.length === 0) return [];

  const localBranches = await searchBranchesForRefPattern({
    host,
    limit,
    refPattern: "refs/heads",
    root,
    signal,
    terms,
  });
  if (localBranches.length >= limit || signal.aborted) return localBranches;

  const remoteBranches = await searchBranchesForRefPattern({
    host,
    limit: limit - localBranches.length,
    refPattern: "refs/remotes",
    root,
    signal,
    terms,
  });
  const localBranchNames = new Set(localBranches);
  return [
    ...localBranches,
    ...remoteBranches.filter((branch) => !localBranchNames.has(branch)),
  ];
}

export function clampBranchSearchLimit(value: unknown): number {
  const limit =
    typeof value === "number" && Number.isFinite(value) ? value : 20;
  return Math.max(1, Math.min(Math.trunc(limit), 20));
}

async function searchBranchesForRefPattern({
  host,
  limit,
  refPattern,
  root,
  signal,
  terms,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  refPattern: "refs/heads" | "refs/remotes";
  root: string;
  signal: AbortSignal;
  terms: string[];
}): Promise<string[]> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      "--sort=-committerdate",
      refPattern,
      "--format=%(refname)",
    ],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];

  const branches: string[] = [];
  const seen = new Set<string>();
  for (const line of result.stdout.split("\n")) {
    if (branches.length >= limit) break;
    const branch = branchNameFromFullRef(line.trim());
    if (branch == null || seen.has(branch)) continue;
    const normalizedBranch = normalizeBranchSearchText(branch);
    if (!terms.every((term) => normalizedBranch.includes(term))) continue;
    seen.add(branch);
    branches.push(branch);
  }
  return branches;
}

function branchNameFromFullRef(ref: string): string | null {
  if (ref.startsWith("refs/heads/")) return ref.slice("refs/heads/".length);
  if (!ref.startsWith("refs/remotes/")) return null;
  const remoteBranch = ref.slice("refs/remotes/".length);
  const slashIndex = remoteBranch.indexOf("/");
  if (slashIndex < 0 || slashIndex === remoteBranch.length - 1) return null;
  const branch = remoteBranch.slice(slashIndex + 1);
  return branch === "HEAD" ? null : branch;
}

function normalizeBranchSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[-_/.\s]+/g, " ")
    .trim();
}
