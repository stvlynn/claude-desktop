// Restored from ref/webview/assets/config-BsjQno5-.js
// @ts-nocheck
// Query options for the user-saved config view of host configuration.
import {
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
} from "../../shared/boundaries/app-scope";
import {
  Hi as parseUserSavedConfig,
  gt as availableHostIdsSignal,
} from "../../shared/boundaries/thread-context-inputs.facade";
import { vscodeApiU as queryTimes } from "../../shared/boundaries/vscode-api";
import { readConfigForHost } from "./config-queries";
import { queryOptions } from "../../shared/lib/query-options";
const USER_SAVED_CONFIG_QUERY_KEY = ["user-saved-config"];

export function initUserSavedConfigQueryChunk(): void {}

function createUserSavedConfigQueryOptions({
  queryClient,
  hostId,
  cwd,
  enabled,
}: {
  cwd: string | null;
  enabled: boolean;
  hostId: string;
  queryClient: {
    fetchQuery: (options: Record<string, unknown>) => Promise<any>;
  };
}) {
  return queryOptions({
    enabled,
    queryFn: async () => {
      try {
        return parseUserSavedConfig(
          (await readConfigForHost(queryClient, hostId, cwd, false)).config,
        );
      } catch {
        return null;
      }
    },
    queryKey: [...USER_SAVED_CONFIG_QUERY_KEY, hostId, cwd],
    staleTime: queryTimes.FIVE_MINUTES,
  });
}
const userSavedConfigQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (
    {
      cwd = null,
      hostId,
    }: {
      cwd?: string | null;
      hostId: string;
    },
    {
      get,
      queryClient,
    }: {
      get: <Value>(signal: unknown) => Value;
      queryClient: {
        fetchQuery: (options: Record<string, unknown>) => Promise<any>;
      };
    },
  ) =>
    createUserSavedConfigQueryOptions({
      queryClient,
      hostId,
      cwd,
      enabled: get<string[]>(availableHostIdsSignal).includes(hostId),
    }),
);
export {
  userSavedConfigQueryOptions,
  createUserSavedConfigQueryOptions,
  USER_SAVED_CONFIG_QUERY_KEY,
};
