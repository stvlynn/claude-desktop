// Restored from ref/webview/assets/git-config-value-query-BKgFljZW.js
// Also matches ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-BEnPH27A.js.
import { gitQuerySignal } from "./git-query-signal";
type GitConfigValueParams = {
  key: string;
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  scope?: string;
  staleTime?: number | null;
};
type GitConfigValueResponse = {
  value: unknown;
};
const gitConfigValueQuery = gitQuerySignal({
  method: "config-value",
  getParams: (params: unknown) => {
    const p = params as GitConfigValueParams;
    return {
      key: p.key,
      operationSource: p.operationSource,
      root: p.root,
      scope: p.scope,
    };
  },
  getOptions: (params: unknown) => {
    const p = params as GitConfigValueParams;
    return {
      refetchOnWindowFocus: p.refetchOnWindowFocus,
      select: (response: GitConfigValueResponse) => response.value,
      ...(p.staleTime == null
        ? {}
        : {
            staleTime: p.staleTime,
          }),
    };
  },
});
export const gitConfigValueQuerySignal = gitConfigValueQuery.fromCwd$;
export const gitConfigValueByMetadataQuerySignal =
  gitConfigValueQuery.queryByMetadata$;

export function initGitConfigValueQueryChunk(): void {}
