// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core renderer for a single conversation turn: partitions the turn's items into
// user / agent-activity / assistant / tool-output / system buckets, computes the
// collapse state of the agent activity slice, and assembles the ordered list of
// rendered sections (messages, activity, plan, diff, end resources, review
// comments, generated images, actions) for the local conversation thread.
import { useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useIntl } from "../vendor/react-intl";
import {
  getTurnAgentItemGroups,
  sliceTurnItemsAfterIntro,
  type TurnItem,
} from "./partition-turn-items";
import { resolveRenderableAgentItems } from "./group-renderable-agent-items";
import { filterTurnDiffToProjectlessOutput } from "./filter-diff-to-projectless-output";
import {
  computeTurnCollapseState,
  partitionCollapsibleEntries,
  type RenderableTurnEntry,
} from "./turn-collapse-state";
import { EndResourcesList } from "./end-resource-cards";
import { ReviewCommentsCard } from "./review-comments-card";
import { SubagentActivityInlineGroup } from "./subagent-activity-inline-group";
import {
  DEFAULT_RESOLVED_APPS,
  EVERYDAY_WORK_DETAIL_LEVEL,
  hostMessageBridge,
  logger,
  useStableCallback,
  useFeatureGate,
  useDefaultConversationDetailLevel,
  useAppgenEndCardEnabled,
  useTurnFollowState,
  useBackgroundSubagents,
  useMcpServerStatuses,
  useProductLogger,
  buildToolActivityTurnKey,
  buildSubagentActivityRows,
  summarizeSubagentActivityStatus,
  buildContentSearchKey,
  getTurnMessageId,
  getTurnInputMessageId,
  openResourceFromAssistant,
  computeEndResources,
  getEndResourcePaths,
  shouldHideTurnDiff,
  extractReviewComments,
  computeGeneratedImageOutputs,
  hasAssistantStarted,
  isAssistantFinalAnswer,
  summarizeHookRuns,
  computeProcessTargets,
  isItemInProgress,
  hasMcpAppActivity,
  extractWebSearchSources,
  collectDynamicToolCallItems,
  computeTurnStatusIndicator,
  hasActiveDynamicToolCallSummary,
  isDynamicToolCallSummaryActive,
  getFirstNonEmptyEntryIndex,
  shouldShowThinkingFallback,
  sendHostRequest,
  renderTurnSections,
  McpAppsRenderer,
  SafetyBufferingContainer,
  SafetyBufferingPrompt,
  CollapsibleTurnActivity,
  TurnEntryList,
  TurnItemRenderer,
  TurnActionsRow,
  ProposedPlanCard,
  ThinkingPlaceholder,
  TurnInProgressFixedContent,
  AssistantResourcesProvider,
  TurnDiffView,
  GeneratedImagesGrid,
  GeneratedImagePlaceholder,
  WebSearchSources,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_ENTRIES: RenderableTurnEntry[] = [];

interface TurnSection {
  key: string;
  node: ReactNode;
  canOwnLatestTurnFollowContent: boolean;
  gapAfter?: number;
}

interface PushSectionOptions {
  canOwnLatestTurnFollowContent?: boolean;
  gapAfter?: number;
}

export interface TurnContentProps {
  conversationId: string;
  hostId: string;
  turnSearchKey?: string;
  turnId?: string;
  mcpTurn?: Record<string, any> | null;
  turn: {
    status: string;
    items: TurnItem[];
    cwd?: string | null;
    hookRuns?: unknown;
    [key: string]: unknown;
  };
  isBackgroundSubagentsEnabled?: boolean;
  workedDurationMs?: number | null;
  interruptedByThisClient?: boolean;
  conversationDetailLevel?: string;
  cwd: string | null;
  isMostRecentTurn?: boolean;
  isReadOnly?: boolean;
  previousTurnNumber?: number | null;
  totalTurnCount?: number;
  isProjectlessConversation?: boolean;
  projectlessOutputDirectory?: string | null;
  isCollapsed?: boolean | null;
  onSetCollapsed?: (collapsed: boolean) => void;
  emptyUserMessageOverride?: ReactNode;
  parentThreadAttachment?: unknown;
  resolvedApps?: unknown;
  renderMcpApps?: boolean;
  keepMcpAppEntriesPersistent?: boolean;
  reportEntityType?: string;
  shouldAutoExpandMcpApps?: boolean;
  onEditUserMessage?: (...args: unknown[]) => void;
  onForkTurn?: (...args: unknown[]) => void;
  completedThreadGoal?: unknown;
  generatedImages?: unknown;
  startAfterTurnIntro?: boolean;
  showInProgressFixedContent?: boolean;
  deferOffscreenDiffRendering?: boolean;
  modelProvider?: unknown;
  transcriptBlock?: unknown;
  includeTranscriptTurnExtras?: boolean;
  latestTurnFollowContentRef?: unknown;
  onOpenAeonDetails?: (...args: unknown[]) => void;
  showFullTranscript?: boolean;
}

export function TurnContent({
  conversationId,
  hostId,
  turnSearchKey = "turn",
  turnId,
  mcpTurn,
  turn,
  isBackgroundSubagentsEnabled = false,
  workedDurationMs = null,
  interruptedByThisClient = false,
  conversationDetailLevel,
  cwd,
  isMostRecentTurn = false,
  isReadOnly = false,
  previousTurnNumber,
  totalTurnCount,
  isProjectlessConversation = false,
  projectlessOutputDirectory = null,
  isCollapsed,
  onSetCollapsed,
  emptyUserMessageOverride,
  parentThreadAttachment,
  resolvedApps = DEFAULT_RESOLVED_APPS,
  renderMcpApps = true,
  keepMcpAppEntriesPersistent = false,
  reportEntityType = "thread",
  shouldAutoExpandMcpApps = false,
  onEditUserMessage,
  onForkTurn,
  completedThreadGoal,
  generatedImages,
  startAfterTurnIntro = false,
  showInProgressFixedContent = true,
  deferOffscreenDiffRendering = false,
  modelProvider,
  latestTurnFollowContentRef,
  onOpenAeonDetails,
  showFullTranscript = false,
}: TurnContentProps) {
  const intl = useIntl();
  const isTurnInProgress = turn.status === "in_progress";
  const isTurnCancelled = turn.status === "cancelled";
  const safetyBuffering = mcpTurn?.safetyBuffering ?? null;
  const showBufferingUi = safetyBuffering?.showBufferingUi === true;
  const isBufferingVisible = showBufferingUi && isTurnInProgress;
  const turnKey = turnId ?? turnSearchKey;
  const toolActivityTurnKey =
    turnKey == null
      ? undefined
      : buildToolActivityTurnKey(conversationId, turnKey);
  const isFollowingTurn = useTurnFollowState(toolActivityTurnKey);
  const isInterruptedByGate = useFeatureGate("3194650870");
  const workedForOverride =
    isInterruptedByGate &&
    mcpTurn?.status === "interrupted" &&
    interruptedByThisClient
      ? {
          type: "worked-for",
          status: "stopped",
          startedAtMs: 0,
          completedAtMs: workedDurationMs ?? 0,
        }
      : null;
  const workedForOverrideEntry: RenderableTurnEntry | null =
    workedForOverride == null
      ? null
      : { kind: "item", item: workedForOverride as any };
  const defaultDetailLevel = useDefaultConversationDetailLevel();
  const detailLevel = conversationDetailLevel ?? defaultDetailLevel;
  const isEverydayWorkMode = defaultDetailLevel === EVERYDAY_WORK_DETAIL_LEVEL;
  const hideCommandDetails =
    isProjectlessConversation && detailLevel === "STEPS_PROSE";
  const renderMcpAppsEnabled = renderMcpApps && true;
  const mcpAppsNode = renderMcpAppsEnabled ? (
    <McpAppsRenderer
      conversationId={conversationId}
      hostId={hostId}
      items={turn.items}
      resolvedApps={resolvedApps}
    />
  ) : null;
  const isAppgenEndCardEnabled = useAppgenEndCardEnabled();
  const filteredItems = useMemo(() => {
    const items = isBackgroundSubagentsEnabled
      ? turn.items
      : turn.items.filter((item) => item.type !== "subagent-activity");
    return startAfterTurnIntro ? sliceTurnItemsAfterIntro(items) : items;
  }, [isBackgroundSubagentsEnabled, startAfterTurnIntro, turn.items]);
  const {
    userItems,
    assistantItem,
    toolOutputItems,
    systemEventItem,
    agentItems,
    automationUpdateItems,
    unifiedDiffItem,
    todoListItem,
    proposedPlanItem,
    approvalItem,
    userInputItem,
    mcpServerElicitationItems,
    permissionRequestItems,
    postAssistantItems,
    remoteTaskCreatedItems,
    personalityChangedItems,
    forkedFromConversationItems,
    modelChangedItems,
    modelReroutedItems,
    subagentActivityItemGroups,
  } = useMemo(
    () => getTurnAgentItemGroups(filteredItems, turn.status),
    [filteredItems, turn.status],
  );
  const backgroundAgents = useBackgroundSubagents(
    isBackgroundSubagentsEnabled ? conversationId : null,
  );
  const subagentActivityGroups = useMemo(() => {
    if (!isBackgroundSubagentsEnabled) {
      return [];
    }
    if (subagentActivityItemGroups.length > 0) {
      return subagentActivityItemGroups.map((group: any) => {
        const rows = buildSubagentActivityRows({
          activityItems: group,
          backgroundAgents,
          intl,
        });
        return {
          anchorItemId: group[0]?.id ?? null,
          rows,
          statusLabel: summarizeSubagentActivityStatus(
            intl,
            rows.map((row: any) => row.activityStatus),
          ),
        };
      });
    }
    const inlineRows = backgroundAgents
      .filter(
        (agent: any) =>
          agent.showInlineActivity && agent.parentTurnKey === turnKey,
      )
      .map((agent: any) => ({
        activityStatus: agent.status === "done" ? "done" : "active",
        conversationId: agent.conversationId,
        displayName: agent.displayName,
        status: agent.status,
        statusSummary: agent.statusSummary,
      }));
    return inlineRows.length === 0
      ? []
      : [
          {
            anchorItemId: null,
            rows: inlineRows,
            statusLabel: summarizeSubagentActivityStatus(
              intl,
              inlineRows.map((row: any) => row.activityStatus),
            ),
          },
        ];
  }, [
    backgroundAgents,
    intl,
    isBackgroundSubagentsEnabled,
    subagentActivityItemGroups,
    turnKey,
  ]);
  const subagentActivityRows = subagentActivityGroups.flatMap(
    ({ rows }: any) => rows,
  );
  const [animatedConversationIds, setAnimatedConversationIds] = useState(
    () =>
      new Set(
        subagentActivityRows.map(
          ({ conversationId: rowConversationId }: any) => rowConversationId,
        ),
      ),
  );
  const markEntranceAnimated = useStableCallback(
    (rowConversationId: string) => {
      setAnimatedConversationIds((current: Set<string>) => {
        if (current.has(rowConversationId)) {
          return current;
        }
        const next = new Set(current);
        next.add(rowConversationId);
        return next;
      });
    },
  );
  const subagentActivityContentByItemId = new Map<string, ReactNode>();
  for (const group of subagentActivityGroups) {
    if (group.anchorItemId != null) {
      subagentActivityContentByItemId.set(
        group.anchorItemId,
        <SubagentActivityInlineGroup
          rows={group.rows}
          statusLabel={group.statusLabel}
          shouldAnimateEntrance={(rowConversationId: string) =>
            !animatedConversationIds.has(rowConversationId)
          }
          onEntranceAnimationEnd={markEntranceAnimated}
        />,
      );
    }
  }
  const hasSubagentActivity = subagentActivityRows.length > 0;
  const hasActiveSubagentActivity = subagentActivityRows.some(
    ({ status }: any) => status !== "done",
  );
  const searchKeyByItem = useMemo(() => {
    const keyByItem = new Map<TurnItem, string>();
    filteredItems.forEach((item, index) => {
      if (item.type === "user-message") {
        keyByItem.set(item, `${index}:user`);
        return;
      }
      if (item.type === "assistant-message") {
        keyByItem.set(item, `${index}:assistant`);
      }
    });
    return keyByItem;
  }, [filteredItems]);
  const filteredUnifiedDiffItem = useMemo(
    () =>
      filterTurnDiffToProjectlessOutput({
        item: unifiedDiffItem as any,
        projectlessOutputDirectory,
      }),
    [projectlessOutputDirectory, unifiedDiffItem],
  );
  const activeUnifiedDiff =
    (isTurnInProgress ? unifiedDiffItem : filteredUnifiedDiffItem)
      ?.unifiedDiff ?? null;
  const hasBlockingRequest =
    approvalItem != null ||
    userInputItem != null ||
    mcpServerElicitationItems.some((item: any) => !item.completed) ||
    permissionRequestItems.some((item: any) => !item.completed);
  const isEverydayDetail = detailLevel === EVERYDAY_WORK_DETAIL_LEVEL;
  useEffect(() => {
    if (activeUnifiedDiff) {
      try {
        hostMessageBridge.dispatchMessage("update-diff-if-open", {
          unifiedDiff: activeUnifiedDiff,
          conversationId,
        });
      } catch {
        logger.error("Unable to base64 encode unified diff");
      }
    }
  }, [conversationId, activeUnifiedDiff]);
  const hasInProgressAssistantOrPlan =
    isItemInProgress(assistantItem) || isItemInProgress(proposedPlanItem);
  const assistantCopyText =
    !isTurnInProgress && assistantItem ? assistantItem.content.trim() : null;
  const productLogger = useProductLogger();
  const messageId = useMemo(
    () => (mcpTurn == null ? null : getTurnMessageId(mcpTurn)),
    [mcpTurn],
  );
  const inputMessageId = useMemo(
    () => (mcpTurn == null ? null : getTurnInputMessageId(mcpTurn)),
    [mcpTurn],
  );
  const openResource = useStableCallback(
    (resourcePath: string, openSource: string) => {
      if (turnId != null) {
        openResourceFromAssistant({
          conversationId,
          turnId,
          turn,
          assistantContent: assistantItem?.content ?? null,
          resourcePath,
          openSource,
          messageId,
          inputMessageId,
          productLogger,
        });
      }
    },
  );
  const onAssistantFileLinkOpen = useStableCallback((resourcePath: string) => {
    openResource(resourcePath, "assistant_file_link");
  });
  const completedGeneratedImages = toolOutputItems.filter(
    (item: any) => item.src != null,
  );
  const completedTurnId = !isTurnInProgress && turnId != null ? turnId : null;
  const assistantTurnId =
    completedTurnId != null &&
    (assistantItem?.phase === "final_answer" ||
      (assistantItem == null && completedGeneratedImages.length > 0))
      ? completedTurnId
      : null;
  const processTargets = computeProcessTargets({
    commandExecutionStartedAtMsById: mcpTurn?.commandExecutionStartedAtMsById,
    conversationId,
    items: mcpTurn?.items,
    turnId: assistantTurnId,
  });
  const proposedPlanTurnId =
    completedTurnId != null && proposedPlanItem?.completed === true
      ? completedTurnId
      : null;
  const hookStats = isTurnInProgress ? null : summarizeHookRuns(turn.hookRuns);
  const hasFinalAssistantStarted = hasAssistantStarted(assistantItem);
  const safetyBufferingNode = showBufferingUi ? (
    <SafetyBufferingContainer isVisible={isBufferingVisible}>
      <SafetyBufferingPrompt
        fasterModel={safetyBuffering.fasterModel}
        isShimmering={isTurnInProgress}
        onRetry={(model: string) => {
          const retryTurnId = mcpTurn?.turnId ?? turnId;
          if (retryTurnId != null) {
            sendHostRequest("retry-safety-buffered-turn-for-host", {
              hostId,
              conversationId,
              turnId: retryTurnId,
              model,
            }).catch((error: unknown) => {
              logger.error("Failed to retry safety-buffered turn", {
                safe: {},
                sensitive: { error },
              });
            });
          }
        }}
        reasons={safetyBuffering.reasons}
        threadId={conversationId}
        turnId={mcpTurn?.turnId ?? turnId ?? null}
        useCases={safetyBuffering.useCases}
      />
    </SafetyBufferingContainer>
  ) : null;
  const isAssistantFinal = isAssistantFinalAnswer(assistantItem);
  const showAssistantInlineInActivity =
    hasSubagentActivity &&
    isAssistantFinal &&
    assistantItem?.phase === "commentary";
  const hasPendingToolOutputs = toolOutputItems.some(
    (item: any) =>
      item.src == null &&
      (item.status === "in_progress" || item.status === "inProgress"),
  );
  const hasAssistantContent =
    assistantItem != null &&
    (assistantItem.completed || assistantItem.content.trim().length > 0);
  const isActivitySliceClosed =
    hasAssistantContent && (!isTurnInProgress || !isFollowingTurn);
  const {
    renderableAgentItems,
    isAnyNonExploringAgentItemInProgress,
    isExploring,
  } = resolveRenderableAgentItems({
    agentItems,
    isTurnInProgress,
    isAnyNonAgentItemInProgress: hasInProgressAssistantOrPlan || false,
  });
  const shouldAutoExpandMcpAppsResolved =
    renderMcpAppsEnabled && shouldAutoExpandMcpApps;
  const hasMcpApps =
    renderMcpAppsEnabled && hasMcpAppActivity(renderableAgentItems);
  const shouldComputeWebSearchSources =
    turn.status === "complete" &&
    assistantItem?.completed === true &&
    isAssistantFinal &&
    !startAfterTurnIntro;
  const { data: mcpServerStatuses } = useMcpServerStatuses(hostId, {
    enabled: hasMcpApps,
  });
  const webSearchSources = shouldComputeWebSearchSources
    ? extractWebSearchSources(turn.items)
    : [];
  const lastRenderableAgentItem = renderableAgentItems.at(-1);
  const hasActiveWebSearch =
    isTurnInProgress &&
    lastRenderableAgentItem?.kind === "item" &&
    lastRenderableAgentItem.item.type === "web-search";
  const dynamicToolCallItems =
    collectDynamicToolCallItems(renderableAgentItems);
  const turnStatusIndicator = computeTurnStatusIndicator({
    isTurnInProgress,
    assistantItem,
    proposedPlanItem,
    isExploring,
    hasActiveWebSearch,
    hasActiveDynamicToolCallSummary:
      hasActiveDynamicToolCallSummary({
        items: dynamicToolCallItems,
        keepLatestLiveActivityInGroup: isTurnInProgress,
      }) &&
      isDynamicToolCallSummaryActive({
        items: dynamicToolCallItems,
        isActive: isTurnInProgress,
      }),
    isAnyNonExploringAgentItemInProgress,
    hasBlockingRequest,
    forceThinking: false,
  });
  const { shouldAllowCollapse, isCollapsed: isActivityCollapsedByDefault } =
    computeTurnCollapseState({
      forceExpanded: showFullTranscript || false,
      hasFinalAssistantStarted:
        hasFinalAssistantStarted || (!isTurnInProgress && hasSubagentActivity),
      isTurnCancelled,
      hasRenderableAgentItems:
        renderableAgentItems.length > 0 || hasSubagentActivity,
      preventAutoCollapse: isFollowingTurn || hasActiveSubagentActivity,
      persistedCollapsed: isCollapsed,
    });
  const collapsePartition =
    !showFullTranscript && shouldAllowCollapse
      ? partitionCollapsibleEntries(renderableAgentItems, {
          keepMcpAppEntriesPersistent,
          mcpServerStatuses,
          renderMcpApps: renderMcpAppsEnabled,
          windowType: "electron",
        })
      : null;
  const preToggleEntries = collapsePartition?.preToggleEntries ?? EMPTY_ENTRIES;
  const showAssistantSeparately =
    isAssistantFinal && !showAssistantInlineInActivity;
  const activeEntries =
    collapsePartition == null
      ? renderableAgentItems
      : isActivityCollapsedByDefault
        ? collapsePartition.collapsibleEntries
        : collapsePartition.expandedEntries;
  const entriesWithWorkedFor =
    workedForOverrideEntry == null
      ? activeEntries
      : [
          workedForOverrideEntry,
          ...activeEntries.filter(
            (entry) =>
              entry.kind !== "item" ||
              (entry as any).item.type !== "worked-for",
          ),
        ];
  const activityEntries =
    showAssistantInlineInActivity && assistantItem != null
      ? [...entriesWithWorkedFor, { kind: "item", item: assistantItem }]
      : entriesWithWorkedFor;
  const persistentEntries =
    collapsePartition != null && isActivityCollapsedByDefault
      ? collapsePartition.persistentEntries
      : EMPTY_ENTRIES;
  const firstPersistentEntry = persistentEntries[0];
  const shouldShowPersistentGap =
    firstPersistentEntry != null &&
    (firstPersistentEntry.kind !== "item" ||
      (firstPersistentEntry as any).item.type !== "realtime-transcript");
  const workedForItem =
    workedForOverride ?? collapsePartition?.workedForItem ?? null;
  const activityHasWorkedFor = activityEntries.some(
    (entry) =>
      entry.kind === "item" && (entry as any).item.type === "worked-for",
  );
  const hasActivityEntries = activityEntries.length > 0;
  const hasActivityContent = hasActivityEntries || hasSubagentActivity;
  const collapsibleEntries =
    collapsePartition?.collapsibleEntries ?? activeEntries;
  const showThinkingFallback =
    !isBufferingVisible &&
    !hasPendingToolOutputs &&
    turnStatusIndicator.type === "thinking" &&
    !isActivitySliceClosed &&
    shouldShowThinkingFallback({
      entries: activeEntries,
      conversationDetailLevel: detailLevel,
      isTurnInProgress,
      isActivitySliceClosed,
      mcpServerStatuses,
      shouldAutoExpandMcpApps: shouldAutoExpandMcpAppsResolved,
      modelProvider,
      resolvedApps,
      isTurnCancelled,
    });
  const showThinkingPlaceholder =
    !isBufferingVisible &&
    turnStatusIndicator.type === "thinking" &&
    !showThinkingFallback &&
    !hasPendingToolOutputs;
  const canCollapseActivity =
    !showFullTranscript &&
    !startAfterTurnIntro &&
    shouldAllowCollapse &&
    hasActivityContent;
  const isActivityCollapsed = canCollapseActivity
    ? isActivityCollapsedByDefault
    : false;
  const collapsedMessageCount =
    collapsibleEntries.length + (showAssistantInlineInActivity ? 1 : 0);
  const firstNonEmptyEntryIndex =
    getFirstNonEmptyEntryIndex(collapsibleEntries);
  const showCollapseToggle =
    canCollapseActivity &&
    collapsedMessageCount > 0 &&
    firstNonEmptyEntryIndex == null;
  const safetyBufferingForWorkedFor = activityHasWorkedFor
    ? safetyBufferingNode
    : null;
  const safetyBufferingAfterWorkedFor =
    !activityHasWorkedFor && workedForItem != null && showCollapseToggle
      ? safetyBufferingNode
      : null;
  const safetyBufferingStandalone =
    safetyBufferingForWorkedFor == null && safetyBufferingAfterWorkedFor == null
      ? safetyBufferingNode
      : null;
  const toggleCollapse = useStableCallback(() => {
    if (onSetCollapsed && showCollapseToggle) {
      onSetCollapsed(!isActivityCollapsed);
    }
  });
  const endResources = computeEndResources({
    assistantContent: assistantItem?.content ?? null,
    projectlessOutputDirectory,
    isAppgenEndCardEnabled,
    turn,
  });
  const appgenResources = endResources.filter(
    (resource: any) => resource.type === "appgen-app",
  );
  const endResourcePaths = getEndResourcePaths(endResources);
  const endResourcesNode =
    endResources.length === 0 ? null : (
      <EndResourcesList
        turnId={completedTurnId ?? undefined}
        conversationId={conversationId}
        cwd={turn.cwd ?? cwd}
        hostId={hostId}
        inputMessageId={inputMessageId}
        messageId={messageId}
        onFileOpen={(resourcePath) => {
          openResource(resourcePath, "resource_card");
        }}
        resources={endResources}
      />
    );
  const reviewComments =
    !isTurnInProgress && assistantItem != null
      ? extractReviewComments(assistantItem.content, turn.cwd ?? cwd)
      : [];
  const reviewCommentsNode =
    reviewComments.length === 0 ? null : (
      <ReviewCommentsCard comments={reviewComments} />
    );
  const { visibleCompletedGeneratedImages, shouldRenderGeneratedImageOutputs } =
    computeGeneratedImageOutputs({
      completedGeneratedImages,
      endResourcePaths,
      hasPendingGeneratedImages: hasPendingToolOutputs,
    });
  const pendingHookStats =
    assistantItem == null && !shouldRenderGeneratedImageOutputs
      ? hookStats
      : null;
  const hasArtifacts =
    endResources.length > 0 || shouldRenderGeneratedImageOutputs;
  const turnDiffNode =
    !isTurnInProgress &&
    filteredUnifiedDiffItem != null &&
    !isEverydayDetail &&
    !shouldHideTurnDiff({ endResources, turn }) ? (
      <TurnDiffView
        isInProgress={false}
        item={filteredUnifiedDiffItem}
        deferOffscreenRendering={deferOffscreenDiffRendering}
        conversationId={conversationId}
        cwd={cwd}
        hostId={hostId}
      />
    ) : null;
  const generatedImagesNode = shouldRenderGeneratedImageOutputs ? (
    <div className="flex flex-col gap-3">
      {visibleCompletedGeneratedImages.length > 0 ? (
        <GeneratedImagesGrid
          images={visibleCompletedGeneratedImages}
          conversationImages={generatedImages}
          conversationId={conversationId}
        />
      ) : null}
      {hasPendingToolOutputs ? <GeneratedImagePlaceholder /> : null}
    </div>
  ) : null;
  const webSearchSourcesNode =
    webSearchSources.length === 0 ? null : (
      <WebSearchSources className="mt-0" sources={webSearchSources} />
    );
  const assistantArtifactsNode =
    isAssistantFinal &&
    (endResourcesNode != null ||
      reviewCommentsNode != null ||
      generatedImagesNode != null ||
      turnDiffNode != null) ? (
      <div className="flex w-full flex-col gap-3">
        {generatedImagesNode}
        {endResourcesNode}
        {reviewCommentsNode}
        {turnDiffNode}
      </div>
    ) : null;
  const turnActionsRow = (
    <TurnActionsRow
      alwaysShowActions={isMostRecentTurn}
      turnId={completedTurnId ?? undefined}
      sentAtMs={null}
      threadId={conversationId}
      reportEntityType={reportEntityType}
      hasArtifacts={hasArtifacts}
      hookStats={hookStats}
      threadDetailLevel={detailLevel}
      completedThreadGoal={isTurnInProgress ? null : completedThreadGoal}
      onFork={isTurnInProgress ? undefined : onForkTurn}
    />
  );
  const sections: TurnSection[] = [];
  const pushSection = (
    key: string,
    node: ReactNode,
    options?: PushSectionOptions,
  ) => {
    if (node == null) {
      return;
    }
    const section: TurnSection = {
      key,
      node,
      canOwnLatestTurnFollowContent:
        options?.canOwnLatestTurnFollowContent ?? true,
    };
    if (options?.gapAfter != null) {
      section.gapAfter = options.gapAfter;
    }
    sections.push(section);
  };
  const wrapSearchableContent = ({
    item,
    content,
  }: {
    item: TurnItem;
    content: ReactNode;
  }): ReactNode => {
    if (content == null) {
      return null;
    }
    const searchKey = searchKeyByItem.get(item);
    const isUserAnchor =
      item.type === "user-message" && item.steeringStatus == null;
    return searchKey == null && !isUserAnchor ? (
      content
    ) : (
      <div
        className={isUserAnchor ? "scroll-mt-4" : undefined}
        data-content-search-unit-key={
          searchKey == null
            ? undefined
            : buildContentSearchKey(turnSearchKey, searchKey)
        }
        data-local-conversation-user-anchor={isUserAnchor ? true : undefined}
      >
        {content}
      </div>
    );
  };
  for (const modelChangedItem of modelChangedItems) {
    pushSection(
      `model-changed-${modelChangedItem.id}`,
      <TurnItemRenderer
        item={modelChangedItem}
        conversationId={conversationId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        hostId={hostId}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  for (const [userIndex, userItem] of userItems.entries()) {
    const isLastUserItem = userIndex === userItems.length - 1;
    let userHookStats = null;
    if (userItem.deliveryStatus === "not-sent") {
      userHookStats = pendingHookStats;
    } else if (userItem.hookFeedback === true) {
      userHookStats = hookStats;
    }
    pushSection(
      `user-item-${String(userIndex)}`,
      wrapSearchableContent({
        item: userItem,
        content: (
          <TurnItemRenderer
            item={userItem}
            conversationId={conversationId}
            hostId={hostId}
            conversationDetailLevel={detailLevel}
            isTurnInProgress={isTurnInProgress}
            cwd={cwd}
            reportEntityType={reportEntityType}
            resolvedApps={resolvedApps}
            renderMcpApps={renderMcpAppsEnabled}
            toolActivityTurnKey={toolActivityTurnKey}
            turnId={completedTurnId ?? undefined}
            previousTurnNumber={previousTurnNumber}
            hookStats={userHookStats}
            alwaysShowUserMessageActions={
              previousTurnNumber == null &&
              isMostRecentTurn &&
              isLastUserItem &&
              !hasAssistantContent
            }
            parentThreadAttachment={
              userIndex === 0 ? parentThreadAttachment : undefined
            }
            onEditMessage={isLastUserItem ? onEditUserMessage : undefined}
            emptyUserMessageOverride={
              userIndex === 0 ? emptyUserMessageOverride : undefined
            }
          />
        ),
      }),
      { canOwnLatestTurnFollowContent: false },
    );
  }
  for (const modelReroutedItem of modelReroutedItems) {
    if (modelReroutedItem.reason === "highRiskCyberActivity") {
      pushSection(
        `model-rerouted-${modelReroutedItem.id}`,
        <TurnItemRenderer
          item={modelReroutedItem}
          conversationId={conversationId}
          hostId={hostId}
          conversationDetailLevel={detailLevel}
          isTurnInProgress={isTurnInProgress}
          cwd={cwd}
          reportEntityType={reportEntityType}
          resolvedApps={resolvedApps}
          renderMcpApps={renderMcpAppsEnabled}
          toolActivityTurnKey={toolActivityTurnKey}
        />,
      );
    }
  }
  const sharedEntryListProps = {
    allowAddSelectedTextToChat: !isReadOnly,
    compactUserMessageActions: true,
    conversationDetailLevel: detailLevel,
    conversationId,
    cwd,
    hideCommandDetails,
    hookStats,
    hostId,
    isActivitySliceClosed,
    isEverydayWorkMode,
    isTurnCancelled,
    isTurnInProgress,
    mcpServerStatuses,
    modelProvider,
    previousTurnNumber,
    renderMcpApps: renderMcpAppsEnabled,
    resolvedApps,
    shouldAutoExpandMcpApps: shouldAutoExpandMcpAppsResolved,
    toolActivityTurnKey,
    totalTurnCount,
    wrapSearchableContent,
  };
  const preToggleNode =
    preToggleEntries.length === 0 ? null : (
      <TurnEntryList {...sharedEntryListProps} entries={preToggleEntries} />
    );
  const persistentNode =
    persistentEntries.length === 0 ? null : (
      <TurnEntryList {...sharedEntryListProps} entries={persistentEntries} />
    );
  if (safetyBufferingStandalone != null) {
    pushSection("safety-buffering", safetyBufferingStandalone, {
      canOwnLatestTurnFollowContent: false,
    });
  }
  if (hasActivityContent || preToggleNode != null || persistentNode != null) {
    pushSection(
      "agent-body-collapsible",
      <CollapsibleTurnActivity
        collapsedMessageCount={collapsedMessageCount}
        workedDurationMs={workedDurationMs}
        workedForItem={workedForItem}
        isCollapsed={showCollapseToggle && isActivityCollapsed}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        showToggle={showCollapseToggle}
        onToggle={toggleCollapse}
        preToggleContent={preToggleNode}
        persistentContent={persistentNode}
        shouldShowPersistentContentGap={shouldShowPersistentGap}
        contentAfterWorkedFor={safetyBufferingAfterWorkedFor}
        content={
          hasActivityEntries ? (
            <TurnEntryList
              entries={activityEntries}
              conversationId={conversationId}
              hostId={hostId}
              conversationDetailLevel={detailLevel}
              isTurnInProgress={isTurnInProgress}
              isTurnCancelled={isTurnCancelled}
              isActivitySliceClosed={isActivitySliceClosed}
              cwd={cwd}
              resolvedApps={resolvedApps}
              renderMcpApps={renderMcpAppsEnabled}
              mcpServerStatuses={mcpServerStatuses}
              shouldAutoExpandMcpApps={shouldAutoExpandMcpAppsResolved}
              toolActivityTurnKey={toolActivityTurnKey}
              modelProvider={modelProvider}
              hideCommandDetails={hideCommandDetails}
              allowAddSelectedTextToChat={!isReadOnly}
              hookStats={hookStats}
              wrapSearchableContent={wrapSearchableContent}
              previousTurnNumber={previousTurnNumber}
              totalTurnCount={totalTurnCount}
              latestTurnFollowContentRef={latestTurnFollowContentRef}
              contentAfterWorkedFor={safetyBufferingForWorkedFor}
              showThinkingFallback={showThinkingFallback}
              thinkingFallbackMessage={undefined}
              thinkingFallbackAction={undefined}
              isEverydayWorkMode={isEverydayWorkMode}
              subagentActivityContentByItemId={subagentActivityContentByItemId}
            />
          ) : null
        }
      />,
      { canOwnLatestTurnFollowContent: false },
    );
  }
  for (const automationUpdateItem of automationUpdateItems) {
    pushSection(
      `automation-update-${automationUpdateItem.callId}`,
      <TurnItemRenderer
        item={automationUpdateItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  if (systemEventItem) {
    pushSection(
      "system-event",
      <TurnItemRenderer
        item={systemEventItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  if (showAssistantInlineInActivity && assistantArtifactsNode != null) {
    pushSection(
      "assistant-after",
      <div className="group flex flex-col gap-3">
        {assistantArtifactsNode}
        {turnActionsRow}
      </div>,
    );
  }
  if (showAssistantSeparately && assistantItem != null) {
    pushSection(
      "assistant-item",
      wrapSearchableContent({
        item: assistantItem,
        content: (
          <AssistantResourcesProvider resources={appgenResources}>
            <TurnItemRenderer
              item={assistantItem}
              conversationId={conversationId}
              hostId={hostId}
              conversationDetailLevel={detailLevel}
              isTurnInProgress={isTurnInProgress}
              cwd={cwd}
              resolvedApps={resolvedApps}
              renderMcpApps={renderMcpAppsEnabled}
              reportEntityType={reportEntityType}
              toolActivityTurnKey={toolActivityTurnKey}
              turnId={assistantTurnId ?? undefined}
              processTargets={processTargets}
              projectlessOutputDirectory={
                isTurnInProgress ? null : projectlessOutputDirectory
              }
              assistantCopyText={assistantCopyText ?? undefined}
              assistantAfter={assistantArtifactsNode}
              assistantElectronAfter={webSearchSourcesNode}
              hookStats={hookStats}
              completedThreadGoal={completedThreadGoal}
              hasArtifacts={hasArtifacts}
              alwaysShowAssistantMessageActions={isMostRecentTurn}
              showAssistantMessageActionRow={
                !showThinkingPlaceholder && !hasPendingToolOutputs
              }
              allowAddSelectedTextToChat={!isReadOnly}
              onAssistantFileLinkOpen={onAssistantFileLinkOpen}
              onForkTurn={onForkTurn}
            />
          </AssistantResourcesProvider>
        ),
      }),
    );
  }
  if (assistantItem == null && shouldRenderGeneratedImageOutputs) {
    pushSection(
      "tool-outputs",
      <div className="group flex flex-col gap-3">
        {generatedImagesNode}
        {turnActionsRow}
      </div>,
    );
  }
  if (postAssistantItems.length > 0) {
    pushSection(
      "post-assistant-items",
      <TurnEntryList
        entries={postAssistantItems.map((item: TurnItem) => ({
          kind: "item",
          item,
        }))}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        isTurnCancelled={isTurnCancelled}
        isActivitySliceClosed={true}
        cwd={cwd}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
        toolActivityTurnKey={toolActivityTurnKey}
        modelProvider={modelProvider}
        hideCommandDetails={hideCommandDetails}
        allowAddSelectedTextToChat={!isReadOnly}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        latestTurnFollowContentRef={latestTurnFollowContentRef}
        isEverydayWorkMode={isEverydayWorkMode}
      />,
      { canOwnLatestTurnFollowContent: false },
    );
  }
  for (const elicitationItem of mcpServerElicitationItems) {
    pushSection(
      `mcp-server-elicitation-${elicitationItem.requestId}`,
      <TurnItemRenderer
        item={elicitationItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  if (proposedPlanItem) {
    pushSection(
      "proposed-plan",
      <ProposedPlanCard
        item={proposedPlanItem}
        conversationId={conversationId}
        cwd={cwd}
        hideCodeBlocks={isEverydayDetail}
        defaultCollapsed={!proposedPlanItem.completed}
        hasArtifacts={hasArtifacts}
        reportEntityType={reportEntityType}
        turnId={proposedPlanTurnId ?? undefined}
      />,
    );
  }
  if (showThinkingPlaceholder) {
    pushSection(
      "thinking-placeholder",
      <ThinkingPlaceholder
        conversationId={conversationId}
        isVisible={turnStatusIndicator.isVisible}
        message={undefined}
        onOpenDetails={onOpenAeonDetails}
      />,
    );
  }
  if (assistantItem == null && turnDiffNode != null) {
    pushSection("turn-diff", turnDiffNode);
  }
  for (const remoteTaskItem of remoteTaskCreatedItems) {
    pushSection(
      `remote-task-${remoteTaskItem.taskId}`,
      <TurnItemRenderer
        item={remoteTaskItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  for (const personalityChangedItem of personalityChangedItems) {
    pushSection(
      `personality-changed-${personalityChangedItem.id}`,
      <TurnItemRenderer
        item={personalityChangedItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  for (const forkedItem of forkedFromConversationItems) {
    pushSection(
      `forked-from-conversation-${forkedItem.id}`,
      <TurnItemRenderer
        item={forkedItem}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={detailLevel}
        isTurnInProgress={isTurnInProgress}
        cwd={cwd}
        reportEntityType={reportEntityType}
        resolvedApps={resolvedApps}
        renderMcpApps={renderMcpAppsEnabled}
        toolActivityTurnKey={toolActivityTurnKey}
      />,
    );
  }
  if (assistantItem == null && endResourcesNode != null) {
    pushSection("end-resource", endResourcesNode);
  }
  return (
    <>
      {mcpAppsNode}
      {renderTurnSections(sections, latestTurnFollowContentRef)}
      {showInProgressFixedContent && isTurnInProgress ? (
        <TurnInProgressFixedContent
          conversationId={conversationId}
          hasBlockingRequest={hasBlockingRequest}
          isTurnInProgress={isTurnInProgress}
          todoListItem={todoListItem}
          unifiedDiffItem={unifiedDiffItem}
          conversationDetailLevel={detailLevel}
          cwd={cwd}
          hostId={hostId}
        />
      ) : null}
    </>
  );
}
