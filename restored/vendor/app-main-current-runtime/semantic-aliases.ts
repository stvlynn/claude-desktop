// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Named app-main current runtime aliases recovered from the current producer.
export { GlobeIcon } from "../../icons/globe-icon";
export { AlertIcon, initAlertIconChunk } from "../../icons/alert-icon";
export { FolderIcon, initFolderIconChunk } from "../../icons/folder-icon";
export { ClockIcon, initClockIconChunk } from "../../icons/clock-icon";
export { CloudIcon, initCloudIconChunk } from "../../icons/cloud-icon";
export { DragIcon, initDragIconChunk } from "../../icons/drag-icon";
export { LaptopIcon, initLaptopIconChunk } from "../../icons/laptop-icon";
export { PinIcon, initPinIconChunk } from "../../icons/pin-icon";
export { UploadIcon } from "../../icons/upload-icon";
export { WarningIcon, initWarningIconChunk } from "../../icons/warning-icon";
export { FileSourceTab } from "../../review/file-source-tab";
export {
  initPullRequestStatusRuntimeChunk,
  PullRequestCheckStatusIcon,
  PullRequestStatusIcon,
} from "../../github/pull-request-status";
export {
  initPullRequestStatusTooltipChunk,
  PullRequestStatusTooltip,
} from "../../utils/pull-request-visual-state";
export {
  FastServiceTierIcon,
  initFastServiceTierIcon,
  initUltraFastServiceTierIcon,
  UltraFastServiceTierIcon,
} from "../../composer/service-tier-speed-icon";
export {
  hasSeenAppgenPublicationTermsDisclosureSignal,
  initAppgenPublicationTermsDisclosureRuntime,
} from "../../appgen/appgen-publication-terms-disclosure";
export { composeRefs } from "../../utils/compose-refs";
export { QueryClientProvider } from "../../runtime/query-client/react-query-context";
export { useQueries } from "../../runtime/query-client/react-query-hooks";
export { createToolErrorResult } from "../../runtime/tool-result-runtime";
export { OpenAiMcpCapabilityView } from "../../review/openai-mcp-capability-view";
export {
  useCloudEnvironmentsQuery,
  useReferralInviteMutation,
} from "../../runtime/codex-api";
export { LocalConversationGitActions } from "../../conversations/local-conversation-git-actions";
export {
  browserTabIdForConversation,
  deriveBrowserConversationId,
  getBrowserTabIdForPanelTab,
  isUncPath,
  isWindowsStyleAbsolutePath,
  terminalSessionSnapshotStore,
} from "../../conversations/fork-conversation-panel-state-deps";
export { serializeError } from "../../runtime/app-logger";
export {
  initRequestUserInputAutoResolutionRuntime,
  requestUserInputAutoResolutionState,
} from "../../runtime/request-user-input-auto-resolution";
export {
  COMPLETE_CONVERSATIONAL_ONBOARDING_TASK_NAME,
  initConversationalOnboardingTaskOutputRuntime,
  initNavigateToCodexPageToolRuntime,
  initOpenInCodexToolRuntime,
  initRunAppActionInPrimaryWindowRuntime,
  NAVIGATE_TO_CODEX_PAGE_TOOL_NAME,
  OPEN_IN_CODEX_TOOL_NAME,
  runAppActionInPrimaryWindow,
} from "../../runtime/run-app-action-in-primary-window";
export {
  initConversationDetailModeRuntime,
  isConversationDetailModeProse,
} from "../../runtime/conversation-detail-runtime";
export {
  initSettingsControlRowChunk,
  SettingsControlRow,
} from "../../ui/settings-row";
export { initSettingsHostContextRuntimeChunk } from "../../settings/settings-host-context";
export {
  CHATGPT_ADMIN_BILLING_ADD_CREDITS_URL,
  CHATGPT_ADMIN_URL,
  CHATGPT_ADMIN_USAGE_LIMITS_URL,
  CODEX_AUTOMATIONS_DOCS_URL,
  CODEX_CHROME_EXTENSION_DOCS_URL,
  CODEX_CONFIG_DOCS_URL,
  CODEX_GLOBAL_AGENTS_GUIDANCE_DOCS_URL,
  CODEX_HOOKS_DOCS_URL,
  CODEX_IDE_DOCS_URL,
  CODEX_LOCAL_ENVIRONMENTS_DOCS_URL,
  CODEX_LOCKED_COMPUTER_USE_DOCS_URL,
  CODEX_MCP_DOCS_URL,
  CODEX_SANDBOXING_DOCS_URL,
  CODEX_SKILLS_DOCS_URL,
  CODEX_USAGE_CREDITS_MODAL_URL,
  CODEX_USAGE_URL,
  CHATGPT_PRICING_HASH_URL,
  CHATGPT_PRICING_URL,
  initCodexLinksChunk,
  OPENAI_APPS_SDK_DOCS_URL,
  OPENAI_PLUGINS_GITHUB_URL,
} from "../../utils/links-bd-mmkun-d";
export { resolveSidePanelBrowserTabId } from "../../browser/browser-tab-id-resolution";
export { normalizeWorkspacePath } from "../../boundaries/src-l0hb/paths";
export {
  formatAutomationNextRunLabel,
  initAutomationNextRunLabelChunk,
} from "../../automations/shared";
export {
  initPinnedThreadsQueryChunk,
  pinnedThreadsQuery,
} from "../../utils/pinned-threads-query";
export {
  initSetPinnedThreadRuntimeChunk,
  setPinnedThread,
  setPinnedThreadsOrder,
} from "../../utils/set-pinned-thread";
export { usePinnedThreadState } from "../../threads/thread-actions/pinning";
export {
  copyAppLink,
  copySessionId,
} from "../../threads/thread-actions/actions";
export {
  conversationalOnboardingWorkflowSignal,
  declineConversationalOnboardingTask,
  getConversationalOnboardingWorkflowState,
  initConversationalOnboardingWorkflowStateChunk,
  resetConversationalOnboardingWorkflowState,
  selectConversationalOnboardingRole,
  selectConversationalOnboardingTask,
  setConversationalOnboardingPermissionStatus,
} from "../../onboarding/conversational-onboarding-workflow-state";
export {
  conversationalOnboardingTaskActiveConversationSignal,
  conversationalOnboardingTaskIntroCompleteSignal,
  conversationalOnboardingTaskRequestVisibleSignal,
  conversationalOnboardingTaskScope,
  initConversationalOnboardingTaskScopeChunk,
  resetConversationalOnboardingTaskScope,
} from "../../onboarding/conversational-onboarding-task-scope";
export { conversationalOnboardingTaskDefinitions } from "../../onboarding/conversational-onboarding-task-definitions";
export {
  getConversationalOnboardingTaskOption,
  getConversationalOnboardingTaskPluginName,
  initConversationalOnboardingTaskRegistryChunk,
  isConversationalOnboardingMessagingTask,
} from "../../onboarding/conversational-onboarding-task-registry";
export {
  getAvailableConversationalOnboardingTasks,
  getConversationalOnboardingMessagingPluginNames,
  mapConversationalOnboardingTasksToAppPlugins,
} from "../../onboarding/conversational-onboarding-task-selection";
export {
  trackConversationalOnboardingExecutionCancelled,
  trackConversationalOnboardingExecutionCompletionMissing,
  trackConversationalOnboardingLifecycleCompleted,
  trackConversationalOnboardingLifecycleSkipped,
  trackConversationalOnboardingLifecycleStarted,
  trackConversationalOnboardingRoleSelected,
  trackConversationalOnboardingTaskSelected,
} from "../../onboarding/conversational-onboarding-analytics";
export { trackConversationalOnboardingAccessDenied } from "../../onboarding/conversational-onboarding-access-analytics";
export {
  appConnectionLinkQueryOptions,
  findConnectorAppByIdentifier,
  initConversationalOnboardingAppConnectionQueryChunk,
} from "../../connectors/apps-queries/onboarding-app-connection";
export { cancelActiveConversationalOnboardingForHost } from "../../onboarding/conversational-onboarding-cancel-for-host";
export {
  archiveConversationalOnboardingConversationsForHost,
  initConversationalOnboardingControllerChunk,
} from "../../onboarding/conversational-onboarding-controller";
export { AutomationSchedulePicker } from "../../automations/automation-schedule-picker";
export {
  initMeasuredTextCollapseRuntimeChunk,
  useMeasuredTextCollapse,
} from "../../utils/use-measured-text-collapse";
export {
  getCommandExecutionText,
  initBrowserCommentAttachmentRuntime,
  initCommandExecutionTextRuntime,
} from "../../runtime/window-chrome-runtime";
export {
  initResolvedHighlightThemesChunk,
  initSharedHighlightThemeRegistryChunk,
  sharedHighlightThemeRegistry,
} from "../../utils/shared-highlight-themes";
export {
  composeEventHandlers,
  initComposeEventHandlersRuntime,
} from "../radix-event-helpers";
export { isComposerDictationTarget } from "../../composer/composer-dictation-focus";
export { buildCreateConversationParams } from "../../composer/build-create-conversation-params";
export { openConfigInEditor } from "../../composer/open-config-in-editor";
export { initPrimaryRuntimeInstallStatusMessageChunk } from "../../runtime/primary-runtime-install-status-message";

