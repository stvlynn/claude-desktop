// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Compatibility facade for the still-large Electron CodexApp root. Small
// producer exports from this chunk are routed to their semantic restored modules.
export {
  initProjectSiteRoutesChunk,
  getProjectSiteAnalyticsRoute,
  getProjectSiteSettingsRoute,
  PROJECT_SITES_LIBRARY_ROUTE,
} from "../appgen/project-site-routes";
export { initSitesIconChunk, SitesIcon } from "../../features/sites/sites-icon";
export { initSunIconChunk, SunIcon } from "../icons/sun-icon";
export {
  initNotificationsBellIconChunk,
  NotificationsBellIcon,
} from "../icons/notifications-bell-icon";
export {
  appgenPublicationTermsSidePanelHandler,
  initPublicationTermsSidePanelHandlerChunk,
} from "../../features/appgen/publication-terms/side-panel-handler";
export {
  AppHeaderUpdateButton,
  initAppHeaderUpdateButtonChunk,
} from "../../features/app-shell/app-header-update-button";
export { AppFallback, initAppFallbackChunk } from "../../features/app-shell/app-fallback";
export { windowsTabsOpenHandler } from "../../features/app-shell/windows-tabs-open-handler";
export {
  AutomationTooltipSurface,
  ComposerDismissableLayer,
  initAutomationSurface,
} from "../../features/automation/automation-surface";
export {
  initRightPanelComposerOverlayChunk,
  RightPanelComposerOverlay,
} from "../../features/composer/right-panel-composer-overlay";
export {
  LocalConversationDiffSummaryView,
  initLocalConversationDiffSummaryEffectsChunk,
} from "../../entities/conversation/local-conversation-page-parts/local-conversation-diff-summary-effects";
export {
  initQueryClientScopeProviderChunk,
  QueryClientScopeProvider,
} from "../runtime/query-client/query-client-provider";
export {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
  launcherHotkeyStateQueryKey,
} from "../../features/features/hotkey-window-state";
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
} from "../../features/keyboard-shortcuts/index";
export {
  GiftCreditsIcon,
  GIFT_CREDITS_FEATURE_GATE,
  initGiftCreditsIconChunk,
  initGiftCreditsLinkChunk,
  openGiftCreditsInBrowser,
} from "./features-root/gift-credits-runtime";
export {
  giftCreditsProfileCoachmarkPendingSignal,
  hasSeenGiftCreditsHomeBannerSignal,
  initGiftCreditsSignalsChunk,
} from "../../features/gift-credits-signals";
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
} from "../../features/onboarding/chronicle-setup-state/index";
export {
  getWorkspaceOnboardingPlaygroundName,
  initWorkspaceOnboardingControllerChunk,
  useTeenOnboardingEligibility,
  useWorkspaceOnboardingAutoLaunch,
} from "../../features/onboarding/workspace-onboarding-controller/index";
export {
  getShuffledWelcomeOnboardingRoles,
  getWelcomeOnboardingWorkMode,
  initWelcomeOnboardingRolesChunk,
  welcomeOnboardingRoleIds,
  welcomeOnboardingRoleMessages,
  welcomeOnboardingSelectedRolesAtom,
} from "../../features/onboarding/onboarding-roles";
export {
  appServerNotificationDebugEntriesSignal,
  clearNotificationDebugEntriesForHost,
  initAppServerNotificationDebugSignalsChunk,
  initProductEventDebugLogEntriesChunk,
  useProductEventDebugLogEntries,
} from "../../features/app-server/notification-debug-signals";
export {
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlEnabledChunk,
  initLocalRemoteControlErrorHandlingChunk,
  initSetRemoteControlEnabledForHostChunk,
  setLocalRemoteControlEnabled,
  setRemoteControlEnabledForHost,
} from "../../features/remote/local-remote-control-enabled-sync";
export {
  initPrimaryRuntimeFeatureFlagsChunk,
  initPrimaryRuntimeInstallActionChunk,
  initPrimaryRuntimeInstallEventFormattersChunk,
  formatPrimaryRuntimeDependenciesResetEvent,
  formatPrimaryRuntimeDiagnosticsEvent,
  formatPrimaryRuntimeDiagnosticsFailedEvent,
  PRIMARY_RUNTIME_SETTINGS_FEATURE_ID,
  isPrimaryRuntimeInstallAbortError,
} from "../runtime/primary-runtime-install-action";
export {
  initStatsigRefreshDiagnosticsChunk,
  refreshStatsigValuesForDiagnostics,
} from "../lib/statsig-refresh-diagnostics";
export { STATSIG_CLIENT_KEY } from "../lib/statsig-client-key";
export {
  buildLocalEnvironmentCreateRoute,
  initLocalEnvironmentCreateRouteChunk,
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
  parseLocalEnvironmentCreateRoute,
} from "../../features/environments/local-environment-create-route";
export {
  initToggleSidebarCommandChunk,
  useRegisterToggleSidebarCommand,
} from "../../features/settings/settings-navigation/index";
export {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  initExternalAgentImportSettingsFeatureChunk,
} from "../../features/settings/import-settings-feature";
export {
  initSettingsReturnRouteSignalChunk,
  settingsReturnRouteSignal,
} from "../../features/settings/settings-navigation/settings-return-route";
export {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
  SettingsContentNavigationTargetProvider,
} from "../ui/settings-content-layout";
export { AppPreloader, initAppPreloaderChunk } from "../ui/app-preloader";
export {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../runtime/window-focus-state";
export {
  initRateLimitSummaryChunk,
  RateLimitSummary,
} from "../ui/rate-limit-summary";
export { initNuxGateChunk, NuxGate } from "../../features/app-shell/nux-gate";
export {
  initThreadPageHeaderChunk,
  ThreadPageHeader,
} from "../../features/threads/thread-page-header";
export {
  initThreadPanelCommandHooksChunk,
  useRegisterToggleDiffPanelCommand,
} from "../../features/threads/thread-panel-command-hooks";
export {
  initThreadFileSearchCommandChunk,
  useRegisterThreadFileSearchCommand,
} from "../../features/threads/thread-file-search-command";
export {
  initPendingWorktreeConversationRuntimeChunk,
  restorePendingWorktreeBrowserTransferSources,
  startPendingWorktreeConversation,
} from "../../entities/thread/pending-worktree-conversation";
export {
  initProfileDropdownChunk,
  ProfileDropdown,
} from "../../features/app-shell/profile-dropdown";
export {
  initWorkspaceMessagesHeadlineChunk,
  useWorkspaceMessagesHeadline,
} from "../../features/app-shell/workspace-messages";
export {
  CodexMobileSetupQueriesIcon,
  initCodexMobileSetupQueriesIconChunk,
} from "../icons/codex-mobile-setup-queries-icon";
export {
  HotkeyWindowDetailLayout,
  initHotkeyWindowDetailLayoutChunk,
} from "../lib/hotkey-window-detail-layout";
export {
  BulletSeparator,
  initBulletSeparatorChunk,
} from "../lib/bullet-separator";
export {
  avatarOverlayAnalytics,
  initAvatarOverlayAnalyticsChunk,
} from "../lib/avatar-overlay-analytics";
export { useCommandHotkey } from "../lib/use-command-hotkey";
export {
  cloneBuffer,
  cloneTypedArray,
  copyArray,
  copyObject,
  initCloneObject,
  keys,
} from "./lodash-clone-helpers";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../../features/app-shell/codex-app";
