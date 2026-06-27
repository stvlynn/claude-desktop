// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// App-shell route entry components for main, summary, and side-chat local conversation threads.
import React, { useState, type ComponentType, type ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  DN as Button,
  Dl as createLocalConversationRouteTarget,
  FB as useScope,
  Fp as expiredSideChatSignal,
  M_ as localConversationRouteScope,
  MB as ScopeValueProvider,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  P_ as getLocalThreadConversationIdFromRoute,
  Up as conversationCollaborationModeSignal,
  VE as initHostConfigHelpers,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  gp as conversationCwdSignal,
  iF as initIntlRuntime,
  mP as logger,
  Tp as hasConversationSignal,
  uM as toastSignal,
  wl as composerScope,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { _c as getSidePanelTargetStore } from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  Eu as EmptyConversationState,
  Ql as initSummaryPanelBannerChunk,
  Qn as SummaryPanelBanner,
  Xc as initEmptyPageStateChunk,
  oa as AutomationDescription,
  sc as SideChatHeader,
  st as initSideChatHeaderChunk,
  wu as EmptyPageState,
} from "../../boundaries/current-ref/profile-page-producer";
import { ji as useBackgroundSubagentsEnabled } from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  initOpenSideChatTabChunk,
  openSideChatTab,
} from "../../threads/thread-overflow-menu";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  initResumeLocalConversationChunk,
  useResumeLocalConversation,
} from "./local-conversation-resume";
import {
  ConnectedLocalWorktreeRestoreBanner,
  initWorktreeRestoreBannerChunk,
} from "./local-conversation-worktree-restore-banner";
import {
  initLocalConversationThreadFrameChunk,
  LocalConversationThreadFrame,
} from "./local-conversation-thread-frame";
import {
  initLocalConversationThreadContentChunk,
  LocalConversationThreadContentCore,
} from "./local-conversation-thread-content";
import {
  initAutoFollowVirtualizedTurnListChunk,
  LocalConversationAutoFollowVirtualizedTurnList,
} from "./local-conversation-auto-follow-turn-list";
import {
  initLocalConversationTurnRowChunk,
  LocalConversationTurnRow,
} from "./local-conversation-turn-row";
import {
  initThreadScrollStateSignal,
  threadScrollStateSignal,
} from "./local-conversation-thread-scroll-state-signal";
import {
  initVirtualizedTurnListChunk,
  VirtualizedTurnList,
} from "./local-conversation-virtualized-turn-list";
import {
  initLocalConversationTurnSelectors,
  localConversationVisibleTurnEntriesSignal,
  subagentResponseInProgressSignal,
} from "./local-conversation-turn-selectors";

type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;
type AnyComponent = ComponentType<any>;

type LocalConversationSideChatThreadProps = {
  conversationId: string;
  lockedCollaborationMode?: unknown;
  target: unknown;
};

type LocalConversationMainThreadProps = {
  conversationId: string;
};

export type LocalConversationSummaryThreadProps = {
  conversationId: string;
  header?: ReactNode;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
};

function LocalConversationSideChatThread({
  conversationId,
  lockedCollaborationMode,
  target,
}: LocalConversationSideChatThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    isExpiredSideChat = useScopedValue(expiredSideChatSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    sourceConversationId = getLocalThreadConversationIdFromRoute(scope.value),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled();

  if (!hasConversation)
    return (
      <ExpiredSideChatState
        conversationId={conversationId}
        sourceConversationId={sourceConversationId}
        target={target}
      />
    );

  let sideChatHeader =
    isExpiredSideChat === true ? null : (
      <SideChatHeader conversationId={conversationId} hostId={hostId} />
    );
  let threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "side",
      sourceConversationId,
    ),
    expiredSideChatBanner =
      isExpiredSideChat === true ? (
        <ExpiredSideChatState
          conversationId={conversationId}
          presentation="banner"
          sourceConversationId={sourceConversationId}
          target={target}
        />
      ) : undefined;
  let isReadOnly = isExpiredSideChat === true,
    showComposer = isExpiredSideChat !== true,
    threadFrame = (
      <LocalConversationThreadFrame
        MainThreadComponent={LocalConversationMainThread}
        SideChatThreadComponent={LocalConversationSideChatThread}
        ThreadContentComponent={LocalConversationThreadContent}
        WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
        conversationId={conversationId}
        hasConversation={hasConversation}
        hostId={hostId}
        isResuming={false}
        showExternalFooter={false}
        footerContent={expiredSideChatBanner}
        isReadOnly={isReadOnly}
        lockedCollaborationMode={lockedCollaborationMode}
        showComposer={showComposer}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        subagentResponseInProgressSignal={subagentResponseInProgressSignal}
        threadScrollStateSignal={threadScrollStateSignal}
      />
    );

  return (
    <>
      {sideChatHeader}
      <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
        {threadFrame}
      </ScopeValueProvider>
    </>
  );
}

type ExpiredSideChatStateProps = {
  conversationId: string;
  presentation?: "banner" | "page";
  sourceConversationId?: string | null;
  target: unknown;
};

