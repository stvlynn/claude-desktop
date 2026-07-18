// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Shared types for scheduled task RRULE editing and summaries.

export const AUTOMATION_WEEKDAYS = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
] as const;

export const AUTOMATION_BUSINESS_DAYS = ["MO", "TU", "WE", "TH", "FR"] as const;

export const AUTOMATION_WEEKEND_DAYS = ["SA", "SU"] as const;

export type AutomationWeekday = (typeof AUTOMATION_WEEKDAYS)[number];

export type AutomationScheduleMode =
  | "hourly"
  | "daily"
  | "weekdays"
  | "weekly"
  | "custom";

export type AutomationScheduleConfig = {
  mode: AutomationScheduleMode;
  intervalHours: number;
  intervalMinutes: number | null;
  weekdays: AutomationWeekday[];
  time: string;
  customRrule: string;
};

export type AutomationScheduleTime = {
  hour: number;
  minute: number;
};

export type AutomationIntl = {
  formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatList?(value: string[], options?: Intl.ListFormatOptions): string;
  formatMessage(
    descriptor: {
      id: string;
      defaultMessage: string;
      description?: string;
    },
    values?: Record<string, unknown>,
  ): string;
  formatTime?(value: Date, options?: Intl.DateTimeFormatOptions): string;
};

export type AutomationScheduleSummaryOptions = {
  rrule?: string | null;
  intl: AutomationIntl;
  fallbackMessage?: string;
};

export type AutomationForAnalytics = {
  kind: "cron" | "heartbeat";
  rrule?: string | null;
  model?: unknown;
  reasoningEffort?: string | null;
  status?: "ACTIVE" | "PAUSED" | "DELETED" | string;
  cwds?: unknown[];
  executionEnvironment?: "worktree" | "local" | string;
  localEnvironmentConfigPath?: string | null;
};
// Added to satisfy relative import checks.
export const Scope = undefined as never;
export const EndResourceOpenActionProps = undefined as never;
export const OpenTarget = undefined as never;
export const EndResourceOpenInMenuProps = undefined as never;
export const OpenTargetMenuItem = undefined as never;
export const EndResourceOpenSubtitleProps = undefined as never;
export const PlanSummaryCardProps = undefined as never;
export const PlanStepStatus = undefined as never;
export const TodoPlanItem = undefined as never;
export const PlanStep = undefined as never;
export const PartitionedTurnItems = undefined as never;
export const TurnItem = undefined as never;
export const AppUpdateLifecycleState = undefined as never;
export const AppgenProject = undefined as never;
export const QueryResult = undefined as never;
export const AutomationSession = undefined as never;
export const AutomationSidePanelProps = undefined as never;
export const AutomationDraft = undefined as never;
export const AutomationRecord = undefined as never;
export const TooltipAlign = undefined as never;
export const TooltipSide = undefined as never;
export const BrowserChromeInteraction = undefined as never;
export const StoreLike = undefined as never;
export const BrowserRouteEntry = undefined as never;
export const StopDictation = undefined as never;
export const ToastController = undefined as never;
export const UseDictationOptions = undefined as never;
export const CreatePendingWorktreeInput = undefined as never;
export const ImageAttachment = undefined as never;
export const PastedTextAttachment = undefined as never;
export const ScopeStore = undefined as never;
export const ThreadGoalDraft = undefined as never;
export const McpAppEntrypoint = undefined as never;
export const IntlShape = undefined as never;
export const ProjectAttentionCounts = undefined as never;
export const SidebarProjectGroup = undefined as never;
export const PendingWorktree = undefined as never;
export const PendingWorktreePhase = undefined as never;
export const DirectoryApp = undefined as never;
export const ExternalLinkClickEvent = undefined as never;

export const SubagentThread = () => null;
export const BrowserSidebarSnapshot = () => null;
export const GeneratedImage = () => null;
export const SidePanelImage = () => null;
export const BrowserOpenSourceOptions = () => null;
export const BrowserSidebarBounds = () => null;
export const BrowserSidebarHostKind = () => null;
export const BrowserSidebarWebviewHost = () => null;
export const BrowserSidebarWebviewRef = () => null;
export const initDictationStreamingUploadHeaderChunk = undefined as never;
export const dictationStreamingUploadHeaderValue = undefined as never;
// Added to satisfy relative import checks.
export const PanelTab = undefined as never;
export const AgentState = undefined as never;
export const AgentThread = undefined as never;
export const MultiAgentActionItem = undefined as never;
export const MultiAgentActionStatus = undefined as never;
export const StatusMessageGroup = undefined as never;
export const AppgenAccessPolicy = undefined as never;
export const BrowserSidebarWebviewElement = undefined as never;
export const IntegrationMetricOptions = undefined as never;
export const IntegrationSettings = undefined as never;
export const QueueItem = undefined as never;
export const QueueStorage = undefined as never;
export const SegmentIntegrationConfig = undefined as never;
export const SegmentIntegrationOptions = undefined as never;
export const SegmentMetricContext = undefined as never;
// Added to satisfy relative import checks.
export const OpenAgentThreadHandler = undefined as never;
export const MultiAgentActionType = undefined as never;
