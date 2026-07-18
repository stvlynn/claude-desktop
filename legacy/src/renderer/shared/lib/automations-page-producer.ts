// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Current-ref producer facade: re-exports this build's 105 public exports from their
// semantic restored modules. Alias->name mapping lives in restored/IMPORT_MAP.json.

export {
  appServerNotificationDebugEntriesSignal,
  clearNotificationDebugEntriesForHost,
  initAppServerNotificationDebugSignalsChunk,
  initProductEventDebugLogEntriesChunk,
  useProductEventDebugLogEntries,
} from "../../features/app-server/notification-debug-signals";
export {
  AppFallback,
  initAppFallbackChunk,
} from "../../features/app-shell/app-fallback";
export {
  AppHeaderUpdateButton,
  initAppHeaderUpdateButtonChunk,
} from "../../features/app-shell/app-header-update-button";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../../features/app-shell/codex-app";
export {
  BackgroundTerminalIcon,
  initBackgroundTerminalIconChunk,
  initBackgroundTerminalSidePanelTabChunk,
  openBackgroundTerminalSidePanelTab,
} from "../../features/app-shell/thread-background-processes/background-terminal-tab";
export {
  clearStoppedPendingProcessRows,
  getPendingBackgroundProcessRow,
  initPendingBackgroundProcessRowsChunk,
  isPendingProcessRowExpired,
  pendingBackgroundProcessRowsSignal,
  removePendingBackgroundProcessRow,
  setPendingBackgroundProcessRow,
} from "../../features/app-shell/thread-background-processes/pending-process-rows";
export {
  initProcessMetricHelpersChunk,
  matchProcessMetrics,
  selectRunningProcessRows,
} from "../../features/app-shell/thread-background-processes/process-metrics";
export {
  collectConversationProcessRows,
  isSameProcessRow,
  mergeProcessRows,
  restoreRegisteredProcessRows,
} from "../../features/app-shell/thread-background-processes/process-rows";
export {
  ThreadAppShellSourceRegistration,
  initThreadAppShellSourcesChunk,
  initThreadNullRefChunk,
  useNullAppShellRef,
} from "../../features/app-shell/thread-background-processes/thread-app-shell-sources";
export { useThreadHandoffOperationActions } from "../../features/app-shell/thread-handoff-operations/actions";
export {
  createQueuedThreadHandoffOperation,
  getThreadHandoffOperationForConversation,
} from "../../features/app-shell/thread-handoff-operations/operations";
export {
  initThreadHandoffOperationsChunk,
  useThreadHandoffOperationsState,
} from "../../features/app-shell/thread-handoff-operations/store";
export { windowsTabsOpenHandler } from "../../features/app-shell/windows-tabs-open-handler";
export { appgenPublicationTermsSidePanelHandler } from "../../features/appgen/publication-terms/side-panel-handler";
export { allThreadCommandExecutionsSignal } from "../../entities/automation/heartbeat-automation-eligibility/command-executions";
export {
  heartbeatAutomationEligibilitySignal,
  initHeartbeatAutomationEligibilityChunk,
} from "../../entities/automation/heartbeat-automation-eligibility/eligibility";
export { initComposerProjectListChunk } from "../../features/composer/project-selector/project-selector";
export { ProjectIcon } from "../../features/remote/local-remote-selection/project-icon";
export { ComposerProjectSelector } from "../../features/composer/project-selector/project-selector";
export {
  initRemoteHostedPipStateChunk,
  remoteHostedPipAnyStreamActiveSignal,
  remoteHostedPipVisibleSignal,
} from "../../features/sidebar/flat-project-sidebar-state/state";
export { initAvatarOverlayOpenStateChunk } from "../../features/features/avatar-overlay-open-state";
export { initKeyboardShortcutsDialogChunk } from "../../features/keyboard-shortcuts/index";
export {
  compareKeyboardShortcutCommands,
  initKeyboardShortcutAvailabilityChunk,
  initKeyboardShortcutCommandOrderingChunk,
  isKeyboardShortcutCommandFeatureEnabled,
} from "../../features/appshot/availability";
export { KeyboardShortcutsSearchInput } from "../../features/features/keyboard-shortcuts/search-input";
export {
  getKeyboardShortcutCommandCopy,
  initKeyboardShortcutCommandCopyChunk,
} from "../vendor/features-root/keyboard-shortcuts/titles";
export {
  FastModeHomeBannerIcon,
  fastModePersonalizedEstimateMessages,
  initFastModeHomeBannerIconChunk,
  initFastModePersonalizedEstimateChunk,
  useFastModePersonalizedEstimate,
} from "../../features/features/use-fast-mode-personalized-estimate";
export {
  initPullRequestMergeHelperGateChunk,
  initPullRequestMergeHelperStateChunk,
  skipPullRequestMergeHelperConfirmSignal,
  startPullRequestMergeHelper,
  useIsPullRequestMergeHelperEnabled,
  useIsPullRequestMergeHelperEnabledA,
} from "../../features/github/use-is-pull-request-merge-helper-enabled";
export { initHomeHeroHeadingChunk } from "../../features/home/hero-heading";
export {
  CodexMobileSetupQueriesIcon,
  initCodexMobileSetupQueriesIconChunk,
} from "../icons/codex-mobile-setup-queries-icon";
export {
  NotificationsBellIcon,
  initNotificationsBellIconChunk,
} from "../icons/notifications-bell-icon";
export { SunIcon, initSunIconChunk } from "../icons/sun-icon";
export {
  initChronicleFeatureGateChunk,
  initChronicleSetupDialogChunk,
  initChronicleSetupStateChunk,
  initCodexMemoryStateSnapshotChunk,
} from "../../features/onboarding/chronicle-setup-state/index";
export { useIsChronicleResearchPreviewEnabled } from "../../features/onboarding/chronicle-setup-state/feature-gate";
export { buildCodexMemoryStateSnapshot } from "../../features/onboarding/chronicle-setup-state/memory-state";
export { ChronicleSetupDialog } from "../../features/onboarding/chronicle-setup-state/setup-dialog";
export {
  CHRONICLE_TRY_CODEX_PROMPT,
  buildChronicleSetupState,
  isChronicleSetupCompletionState,
} from "../../features/onboarding/chronicle-setup-state/setup-state";
export {
  QueryClientScopeProvider,
  initQueryClientScopeProviderChunk,
} from "../runtime/query-client/query-client-provider";
export {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../runtime/window-focus-state";
export {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  initExternalAgentImportSettingsFeatureChunk,
} from "../../features/settings/import-settings-feature";
export {
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
  buildLocalEnvironmentCreateRoute,
  initLocalEnvironmentCreateRouteChunk,
  parseLocalEnvironmentCreateRoute,
} from "../../features/environments/local-environment-create-route";
export {
  initSettingsReturnRouteSignalChunk,
  settingsReturnRouteSignal,
} from "../../features/settings/settings-navigation/settings-return-route";
export {
  initToggleSidebarCommandChunk,
  useRegisterToggleSidebarCommand,
} from "../../features/settings/settings-navigation/sidebar-command";
export { avatarOverlayAnalytics } from "./avatar-overlay-analytics";
export {
  initStatsigRefreshDiagnosticsChunk,
  refreshStatsigValuesForDiagnostics,
} from "./statsig-refresh-diagnostics";
