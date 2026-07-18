// @ts-nocheck
// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Initialization wiring for the local conversation public chunk.
import { once } from "../../../shared/runtime/commonjs-interop";
import { initButtonComponentPrimitives } from "../../../shared/ui/button";
import { initUseStableCallback } from "../../../shared/lib/use-stable-callback";
import { initWindowZoomContext } from "../../../shared/lib/window-zoom-context";
import { initAppLoggerRuntime } from "../../../shared/runtime/app-logger";
import { initAppScopeSignalRuntime } from "../../../shared/runtime/app-scope-runtime";
import { initAppServerRequestRuntime } from "../../../shared/runtime/app-server-request";
import { initComposerScopeRuntime } from "../../../features/composer/composer-scope-runtime";
import { initConnectorAppsRuntime } from "../../../shared/runtime/connector-apps-runtime";
import { initConversationStateRuntime } from "../../../shared/runtime/conversation-state-runtime";
import {
  getChunkModuleExports,
  initAgentMentionMap,
  initMarkdownUtilityNoop,
  initThreadAuxiliaryRuntime,
  initThreadInternalStateRuntime,
} from "../../../shared/conversations/local-conversation-thread-parts/conversation-thread-runtime";
import { initStatsigFeatureGateRuntime } from "../../../shared/runtime/feature-gate-runtime";
import { initHostConfigRuntime } from "../../../shared/runtime/host-config-runtime";
import { initHostWorktreeContextRuntime } from "../../../features/worktree/host-worktree-context";
import { initLocalEnvironmentConfigRuntime } from "../../../shared/runtime/local-environment-config-runtime";
import {
  initConversationRouteSourceRuntime,
  initLocalConversationRouteRuntime,
  initToastSignalRuntime,
} from "../../../shared/conversations/local-conversation-route-runtime";
import { initModalRuntime } from "../../../shared/runtime/modal-runtime";
import { initMotionSignalRuntime } from "../../../shared/lib/motion-signal-runtime";
import { initPathHelpersRuntime } from "../../../shared/lib/path-helpers";
import { initPlatformContentRuntime } from "../../../shared/runtime/platform-content-runtime";
import { initSignalStateRuntime } from "../../../shared/runtime/signal-state-runtime";
import {
  initAppgenLibraryHotChunk,
  initAppgenLibraryRuntime,
  initConversationDisplayTitleSignalsRuntime,
  initConversationMarkdownCopyRuntime,
  initConversationReadStateRuntime,
  initConversationThreadHostRuntime,
  initLocalConversationArtifactsRuntime,
  initPlatformContentBridgeRuntime,
  initPlanSidePanelRuntime,
  initProfileComposerSupportRuntime,
  initProfileConversationSourceRuntime,
  initProfileHotkeyThreadRuntime,
  initProfileThreadRenderSupportRuntime,
  initProfileThreadSearchRuntime,
  initProjectSharedBaseRuntime,
  initProjectsActionRuntime,
  initSummaryPanelSourceHelpersRuntime,
  initThreadCommandRuntime,
  initThreadFindSupportRuntime,
  initThreadSidePanelSupportRuntime,
  initThreadSourceSupportRuntime,
  initThreadSummaryRouteRuntime,
  initWorkspaceRouteQueryRuntime,
  initWorkspaceRouteStateRuntime,
} from "../../../shared/conversations/local-conversation-thread-parts/local-conversation-thread-init-runtime";
import { initMarkdownCopyHelpers } from "../../../shared/conversations/conversation-copy";
import { initThreadSwitchTimingTrackerChunk } from "../../automation/heartbeat-automation-eligibility/index";
import { initLauncherHotkeyStateChunk } from "../../../features/features/hotkey-window-state";
import { initScrollToBottomButtonChunk } from "../../thread/scroll-to-bottom-button";
import { initAutomationHistoryItemsChunk } from "../../../shared/lib/use-automation-history-items";
import { initThreadScrollControllerContextChunk } from "../../../features/threads/thread-scroll-layout/scroll-controller-context";
import { initThreadOverflowMenuChunk } from "../../../features/threads/thread-overflow-menu";
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
import { initMarkConversationReadEffect } from "../../../shared/conversations/local-conversation-thread-parts/local-conversation-read-state";
import { initPinnedSummaryPanelState } from "./pinned-summary-panel-layout";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  initThreadFindNavigationRailNoopChunk,
} from "./review-search-highlights";
import { initThreadScrollStateSignal } from "../../../shared/conversations/local-conversation-thread-parts/local-conversation-thread-scroll-state-signal";
import { initVisibleTurnGeneratedImagesCollector } from "./visible-turn-generated-images";
import { initWorktreeRestoreBannerChunk } from "./local-conversation-worktree-restore-banner";
import { initLocalConversationGitSummary } from "./local-conversation-summary-panel";
import { initLocalConversationThreadFrameChunk } from "./local-conversation-thread-frame";
import { initIntlRuntime } from "../../../shared/runtime/react-intl";

