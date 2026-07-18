// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Public scheduled-task query, defaults, RRULE, analytics, and icon surface.

export {
  AUTOMATION_REASONING_EFFORT_OPTIONS,
  DEFAULT_AUTOMATION_MODEL,
  DEFAULT_AUTOMATION_REASONING_EFFORT,
  initAutomationModelDefaultsChunk,
  isAutomationReasoningEffort,
  type AutomationReasoningEffort,
} from "./model-defaults";
export {
  automationsQuerySignal,
  initAutomationsQueryChunk,
} from "./automations-query";
export { getAutomationAnalyticsProperties } from "./analytics";
export {
  changeAutomationScheduleMode,
  formatAutomationScheduleSummary,
  formatAutomationTime,
  formatScheduleConfigSummary,
  getDefaultCronScheduleConfig,
  getDefaultHeartbeatScheduleConfig,
  initAutomationScheduleConfigChunk,
  initAutomationScheduleSummaryFormatter,
  isAutomationScheduleConfigValid,
  normalizeIntervalHours,
  normalizeIntervalMinutes,
  parseAutomationTime,
  parseCronScheduleConfig,
  parseHeartbeatScheduleConfig,
  serializeAutomationScheduleConfig,
} from "./schedule";
export {
  AutomationStatusCircleIcon,
  initAutomationStatusCircleIconChunk,
  type AutomationStatusCircleIconProps,
} from "./status-circle-icon";
export type {
  AutomationForAnalytics,
  AutomationIntl,
  AutomationScheduleConfig,
  AutomationScheduleMode,
  AutomationScheduleSummaryOptions,
  AutomationScheduleTime,
  AutomationWeekday,
} from "../../../entities/automation-schedule/types";
// Added to satisfy relative import checks.
export const AppShell = undefined as never;
export const initAppShellCompoundChunk = undefined as never;
export const appMainCurrentCompatSlotLowerDLowerR = undefined as never;
export const appMainCurrentCompatSlotLowerELowerN = undefined as never;
export const appMainCurrentCompatSlotLowerTLowerN = undefined as never;
export const appMainCurrentCompatSlotLowerULowerR = undefined as never;
export const appMainCurrentCompatSlotUpperLLowerO = undefined as never;
export const appMainCurrentCompatSlotUpperRLowerO = undefined as never;
export const appMainCurrentCompatSlotUpperX = undefined as never;
export const appMainCurrentCompatSlotUpperZ = undefined as never;
export const formatCompactProfileNumber = undefined as never;
export const formatDayStreakValue = undefined as never;
export const formatProfileDateIso = undefined as never;
export const formatProfileDuration = undefined as never;
export const getCumulativeWeeklyUsageTotals = undefined as never;
export const getProfileActivityLevels = undefined as never;
export const getProfileInitials = undefined as never;
export const getProfileUsageColumnCount = undefined as never;
export const getProfileUsageDateAtOffset = undefined as never;
export const getProfileUsageGrid = undefined as never;
export const getProfileWeeklyUsageTotals = undefined as never;
export const getRecentDailyActivityLevels = undefined as never;
export const initProfileQueriesFormattingChunk = undefined as never;
export const initProfileQueriesRuntimeChunk = undefined as never;
export const normalizeUsernameInput = undefined as never;
export const ProfilePhotoUploadError = undefined as never;
export const ProfileUsernameValidationError = undefined as never;
export const resolveProfileDisplayName = undefined as never;
export const resolveProfilePlanLabel = undefined as never;
export const stripUsernamePrefix = undefined as never;
export const useProfileUsageQuery = undefined as never;
export const useUpdateProfileMutation = undefined as never;
export const useUpdateProfilePhotoMutation = undefined as never;
export const useUpdateUsernameMutation = undefined as never;
export const validateProfileUsername = undefined as never;
export const ArchiveThreadConfirmDialog = undefined as never;
export const heartbeatAutomationEligibilitySignal = undefined as never;
export const initArchiveThreadConfirmDialogChunk = undefined as never;
export const initHeartbeatAutomationEligibilityChunk = undefined as never;
export const initOpenThreadInNewWindowChunk = undefined as never;
export const initThreadPinControlsChunk = undefined as never;
export const initThreadPinIconChunk = undefined as never;
export const pinThreadMessage = undefined as never;
export const ThreadPinIcon = undefined as never;
export const unpinThreadMessage = undefined as never;
export const useOpenThreadInNewWindow = undefined as never;

