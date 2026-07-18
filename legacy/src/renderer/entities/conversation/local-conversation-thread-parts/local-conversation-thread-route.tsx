// @ts-nocheck
// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Route-level thread composition for the local conversation screen.
import { once } from "../../../shared/runtime/commonjs-interop";
import { useStableCallback } from "../../../shared/lib/use-stable-callback";
import { initAppLoggerRuntime } from "../../../shared/runtime/app-logger";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../../../shared/runtime/app-scope-hooks";
import { initAppScopeSignalRuntime } from "../../../shared/runtime/app-scope-runtime";
import { initAppServerRequestRuntime } from "../../../shared/runtime/app-server-request";
import { useAppsQuery } from "../../../shared/runtime/connector-apps-runtime";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
  hasConversationSignal,
  initConversationStateRuntime,
  subagentParentThreadIdSignal,
  threadSourceSignal,
} from "../../../shared/runtime/conversation-state-runtime";
import { initHostWorkspaceQueries } from "../../../shared/runtime/git-query-runtime";
import { initHostConfigRuntime } from "../../../shared/runtime/host-config-runtime";
import {
  getHotkeyWindowFallbackPath,
  initLocalConversationRouteRuntime,
  initToastSignalRuntime,
  localConversationRouteScope,
  Navigate,
} from "../../../shared/conversations/local-conversation-route-runtime";
import { initPathHelpersRuntime } from "../../../shared/lib/path-helpers";
import { PlatformContentGate } from "../../../shared/runtime/platform-content-runtime";
import { initVscodeMessageRuntime } from "../../../shared/runtime/vscode-message-runtime";
import { getLocalThreadConversationIdFromRoute } from "../../../shared/lib/local-thread-route";
import { rightPanelFullWidthSignal } from "../../../features/plugins/mcp-app-frame";
import { ErrorBoundary as ThreadSummaryPanelErrorBoundary } from "../../../shared/runtime/error-boundary/error-boundary";
import { threadSwitchTimingTracker } from "../../automation/heartbeat-automation-eligibility/index";
import { launcherHotkeyStateQuery } from "../../../features/features/hotkey-window-state";
import { useIsBackgroundSubagentsEnabled as useBackgroundSubagentsEnabled } from "../../../shared/lib/use-is-background-subagents-enabled";
import { ConnectedLocalWorktreeRestoreBanner } from "./local-conversation-worktree-restore-banner";
import {
  ChromeExtensionConversationHeader,
  initChromeExtensionConversationHeaderChunk,
} from "./local-conversation-chrome-extension-header";
import { LocalConversationMainThread } from "./local-conversation-thread-entry-components";
import { LocalConversationThreadFrame } from "./local-conversation-thread-frame";
import { openBackgroundAgentFromThread } from "./local-conversation-background-agent-open";
import {
  localConversationVisibleTurnEntriesSignal,
  subagentResponseInProgressSignal,
} from "./local-conversation-turn-selectors";
import { FloatingLocalConversationSummaryPanel } from "./local-conversation-summary-panel";
import { renderLocalConversationMarkdownForTurns } from "./local-conversation-markdown-renderer";
import {
  initLocalConversationNavigationHelpers,
  useMissingLocalConversationRedirect,
} from "./local-conversation-navigation";
import {
  initResumeLocalConversationChunk,
  useResumeLocalConversation,
} from "./local-conversation-resume";
import {
  initSummaryPanelErrorFallbackChunk,
  SummaryPanelErrorFallback,
} from "./local-conversation-summary-panel-error";
import { useLocalConversationSummaryPanelModel } from "./local-conversation-summary-panel-model";
import { usePinnedSummaryPanelDisplay } from "./pinned-summary-panel-layout";
import { shouldUseFullWidthRightPanelForRoute } from "../../../shared/lib/right-panel-route-state";
import { threadScrollStateSignal } from "../../../shared/conversations/local-conversation-thread-parts/local-conversation-thread-scroll-state-signal";
import { initIntlRuntime } from "../../../shared/runtime/react-intl";

type RenderableThreadNode = unknown;
export type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;

export interface LocalConversationThreadProps {
  conversationId?: string | null;
  shouldResume?: boolean;
  allowMissingConversation?: boolean;
  showExternalFooter?: boolean;
  composerSurfaceClassName?: string;
  footerContent?: RenderableThreadNode;
  isReadOnly?: boolean;
  showComposer?: boolean;
  lockedCollaborationMode?: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}

export const LocalConversationSideChatThread =
  LocalConversationMainThread.SideChatThread;
export const LocalConversationSummaryThread =
  LocalConversationMainThread.SummaryThread;