let localEnvironmentRecentActionsModule: unknown;
let localConversationArtifactsModule: unknown;
let localConversationThreadModule: unknown;

export const initLocalEnvironmentRecentActions = once(() => {
  localEnvironmentRecentActionsModule = getChunkModuleExports();
  initPathHelpersRuntime();
  initHostWorktreeContextRuntime();
});

export const initLocalConversationArtifacts = once(() => {
  localConversationArtifactsModule = getChunkModuleExports();
  initMotionSignalRuntime();
  initAppScopeSignalRuntime();
  initProjectsActionRuntime();
  initLocalConversationArtifactsRuntime();
  initPinnedSummaryPanelState();
});

export const initThreadScrollState = once(() => {
  initAgentMentionMap();
});

export const initLocalConversationThreadChunk = once(() => {
  localConversationThreadModule = getChunkModuleExports();
  initMotionSignalRuntime();
  initSignalStateRuntime();
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initLocalEnvironmentConfigRuntime();
  initProfileComposerSupportRuntime();
  initThreadInternalStateRuntime();
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initThreadAuxiliaryRuntime();
  initConversationThreadHostRuntime();
  initWindowZoomContext();
  initAutomationHistoryItemsChunk();
  initConversationReadStateRuntime();
  initProfileThreadSearchRuntime();
  initButtonComponentPrimitives();
  initConversationMarkdownCopyRuntime();
  initMarkdownCopyHelpers();
  initModalRuntime();
  initScrollToBottomButtonChunk();
  initToastSignalRuntime();
  initPlatformContentBridgeRuntime();
  initPlatformContentRuntime();
  initAppgenLibraryRuntime();
  initAppgenLibraryHotChunk();
  initPlanSidePanelRuntime();
  initWorkspaceRouteStateRuntime();
  initWorkspaceRouteQueryRuntime();
  initReviewSearchHighlighter();
  initThreadCommandRuntime();
  initLauncherHotkeyStateChunk();
  initProfileHotkeyThreadRuntime();
  initThreadSwitchTimingTrackerChunk();
  initConnectorAppsRuntime();
  initAppScopeSignalRuntime();
  initComposerScopeRuntime();
  initLocalConversationRouteRuntime();
  initHostConfigRuntime();
  initStatsigFeatureGateRuntime();
  initConversationRouteSourceRuntime();
  initLocalConversationThreadFrameChunk();
  initThreadSidePanelSupportRuntime();
  initThreadScrollControllerContextChunk();
  initThreadFindNavigationRail();
  initThreadFindNavigationRailNoopChunk();
  initSummaryPanelSourceHelpersRuntime();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  initAppLoggerRuntime();
  initUseStableCallback();
  initProfileThreadRenderSupportRuntime();
  initWorktreeRestoreBannerChunk();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  initThreadSummaryRouteRuntime();
  initThreadSourceSupportRuntime();
  initProfileConversationSourceRuntime();
  initMarkdownUtilityNoop();
  initThreadFindSupportRuntime();
  initLocalConversationSearchAdapterChunk();
  initConversationSearchUnitExtractor();
  initLocalConversationTurnSelectors();
  initThreadScrollStateSignal();
  initVisibleTurnGeneratedImagesCollector();
  initBackgroundAgentThreadTab();
  initConversationDisplayTitleSignalsRuntime();
  initBackgroundAgentThreadTabs();
  initProjectSharedBaseRuntime();
  initThreadOverflowMenuChunk();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  LocalConversationMainThread.initChunk();
});
