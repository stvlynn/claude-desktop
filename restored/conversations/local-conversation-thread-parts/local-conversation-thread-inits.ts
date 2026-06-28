// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Initialization wiring for the local conversation public chunk.
import { once } from "../../runtime/commonjs-interop";
import { initButtonComponentPrimitives } from "../../ui/button";
import { initUseStableCallback } from "../../utils/use-stable-callback";
import { initWindowZoomContext } from "../../utils/window-zoom-context";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  Al as initComposerScope,
  Ga as initElectronPlatformContent,
  Gj as initStatsigFeatureGateHooks,
  I_ as initRouteScope,
  Io as initConnectorAppsListQuery,
  LN as initReducedMotionPreference,
  Mi as initModalRegistrySignal,
  Mu as initHostCodexHomeQuery,
  O_ as initConversationRouteSourceHelpers,
  Op as initConversationStateSelectors,
  Rv as initMarkdownUtilityNoop,
  SP as initMotionRuntime,
  SV as initQueryRuntime,
  Ux as initAgentMentionMap,
  VE as initHostConfigHelpers,
  Zu as on,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  cM as initToastRuntime,
  lA as cr,
  mv as xr,
  pP as initLoggerRuntime,
  qV as getChunkModuleExports,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  A as Di,
  Mr as Qi,
  Td as initProjectsActionRuntime,
  Wl as fa,
  b as Sa,
  cn as Ea,
  mo as Ha,
  sd as Xa,
  ts as Qa,
  vd as ro,
  yc as ho,
  yn as _o,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import { initMarkdownCopyHelpers } from "../conversation-copy";
import {
  $n as vs,
  In as Ns,
  St as tc,
  Tu as rc,
  ar as mc,
  cc as gc,
  jt as Ac,
  ls as Pc,
  qa as Vc,
  sa as Wc,
} from "../../boundaries/current-ref/profile-page-producer";
import {
  it as initAppgenLibraryHotChunk,
  n as initAppgenLibraryRuntime,
} from "../../boundaries/current-ref/appgen-library-hot-producer";
import { initThreadSwitchTimingTrackerChunk } from "../../automation/heartbeat-automation-eligibility";
import { initLauncherHotkeyStateChunk } from "../../features/hotkey-window-state";
import { initScrollToBottomButtonChunk } from "../../utils/scroll-to-bottom-buton";
import { initAutomationHistoryItemsChunk } from "../../utils/use-automation-history-items";
import { initThreadScrollControllerContextChunk } from "../../utils/thread-scroll-controller-context";
import { initThreadOverflowMenuChunk } from "../../threads/thread-overflow-menu";
import {
  initBackgroundAgentThreadTab,
  initBackgroundAgentThreadTabs,
} from "./local-conversation-background-agent-thread-tab";
import { initConversationMarkdownRenderer } from "./local-conversation-markdown-renderer";
import { initLocalConversationSearchAdapterChunk } from "./local-conversation-search";
import { initConversationSearchUnitExtractor } from "./local-conversation-search-source";
import { initLocalConversationSummaryPanelSignals } from "./local-conversation-summary-panel-model";
import { initLocalConversationThreadRoute } from "./local-conversation-thread-route";
import { LocalConversationMainThread } from "./local-conversation-thread-entry-components";
import { initLocalConversationTurnSelectors } from "./local-conversation-turn-selectors";
import { initMarkConversationReadEffect } from "./local-conversation-read-state";
import { initPinnedSummaryPanelState } from "./pinned-summary-panel-layout";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  initThreadFindNavigationRailNoopChunk,
} from "./review-search-highlights";
import { initThreadScrollStateSignal } from "./local-conversation-thread-scroll-state-signal";
import { initVisibleTurnGeneratedImagesCollector } from "./visible-turn-generated-images";
import { initWorktreeRestoreBannerChunk } from "./local-conversation-worktree-restore-banner";
import { initLocalConversationGitSummary } from "./local-conversation-summary-panel";
import { initLocalConversationThreadFrameChunk } from "./local-conversation-thread-frame";
import { initIntlRuntime } from "../../vendor/react-intl";

let localEnvironmentRecentActionsModule: unknown;
let localConversationArtifactsModule: unknown;
let localConversationThreadModule: unknown;

export const initLocalEnvironmentRecentActions = once(() => {
  localEnvironmentRecentActionsModule = getChunkModuleExports();
  initPathHelpers();
  initHostCodexHomeQuery();
});

export const initLocalConversationArtifacts = once(() => {
  localConversationArtifactsModule = getChunkModuleExports();
  initMotionRuntime();
  initScopeRuntime();
  initProjectsActionRuntime();
  Xa();
  initReducedMotionPreference();
  initPinnedSummaryPanelState();
});

export const initThreadScrollState = once(() => {
  initAgentMentionMap();
});

export const initLocalConversationThreadChunk = once(() => {
  localConversationThreadModule = getChunkModuleExports();
  initMotionRuntime();
  initQueryRuntime();
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
  initAutomationHistoryItemsChunk();
  ro();
  vs();
  initButtonComponentPrimitives();
  rc();
  initMarkdownCopyHelpers();
  initModalRegistrySignal();
  initScrollToBottomButtonChunk();
  initToastRuntime();
  Wc();
  initElectronPlatformContent();
  initAppgenLibraryRuntime();
  initAppgenLibraryHotChunk();
  tc();
  Ea();
  Qa();
  initReviewSearchHighlighter();
  Di();
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
  initThreadScrollControllerContextChunk();
  initThreadFindNavigationRail();
  initThreadFindNavigationRailNoopChunk();
  Pc();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  initLoggerRuntime();
  initUseStableCallback();
  Ns();
  initWorktreeRestoreBannerChunk();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  Qi();
  _o();
  mc();
  initMarkdownUtilityNoop();
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
  initThreadOverflowMenuChunk();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  LocalConversationMainThread.initChunk();
});
