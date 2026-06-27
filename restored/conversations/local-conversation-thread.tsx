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
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  Al as initComposerScope,
  Ao as initGitBranchIcon,
  Au as initOsInfoQuery,
  BP as classNames,
  BV as getJsxRuntime,
  Bn as initGlobalCommandHandlers,
  DL as normalizeWorkspacePath,
  DM as initWindowZoomContext,
  DN as Button,
  Dl as createLocalConversationRouteTarget,
  FB as useScope,
  Fx as initEnvironmentTerminalController,
  Ga as initElectronPlatformContent,
  Gi as DropdownMenu,
  Gj as initStatsigFeatureGateHooks,
  Gu as initGlobalStateQueryRuntime,
  HO as getReviewCommentAttachmentKeyValue,
  IB as useSignalValue,
  I_ as initRouteScope,
  Io as initConnectorAppsListQuery,
  Ix as environmentTerminalControllerService,
  JV as loadReactModule,
  Ja as CheckCircleIcon,
  Jo as be,
  LB as loadIsEqualModule,
  LN as initReducedMotionPreference,
  La as initExternalUrlHelpers,
  Lj as PlusIcon,
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
  PO as at,
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
  VP as initClassNameRuntime,
  Vn as dispatchGlobalCommand,
  Wa as PlatformContentGate,
  Wg as initMarkdownResourceHelpers,
  YO as initPullRequestReviewCommentHelpers,
  Ya as initCheckCircleFilledIcon,
  ZN as createHostQuerySignal,
  Zi as initDropdownMenuPrimitives,
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
  bk as loadUniqByModule,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  di as PopoverRoot,
  eP as useHostQuery,
  ea as SearchIcon,
  en as ExternalLinkIcon,
  fh as initGitActionDirectiveRuntime,
  fu as initTaskWorkspaceQueryRuntime,
  gi as initPopoverPrimitives,
  gp as conversationCwdSignal,
  hM as initTooltipPrimitives,
  hi as PopoverTrigger,
  hs as initLocalImageInliningHelpers,
  iF as initIntlRuntime,
  jM as $n,
  jm as conversationModeSignal,
  ju as useOsInfo,
  kN as SpinnerIcon,
  kO as MY_REQUEST_PROMPT_HEADER,
  ko as GitBranchIcon,
  lA as cr,
  lD as lr,
  lF as useIntl,
  mM as TooltipProvider,
  mP as logger,
  mi as _r,
  mo as initGitHubIcon,
  mv as xr,
  oM as initRefreshIcon,
  oP as initQueryDurationConstants,
  ok as sendAppServerRequest,
  pM as Tooltip,
  pP as initLoggerRuntime,
  pi as PopoverContent,
  po as GitHubIcon,
  pu as useDebouncedValue,
  qV as getChunkModuleExports,
  qi as MenuChrome,
  qj as useStatsigGate,
  rF as defineMessages,
  sF as FormattedMessage,
  tP as useAppServerMutation,
  ta as initSearchIcon,
  tc as Yr,
  tn as Xr,
  uM as toastSignal,
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
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Cl as pullRequestCurrentBranchSignal,
  Ds as openEnvironmentTerminalSession,
  Ga as MoreHorizontalIcon,
  Ha as updatePullRequestReviewCommentAttachments,
  Il as Ki,
  Ir as setThreadSourceFrameState,
  Ja as Ji,
  Ka as initMoreHorizontalIcon,
  Mr as Qi,
  Od as $i,
  Td as ua,
  Va as da,
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
  $ as Oo,
  $o as pullRequestMergeConflictAttachmentSignal,
  Ai as Ao,
  Gt as Po,
  H as Fo,
  Ja as Lo,
  Ma as Bo,
  Ot as Wo,
  Q as CommentBubbleIcon,
  Qo as attachedPullRequestChecksSignal,
  W as Xo,
  _o as Zo,
  a as Qo,
  ho as ts,
  ji as useBackgroundSubagentsEnabled,
  l as is,
  ls as as,
  m as os,
  ns as cs,
  o as ls,
  p as us,
  qa as fs,
  u as ps,
  us as ms,
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
  Qc as Zs,
  Ql as Qs,
  St as tc,
  Tu as rc,
  Ul as ic,
  Xc as lc,
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
  os as zc,
  qa as Vc,
  sa as Wc,
  ss as Kc,
  tu as Yc,
  vc as Qc,
  xt as el,
  yc as tl,
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
  HeartbeatAutomationCheckRing as Vl,
  HeartbeatAutomationIcon as Gl,
  initHeartbeatAutomationCheckRingChunk as Ul,
  initHeartbeatAutomationIconChunk as ql,
  initPullRequestChecksStatusLabelChunk as Bl,
  PullRequestChecksSummary as Kl,
  pullRequestChecksStatusLabel as Hl,
} from "../github/pull-request-checks-summary";
import {
  M as Tu,
  N as Eu,
} from "../boundaries/current-ref/onboarding-general-settings-producer";
import {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
} from "../features/hotkey-window-state";
import {
  initShareInviteAutocompleteChunk as Nu,
  ShareInviteAutocomplete as Pu,
} from "../collaboration/share-invite-autocomplete";
import {
  initThreadSidePanelTabRegistryChunk,
  registerThreadSidePanelTab,
} from "../app-shell/thread-background-processes";
import { initTeamIconChunk as $u, TeamIcon as ed } from "../icons/team-icon";
import { initThreadScrollControllerContextChunk as id } from "../utils/thread-scroll-controller-context";
import {
  C as PullRequestInlineActionButton,
  S as initPullRequestCheckStatusIconChunk,
  _ as initPullRequestAnalyticsChunk,
  a as PullRequestMergeActions,
  m as usePullRequestUpdateMutation,
  n as initPullRequestCheckRowsChunk,
  o as initPullRequestMergeActionsChunk,
  p as initPullRequestUpdateMutationChunk,
  t as PullRequestCheckRows,
  v as trackPullRequestAction,
  w as initPullRequestInlineActionButtonChunk,
  x as PullRequestUnknownCheckIcon,
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
  initPullRequestConflictFileRowsChunk,
  initPullRequestSidePanelDetailsSummaryChunk,
  initPullRequestSidePanelErrorMessageChunk,
  initPullRequestSidePanelLoadingStateChunk,
  PullRequestConflictFileRows,
  PullRequestSidePanelDetailsSummary,
  PullRequestSidePanelErrorMessage,
  PullRequestSidePanelLoadingState,
} from "./local-conversation-thread-parts/pull-request-side-panel-primitives";
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
function buildPullRequestCommentsFixPrompt({ baseBranch, headBranch, number }) {
  return [
    "## Pull request comments:",
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and address the attached outstanding PR comments with the smallest safe changes.`,
    "Start from the attached unresolved review threads and comments.",
    "Address every actionable comment without asking the user which ones to handle.",
    "If a comment needs clarification, is already outdated, or should not be changed, explain that clearly instead of guessing.",
    MY_REQUEST_PROMPT_HEADER,
    "Address all actionable attached PR feedback.",
  ].join("\n");
}
function getPullRequestCommentsFixDisabledReason({
  baseBranch,
  conversationId,
  headBranch,
  prNumber,
}) {
  return (
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-pr-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
function setPullRequestCommentsAttached(
  scope,
  { attached, commentAttachments, conversationId },
) {
  return conversationId == null || commentAttachments.length === 0
    ? false
    : (updatePullRequestReviewCommentAttachments(
        scope,
        conversationId,
        (currentAttachments) => {
          if (attached)
            return appendMissingReviewCommentAttachments(
              currentAttachments,
              commentAttachments,
            );
          let removedAttachmentKeys = new Set(
              commentAttachments.map(getReviewCommentAttachmentKeyValue),
            ),
            nextAttachments = currentAttachments.filter(
              (item) =>
                !removedAttachmentKeys.has(
                  getReviewCommentAttachmentKeyValue(item),
                ),
            );
          return nextAttachments.length === currentAttachments.length
            ? currentAttachments
            : nextAttachments;
        },
      ),
      true);
}
function attachPullRequestCommentsAndPromptFix(
  scope,
  {
    baseBranch,
    commentAttachments,
    conversationId,
    focusComposer,
    headBranch,
    number,
  },
) {
  return baseBranch == null ||
    conversationId == null ||
    headBranch == null ||
    number == null ||
    commentAttachments.length === 0
    ? false
    : (setPullRequestCommentsAttached(scope, {
        attached: true,
        commentAttachments,
        conversationId,
      }),
      as(
        scope,
        buildPullRequestCommentsFixPrompt({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      focusComposer && ts(),
      true);
}
function appendMissingReviewCommentAttachments(
  currentAttachments,
  attachmentsToAdd,
) {
  let nextAttachments = [...currentAttachments],
    existingAttachmentKeys = new Set(
      currentAttachments.map(getReviewCommentAttachmentKeyValue),
    ),
    didAppend = false;
  for (let attachment of attachmentsToAdd) {
    let attachmentKey = getReviewCommentAttachmentKeyValue(attachment);
    existingAttachmentKeys.has(attachmentKey) ||
      (existingAttachmentKeys.add(attachmentKey),
      nextAttachments.push(attachment),
      (didAppend = true));
  }
  return didAppend ? nextAttachments : currentAttachments;
}
var initPullRequestCommentFixHelpersChunk = once(() => {
  da();
  cs();
  Zo();
  initPullRequestReviewCommentHelpers();
  at();
});
function PullRequestCommentsFixDisabledTooltip(props) {
  let { reason } = props;
  if (reason == null) return null;
  switch (reason) {
    case "missing-conversation": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingConversation"
          defaultMessage="Addressing PR comments is only available in an active chat"
          description="Tooltip shown when the PR comments action is disabled because there is no active conversation"
        />
      );
    }
    case "missing-pr-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed to address comments"
          description="Tooltip shown when the PR comments action is disabled because required pull request information is unavailable"
        />
      );
    }
  }
}
function PullRequestFixDisabledTooltip(props) {
  let { reason } = props;
  if (reason == null) return null;
  switch (reason) {
    case "branch-mismatch": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.branchMismatch"
          defaultMessage="Switch back to the chat branch to use Fix"
          description="Tooltip shown when Fix is disabled because the checked out branch differs from the thread branch"
        />
      );
    }
    case "closed-pr": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.closedPullRequest"
          defaultMessage="Fix is only available for open pull requests"
          description="Tooltip shown when Fix is disabled because the pull request is closed"
        />
      );
    }
    case "missing-branch-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingBranchInfo"
          defaultMessage="Fix requires both the head and base branch"
          description="Tooltip shown when Fix is disabled because the pull request branch metadata is unavailable"
        />
      );
    }
    case "missing-pr-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed for Fix"
          description="Tooltip shown when Fix is disabled because required pull request information is unavailable"
        />
      );
    }
    case "missing-conversation": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingConversation"
          defaultMessage="Fix is only available in an active chat"
          description="Tooltip shown when Fix is disabled because there is no active conversation"
        />
      );
    }
  }
}
var pullRequestFixDisabledTooltipModule,
  pullRequestFixDisabledTooltipJsxRuntime,
  initPullRequestFixDisabledTooltipChunk = once(() => {
    pullRequestFixDisabledTooltipModule = getChunkModuleExports();
    initIntlRuntime();
    pullRequestFixDisabledTooltipJsxRuntime = getJsxRuntime();
  });
function getPullRequestFixDisabledReason({
  baseBranch,
  conversationId,
  fixDisabledReason,
  hasOpenPr,
  headBranch,
  prNumber,
}) {
  return (
    (hasOpenPr === false ? "closed-pr" : fixDisabledReason) ??
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-branch-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
var initPullRequestFailingChecksPromptChunk = once(() => {});
function buildPullRequestFailingChecksFixPrompt({
  baseBranch,
  headBranch,
  number,
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and make the smallest safe fix for the attached failing CI.`,
    "Start from the attached failing-check context. Then use `gh` to inspect the latest runs, annotations, and logs for those failures before changing code.",
    "Treat `gh` as the primary source of truth for workflow runs, job logs, annotations, and links to any external CI.",
    "Resolve the PR with `gh pr view` or `gh pr checks` and inspect failing GitHub Actions runs with `gh run view`, including logs.",
    "If `gh pr checks` rejects a requested JSON field, retry with the available fields instead of guessing.",
    "If a GitHub Actions run log is incomplete because the run is still in progress, fall back to the per-job logs that GitHub exposes.",
    "If the failure can be diagnosed from GitHub, fix it directly.",
    "If the failure requires external CI logs (for example Buildkite):",
    "- first use `gh` to locate the external run or job URL and linked details",
    "- then check whether any installed skills or tools can access that CI system",
    "- then check whether the required credentials, permissions, tokens, or MCP or tool access are actually available",
    "- if anything is missing, stop and tell the user exactly what is missing and exactly what they can provide to unblock you",
    "- otherwise fetch the external logs, diagnose the issue, and make the smallest safe fix",
    "Do not guess without logs. Do not do unrelated refactors. Be explicit if blocked. After fixing, run the narrowest relevant verification, commit and push the fix, and summarize the root cause, fix, and result.",
    MY_REQUEST_PROMPT_HEADER,
    "Use gh to inspect the failing CI and make the smallest safe fix. Once everything is fixed, commit and push it.",
  ].join("\n");
}
function getPullRequestCheckAttachmentKey(check) {
  return check.link ?? `${check.workflow ?? ""}:${check.name}`;
}
function setPullRequestFailingChecksAttached(scope, { attached, checks }) {
  let failingChecks = checks.filter((item) => item.status === "failing");
  return failingChecks.length === 0
    ? false
    : (ms(scope, (pullRequestContext) => {
        if (!attached) {
          let failingCheckKeys = new Set(
            failingChecks.map(getPullRequestCheckAttachmentKey),
          );
          pullRequestContext.pullRequestChecks =
            pullRequestContext.pullRequestChecks.filter(
              (item) =>
                !failingCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
            );
          return;
        }
        let attachedCheckKeys = new Set(
          pullRequestContext.pullRequestChecks.map(
            getPullRequestCheckAttachmentKey,
          ),
        );
        pullRequestContext.pullRequestChecks.push(
          ...failingChecks.filter(
            (item) =>
              !attachedCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
          ),
        );
      }),
      true);
}
function attachFailingPullRequestChecksAndPromptFix(
  scope,
  { baseBranch, checks, headBranch, number },
) {
  return baseBranch == null ||
    headBranch == null ||
    number == null ||
    !setPullRequestFailingChecksAttached(scope, {
      attached: true,
      checks,
    })
    ? false
    : (as(
        scope,
        buildPullRequestFailingChecksFixPrompt({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      ts(),
      true);
}
function buildPullRequestMergeConflictFixPrompt({
  baseBranch,
  headBranch,
  number,
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and resolve the attached merge conflict blocker with the smallest safe changes.`,
    "Start from the attached merge conflict context. Then use `gh pr view` and local git state to confirm the current merge blocker before changing code.",
    "Fetch the latest base branch, merge or rebase as appropriate for this repository, resolve the conflicts, and avoid unrelated refactors.",
    "After resolving conflicts, run the narrowest relevant verification, commit and push the resolution, and summarize the conflict and result.",
    MY_REQUEST_PROMPT_HEADER,
    "Resolve the PR merge conflicts, then commit and push the fix.",
  ].join("\n");
}
function attachPullRequestMergeConflictAndPromptFix(scope, mergeConflict) {
  return mergeConflict == null
    ? false
    : (as(
        scope,
        buildPullRequestMergeConflictFixPrompt({
          baseBranch: mergeConflict.baseBranch,
          headBranch: mergeConflict.headBranch,
          number: mergeConflict.number,
        }),
      ),
      setPullRequestMergeConflictAttachment(scope, mergeConflict),
      ts(),
      true);
}
function setPullRequestMergeConflictAttachment(scope, mergeConflict) {
  ms(scope, (pullRequestContext) => {
    pullRequestContext.pullRequestMergeConflict = mergeConflict;
  });
}
var initPullRequestFixActionHelpersChunk = once(() => {
  cs();
  Zo();
  at();
});
function PullRequestRichTooltip(props) {
  let { children, content, triggerAsChild = false } = props,
    tooltipContent = pullRequestRichTooltipJsxRuntime.jsx(TooltipProvider, {
      children: content,
    });
  let triggerContent = pullRequestRichTooltipJsxRuntime.jsx(TooltipProvider, {
    children,
  });
  return pullRequestRichTooltipJsxRuntime.jsx(Tooltip, {
    align: "start",
    className: "w-full border-0 bg-transparent p-0 text-left",
    delayDuration: 0,
    interactive: true,
    side: "right",
    sideOffset: 4,
    variant: "rich",
    tooltipContent: tooltipContent,
    tooltipMaxWidth:
      "min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
    triggerAsChild: triggerAsChild,
    children: triggerContent,
  });
}
function PullRequestFlyoutContent(props) {
  let { children } = props,
    body =
      children == null ? null : (
        <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3">
          {children}
        </div>
      );
  return (
    <div className="flex max-h-96 min-h-0 w-96 max-w-full flex-1 flex-col overflow-hidden rounded-xl py-1">
      {body}
    </div>
  );
}
var pullRequestRichTooltipModule,
  pullRequestRichTooltipJsxRuntime,
  initPullRequestRichTooltipChunk = once(() => {
    pullRequestRichTooltipModule = getChunkModuleExports();
    initTooltipPrimitives();
    pullRequestRichTooltipJsxRuntime = getJsxRuntime();
  });
function PullRequestChecksSummaryRow(props) {
  let {
    canFixFailingChecks = false,
    fixTooltipContent,
    onFixFailingChecks,
    pullRequestStatus,
  } = props;
  if (pullRequestStatus == null || pullRequestStatus.checks.length === 0)
    return null;
  let failingChecks = pullRequestStatus.checks.filter(
    isFailingPullRequestCheck,
  );
  let checksToFix = failingChecks,
    hasFixableFailingChecks =
      checksToFix.length > 0 && onFixFailingChecks != null,
    getChecksByStatus = (status) =>
      pullRequestStatus.checks.filter((item) => item.status === status),
    orderedChecks = PULL_REQUEST_CHECK_STATUS_ORDER.flatMap(getChecksByStatus),
    checkRows = orderedChecks.map(PullRequestCheckFlyoutRowItem);
  let popoverContent = pullRequestStatusDetailRowsJsxRuntime.jsx(
    PullRequestFlyoutContent,
    {
      children: checkRows,
    },
  );
  let fixFailingChecksAction = hasFixableFailingChecks
    ? pullRequestStatusDetailRowsJsxRuntime.jsx(PullRequestInlineActionButton, {
        color: "ghostTertiary",
        disabled: !canFixFailingChecks,
        tooltipContent: fixTooltipContent,
        onClick: () => {
          onFixFailingChecks(checksToFix);
        },
        children: (
          <FormattedMessage
            id="codex.localConversation.gitSummary.fixFailingChecks"
            defaultMessage="Fix"
            description="Summary panel row action label for fixing failing pull request checks"
          />
        ),
      })
    : undefined;
  let actionsVisible = hasFixableFailingChecks,
    checksIcon = <Vl checks={pullRequestStatus.checks} />;
  let checksLabel = getPullRequestChecksSummaryLabel(
    pullRequestStatus.checks,
    pullRequestStatus.ciStatus,
  );
  let summaryRow = (
    <SummaryPanelRow
      actions={fixFailingChecksAction}
      actionsVisible={actionsVisible}
      icon={checksIcon}
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={checksLabel}
    />
  );
  return pullRequestStatusDetailRowsJsxRuntime.jsx(PullRequestRichTooltip, {
    triggerAsChild: hasFixableFailingChecks,
    content: popoverContent,
    children: summaryRow,
  });
}
function PullRequestCheckFlyoutRowItem(check, index) {
  return (
    <PullRequestCheckFlyoutRow
      key={`${check.name}-${check.workflow ?? ""}-${index}`}
      check={check}
    />
  );
}
function isFailingPullRequestCheck(check) {
  return check.status === "failing";
}
function PullRequestCheckFlyoutRow(props) {
  let { check } = props,
    checkLink = check.link,
    statusIcon = <PullRequestCheckStatusIcon status={check.status} />;
  let isInteractive = checkLink != null,
    statusLabel = (
      <span className="text-sm text-token-description-foreground">
        <PullRequestCheckStatusLabel status={check.status} />
      </span>
    );
  let handleClick =
    checkLink == null
      ? undefined
      : (event) => {
          openInBrowserFromEvent({
            event: event,
            href: checkLink,
            initiator: "pull_request_link",
          });
        };
  return (
    <SummaryPanelRow
      icon={statusIcon}
      interactive={isInteractive}
      label={check.name}
      trailing={statusLabel}
      trailingVisible={true}
      onClick={handleClick}
    />
  );
}
function PullRequestCheckStatusIcon(props) {
  let { status } = props;
  switch (status) {
    case "failing": {
      return pullRequestStatusDetailRowsJsxRuntime.jsx(zc, {
        className: "icon-sm shrink-0 text-token-charts-red",
      });
    }
    case "passing": {
      return pullRequestStatusDetailRowsJsxRuntime.jsx(CheckCircleIcon, {
        className: "icon-sm shrink-0 text-token-charts-green",
      });
    }
    case "pending": {
      return <Gl className="icon-sm shrink-0 text-token-charts-yellow" />;
    }
    case "skipped":
    case "unknown": {
      return (
        <PullRequestUnknownCheckIcon className="icon-sm shrink-0 text-token-text-tertiary" />
      );
    }
  }
}
function PullRequestCheckStatusLabel(props) {
  let { status } = props;
  switch (status) {
    case "failing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.failed"
          defaultMessage="Failed"
          description="Status label for a failed check in the thread summary panel flyout"
        />
      );
    }
    case "passing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.succeeded"
          defaultMessage="Succeeded"
          description="Status label for a successful check in the thread summary panel flyout"
        />
      );
    }
    case "pending": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.running"
          defaultMessage="Running"
          description="Status label for a pending check in the thread summary panel flyout"
        />
      );
    }
    case "skipped": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.skipped"
          defaultMessage="Skipped"
          description="Status label for a skipped check in the thread summary panel flyout"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.unknown"
          defaultMessage="Unknown"
          description="Status label for an unknown check in the thread summary panel flyout"
        />
      );
    }
  }
}
function getPullRequestChecksSummaryLabel(checks, ciStatus) {
  let failingCheckCount = checks.filter(
      (item) => item.status === "failing",
    ).length,
    pendingCheckCount = checks.filter(
      (item) => item.status === "pending",
    ).length;
  if (failingCheckCount > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.failingChecks.count"
        defaultMessage={
          "{count, plural, one {# failing check} other {# failing checks}}"
        }
        description="Summary panel row label when pull request checks are failing"
        values={{
          count: failingCheckCount,
        }}
      />
    );
  if (pendingCheckCount > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.pendingChecks.count"
        defaultMessage={
          "{count, plural, one {# pending check} other {# pending checks}}"
        }
        description="Summary panel row label when pull request checks are pending"
        values={{
          count: pendingCheckCount,
        }}
      />
    );
  switch (ciStatus) {
    case "passing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksSuccessful"
          defaultMessage="Checks successful"
          description="Summary panel row label when all pull request checks have completed successfully"
        />
      );
    case "none":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.noChecks"
          defaultMessage="No CI checks"
          description="Summary panel row label when the pull request has no checks"
        />
      );
    case "failing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksFailing"
          defaultMessage="Checks failing"
          description="Summary panel row label when pull request checks failed without individual failure details"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.pendingChecks"
          defaultMessage="Pending checks"
          description="Summary panel row label when pull request checks are pending without individual pending details"
        />
      );
  }
}
var pullRequestStatusDetailRowsModule,
  pullRequestStatusDetailRowsJsxRuntime,
  PULL_REQUEST_CHECK_STATUS_ORDER,
  initPullRequestStatusDetailRowsChunk = once(() => {
    pullRequestStatusDetailRowsModule = getChunkModuleExports();
    initIntlRuntime();
    initExternalUrlHelpers();
    initCheckCircleFilledIcon();
    initPullRequestCheckStatusIconChunk();
    ql();
    Kc();
    Ul();
    initPullRequestInlineActionButtonChunk();
    initPullRequestRichTooltipChunk();
    initSummaryPanelRowChunk();
    pullRequestStatusDetailRowsJsxRuntime = getJsxRuntime();
    PULL_REQUEST_CHECK_STATUS_ORDER = [
      "failing",
      "pending",
      "skipped",
      "unknown",
      "passing",
    ];
  });
function PullRequestStatusDetailRows(props) {
  let { conversationId, headBranch, pullRequestStatus } = props,
    scope = useScope(composerScope),
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ),
    reviewCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    );
  if (pullRequestStatus == null || !pullRequestStatus.hasOpenPr) return null;
  let baseBranch = pullRequestStatus.boardItem?.baseBranch ?? null,
    pullRequestHeadBranch =
      pullRequestStatus.boardItem?.headBranch ?? headBranch,
    pullRequestNumber = pullRequestStatus.number,
    pullRequestUrl =
      pullRequestStatus.url ?? pullRequestStatus.boardItem?.url ?? null,
    existingReviewCommentKeySet = new Set(
      reviewCommentAttachments.map(getReviewCommentAttachmentKey),
    );
  let reviewCommentKeySet = existingReviewCommentKeySet,
    hasUnresolvedReviewComments;
  {
    let isNewCommentAttachment;
    isNewCommentAttachment = (commentAttachment) =>
      !reviewCommentKeySet.has(
        getReviewCommentAttachmentKeyValue(commentAttachment),
      );
    hasUnresolvedReviewComments = pullRequestStatus.commentAttachments.some(
      isNewCommentAttachment,
    );
  }
  let hasNewCommentAttachments = hasUnresolvedReviewComments,
    hasFailingChecks = pullRequestStatus.checks.some(
      isFailingPullRequestCheckStatus,
    );
  let canShowFailingChecksFix = hasFailingChecks,
    hasMergeConflicts = pullRequestStatus.mergeBlocker === "conflicts",
    hasCommentAttachments = pullRequestStatus.commentAttachments.length > 0,
    fixDisabledReason =
      canShowFailingChecksFix || hasMergeConflicts || hasNewCommentAttachments
        ? conversationId == null
          ? "missing-conversation"
          : xc({
                currentBranch: headBranch,
                storedThreadBranch: storedThreadBranch,
              }).hasThreadBranchMismatch
            ? "branch-mismatch"
            : null
        : null,
    failingChecksFixDisabledReason = canShowFailingChecksFix
      ? getPullRequestFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          fixDisabledReason: fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let checksFixDisabledReason = failingChecksFixDisabledReason,
    mergeConflictFixDisabledReason = hasMergeConflicts
      ? getPullRequestFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          fixDisabledReason: fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestUrl == null ? null : pullRequestNumber,
        })
      : null;
  let conflictFixDisabledReason = mergeConflictFixDisabledReason,
    commentsFixDisabledReason = hasNewCommentAttachments
      ? getPullRequestCommentsFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let reviewCommentsFixDisabledReason = commentsFixDisabledReason,
    openMergeConflictsFix = () => {
      attachPullRequestMergeConflictAndPromptFix(
        scope,
        baseBranch == null ||
          pullRequestHeadBranch == null ||
          pullRequestNumber == null ||
          pullRequestUrl == null
          ? null
          : {
              baseBranch: baseBranch,
              headBranch: pullRequestHeadBranch,
              number: pullRequestNumber,
              repo: pullRequestStatus.repo,
              url: pullRequestUrl,
            },
      );
    };
  let handleFixMergeConflicts = openMergeConflictsFix,
    openReviewCommentsFix = () => {
      attachPullRequestCommentsAndPromptFix(scope, {
        baseBranch: baseBranch,
        commentAttachments: pullRequestStatus.commentAttachments,
        conversationId,
        focusComposer: true,
        headBranch: pullRequestHeadBranch,
        number: pullRequestNumber,
      });
    };
  let handleFixReviewComments = openReviewCommentsFix,
    canFixFailingChecks = checksFixDisabledReason == null,
    failingChecksTooltipContent =
      checksFixDisabledReason == null
        ? undefined
        : pullRequestSummaryRowsJsxRuntime.jsx(PullRequestFixDisabledTooltip, {
            reason: checksFixDisabledReason,
          });
  let handleFixFailingChecks = (checks) => {
    attachFailingPullRequestChecksAndPromptFix(scope, {
      baseBranch: baseBranch,
      checks: checks,
      headBranch: pullRequestHeadBranch,
      number: pullRequestNumber,
    });
  };
  let checksRow = (
    <PullRequestChecksSummaryRow
      canFixFailingChecks={canFixFailingChecks}
      fixTooltipContent={failingChecksTooltipContent}
      onFixFailingChecks={handleFixFailingChecks}
      pullRequestStatus={pullRequestStatus}
    />
  );
  let mergeConflictsRow = hasMergeConflicts ? (
    <SummaryPanelRow
      actions={pullRequestSummaryRowsJsxRuntime.jsx(
        PullRequestInlineActionButton,
        {
          color: "ghostTertiary",
          disabled: conflictFixDisabledReason != null,
          tooltipContent:
            conflictFixDisabledReason == null
              ? undefined
              : pullRequestSummaryRowsJsxRuntime.jsx(
                  PullRequestFixDisabledTooltip,
                  {
                    reason: conflictFixDisabledReason,
                  },
                ),
          onClick: handleFixMergeConflicts,
          children: (
            <FormattedMessage
              id="codex.localConversation.gitSummary.fixMergeConflicts"
              defaultMessage="Fix"
              description="Summary panel row action label for resolving pull request merge conflicts"
            />
          ),
        },
      )}
      actionsVisible={true}
      icon={
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          <Qc className="icon-xs text-token-charts-red" />
        </span>
      }
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={
        <FormattedMessage
          id="codex.localConversation.gitSummary.mergeConflicts"
          defaultMessage="Merge conflicts"
          description="Summary panel row label when the pull request has merge conflicts"
        />
      }
    />
  ) : null;
  let commentsRow = hasCommentAttachments
    ? pullRequestSummaryRowsJsxRuntime.jsx(PullRequestRichTooltip, {
        triggerAsChild: true,
        content: pullRequestSummaryRowsJsxRuntime.jsx(
          PullRequestFlyoutContent,
          {
            children: (
              <div className="flex flex-col gap-2 py-1">
                {pullRequestStatus.commentAttachments.map((item, index) => {
                  let activityItem =
                    item.reviewThreadId == null
                      ? null
                      : pullRequestStatus.activityItems.find(
                          (_item) =>
                            _item.type === "review_comment" &&
                            _item.reviewThreadId === item.reviewThreadId,
                        );
                  return (
                    <Qo
                      key={`${item.url ?? ""}-${index}`}
                      authorAvatarUrl={activityItem?.authorAvatarUrl}
                      authorLogin={activityItem?.authorLogin}
                      bodyPreview={true}
                      comment={item}
                      createdAt={activityItem?.createdAt}
                      onOpenInReview={() => {
                        Zs(scope, {
                          comment: item,
                        });
                      }}
                      url={item.url ?? null}
                    />
                  );
                })}
              </div>
            ),
          },
        ),
        children: (
          <SummaryPanelRow
            actions={
              hasNewCommentAttachments
                ? pullRequestSummaryRowsJsxRuntime.jsx(
                    PullRequestInlineActionButton,
                    {
                      color: "ghostTertiary",
                      disabled: reviewCommentsFixDisabledReason != null,
                      tooltipContent:
                        reviewCommentsFixDisabledReason == null
                          ? undefined
                          : pullRequestSummaryRowsJsxRuntime.jsx(
                              PullRequestCommentsFixDisabledTooltip,
                              {
                                reason: reviewCommentsFixDisabledReason,
                              },
                            ),
                      onClick: handleFixReviewComments,
                      children: (
                        <FormattedMessage
                          id="codex.localConversation.gitSummary.fixComments"
                          defaultMessage="Fix"
                          description="Summary panel row action label for fixing pull request comments"
                        />
                      ),
                    },
                  )
                : undefined
            }
            actionsVisible={hasNewCommentAttachments}
            icon={
              <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                <CommentBubbleIcon className="icon-xs text-token-text-tertiary" />
              </span>
            }
            interactive={true}
            labelClassName="text-token-text-tertiary"
            label={
              <FormattedMessage
                id="codex.localConversation.gitSummary.comments.count"
                defaultMessage={
                  "{count, plural, one {# comment} other {# comments}}"
                }
                description="Summary panel row label for pull request comments"
                values={{
                  count: pullRequestStatus.commentAttachments.length,
                }}
              />
            }
          />
        ),
      })
    : null;
  return (
    <>
      {checksRow}
      {mergeConflictsRow}
      {commentsRow}
    </>
  );
}
function isFailingPullRequestCheckStatus(check) {
  return check.status === "failing";
}
function getReviewCommentAttachmentKey(commentAttachment) {
  return getReviewCommentAttachmentKeyValue(commentAttachment);
}
var pullRequestSummaryRowsModule,
  pullRequestSummaryRowsJsxRuntime,
  initPullRequestSummaryRowsChunk = once(() => {
    pullRequestSummaryRowsModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initConversationStateSelectors();
    da();
    initPullRequestReviewCommentHelpers();
    Oo();
    tl();
    Yc();
    initPullRequestCommentFixHelpersChunk();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestFailingChecksPromptChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    ls();
    initComposerScope();
    lc();
    initPullRequestRichTooltipChunk();
    initSummaryPanelRowChunk();
    initPullRequestStatusDetailRowsChunk();
    pullRequestSummaryRowsJsxRuntime = getJsxRuntime();
  });
function getPullRequestTitleOrFallback(title, fallbackTitle) {
  return title?.trim() || fallbackTitle;
}
var initPullRequestTitleFallbackChunk = once(() => {});
function PullRequestSidePanelChecksSection(props) {
  let { data, error, fixDisabledReason, item, loading } = props,
    intl = useIntl(),
    scope = useScope(composerScope),
    attachedChecks = useSignalValue(attachedPullRequestChecksSignal),
    failingChecks = data?.checks.filter(isFailingPullRequestCheck),
    attachedCheckKeys = new Set(
      attachedChecks.map(getPullRequestCheckAttachmentKey),
    ),
    allFailingChecksAttached =
      failingChecks != null &&
      failingChecks.length > 0 &&
      failingChecks.every((check) =>
        attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check)),
      );
  let fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestChecksSectionJsxRuntime.jsx(
            PullRequestFixDisabledTooltip,
            {
              reason: fixDisabledReason,
            },
          ),
    headerAction =
      failingChecks != null && failingChecks.length > 0
        ? pullRequestChecksSectionJsxRuntime.jsx(
            PullRequestInlineActionButton,
            {
              color: "secondary",
              ariaLabel: allFailingChecksAttached
                ? intl.formatMessage({
                    id: "pullRequestSidePanel.checks.removeAllAccessible",
                    defaultMessage: "Remove all",
                    description:
                      "Accessible label for removing all failing pull request checks from the chat",
                  })
                : intl.formatMessage({
                    id: "pullRequestSidePanel.checks.fixAllAccessible",
                    defaultMessage: "Fix all",
                    description:
                      "Accessible label for fixing all failing pull request checks",
                  }),
              disabled: !allFailingChecksAttached && fixDisabledReason != null,
              inset: true,
              tooltipContent: allFailingChecksAttached
                ? undefined
                : fixDisabledTooltip,
              onClick: () => {
                if (allFailingChecksAttached) {
                  setPullRequestFailingChecksAttached(scope, {
                    attached: false,
                    checks: failingChecks,
                  });
                  return;
                }
                attachFailingPullRequestChecksAndPromptFix(scope, {
                  baseBranch: item.baseBranch,
                  checks: failingChecks,
                  headBranch: item.headBranch,
                  number: item.number,
                });
              },
              children: allFailingChecksAttached ? (
                <FormattedMessage
                  id="pullRequestSidePanel.checks.removeAll"
                  defaultMessage="Remove"
                  description="Button label for removing all failing pull request checks from the chat"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.checks.fixAll"
                  defaultMessage="Fix"
                  description="Button label for fixing all failing pull request checks"
                />
              ),
            },
          )
        : null;
  let title = (
    <FormattedMessage
      id="pullRequestSidePanel.checks.title"
      defaultMessage="Checks"
      description="Checks section title in the pull request side panel"
    />
  );
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      {title}
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary py-1 ps-4 shadow-sm">
      {error == null ? (
        loading || data == null ? (
          <PullRequestSidePanelLoadingState
            label={
              <FormattedMessage
                id="pullRequestSidePanel.checks.loading"
                defaultMessage="Loading checks"
                description="Loading label for pull request checks"
              />
            }
          />
        ) : data.checks.length > 0 ? (
          <PullRequestCheckRows
            canFix={fixDisabledReason == null}
            checks={data.checks}
            density="comfortable"
            fixTooltipContent={fixDisabledTooltip}
            insetFixButtons={true}
            labelTone="primary"
            isCheckAttached={(check) =>
              attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check))
            }
            onFixCheck={(check) => {
              attachFailingPullRequestChecksAndPromptFix(scope, {
                baseBranch: item.baseBranch,
                checks: [check],
                headBranch: item.headBranch,
                number: item.number,
              });
            }}
            onRemoveCheck={(check) => {
              setPullRequestFailingChecksAttached(scope, {
                attached: false,
                checks: [check],
              });
            }}
          />
        ) : (
          <MenuChrome.Message compact={true}>
            <FormattedMessage
              id="pullRequestSidePanel.checks.empty"
              defaultMessage="No checks reported"
              description="Empty pull request checks list"
            />
          </MenuChrome.Message>
        )
      ) : (
        <PullRequestSidePanelErrorMessage description={error} />
      )}
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-1">
      {header}
      {body}
    </details>
  );
}
function isFailingPullRequestCheck(check) {
  return check.status === "failing";
}
var pullRequestChecksSectionModule,
  pullRequestChecksSectionJsxRuntime,
  initPullRequestSidePanelChecksSectionChunk = once(() => {
    pullRequestChecksSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initDropdownMenuPrimitives();
    cs();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    initPullRequestCheckRowsChunk();
    initComposerScope();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    pullRequestChecksSectionJsxRuntime = getJsxRuntime();
  });
function getPullRequestCommentActivityItems(activityItems) {
  return activityItems.filter((item) => item.type !== "event");
}
function getPullRequestReviewerBadgeModels(reviewers) {
  return pullRequestReviewerBadgeUniqBy
    .default([
      ...reviewers.requested,
      ...reviewers.requestedTeams,
      ...reviewers.approved,
      ...reviewers.changesRequested,
      ...reviewers.commented,
    ])
    .map((item) => ({
      kind: reviewers.requestedTeams.includes(item) ? "team" : "user",
      label: item,
      status: getPullRequestReviewerStatus(reviewers, item),
    }));
}
function getPullRequestReviewerStatus(reviewers, login) {
  return reviewers.changesRequested.includes(login)
    ? "changes_requested"
    : reviewers.approved.includes(login)
      ? "approved"
      : "waiting";
}
var pullRequestReviewerBadgeUniqBy,
  initPullRequestReviewerBadgeModelsChunk = once(() => {
    pullRequestReviewerBadgeUniqBy = toEsModule(be(), 1);
  });
function PullRequestSidePanelCommentsSection(props) {
  let { data, error, fixDisabledReason, item, loading } = props,
    intl = useIntl(),
    scope = useScope(composerScope),
    conversationId = scope.value.routeConversationId,
    attachedCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    ),
    content;
  {
    let commentActivityItems =
        data == null
          ? null
          : getPullRequestCommentActivityItems(data.activityItems),
      commentAttachments = data?.commentAttachments,
      attachedCommentAttachmentKeys = new Set(
        attachedCommentAttachments.map(getReviewCommentAttachmentKeyValue),
      );
    let allCommentsAttached =
        commentAttachments != null &&
        commentAttachments.length > 0 &&
        commentAttachments.every((attachment) =>
          attachedCommentAttachmentKeys.has(
            getReviewCommentAttachmentKeyValue(attachment),
          ),
        ),
      fixDisabledTooltip =
        fixDisabledReason == null
          ? undefined
          : pullRequestCommentsSectionJsxRuntime.jsx(
              PullRequestFixDisabledTooltip,
              {
                reason: fixDisabledReason,
              },
            );
    let headerAction =
      commentAttachments != null && commentAttachments.length > 0
        ? pullRequestCommentsSectionJsxRuntime.jsx(
            PullRequestInlineActionButton,
            {
              color: "secondary",
              ariaLabel: allCommentsAttached
                ? intl.formatMessage({
                    id: "pullRequestSidePanel.comments.removeAllAccessible",
                    defaultMessage: "Remove all",
                    description:
                      "Accessible label for removing all pull request comments from the chat",
                  })
                : intl.formatMessage({
                    id: "pullRequestSidePanel.comments.fixAllAccessible",
                    defaultMessage: "Fix all",
                    description:
                      "Accessible label for fixing all pull request comments",
                  }),
              disabled: !allCommentsAttached && fixDisabledReason != null,
              inset: true,
              tooltipContent: allCommentsAttached
                ? undefined
                : fixDisabledTooltip,
              onClick: () => {
                if (allCommentsAttached) {
                  setPullRequestCommentsAttached(scope, {
                    attached: false,
                    commentAttachments,
                    conversationId,
                  });
                  return;
                }
                attachPullRequestCommentsAndPromptFix(scope, {
                  baseBranch: item.baseBranch,
                  commentAttachments,
                  conversationId,
                  focusComposer: true,
                  headBranch: item.headBranch,
                  number: item.number,
                });
              },
              children: allCommentsAttached ? (
                <FormattedMessage
                  id="pullRequestSidePanel.comments.removeAll"
                  defaultMessage="Remove"
                  description="Button label for removing all pull request comments from the chat"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.comments.fixAll"
                  defaultMessage="Fix"
                  description="Button label for fixing all pull request comments"
                />
              ),
            },
          )
        : null;
    let title = (
      <FormattedMessage
        id="pullRequestSidePanel.comments.title"
        defaultMessage="Comments"
        description="Comments section title in the pull request side panel"
      />
    );
    let header;
    header = (
      <PullRequestSidePanelDetailsSummary action={headerAction}>
        {title}
      </PullRequestSidePanelDetailsSummary>
    );
    content = (
      <details open={true} className="group flex flex-col pb-8">
        {header}
        {error == null ? (
          loading || data == null ? (
            <PullRequestSidePanelLoadingState
              label={
                <FormattedMessage
                  id="pullRequestSidePanel.comments.loading"
                  defaultMessage="Loading comments"
                  description="Loading label for pull request comments"
                />
              }
            />
          ) : commentActivityItems != null &&
            commentActivityItems.length > 0 ? (
            <div className="flex flex-col gap-1">
              {commentActivityItems.map((activityItem) => {
                let commentAttachment = findCommentAttachmentForActivityItem(
                    activityItem,
                    commentAttachments,
                  ),
                  commentIsAttached =
                    commentAttachment != null &&
                    attachedCommentAttachmentKeys.has(
                      getReviewCommentAttachmentKeyValue(commentAttachment),
                    );
                return (
                  <Qo
                    key={activityItem.id}
                    authorAvatarUrl={activityItem.authorAvatarUrl}
                    authorLogin={activityItem.authorLogin}
                    body={activityItem.body}
                    createdAt={activityItem.createdAt}
                    defaultCollapsed={true}
                    metadataAccessory={
                      commentAttachment == null
                        ? null
                        : pullRequestCommentsSectionJsxRuntime.jsx(
                            PullRequestInlineActionButton,
                            {
                              disabled:
                                !commentIsAttached && fixDisabledReason != null,
                              inset: true,
                              tooltipContent: commentIsAttached
                                ? undefined
                                : fixDisabledTooltip,
                              onClick: () => {
                                if (!commentIsAttached) {
                                  attachPullRequestCommentsAndPromptFix(scope, {
                                    baseBranch: item.baseBranch,
                                    commentAttachments: [commentAttachment],
                                    conversationId,
                                    focusComposer: true,
                                    headBranch: item.headBranch,
                                    number: item.number,
                                  });
                                  return;
                                }
                                setPullRequestCommentsAttached(scope, {
                                  attached: false,
                                  commentAttachments: [commentAttachment],
                                  conversationId,
                                });
                              },
                              children: commentIsAttached ? (
                                <FormattedMessage
                                  id="pullRequestSidePanel.comments.removeFromChat"
                                  defaultMessage="Remove"
                                  description="Button label for removing a pull request comment from the chat"
                                />
                              ) : (
                                <FormattedMessage
                                  id="pullRequestSidePanel.comments.fixComment"
                                  defaultMessage="Fix"
                                  description="Button label for fixing an individual pull request comment"
                                />
                              ),
                            },
                          )
                    }
                    metadataTooltipContent={
                      activityItem.path ?? commentAttachment?.position.path
                    }
                    replies={activityItem.replies}
                    surface="timeline"
                    url={activityItem.url}
                  />
                );
              })}
            </div>
          ) : (
            <MenuChrome.Message compact={true}>
              <FormattedMessage
                id="pullRequestSidePanel.comments.empty"
                defaultMessage="No comments"
                description="Empty pull request comments list"
              />
            </MenuChrome.Message>
          )
        ) : (
          <PullRequestSidePanelErrorMessage description={error} />
        )}
      </details>
    );
  }
  return content;
}
function findCommentAttachmentForActivityItem(
  activityItem,
  commentAttachments,
) {
  return (
    commentAttachments?.find(
      (attachment) =>
        (activityItem.reviewThreadId != null &&
          attachment.reviewThreadId === activityItem.reviewThreadId) ||
        (activityItem.url != null && attachment.url === activityItem.url),
    ) ?? null
  );
}
var pullRequestCommentsSectionModule,
  pullRequestCommentsSectionJsxRuntime,
  initPullRequestSidePanelCommentsSectionChunk = once(() => {
    pullRequestCommentsSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    da();
    initDropdownMenuPrimitives();
    initPullRequestReviewCommentHelpers();
    initPullRequestCommentFixHelpersChunk();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    ls();
    initComposerScope();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    initPullRequestReviewerBadgeModelsChunk();
    pullRequestCommentsSectionJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelConflictsSection(props) {
  let { error, files, fixDisabledReason, hasError, item, loading, repo } =
      props,
    scope = useScope(composerScope),
    conflictsAreAttached =
      useSignalValue(pullRequestMergeConflictAttachmentSignal)?.url ===
      item.url,
    fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestConflictsSectionJsxRuntime.jsx(
            PullRequestFixDisabledTooltip,
            {
              reason: fixDisabledReason,
            },
          );
  let actionDisabled = !conflictsAreAttached && fixDisabledReason != null,
    actionTooltip = conflictsAreAttached ? undefined : fixDisabledTooltip,
    handleToggleConflictsFix = () => {
      if (conflictsAreAttached) {
        setPullRequestMergeConflictAttachment(scope, null);
        return;
      }
      attachPullRequestMergeConflictAndPromptFix(scope, {
        baseBranch: item.baseBranch,
        headBranch: item.headBranch,
        number: item.number,
        repo,
        url: item.url,
      });
    };
  let actionLabel = conflictsAreAttached ? (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.remove"
      defaultMessage="Remove"
      description="Button label for removing pull request merge conflicts from the chat"
    />
  ) : (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.fix"
      defaultMessage="Fix"
      description="Button label for fixing pull request merge conflicts"
    />
  );
  let headerAction = pullRequestConflictsSectionJsxRuntime.jsx(
    PullRequestInlineActionButton,
    {
      color: "secondary",
      disabled: actionDisabled,
      inset: true,
      tooltipContent: actionTooltip,
      onClick: handleToggleConflictsFix,
      children: actionLabel,
    },
  );
  let title = (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.title"
      defaultMessage="Merge conflicts"
      description="Merge conflicts section title in the pull request side panel"
    />
  );
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      {title}
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary px-4 py-1 shadow-sm">
      {pullRequestConflictsSectionJsxRuntime.jsx(PullRequestConflictFileRows, {
        error,
        files,
        hasError,
        loading,
        repository: repo,
      })}
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-2">
      {header}
      {body}
    </details>
  );
}
var pullRequestConflictsSectionModule,
  pullRequestConflictsSectionJsxRuntime,
  initPullRequestSidePanelConflictsSectionChunk = once(() => {
    pullRequestConflictsSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    cs();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    initComposerScope();
    initPullRequestConflictFileRowsChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    pullRequestConflictsSectionJsxRuntime = getJsxRuntime();
  });
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
  }),
  pullRequestReviewerPlaceholderIconJsxRuntime,
  PullRequestReviewerPlaceholderIcon,
  initPullRequestReviewerPlaceholderIconChunk = once(() => {
    toEsModule(loadReactModule());
    pullRequestReviewerPlaceholderIconJsxRuntime = getJsxRuntime();
    PullRequestReviewerPlaceholderIcon = (props) => (
      <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4 2.63049C14.7714 2.63049 18.3151 6.1742 18.3151 10.5455C18.3151 14.9169 14.7714 18.4606 10.4 18.4606C6.02869 18.4606 2.48499 14.9169 2.48499 10.5455C2.48499 6.1742 6.02869 2.63049 10.4 2.63049ZM10.4 13.0455C8.52826 13.0455 6.84344 13.846 5.66858 15.1227C6.86576 16.36 8.54237 17.1305 10.4 17.1305C12.2574 17.1305 13.9333 16.3597 15.1305 15.1227C13.9557 13.8461 12.2716 13.0457 10.4 13.0455ZM10.4 6.37854C9.01942 6.37854 7.9002 7.49798 7.90002 8.87854C7.90002 10.2593 9.01931 11.3785 10.4 11.3785C11.7807 11.3785 12.9 10.2592 12.9 8.87854C12.8998 7.49799 11.7806 6.37855 10.4 6.37854Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  githubUserSearchQuery,
  initGithubUserSearchQuery = once(() => {
    initAppScope();
    initQueryDurationConstants();
    initVscodeApiBridge();
    githubUserSearchQuery = createHostQuerySignal(
      appScope,
      "gh-user-search",
      (queryParams) => ({
        enabled: queryParams.query.length > 0,
        params: queryParams,
        retry: false,
        select: (response) => {
          if (response.status === "error") throw Error(response.error);
          return response.users;
        },
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      }),
    );
  });
function filterAlreadyPendingReviewers({
  pendingReviewerLogins,
  searchResults,
}) {
  let pendingReviewerLoginSet = new Set(
    pendingReviewerLogins.map((item) => item.toLowerCase()),
  );
  return searchResults.filter(
    ({ login }) => !pendingReviewerLoginSet.has(login.toLowerCase()),
  );
}
function getReviewerSearchMenuOptions({
  availableReviewers,
  isCurrentQuery,
  query,
  searchHasError,
  selectedReviewers,
}) {
  if (searchHasError && isCurrentQuery) return [];
  if (!(query.length > 0 && !isCurrentQuery))
    return availableReviewers == null
      ? selectedReviewers.length > 0
        ? selectedReviewers
        : query.length === 0
          ? []
          : undefined
      : uniqByModule.default(
          [...selectedReviewers, ...availableReviewers],
          ({ login }) => login.toLowerCase(),
        );
}
function toggleSelectedReviewer(selectedReviewers, reviewer) {
  let existingReviewer = selectedReviewers.find(
    ({ login }) => login.toLowerCase() === reviewer.login.toLowerCase(),
  );
  return existingReviewer == null
    ? [...selectedReviewers, reviewer]
    : selectedReviewers.filter((item) => item !== existingReviewer);
}
var uniqByModule,
  initReviewerSearchUniqByModule = once(() => {
    uniqByModule = toEsModule(loadUniqByModule(), 1);
  });
function RequestPullRequestReviewersButton(props) {
  let { hostId, item, pendingReviewerLogins, repo } = props,
    scope = useScope(appScope),
    intl = useIntl(),
    [open, setOpen] = requestPullRequestReviewersReactRuntime.useState(false),
    [query, setQuery] = requestPullRequestReviewersReactRuntime.useState(""),
    emptySelectedReviewers = [];
  let [selectedReviewers, setSelectedReviewers] =
      requestPullRequestReviewersReactRuntime.useState(emptySelectedReviewers),
    trimmedQuery = query.trim();
  let currentQuery = trimmedQuery,
    debouncedQuery = useDebouncedValue(currentQuery, 250),
    searchParams = {
      cwd: item.cwd,
      hostId,
      query: debouncedQuery,
      repo,
    };
  let { data, isError, refetch } = useScopedValue(
      githubUserSearchQuery,
      searchParams,
    ),
    updateMutationParams = {
      cwd: item.cwd,
      headBranch: item.headBranch,
      hostId,
      operationSource: "pull_request_board",
    };
  let updatePullRequestMutation =
      usePullRequestUpdateMutation(updateMutationParams),
    reviewerOptions = getReviewerSearchMenuOptions({
      availableReviewers:
        data == null
          ? undefined
          : filterAlreadyPendingReviewers({
              pendingReviewerLogins,
              searchResults: data,
            }),
      isCurrentQuery: debouncedQuery === currentQuery,
      query: currentQuery,
      searchHasError: isError,
      selectedReviewers: selectedReviewers,
    })?.map(toReviewerSearchOption);
  let menuOptions = reviewerOptions,
    selectedOptionIdsSet = new Set(selectedReviewers.map(getReviewerOptionId));
  let selectedOptionIds = selectedOptionIdsSet,
    resetReviewerPicker = () => {
      setQuery("");
      setSelectedReviewers([]);
      updatePullRequestMutation.reset();
    };
  let clearReviewerPicker = resetReviewerPicker,
    requestSelectedReviewers = () => {
      selectedReviewers.length !== 0 &&
        (updatePullRequestMutation.reset(),
        trackPullRequestAction(scope, {
          action: "request_approvals",
          item,
          surface: "thread_side_panel",
        }),
        updatePullRequestMutation.mutate(
          {
            action: "request-reviewers",
            cwd: item.cwd,
            number: item.number,
            repo,
            reviewers: selectedReviewers.map(getReviewerLogin),
          },
          {
            onSuccess: (result) => {
              result.status === "success" &&
                (scope.get(toastSignal).success(
                  intl.formatMessage(
                    {
                      id: "pullRequestSidePanel.approvals.request.successReviewers",
                      defaultMessage:
                        "{count, plural, one {Requested approval from one reviewer} other {Requested approval from # reviewers}}",
                      description:
                        "Toast shown after requesting a pull request approval",
                    },
                    {
                      count: selectedReviewers.length,
                    },
                  ),
                ),
                setOpen(false),
                clearReviewerPicker());
            },
          },
        ));
    };
  let handleRequestReviewers = requestSelectedReviewers,
    handleOpenChange = (nextOpen) => {
      setOpen(nextOpen);
      nextOpen || clearReviewerPicker();
    };
  let triggerLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.open",
    defaultMessage: "Request reviewers",
    description:
      "Accessible label for opening the pull request reviewer picker",
  });
  let triggerIcon = <PlusIcon aria-hidden={true} className="icon-2xs" />;
  let triggerButton = (
    <PopoverTrigger asChild={true}>
      {requestPullRequestReviewersJsxRuntime.jsx(Button, {
        "aria-label": triggerLabel,
        color: "secondary",
        size: "iconMd",
        children: triggerIcon,
      })}
    </PopoverTrigger>
  );
  let dialogTitle = requestPullRequestReviewersJsxRuntime.jsx(_r, {
    className: "sr-only",
    children: (
      <FormattedMessage
        id="pullRequestSidePanel.approvals.dialog.title"
        defaultMessage="Request approvals"
        description="Title for the dialog used to request pull request approvals"
      />
    ),
  });
  let searchAriaLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.ariaLabel",
    defaultMessage: "Search GitHub users",
    description: "Accessible label for searching pull request reviewers",
  });
  let requestPending = updatePullRequestMutation.isPending,
    emptyMessage =
      currentQuery.length === 0 ? (
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.prompt"
          defaultMessage="Search by name or GitHub username"
          description="Prompt shown before searching for a pull request reviewer"
        />
      ) : isError && debouncedQuery === currentQuery ? (
        <span className="flex items-center justify-between gap-3 text-token-error-foreground">
          <FormattedMessage
            id="pullRequestSidePanel.approvals.search.error"
            defaultMessage="Couldn’t search GitHub users"
            description="Error shown when pull request reviewer search fails"
          />
          {requestPullRequestReviewersJsxRuntime.jsx(Button, {
            color: "outline",
            size: "default",
            type: "button",
            onClick: () => {
              refetch();
            },
            children: (
              <FormattedMessage
                id="pullRequestSidePanel.approvals.search.retry"
                defaultMessage="Retry"
                description="Retry button for pull request reviewer search"
              />
            ),
          })}
        </span>
      ) : (
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.empty"
          defaultMessage="No users found"
          description="Empty state for pull request reviewer search"
        />
      );
  let loadingLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.loading",
    defaultMessage: "Searching…",
    description: "Loading message while searching pull request reviewers",
  });
  let placeholder = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.placeholder",
    defaultMessage: "Request review from…",
    description: "Placeholder for searching pull request reviewers",
  });
  let leadingSearchIcon = (
    <SearchIcon
      aria-hidden={true}
      className="icon-sm shrink-0 text-token-text-tertiary"
    />
  );
  let closePicker = () => {
    setOpen(false);
    clearReviewerPicker();
  };
  let handleQueryChange, handleOptionSelect;
  handleQueryChange = (nextQuery) => {
    setQuery(nextQuery);
  };
  handleOptionSelect = (reviewer) => {
    setSelectedReviewers((currentReviewers) =>
      toggleSelectedReviewer(currentReviewers, reviewer),
    );
  };
  let reviewerSearchMenu = (
    <Pu
      ariaLabel={searchAriaLabel}
      disabled={requestPending}
      emptyMessage={emptyMessage}
      loadingLabel={loadingLabel}
      options={menuOptions}
      loadingSize="compact"
      placeholder={placeholder}
      query={query}
      selectedOptionIds={selectedOptionIds}
      variant="menu"
      leadingContent={leadingSearchIcon}
      onEscape={closePicker}
      onQueryChange={handleQueryChange}
      onSelectOption={handleOptionSelect}
    />
  );
  let requestErrorMessage =
    updatePullRequestMutation.data?.status === "error" ||
    updatePullRequestMutation.isError ? (
      <div className="px-2 py-1.5 text-sm" aria-live="polite">
        <span className="text-token-error-foreground">
          {updatePullRequestMutation.data?.status === "error"
            ? updatePullRequestMutation.data.error
            : updatePullRequestMutation.error?.message}
        </span>
      </div>
    ) : null;
  let requestFooter =
    selectedReviewers.length > 0 || updatePullRequestMutation.isPending ? (
      <div className="grid pt-1">
        {updatePullRequestMutation.isPending ? (
          <span
            aria-label={intl.formatMessage({
              id: "pullRequestSidePanel.approvals.request.pending",
              defaultMessage: "Requesting approval…",
              description:
                "Loading message while requesting pull request approval",
            })}
            className="flex items-center justify-center py-2"
            role="status"
          >
            {requestPullRequestReviewersJsxRuntime.jsx(SpinnerIcon, {
              className: "icon-2xs",
            })}
          </span>
        ) : (
          requestPullRequestReviewersJsxRuntime.jsx(Button, {
            color: "secondary",
            size: "toolbar",
            onClick: handleRequestReviewers,
            children: (
              <span className="mx-auto">
                <FormattedMessage
                  id="pullRequestSidePanel.approvals.request"
                  defaultMessage="Request"
                  description="Button label for requesting pull request approval"
                />
              </span>
            ),
          })
        )}
      </div>
    ) : null;
  let popoverContent = (
    <PopoverContent align="end">
      {dialogTitle}
      {reviewerSearchMenu}
      {requestErrorMessage}
      {requestFooter}
    </PopoverContent>
  );
  return (
    <PopoverRoot open={open} onOpenChange={handleOpenChange}>
      {triggerButton}
      {popoverContent}
    </PopoverRoot>
  );
}
function getReviewerLogin(reviewer) {
  let { login } = reviewer;
  return login;
}
function getReviewerOptionId(reviewer) {
  let { login } = reviewer;
  return login.toLowerCase();
}
function toReviewerSearchOption(reviewer) {
  return {
    ...reviewer,
    id: reviewer.login.toLowerCase(),
    imageUrl: reviewer.avatarUrl,
    label: reviewer.login,
  };
}
var requestPullRequestReviewersModule,
  requestPullRequestReviewersReactRuntime,
  requestPullRequestReviewersJsxRuntime,
  initRequestPullRequestReviewersButtonChunk = once(() => {
    requestPullRequestReviewersModule = getChunkModuleExports();
    initScopeRuntime();
    requestPullRequestReviewersReactRuntime = toEsModule(loadReactModule(), 1);
    initIntlRuntime();
    initButtonComponentPrimitives();
    initPopoverPrimitives();
    Nu();
    initSpinnerComponent();
    initToastRuntime();
    _t();
    initSearchIcon();
    initPullRequestUpdateMutationChunk();
    initPullRequestAnalyticsChunk();
    initAppScope();
    initTaskWorkspaceQueryRuntime();
    initGithubUserSearchQuery();
    initReviewerSearchUniqByModule();
    requestPullRequestReviewersJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelOverviewSection(props) {
  let {
      checks,
      checksAreLoading,
      checksHaveError,
      comments,
      commentsAreLoading,
      commentsHaveError,
      item,
      hostId,
      mergeBlocker,
      repo,
    } = props,
    branchIcon = pullRequestOverviewSectionJsxRuntime.jsx(GitBranchIcon, {
      className: "icon-sm shrink-0 text-token-text-tertiary",
    });
  let branchArrow = (
    <span className="px-2 text-token-text-tertiary">{"→"}</span>
  );
  let branchLabel = (
    <span className="min-w-0 truncate">
      {item.headBranch}
      {branchArrow}
      {item.baseBranch}
    </span>
  );
  let diffStats = (
    <Ml
      className="ms-auto shrink-0 text-sm"
      linesAdded={item.additions}
      linesRemoved={item.deletions}
    />
  );
  let branchRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={branchIcon}
      label={
        <>
          {branchLabel}
          {diffStats}
        </>
      }
      labelClassName="flex min-w-0 flex-1 items-center text-token-text-tertiary"
    />
  );
  let checksRow = (
    <PullRequestOverviewChecksRow
      data={checks}
      hasError={checksHaveError}
      loading={checksAreLoading}
    />
  );
  let mergeStatusState =
      mergeBlocker == null
        ? "ready"
        : mergeBlocker === "conflicts"
          ? "failing"
          : "in_progress",
    mergeStatusIcon = (
      <Ws className="icon-sm shrink-0" state={mergeStatusState} />
    );
  let mergeStatusLabel = pullRequestOverviewSectionJsxRuntime.jsx(
    PullRequestOverviewMergeStatusLabel,
    {
      mergeBlocker,
    },
  );
  let mergeStatusRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={mergeStatusIcon}
      label={mergeStatusLabel}
    />
  );
  let reviewers = comments?.reviewers ?? null,
    reviewersRow = pullRequestOverviewSectionJsxRuntime.jsx(
      PullRequestOverviewReviewersRow,
      {
        hostId,
        item,
        repo,
        reviewers,
      },
    );
  let commentsRow = (
    <PullRequestOverviewCommentsRow
      data={comments}
      hasError={commentsHaveError}
      loading={commentsAreLoading}
    />
  );
  return (
    <section className="flex flex-col border-b border-token-border pb-3">
      {branchRow}
      {checksRow}
      {mergeStatusRow}
      {reviewersRow}
      {commentsRow}
    </section>
  );
}
function PullRequestOverviewChecksRow(props) {
  let { data, hasError, loading } = props;
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(zc, {
          className: "icon-sm shrink-0 text-token-charts-red",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.error"
            defaultMessage="Couldn’t load checks"
            description="Checks error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(SpinnerIcon, {
          className: "icon-sm shrink-0",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.loading"
            defaultMessage="Loading checks"
            description="Loading checks label in the pull request overview"
          />
        }
      />
    );
  }
  let checksStatusIcon = Kl(data);
  let checksStatusLabel = Hl(data.ciStatus);
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={checksStatusIcon}
      label={checksStatusLabel}
    />
  );
}
function PullRequestOverviewCommentsRow(props) {
  let { data, hasError, loading } = props;
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(zc, {
          className: "icon-sm shrink-0 text-token-charts-red",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.error"
            defaultMessage="Couldn’t load comments"
            description="Comments error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(SpinnerIcon, {
          className: "icon-sm shrink-0",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.loading"
            defaultMessage="Loading comments"
            description="Loading comments label in the pull request overview"
          />
        }
      />
    );
  }
  let commentsIcon = (
    <Tu className="icon-sm shrink-0 text-token-text-tertiary" />
  );
  let commentActivityItems = getPullRequestCommentActivityItems(
    data.activityItems,
  );
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={commentsIcon}
      label={
        <FormattedMessage
          id="pullRequestSidePanel.overview.comments"
          defaultMessage={
            "{count, plural, =0 {No comments} one {# comment} other {# comments}}"
          }
          description="Pull request comment count in the side panel overview"
          values={{
            count: commentActivityItems.length,
          }}
        />
      }
    />
  );
}
function PullRequestOverviewMergeStatusLabel(props) {
  let { mergeBlocker } = props;
  switch (mergeBlocker) {
    case "conflicts": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts"
          defaultMessage="Merge conflicts need to be resolved"
          description="Merge conflict status in the pull request overview"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.unknown"
          defaultMessage="Checking for merge conflicts"
          description="Unknown merge conflict status in the pull request overview"
        />
      );
    }
    case null: {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.none"
          defaultMessage="No merge conflicts"
          description="Clean merge status in the pull request overview"
        />
      );
    }
  }
}
function PullRequestOverviewReviewersRow(props) {
  let { hostId, item, repo, reviewers } = props,
    rowComponent,
    labelClassName,
    labelPrefix,
    reviewerBadges,
    density,
    icon;
  {
    let reviewerBadgeModels =
        reviewers == null ? [] : getPullRequestReviewerBadgeModels(reviewers),
      canRequestReviewers = item.isAuthor && item.state !== "merged";
    rowComponent = SummaryPanelRow;
    density = "comfortable";
    icon = (
      <PullRequestReviewerPlaceholderIcon className="icon-sm shrink-0 text-token-text-tertiary" />
    );
    labelClassName = "flex min-w-0 flex-1 items-center gap-2";
    labelPrefix = (
      <span className="shrink-0">
        <FormattedMessage
          id="pullRequestSidePanel.overview.reviewers"
          defaultMessage="Reviewers"
          description="Reviewer label in the pull request overview"
        />
      </span>
    );
    reviewerBadges =
      reviewers != null &&
      (reviewerBadgeModels.length > 0 || canRequestReviewers) ? (
        <span className="hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5">
          {reviewerBadgeModels.map(renderPullRequestOverviewReviewerBadge)}
          {canRequestReviewers ? (
            <span className="shrink-0">
              <RequestPullRequestReviewersButton
                hostId={hostId}
                item={item}
                pendingReviewerLogins={reviewers.requested}
                repo={repo}
              />
            </span>
          ) : null}
        </span>
      ) : null;
  }
  let label = (
    <span className={labelClassName}>
      {labelPrefix}
      {reviewerBadges}
    </span>
  );
  return pullRequestOverviewSectionJsxRuntime.jsx(rowComponent, {
    density,
    icon,
    label,
    labelClassName: "flex min-w-0 flex-1 items-center text-token-text-tertiary",
  });
}
function renderPullRequestOverviewReviewerBadge(reviewer) {
  return pullRequestOverviewSectionJsxRuntime.jsx(
    Tooltip,
    {
      tooltipContent: reviewer.label,
      children: (
        <span className="relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary">
          {reviewer.kind === "team" ? (
            <span
              aria-label={reviewer.label}
              className="flex size-full items-center justify-center text-token-text-secondary"
              role="img"
            >
              {pullRequestOverviewSectionJsxRuntime.jsx(ed, {
                "aria-hidden": true,
                className: "icon-xs",
              })}
            </span>
          ) : (
            <img
              alt={reviewer.label}
              className="size-full rounded-full object-cover"
              src={is(reviewer.label, 40) ?? undefined}
            />
          )}
          <span
            className={classNames(
              "absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary",
              reviewer.status === "approved" && "bg-token-charts-green",
              reviewer.status === "waiting" && "bg-token-charts-yellow",
              reviewer.status === "changes_requested" && "bg-token-charts-red",
            )}
          >
            <span className="sr-only">
              {reviewer.status === "approved" ? (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.approved"
                  defaultMessage="Approved"
                  description="Accessible status for an approved pull request reviewer"
                />
              ) : reviewer.status === "changes_requested" ? (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.changesRequested"
                  defaultMessage="Requested changes"
                  description="Accessible status for a pull request reviewer who requested changes"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.waiting"
                  defaultMessage="Waiting for review"
                  description="Accessible status for a pull request reviewer whose review is pending"
                />
              )}
            </span>
          </span>
        </span>
      ),
    },
    `${reviewer.kind}:${reviewer.label}`,
  );
}
var pullRequestOverviewSectionModule,
  pullRequestOverviewSectionJsxRuntime,
  initPullRequestSidePanelOverviewSectionChunk = once(() => {
    pullRequestOverviewSectionModule = getChunkModuleExports();
    initClassNameRuntime();
    initIntlRuntime();
    initSpinnerComponent();
    initTooltipPrimitives();
    Nl();
    initGitBranchIcon();
    Eu();
    initPullRequestReviewerPlaceholderIconChunk();
    $u();
    Kc();
    Bl();
    Js();
    ps();
    initSummaryPanelRowChunk();
    initRequestPullRequestReviewersButtonChunk();
    initPullRequestReviewerBadgeModelsChunk();
    pullRequestOverviewSectionJsxRuntime = getJsxRuntime();
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
    initPullRequestReviewCommentHelpers();
    bl();
    Yc();
    initPullRequestFailingChecksPromptChunk();
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
    initPullRequestSummaryRowsChunk();
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
