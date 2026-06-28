// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
import { HOOK_EVENT_NAMES } from "./constants";
import {
  hookNeedsReview,
  isHookActive,
  normalizeRawHookSource,
  uniqueHooksByKey,
} from "./status";
import type { HookConfigEntry, HookDefinition, HookEventName } from "./types";

function summarizeHooksByEvent(hooks: HookDefinition[]) {
  return HOOK_EVENT_NAMES.map((eventName) => {
    const hooksForEvent = hooks.filter((hook) => hook.eventName === eventName);
    return {
      eventName,
      active: hooksForEvent.filter(isHookActive).length,
      installed: hooksForEvent.length,
      needsReview: hooksForEvent.filter(hookNeedsReview).length,
    };
  });
}

function countHooksNeedingReview(hooks: HookDefinition[]) {
  return hooks.filter(hookNeedsReview).length;
}

function getPluginHooksNeedingReview(
  entries: HookConfigEntry[] | null | undefined,
  plugin:
    | {
        summary: { id: string };
        hooks: Array<{ key: string }>;
      }
    | null
    | undefined,
) {
  if (plugin == null) return [];

  const pluginHookKeys = new Set(plugin.hooks.map((hook) => hook.key));
  return uniqueHooksByKey(
    entries?.flatMap((entry) =>
      entry.hooks.filter(
        (hook) =>
          hook.source === "plugin" &&
          hook.pluginId === plugin.summary.id &&
          pluginHookKeys.has(hook.key) &&
          hookNeedsReview(hook),
      ),
    ) ?? [],
  );
}

function summarizeHookConfigEntryIssues(entry: HookConfigEntry) {
  return {
    issueCount: entry.warnings.length + entry.errors.length,
    needsReview: entry.hooks.filter(hookNeedsReview).length,
  };
}

function getHooksForEvent(hooks: HookDefinition[], eventName: HookEventName) {
  return hooks
    .filter((hook) => hook.eventName === eventName)
    .sort((left, right) =>
      left.displayOrder < right.displayOrder
        ? -1
        : left.displayOrder > right.displayOrder
          ? 1
          : 0,
    );
}

function getCommonHookSourceGroup(sources: string[]) {
  if (sources.length === 0) return null;
  const groupIds = new Set(sources.map(normalizeRawHookSource));
  return groupIds.size === 1 ? (groupIds.values().next().value ?? null) : null;
}

export {
  countHooksNeedingReview,
  getCommonHookSourceGroup,
  getHooksForEvent,
  getPluginHooksNeedingReview,
  summarizeHookConfigEntryIssues,
  summarizeHooksByEvent,
};
