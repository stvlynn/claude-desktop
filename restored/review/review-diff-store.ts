// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core review-diff model state: the diff-target / commit / base-branch atoms, the git
// query families (summary, branch commits, index info, diff stats, per-file diff), the
// derived enablement / source / file-map selectors, and the imperative refresh actions.

import nodePath from "node:path";
import {
  createScopedAtom,
  createComputedAtom,
  createComputedQueryAtom,
  createScopedQueryAtom,
  createParametricStateAtom,
  appAtomScope,
  threadAtomScope,
  reviewMetadataScope,
  hideWhitespaceAtom,
  createGitQueryOptions,
  getHostKey,
  disabledQueryResult,
  pendingQueryResult,
  timeConstants,
  clearGitStatusCache,
  invalidateReviewDiffQueries,
  invalidateGitQueries,
  RequestAbortedError,
  buildReviewDiffQueryKey,
  parseUnifiedDiff,
  normalizeRequestCwd,
  buildGitMetadataQueryOptions,
  reviewBaseBranchOverrideKey,
  isDeepEqual,
  joinPath,
} from "../boundaries/onboarding-commons-externals.facade";
import { requestReviewFileDiff } from "./review-diff-request-batcher";
import { toAbsoluteGitPath } from "../utils/git-relative-display-path";
import {
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
} from "./thread-review-context";
import {
  reviewGitMetadataQueryAtom,
  reviewCurrentBranchQueryAtom,
  workspaceReviewContextAtom,
} from "./review-git-metadata";
import {
  reviewDiffFilterAtom,
  setReviewDiffFilter,
  formatBranchRef,
  refreshReviewDiff,
} from "./review-diff-model";

export type ReviewDiffFilter =
  | "staged"
  | "unstaged"
  | "branch"
  | "commit"
  | "last-turn";

interface ReviewStore {
  get(atom: unknown, ...args: unknown[]): any;
  set(atom: unknown, ...args: unknown[]): void;
  watch(callback: (store: ReviewStore) => void): () => void;
  query: { snapshot(atom: unknown, params: unknown): any };
  queryClient: unknown;
}

interface ComputedAtomContext {
  get: (atom: unknown, arg?: unknown) => any;
  scope: { value: any };
}

interface GitMetadata {
  commonDir: string;
  root: string;
}

interface QueryResult<TData = unknown> {
  data?: TData;
  dataUpdatedAt: number;
  error: unknown;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch: (options?: unknown) => Promise<unknown>;
}

const MAX_REVIEW_DIFF_RETRIES = 3;
const REVIEW_DIFF_RETRY_BASE_MS = 300;
const REVIEW_SUMMARY_ERROR_REFETCH_MS = 1000;
const RECENT_BRANCHES_LIMIT = 30;
const REVIEW_SUMMARY_FAILED_ERROR = Error("Review summary failed");

// --- Diff-target / commit / base-branch state ---------------------------------

// Raw diff text + path for an externally-supplied review target (e.g. a turn patch).
export const reviewDiffTargetTextAtom = createScopedAtom(threadAtomScope, null);
export const reviewDiffTargetPathAtom = createScopedAtom(threadAtomScope, null);
export const reviewCommitShaAtom = createScopedAtom(appAtomScope, null);

export const reviewDiffTargetPathReadonlyAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => get(reviewDiffTargetPathAtom),
);

// Per-scope override of the base branch used for branch diffs.
export const reviewBaseBranchOverrideAtom = createParametricStateAtom(
  reviewMetadataScope,
  () => null,
);
export const reviewBaseBranchOverrideForScopeAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext) =>
    get(reviewBaseBranchOverrideAtom, reviewBaseBranchOverrideKey(scope.value)),
);

export const isReviewRefreshingAtom = createScopedAtom(threadAtomScope, false);

// --- Pure helpers -------------------------------------------------------------

export function isIndexDiffFilter(filter: ReviewDiffFilter): boolean {
  return filter === "staged" || filter === "unstaged";
}

