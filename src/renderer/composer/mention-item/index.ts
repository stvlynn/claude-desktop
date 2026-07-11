// @ts-nocheck
// Restored from ref/webview/assets/mention-item-Cs3Au6lU.js
// Minimal boundary stub for composer mention-item.
// TODO: promote the full restored/composer/mention-item/ implementation once
// its remaining dependency (../../plugins/skill-utils) is unblocked.

export function createPluginMentionHref(pluginId: string): string {
  return `plugin://${pluginId.trim()}`;
}

export function createPluginMentionItem(
  plugin: Record<string, unknown>,
  _labels?: unknown,
): { path: string | null } {
  return { path: null };
}

export function getPluginMentionIcon(
  _plugin: Record<string, unknown>,
): string | null {
  return null;
}

export function isAppMentionHref(href: string): boolean {
  return href.startsWith("app://");
}

export function isPluginMentionHref(href: string): boolean {
  return href.startsWith("plugin://");
}

export function stripMentionTriggerSyntax(text: string): string {
  return text.replace(/^[@#]/u, "");
}
