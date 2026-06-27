// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Public draft for the local conversation thread feature chunk. Key exported APIs have semantic names; unresolved current-ref producer imports are isolated under boundaries/current-ref until those chunks are deep-restored.
import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  $P as initAppScope,
  $j as initStatsigGateSignals,
  AB as initScopeRuntime,
  AI as getLocalConversationPath,
  Al as initComposerScope,
  Au as initOsInfoQuery,
  BV as getJsxRuntime,
  Bn as initGlobalCommandHandlers,
  DL as normalizeWorkspacePath,
  DM as initWindowZoomContext,
  Dl as createLocalConversationRouteTarget,
  FB as useScope,
  Fx as initEnvironmentTerminalController,
  Ga as initElectronPlatformContent,
  Gi as DropdownMenu,
  Gj as initStatsigFeatureGateHooks,
  Gu as initGlobalStateQueryRuntime,
  IB as useSignalValue,
  I_ as initRouteScope,
  Io as initConnectorAppsListQuery,
  Ix as environmentTerminalControllerService,
  JV as loadReactModule,
  LB as loadIsEqualModule,
  LN as initReducedMotionPreference,
  Ln as initKeyboardModifierState,
  MB as ScopeValueProvider,
  MV as useMutation,
  M_ as localConversationRouteScope,
  Mi as initModalRegistrySignal,
  Mu as initHostCodexHomeQuery,
  initLocalConversationGitSummary as isRenderableConversationTurn,
  Nh as initGitBranchQueryRuntime,
  Nv as initConversationArtifactRuntime,
  ON as initButtonComponentPrimitives,
  O_ as initConversationRouteSourceHelpers,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  PI as getHotkeyWindowFallbackPath,
  P_ as getLocalThreadConversationIdFromRoute,
  QP as appScope,
  R as initSlashIcon,
  Rj as _t,
  Rv as initMarkdownUtilityNoop,
  SP as initMotionRuntime,
  SV as initQueryRuntime,
  Sc as useConversationDetailMode,
  Sf as initConfigQueryRuntime,
  Sm as threadSourceSignal,
  Tp as hasConversationSignal,
  Ts as initBrowserFeatureAvailabilitySignals,
  UE as LOCAL_HOST_ID,
  Uf as initHostWorkspaceQueries,
  Uh as useGitAvailabilityQuery,
  Uv as initMarkdownArtifactHelpers,
  Ux as initAgentMentionMap,
  VE as initHostConfigHelpers,
  Vn as dispatchGlobalCommand,
  Wa as PlatformContentGate,
  Wg as initMarkdownResourceHelpers,
  Zu as on,
  _c as CONVERSATION_DETAIL_STEPS_PROSE,
  aM as RefreshIcon,
  a_ as initFileTypeDetectionHelpers,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  bM as initKeyboardShortcutLabel,
  bV as createScopedSignal,
  bc as initConversationDetailModeConstants,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  fh as initGitActionDirectiveRuntime,
  gp as conversationCwdSignal,
  hs as initLocalImageInliningHelpers,
  iF as initIntlRuntime,
  jM as $n,
  jm as conversationModeSignal,
  ju as useOsInfo,
  lA as cr,
  lD as lr,
  mP as logger,
  mv as xr,
  oM as initRefreshIcon,
  oP as initQueryDurationConstants,
  ok as sendAppServerRequest,
  pP as initLoggerRuntime,
  qV as getChunkModuleExports,
  qj as useStatsigGate,
  tP as useAppServerMutation,
  tc as Yr,
  vm as subagentParentThreadIdSignal,
  wj as di,
  wl as composerScope,
  xM as useStableCallback,
  yA as loadFindLastModule,
  yV as createSignal,
  yv as Navigate,
  zo as useAppsQuery,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  $i as Ei,
  A as Di,
  Ds as openEnvironmentTerminalSession,
  Ga as MoreHorizontalIcon,
  Il as Ki,
  Ir as setThreadSourceFrameState,
  Ja as Ji,
  Ka as initMoreHorizontalIcon,
  Mr as Qi,
  Od as $i,
  Td as ua,
  Wl as fa,
  b as Sa,
  cn as Ea,
  hc as ja,
  js as environmentTerminalControllerSignal,
  kn as Ra,
  l as za,
  mo as Ha,
  nc as Wa,
  nu as Ka,
  ql as bottomPanelTabsStore,
  sd as Xa,
  ts as Qa,
  tu as $a,
  vd as ro,
  wo as lo,
  yc as ho,
  yd as rightPanelFullWidthSignal,
  yn as _o,
  yu as yo,
} from "../boundaries/current-ref/projects-app-shared-producer";
import { dn as So } from "../boundaries/current-ref/automations-page-producer";
import {
  Ai as Ao,
  Gt as Po,
  Ja as Lo,
  Ma as Bo,
  Ot as Wo,
  ji as useBackgroundSubagentsEnabled,
  qa as fs,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  $n as vs,
  In as Ns,
  Po as Ys,
  St as tc,
  Tu as rc,
  Yd as dc,
  Yn as fc,
  ar as mc,
  cc as gc,
  cs as backgroundAgentsSignal,
  fl as Sc,
  gt as wc,
  jt as Ac,
  ls as Pc,
  qa as Vc,
  sa as Wc,
  vc as Qc,
  xt as el,
} from "../boundaries/current-ref/profile-page-producer";
import {
  it as ul,
  n as fl,
} from "../boundaries/current-ref/appgen-library-hot-producer";
import { g as El } from "../boundaries/current-ref/projects-pull-requests-producer";
import {
  initThreadSwitchTimingTrackerChunk,
  threadSwitchTimingTracker,
} from "../automation/heartbeat-automation-eligibility";
import { m as Rl } from "../boundaries/current-ref/pets-general-settings-producer";
import {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
} from "../features/hotkey-window-state";
import {
  initThreadSidePanelTabRegistryChunk,
  registerThreadSidePanelTab,
} from "../app-shell/thread-background-processes";
import { initThreadScrollControllerContextChunk as id } from "../utils/thread-scroll-controller-context";
import { initThreadOverflowMenuChunk as Md } from "../threads/thread-overflow-menu";
import { shouldShowInlineActivityForRightPanel } from "./local-conversation-thread-parts/inline-activity-panel";
import {
  ChromeExtensionConversationHeader,
  formatBackgroundAgentDisplayName,
  initChromeExtensionConversationHeaderChunk,
} from "./local-conversation-thread-parts/local-conversation-chrome-extension-header";
import {
  initBackgroundAgentThreadTab,
  initBackgroundAgentThreadTabs,
  openBackgroundAgentThreadTab,
} from "./local-conversation-thread-parts/local-conversation-background-agent-thread-tab";
import {
  initConversationMarkdownRenderer,
  renderLocalConversationMarkdownForTurns,
} from "./local-conversation-thread-parts/local-conversation-markdown-renderer";
import {
  initSummaryPanelErrorFallbackChunk,
  SummaryPanelErrorFallback,
} from "./local-conversation-thread-parts/local-conversation-summary-panel-error";
import { isRecentLocalEnvironmentAction } from "./local-conversation-thread-parts/local-environment-recent-actions";
import {
  initLocalEnvironmentActionControlsChunk,
  LocalConversationEnvironmentActionControls,
} from "./local-conversation-thread-parts/local-environment-action-controls";
import {
  initLocalConversationTurnSelectors,
  localConversationVisibleTurnEntriesSignal,
  subagentResponseInProgressSignal,
} from "./local-conversation-thread-parts/local-conversation-turn-selectors";
import {
  initPinnedSummaryPanelState,
  pinnedSummaryPanelState,
  usePinnedSummaryPanelDisplay,
  usePinnedSummaryPanelLayout,
} from "./local-conversation-thread-parts/pinned-summary-panel-layout";
export type { PinnedSummaryPanelLayoutStore } from "./local-conversation-thread-parts/pinned-summary-panel-layout";
import { shouldUseFullWidthRightPanelForRoute } from "./local-conversation-thread-parts/right-panel-route-state";
import { getLocalConversationTurnSearchKey } from "./local-conversation-thread-parts/turn-search-key";
import type { BrowserUseSummary } from "./local-conversation-thread-parts/browser-use-summary";
import {
  initLocalConversationArtifactSignals,
  localConversationOutputArtifactsSignal,
} from "./local-conversation-thread-parts/local-conversation-artifact-signals";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  initThreadFindNavigationRailNoopChunk,
  ThreadFindNavigationRail,
  useReviewSearchHighlights,
} from "./local-conversation-thread-parts/review-search-highlights";
import {
  initLocalConversationThreadFrameChunk,
  LocalConversationThreadFrame,
  openBackgroundAgentFromThread,
} from "./local-conversation-thread-parts/local-conversation-thread-frame";
import {
  createLocalConversationSearchAdapter,
  initConversationSearchHelpers,
  initLocalConversationSearchAdapterChunk,
} from "./local-conversation-thread-parts/local-conversation-search";
import { initConversationSearchUnitExtractor } from "./local-conversation-thread-parts/local-conversation-search-source";
import {
  initMarkConversationReadEffect,
  useMarkConversationReadOnVisibility,
} from "./local-conversation-thread-parts/local-conversation-read-state";
import {
  initResumeLocalConversationChunk,
  useResumeLocalConversation,
} from "./local-conversation-thread-parts/local-conversation-resume";
import {
  initLocalConversationNavigationHelpers,
  useMissingLocalConversationRedirect,
} from "./local-conversation-thread-parts/local-conversation-navigation";
import { initVisibleTurnGeneratedImagesCollector } from "./local-conversation-thread-parts/visible-turn-generated-images";
import {
  initLocalConversationSummaryPanelSignals,
  useLocalConversationSummaryPanelModel,
} from "./local-conversation-thread-parts/local-conversation-summary-panel-model";
import {
  initThreadScrollStateSignal,
  threadScrollStateSignal,
} from "./local-conversation-thread-parts/local-conversation-thread-scroll-state-signal";
import { LocalConversationMainThread } from "./local-conversation-thread-parts/local-conversation-thread-entry-components";
import {
  BranchChangesSummaryRow,
  LocalConversationGitSummary,
} from "./local-conversation-thread-parts/local-conversation-git-summary";
import {
  initThreadSummaryPanelChromePrimitives,
  ThreadSummaryPanelContent,
  ThreadSummaryPanelHeaderButton,
  ThreadSummaryPanelPopoverContent,
  ThreadSummaryPanelRoot,
  ThreadSummaryPanelSectionCount,
} from "./local-conversation-thread-parts/thread-summary-panel-chrome-primitives";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./local-conversation-thread-parts/thread-summary-panel-section";
import { ThreadSummaryPanelSections } from "./local-conversation-thread-parts/thread-summary-panel-sections";
import {
  ConnectedLocalWorktreeRestoreBanner,
  initWorktreeRestoreBannerChunk,
} from "./local-conversation-thread-parts/local-conversation-worktree-restore-banner";
const LocalConversationSideChatThread =
  LocalConversationMainThread.SideChatThread;
