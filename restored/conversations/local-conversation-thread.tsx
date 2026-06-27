// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Public draft for the local conversation thread feature chunk. Key exported APIs have semantic names; unresolved current-ref producer imports are isolated under boundaries/current-ref until those chunks are deep-restored.
import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  $N as initVscodeApiBridge,
  $P as initAppScope,
  $j as initStatsigGateSignals,
  AB as initScopeRuntime,
  AI as getLocalConversationPath,
  AN as initSpinnerComponent,
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
  La as initExternalUrlHelpers,
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
  aP as QUERY_DURATIONS,
  a_ as initFileTypeDetectionHelpers,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  bM as initKeyboardShortcutLabel,
  bV as createScopedSignal,
  bc as initConversationDetailModeConstants,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  eP as useHostQuery,
  en as ExternalLinkIcon,
  fh as initGitActionDirectiveRuntime,
  gp as conversationCwdSignal,
  hs as initLocalImageInliningHelpers,
  iF as initIntlRuntime,
  jM as $n,
  jm as conversationModeSignal,
  ju as useOsInfo,
  kN as SpinnerIcon,
  lA as cr,
  lD as lr,
  lF as useIntl,
  mP as logger,
  mo as initGitHubIcon,
  mv as xr,
  oM as initRefreshIcon,
  oP as initQueryDurationConstants,
  ok as sendAppServerRequest,
  pP as initLoggerRuntime,
  po as GitHubIcon,
  qV as getChunkModuleExports,
  qj as useStatsigGate,
  rF as defineMessages,
  sF as FormattedMessage,
  tP as useAppServerMutation,
  tc as Yr,
  tn as Xr,
  vm as subagentParentThreadIdSignal,
  wj as di,
  wl as composerScope,
  wp as storedThreadBranchSignal,
  xM as useStableCallback,
  yA as loadFindLastModule,
  yV as createSignal,
  yv as Navigate,
  za as openInBrowserFromEvent,
  zo as useAppsQuery,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  $i as Ei,
  A as Di,
  Cl as pullRequestCurrentBranchSignal,
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
  _c as va,
  _i as githubCliAvailabilitySignal,
  b as Sa,
  bc as wa,
  cn as Ea,
  gi as ka,
  hc as ja,
  js as environmentTerminalControllerSignal,
  kc as diffStatsSignal,
  kn as Ra,
  l as za,
  mo as Ha,
  nc as Wa,
  nu as Ka,
  pi as pullRequestStatusQuerySignal,
  ql as bottomPanelTabsStore,
  sd as Xa,
  tc as Za,
  ts as Qa,
  tu as $a,
  vc as no,
  vd as ro,
  vi as io,
  wo as lo,
  xl as po,
  yc as ho,
  yd as rightPanelFullWidthSignal,
  yn as _o,
  yu as yo,
} from "../boundaries/current-ref/projects-app-shared-producer";
import { dn as So } from "../boundaries/current-ref/automations-page-producer";
import {
  Ai as Ao,
  Gt as Po,
  H as Fo,
  Ja as Lo,
  Ma as Bo,
  Ot as Wo,
  W as Xo,
  ji as useBackgroundSubagentsEnabled,
  m as os,
  p as us,
  qa as fs,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  $l as createPullRequestActionStateSignal,
  $n as vs,
  Al as ys,
  Bl as Ss,
  Hl as Ms,
  In as Ns,
  Nl as Ws,
  Pl as Js,
  Po as Ys,
  Ql as Qs,
  St as tc,
  Tu as rc,
  Ul as ic,
  Xd as uc,
  Yd as dc,
  Yn as fc,
  Zd as pc,
  ar as mc,
  au as hc,
  cc as gc,
  cs as backgroundAgentsSignal,
  eu as xc,
  fl as Sc,
  gt as wc,
  iu as activeWorkflowSignal,
  jt as Ac,
  kl as jc,
  ls as Pc,
  nu as Lc,
  qa as Vc,
  sa as Wc,
  tu as Yc,
  vc as Qc,
  xt as el,
  zl as nl,
} from "../boundaries/current-ref/profile-page-producer";
import {
  it as ul,
  n as fl,
} from "../boundaries/current-ref/appgen-library-hot-producer";
import {
  i as yl,
  r as bl,
} from "../boundaries/current-ref/thread-hotkey-shell-producer";
import { g as El } from "../boundaries/current-ref/projects-pull-requests-producer";
import {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
  initPullRequestVisualStateChunk,
} from "../utils/pull-request-visual-state";
import {
  DiffStats as Ml,
  initDiffStatsChunk as Nl,
} from "../git/git-review-primitives";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../utils/summary-panel-row";
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
import {
  a as PullRequestMergeActions,
  o as initPullRequestMergeActionsChunk,
} from "../boundaries/current-ref/pull-request-check-rows-producer";
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
  initPullRequestSummaryRowChunk,
  PullRequestSummaryRow,
} from "./local-conversation-thread-parts/pull-request-summary-row";
import {
  initPullRequestSidePanelDetailsSummaryChunk,
  initPullRequestSidePanelErrorMessageChunk,
  initPullRequestSidePanelLoadingStateChunk,
  PullRequestSidePanelDetailsSummary,
  PullRequestSidePanelErrorMessage,
  PullRequestSidePanelLoadingState,
} from "./local-conversation-thread-parts/pull-request-side-panel-primitives";
import { getPullRequestFixDisabledReason } from "./local-conversation-thread-parts/pull-request-fix-tooltips";
import {
  initPullRequestStatusDetailRowsChunk,
  PullRequestStatusDetailRows,
} from "./local-conversation-thread-parts/pull-request-status-detail-rows";
import {
  initPullRequestSidePanelChecksSectionChunk,
  PullRequestSidePanelChecksSection,
} from "./local-conversation-thread-parts/pull-request-side-panel-checks-section";
import {
  initPullRequestSidePanelCommentsSectionChunk,
  PullRequestSidePanelCommentsSection,
} from "./local-conversation-thread-parts/pull-request-side-panel-comments-section";
import {
  initPullRequestSidePanelConflictsSectionChunk,
  PullRequestSidePanelConflictsSection,
} from "./local-conversation-thread-parts/pull-request-side-panel-conflicts-section";
import {
  initPullRequestSidePanelOverviewSectionChunk,
  PullRequestSidePanelOverviewSection,
} from "./local-conversation-thread-parts/pull-request-side-panel-overview-section";
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
function BranchChangesSummaryRow(props) {
  let { onOpenReviewTab, diffStats, isDiffStatsLoading } = props,
    branchIcon = branchChangesSummaryRowJsxRuntime.jsx(uc, {
      className: "icon-sm shrink-0",
    }),
    changesLabel = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.branchChangesLabel"
        defaultMessage="Changes"
        description="Label for the branch changes row"
      />
    );
  let trailingDiffStats = isDiffStatsLoading ? (
    branchChangesSummaryRowJsxRuntime.jsx(SpinnerIcon, {
      className: "icon-xs text-token-text-tertiary",
    })
  ) : diffStats == null ? null : (
    <Ml
      className="text-size-chat shrink-0"
      linesAdded={diffStats.additions}
      linesRemoved={diffStats.deletions}
    />
  );
  return (
    <SummaryPanelRow
      icon={branchIcon}
      label={changesLabel}
      onClick={onOpenReviewTab}
      trailing={trailingDiffStats}
      trailingVisible={true}
    />
  );
}
var branchChangesSummaryRowModule,
  branchChangesSummaryRowJsxRuntime,
  initBranchChangesSummaryRowChunk = once(() => {
    branchChangesSummaryRowModule = getChunkModuleExports();
    initIntlRuntime();
    initSpinnerComponent();
    Nl();
    pc();
    initSummaryPanelRowChunk();
    branchChangesSummaryRowJsxRuntime = getJsxRuntime();
  });
