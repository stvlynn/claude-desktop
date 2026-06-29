// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Explicit barrel for the bj5 app-main/new-thread producer aliases that have
// been split into semantic runtime modules.
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
  featureGateSignal,
  initFeatureGateSignalRuntime,
  initStatsigFeatureGateRuntime,
  useStatsigGate,
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