const LocalConversationSummaryThread =
  LocalConversationMainThread.SummaryThread;
var localEnvironmentRecentActionsModule,
  initLocalEnvironmentRecentActions = once(() => {
    localEnvironmentRecentActionsModule = getChunkModuleExports();
    initPathHelpers();
    initHostCodexHomeQuery();
  });
var ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome = once(() => {
    initThreadSummaryPanelChromePrimitives();
    initThreadFindNavigationRailNoopChunk();
    initThreadSummaryPanelSectionChunk();
    ThreadSummaryPanelChrome = {
      Content: ThreadSummaryPanelContent,
      HeaderButton: ThreadSummaryPanelHeaderButton,
      PopoverContent: ThreadSummaryPanelPopoverContent,
      Root: ThreadSummaryPanelRoot,
      Section: ThreadSummaryPanelSection,
      SectionCount: ThreadSummaryPanelSectionCount,
    };
  });
function FloatingLocalConversationSummaryPanel(props) {
  let {
    artifacts,
    sideChats,
    toolSources,
    webSources,
    backgroundAgents,
    backgroundTerminals,
    browserUseSummaries,
    restoredBackgroundProcesses,
    plan,
    shouldHideInlineImmediately,
    shouldShow,
    onOpenBackgroundAgent,
  } = props;
  return (
    <ThreadSummaryPanelChrome.Root
      shouldHideInlineImmediately={shouldHideInlineImmediately}
      shouldShow={shouldShow}
    >
      <ThreadSummaryPanelChrome.Content>
        <ThreadSummaryPanelSections
          artifacts={artifacts}
          sideChats={sideChats}
          toolSources={toolSources}
          webSources={webSources}
          isVisible={shouldShow}
          backgroundAgents={backgroundAgents}
          backgroundTerminals={backgroundTerminals}
          browserUseSummaries={browserUseSummaries}
          restoredBackgroundProcesses={restoredBackgroundProcesses}
          plan={plan}
          registerEnvironmentActionCommands={true}
          BranchChangesSummaryRowComponent={BranchChangesSummaryRow}
          EnvironmentActionControlsComponent={
            LocalConversationEnvironmentActionControls
          }
          GitSummaryComponent={LocalConversationGitSummary}
          onOpenBackgroundAgent={onOpenBackgroundAgent}
          onForceShow={noopForceShowFloatingSummaryPanel}
        />
      </ThreadSummaryPanelChrome.Content>
    </ThreadSummaryPanelChrome.Root>
  );
}
function noopForceShowFloatingSummaryPanel() {}
type RenderableThreadNode = unknown;
type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;
export interface LocalConversationSummaryPanelProps {
  artifacts: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly BrowserUseSummary[];
  restoredBackgroundProcesses: readonly unknown[];
  plan: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}