// Merges two query results into a single view: data/error provided by the caller,
// pending/fetching folded together, refetch fanning out to both underlying queries.
export function mergeQueryResults<TData>(
  primary: QueryResult,
  secondary: QueryResult,
  data: TData | null | undefined,
  error: unknown = null,
): QueryResult<TData> {
  const isFetching = primary.isFetching || secondary.isFetching;
  const isPending =
    primary.isPending ||
    (!primary.isError && data === undefined && secondary.isPending);
  return {
    ...primary,
    data: data ?? undefined,
    dataUpdatedAt: Math.max(primary.dataUpdatedAt, secondary.dataUpdatedAt),
    error: primary.error ?? secondary.error ?? error,
    isError: primary.isError || secondary.isError || error != null,
    isFetching,
    isLoading: isPending && isFetching,
    isPending,
    refetch: async (options?: unknown) => {
      const [, secondaryResult] = await Promise.all([
        primary.refetch(options),
        secondary.refetch(options),
      ]);
      return secondaryResult;
    },
  };
}

interface ReviewSummaryRequestInput {
  cwd: string | null;
  hideWhitespace: boolean;
  source: string | null;
  baseBranch: string | null;
  commitSha: string | null;
}

// RPC params for the review-summary / review-diff git methods.
export function buildReviewSummaryQueryParams({
  cwd,
  hideWhitespace,
  source,
  baseBranch,
  commitSha,
}: ReviewSummaryRequestInput): Record<string, unknown> {
  return {
    cwd: normalizeRequestCwd(cwd),
    ...(hideWhitespace ? { hideWhitespace } : {}),
    operationSource: "review_model",
    source,
    ...(source === "branch" && baseBranch != null ? { baseBranch } : {}),
    ...(source === "commit" && commitSha != null ? { commitSha } : {}),
  };
}

export function resolveReviewBaseBranch(
  branchRef: { local: string | null; remote: string | null } | null,
  override: string | null = null,
): string | null {
  return override ?? formatBranchRef(branchRef);
}

export function toRepoRelativePaths({
  cwd,
  gitRoot,
  paths,
}: {
  cwd: string | null;
  gitRoot: string | null;
  paths: string[];
}): string[] {
  if (cwd == null || gitRoot == null) return [];
  const base = joinPath("", gitRoot);
  return [
    ...new Set(
      paths.flatMap((path) => {
        if (path === "") return [];
        const relative = nodePath.relative(base, joinPath(cwd, path));
        return relative === "" ||
          relative === ".." ||
          relative.startsWith("../")
          ? []
          : [relative];
      }),
    ),
  ];
}

export function parseReviewDiff(diffText: string | null | undefined): {
  diff: unknown;
  diffText: string | null;
  diffBytes: number | null;
  diffError: null;
} {
  return diffText == null || diffText.trim() === ""
    ? { diff: null, diffText: null, diffBytes: null, diffError: null }
    : {
        diff: parseUnifiedDiff(diffText),
        diffText,
        diffBytes: new TextEncoder().encode(diffText).length,
        diffError: null,
      };
}

function shouldRetryReviewDiff(
  attempt: number,
  error: { name: string },
): boolean {
  return error.name !== "AbortError" && attempt < MAX_REVIEW_DIFF_RETRIES;
}

function reviewDiffRetryDelay(attempt: number): number {
  return Math.min(REVIEW_DIFF_RETRY_BASE_MS * 2 ** attempt, 2000);
}

function queryKeysShareBaseExceptLast(a: unknown[], b: unknown[]): boolean {
  return (
    a.length > 0 &&
    a.length === b.length &&
    isDeepEqual(a.slice(0, -1), b.slice(0, -1))
  );
}

function buildReviewSummaryParams({
  baseBranch,
  commitSha,
  cwd,
  enabled,
  hideWhitespace,
  hostConfig,
  metadata,
  source,
}: {
  baseBranch: string | null;
  commitSha: string | null;
  cwd: string | null;
  enabled: boolean;
  hideWhitespace: boolean;
  hostConfig: unknown;
  metadata: GitMetadata | null;
  source: ReviewDiffFilter | null;
}) {
  return metadata == null || cwd == null || source == null
    ? null
    : {
        baseBranch,
        commitSha,
        commonDir: metadata.commonDir,
        cwd,
        enabled,
        hideWhitespace,
        hostConfig,
        root: metadata.root,
        source,
      };
}

// --- Derived enablement / source selectors ------------------------------------

export const reviewLocationKindAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext): "cloud" | "worktree" | "local" =>
    scope.value.routeKind === "remote-thread"
      ? "cloud"
      : get(workspaceReviewContextAtom).isCodexWorktree
        ? "worktree"
        : "local",
);