export function LocalConversationThread({
  conversationId,
  shouldResume = true,
  allowMissingConversation = false,
  showExternalFooter = true,
  composerSurfaceClassName,
  footerContent,
  isReadOnly = false,
  showComposer = true,
  lockedCollaborationMode,
  onOpenBackgroundAgent,
}: LocalConversationThreadProps) {
  if (!conversationId) return <Navigate to="/" />;
  return (
    <LocalConversationThreadRoute
      conversationId={conversationId}
      shouldResume={shouldResume}
      allowMissingConversation={allowMissingConversation}
      showExternalFooter={showExternalFooter}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      isReadOnly={isReadOnly}
      showComposer={showComposer}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
    />
  );
}

function LocalConversationThreadRoute({
  conversationId,
  shouldResume = true,
  allowMissingConversation = false,
  showExternalFooter = true,
  composerSurfaceClassName,
  footerContent,
  isReadOnly = false,
  showComposer = true,
  lockedCollaborationMode,
  onOpenBackgroundAgent,
}: Required<Pick<LocalConversationThreadProps, "conversationId">> &
  Omit<LocalConversationThreadProps, "conversationId">) {
  let scope = useScope(localConversationRouteScope),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    { data } = useSignalValue(launcherHotkeyStateQuery),
    hasConfiguredLauncherHotkey = data == null || data.configuredHotkey != null,
    launcherFallbackPath = getHotkeyWindowFallbackPath(
      hasConfiguredLauncherHotkey,
    ),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId);
  useScopedValue(conversationCwdSignal, conversationId);
  useScopedValue(threadSourceSignal, conversationId);
  useAppsQuery({ enabled: false, hostId });
  let isRightPanelFullWidth = useSignalValue(rightPanelFullWidthSignal),
    hideThreadContent = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth,
      routeConversationId: getLocalThreadConversationIdFromRoute(scope.value),
    }),
    summaryPanelDisplay = usePinnedSummaryPanelDisplay(conversationId),
    summaryPanelModel = useLocalConversationSummaryPanelModel(
      summaryPanelDisplay.shouldShow,
    ),
    { isResuming } = useResumeLocalConversation(
      shouldResume ? (conversationId ?? null) : null,
    ),
    subagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null;
  useMissingLocalConversationRedirect({
    allowMissingConversation,
    hasConversation,
    isResuming,
    subagentParentThreadId,
    launcherFallbackPath,
    visibleSubagentParentThreadId,
  });
  let onVisibleThreadContentReady = useStableCallback((turnCount) => {
      threadSwitchTimingTracker.complete(scope, "thread_switch_completed", {
        conversationId,
        turnCount,
      });
    }),
    onOpenBackgroundAgentFromSummary = useStableCallback((backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
        LocalConversationMainThread,
      );
    }),
    headerContent = (
      <ChromeExtensionConversationHeader
        conversationId={conversationId}
        renderLocalConversationMarkdownForTurns={
          renderLocalConversationMarkdownForTurns
        }
        visibleTurnEntriesSignal={localConversationVisibleTurnEntriesSignal}
      />
    ),
    contentX = hideThreadContent ? undefined : summaryPanelDisplay.contentShift,
    renderSummaryPanelErrorFallback = (errorBoundary: {
      resetError: () => void;
    }) => (
      <SummaryPanelErrorFallback
        display={summaryPanelDisplay}
        onRetry={() => {
          errorBoundary.resetError();
        }}
      />
    );
  let summaryPanel = (
      <FloatingLocalConversationSummaryPanel
        {...summaryPanelDisplay}
        {...summaryPanelModel}
        onOpenBackgroundAgent={onOpenBackgroundAgentFromSummary}
      />
    ),
    floatingSummaryPanel = (
      <PlatformContentGate browser={true} electron={true}>
        <ThreadSummaryPanelErrorBoundary
          name="ThreadSummaryPanel"
          fallback={renderSummaryPanelErrorFallback}
        >
          {summaryPanel}
        </ThreadSummaryPanelErrorBoundary>
      </PlatformContentGate>
    );
  return (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationMainThread.ThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      key={conversationId}
      conversationId={conversationId}
      contentX={contentX}
      floatingContent={floatingSummaryPanel}
      hasConversation={hasConversation}
      header={headerContent}
      hideThreadContent={hideThreadContent}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={isReadOnly}
      isResuming={isResuming}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      showComposer={showComposer}
      showExternalFooter={showExternalFooter}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );
}

export const initLocalConversationThreadRoute = once(() => {
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initToastSignalRuntime();
  initResumeLocalConversationChunk();
  initLocalConversationNavigationHelpers();
  initSummaryPanelErrorFallbackChunk();
  initChromeExtensionConversationHeaderChunk();
  initVscodeMessageRuntime();
  initAppScopeSignalRuntime();
  initHostWorkspaceQueries();
  initHostConfigRuntime();
  initAppLoggerRuntime();
  LocalConversationMainThread.initChunk();
});