function getPullRequestTitleOrFallback(title, fallbackTitle) {
  return title?.trim() || fallbackTitle;
}
var initPullRequestTitleFallbackChunk = once(() => {});
function PullRequestSidePanelDescriptionSection(props) {
  let { body, error, loading } = props,
    header = (
      <PullRequestSidePanelDetailsSummary>
        <FormattedMessage
          id="pullRequestSidePanel.description.title"
          defaultMessage="Description"
          description="Pull request description section title"
        />
      </PullRequestSidePanelDetailsSummary>
    );
  return (
    <details open={true} className="group flex flex-col">
      {header}
      <div className="group-open:pt-2">
        {error == null ? (
          loading || body == null ? (
            <PullRequestSidePanelLoadingState
              label={
                <FormattedMessage
                  id="pullRequestSidePanel.description.loading"
                  defaultMessage="Loading description"
                  description="Loading label for the pull request description"
                />
              }
            />
          ) : body.trim().length > 0 ? (
            <Xo
              allowBasicHtml={true}
              className="text-base text-token-foreground [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_li]:leading-5 [&_p]:leading-5"
              cwd={null}
            >
              {os(body)}
            </Xo>
          ) : (
            <p className="py-2 text-base text-token-text-tertiary">
              <FormattedMessage
                id="pullRequestSidePanel.description.empty"
                defaultMessage="No description provided"
                description="Empty pull request description in the side panel"
              />
            </p>
          )
        ) : (
          <PullRequestSidePanelErrorMessage description={error} />
        )}
      </div>
    </details>
  );
}
var pullRequestDescriptionSectionModule,
  pullRequestDescriptionSectionJsxRuntime,
  initPullRequestSidePanelDescriptionSectionChunk = once(() => {
    pullRequestDescriptionSectionModule = getChunkModuleExports();
    initIntlRuntime();
    Fo();
    us();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    pullRequestDescriptionSectionJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelDetails(props) {
  let { bodyError, bodyIsLoading, item, pullRequestBody, request } = props,
    scope = useScope(composerScope),
    { data } = useSignalValue(pullRequestCurrentBranchSignal),
    fixDisabledReason = xc({
      currentBranch: data,
      storedThreadBranch: item.headBranch,
    }).hasThreadBranchMismatch
      ? "branch-mismatch"
      : null,
    hasOpenPullRequest = pullRequestBody?.hasOpenPr ?? null,
    mergeFixDisabledReason = getPullRequestFixDisabledReason({
      baseBranch: item.baseBranch,
      conversationId: scope.value.routeConversationId,
      fixDisabledReason,
      hasOpenPr: hasOpenPullRequest,
      headBranch: item.headBranch,
      prNumber: item.number,
    });
  let checksQueryConfig = {
    intervalMs: QUERY_DURATIONS.ONE_MINUTE,
    staleTime: QUERY_DURATIONS.ONE_MINUTE,
  };
  let checksQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: checksQueryConfig,
  };
  let {
      data: checksResult,
      error: checksError,
      isError: checksHaveError,
      isLoading: checksAreLoading,
    } = useHostQuery("gh-pr-checks", checksQueryOptions),
    commentsQueryConfig = {
      intervalMs: QUERY_DURATIONS.ONE_MINUTE,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    };
  let commentsQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: commentsQueryConfig,
  };
  let {
      data: commentsResult,
      error: commentsError,
      isError: commentsHaveError,
      isLoading: commentsAreLoading,
    } = useHostQuery("gh-pr-comments", commentsQueryOptions),
    mergeBlocker =
      pullRequestBody == null
        ? item.mergeBlocker
        : pullRequestBody.mergeBlocker,
    repo = pullRequestBody?.repo ?? request.repo ?? null,
    diffRequest = {
      cwd: request.cwd,
      hostId: request.hostId,
      number: item.number,
      repo,
    };
  let shouldLoadConflictDiff = mergeBlocker === "conflicts",
    diffQueryConfig = {
      enabled: shouldLoadConflictDiff,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    };
  let diffQueryOptions = {
    source: "pull_request_board",
    params: diffRequest,
    queryConfig: diffQueryConfig,
  };
  let {
      data: diffResult,
      error: diffError,
      isError: diffHaveError,
      isLoading: diffIsLoading,
    } = useHostQuery("gh-pr-diff", diffQueryOptions),
    checksData = checksResult?.status === "success" ? checksResult : null,
    commentsData = commentsResult?.status === "success" ? commentsResult : null,
    conflictFilePaths =
      diffResult?.status === "success"
        ? yl(diffResult.unifiedDiff, {
            maxFiles: 20,
          }).map(getPullRequestDiffFileDisplayPath)
        : null;
  let overviewSection = (
    <PullRequestSidePanelOverviewSection
      hostId={request.hostId}
      item={item}
      checks={checksData}
      checksHaveError={checksHaveError}
      checksAreLoading={checksAreLoading}
      comments={commentsData}
      commentsHaveError={commentsHaveError}
      commentsAreLoading={commentsAreLoading}
      mergeBlocker={mergeBlocker}
      repo={repo}
    />
  );
  let pullRequestBodyText = pullRequestBody?.body ?? null,
    bodySection = (
      <PullRequestSidePanelDescriptionSection
        body={pullRequestBodyText}
        error={bodyError}
        loading={bodyIsLoading}
      />
    );
  let checksErrorMessage = checksError?.message,
    checksSection = pullRequestSidePanelDetailsJsxRuntime.jsx(
      PullRequestSidePanelChecksSection,
      {
        data: checksData,
        error: checksErrorMessage,
        fixDisabledReason: mergeFixDisabledReason,
        item,
        loading: checksAreLoading,
      },
    );
  let conflictSection =
    mergeBlocker === "conflicts"
      ? pullRequestSidePanelDetailsJsxRuntime.jsx(
          PullRequestSidePanelConflictsSection,
          {
            error:
              diffResult?.status === "error"
                ? diffResult.error
                : diffError?.message,
            files: conflictFilePaths,
            fixDisabledReason: mergeFixDisabledReason,
            hasError: diffHaveError || diffResult?.status === "error",
            item,
            loading: diffIsLoading,
            repo,
          },
        )
      : null;
  let commentsErrorMessage = commentsError?.message,
    commentsSection = pullRequestSidePanelDetailsJsxRuntime.jsx(
      PullRequestSidePanelCommentsSection,
      {
        data: commentsData,
        error: commentsErrorMessage,
        fixDisabledReason: mergeFixDisabledReason,
        item,
        loading: commentsAreLoading,
      },
    );
  return (
    <>
      {overviewSection}
      {bodySection}
      {checksSection}
      {conflictSection}
      {commentsSection}
    </>
  );
}