export const isReviewDiffEnabledAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean => {
    const filter: ReviewDiffFilter = get(reviewDiffFilterAtom);
    return (
      get(reviewCwdAtom) != null &&
      get(reviewLocationKindAtom) !== "cloud" &&
      filter !== "last-turn" &&
      (filter !== "commit" || get(reviewCommitShaAtom) != null)
    );
  },
);

export const reviewDiffSourceAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewDiffFilter | null => {
    const filter: ReviewDiffFilter = get(reviewDiffFilterAtom);
    return filter === "last-turn" ||
      (filter === "commit" && get(reviewCommitShaAtom) == null)
      ? null
      : filter;
  },
);

export const isReviewBranchModeAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    get(isReviewDiffEnabledAtom) && get(reviewDiffFilterAtom) === "branch",
);

export const isReviewIndexModeAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    get(isReviewDiffEnabledAtom) &&
    isIndexDiffFilter(get(reviewDiffFilterAtom)),
);

// --- Git metadata readiness / root --------------------------------------------

export const reviewGitMetadataReadinessQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    buildGitMetadataQueryOptions(
      get(reviewDiffTargetPathAtom),
      get(reviewHostKeyAtom),
      get(reviewHostConfigAtom),
      "review_model",
      { watchForGitInit: true },
    ),
);

export const reviewRootAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    get(reviewGitMetadataReadinessQueryAtom).data?.root ??
    get(reviewDiffTargetPathAtom),
);

// --- Base branch / recent branches / branch commits ---------------------------

export const reviewBaseBranchQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "base-branch",
      { commonDir: metadata.commonDir, root: metadata.root },
      { operationSource: "review_model", root: metadata.root },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
    ),
);

export const reviewBaseBranchQueryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    return metadata == null
      ? pendingQueryResult(metadataQuery)
      : get(reviewBaseBranchQueryFamily, {
          commonDir: metadata.commonDir,
          hostConfig: get(reviewHostConfigAtom),
          root: metadata.root,
        });
  },
);

export const reviewCurrentBranchAtom = reviewCurrentBranchQueryAtom;

export const reviewRecentBranchesQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const metadata: GitMetadata | null =
      get(reviewGitMetadataQueryAtom).data ?? null;
    return createGitQueryOptions(
      "recent-branches",
      metadata,
      metadata == null
        ? null
        : {
            limit: RECENT_BRANCHES_LIMIT,
            operationSource: "review_model",
            root: metadata.root,
          },
      hostKey,
      hostConfig,
    );
  },
);

export const reviewBaseBranchAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    resolveReviewBaseBranch(
      get(reviewBaseBranchQueryAtom).data ?? null,
      get(reviewBaseBranchOverrideForScopeAtom),
    ),
);

export const reviewBranchCommitsQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const metadata: GitMetadata | null =
      get(reviewGitMetadataQueryAtom).data ?? null;
    const baseBranch = get(reviewBaseBranchAtom);
    return createGitQueryOptions(
      "branch-commits",
      metadata,
      metadata == null
        ? null
        : {
            baseBranch: baseBranch ?? undefined,
            operationSource: "review_model",
            root: metadata.root,
          },
      hostKey,
      hostConfig,
      { staleTime: timeConstants.FIVE_SECONDS },
    );
  },
);

// --- Index info ---------------------------------------------------------------

export const reviewIndexInfoQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "index-info",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        cwd: normalizeRequestCwd(metadata.cwd),
        operationSource: "review_model",
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      { refetchOnWindowFocus: true, staleTime: timeConstants.FIVE_SECONDS },
    ),
);

export const reviewIndexInfoQueryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const isIndexMode = get(isReviewIndexModeAtom);
    const cwd = get(reviewCwdAtom);
    if (!isIndexMode || cwd == null) return disabledQueryResult();
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    return metadata == null
      ? pendingQueryResult(metadataQuery)
      : get(reviewIndexInfoQueryFamily, {
          commonDir: metadata.commonDir,
          cwd,
          hostConfig: get(reviewHostConfigAtom),
          root: metadata.root,
        });
  },
);

// --- Review summary / diff stats ----------------------------------------------

