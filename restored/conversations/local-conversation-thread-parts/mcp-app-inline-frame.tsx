// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline MCP app frames rendered for `mcp-tool-call` timeline items: gates each call by
// its expansion atom, resolves the resource URI / tool result, and mounts the McpAppInlineFrame.
import * as React from "react";
import { useIntl } from "../../vendor/react-intl";
import {
  McpAppInlineFrame,
  appStoreScope,
  createParametricAtom,
  extractMcpAppRenderData,
  findMatchingMcpApp,
  getMcpToolDisplayLabel,
  getToolResultResourceUri,
  isDilServer,
  isPlatform,
  mcpAppManualExpansionFamily,
  mcpAppStateFamily,
  mcpAppTabManager,
  buildMcpAppTabId,
  mcpServerStatusesQueryAtom,
  resolveMcpConnectorId,
  resolveMcpSandboxOriginScope,
  resolvePluginToolDisplay,
  selectMcpAppRenderTarget,
  toSentenceCase,
  useAvailablePlugins,
  useFeatureGateExposure,
  useMcpAppId,
  useMcpAppResourceQuery,
  usePlatform,
  useScopedAtomValue,
} from "../../boundaries/onboarding-commons-externals.facade";

export interface McpMatchingApp {
  name: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
}

interface McpToolInvocation {
  server: string;
  tool: string;
  arguments: unknown;
}

export interface McpToolCallItem {
  type: "mcp-tool-call";
  callId: string;
  completed: boolean;
  functionName?: string | null;
  invocation: McpToolInvocation;
  result?:
    | { type: "success"; raw?: unknown }
    | { type: "error"; error: string }
    | null;
  mcpAppResourceUri?: string | null;
  pluginId?: string | null;
}

type ConversationTimelineItem = McpToolCallItem | { type: string };

interface ParametricAtomGetter {
  get: (atom: unknown, param?: unknown) => any;
}

interface McpServerToolKey {
  hostId: string;
  server: string;
  tool: string;
}

function isMcpToolCallItem(
  item: ConversationTimelineItem,
): item is McpToolCallItem {
  return item.type === "mcp-tool-call";
}

export const isMcpAppExpandedAtom = createParametricAtom(
  appStoreScope,
  (mcpAppId: string, { get }: ParametricAtomGetter) => {
    const appState = get(mcpAppStateFamily, mcpAppId);
    return (
      appState.isInlineExpanded ||
      appState.isFullScreen ||
      get(mcpAppManualExpansionFamily, mcpAppId) ||
      get(mcpAppTabManager.tabById$, buildMcpAppTabId(mcpAppId)) != null
    );
  },
);

export const mcpAppResourceUriAtom = createParametricAtom(
  appStoreScope,
  ({ hostId, server, tool }: McpServerToolKey, { get }: ParametricAtomGetter) =>
    getToolResultResourceUri({
      mcpServerStatuses: get(mcpServerStatusesQueryAtom, hostId).data,
      server,
      tool,
    })?.resourceUri ?? null,
);

export const mcpAppConnectorIdAtom = createParametricAtom(
  appStoreScope,
  ({ hostId, server, tool }: McpServerToolKey, { get }: ParametricAtomGetter) =>
    resolveMcpConnectorId({
      mcpServerStatuses: get(mcpServerStatusesQueryAtom, hostId).data,
      server,
      tool,
    }),
);

export const isMcpServerStatusLoadingAtom = createParametricAtom(
  appStoreScope,
  (hostId: string, { get }: ParametricAtomGetter) =>
    get(mcpServerStatusesQueryAtom, hostId).isLoading,
);

export interface McpAppToolResultFramesProps {
  conversationId: string;
  hostId: string;
  items: readonly ConversationTimelineItem[];
  resolvedApps: McpMatchingApp[];
}

export function McpAppToolResultFrames({
  conversationId,
  hostId,
  items,
  resolvedApps,
}: McpAppToolResultFramesProps) {
  return (
    <>
      {items.map((item) =>
        isMcpToolCallItem(item) ? (
          <McpAppToolResultFrameGate
            key={item.callId}
            conversationId={conversationId}
            hostId={hostId}
            item={item}
            matchingApp={findMatchingMcpApp({
              apps: resolvedApps,
              functionName: item.functionName,
              serverName: item.invocation.server,
              toolName: item.invocation.tool,
            })}
          />
        ) : null,
      )}
    </>
  );
}

