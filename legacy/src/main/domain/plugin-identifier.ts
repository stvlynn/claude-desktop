// Restored from ref/.vite/build/src-CoIhwwHr.js
// Plugin identifier parsing and permission constants.

export const pluginManagePermission = "manage";

const pluginIdPattern =
  /^(plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/;

export function parsePluginIdentifier(pluginName: string): string | null {
  return pluginIdPattern.test(pluginName) ? pluginName : null;
}
