// Restored from ref/webview/assets/git-current-branch-query-CFP8_GIA.js
// git-current-branch-query-CFP8_GIA chunk restored from the Codex webview bundle.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../runtime/app-scope";
import { gitQuerySignal } from "./git-query-signal";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type GitCurrentBranchParams = {
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  staleTime?: number | null;
};
type GitCurrentBranchResponse = {
  branch: string | null;
};
const gitCurrentBranchQuery = gitQuerySignal({
  method: "current-branch",
  getParams: (params: unknown) => {
    const p = params as GitCurrentBranchParams;
    return {
      operationSource: p.operationSource,
      root: p.root,
    };
  },
  getOptions: (params: unknown) => {
    const p = params as GitCurrentBranchParams;
    return {
      refetchOnWindowFocus: p.refetchOnWindowFocus,
      select: (response: GitCurrentBranchResponse) => response.branch,
      ...(p.staleTime == null
        ? {}
        : {
            staleTime: p.staleTime,
          }),
    };
  },
});

export function initGitCurrentBranchQueryRuntimeChunk(): void {}

export function initGitCurrentBranchQueryChunk(): void {
  initGitCurrentBranchQueryRuntimeChunk();
}

export const gitCurrentBranchQuerySignal = gitCurrentBranchQuery.fromCwd$;
export const gitCurrentBranchSignal = createComputedSignalFamily(
  appScopeRoot,
  (params: unknown, { get }: AppScopeGetter) =>
    get<{
      data?: string | null;
    }>(gitCurrentBranchQuerySignal, params).data ?? null,
);
export const gitCurrentBranchByMetadataQuerySignal =
  gitCurrentBranchQuery.fromMetadata$;
