// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Minimal stub for conversational-onboarding task registry.

export type {
  ConversationalOnboardingMessagingTask,
  ConversationalOnboardingPluginName,
  ConversationalOnboardingTaskBase,
  ConversationalOnboardingTaskDefinition,
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskOption,
} from "./conversational-onboarding-task-definitions";

import { conversationalOnboardingTaskDefinitions } from "./conversational-onboarding-task-definitions";
import type {
  ConversationalOnboardingPluginName,
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskOption,
} from "./conversational-onboarding-task-definitions";

export function getConversationalOnboardingTaskPluginName(
  task: ConversationalOnboardingTaskId,
  accountType: string,
): ConversationalOnboardingPluginName | null {
  const definition = conversationalOnboardingTaskDefinitions[task];
  return "getPluginName" in definition
    ? definition.getPluginName(accountType)
    : null;
}

export function getConversationalOnboardingTaskOption(
  task: ConversationalOnboardingTaskId,
): ConversationalOnboardingTaskOption {
  return conversationalOnboardingTaskDefinitions[task].option;
}

export function isConversationalOnboardingMessagingTask(
  task: ConversationalOnboardingTaskId,
): boolean {
  return "getPluginName" in conversationalOnboardingTaskDefinitions[task];
}

export function initConversationalOnboardingTaskRegistryChunk(): void {
  void conversationalOnboardingTaskDefinitions;
}
