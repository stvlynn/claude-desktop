// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Minimal stub for conversational-onboarding task definitions.

export type ConversationalOnboardingTaskId =
  | "desktop_note"
  | "csv_chart"
  | "hold_next_free_hour"
  | "send_message_to_self";

export type ConversationalOnboardingPluginName = "slack" | "teams";

export interface ConversationalOnboardingTaskOption {
  Icon: React.ComponentType<{ className?: string }>;
  label: { id: string; defaultMessage: string };
}

export interface ConversationalOnboardingTaskBase {
  option: ConversationalOnboardingTaskOption;
  View: React.ComponentType<Record<string, unknown>>;
}

export interface ConversationalOnboardingMessagingTask
  extends ConversationalOnboardingTaskBase {
  getPluginName: (accountType: string) => ConversationalOnboardingPluginName | null;
}

export type ConversationalOnboardingTaskDefinition =
  | ConversationalOnboardingTaskBase
  | ConversationalOnboardingMessagingTask;

export const conversationalOnboardingTaskDefinitions: Record<
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskDefinition
> = {
  desktop_note: {
    option: { Icon: () => null, label: { id: "", defaultMessage: "" } },
    View: () => null,
  },
  csv_chart: {
    option: { Icon: () => null, label: { id: "", defaultMessage: "" } },
    View: () => null,
  },
  hold_next_free_hour: {
    option: { Icon: () => null, label: { id: "", defaultMessage: "" } },
    View: () => null,
  },
  send_message_to_self: {
    option: { Icon: () => null, label: { id: "", defaultMessage: "" } },
    View: () => null,
    getPluginName: () => null,
  },
};