export const reviewSummaryQueryAtom = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "review-summary",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        ...buildReviewSummaryQueryParams({
          cwd: metadata.cwd,
          hideWhitespace: metadata.hideWhitespace,
          source: metadata.source,
          baseBranch: metadata.baseBranch,
          commitSha: metadata.commitSha,
        }),
        includeUntrackedFiles: metadata.includeUntrackedFiles,
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      {
        enabled: metadata.enabled,
        refetchInterval: (query: any) =>
          query.state.data?.type === "error"
            ? REVIEW_SUMMARY_ERROR_REFETCH_MS
            : false,
        refetchIntervalInBackground: true,
        refetchOnMount:
          metadata.includeUntrackedFiles === false ? "always" : false,
        refetchOnWindowFocus: true,
        staleTime: timeConstants.FIVE_SECONDS,
      },
    ),
);

export const reviewBranchDiffStatsQueryFamily = createScopedQueryAtom(
  reviewMetadataScope,
  (metadata: any) =>
    createGitQueryOptions(
      "branch-diff-stats",
      { commonDir: metadata.commonDir, root: metadata.root },
      {
        cwd: normalizeRequestCwd(metadata.cwd),
        baseBranch: metadata.baseBranch ?? undefined,
        ...(metadata.hideWhitespace ? { hideWhitespace: true } : {}),
        includeUntrackedFiles: metadata.includeUntrackedFiles,
        operationSource: "review_model",
      },
      getHostKey(metadata.hostConfig),
      metadata.hostConfig,
      { enabled: metadata.enabled, staleTime: timeConstants.FIVE_SECONDS },
    ),
);

export const reviewDiffStatsAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    const cwd = get(reviewCwdAtom);
    const baseBranchQuery = get(reviewBaseBranchQueryAtom);
    const waitingForBaseBranch =
      baseBranchQuery.data == null && baseBranchQuery.isFetching;
    if (metadata == null) return pendingQueryResult(metadataQuery);
    if (cwd == null || get(reviewLocationKindAtom) === "cloud")
      return disabledQueryResult();
    const sharedParams = {
      baseBranch: get(reviewBaseBranchAtom),
      commonDir: metadata.commonDir,
      cwd,
      enabled: !waitingForBaseBranch,
      hideWhitespace: get(hideWhitespaceAtom),
      hostConfig: get(reviewHostConfigAtom),
      includeUntrackedFiles: true,
      root: metadata.root,
    };
    const trackedStats = get(reviewBranchDiffStatsQueryFamily, {
      ...sharedParams,
      includeUntrackedFiles: false,
    });
    const allStats = get(reviewBranchDiffStatsQueryFamily, sharedParams);
    const trackedData =
      trackedStats.data != null && trackedStats.data.fileCount > 0
        ? trackedStats.data
        : undefined;
    return mergeQueryResults(
      trackedStats,
      allStats,
      ((allStats.isFetching && !trackedStats.isFetching) || allStats.isError
        ? trackedData
        : (allStats.data ?? trackedData)) ??
        (allStats.isPending ? undefined : null),
    );
  },
);

export const reviewSummaryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    const source: ReviewDiffFilter | null = get(reviewDiffSourceAtom);
    const baseBranchQuery = get(reviewBaseBranchQueryAtom);
    const waitingForBaseBranch =
      source === "branch" &&
      baseBranchQuery.data == null &&
      baseBranchQuery.isFetching;
    const params = buildReviewSummaryParams({
      baseBranch: get(reviewBaseBranchAtom),
      commitSha: get(reviewCommitShaAtom),
      cwd: get(reviewCwdAtom),
      enabled: get(isReviewDiffEnabledAtom) && !waitingForBaseBranch,
      hideWhitespace: get(hideWhitespaceAtom),
      hostConfig: get(reviewHostConfigAtom),
      metadata,
      source,
    });
    if (params == null)
      return metadata == null
        ? pendingQueryResult(metadataQuery)
        : disabledQueryResult();
    if (source !== "branch" && source !== "unstaged")
      return get(reviewSummaryQueryAtom, params);
    const summaryWithUntracked = get(reviewSummaryQueryAtom, params);
    if (
      summaryWithUntracked.data?.type === "success" &&
      !summaryWithUntracked.isError
    )
      return summaryWithUntracked;
    const summaryTrackedOnly = get(reviewSummaryQueryAtom, {
      ...params,
      includeUntrackedFiles: false,
    });
    return mergeQueryResults(
      summaryTrackedOnly,
      summaryWithUntracked,
      summaryWithUntracked.isPending &&
        (summaryTrackedOnly.data?.type !== "success" ||
          summaryTrackedOnly.data.files.length === 0)
        ? undefined
        : summaryTrackedOnly.data,
      summaryWithUntracked.data?.type === "error"
        ? REVIEW_SUMMARY_FAILED_ERROR
        : null,
    );
  },
);

