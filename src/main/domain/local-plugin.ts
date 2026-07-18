// Restored from ref/.vite/build/index.js

export type InstalledPluginRecord = {
  scope: "user" | "local" | "project";
  installPath: string;
  version?: string;
  installedAt?: string;
  lastUpdated?: string;
};

export type LocalPluginContext = {
  mode?: "cowork" | "ccd";
  workspacePath?: string;
  settingsLevel?: "user" | "local" | "project";
};

export function splitPluginId(pluginId: string): [string, string] | null {
  const separator = pluginId.lastIndexOf("@");
  if (separator <= 0 || separator === pluginId.length - 1) return null;
  return [pluginId.slice(0, separator), pluginId.slice(separator + 1)];
}