export interface McpAppToolResultFrameGateProps {
  conversationId: string;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
}

export function McpAppToolResultFrameGate({
  conversationId,
  hostId,
  item,
  matchingApp,
}: McpAppToolResultFrameGateProps) {
  const mcpAppId = useMcpAppId(item.callId);
  if (!useScopedAtomValue(isMcpAppExpandedAtom, mcpAppId)) return null;
  return (
    <McpAppToolResultFrameResolver
      conversationId={conversationId}
      hostId={hostId}
      item={item}
      matchingApp={matchingApp}
      mcpAppId={mcpAppId}
    />
  );
}

export interface McpAppToolResultFrameResolverProps {
  conversationId: string;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
  mcpAppId: string;
}

export function McpAppToolResultFrameResolver({
  conversationId,
  hostId,
  item,
  matchingApp,
  mcpAppId,
}: McpAppToolResultFrameResolverProps) {
  const rawResult = item.result?.type === "success" ? item.result.raw : null;
  const [initialRawResult] = React.useState(rawResult);
  const lastRawResult = rawResult ?? initialRawResult;

  const serverToolKey: McpServerToolKey = {
    hostId,
    server: item.invocation.server,
    tool: item.invocation.tool,
  };
  const resourceUriFromStatuses = useScopedAtomValue(
    mcpAppResourceUriAtom,
    serverToolKey,
  );
  const mcpAppConnectorId = useScopedAtomValue(
    mcpAppConnectorIdAtom,
    serverToolKey,
  );
  const statusesLoading = useScopedAtomValue(
    isMcpServerStatusLoadingAtom,
    hostId,
  );

  const toolResultForResolution = statusesLoading ? null : lastRawResult;
  const resolvedTarget = getToolResultResourceUri({
    mcpServerStatuses: undefined,
    server: item.invocation.server,
    tool: item.invocation.tool,
    toolResult: toolResultForResolution,
  });

  const mcpAppResourceUri =
    resourceUriFromStatuses ??
    resolvedTarget?.resourceUri ??
    item.mcpAppResourceUri ??
    null;
  const displayedMcpAppResourceUri =
    resourceUriFromStatuses ??
    (lastRawResult != null && !statusesLoading
      ? (resolvedTarget?.resourceUri ?? item.mcpAppResourceUri)
      : null) ??
    null;

  if (
    !(
      isPlatform("electron") &&
      mcpAppResourceUri != null &&
      (!item.completed || lastRawResult != null)
    )
  )
    return null;

  return (
    <McpAppInlineFrameContainer
      conversationId={conversationId}
      displayedMcpAppResourceUri={displayedMcpAppResourceUri}
      displayedSuccessfulToolResult={lastRawResult}
      hostId={hostId}
      item={item}
      matchingApp={matchingApp}
      mcpAppConnectorId={mcpAppConnectorId}
      mcpAppId={mcpAppId}
      mcpAppResourceUri={mcpAppResourceUri}
    />
  );
}

export interface McpAppInlineFrameContainerProps {
  conversationId: string;
  displayedMcpAppResourceUri: string | null;
  displayedSuccessfulToolResult: unknown;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
  mcpAppConnectorId?: string | null;
  mcpAppId: string;
  mcpAppResourceUri: string | null;
}

