// Restored from ref/webview/assets/worktree-query-keys-CAJzb-Nd.js
// worktree-query-keys-CAJzb-Nd chunk restored from the Codex webview bundle.
export function worktreeSnapshotRefQueryKey(
  repositoryPath: string,
  ref?: string | null,
): string[] {
  const key = ["git", repositoryPath, "worktree-snapshot-ref"];
  return ref ? [...key, ref] : key;
}

export function codexWorktreesQueryKey(repositoryPath: string): string[] {
  return ["git", repositoryPath, "codex-worktrees"];
}
