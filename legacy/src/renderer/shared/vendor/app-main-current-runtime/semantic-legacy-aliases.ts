// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Legacy app-main current bundle aliases that remain sourced from the current bundle.
export { areArraysEqual } from "../../lib/are-arrays-equal";
export { summarizeParsedDiffs } from "../../review/summarize-parsed-diffs";
export {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
} from "../../lib/pull-request-visual-state";
export {
  openReviewTabForConversation as openThreadLastTurnReviewSidePanelTab,
  openReviewTab as setThreadBrowserSidePanelExpanded,
} from "../../../features/review/review-side-panel-tab-commands";
export {
  initUnifiedDiffIconChunk as initFileDiffLayoutRuntime,
  UnifiedDiffIcon,
} from "../../icons/unified-diff-icon";
export {
  initTrashIconChunk as initAppMainAttachmentRendererRuntime,
  TrashIcon,
} from "../../icons/trash-icon";
export {
  initMessageTextRendererRuntime,
  MessageTextRenderer,
} from "../../../entities/conversation/user-message-text";
export {
  shouldShowToolActivityForDetailLevel as SidebarRowIcon,
} from "../../../entities/conversation/tool-activity-detail-level";
export {
  buildAmbientSuggestionAppIndex as initThreadRowLayoutRuntimeChunk,
  normalizeAmbientSuggestionAppKey as initSidebarTaskRowRuntimeChunk,
} from "../../../features/connectors/ambient-suggestion-apps";
export {
  initUseWorktreeBaseBranchQueryChunk as openThreadBrowserSidePanelTab,
  useWorktreeBaseBranchQuery as openThreadBrowserSidePanelTabWithPendingState,
} from "../../../entities/conversation/use-worktree-base-branch-query";
export {
  initWorktreeBranchSetupModalChunk as initThreadSidePanelTabsChunk,
} from "../../conversations/worktree-branch-setup-modal-runtime";
export {
  initReviewModeIconsRuntime,
  XcodeLicenseWarningIcon,
} from "../../icons/xcode-license-warning-icon";
export {
  ConversationalOnboardingTaskIcon as OnboardingStepView,
} from "../../../features/onboarding/conversational-onboarding-task-icon";
export {
  SummaryPanelRow as openThreadBrowserSidePanelTabWithoutAnimation,
} from "../../lib/summary-panel-row";
export {
  primaryRuntimeInstallStatusMessage as registerForkedConversation,
} from "../../runtime/primary-runtime-install-status-message";
export {
  initReasoningEffortLabelChunk as normalizeFilesystemPathForDisplay,
  REASONING_EFFORT_LABELS as readProjectSignal,
} from "../../../features/composer/reasoning-effort-label";
export {
  parseHttpsUrl as associateBranchWithConversation,
} from "../../../entities/conversation/parse-https-url";
export {
  useDictation as ThreadRowEnvironmentMeta,
} from "../../../features/use-dictation/use-dictation";
export {
  initUseDictationRuntimeChunk as SidebarRowContextMenuItem,
} from "../../../features/use-dictation/use-dictation";
export {
  cleanupDictationTranscript as SidebarRowHostLabel,
} from "../../lib/transcribe-audio/index";
export {
  isDeeplyDifferent as initSidebarRowPrimitivesChunk,
} from "../../lib/is-deeply-different";
export {
  normalizeThreadDetailLevel as ThreadRowTimestamp,
} from "../../lib/thread-detail-level";
export {
  initSettingsControlRowChunk as initSettingsRowRuntime,
} from "../../ui/settings-row";
export {
  initPullRequestStatusRuntimeChunk as initPullRequestStatusBadgeChunk,
} from "../../../features/github/pull-request-status";
export {
  SplitDiffIcon as initOpenInBrowserRuntimeChunk,
} from "../../icons/split-diff-icon";
export {
  getMicrophoneInputStream as SidebarRowProjectLabel,
} from "../../lib/microphone-input";
export {
  useDictationKeyboard as initExternalAgentImportStatusIconsChunk,
} from "../../../features/composer/use-dictation-keyboard";
export {
  BranchNameFieldHeader as getBrowserTabIdForSidePanelOpen,
} from "../../../entities/conversation/branch-name-field-header";
export {
  initGitApplyClipboardIconChunk as SidebarRowKeyboardScope,
} from "../../icons/git-apply-clipboard-icon";
export {
  initKeyboardLayoutMapChunk as ThreadRowHoverCard,
  setKeyboardLayoutMap as ThreadRowHoverActions,
} from "../../lib/keyboard-layout-map";
export {
  initUseHotkeyChunk as ThreadRowUnreadState,
  keyboardEventMatchesAccelerator as ThreadRow,
  useHotkey as ThreadRowMeta,
} from "../../lib/use-hotkey";
export {
  initReviewTabIconChunk as getThreadMcpAppSidePanelTabId,
} from "../../icons/review-tab-icon";
export {
  initBrowserProfileImportDialogLauncherChunk as initThreadRowRuntimeChunk,
  openBrowserProfileImportDialog as ThreadRowPinAction,
} from "../../../features/browser/browser-profile-import-dialog-launcher";
export {
  cancelGitWorkflowAbortSignal as ThreadRowTitle,
} from "../../../features/review/local-git-action-state";
export {
  initLocalConversationGitActionsChunk as SidebarRowDragHandle,
} from "../../../entities/conversation/local-conversation-git-actions";
export {
  gitActionAvailabilityAtom as projectGroupRepositoryDataSignal,
  initLocalGitActionsScopeChunk as SidebarListSection,
} from "../../../features/review/local-git-actions-scope";
export {
  ActionPopoverPrimitives as openSessionSandboxSidePanel,
  initActionPopoverPrimitivesChunk as openThreadBranchReviewSidePanelTab,
} from "../../../features/git/git-review-primitives/action-popover-primitives";
export {
  PullRequestButtonLabel as toggleThreadSidePanel,
} from "../../../features/github/pull-request-button-label";
export {
  TwoPeopleShieldIcon as openThreadMcpAppSidePanelTab,
} from "../../icons/two-people-shield-icon";
export {
  NotePlusIcon as closeThreadMcpAppSidePanelTab,
} from "../../icons/note-plus-icon";
export {
  FolderOpenIcon as liveMcpAppFrameSignal,
} from "../../icons/folder-open-icon";
export {
  aggregateChangedFileSummary as SidebarSection,
  computeFileLineStats as SidebarTaskRowActions,
  initDiffSelectionSummaryChunk as SidebarRowUnreadDot,
} from "../../../features/review/diff-selection-summary";
export {
  initBranchSearchListChunk as SidebarRowMenuSeparator,
} from "../../../features/review/branch-search-list";
export {
  initFileDiffRuntime,
  initFileDiffSupportRuntime,
} from "../../../features/review/file-diff-runtime";
export {
  transferForkedConversationBrowserTabs,
  transferForkedConversationBrowserTabs as primeBrowserTabTransfers,
} from "../../../features/app-shell/thread-browser-panel-tabs";
export {
  convertUnistTest as SidebarRowHoverCard,
  mdastToMarkdownDefaultHandlers as SidebarTaskRowTitle,
} from "../markdown-ast-runtime";