export function LocalConversationSummaryPanel(
  props: LocalConversationSummaryPanelProps,
) {
  let {
    artifacts,
    sideChats,
    toolSources,
    webSources,
    backgroundAgents,
    backgroundTerminals,
    browserUseSummaries,
    restoredBackgroundProcesses,
    plan,
    onOpenBackgroundAgent,
  } = props;
  return (
    <ThreadSummaryPanelChrome.PopoverContent>
      <ThreadSummaryPanelChrome.Content>
        <ThreadSummaryPanelSections
          artifacts={artifacts}
          sideChats={sideChats}
          toolSources={toolSources}
          webSources={webSources}
          isVisible={true}
          backgroundAgents={backgroundAgents}
          backgroundTerminals={backgroundTerminals}
          browserUseSummaries={browserUseSummaries}
          restoredBackgroundProcesses={restoredBackgroundProcesses}
          plan={plan}
          registerEnvironmentActionCommands={false}
          BranchChangesSummaryRowComponent={BranchChangesSummaryRow}
          EnvironmentActionControlsComponent={
            LocalConversationEnvironmentActionControls
          }
          GitSummaryComponent={LocalConversationGitSummary}
          onOpenBackgroundAgent={onOpenBackgroundAgent}
          onForceShow={noopForceShowPopoverSummaryPanel}
        />
      </ThreadSummaryPanelChrome.Content>
    </ThreadSummaryPanelChrome.PopoverContent>
  );
}
function noopForceShowPopoverSummaryPanel() {}
var localConversationSummaryPanelModule,
  initLocalConversationGitSummary = once(() => {
    localConversationSummaryPanelModule = getChunkModuleExports();
    (
      LocalConversationGitSummary as typeof LocalConversationGitSummary & {
        initChunk: () => void;
      }
    ).initChunk();
    initThreadSummaryPanelChrome();
    ThreadSummaryPanelSections.initChunk();
  });
