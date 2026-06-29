// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
export {
  AppFallback,
  initAppFallbackChunk,
} from "../../app-shell/app-fallback";
export { BulletSeparator } from "../../utils/bullet-separator";
export {
  initAutomationHistoryItemsChunk,
  initAutomationHistoryItemsChunk as initAutomationsPageProducer,
  useAutomationItems,
} from "../../utils/use-automation-history-items";
export {
  initProjectSiteRoutesChunk,
  getProjectSiteAnalyticsRoute,
  getProjectSiteSettingsRoute,
  PROJECT_SITES_LIBRARY_ROUTE,
} from "../../appgen/project-site-routes";
export { initSitesIconChunk, SitesIcon } from "../../sites/sites-icon";
export { initSunIconChunk, SunIcon } from "../../icons/sun-icon";
export {
  initNotificationsBellIconChunk,
  NotificationsBellIcon,
} from "../../icons/notifications-bell-icon";
export {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../../runtime/window-focus-state";
export {
  appgenPublicationTermsSidePanelHandler,
  initPublicationTermsSidePanelHandlerChunk,
} from "../../appgen/publication-terms/side-panel-handler";
export {
  AppHeaderUpdateButton,
  initAppHeaderUpdateButtonChunk,
} from "../../app-shell/app-header-update-button";
export { windowsTabsOpenHandler } from "../../app-shell/windows-tabs-open-handler";
export {
  AutomationTooltipSurface,
  ComposerDismissableLayer,
  initAutomationSurface,
} from "../../automation/automation-surface";
export {
  initRightPanelComposerOverlayChunk,
  RightPanelComposerOverlay,
} from "../../composer/right-panel-composer-overlay";
export { getShuffledWelcomeOnboardingRoles } from "../../onboarding/onboarding-roles";
export {
  initPrimaryRuntimeFeatureFlagsChunk,
  initPrimaryRuntimeInstallActionChunk,
  initPrimaryRuntimeInstallEventFormattersChunk,
  formatPrimaryRuntimeDependenciesResetEvent,
  formatPrimaryRuntimeDiagnosticsEvent,
  formatPrimaryRuntimeDiagnosticsFailedEvent,
  PRIMARY_RUNTIME_SETTINGS_FEATURE_ID,
  isPrimaryRuntimeInstallAbortError,
} from "../../runtime/primary-runtime-install-action";
export {
  buildLocalEnvironmentCreateRoute,
  initLocalEnvironmentCreateRouteChunk,
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
  parseLocalEnvironmentCreateRoute,
} from "../../settings/local-environment-create-route";
export {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
  SettingsContentNavigationTargetProvider,
} from "../../ui/settings-content-layout";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../../vendor/automations-page-runtime";
export {
  LocalConversationDiffSummaryView,
  initLocalConversationDiffSummaryEffectsChunk,
} from "../../conversations/local-conversation-page-parts/local-conversation-diff-summary-effects";
export {
  initQueryClientScopeProviderChunk,
  QueryClientScopeProvider,
} from "../../runtime/query-client/query-client-provider";
export {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
  launcherHotkeyStateQueryKey,
} from "../../features/hotkey-window-state";
export {
  compareKeyboardShortcutCommands,
  getKeyboardShortcutCommandCopy,
  initKeyboardShortcutAvailabilityChunk,
  initKeyboardShortcutCommandCopyChunk,
  initKeyboardShortcutCommandOrderingChunk,
  initKeyboardShortcutKeystrokeSearchIconChunk,
  initKeyboardShortcutsSearchInputChunk,
  isKeyboardShortcutCommandFeatureEnabled,
  KeyboardShortcutKeystrokeSearchIcon,
  KeyboardShortcutsSearchInput,
} from "../../features/keyboard-shortcuts";
export {
  GiftCreditsIcon,
  GIFT_CREDITS_FEATURE_GATE,
  initGiftCreditsIconChunk,
  initGiftCreditsLinkChunk,
  openGiftCreditsInBrowser,
} from "../../features/gift-credits-runtime";
export {
  giftCreditsProfileCoachmarkPendingSignal,
  hasSeenGiftCreditsHomeBannerSignal,
  initGiftCreditsSignalsChunk,
} from "../../features/gift-credits-signals";
export {
  appServerNotificationDebugEntriesSignal,
  clearNotificationDebugEntriesForHost,
  initAppServerNotificationDebugSignalsChunk,
  initProductEventDebugLogEntriesChunk,
  useProductEventDebugLogEntries,
} from "../../app-server/notification-debug-signals";
export {
  buildCodexMemoryStateSnapshot,
  buildChronicleSetupState,
  CHRONICLE_TRY_CODEX_PROMPT,
  ChronicleSetupDialog,
  initChronicleFeatureGateChunk,
  initChronicleSetupDialogChunk,
  initChronicleSetupStateChunk,
  initCodexMemoryStateSnapshotChunk,
  isChronicleSetupCompletionState,
  useIsChronicleResearchPreviewEnabled,
} from "../../onboarding/chronicle-setup-state";
export {
  getWelcomeOnboardingWorkMode,
  initWelcomeOnboardingRolesChunk,
  welcomeOnboardingRoleIds,
  welcomeOnboardingRoleMessages,
  welcomeOnboardingSelectedRolesAtom,
} from "../../onboarding/onboarding-roles";
export {
  getWorkspaceOnboardingPlaygroundName,
  initWorkspaceOnboardingControllerChunk,
  useTeenOnboardingEligibility,
  useWorkspaceOnboardingAutoLaunch,
} from "../../onboarding/workspace-onboarding-controller";
export {
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlEnabledChunk,
  initLocalRemoteControlErrorHandlingChunk,
  initSetRemoteControlEnabledForHostChunk,
  setLocalRemoteControlEnabled,
  setRemoteControlEnabledForHost,
} from "../../remote/local-remote-control-enabled-sync";
export {
  initToggleSidebarCommandChunk,
  useRegisterToggleSidebarCommand,
} from "../../settings/settings-navigation";
export {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  initExternalAgentImportSettingsFeatureChunk,
} from "../../settings/import-settings-feature";
export {
  initSettingsReturnRouteSignalChunk,
  settingsReturnRouteSignal,
} from "../../settings/settings-navigation/settings-return-route";
export {
  initStatsigRefreshDiagnosticsChunk,
  refreshStatsigValuesForDiagnostics,
} from "../../utils/statsig-refresh-diagnostics";
export { STATSIG_CLIENT_KEY } from "../../utils/statsig-client-key";
export {
  initThreadPageHeaderChunk,
  ThreadPageHeader,
} from "../../threads/thread-page-header";
export {
  initThreadPanelCommandHooksChunk,
  useRegisterToggleDiffPanelCommand,
} from "../../threads/thread-panel-command-hooks";
export {
  initThreadFileSearchCommandChunk,
  useRegisterThreadFileSearchCommand,
} from "../../threads/thread-file-search-command";
export {
  initPendingWorktreeConversationRuntimeChunk,
  restorePendingWorktreeBrowserTransferSources,
  startPendingWorktreeConversation,
} from "../../threads/pending-worktree-conversation";
export {
  initProfileDropdownChunk,
  ProfileDropdown,
} from "../../app-shell/profile-dropdown";
export {
  initWorkspaceMessagesHeadlineChunk,
  useWorkspaceMessagesHeadline,
} from "../../app-shell/workspace-messages";
export {
  initRateLimitSummaryChunk,
  RateLimitSummary,
} from "../../ui/rate-limit-summary";
export { initNuxGateChunk, NuxGate } from "../../app-shell/nux-gate";
export { AppPreloader, initAppPreloaderChunk } from "../../ui/app-preloader";
export {
  CodexMobileSetupQueriesIcon,
  initCodexMobileSetupQueriesIconChunk,
} from "../../icons/codex-mobile-setup-queries-icon";
export {
  HotkeyWindowDetailLayout,
  initHotkeyWindowDetailLayoutChunk,
} from "../../utils/hotkey-window-detail-layout";
export { useCommandHotkey } from "../../utils/use-command-hotkey";
export { initBulletSeparatorChunk } from "../../utils/bullet-separator";
export {
  avatarOverlayAnalytics,
  initAvatarOverlayAnalyticsChunk,
} from "../../utils/avatar-overlay-analytics";
export {
  cloneBuffer,
  cloneTypedArray,
  copyArray,
  copyObject,
  initCloneObject,
  keys,
} from "../../vendor/lodash-clone-helpers";