export { Banner as RemoteConversationShell } from "../../ui/banner";

export { FileDiff } from "../../../../main/infrastructure/git-worker-review/file-diff";

export {
  initBackgroundSubagentsRuntimeChunk as forkConversationMessages,
  initBackgroundSubagentsRuntimeChunk as initForkConversationMessagesChunk,
} from "../../../entities/conversation/background-subagent-signals";

export {
  initUseCollaborationModeChunk as useComposedRefs,
} from "../../../features/collaboration/use-collaboration-mode";

export { AutomationNameInput as ArchiveMenuItem } from "../../../features/automations/automation-name-input";
export {
  AutomationPromptForm as AutomationScheduleEditor,
} from "../../../features/automations/automation-prompt-form";
export {
  AutomationSaveTooltip as AutomationDraftActionForm,
} from "../../../features/automations/automation-save-tooltip";
export {
  AutomationSandboxBanner as SidebarRowRuntime,
} from "../../../features/automations/automation-sandbox-banner";
export {
  initAutomationDraftRuntimeChunk as SidebarRowContextMenu,
} from "../../../features/plugins/mcp-app-tool-labels/shared";
export { AutomationDetailRow as SidebarTaskRow } from "../../../features/automations/automation-side-panel/status-components";
export {
  SettingsButtonRow as SidebarRowActionButton,
} from "../../ui/settings-row";
export {
  initCursorIconChunk as SidebarRowOverflowMenu,
} from "../../icons/cursor-icon";
export {
  initJumpToFileMenuChunk as SidebarRowShortcutScope,
} from "../../../features/review/jump-to-file-menu";
export {
  initCollapsedTurnSummaryLabelChunk as initForkConversationToastRuntime,
} from "../../../entities/conversation/collapsed-turn-summary-label";
