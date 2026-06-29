// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The MCP app sandbox frame: a hidden host element + webview that is portalled
// into either the inline tool card or the full-screen side panel, wired to the
// sandbox RPC bridge for tool calls, resource reads, follow-up messages,
// navigation and live host-context / theme updates.

import * as React from "react";
import { createPortal } from "react-dom";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import equal from "fast-deep-equal";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import {
  appMessenger,
  appRootScope,
  attachMcpAppPanelElement,
  BackForwardNavigationButtons,
  buildConversationRoute,
  buildMcpAppSandboxId,
  buildMcpAppSandboxSourceUrl,
  buildMcpToolList,
  Callout,
  conversationCwdFamily,
  detachMcpAppPanelElement,
  downloadBlob,
  exitMcpAppFullScreen,
  extractToolResponseMetadata,
  FollowUpConfirmationDialog,
  isCodexAppsServer,
  isMcpAppDevtoolsEnabled,
  logger,
  mcpAppEntryFamily,
  mcpAppSidePanelOpenFamily,
  mcpAppFrameStateFamily,
  openExternalLink,
  openMcpAppExpandedSurface,
  parseFollowUpRequest,
  parseUrlOrigin,
  recordMcpResourceRead,
  resolveMcpConnectorId,
  resolveMcpAppTabId,
  rightPanelColumnCountSignal,
  selectMcpToolResult,
  serializeSandboxPartition,
  setMcpAppInlineExpanded,
  sidePanelSlots,
  sidePanelTabController,
  Tooltip,
  useComposerMessageSetter,
  useNavigate,
  usePendingWorktreeController,
  useRightPanelLayout,
  useScopedStore,
  useScopedValue,
  useSignalFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { closeMcpAppTab, mcpAppTabId, openMcpAppTab } from "./mcp-app-tab";
import { updateMcpAppFrameState } from "./mcp-app-frame-state";
import {
  connectMcpAppSandbox,
  environmentStatusSchema,
  openExternalRequestSchema,
} from "./mcp-app-sandbox-bridge";
import {
  buildMcpAppHostContext,
  buildMcpAppUserAgent,
  DEFAULT_MCP_APP_SAFE_AREA,
  measureMcpAppContainerDimensions,
  resolveMcpAppSafeArea,
} from "./mcp-app-host-context";
import {
  mcpAppStyleVariablesAtom,
  mcpAppSurfaceBackgroundColorAtom,
  resolveMcpAppColorScheme,
} from "./mcp-app-style-variables";
import {
  clampMcpFrameHeight,
  resolveMcpFrameHeight,
} from "./mcp-app-frame-height";
import {
  callMcpAppTool,
  collectMcpServerTools,
  fetchMcpServerStatus,
  readMcpAppResource,
} from "./mcp-app-tool-proxy";
import {
  createMcpAppError,
  MCP_APP_DEFAULT_ERROR_CODE,
  normalizeMcpAppError,
  runMcpAppHandler,
  swallowMcpAppRpcError,
} from "./mcp-app-errors";
import {
  backgroundColorSchema,
  DEFAULT_NAVIGATION_STATE,
  displayModeRequestSchema,
  fileDownloadParamsSchema,
  intrinsicHeightSchema,
  modelContextUpdateSchema,
  navigationStateSchema,
  proxyRequestSchema,
  resourceReadParamsSchema,
  structuredContentSchema,
  textContentSchema,
  toolCallParamsSchema,
  toolResultUpdateSchema,
  widgetStateSchema,
  type McpAppNavigationState,
} from "./mcp-app-schemas";
import {
  createWorktreeForFollowUp,
  extractFollowUpImages,
  extractFollowUpText,
  startThreadForFollowUp,
} from "./mcp-app-follow-up";

function toMcpAppToolInput(
  toolArguments: unknown,
): Record<string, unknown> | null {
  return typeof toolArguments === "object" && toolArguments
    ? (toolArguments as Record<string, unknown>)
    : null;
}

function toMcpAppToolOutput(selectedToolResult: {
  content: unknown[];
  structuredContent?: unknown;
}): Record<string, unknown> | null {
  const structured = structuredContentSchema.safeParse(
    selectedToolResult.structuredContent,
  );
  if (structured.success) return structured.data;
  if (selectedToolResult.content.length !== 1) return null;
  const [block] = selectedToolResult.content;
  const text = textContentSchema.safeParse(block);
  if (!text.success) return null;
  try {
    const parsed = JSON.parse(text.data.text);
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

function positionMcpAppFrame({
  frameElement,
  isFullScreen,
  targetFrameContainer,
  threadFrameContainer,
}: {
  frameElement: HTMLElement;
  isFullScreen: boolean;
  targetFrameContainer: HTMLElement;
  threadFrameContainer: HTMLElement;
}): void {
  const zoom = (threadFrameContainer as any).currentCSSZoom ?? 1;
  const targetRect = targetFrameContainer.getBoundingClientRect();
  if (isFullScreen) {
    frameElement.style.position = "fixed";
    const offsetRect = frameElement.offsetParent?.getBoundingClientRect();
    frameElement.style.top = `${(targetRect.top - (offsetRect?.top ?? 0)) / zoom}px`;
    frameElement.style.left = `${(targetRect.left - (offsetRect?.left ?? 0)) / zoom}px`;
    frameElement.style.width = `${targetRect.width / zoom}px`;
    frameElement.style.height = `${targetRect.height / zoom}px`;
    frameElement.style.zIndex = "43";
    return;
  }
  const threadRect = threadFrameContainer.getBoundingClientRect();
  frameElement.style.position = "absolute";
  frameElement.style.top = `${(targetRect.top - threadRect.top) / zoom + threadFrameContainer.scrollTop}px`;
  frameElement.style.left = `${(targetRect.left - threadRect.left) / zoom + threadFrameContainer.scrollLeft}px`;
  frameElement.style.width = `${targetRect.width / zoom}px`;
  frameElement.style.height = `${targetRect.height / zoom}px`;
  frameElement.style.zIndex = "1";
}

function stopPointerPropagation(event: React.PointerEvent): void {
  event.stopPropagation();
}

export interface McpAppNavigationControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  className?: string;
  onBack: () => void;
  onForward: () => void;
}

export function McpAppNavigationControls({
  canGoBack,
  canGoForward,
  className,
  onBack,
  onForward,
}: McpAppNavigationControlsProps) {
  const intl = useIntl();
  const backLabel = intl.formatMessage({
    id: "codex.mcpTool.mcpAppNavigationBack",
    defaultMessage: "Back",
    description: "Button label to navigate back inside an MCP app",
  });
  const forwardLabel = intl.formatMessage({
    id: "codex.mcpTool.mcpAppNavigationForward",
    defaultMessage: "Next",
    description: "Button label to navigate forward inside an MCP app",
  });
  const handleBack = (event: React.MouseEvent) => {
    event.stopPropagation();
    onBack();
  };
  const handleForward = (event: React.MouseEvent) => {
    event.stopPropagation();
    onForward();
  };
  return (
    <div
      className={classNames("flex items-center gap-px", className)}
      data-mcp-app-navigation-controls="true"
      onPointerDown={stopPointerPropagation}
    >
      <BackForwardNavigationButtons
        backLabel={backLabel}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        forwardLabel={forwardLabel}
        onBack={handleBack}
        onForward={handleForward}
      />
    </div>
  );
}

export interface McpAppFollowUpConfirmationProps {
  conversationId: string;
  onCancel: () => void;
  onConfirm: (result: unknown) => void;
  prompt: string;
  title?: string;
}

export function McpAppFollowUpConfirmation({
  conversationId,
  onCancel,
  onConfirm,
  prompt,
  title,
}: McpAppFollowUpConfirmationProps) {
  const { enqueue } = useComposerMessageSetter(conversationId).actions;
  const handleConfirmCurrentThread = (text: string) => {
    onConfirm({ enqueue, prompt: text, type: "current-thread" });
  };
  return (
    <FollowUpConfirmationDialog
      confirmation={{
        onCancel,
        onConfirmCurrentThread: handleConfirmCurrentThread,
        onConfirmNewThread: onConfirm,
        prompt,
        title,
      }}
    />
  );
}

export interface McpAppInlineFramePortalProps {
  isInlineExpanded: boolean;
  mcpAppId: string;
}

export function McpAppInlineFramePortal({
  isInlineExpanded,
  mcpAppId,
}: McpAppInlineFramePortalProps): null {
  const store = useScopedStore(appRootScope);
  React.useLayoutEffect(() => {
    setMcpAppInlineExpanded(store, mcpAppId, isInlineExpanded);
  }, [isInlineExpanded, mcpAppId, store]);
  return null;
}

export interface McpAppExpandedSurfaceEffectProps {
  conversationId: string;
  csp: unknown;
  error: Error | null;
  fullSurface?: boolean;
  hostId: string;
  hostedInThreadScrollLayout: boolean;
  html: string | null;
  isLoading: boolean;
  mcpAppId: string;
  mcpAppScope: unknown;
  mcpServerStatuses: unknown;
  overrideMcpRequest?: ((request: unknown) => unknown) | null;
  prefersBorder: boolean;
  sandboxOriginScope: unknown;
  server: string;
  sidePanelIcon?: unknown;
  sidePanelTitle?: string;
  title?: string;
  toolArguments: unknown;
  toolResult: unknown;
  widgetDomain: unknown;
}

export function McpAppExpandedSurfaceEffect(
  props: McpAppExpandedSurfaceEffectProps,
): null {
  const {
    conversationId,
    csp,
    error,
    fullSurface = false,
    hostId,
    hostedInThreadScrollLayout,
    html,
    isLoading,
    mcpAppId,
    mcpAppScope,
    mcpServerStatuses,
    overrideMcpRequest,
    prefersBorder,
    sandboxOriginScope,
    server,
    sidePanelIcon,
    sidePanelTitle,
    title,
    toolArguments,
    toolResult,
    widgetDomain,
  } = props;
  const store = useScopedStore(appRootScope);
  const styleVariables = useScopedValue(mcpAppStyleVariablesAtom);
  const surfaceBackgroundColor = useScopedValue(
    mcpAppSurfaceBackgroundColorAtom,
  );
  const tabs = useScopedValue(sidePanelTabController.tabs$) as {
    tabId: string;
  }[];
  const htmlSize = html == null ? 0 : new Blob([html]).size;
  const tabId = resolveMcpAppTabId(
    styleVariables,
    {
      conversationId,
      inlineFrameContainer: null,
      mcpAppId,
      mcpAppScope,
      sandboxOriginScope,
      server,
    },
    surfaceBackgroundColor,
  );
  const isTabOpen = tabs.some((tab) => tab.tabId === mcpAppTabId(tabId));

  React.useLayoutEffect(() => {
    if (
      error != null ||
      html == null ||
      htmlSize > 1e7 ||
      isLoading ||
      toolResult == null
    )
      return;
    if (isTabOpen)
      updateMcpAppFrameState(store, tabId as unknown as string, {
        isFullScreen: true,
      });
    openMcpAppExpandedSurface(store, {
      conversationId,
      csp,
      fullSurface,
      hostId,
      hostedInThreadScrollLayout,
      html,
      inlineFrameContainer: null,
      mcpAppId,
      mcpAppScope,
      mcpServerStatuses,
      prefersBorder,
      overrideMcpRequest,
      sandboxOriginScope,
      server,
      sidePanelIcon,
      sidePanelTitle,
      title,
      toolArguments,
      toolResult,
      widgetDomain,
    });
  }, [
    conversationId,
    csp,
    error,
    fullSurface,
    hostId,
    hostedInThreadScrollLayout,
    isTabOpen,
    html,
    htmlSize,
    isLoading,
    mcpAppId,
    tabId,
    mcpAppScope,
    mcpServerStatuses,
    overrideMcpRequest,
    prefersBorder,
    sandboxOriginScope,
    store,
    server,
    sidePanelIcon,
    sidePanelTitle,
    title,
    toolArguments,
    toolResult,
    widgetDomain,
  ]);
  return null;
}

export interface McpAppInlineFrameProps {
  error?: Error | null;
  fullSurface?: boolean;
  heightHint?: number | null;
  html?: string | null;
  inlineSurface?: "standalone" | "card";
  isLoading?: boolean;
  mcpAppId: string;
  minFrameHeight?: number | null;
}

export function McpAppInlineFrame(props: McpAppInlineFrameProps) {
  const {
    error,
    fullSurface = false,
    heightHint = null,
    html = null,
    inlineSurface = "standalone",
    isLoading = false,
    mcpAppId,
    minFrameHeight = null,
  } = props;
  const store = useScopedStore(appRootScope);
  const intl = useIntl();
  const entry = useSignalFamilyValue(mcpAppEntryFamily, mcpAppId) as {
    inlineFrameContainer: HTMLElement | null;
  } | null;
  const frameState = useSignalFamilyValue(mcpAppFrameStateFamily, mcpAppId) as {
    intrinsicHeight: number | null;
    isFullScreen: boolean;
    sandboxError: Error | null;
  };
  const [surfaceElement, setSurfaceElement] =
    React.useState<HTMLDivElement | null>(null);
  const htmlSize = html == null ? 0 : new Blob([html]).size;
  const hasEntry = entry != null;
  const frameHeight = clampMcpFrameHeight(
    frameState.intrinsicHeight,
    heightHint,
    minFrameHeight,
  );
  const sandboxError = error ?? frameState.sandboxError;

  React.useLayoutEffect(() => {
    if (!hasEntry) return;
    attachMcpAppPanelElement(store, mcpAppId, surfaceElement);
    return () => {
      detachMcpAppPanelElement(store, mcpAppId, surfaceElement);
    };
  }, [surfaceElement, hasEntry, mcpAppId, store]);

  if (htmlSize > 1e7) {
    return (
      <Callout className="w-full" fullWidth level="danger">
        <div className="text-size-chat max-h-48 overflow-auto whitespace-pre-wrap">
          <FormattedMessage
            id="codex.mcpTool.mcpAppTooLarge"
            defaultMessage="Failed to load MCP app: HTML exceeds the maximum supported size."
            description="Error shown when an MCP app resource is too large to render"
          />
        </div>
      </Callout>
    );
  }

  if (isLoading) {
    const label = intl.formatMessage({
      id: "codex.mcpTool.mcpAppLoading",
      defaultMessage: "Loading MCP app",
      description: "Accessible label for the MCP app loading placeholder",
    });
    const surfaceClass = fullSurface
      ? "h-full border-t"
      : inlineSurface === "standalone" && "rounded-lg border";
    const className = classNames(
      "mcp-app-loading-pulse w-full overflow-hidden border-token-border-light",
      surfaceClass,
    );
    const height = fullSurface
      ? "100%"
      : resolveMcpFrameHeight(heightHint, minFrameHeight);
    return (
      <div
        role="status"
        aria-label={label}
        data-mcp-app-loading="true"
        className={className}
        style={{ height }}
      />
    );
  }

  if (sandboxError != null) {
    return (
      <Callout className="w-full" fullWidth level="danger">
        <div className="text-size-chat max-h-48 overflow-auto whitespace-pre-wrap">
          <FormattedMessage
            id="codex.mcpTool.mcpAppLoadFailed"
            defaultMessage={"Failed to load MCP app: {message}"}
            description="Error shown when an MCP app resource fails to load"
            values={{ message: sandboxError.message }}
          />
        </div>
      </Callout>
    );
  }

  if (html == null) {
    return (
      <p className="text-token-description-foreground/80">
        <FormattedMessage
          id="codex.mcpTool.mcpAppNoContent"
          defaultMessage="MCP app returned no HTML content"
          description="Message shown when an MCP app resource has no renderable HTML"
        />
      </p>
    );
  }

  const className = classNames(
    "w-full overflow-hidden",
    fullSurface && "h-full",
  );
  const height = frameState.isFullScreen
    ? 0
    : fullSurface
      ? "100%"
      : frameHeight;
  return (
    <div
      ref={setSurfaceElement}
      data-mcp-app-expanded="true"
      data-mcp-app-inline-surface={inlineSurface}
      className={className}
      style={{ height }}
    />
  );
}

export interface ActiveMcpAppFrameProps {
  mcpAppId: string;
}

export function ActiveMcpAppFrame({ mcpAppId }: ActiveMcpAppFrameProps) {
  const entry = useSignalFamilyValue(mcpAppEntryFamily, mcpAppId) as {
    inlineFrameContainer: HTMLElement | null;
    inlineFrameContent: McpAppFrameContentProps;
    sidePanelFrameContent?: McpAppFrameContentProps;
    mcpAppId: string;
  } | null;
  const frameState = useSignalFamilyValue(mcpAppFrameStateFamily, mcpAppId) as {
    isFullScreen: boolean;
    isInlineExpanded: boolean;
  };
  const isSidePanelOpen = useSignalFamilyValue(
    mcpAppSidePanelOpenFamily,
    mcpAppId,
  ) as boolean;
  if (
    entry == null ||
    (!frameState.isInlineExpanded &&
      !frameState.isFullScreen &&
      !isSidePanelOpen)
  )
    return null;
  const frameContent =
    frameState.isFullScreen ||
    (!frameState.isInlineExpanded &&
      entry.inlineFrameContainer?.isConnected !== true &&
      isSidePanelOpen)
      ? (entry.sidePanelFrameContent ?? entry.inlineFrameContent)
      : entry.inlineFrameContent;
  return (
    <McpAppFrameContent
      {...frameContent}
      inlineFrameContainer={entry.inlineFrameContainer}
      mcpAppId={entry.mcpAppId}
      frameState={frameState}
    />
  );
}

export interface McpAppFrameContentProps {
  conversationId: string;
  csp: {
    baseUriDomains: unknown;
    connectDomains: unknown;
    frameDomains: unknown;
    resourceDomains: unknown;
  } | null;
  fullSurface: boolean;
  hostId: string;
  html: string;
  inlineFrameContainer: HTMLElement | null;
  mcpAppId: string;
  mcpAppScope: unknown;
  mcpServerStatuses: unknown;
  prefersBorder: boolean;
  overrideMcpRequest?: ((request: unknown) => unknown) | null;
  sandboxOriginScope: unknown;
  server: string;
  sidePanelIcon?: {
    alt: string;
    logoUrl?: string;
    logoDarkUrl?: string;
  };
  sidePanelTitle?: string;
  title: string;
  toolArguments: unknown;
  toolResult: unknown;
  widgetDomain: unknown;
  frameState: { isFullScreen: boolean };
}

export function McpAppFrameContent({
  conversationId,
  csp,
  fullSurface,
  hostId,
  html,
  inlineFrameContainer,
  mcpAppId,
  mcpAppScope,
  mcpServerStatuses,
  prefersBorder,
  overrideMcpRequest,
  sandboxOriginScope,
  server,
  sidePanelIcon,
  sidePanelTitle,
  title,
  toolArguments,
  toolResult,
  widgetDomain,
  frameState,
}: McpAppFrameContentProps) {
  const store = useScopedStore(appRootScope);
  const intl = useIntl();
  const navigate = useNavigate();
  const setComposerMessage = useComposerMessageSetter(conversationId);
  const { createPendingWorktree } = usePendingWorktreeController();
  const activeTab = useScopedValue(sidePanelTabController.activeTab$) as {
    tabId: string;
  } | null;
  const rightPanelColumnCount = useScopedValue(rightPanelColumnCountSignal) as {
    get: () => number;
  };
  const { rightPanelLayoutTick } = useRightPanelLayout();
  const styleVariables = useScopedValue(mcpAppStyleVariablesAtom);
  const surfaceBackgroundColor = useScopedValue(
    mcpAppSurfaceBackgroundColorAtom,
  );
  const { isFullScreen } = frameState;

  const isUnmountedRef = React.useRef(false);
  const lastWidgetDataRef = React.useRef<unknown>(null);
  const [frameElement, setFrameElement] = React.useState<HTMLDivElement | null>(
    null,
  );
  const [webviewElement, setWebviewElement] =
    React.useState<HTMLElement | null>(null);
  const [isFramePlaced, setIsFramePlaced] = React.useState(false);
  const [sidePanelElement, setSidePanelElement] =
    React.useState<HTMLElement | null>(null);
  const [backgroundColor, setBackgroundColor] = React.useState<string | null>(
    null,
  );
  const [sandboxApi, setSandboxApi] = React.useState<any>(null);
  const [navigationState, setNavigationState] =
    React.useState<McpAppNavigationState>(DEFAULT_NAVIGATION_STATE);
  const [widgetId, setWidgetId] = React.useState<string | null>(null);
  const [isWidgetReady, setIsWidgetReady] = React.useState(false);
  const [widgetState, setWidgetState] = React.useState<unknown>(null);
  const [pendingFollowUp, setPendingFollowUp] = React.useState<{
    prompt: string;
    reject: (error: unknown) => void;
    resolve: (result: any) => void;
    title?: string;
  } | null>(null);

  const toolInput = React.useMemo(
    () => toMcpAppToolInput(toolArguments),
    [toolArguments],
  );
  const selectedToolResult = React.useMemo(
    () =>
      selectMcpToolResult({
        isCodexAppsServer: isCodexAppsServer(server),
        toolResult,
      }),
    [server, toolResult],
  );
  const toolOutput = React.useMemo(
    () => toMcpAppToolOutput(selectedToolResult),
    [selectedToolResult],
  );
  const toolResponseMetadata = React.useMemo(
    () => extractToolResponseMetadata({ toolResult: selectedToolResult }),
    [selectedToolResult],
  );
  const readWidgetData = React.useEffectEvent(() => ({
    toolInput,
    toolOutput,
    toolResponseMetadata,
  }));

  const sandboxSourceUrl = buildMcpAppSandboxSourceUrl({
    locale: intl.locale,
    originScope: sandboxOriginScope,
    widgetDomain,
  });
  const sandboxId = React.useMemo(
    () =>
      buildMcpAppSandboxId({
        originScope: sandboxOriginScope,
        sourceUrl: sandboxSourceUrl,
      }),
    [sandboxSourceUrl, sandboxOriginScope],
  );
  const readSandboxInitConfig = React.useEffectEvent(() => {
    const origin = parseUrlOrigin(sandboxSourceUrl);
    return origin == null
      ? null
      : {
          csp,
          html,
          locale: intl.locale,
          sandboxOrigin: origin,
          sourceUrl: sandboxSourceUrl,
        };
  });

  const connectedSidePanelElement =
    sidePanelElement?.isConnected === true ? sidePanelElement : null;
  const connectedInlineContainer =
    inlineFrameContainer?.isConnected === true ? inlineFrameContainer : null;
  const isCardSurface =
    !isFullScreen &&
    !fullSurface &&
    inlineFrameContainer?.dataset.mcpAppInlineSurface === "card";
  const frameParent = frameElement?.parentElement;
  const portalTarget =
    connectedInlineContainer?.closest("[data-mcp-app-portal-target='true']") ??
    (frameParent instanceof HTMLElement &&
    frameParent.dataset.mcpAppPortalTarget === "true"
      ? frameParent
      : document.querySelector("[data-mcp-app-portal-target='true']"));

  const handleBackgroundColor = React.useEffectEvent((value: unknown) => {
    const parsed = backgroundColorSchema.safeParse(value);
    if (parsed.success) setBackgroundColor(parsed.data);
  });
  const handleEnvironmentError = React.useEffectEvent(() => {
    updateMcpAppFrameState(store, mcpAppId, {
      sandboxError: new Error("The MCP app sandbox failed to load."),
    });
  });
  const handleIntrinsicHeight = React.useEffectEvent((value: unknown) => {
    const parsed = intrinsicHeightSchema.safeParse(value);
    if (parsed.success)
      updateMcpAppFrameState(store, mcpAppId, { intrinsicHeight: parsed.data });
  });
  const handleIntrinsicWidth = React.useEffectEvent((value: unknown) => {
    intrinsicHeightSchema.safeParse(value);
  });
  const handleNavigationState = React.useEffectEvent((value: unknown) => {
    const parsed = navigationStateSchema.safeParse(value);
    if (parsed.success)
      setNavigationState({
        canGoBack: parsed.data.canGoBack,
        canGoForward: parsed.data.canGoForward,
      });
  });
  const handleOpenExternal = React.useEffectEvent((value: unknown) => {
    const parsed = openExternalRequestSchema.safeParse(value);
    if (parsed.success)
      openExternalLink({
        href: parsed.data.href,
        initiator: "mcp_app_resource",
        openTarget: "external-browser",
      });
  });
  const handleRequestDisplayMode = React.useEffectEvent((value: unknown) => {
    const parsed = displayModeRequestSchema.safeParse(value);
    if (parsed.success) {
      const wantsFullScreen = parsed.data.mode === "fullscreen";
      const mode = parsed.data.mode;
      if (wantsFullScreen) {
        if (frameElement != null) frameElement.style.display = "none";
        exitMcpAppFullScreen(store, mcpAppId);
      }
      updateMcpAppFrameState(store, mcpAppId, {
        isFullScreen: wantsFullScreen,
      });
      if (widgetId != null && widgetId !== null && sandboxApi != null) {
        swallowMcpAppRpcError(
          sandboxApi.setWidgetView({
            displayMode: mode,
            isTombstone: false,
            viewParams: toolOutput,
            widgetId,
          }),
        );
        if (frameElement != null)
          swallowMcpAppRpcError(
            sandboxApi.notifyMcpAppsHostContext({
              hostContext: buildMcpAppHostContext({
                containerDimensions:
                  measureMcpAppContainerDimensions(frameElement),
                displayMode: mode,
                locale: intl.locale,
                safeAreaInsets: resolveMcpAppSafeArea({
                  displayMode: mode,
                  hasNavigationHistory:
                    navigationState.canGoBack || navigationState.canGoForward,
                }).insets,
                styleVariables,
                theme: resolveMcpAppColorScheme(),
                userAgent: buildMcpAppUserAgent(),
              }),
            }),
          );
      }
      return { mode };
    }
    return { mode: isFullScreen ? "fullscreen" : "inline" };
  });
  const readDisplayMode = React.useEffectEvent(() =>
    isFullScreen ? "fullscreen" : "inline",
  );
  const readWidgetState = React.useEffectEvent(() => widgetState);

  const applyModelContext = (update: {
    content: unknown[];
    presentation?: Record<string, unknown>;
  }) => {
    const text = extractFollowUpText(update.content);
    const imageAttachments = extractFollowUpImages(update.content);
    const { composerLabel, ...rest } = update.presentation ?? {};
    const trimmedLabel =
      typeof composerLabel === "string" ? composerLabel.trim() : undefined;
    setComposerMessage({
      ...rest,
      ...(trimmedLabel != null && trimmedLabel.length > 0
        ? { composerLabel: trimmedLabel }
        : {}),
      id: mcpAppId,
      imageAttachments,
      text,
      title,
    });
  };

  const handleUpdateWidgetState = React.useEffectEvent(
    (_state: unknown, modelContext: unknown) => {
      const parsedState = widgetStateSchema.safeParse(modelContext);
      setWidgetState(parsedState.success ? parsedState.data : null);
      const parsedModelContext = toolResultUpdateSchema.safeParse(modelContext);
      if (parsedModelContext.success)
        applyModelContext(parsedModelContext.data as any);
    },
  );
  const handleNavigateDelta = React.useEffectEvent((delta: number) => {
    if (sandboxApi != null)
      swallowMcpAppRpcError(sandboxApi.navigate({ delta }));
  });
  const handleSendFollowUp = React.useEffectEvent(async (request: unknown) => {
    const { prompt, title: followUpTitle } = parseFollowUpRequest(request);
    if (pendingFollowUp != null)
      throw createMcpAppError(
        "A follow-up message is already awaiting confirmation",
        MCP_APP_DEFAULT_ERROR_CODE,
      );
    const confirmation = await new Promise<any>((resolve, reject) => {
      setPendingFollowUp({
        prompt,
        reject,
        resolve,
        title: followUpTitle,
      });
    });
    switch (confirmation.type) {
      case "current-thread": {
        const cwd = store.get(conversationCwdFamily, conversationId);
        if (cwd == null) throw new Error("The thread is unavailable");
        confirmation.enqueue({
          context: {
            addedFiles: [],
            fileAttachments: [],
            ideContext: null,
            imageAttachments: [],
            prompt: confirmation.prompt,
            workspaceRoots: [cwd],
          },
          cwd,
          text: confirmation.prompt,
        });
        return;
      }
      case "new-thread":
        if (confirmation.executionMode === "worktree") {
          await navigate(
            `/worktree-init-v2/${await createWorktreeForFollowUp({
              createPendingWorktree,
              hostId,
              prompt: confirmation.prompt,
              projectRoot: confirmation.projectRoot,
              scope: store,
            })}`,
          );
          return;
        }
        await navigate(
          buildConversationRoute(
            await startThreadForFollowUp({
              hostId,
              prompt: confirmation.prompt,
              projectRoot: confirmation.projectRoot,
              scope: store,
            }),
          ),
        );
        return;
    }
  });

  const withOverride = async (request: unknown, run: () => unknown) =>
    overrideMcpRequest == null ? run() : overrideMcpRequest(request);
  const callTool = (toolCallParams: any) =>
    withOverride({ method: "tools/call", params: toolCallParams }, () =>
      callMcpAppTool({
        conversationId,
        hostId,
        mcpAppScope,
        mcpServerStatuses,
        server,
        toolCallParams,
      }),
    );
  const handleCallTool = React.useEffectEvent(
    async (name: string, toolArgs: unknown) => {
      const parsed = toolCallParamsSchema.safeParse({
        arguments: toolArgs,
        name,
      });
      if (!parsed.success)
        throw createMcpAppError("Invalid MCP tool call params", -32602);
      return callTool(parsed.data);
    },
  );
  const handleCallMcp = React.useEffectEvent(async (request: unknown) => {
    const parsedRequest = proxyRequestSchema.safeParse(request);
    if (!parsedRequest.success)
      throw createMcpAppError("Invalid MCP proxy request", -32602);
    const { method, params } = parsedRequest.data;
    switch (method) {
      case "ping":
        return {};
      case "ui/download-file": {
        const parsed = fileDownloadParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP file download params", -32602);
        downloadBlob(parsed.data.blob, parsed.data.name);
        return {};
      }
      case "ui/update-model-context": {
        const parsed = modelContextUpdateSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP model context params", -32602);
        applyModelContext(parsed.data as any);
        return {};
      }
      case "tools/call": {
        const parsed = toolCallParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP tool call params", -32602);
        return callTool(parsed.data);
      }
      case "resources/read": {
        const parsed = resourceReadParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP resource read params", -32602);
        return withOverride({ method, params: parsed.data }, async () => {
          runMcpAppHandler(() => {
            recordMcpResourceRead({
              mcpAppScope,
              server,
              uri: parsed.data.uri,
            });
          });
          try {
            return await readMcpAppResource({
              hostId,
              threadId: conversationId,
              server,
              uri: parsed.data.uri,
            });
          } catch (error) {
            throw normalizeMcpAppError(error, "MCP resource read failed");
          }
        });
      }
      case "tools/list":
        return withOverride(parsedRequest.data, async () => {
          const tools = collectMcpServerTools(
            await fetchMcpServerStatus({
              hostId,
              mcpServerStatuses: isCodexAppsServer(server)
                ? (mcpServerStatuses as any)
                : undefined,
              server,
            }),
          );
          const connectorId = resolveMcpConnectorId({
            mcpAppScope,
            server,
            tools,
          });
          return {
            tools: runMcpAppHandler(() =>
              buildMcpToolList({ connectorId, server, tools }),
            ),
          };
        });
      case "resources/list":
        return withOverride(parsedRequest.data, async () =>
          isCodexAppsServer(server)
            ? { resources: [] }
            : {
                resources: (
                  await fetchMcpServerStatus({ hostId, server } as any)
                ).resources,
              },
        );
      case "resources/templates/list":
        return withOverride(parsedRequest.data, async () =>
          isCodexAppsServer(server)
            ? { resourceTemplates: [] }
            : {
                resourceTemplates: (
                  await fetchMcpServerStatus({ hostId, server } as any)
                ).resourceTemplates,
              },
        );
      case "prompts/list":
        return withOverride(parsedRequest.data, async () => ({ prompts: [] }));
      default:
        return withOverride(parsedRequest.data, async () => {
          throw createMcpAppError(
            `Unsupported MCP proxy method: ${method}`,
            -32601,
          );
        });
    }
  });

  React.useLayoutEffect(() => {
    const host = document.createElement("div");
    const webview = document.createElement("webview");
    webview.setAttribute("partition", serializeSandboxPartition(sandboxId));
    setFrameElement(host as unknown as HTMLDivElement);
    setWebviewElement(webview);
    return () => {
      host.remove();
      setFrameElement((current) =>
        (current as unknown as HTMLElement) === host ? null : current,
      );
      setWebviewElement((current) => (current === webview ? null : current));
      setIsFramePlaced(false);
    };
  }, [mcpAppId, sandboxSourceUrl, sandboxId]);

  React.useLayoutEffect(() => {
    if (frameElement == null || webviewElement == null) return;
    frameElement.className = classNames(
      "group/mcp-app relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden bg-token-background",
      !isFullScreen &&
        (fullSurface
          ? "border-t border-token-border-light"
          : !isCardSurface &&
            prefersBorder &&
            "rounded-lg border border-token-border shadow-sm"),
    );
    webviewElement.className = classNames(
      "bg-token-background h-full min-h-0 min-w-0 w-full overflow-hidden",
      !isFullScreen && !fullSurface && !isCardSurface && "rounded-lg",
      isFullScreen && "min-h-0 flex-1",
    );
    webviewElement.style.backgroundColor = backgroundColor ?? "";
    (webviewElement as HTMLElement).title = title;
  }, [
    backgroundColor,
    fullSurface,
    frameElement,
    isCardSurface,
    isFullScreen,
    prefersBorder,
    webviewElement,
    title,
  ]);

  React.useLayoutEffect(() => {
    if (frameElement == null || webviewElement == null) return;
    const targetContainer = isFullScreen
      ? connectedSidePanelElement
      : connectedInlineContainer;
    if (targetContainer == null || portalTarget == null) {
      frameElement.style.display = "none";
      return;
    }
    if (webviewElement.parentElement !== frameElement)
      frameElement.appendChild(webviewElement);
    if (frameElement.parentElement !== portalTarget)
      portalTarget.appendChild(frameElement);
    if (!isFramePlaced) setIsFramePlaced(true);

    let observedOffsetParent: Element | null = null;
    const mutationObserver = new MutationObserver(() => {
      reposition();
    });
    const observeOffsetParent = () => {
      const offsetParent = isFullScreen ? frameElement.offsetParent : null;
      if (offsetParent !== observedOffsetParent) {
        mutationObserver.disconnect();
        observedOffsetParent = offsetParent;
        if (offsetParent != null)
          mutationObserver.observe(offsetParent, {
            attributeFilter: ["class", "style"],
            attributes: true,
          });
      }
    };
    const reposition = () => {
      if (isFullScreen && rightPanelColumnCount.get() !== 1) {
        frameElement.style.display = "none";
        return;
      }
      positionMcpAppFrame({
        frameElement,
        isFullScreen,
        targetFrameContainer: targetContainer,
        threadFrameContainer: portalTarget as HTMLElement,
      });
      frameElement.style.display = "";
      observeOffsetParent();
    };
    let animationFrame: number | null = null;
    const scheduleReposition = () => {
      animationFrame ??= window.requestAnimationFrame(() => {
        animationFrame = null;
        reposition();
      });
    };
    reposition();
    if (typeof ResizeObserver === "undefined")
      return () => {
        mutationObserver.disconnect();
        if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
      };
    const resizeObserver = new ResizeObserver(reposition);
    resizeObserver.observe(targetContainer);
    resizeObserver.observe(portalTarget);
    const unsubscribe = rightPanelLayoutTick.on("change", scheduleReposition);
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      unsubscribe();
      if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
    };
  }, [
    frameElement,
    connectedInlineContainer,
    isFullScreen,
    isFramePlaced,
    rightPanelColumnCount,
    rightPanelLayoutTick,
    webviewElement,
    connectedSidePanelElement,
    portalTarget,
  ]);

  React.useLayoutEffect(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
      closeMcpAppTab(store, mcpAppId);
    };
  }, [mcpAppId, store]);

  const registerSidePanel = React.useEffectEvent(
    (onExitFullScreen: () => void) => {
      openMcpAppTab(store, {
        activate: !(
          store.get(sidePanelTabController.tabs$) as { tabId: string }[]
        ).some((tab) => tab.tabId === mcpAppTabId(mcpAppId)),
        icon: sidePanelIcon,
        mcpAppId,
        onExitFullScreen,
        onPanelElementChange: setSidePanelElement,
        title: sidePanelTitle,
      });
    },
  );
  const handleExitFullScreen = React.useEffectEvent(() => {
    if (!isUnmountedRef.current) {
      exitMcpAppFullScreen(store, mcpAppId);
      updateMcpAppFrameState(store, mcpAppId, { isFullScreen: false });
    }
  });

  React.useLayoutEffect(() => {
    if (isFullScreen) {
      registerSidePanel(handleExitFullScreen);
      return;
    }
    closeMcpAppTab(store, mcpAppId);
  }, [
    isFullScreen,
    mcpAppId,
    store,
    sidePanelIcon?.alt,
    sidePanelIcon?.logoDarkUrl,
    sidePanelIcon?.logoUrl,
    sidePanelTitle,
  ]);

  React.useLayoutEffect(() => {
    if (webviewElement == null || frameElement == null || !isFramePlaced)
      return;
    updateMcpAppFrameState(store, mcpAppId, { sandboxError: null });
    setIsWidgetReady(false);
    setNavigationState(DEFAULT_NAVIGATION_STATE);
    lastWidgetDataRef.current = null;
    const initConfig = readSandboxInitConfig();
    if (initConfig == null) {
      logger.warning("mcp_app_sandbox.init_config_missing", {
        safe: {},
        sensitive: { mcpAppId },
      });
      updateMcpAppFrameState(store, mcpAppId, {
        sandboxError: new Error("The MCP app sandbox failed to load."),
      });
      return;
    }
    const abortController = new AbortController();
    let connectedApi: any = null;
    const widgetIdValue = crypto.randomUUID();
    const initialWidgetState = readWidgetState();
    const { toolInput, toolOutput, toolResponseMetadata } = readWidgetData();
    connectMcpAppSandbox({
      hostApiHandlers: {
        callMcp: handleCallMcp,
        callTool: handleCallTool,
        notifyBackgroundColor: handleBackgroundColor,
        notifyEnvironmentError: handleEnvironmentError,
        notifyIntrinsicHeight: handleIntrinsicHeight,
        notifyIntrinsicWidth: handleIntrinsicWidth,
        notifyNavigation: (value: unknown) => {
          if (!abortController.signal.aborted) handleNavigationState(value);
        },
        notifySecurityPolicyViolation: () => {},
        openExternal: handleOpenExternal,
        requestDisplayMode: handleRequestDisplayMode,
        sendFollowUpMessage: handleSendFollowUp,
        sendInstrument: () => {},
        updateWidgetState: handleUpdateWidgetState,
      },
      origin: initConfig.sandboxOrigin,
      sandboxId,
      signal: abortController.signal,
      sourceUrl: initConfig.sourceUrl,
      webview: webviewElement,
    })
      .then(async (api) => {
        if (abortController.signal.aborted) return;
        connectedApi = api;
        setSandboxApi(api);
        setWidgetId(widgetIdValue);
        const displayMode = readDisplayMode();
        const theme = resolveMcpAppColorScheme();
        const containerDimensions =
          measureMcpAppContainerDimensions(frameElement);
        const userAgent = buildMcpAppUserAgent();
        const surfaceColor = store.get(mcpAppSurfaceBackgroundColorAtom);
        const hostContext = buildMcpAppHostContext({
          containerDimensions,
          displayMode,
          locale: initConfig.locale,
          safeAreaInsets: DEFAULT_MCP_APP_SAFE_AREA.insets,
          styleVariables: store.get(mcpAppStyleVariablesAtom),
          theme,
          userAgent,
        });
        const widgetStream = api.runWidgetCode({
          csp: initConfig.csp,
          displayMode,
          features: ["fullscreen"],
          html: initConfig.html,
          isFirstParty: false,
          isSidebarOpen: false,
          isTombstone: false,
          maxHeight: containerDimensions.maxHeight,
          maxWidth: containerDimensions.maxWidth,
          measureWidth: false,
          mcpApps: {
            hostCapabilities: {
              logging: {},
              message: {},
              openLinks: {},
              serverResources: {},
              serverTools: {},
              updateModelContext: { image: {}, text: {} },
              ...(initConfig.csp == null
                ? {}
                : {
                    sandbox: {
                      csp: {
                        baseUriDomains: initConfig.csp.baseUriDomains,
                        connectDomains: initConfig.csp.connectDomains,
                        frameDomains: initConfig.csp.frameDomains,
                        resourceDomains: initConfig.csp.resourceDomains,
                      },
                    },
                  }),
            },
            hostContext,
            hostInfo: { name: "chatgpt" },
          },
          safeArea: DEFAULT_MCP_APP_SAFE_AREA,
          theme,
          toolInput,
          toolOutput,
          toolResponseMetadata,
          userAgent,
          viewParams: toolOutput,
          widgetId: widgetIdValue,
          widgetState: initialWidgetState,
        });
        let didNotifyReady = false;
        for await (const event of widgetStream) {
          if (abortController.signal.aborted) break;
          if (
            !didNotifyReady &&
            environmentStatusSchema.safeParse(event).success
          ) {
            didNotifyReady = true;
            setIsWidgetReady(true);
            swallowMcpAppRpcError(
              api.setWidgetView({
                displayMode,
                isTombstone: false,
                viewParams: toolOutput,
                widgetId: widgetIdValue,
              }),
            );
            swallowMcpAppRpcError(api.setTheme({ theme }));
            swallowMcpAppRpcError(
              api.setSafeArea({ safeArea: DEFAULT_MCP_APP_SAFE_AREA }),
            );
            swallowMcpAppRpcError(
              api.setAdditionalGlobals({
                additionalGlobals: {
                  isSidebarOpen: false,
                  maxHeight: containerDimensions.maxHeight,
                  maxWidth: containerDimensions.maxWidth,
                  surfaceBackgroundColor: surfaceColor,
                },
              }),
            );
            swallowMcpAppRpcError(
              api.notifyMcpAppsHostContext({ hostContext }),
            );
          }
        }
      })
      .catch((error: unknown) => {
        if (abortController.signal.aborted) return;
        logger.warning("mcp_app_sandbox.init_failed", {
          safe: {
            errorMessage:
              error instanceof Error ? error.message : String(error),
            errorName: error instanceof Error ? error.name : "UnknownError",
          },
          sensitive: { mcpAppId },
        });
        setIsWidgetReady(false);
        updateMcpAppFrameState(store, mcpAppId, {
          sandboxError: new Error("The MCP app sandbox failed to load."),
        });
      });
    return () => {
      abortController.abort();
      lastWidgetDataRef.current = null;
      setIsWidgetReady(false);
      setSandboxApi(null);
      setNavigationState(DEFAULT_NAVIGATION_STATE);
      setWidgetId(null);
      if (connectedApi != null)
        swallowMcpAppRpcError(
          connectedApi.requestMcpAppsResourceTeardown({ timeoutMs: 500 }),
        );
      webviewElement.removeAttribute("src");
    };
  }, [frameElement, isFramePlaced, mcpAppId, store, webviewElement, sandboxId]);

  React.useEffect(() => {
    if (!isWidgetReady || sandboxApi == null || widgetId == null) return;
    const widgetData = {
      toolInput,
      toolOutput,
      toolResponseMetadata,
      toolResult: {
        content: selectedToolResult.content,
        structuredContent: selectedToolResult.structuredContent ?? undefined,
      },
    };
    if (equal(lastWidgetDataRef.current, widgetData)) return;
    lastWidgetDataRef.current = widgetData;
    const currentWidgetState = readWidgetState();
    swallowMcpAppRpcError(
      sandboxApi.setWidgetData({
        toolInput,
        toolOutput,
        toolResponseMetadata,
        widgetId,
        widgetState: currentWidgetState,
      }),
    );
    if (toolInput != null)
      swallowMcpAppRpcError(
        sandboxApi.notifyMcpAppsToolInput({ arguments: toolInput }),
      );
    swallowMcpAppRpcError(
      sandboxApi.notifyMcpAppsToolResult({
        content: selectedToolResult.content,
        ...(selectedToolResult.structuredContent == null
          ? {}
          : { structuredContent: selectedToolResult.structuredContent }),
        ...(toolResponseMetadata == null
          ? {}
          : { _meta: toolResponseMetadata }),
      }),
    );
  }, [
    isWidgetReady,
    sandboxApi,
    toolInput,
    toolOutput,
    toolResponseMetadata,
    selectedToolResult,
    widgetId,
  ]);

  React.useEffect(() => {
    if (
      frameElement == null ||
      sandboxApi == null ||
      widgetId == null ||
      (isFullScreen && connectedSidePanelElement == null)
    )
      return;
    let animationFrame: number | null = null;
    const displayMode = isFullScreen ? "fullscreen" : "inline";
    const pushLayout = () => {
      const containerDimensions =
        measureMcpAppContainerDimensions(frameElement);
      const safeArea = resolveMcpAppSafeArea({
        displayMode,
        hasNavigationHistory:
          navigationState.canGoBack || navigationState.canGoForward,
      });
      swallowMcpAppRpcError(
        sandboxApi.setAdditionalGlobals({
          additionalGlobals: {
            isSidebarOpen: false,
            maxHeight: containerDimensions.maxHeight,
            maxWidth: containerDimensions.maxWidth,
            surfaceBackgroundColor,
          },
        }),
      );
      swallowMcpAppRpcError(sandboxApi.setSafeArea({ safeArea }));
      swallowMcpAppRpcError(
        sandboxApi.setWidgetView({
          displayMode,
          isTombstone: false,
          viewParams: toolOutput,
          widgetId,
        }),
      );
      swallowMcpAppRpcError(
        sandboxApi.notifyMcpAppsHostContext({
          hostContext: buildMcpAppHostContext({
            containerDimensions,
            displayMode,
            locale: intl.locale,
            safeAreaInsets: safeArea.insets,
            styleVariables,
            theme: resolveMcpAppColorScheme(),
            userAgent: buildMcpAppUserAgent(),
          }),
        }),
      );
    };
    const scheduleLayout = () => {
      animationFrame ??= window.requestAnimationFrame(() => {
        animationFrame = null;
        pushLayout();
      });
    };
    scheduleLayout();
    if (typeof ResizeObserver === "undefined")
      return () => {
        if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
      };
    const resizeObserver = new ResizeObserver(scheduleLayout);
    resizeObserver.observe(frameElement);
    const unsubscribe = rightPanelLayoutTick.on("change", scheduleLayout);
    return () => {
      resizeObserver.disconnect();
      unsubscribe();
      if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
    };
  }, [
    frameElement,
    intl.locale,
    styleVariables,
    isFullScreen,
    navigationState.canGoBack,
    navigationState.canGoForward,
    rightPanelLayoutTick,
    sandboxApi,
    connectedSidePanelElement,
    surfaceBackgroundColor,
    toolOutput,
    widgetId,
  ]);

  const resolveFollowUp = (result: unknown) => {
    const current = pendingFollowUp;
    if (current != null) {
      setPendingFollowUp(null);
      current.resolve(result);
    }
  };
  const rejectFollowUp = () => {
    const current = pendingFollowUp;
    if (current != null) {
      setPendingFollowUp(null);
      current.reject(
        createMcpAppError(
          "Follow-up message was not confirmed",
          MCP_APP_DEFAULT_ERROR_CODE,
        ),
      );
    }
  };
  const isWebview = webviewElement?.tagName === "WEBVIEW";
  const canShowDevtools =
    frameElement != null &&
    sandboxApi != null &&
    isWebview &&
    isMcpAppDevtoolsEnabled();
  const hasNavigationHistory =
    navigationState.canGoBack || navigationState.canGoForward;
  const showNavigation = sandboxApi != null && hasNavigationHistory;
  const showInlineNavigation = showNavigation && !isFullScreen;
  const showFullScreenNavigation =
    showNavigation &&
    isFullScreen &&
    activeTab?.tabId === mcpAppTabId(mcpAppId);

  return (
    <>
      {pendingFollowUp == null ? null : (
        <McpAppFollowUpConfirmation
          conversationId={conversationId}
          onCancel={rejectFollowUp}
          onConfirm={resolveFollowUp}
          prompt={pendingFollowUp.prompt}
          title={pendingFollowUp.title}
        />
      )}
      {showFullScreenNavigation ? (
        <sidePanelSlots.RightPanelTabListBefore>
          <McpAppNavigationControls
            canGoBack={navigationState.canGoBack}
            canGoForward={navigationState.canGoForward}
            className="h-full px-1"
            onBack={() => handleNavigateDelta(-1)}
            onForward={() => handleNavigateDelta(1)}
          />
        </sidePanelSlots.RightPanelTabListBefore>
      ) : null}
      {showInlineNavigation && frameElement != null && !isFullScreen
        ? createPortal(
            <McpAppNavigationControls
              canGoBack={navigationState.canGoBack}
              canGoForward={navigationState.canGoForward}
              className="absolute top-2 left-2 z-50 rounded-md border border-token-border bg-token-main-surface-primary/95 p-0.5 shadow-sm"
              onBack={() => handleNavigateDelta(-1)}
              onForward={() => handleNavigateDelta(1)}
            />,
            frameElement,
          )
        : null}
      {canShowDevtools && frameElement != null
        ? createPortal(
            <Tooltip
              side="top"
              align="end"
              tooltipContent={
                <FormattedMessage
                  id="codex.mcpTool.mcpAppSandboxDevtoolsTooltip"
                  defaultMessage="Open app DevTools"
                  description="Tooltip for a development-only button that opens DevTools for an MCP app sandbox webview"
                />
              }
            >
              <div className="absolute top-2 right-2 z-50 inline-flex w-fit">
                <Button
                  color="secondary"
                  size="default"
                  className="cursor-interaction border border-token-border bg-token-main-surface-primary/95 px-2 py-0.5 text-xs shadow-sm"
                  aria-label={intl.formatMessage({
                    id: "codex.mcpTool.mcpAppSandboxDevtoolsAriaLabel",
                    defaultMessage: "Open app DevTools",
                    description:
                      "Aria label for a development-only button that opens DevTools for an MCP app sandbox webview",
                  })}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    appMessenger.dispatchMessage(
                      "open-mcp-app-sandbox-devtools",
                      { sandboxId },
                    );
                  }}
                  onPointerDown={(event: React.PointerEvent) =>
                    event.stopPropagation()
                  }
                >
                  <FormattedMessage
                    id="codex.mcpTool.mcpAppSandboxDevtoolsButton"
                    defaultMessage="DevTools"
                    description="Label for a development-only button that opens DevTools for an MCP app sandbox webview"
                  />
                </Button>
              </div>
            </Tooltip>,
            frameElement,
          )
        : null}
    </>
  );
}