// Map of absolute git path -> review file entry from the current review summary.
export const reviewFilesByDisplayPathAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): Map<string, any> | null => {
    const summary = get(reviewSummaryAtom).data;
    if (summary?.type !== "success") return null;
    const gitRoot = get(reviewGitMetadataQueryAtom).data?.root ?? null;
    const filesByPath = new Map<string, any>();
    for (const file of summary.files) {
      const absolutePath = toAbsoluteGitPath({ gitRoot, gitPath: file.path });
      if (!filesByPath.has(absolutePath)) filesByPath.set(absolutePath, file);
    }
    return filesByPath;
  },
);

// --- Per-file diff query ------------------------------------------------------

export const reviewFileDiffQueryFamily = createScopedQueryAtom(
  threadAtomScope,
  (path: string, { get }: { get: (atom: unknown, arg?: unknown) => any }) => {
    const metadata = get(reviewGitMetadataQueryAtom).data;
    const summary = get(reviewSummaryAtom).data;
    const fileEntry = get(reviewFilesByDisplayPathAtom)?.get(path) ?? null;
    const cwd = get(reviewCwdAtom);
    const baseBranch = get(reviewBaseBranchAtom);
    const commitSha = get(reviewCommitShaAtom);
    const hostConfig = get(reviewHostConfigAtom);
    const hostKey = get(reviewHostKeyAtom);
    const hideWhitespace = get(hideWhitespaceAtom);
    const queryKey =
      metadata != null &&
      summary?.type === "success" &&
      fileEntry != null &&
      cwd != null
        ? [
            ...buildReviewDiffQueryKey({
              metadata,
              method: "review-diff",
              params: {
                ...buildReviewSummaryQueryParams({
                  cwd,
                  hideWhitespace,
                  source: summary.source,
                  baseBranch,
                  commitSha,
                }),
                files: [
                  {
                    path,
                    changeKind: fileEntry.changeKind,
                    previousPath: fileEntry.previousPath ?? undefined,
                  },
                ],
              },
              hostKey,
            }),
            fileEntry.revision,
          ]
        : ["git", "disabled", "review-diff", path];
    return {
      queryKey,
      queryFn: async ({ signal }: { signal: AbortSignal }) => {
        if (summary?.type !== "success" || fileEntry == null || cwd == null)
          throw Error("Missing review diff metadata");
        return requestReviewFileDiff({
          baseBranch,
          commitSha,
          changeKind: fileEntry.changeKind,
          cwd,
          hideWhitespace,
          hostConfig,
          path,
          previousPath: fileEntry.previousPath,
          signal,
          source: summary.source,
        });
      },
      enabled:
        get(isReviewDiffEnabledAtom) &&
        metadata != null &&
        summary?.type === "success" &&
        fileEntry != null &&
        cwd != null,
      refetchOnWindowFocus: true,
      retry: shouldRetryReviewDiff,
      retryDelay: reviewDiffRetryDelay,
      staleTime: timeConstants.FIVE_SECONDS,
      placeholderData: (
        previous: unknown,
        previousQuery: { queryKey: unknown[] } | null,
      ) => {
        if (
          !(
            previousQuery == null ||
            !queryKeysShareBaseExceptLast(queryKey, previousQuery.queryKey)
          )
        )
          return previous;
      },
    };
  },
);

export const reviewDiffTargetParsedAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    parseReviewDiff(get(reviewDiffTargetTextAtom)),
);

// --- Imperative actions -------------------------------------------------------