function ExpiredSideChatState({
  conversationId,
  presentation = "page",
  sourceConversationId,
  target,
}: ExpiredSideChatStateProps) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    sourceCwd = useScopedValue(conversationCwdSignal, sourceConversationId),
    sourceHostId = useScopedValue(
      conversationHostIdSignal,
      sourceConversationId,
    ),
    sourceCollaborationMode = useScopedValue(
      conversationCollaborationModeSignal,
      sourceConversationId,
    ),
    displayTitle = useScopedValue(
      getSidePanelTargetStore(target).tabById$,
      `sidechat:${conversationId}`,
    )?.title,
    [isRecreatingSideChat, setIsRecreatingSideChat] = useState(false),
    recreateSideChat = () => {
      sourceConversationId == null ||
        isRecreatingSideChat ||
        (setIsRecreatingSideChat(true),
        openSideChatTab(scope, LocalConversationSideChatThread, {
          sourceConversationId,
          cwd: sourceCwd,
          hostId: sourceHostId,
          collaborationMode: sourceCollaborationMode,
          displayTitle,
          intl,
          target,
        }).catch((error) => {
          setIsRecreatingSideChat(false);
          logger.error("Error recreating expired side chat", {
            safe: {},
            sensitive: {
              error,
            },
          });
          scope.get(toastSignal).danger(
            intl.formatMessage({
              id: "localConversation.sideChat.recreateError",
              defaultMessage: "Failed to start a new side chat",
              description:
                "Error message shown when recreating an expired side chat fails",
            }),
          );
        }));
    };

  let expiredTitle = (
      <FormattedMessage
        id="localConversation.sideChat.expired.title"
        defaultMessage="Side chat expired"
        description="Title shown when an ephemeral side chat can no longer be continued"
      />
    ),
    expiredDescription = (
      <FormattedMessage
        id="localConversation.sideChat.expired.description"
        defaultMessage="This temporary side chat is no longer available; start a new side chat to continue"
        description="Description shown when an ephemeral side chat must be recreated"
      />
    ),
    actionButton =
      sourceConversationId == null ? null : (
        <Button loading={isRecreatingSideChat} onClick={recreateSideChat}>
          <FormattedMessage
            id="localConversation.sideChat.expired.action"
            defaultMessage="Start new side chat"
            description="Button label to replace an expired side chat"
          />
        </Button>
      );

  if (presentation === "banner") {
    return (
      <SummaryPanelBanner
        type="info"
        layout="vertical"
        title={expiredTitle}
        content={expiredDescription}
        customCtas={actionButton}
      />
    );
  }

  return (
    <EmptyPageState
      className="h-full"
      spacing="compact"
      title={expiredTitle}
      description={expiredDescription}
      actions={actionButton}
    />
  );
}

export function LocalConversationMainThread({
  conversationId,
}: LocalConversationMainThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    { isResuming } = useResumeLocalConversation(conversationId),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      conversationId={conversationId}
      hasConversation={hasConversation}
      hostId={hostId}
      isResuming={isResuming}
      showExternalFooter={false}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );

  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}

function LocalConversationSummaryThread({
  conversationId,
  header,
  onOpenBackgroundAgent,
}: LocalConversationSummaryThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      conversationId={conversationId}
      hasConversation={hasConversation}
      header={header}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={true}
      isResuming={false}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      showComposer={false}
      showExternalFooter={false}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );

  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}

function LocalConversationThreadContent(props: Record<string, unknown>) {
  return (
    <LocalConversationThreadContentCore
      {...props}
      AutomationDescriptionComponent={AutomationDescription as AnyComponent}
      AutoFollowVirtualizedTurnListComponent={
        LocalConversationAutoFollowVirtualizedTurnList
      }
      EmptyStateComponent={EmptyConversationState as AnyComponent}
      TurnRowComponent={LocalConversationTurnRow}
      VirtualizedTurnListComponent={VirtualizedTurnList}
      localConversationVisibleTurnEntriesSignal={
        localConversationVisibleTurnEntriesSignal
      }
    />
  );
}

const initLocalConversationThreadEntryComponentsChunk = once(() => {
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initToastRuntime();
  initResumeLocalConversationChunk();
  initVscodeMessageBridge();
  initAppScope();
  initHostConfigHelpers();
  initOpenSideChatTabChunk();
  initLocalConversationThreadFrameChunk();
  initLocalConversationThreadContentChunk();
  initWorktreeRestoreBannerChunk();
  initThreadScrollStateSignal();
  initAutoFollowVirtualizedTurnListChunk();
  initLocalConversationTurnRowChunk();
  initVirtualizedTurnListChunk();
  initLocalConversationTurnSelectors();
  initSideChatHeaderChunk();
  initSummaryPanelBannerChunk();
  initEmptyPageStateChunk();
});

LocalConversationMainThread.initChunk =
  initLocalConversationThreadEntryComponentsChunk;
LocalConversationMainThread.SideChatThread = LocalConversationSideChatThread;
LocalConversationMainThread.SummaryThread = LocalConversationSummaryThread;
LocalConversationMainThread.ThreadContent = LocalConversationThreadContent;
