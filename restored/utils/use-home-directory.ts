// Restored from ref/webview/assets/use-home-directory-7PtGooXU.js
// Home directory query hooks for a selected host.

import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import {
  AB as initScopeRuntime,
  Uf as initHostWorkspaceQueries,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import { homeDirectoryQuery } from "../boundaries/thread-context-inputs.facade";

type HomeDirectoryQueryResult = {
  data?: {
    homeDirectory?: string | null;
  };
};

export function initUseHomeDirectoryChunk() {
  initScopeRuntime();
  initHostWorkspaceQueries();
}

export function useHomeDirectoryQuery(
  hostId?: string | null,
): HomeDirectoryQueryResult {
  const queryParams =
    hostId == null
      ? undefined
      : {
          hostId,
        };
  return useScopedSignalValue(homeDirectoryQuery, queryParams);
}
export function useHomeDirectory(
  hostId?: string | null,
): string | null | undefined {
  return useHomeDirectoryQuery(hostId).data?.homeDirectory;
}
