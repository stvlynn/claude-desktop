// Restored from ref/webview/assets/onboarding-commons-externals.facade.js
// @ts-nocheck
// Boundary facade bridging restored imports to existing src/ runtime boundaries.
// Placeholder boundary facade for onboarding-commons-externals.
// Re-export real implementations as they are promoted; symbols currently
// resolve to `never` placeholders so dependent modules can type-check.
/* eslint-disable @typescript-eslint/no-explicit-any */

export const APP_SHELL_FOCUS_AREA_ATTR = undefined as never;
export const AnimatedActivityLabel = undefined as never;
export const BackForwardNavigationButtons = undefined as never;
export const BrowserOptionsIcon = undefined as never;
export const BrowserPlaceholderIcon = undefined as never;
export const Button = undefined as never;
export const ChevronDownIcon = undefined as never;
export const CloseIcon = undefined as never;
export const CodexAppToolIcon = undefined as never;
export const ConversationSummaryRow = undefined as never;
export const GlobeFallbackIcon = undefined as never;
export const KeyboardShortcutHint = undefined as never;
export const PlanType = undefined as never;
export const ShimmerText = undefined as never;
export const SourceListItemButton = undefined as never;
export const Tooltip = undefined as never;
export const WorkspaceFolderDropdown = undefined as never;
export const annotationViewportBaseHeight = undefined as never;
export const applicationMenuIds = undefined as never;
export const buildBranchAheadCountQueryKey = undefined as never;
export const capitalizeWord = undefined as never;
export const conversationCwdByIdSignal = undefined as never;
export const countToolResultItems = undefined as never;
export const createKeyedAtomFamily = undefined as never;
export const findMatchingMcpApp = undefined as never;
export const fuzzyMatchScore = undefined as never;
export const generateId = undefined as never;
export const getFeatureGateValue = undefined as never;
export const getWorktreeStatusToastMessage = undefined as never;
export const hostMessageBridge = undefined as never;
export const httpsUrlSchema = undefined as never;
export const isAssistantContentStreaming = undefined as never;
export const isCodexHomeDirectory = undefined as never;
export const logger = undefined as never;
export const matchesCodexPagePath = undefined as never;
export const mergeFileAttachments = undefined as never;
export const motion = undefined as never;
export const multiBrowserTabsEnabledAtom = undefined as never;
export const nextTurnModelOverrideSignal = undefined as never;
export const nonIntegrationSourceKey = undefined as never;
export const normalizePath = undefined as never;
export const openComposerReferencedFile = undefined as never;
export const openExternalLink = undefined as never;
export const openExternalLinkFromEvent = undefined as never;
export const parseCodexDelegation = undefined as never;
export const parseCommentBody = undefined as never;
export const parseConversationId = undefined as never;
export const parseTurnItems = undefined as never;
export const parseUrlOrigin = undefined as never;
export const readPersistedStorageValue = undefined as never;
export const requestStatsigBootstrapPayload = undefined as never;
export const resolveChromeTheme = undefined as never;
export const resolveMcpFrameHeight = undefined as never;
export const resolvedHostIdQuery = undefined as never;
export const reviewBaseBranchOverrideKey = undefined as never;
export const sendMessageToBackgroundThread = undefined as never;
export const serializeSandboxPartition = undefined as never;
export const setKeyboardLayoutMap = undefined as never;
export const setSidebarPanelForSide = undefined as never;
export const startComposerTurn = undefined as never;
export const subagentAvatarIcons = undefined as never;
export const svgToDataUri = undefined as never;
export const terminalSessionManager = undefined as never;
export const toSentenceCase = undefined as never;
export const toastControllerToken = undefined as never;
export const uniqBy = undefined as never;
export const updateSharedObjectState = undefined as never;
export const useActiveCollaborationMode = undefined as never;
export const useAtomValue = undefined as never;
export const useDevicePixelRatio = undefined as never;

// Automation-related stubs
export const appMessenger = {
  dispatchMessage: (_type: string, _payload?: unknown): void => {
    // no-op stub
  },
};
export const automationDeletedExternallyMessage =
  "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.";
export const buildQueryKey = (...parts: unknown[]): unknown[] => parts;
export const setHeartbeatAutomationsEnabled = (_enabled: boolean): void => {
  // no-op stub
};
export const useEffectEvent = undefined as never;
export const useEvent = undefined as never;
export const useHostMessageSubscription = undefined as never;
export const useMeasuredWidth = undefined as never;
export const useNavigate = undefined as never;
export const useResizeObserverRef = undefined as never;
export const useRouteMatch = undefined as never;
export const useThreadsQuery = undefined as never;

// App-shell slot signals
export const appShellHeaderActionEntriesSignal = undefined as never;
export const appShellHeaderContextMenuItemsSignal = undefined as never;
export const appShellHeaderContextMenuSurfaceSignal = undefined as never;
export const appShellHeaderEndEntriesSignal = undefined as never;
export const appShellHeaderStartEntriesSignal = undefined as never;
export const appStoreScope = undefined as never;
export const useAppScope = (): unknown => ({});
export const mainContentLayoutSignal = undefined as never;
export const Spinner = (): null => null;
export const bottomPanelAfterListSignal = undefined as never;
export const bottomPanelAfterListStickySignal = undefined as never;
export const bottomPanelEmptyStateSignal = undefined as never;
export const bottomPanelFallbackContentSignal = undefined as never;
export const getDefaultRightPanelStorageKey = (_routeTemplate: string): string =>
  "right-panel-width";
export const rightPanelAfterListSignal = undefined as never;
export const rightPanelAfterListStickySignal = undefined as never;
export const rightPanelBeforeListSignal = undefined as never;
export const rightPanelEmptyStateSignal = undefined as never;
export const rightPanelFallbackContentSignal = undefined as never;
export const rightPanelWidthConfigSignal = undefined as never;
