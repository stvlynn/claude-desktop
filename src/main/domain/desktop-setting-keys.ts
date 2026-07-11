// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Key accessors for desktop global-state and setting definitions.

import {
  appearanceSettingDefinitions,
  desktopGlobalStateKeys,
  desktopPreferenceSettingDefinitions,
  persistedAtomSettingDefinitions,
} from "./desktop-setting-definitions";

export function getDesktopFirstSeenAtMsKey(): string {
  return desktopGlobalStateKeys.DESKTOP_FIRST_SEEN_AT_MS;
}

export function getWorkspaceRootOptionsKey(): string {
  return desktopGlobalStateKeys.WORKSPACE_ROOT_OPTIONS;
}

export function getAppearanceThemeSettingKey(): string {
  return appearanceSettingDefinitions.theme.key;
}

export function getRunCodexInWslSettingKey(): string {
  return desktopPreferenceSettingDefinitions.runCodexInWsl.key;
}

export function getFollowUpQueueModeSettingKey(): string {
  return desktopPreferenceSettingDefinitions.followUpQueueMode.key;
}

export function getComposerEnterBehaviorSettingKey(): string {
  return desktopPreferenceSettingDefinitions.composerEnterBehavior.key;
}

export function getKeepRemoteControlAwakeSettingKey(): string {
  return desktopPreferenceSettingDefinitions.keepRemoteControlAwakeWhilePluggedIn
    .key;
}

export function getPreventSleepWhileRunningSettingKey(): string {
  return desktopPreferenceSettingDefinitions.preventSleepWhileRunning.key;
}

export function getDefaultServiceTierSettingKey(): string {
  return persistedAtomSettingDefinitions.defaultServiceTier.key;
}
