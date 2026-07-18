// Restored from ref/.vite/build/src-CoIhwwHr.js
// Aggregated desktop setting definition registry.

import { appearanceSettingDefinitions } from "./appearance-settings";
import { desktopPreferenceSettingDefinitions } from "./desktop-preferences";
import { persistedAtomSettingDefinitions } from "./persisted-atom-settings";
import {
  browserSettingDefinitions,
  gitSettingDefinitions,
  worktreeSettingDefinitions,
} from "./workflow-settings";
import type { DesktopSettingDefinition } from "./desktop-setting-schema";
import {
  desktopGlobalStateKeys,
  getDefaultGlobalStateValue,
} from "./global-state";

export { desktopGlobalStateKeys, getDefaultGlobalStateValue };
export {
  appearanceSettingDefinitions,
  desktopPreferenceSettingDefinitions,
  persistedAtomSettingDefinitions,
};

export function getDesktopSettingDefinitions(): DesktopSettingDefinition[] {
  return desktopSettingDefinitions;
}

export function isJsonConfigValue(value: unknown): boolean {
  if (
    value == null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return true;
  }
  if (Array.isArray(value)) return value.every(isJsonConfigValue);
  if (typeof value !== "object" || value == null) return false;
  return Object.values(value).every(isJsonConfigValue);
}

export const desktopSettingDefinitions: DesktopSettingDefinition[] = [
  ...Object.values(appearanceSettingDefinitions),
  ...Object.values(desktopPreferenceSettingDefinitions),
  ...Object.values(persistedAtomSettingDefinitions),
  ...Object.values(gitSettingDefinitions),
  ...Object.values(browserSettingDefinitions),
  ...Object.values(worktreeSettingDefinitions),
];
