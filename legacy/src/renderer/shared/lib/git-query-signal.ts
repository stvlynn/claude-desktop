// Restored from ref/webview/assets/git-query-signal--KCsTEIa.js
// git-query-signal chunk restored from the Codex webview bundle.
import {
  _appScopeL as createComputedSignalFamily,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../runtime/app-scope";
import {
  createGitQueryOptions,
  disabledGitQueryResult,
  gitRepositoryWatcherSignal,
  gitStableMetadataQuery,
  normalizeHostConfigForWorktreeKey,
  pendingGitQueryResult,
} from "../runtime/thread-context-inputs";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type GitQueryMetadata = {
  commonDir: string;
  enabled: boolean;
  hostConfig: unknown;
  operationSource: string;
  root: string;
};
type GitQueryFromCwdParams = Omit<GitQueryMetadata, "commonDir" | "root"> & {
  cwd?: string | null;
};
type GitStableMetadata = {
  commonDir: string;
  root: string;
};
type QueryResultLike<TData> = {
  data?: TData | null;
};
type GitQueryFactoryConfig<TMetadata extends GitQueryMetadata> = {
  getOptions?: (metadata: TMetadata) => Record<string, unknown> | undefined;
  getParams: (metadata: TMetadata) => unknown;
  method: string;
};

function isGitQueryMetadata(value: unknown): value is GitQueryMetadata {
  const m = value as Partial<GitQueryMetadata>;
  return (
    typeof m === "object" &&
    m != null &&
    typeof m.commonDir === "string" &&
    typeof m.root === "string" &&
    typeof m.operationSource === "string" &&
    typeof m.enabled === "boolean"
  );
}

function isGitQueryFromCwdParams(
  value: unknown,
): value is GitQueryFromCwdParams {
  const p = value as Partial<GitQueryFromCwdParams>;
  return (
    typeof p === "object" &&
    p != null &&
    typeof p.operationSource === "string" &&
    typeof p.enabled === "boolean"
  );
}

export function gitQuerySignal<TMetadata extends GitQueryMetadata>({
  getOptions,
  getParams,
  method,
}: GitQueryFactoryConfig<TMetadata>) {
  const queryByMetadata$ = createQuerySignalFamily(
    appScopeRoot,
    (metadata: unknown) => {
      const m = metadata as TMetadata;
      return createGitQueryOptions(
        method,
        {
          commonDir: m.commonDir,
          root: m.root,
        },
        getParams(m),
        normalizeHostConfigForWorktreeKey(m.hostConfig),
        m.hostConfig,
        {
          enabled: m.enabled,
          ...getOptions?.(m),
        },
      );
    },
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  const fromMetadata$ = createComputedSignalFamily(
    appScopeRoot,
    (metadata: unknown, context: unknown) => {
      const m = metadata as TMetadata;
      const { get } = context as AppScopeGetter;
      get(
        get(gitRepositoryWatcherSignal, {
          commonDir: m.commonDir,
          enabled: m.enabled,
          hostConfig: m.hostConfig,
          operationSource: m.operationSource,
          root: m.root,
        }),
      );
      return get(queryByMetadata$, metadata);
    },
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  return {
    fromCwd$: createComputedSignalFamily(
      appScopeRoot,
      (params: unknown, context: unknown) => {
        const p = params as GitQueryFromCwdParams;
        const { get } = context as AppScopeGetter;
        if (!p.enabled || p.cwd == null) {
          return disabledGitQueryResult();
        }
        const metadataQuery = get<QueryResultLike<GitStableMetadata>>(
          gitStableMetadataQuery,
          {
            cwd: p.cwd,
            enabled: p.enabled,
            hostConfig: p.hostConfig,
            operationSource: p.operationSource,
            watchForGitInit: false,
          },
        );
        const metadata = metadataQuery.data ?? null;
        if (metadata == null) {
          return pendingGitQueryResult(metadataQuery);
        }
        const { cwd: _cwd, ...metadataParams } = p;
        return get(fromMetadata$, {
          ...metadataParams,
          commonDir: metadata.commonDir,
          root: metadata.root,
        } as TMetadata);
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    ),
    fromMetadata$,
    queryByMetadata$,
  };
}