function getPullRequestDiffFileDisplayPath(diffFile) {
  return diffFile.newPath === "/dev/null" ? diffFile.oldPath : diffFile.newPath;
}

var pullRequestSidePanelDetailsModule,
  pullRequestSidePanelDetailsJsxRuntime,
  initPullRequestSidePanelDetailsChunk = once(() => {
    pullRequestSidePanelDetailsModule = getChunkModuleExports();
    initScopeRuntime();
    bl();
    Yc();
    po();
    initComposerScope();
    initQueryDurationConstants();
    initVscodeApiBridge();
    initPullRequestSidePanelChecksSectionChunk();
    initPullRequestSidePanelCommentsSectionChunk();
    initPullRequestSidePanelConflictsSectionChunk();
    initPullRequestSidePanelDescriptionSectionChunk();
    initPullRequestSidePanelOverviewSectionChunk();
    pullRequestSidePanelDetailsJsxRuntime = getJsxRuntime();
  });

function PullRequestSidePanelHeader(props) {
  let { hostId, item, pullRequestBody, request } = props,
    intl = useIntl(),
    pullRequestState =
      pullRequestBody == null
        ? item.state === "draft" || item.state === "merged"
          ? item.state
          : "open"
        : pullRequestBody.hasOpenPr === false
          ? "merged"
          : pullRequestBody.isDraft
            ? "draft"
            : "open",
    titleNode = (
      <div className="truncate text-base leading-5 font-medium text-token-foreground">
        {item.title}
      </div>
    );
  let stateNode = (
    <div className="text-sm leading-5 text-token-text-tertiary">
      {pullRequestState === "draft" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.draft"
          defaultMessage="Draft"
          description="Draft pull request state shown in the side panel header"
        />
      ) : pullRequestState === "merged" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.merged"
          defaultMessage="Merged"
          description="Merged pull request state shown in the side panel header"
        />
      ) : (
        <FormattedMessage
          id="pullRequestSidePanel.state.open"
          defaultMessage="Open"
          description="Open pull request state shown in the side panel header"
        />
      )}
    </div>
  );
  let titleBlock = (
    <div className="flex min-w-0 flex-col">
      {titleNode}
      {stateNode}
    </div>
  );
  let openPullRequestLabel = intl.formatMessage({
    id: "pullRequestSidePanel.openOnGitHub",
    defaultMessage: "Open pull request on GitHub",
    description:
      "Accessible label for opening a pull request from the side panel",
  });
  let trackOpenOnGitHub = (event) => {
    openInBrowserFromEvent({
      event,
      href: item.url,
      initiator: "pull_request_link",
    });
  };
  let externalIcon = <ExternalLinkIcon className="icon-sm" href={item.url} />;
  let githubLink = (
    <a
      aria-label={openPullRequestLabel}
      className="cursor-interaction rounded-lg p-1.5 text-token-foreground hover:bg-token-list-hover-background"
      href={item.url}
      rel="noreferrer"
      target="_blank"
      onClick={trackOpenOnGitHub}
    >
      {externalIcon}
    </a>
  );
  let mergeActions = pullRequestSidePanelTabJsxRuntime.jsx(
    PullRequestMergeActions,
    {
      hostId,
      item,
      pullRequestBody,
      request,
      surface: "thread_side_panel",
      variant: "side-panel",
    },
  );
  let actionGroup = (
    <div className="flex shrink-0 items-center gap-2">
      {githubLink}
      {mergeActions}
    </div>
  );
  return (
    <header className="flex h-[50px] items-start justify-between gap-4">
      {titleBlock}
      {actionGroup}
    </header>
  );
}

