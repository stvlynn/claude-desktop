// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Environment action state, commands, and shared toolbar icons.
import { createAppScopeSignal, appScopeRoot } from "../boundaries/app-scope";
import { ThreeDotsIcon as MoreHorizontalIcon } from "../icons/three-dots-icon";
import { ENVIRONMENT_ACTION_COMMAND_IDS } from "../lib/electron-menu-shortcuts/index";
import { useLocalEnvironmentSelection } from "../../features/environments/local-environment-selection/use-local-environment-selection";
import type { UseLocalEnvironmentSelectionResult } from "../../features/environments/local-environment-selection/types";
import { appLogger as logger } from "./app-logger";

export const LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS =
  ENVIRONMENT_ACTION_COMMAND_IDS as readonly string[];
export const localEnvironmentActionShortcutSignal = createAppScopeSignal<
  string | null
>(appScopeRoot, null);

export function useLocalEnvironmentSelectionState(options: {
  hostId: string;
  workspaceRoot: string | null | undefined;
}): UseLocalEnvironmentSelectionResult {
  return useLocalEnvironmentSelection(options);
}

export function refreshWorktreeEnvironmentConfigValue(
  _scope: unknown,
  _gitAvailability: unknown,
  _hostConfig: unknown,
  _value: string,
  _source: string,
): void {}
export function setActiveSettingsHost(_scope: unknown, _hostId: string): void {}
export function initLocalEnvironmentSelectionRuntime(): void {}
export function initMoreHorizontalIcon(): void {}
export function initConversationRemoteStateHelpers(): void {}
export function initProfileGitSummaryRuntime(): void {}

export { logger, MoreHorizontalIcon };