export {
  $c as initFileDiffLayoutRuntime,
  Bt as summarizeParsedDiffs,
  Ln as AutomationScheduleEditor,
  Qc as UnifiedDiffIcon,
  Vt as initFileDiffRuntime,
  Hc as setThreadBrowserSidePanelExpanded,
  In as initSettingsRowRuntime,
  Kt as RemoteConversationShell,
  ad as initAppMainAttachmentRendererRuntime,
  ai as initMessageTextRendererRuntime,
  fo as XcodeLicenseWarningIcon,
  id as TrashIcon,
  ii as MessageTextRenderer,
  kn as AutomationDraftActionForm,
  ou as FileDiff,
  po as initReviewModeIconsRuntime,
  su as initFileDiffSupportRuntime,
  t as OnboardingStepView,
} from "../app-main-current-cgnc-bundle";

export {
  $l as SidebarSection,
  Bn as ArchiveMenuItem,
  Cl as toggleThreadSidePanel,
  Ff as initThreadRowLayoutRuntimeChunk,
  Gd as ThreadRow,
  Gl as projectGroupRepositoryDataSignal,
  Hd as initThreadRowRuntimeChunk,
  Jd as ThreadRowHoverCard,
  Jl as ThreadRowTitle,
  Kd as ThreadRowMeta,
  Ac as areArraysEqual,
  Mr as initSidebarRowPrimitivesChunk,
  Nn as SidebarRowActionButton,
  Nr as SidebarRowContextMenu,
  Oi as SidebarRowOverflowMenu,
  Pf as initSidebarTaskRowRuntimeChunk,
  Pn as SidebarTaskRow,
  Ql as SidebarTaskRowActions,
  Qp as SidebarTaskRowTitle,
  Sl as initPullRequestStatusBadgeChunk,
  To as registerForkedConversation,
  Ud as ThreadRowPinAction,
  Wc as primeBrowserTabTransfers,
  Wc as transferForkedConversationBrowserTabs,
  Wd as ThreadRowUnreadState,
  Wl as SidebarListSection,
  Yd as ThreadRowHoverActions,
  Zu as AppShellOverlayOutlet,
  _l as openThreadBrowserSidePanelTabWithPendingState,
  al as SidebarRowMenuSeparator,
  bl as openThreadReviewSidePanelTab,
  cf as openThreadMcpAppSidePanelTab,
  cm as ThreadRowEnvironmentMeta,
  cp as ThreadRowTimestamp,
  dl as SidebarRowDragHandle,
  el as initOpenInBrowserRuntimeChunk,
  eu as SidebarRowUnreadDot,
  fl as getBrowserTabIdForSidePanelOpen,
  fr as normalizeFilesystemPathForDisplay,
  gl as openThreadBrowserSidePanelTab,
  gm as SidebarRowProjectLabel,
  go as associateBranchWithConversation,
  hl as openThreadBranchReviewSidePanelTab,
  hm as SidebarRowHostLabel,
  ho as forkConversationMessages,
  hp as useComposedRefs,
  ki as SidebarRowIcon,
  ml as openSessionSandboxSidePanel,
  mo as initForkConversationMessagesChunk,
  nf as liveMcpAppFrameSignal,
  nm as SidebarRowHoverCard,
  of as closeThreadMcpAppSidePanelTab,
  pl as initThreadSidePanelTabsChunk,
  pr as readProjectSignal,
  rl as SidebarRowKeyboardScope,
  sf as getThreadMcpAppSidePanelTabId,
  sl as SidebarRowShortcutScope,
  sm as SidebarRowContextMenuItem,
  ud as initExternalAgentImportStatusIconsChunk,
  vl as openThreadBrowserSidePanelTabWithoutAnimation,
  xl as openThreadTimelineSidePanel,
  xo as initForkConversationToastRuntime,
  yl as openThreadLastTurnReviewSidePanelTab,
  zn as SidebarRowRuntime,
} from "../app-main-current-cgnc-bundle";