function resolveReviewSummaryQuery(
  store: ReviewStore,
  source: ReviewDiffFilter | null = store.get(reviewDiffSourceAtom),
) {
  const baseBranchQuery = store.get(reviewBaseBranchQueryAtom);
  const waitingForBaseBranch =
    source === "branch" &&
    baseBranchQuery.data == null &&
    baseBranchQuery.isFetching;
  const params = buildReviewSummaryParams({
    baseBranch: store.get(reviewBaseBranchAtom),
    commitSha: store.get(reviewCommitShaAtom),
    cwd: store.get(reviewCwdAtom),
    enabled: store.get(isReviewDiffEnabledAtom) && !waitingForBaseBranch,
    hideWhitespace: store.get(hideWhitespaceAtom),
    hostConfig: store.get(reviewHostConfigAtom),
    metadata: store.get(reviewGitMetadataQueryAtom).data ?? null,
    source,
  });
  return params == null
    ? null
    : store.query.snapshot(reviewSummaryQueryAtom, params);
}

async function refetchReviewSummaryQuery(store: ReviewStore): Promise<void> {
  const query = resolveReviewSummaryQuery(store);
  if (query == null || query.getOptions().enabled === false) return;
  await query.getOrFetch();
}

async function invalidateAndRefetchReviewDiff(
  store: ReviewStore,
  metadata: GitMetadata,
): Promise<void> {
  try {
    await Promise.all([
      invalidateReviewDiffQueries(store.queryClient, metadata, {
        hostKey: store.get(reviewHostKeyAtom),
      }),
      refetchReviewSummaryQuery(store),
    ]);
  } catch (error) {
    if (!(error instanceof RequestAbortedError)) throw error;
  }
}

export async function refetchReviewFileDiff(
  store: ReviewStore,
  path: string,
): Promise<void> {
  await store.get(reviewFileDiffQueryFamily, path).refetch();
}

export async function refreshReviewFilesForPaths(
  store: ReviewStore,
  paths: string[],
): Promise<void> {
  const metadata: GitMetadata | undefined = store.get(
    reviewGitMetadataQueryAtom,
  ).data;
  const cwd = store.get(reviewCwdAtom);
  const relativePaths = toRepoRelativePaths({
    cwd,
    gitRoot: metadata?.root ?? null,
    paths,
  });
  if (
    !(
      !store.get(isReviewDiffEnabledAtom) ||
      metadata == null ||
      cwd == null ||
      relativePaths.length === 0
    )
  ) {
    try {
      await clearGitStatusCache({
        clearUntrackedPathsCache: false,
        hostConfig: store.get(reviewHostConfigAtom),
        operationSource: "review_model",
        paths: relativePaths,
        root: metadata.root,
      });
    } catch {}
    await invalidateAndRefetchReviewDiff(store, metadata);
  }
}

export async function refreshReviewIndexInfo(
  store: ReviewStore,
): Promise<void> {
  if (store.get(isReviewIndexModeAtom))
    await store.get(reviewIndexInfoQueryAtom).refetch();
}

export function setReviewDiffTarget(
  store: ReviewStore,
  diffText: string | null,
  path: string | null,
): void {
  store.set(reviewDiffTargetTextAtom, diffText);
  store.set(reviewDiffTargetPathAtom, path);
}

export function selectReviewCommit(
  store: ReviewStore,
  commitSha: string | null,
): void {
  store.set(reviewCommitShaAtom, commitSha);
  setReviewDiffFilter(store, "commit");
}

// Keeps the selected commit / branch consistent and refreshes the diff when relevant
// inputs change. Returns the unsubscribe function.
export function watchReviewDiffEffect(store: ReviewStore): () => void {
  return store.watch((current) => {
    if (current.get(reviewDiffFilterAtom) === "commit") {
      const commitSha = current.get(reviewCommitShaAtom);
      if (commitSha == null) {
        setReviewDiffFilter(current, "branch");
        return;
      }
      const commits = current.get(reviewBranchCommitsQueryAtom).data?.commits;
      if (
        !(
          commits == null ||
          commits.some((commit: { sha: string }) => commit.sha === commitSha)
        )
      ) {
        current.set(reviewCommitShaAtom, null);
        setReviewDiffFilter(current, "branch");
        return;
      }
    }
    const source = current.get(reviewDiffSourceAtom);
    if (source === "branch") current.get(reviewBaseBranchAtom);
    if (
      current.get(reviewGitMetadataQueryAtom).data != null &&
      (current.get(reviewDiffTargetTextAtom) != null ||
        (current.get(isReviewDiffEnabledAtom) && source != null))
    )
      refreshReviewDiff(store);
  });
}
