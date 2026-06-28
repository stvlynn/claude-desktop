// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// App tool-source metadata helpers used by MCP summary panels.
import {
  ay as formatIdentifierTitleRaw,
  ny as initAppToolSourceMatcherCache,
  oy as initIdentifierTitleFormatter,
  ty as getAppToolSourceMetadataRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Ar as parseMcpAppIdFromToolCallIdRaw,
  Mr as initMcpAppIdHelpersRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";

export type AppToolSourceLookup = {
  apps: readonly unknown[];
  functionName: string;
  serverName?: string;
  toolName?: string;
};

export type AppToolSourceMetadata = {
  id: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  name: string;
  pluginDisplayNames?: string[];
};

export function initAppToolSourceRuntime(): void {
  initAppToolSourceMatcherCache();
  initIdentifierTitleFormatter();
}

export function initMcpAppIdHelpers(): void {
  initMcpAppIdHelpersRaw();
}

export function getAppToolSourceMetadata(
  lookup: AppToolSourceLookup,
): AppToolSourceMetadata | null {
  return getAppToolSourceMetadataRaw(lookup) as AppToolSourceMetadata | null;
}

export function formatIdentifierTitle(identifier: string): string {
  return formatIdentifierTitleRaw(identifier);
}

export function parseMcpAppIdFromToolCallId(
  toolCallId: string | null | undefined,
): string | null {
  return parseMcpAppIdFromToolCallIdRaw(toolCallId) as string | null;
}