var localConversationArtifactsModule,
  initLocalConversationArtifacts = once(() => {
    localConversationArtifactsModule = getChunkModuleExports();
    initMotionRuntime();
    initScopeRuntime();
    ua();
    Xa();
    initReducedMotionPreference();
    initPinnedSummaryPanelState();
  });
var initThreadScrollState = once(() => {
  initAgentMentionMap();
});
var localConversationThreadRouteJsxRuntime,
  initLocalConversationThreadRoute = once(() => {
    initScopeRuntime();
    initPathHelpers();
    initIntlRuntime();
    initConversationStateSelectors();
    initAppServerRequestBridge();
    initToastRuntime();
    initResumeLocalConversationChunk();
    initLocalConversationNavigationHelpers();
    initSummaryPanelErrorFallbackChunk();
    initChromeExtensionConversationHeaderChunk();
    initVscodeMessageBridge();
    initAppScope();
    initHostWorkspaceQueries();
    initHostConfigHelpers();
    initLoggerRuntime();
    LocalConversationMainThread.initChunk();
    localConversationThreadRouteJsxRuntime = getJsxRuntime();
  });
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
export function LocalConversationThread(props: LocalConversationThreadProps) {
  let {
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
  } = props;
  if (!conversationId) {
    let e;
    return localConversationThreadJsxRuntime.jsx(Navigate, {
      to: "/",
    });
  }
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
function LocalConversationThreadRoute(props) {
  let {
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
    } = props,
    scope = useScope(localConversationRouteScope),
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
  let resolvedAppsQueryOptions = {
    enabled: false,
    hostId,
  };
  useAppsQuery(resolvedAppsQueryOptions);
  let isRightPanelFullWidth = useSignalValue(rightPanelFullWidthSignal),
    hideThreadContent = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth,
      routeConversationId: getLocalThreadConversationIdFromRoute(scope.value),
    });
  let summaryPanelDisplay = usePinnedSummaryPanelDisplay(conversationId),
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
  let handleVisibleThreadContentReady = (turnCount) => {
    threadSwitchTimingTracker.complete(scope, "thread_switch_completed", {
      conversationId,
      turnCount,
    });
  };
  let onVisibleThreadContentReady = useStableCallback(
      handleVisibleThreadContentReady,
    ),
    handleOpenBackgroundAgent = (backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
        LocalConversationMainThread,
      );
    };
  let onOpenBackgroundAgentFromSummary = useStableCallback(
      handleOpenBackgroundAgent,
    ),
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
    renderSummaryPanelErrorFallback = (errorBoundary) => (
      <SummaryPanelErrorFallback
        display={summaryPanelDisplay}
        onRetry={() => {
          errorBoundary.resetError();
        }}
      />
    );
  let summaryPanel = localConversationThreadJsxRuntime.jsx(
    FloatingLocalConversationSummaryPanel,
    {
      ...summaryPanelDisplay,
      ...summaryPanelModel,
      onOpenBackgroundAgent: onOpenBackgroundAgentFromSummary,
    },
  );
  let floatingSummaryPanel = localConversationThreadJsxRuntime.jsx(
    PlatformContentGate,
    {
      browser: true,
      electron: true,
      children: localConversationThreadJsxRuntime.jsx(fs, {
        name: "ThreadSummaryPanel",
        fallback: renderSummaryPanelErrorFallback,
        children: summaryPanel,
      }),
    },
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
var localConversationThreadModule, localConversationThreadJsxRuntime;
export const initLocalConversationThreadChunk = once(() => {
  localConversationThreadModule = getChunkModuleExports();
  initMotionRuntime();
  initQueryRuntime();
  toEsModule(loadFindLastModule(), 1);
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  xr();
  gc();
  on();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  cr();
  Ha();
  initWindowZoomContext();
  Bo();
  So();
  ro();
  vs();
  initButtonComponentPrimitives();
  Lo();
  rc();
  Po();
  initModalRegistrySignal();
  Rl();
  initToastRuntime();
  Wc();
  initElectronPlatformContent();
  fl();
  ul();
  Yr();
  Ea();
  Qa();
  initReviewSearchHighlighter();
  Di();
  Ao();
  initLauncherHotkeyStateChunk();
  Vc();
  initThreadSwitchTimingTrackerChunk();
  initConnectorAppsListQuery();
  initAppScope();
  initComposerScope();
  initRouteScope();
  initHostConfigHelpers();
  initStatsigFeatureGateHooks();
  initConversationRouteSourceHelpers();
  initLocalConversationThreadFrameChunk();
  ho();
  id();
  initThreadFindNavigationRail();
  initThreadFindNavigationRailNoopChunk();
  Pc();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  initLoggerRuntime();
  initKeyboardShortcutLabel();
  Ns();
  initWorktreeRestoreBannerChunk();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  Qi();
  _o();
  mc();
  initMarkdownUtilityNoop();
  Wo();
  Ac();
  initLocalConversationSearchAdapterChunk();
  initConversationSearchUnitExtractor();
  initLocalConversationTurnSelectors();
  initThreadScrollStateSignal();
  initVisibleTurnGeneratedImagesCollector();
  initBackgroundAgentThreadTab();
  fa();
  initBackgroundAgentThreadTabs();
  Sa();
  Md();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  LocalConversationMainThread.initChunk();
  localConversationThreadJsxRuntime = getJsxRuntime();
});
export {
  useLocalConversationSummaryPanelModel,
  initLocalConversationArtifacts,
  isRecentLocalEnvironmentAction,
  ThreadFindNavigationRail,
  initThreadFindNavigationRail,
  ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome,
  initPinnedSummaryPanelState,
  initLocalEnvironmentRecentActions,
  initReviewSearchHighlighter,
  initLocalConversationSummaryPanelSignals,
  initLocalConversationArtifactSignals,
  initConversationSearchHelpers,
  renderLocalConversationMarkdownForTurns,
  initMarkConversationReadEffect,
  openBackgroundAgentThreadTab,
  createLocalConversationSearchAdapter,
  localConversationVisibleTurnEntriesSignal,
  initLocalConversationGitSummary,
  pinnedSummaryPanelState,
  useMarkConversationReadOnVisibility,
  initLocalConversationTurnSelectors,
  initLocalConversationThreadRoute,
  initBackgroundAgentThreadTab,
  LocalConversationSideChatThread,
  useResumeLocalConversation,
  LocalConversationMainThread,
  initBackgroundAgentThreadTabs,
  formatBackgroundAgentDisplayName,
  localConversationOutputArtifactsSignal,
  initConversationMarkdownRenderer,
  initThreadScrollState,
  useReviewSearchHighlights,
};