export function McpAppInlineFrameContainer({
  conversationId,
  displayedMcpAppResourceUri,
  displayedSuccessfulToolResult,
  hostId,
  item,
  matchingApp,
  mcpAppConnectorId = null,
  mcpAppId,
  mcpAppResourceUri,
}: McpAppInlineFrameContainerProps) {
  const intl = useIntl();
  const { platform } = usePlatform();
  const serverIsDil = isDilServer(item.invocation.server);

  const pluginEnabled = item.pluginId != null && !serverIsDil;
  const { availablePlugins } = useAvailablePlugins(hostId, undefined, {
    enabled: pluginEnabled,
  });
  const pluginToolDisplay = resolvePluginToolDisplay({
    mcpAppResourceUri,
    pluginId: item.pluginId,
    plugins: availablePlugins,
    serverName: item.invocation.server,
  });

  const { data: serverStatuses } = useScopedAtomValue(
    mcpServerStatusesQueryAtom,
    hostId,
  );
  const toolLabel = getMcpToolDisplayLabel({
    completed: item.completed,
    intl,
    matchingApp,
    platform,
    serverName: item.invocation.server,
    toolArguments: item.invocation.arguments,
    toolName: item.invocation.tool,
    toolResult: item.result,
  });

  const {
    data: resourceData,
    error: resourceError,
    isLoading: resourceLoading,
  } = useMcpAppResourceQuery({
    hostId,
    server: item.invocation.server,
    threadId: conversationId,
    uri: mcpAppResourceUri,
    enabled: true,
  });
  const renderData = extractMcpAppRenderData(resourceData);

  useFeatureGateExposure("2957382457");

  const renderTarget = selectMcpAppRenderTarget({
    hasResourceError: resourceError != null,
    isDilEnabled: false,
    isResourceLoading: resourceLoading,
    renderData,
    resourceUri: displayedMcpAppResourceUri,
    shouldRenderMcpApp: true,
  });
  const htmlRenderData =
    renderTarget.kind === "html" ? renderTarget.renderData : null;

  const [instanceFallbackId] = React.useState(createMcpAppInstanceId);
  const sandboxOriginScope = resolveMcpSandboxOriginScope({
    connectorId: mcpAppConnectorId,
    instanceFallbackId,
    server: item.invocation.server,
  });

  const isLoading =
    displayedMcpAppResourceUri == null ||
    displayedSuccessfulToolResult == null ||
    (renderData == null && resourceLoading);
  const csp =
    displayedMcpAppResourceUri == null ? null : (htmlRenderData?.csp ?? null);
  const error =
    displayedMcpAppResourceUri != null && renderData == null
      ? resourceError
      : null;
  const html =
    displayedMcpAppResourceUri == null ? null : (htmlRenderData?.html ?? null);
  const mcpAppScope = {
    originResourceUri: displayedMcpAppResourceUri,
    originTool: item.invocation.tool,
  };
  const prefersBorder = htmlRenderData?.prefersBorder ?? false;

  const sidePanelIcon =
    pluginToolDisplay ??
    (serverIsDil && matchingApp != null
      ? {
          alt: matchingApp.name,
          logoUrl: matchingApp.logoUrl,
          logoDarkUrl: matchingApp.logoUrlDark,
        }
      : null);
  const sidePanelTitle =
    serverIsDil && matchingApp != null
      ? matchingApp.name
      : toSentenceCase(item.invocation.server);
  const title = intl.formatMessage(
    {
      id: "codex.mcpTool.mcpAppIframeTitle",
      defaultMessage: "{server} {tool}",
      description:
        "Accessible title for an MCP app iframe rendered in a tool result",
    },
    { server: formatMcpServerLabel(item.invocation.server), tool: toolLabel },
  );
  const widgetDomain = htmlRenderData?.widgetDomain ?? null;

  return (
    <McpAppInlineFrame
      conversationId={conversationId}
      csp={csp}
      error={error}
      hostId={hostId}
      hostedInThreadScrollLayout={true}
      html={html}
      isLoading={isLoading}
      mcpAppId={mcpAppId}
      mcpAppScope={mcpAppScope}
      mcpServerStatuses={serverStatuses}
      prefersBorder={prefersBorder}
      sandboxOriginScope={sandboxOriginScope}
      server={item.invocation.server}
      sidePanelIcon={sidePanelIcon}
      sidePanelTitle={sidePanelTitle}
      title={title}
      toolArguments={item.invocation.arguments}
      toolResult={displayedSuccessfulToolResult}
      widgetDomain={widgetDomain}
    />
  );
}

export function createMcpAppInstanceId(): string {
  return crypto.randomUUID();
}

export function formatMcpServerLabel(server: string): string {
  const trimmed = server.trim();
  if (trimmed.length === 0) return "MCP";
  const label = toSentenceCase(trimmed);
  return label.toUpperCase().endsWith(" MCP") ? label : `${label} MCP`;
}