var pullRequestSidePanelTabModule,
  pullRequestSidePanelTabJsxRuntime,
  PullRequestSidePanelTabContent,
  initPullRequestSidePanelTabChunk = once(() => {
    pullRequestSidePanelTabModule = getChunkModuleExports();
    initIntlRuntime();
    initExternalUrlHelpers();
    Xr();
    initQueryDurationConstants();
    initVscodeApiBridge();
    initPullRequestMergeActionsChunk();
    initPullRequestSidePanelDetailsChunk();
    pullRequestSidePanelTabJsxRuntime = getJsxRuntime();
    PullRequestSidePanelTabContent = function (props) {
      let { hostId, item, repo } = props,
        request = {
          cwd: item.cwd,
          headBranch: item.headBranch,
          hostId,
          number: item.number,
          repo,
        };
      let bodyQueryConfig = {
        intervalMs: QUERY_DURATIONS.ONE_MINUTE,
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      };
      let bodyQueryOptions = {
        source: "pull_request_board",
        params: request,
        queryConfig: bodyQueryConfig,
      };
      let { data, error, isLoading } = useHostQuery(
          "gh-pr-body",
          bodyQueryOptions,
        ),
        pullRequestBody = data?.status === "success" ? data : null,
        headerNode = pullRequestSidePanelTabJsxRuntime.jsx(
          PullRequestSidePanelHeader,
          {
            hostId,
            item,
            pullRequestBody,
            request,
          },
        );
      let bodyError = error?.message,
        detailsNode = pullRequestSidePanelTabJsxRuntime.jsx(
          PullRequestSidePanelDetails,
          {
            bodyError,
            bodyIsLoading: isLoading,
            item,
            pullRequestBody,
            request,
          },
        );
      return (
        <div className="h-full min-h-0 overflow-y-auto bg-token-main-surface-primary">
          <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5 pb-4">
            {headerNode}
            {detailsNode}
          </main>
        </div>
      );
    };
  });

