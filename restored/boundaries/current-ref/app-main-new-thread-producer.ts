// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Explicit barrel for the bj5 app-main/new-thread producer aliases that have
// been split into semantic runtime modules.
import { c as getStatsigClientRaw } from "@statsig/js-client";

type StatsigExperimentClient = {
  getExperiment: (
    experimentName: string,
    options?: unknown,
  ) => {
    get: <TValue>(field: string, fallback: TValue) => TValue;
  };
};

export {
  appHostServices,
  connectAppHostServices,
  createPersistentSignal,
  getCachedConversationTurns,
  initAppHostServicesRuntimeChunk,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  onboardingWizardAction,
} from "../../runtime/app-host-services-runtime";

export { THREAD_SIDE_PANEL_TAB } from "../../app-shell/thread-side-panel-tabs";

export {
  getGlobalStateValue,
  globalStateQueryRequestSignal,
  globalStateQuerySignal,
  initGlobalStateQueryRuntime,
  setGlobalStateValue,
} from "../../runtime/global-state-runtime";

export {
  conversationPermissionConfigSignal,
  Di as conversationTurnsByIdSignal,
  hr as conversationCwdByIdSignal,
  ii as conversationIdsByHostIdSignal,
  latestTurnByConversationIdSignal,
  latestTurnByConversationIdSignal as conversationTitleByIdSignal,
  registeredAppServerHostIdsSignal,
  workspaceRootOptionsQuery,
} from "../thread-context-inputs.facade";

export {
  isBrowserCommentAttachment,
  sendAppServerRequest,
} from "../use-host-config.facade";

export {
  featureGateSignal,
  initFeatureGateSignalRuntime,
  initStatsigFeatureGateRuntime,
  useStatsigGate,
  useStatsigLoading,
  useStatsigLayer,
} from "../../runtime/feature-gate-runtime";

export {
  createGitRootQueryOptions,
  createHostQueryOptions,
  getHostCacheKey,
  initConversationBranchOverrideRuntime,
  initGitRootQueryRuntime,
  setConversationBranchOverride,
  updateGitMetadataCache,
  useGitOperationQuery,
  useGlobalSettingValue,
} from "../../runtime/git-branch-switcher-runtime";

export { initConversationStateRuntime } from "../../runtime/conversation-state-runtime";

export {
  USER_CONFIG_QUERY_KEY,
  userConfigQueryOptions,
} from "../../config/config-queries";

export {
  configRequirementsByHostAuthSignal,
  initOsInfoRuntimeChunk,
  osInfoQuerySignal,
  readHostConfigForHost,
  useOsInfoQuery,
} from "../../features/windows-sandbox";

export {
  initInvalidateQueriesAndBroadcastChunk,
  invalidateQueriesAndBroadcast,
} from "../../utils/invalidate-queries-and-broadcast";

export {
  createThreadHandoffOperationId,
  initThreadHandoffOperationIdsChunk,
  initThreadHandoffOperationUpdateChunk,
  produceThreadHandoffOperationUpdate,
} from "../../app-shell/thread-handoff-operations";

export { codexRequest, initCodexRequestRuntime } from "../../runtime/request";

export {
  initGlobalSettingsRuntime,
  setGlobalSettingValue,
} from "../../runtime/project-hover-card-runtime";

export { currentRouteHostIdSignal } from "../../runtime/window-chrome-runtime";

export {
  getHostConfigKey,
  hostConfigByIdSignal,
  initHostConfigRuntime,
  initLocalHostConstantsRuntime,
  useHostConfigById,
} from "../../runtime/host-config-runtime";

export {
  initMotionSignalRuntime,
  initReducedMotionPreference,
  reducedMotionPreferenceSignal,
} from "../../utils/motion-signal-runtime";

export {
  formatShellCommand,
  initCommandMarkdownRuntime,
} from "../../runtime/conversation-markdown-runtime";

export {
  initLocalConversationRouteRuntime as initRouteScopeRuntimeChunk,
  localConversationRouteScope as RouteScope,
} from "../../conversations/local-conversation-route-runtime";

export { terminalSessionSnapshotStore } from "../../conversations/fork-conversation-panel-state-deps";

export { sortBy } from "../../utils/sort-by";

export {
  useResolvedThemeVariant,
  useThemeVariantPreference,
} from "../../utils/use-resolved-theme-variant";

export {
  initWindowZoomContext as initWindowZoomRuntimeChunk,
  useWindowZoom,
} from "../../utils/window-zoom-context";

export {
  collectTurnFileArtifacts,
  isFileReferencePath,
  isResourcePathInsideProjectlessOutput,
  mapTurnStatusToOutputStatus,
  normalizeArtifactPathKey,
  resolveWorkspacePathFromCwd,
} from "../../conversations/output-artifact-runtime";

export {
  getReviewCommentAttachmentKeyValue,
  initPullRequestReviewCommentRuntime,
} from "../../conversations/pull-request-review-comment-runtime";

export {
  pullRequestActionEvent,
  pullRequestKindActionEvent,
  pullRequestViewedFromSidePanelEvent,
} from "../../runtime/pull-request-actions-runtime";

export { openFileOutcomeEvent } from "../../runtime/publication-terms-runtime";

export { encodeBase64Bytes, initBase64RuntimeChunk } from "../../utils/base64";

export {
  ArtifactAnnotationStartSource,
  ArtifactAnnotationSubmitMode,
  ArtifactAnnotationSubmitSource,
  ArtifactKind,
  artifactAnnotationCanceledEvent,
  artifactAnnotationSavedEvent,
  artifactAnnotationStartedEvent,
  artifactAnnotationSubmittedEvent,
  initArtifactAnalyticsEventDescriptors,
  initProductLoggerRuntime,
  logProductEvent,
} from "../../runtime/artifact-analytics-runtime";

export { useLocation, useNavigate } from "../../vendor/react-router";

export { Tooltip, initTooltipRuntimeChunk } from "../../ui/tooltip-b";

export { Button, initButtonComponentPrimitives } from "../../ui/button";

export { initXIcon, XIcon } from "../../icons/x-icon";

export {
  appgenPublicationTermsDisclosureSignal,
  getAppgenAnnouncementAudienceForAccount,
  hasSeenAppgenPublicationTermsDisclosure,
  hasSeenAppgenPublicationTermsDisclosureSignal,
  initAppgenPublicationTermsDisclosureRuntime,
  markAppgenPublicationTermsDisclosureSeen,
} from "../../appgen/appgen-announcement-modal";

export {
  initDiffPathRuntimeChunk,
  NULL_DIFF_PATH,
} from "../../utils/parse-diff";

export {
  parseDirectivesD as buildSentryErrorEvent,
  parseDirectivesE as mergeDirectiveSentryData,
  parseDirectivesK as registerDirectiveSentryCapture,
} from "../../utils/parse-directives";

export { baseIteratee } from "../../utils/markdown-to-search-text";

export const getStatsigClient = getStatsigClientRaw;

export function getStatsigExperiment(
  client: StatsigExperimentClient,
  experimentName: string,
  options?: unknown,
): ReturnType<StatsigExperimentClient["getExperiment"]> {
  return client.getExperiment(experimentName, options);
}

export function initAppServerRequestRuntime(): void {}

export function initConfigQueriesRuntime(): void {}

export function initRendererSentryDirectiveDataRuntimeChunk(): void {}

export function initReactRouterRuntimeChunk(): void {}

export function initSystemThemeVariantRuntimeChunk(): void {}

export function initTerminalSessionSnapshotStoreChunk(): void {}
