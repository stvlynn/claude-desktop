// @ts-nocheck
// Restored from ref/webview/assets/use-codex-worktrees-DzKC3qS4.js
// Codex worktrees query hook for git host configs.
import {
  normalizeHostConfigForWorktreeKey,
  serviceClientForHost,
} from "../runtime/thread-context-inputs";
import {
  vscodeApiU as queryDurations,
  vscodeApiV as useQuery,
} from "../runtime/vscode-api-runtime";
import { once } from "../lib/once";
import { codexWorktreesQueryKey } from "./worktree-query-keys";

type QueryFunctionContext = {
  signal?: AbortSignal;
};

const initUseCodexWorktreesChunk = once(() => {});

function useCodexWorktrees(hostConfig: unknown, operationSource?: string) {
  const normalizedHostKey = normalizeHostConfigForWorktreeKey(hostConfig);
  return useQuery({
    queryKey: codexWorktreesQueryKey(normalizedHostKey as string),
    queryFn: ({ signal }: QueryFunctionContext) =>
      serviceClientForHost("git").request({
        method: "codex-worktrees",
        params: {
          hostConfig,
          operationSource,
        },
        signal,
      }),
    staleTime: queryDurations.INFINITE,
    gcTime: 1_800_000,
  });
}

export { useCodexWorktrees, initUseCodexWorktreesChunk };