function openPullRequestSidePanelTab(
  scope,
  { hostId, item, repo },
  activate = true,
  fallbackPosition = "right",
) {
  let tabId = `pull-request:${item.url}`,
    targetPosition = no(scope, tabId) ?? fallbackPosition;
  return (
    va(targetPosition).openTab(scope, PullRequestSidePanelTabContent, {
      activate,
      defaultState: () => ({}),
      icon: pullRequestSidePanelTabReactRuntime.createElement(Ws, {
        className: "icon-xs shrink-0",
        state: item.state,
      }),
      id: tabId,
      props: {
        hostId,
        item,
        repo,
      },
      title: scope.get(Wa).formatMessage(
        {
          id: "thread.sidePanel.pullRequestTab.title",
          defaultMessage: "PR #{number}",
          description: "Title for a pull request side-panel tab",
        },
        {
          number: item.number,
        },
      ),
      tooltip: item.title,
    }),
    activate && wa(scope, targetPosition),
    true
  );
}

var pullRequestSidePanelTabReactRuntime,
  initPullRequestSidePanelOpenerChunk = once(() => {
    pullRequestSidePanelTabReactRuntime = toEsModule(loadReactModule(), 1);
    Za();
    Js();
    initPullRequestSidePanelTabChunk();
    ho();
  });