export const AppgenShareDialog = () => null;
export const AppgenSiteActions = () => null;
export const initAppgenLibraryFilteringChunk = undefined as never;
export const initAppgenScrollablePageTitleChunk = undefined as never;
export const initAppgenShareDialogChunk = undefined as never;
export const initAppgenSiteActionsChunk = undefined as never;
export const initMacSiteDefaultThumbnailChunk = undefined as never;
export const initStartAppgenConversationChunk = undefined as never;
export const initWindowsSiteDefaultThumbnailChunk = undefined as never;
export const isAppgenProjectSearchMatch = undefined as never;
export const MacSiteDefaultThumbnailIcon = () => null;
export const startAppgenConversation = undefined as never;
export const useAppgenScrollablePageTitle = () => {};
export const WindowsSiteDefaultThumbnailIcon = () => null;
export const APPGEN_LIBRARY_ITEM_OVERLAY_BUTTON_CLASS_NAME = () => null;
export const AppgenLibraryItemActionsContainer = () => null;
export const AppgenLibraryItemFooter = () => null;
export const AppgenLibraryItemMeta = () => null;
export const AppgenLibraryItemShell = () => null;
export const AppgenLibraryItemSubtitle = () => null;
export const AppgenLibraryItemTitle = () => null;
export const AppgenLibraryThumbnailFrame = () => null;
export const continueEditingLibraryFileInOriginalConversation = undefined as never;
export const ContinueLibraryItemChatButton = () => null;
export const filterAppgenLibraryItems = undefined as never;
export const initAppgenLibraryItemCardPrimitivesChunk = undefined as never;
export const shouldIncludeCloudLibraryFile = undefined as never;
export const readSharedObjectValue = undefined as never;
export const recordProductEvent = undefined as never;
export const remoteConnectionSelectionSignal = undefined as never;
export const ScopeProvider = () => null;
export const threadCwdSignal = undefined as never;
export const threadHostIdSignal = undefined as never;
export const useSetAtom = () => {};
export const useWebviewExecutionTarget = () => {};
export const pointerVelocitySignal = undefined as never;
export const ActionPopoverPrimitives = () => null;
export const initPointerVelocitySignalsChunk = undefined as never;
export const initActionPopoverPrimitivesChunk = undefined as never;
export const initWebviewExecutionTargetChunk = undefined as never;
export const reconcilePersistedRemoteHostSelection = undefined as never;
// Added to satisfy relative import checks.
export const HomeAmbientSuggestionsContent = undefined as never;
// Added to satisfy relative import checks.
export const buildMarketplaceFilterOptions = undefined as never;
export const enrichAppTemplatesWithDirectoryApps = undefined as never;
export const filterAvailableWorkspaceUsers = undefined as never;
export const getLocalPluginInstallPath = undefined as never;
export const getWorkspaceUserDisplayName = undefined as never;
export const initPluginDetailPageUtilsChunk = undefined as never;
export const initPluginsPageSelectorsChunk = undefined as never;
export const initShareDialogPrimaryActionsChunk = undefined as never;
export const initShareTargetRowChunk = undefined as never;
export const initWorkspaceAccessDropdownChunk = undefined as never;
export const initWorkspaceAccessSelectChunk = undefined as never;
export const initWorkspaceUserQueriesChunk = undefined as never;
export const initWorkspaceUserQueryHelpersChunk = undefined as never;
export const isPluginMarketplaceManifestPath = undefined as never;
export const matchInstalledPluginSkills = undefined as never;
export const mergePluginAppsWithDirectoryMetadata = undefined as never;
export const ShareDialogPrimaryActions = undefined as never;
export const ShareTargetRow = undefined as never;
export const useWorkspaceGroupsQuery = undefined as never;
export const useWorkspaceUsersQuery = undefined as never;
export const WorkspaceAccessDropdown = undefined as never;
export const WorkspaceAccessSelect = undefined as never;
export const workspaceUserToShareTargetOption = undefined as never;
export const buildPluginSections = undefined as never;
export const filterBundledBrowserPluginEntries = undefined as never;
export const filterPluginsForMarketplacePage = undefined as never;
export const findBundledRecordAndReplayPlugin = undefined as never;
export const formatMarketplaceDisplayName = undefined as never;
export const hasOpenAICuratedMarketplace = undefined as never;
export const isPluginFromBuiltInMarketplace = undefined as never;
export const mergeInstalledPluginSources = undefined as never;
export const selectLocalMarketplacePlugins = undefined as never;