function LocalConversationGitSummary(props) {
  let {
      conversationId,
      cwd,
      hostConfig,
      workspaceBrowserRoot,
      onCreatePullRequest,
    } = props,
    scope = useScope(localConversationRouteScope),
    threadWorkspaceBrowserRoot = useScopedValue(
      conversationCwdSignal,
      conversationId,
    ),
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ),
    workspaceRoot = threadWorkspaceBrowserRoot ?? workspaceBrowserRoot,
    headBranchQuery = ys(
      workspaceRoot,
      hostConfig,
      "local_conversation_git_summary",
    ),
    createPullRequestActionParams = {
      cwd,
      hostConfig,
    };
  let createPullRequestActionState = useScopedValue(
      createPullRequestActionStateSignal,
      createPullRequestActionParams,
    ),
    headBranchName = headBranchQuery.data?.trim() ?? "",
    normalizedHeadBranchName = getPullRequestTitleOrFallback(
      storedThreadBranch,
      headBranchName,
    );
  let headBranch = normalizedHeadBranchName,
    hasEmptyHeadBranch =
      headBranchQuery.isSuccess && headBranchName.length === 0,
    workflowParams = {
      cwd,
      hostId: hostConfig.id,
    };
  let activeWorkflow = useScopedValue(activeWorkflowSignal, workflowParams),
    workflowPhase = activeWorkflow?.phase ?? null,
    isCreatePrWorkflow = activeWorkflow?.workflow === "create-pr",
    ghCliAvailability = useScopedValue(
      githubCliAvailabilitySignal,
      hostConfig.id,
    ),
    pullRequestStatusParams = {
      cwd: workspaceRoot,
      headBranch: headBranch,
      hostId: hostConfig.id,
      operationSource: "local_conversation_git_summary",
    };
  let pullRequestStatusQuery = useScopedValue(
    pullRequestStatusQuerySignal,
    pullRequestStatusParams,
  );
  if (
    workspaceRoot == null ||
    (!hasEmptyHeadBranch && headBranchName.length === 0)
  )
    return null;
  if (hasEmptyHeadBranch) {
    if (
      isCreatePrWorkflow &&
      workflowPhase != null &&
      (pullRequestStatusQuery.type !== "success" ||
        pullRequestStatusQuery.data.hasOpenPr !== true)
    ) {
      let cancelCreatePullRequest = () =>
        Lc({
          cwd,
          hostId: hostConfig.id,
        });
      return (
        <CreatePullRequestProgressSummaryRow
          phase={workflowPhase}
          onCancel={cancelCreatePullRequest}
        />
      );
    }
    return localConversationGitSummaryJsxRuntime.jsx(
      CreatePullRequestSummaryAction,
      {
        createPullRequestActionState: createPullRequestActionState,
        ghCliAvailability: ghCliAvailability,
        onCreatePullRequest,
        workflowPhase: workflowPhase,
      },
    );
  }
  if (
    isCreatePrWorkflow &&
    workflowPhase != null &&
    (pullRequestStatusQuery.type !== "success" ||
      pullRequestStatusQuery.data.hasOpenPr !== true)
  ) {
    let cancelCreatePullRequest = () =>
      Lc({
        cwd,
        hostId: hostConfig.id,
      });
    return (
      <CreatePullRequestProgressSummaryRow
        phase={workflowPhase}
        onCancel={cancelCreatePullRequest}
      />
    );
  }
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  if (pullRequestStatusQuery.type === "error") {
    return (
      <SummaryPanelRow
        className="!text-token-text-tertiary"
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.pullRequestUnavailable"
            defaultMessage="Pull request status unavailable"
            description="GitHub status row shown when PR status cannot be loaded"
          />
        }
      />
    );
  }
  if (pullRequestStatusQuery.type === "loading") {
    return (
      <SummaryPanelRow
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.checkingPullRequest"
            defaultMessage="Checking pull request"
            description="GitHub status row shown while loading PR data"
          />
        }
      />
    );
  }
  let createPullRequestRow =
    createPullRequestActionState === "hidden" ? null : (
      <CreatePullRequestSummaryRow
        isCreatePullRequestEnabled={createPullRequestActionState === "enabled"}
        onCreatePullRequest={onCreatePullRequest}
        workflowPhase={workflowPhase}
      />
    );
  let fallbackRow = createPullRequestRow;
  if (pullRequestStatusQuery.type === "not-found") return fallbackRow;
  let pullRequestStatus = pullRequestStatusQuery.data,
    visualState = getPullRequestVisualState({
      hasOpenPr: pullRequestStatus.hasOpenPr,
      isDraft: pullRequestStatus.isDraft,
      url: pullRequestStatus.url,
    });
  if (visualState == null) return fallbackRow;
  let mergeVisualState = getPullRequestMergeVisualState({
      canMerge: pullRequestStatus.canMerge,
      ciStatus: pullRequestStatus.ciStatus,
      hasMergeConflicts: pullRequestStatus.mergeBlocker === "conflicts",
      status: visualState,
    }),
    pullRequestSummaryRow = localConversationGitSummaryJsxRuntime.jsx(
      PullRequestSummaryRow,
      {
        conversationId,
        hostId: hostConfig.id,
        onOpenSidePanel: ({ hostId, item, repo }) => {
          openPullRequestSidePanelTab(scope, {
            hostId,
            item,
            repo,
          });
        },
        pullRequestStatus: pullRequestStatus,
        visualState: mergeVisualState,
      },
    );
  let detailRows = (
    <PullRequestStatusDetailRows
      conversationId={conversationId}
      headBranch={headBranchName}
      pullRequestStatus={pullRequestStatus}
    />
  );
  return (
    <div className="relative z-10 flex flex-col">
      {pullRequestSummaryRow}
      {detailRows}
    </div>
  );
}
function CreatePullRequestSummaryAction(props) {
  let {
    createPullRequestActionState,
    ghCliAvailability,
    onCreatePullRequest,
    workflowPhase,
  } = props;
  if (createPullRequestActionState === "hidden") return null;
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  let isCreatePullRequestEnabled = createPullRequestActionState === "enabled";
  return (
    <CreatePullRequestSummaryRow
      isCreatePullRequestEnabled={isCreatePullRequestEnabled}
      onCreatePullRequest={onCreatePullRequest}
      workflowPhase={workflowPhase}
    />
  );
}
function CreatePullRequestSummaryRow(props) {
  let { isCreatePullRequestEnabled, onCreatePullRequest, workflowPhase } =
      props,
    isDisabled = workflowPhase != null || !isCreatePullRequestEnabled,
    icon = <GithubStatusPlaceholderIcon />,
    label = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.createPullRequest"
        defaultMessage="Create pull request"
        description="GitHub status row shown when no PR exists for the branch"
      />
    );
  return (
    <SummaryPanelRow
      disabled={isDisabled}
      onClick={onCreatePullRequest}
      icon={icon}
      label={label}
    />
  );
}
function getGithubCliStatusSummaryRow(ghCliAvailability) {
  switch (ghCliAvailability) {
    case "loading":
    case "error":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.checkingPullRequest"
              defaultMessage="Checking pull request"
              description="GitHub status row shown while loading PR data"
            />
          }
        />
      );
    case "missing":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliUnavailable"
              defaultMessage="GitHub CLI unavailable"
              description="GitHub status row shown when gh is not installed"
            />
          }
        />
      );
    case "unauthenticated":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliSignedOut"
              defaultMessage="GitHub CLI not authenticated"
              description="GitHub status row shown when gh is not authenticated"
            />
          }
        />
      );
    case "available":
      return null;
  }
}
function CreatePullRequestProgressSummaryRow(props) {
  let { phase, onCancel } = props,
    spinnerIcon = localConversationGitSummaryJsxRuntime.jsx(SpinnerIcon, {
      className: GITHUB_STATUS_ICON_CLASS_NAME,
    });
  let phaseLabel = localConversationGitSummaryJsxRuntime.jsx(nl, {
    phase,
  });
  let cancelButton = <Ms onCancel={onCancel} />;
  return (
    <SummaryPanelRow
      icon={spinnerIcon}
      label={phaseLabel}
      trailing={cancelButton}
      trailingVisible={true}
    />
  );
}
function GithubStatusPlaceholderIcon() {
  return <GitHubIcon className={GITHUB_STATUS_ICON_CLASS_NAME} />;
}
var localConversationGitSummaryModule,
  localConversationGitSummaryJsxRuntime,
  GITHUB_STATUS_ICON_CLASS_NAME,
  initLocalConversationGitSummaryChunk = once(() => {
    localConversationGitSummaryModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initConversationStateSelectors();
    initSpinnerComponent();
    jc();
    initGitHubIcon();
    hc();
    ic();
    Qs();
    Ss();
    initPullRequestVisualStateChunk();
    io();
    ka();
    initSummaryPanelRowChunk();
    initPullRequestTitleFallbackChunk();
    initPullRequestSummaryRowChunk();
    initPullRequestSidePanelOpenerChunk();
    localConversationGitSummaryJsxRuntime = getJsxRuntime();
    GITHUB_STATUS_ICON_CLASS_NAME = "icon-sm shrink-0 text-token-text-tertiary";
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
