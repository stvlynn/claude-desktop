// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Recent local-environment action list helpers.

export type RecentLocalEnvironmentActionsByKey = Record<
  string,
  readonly string[]
>;

export function getRecentLocalEnvironmentActions(
  actionsByKey: RecentLocalEnvironmentActionsByKey,
  actionKey: string | null | undefined,
): readonly string[] {
  return actionKey != null ? (actionsByKey[actionKey] ?? []) : [];
}

export function prependRecentLocalEnvironmentAction(
  actionsByKey: RecentLocalEnvironmentActionsByKey,
  actionKey: string | null | undefined,
  actionName: string,
): RecentLocalEnvironmentActionsByKey {
  if (actionKey == null) return actionsByKey;
  let trimmedActionName = actionName.trim();
  if (trimmedActionName.length === 0) return actionsByKey;
  let recentActionNames = [
    trimmedActionName,
    ...(actionsByKey[actionKey] ?? []).filter(
      (recentActionName) => recentActionName !== trimmedActionName,
    ),
  ];
  return {
    ...actionsByKey,
    [actionKey]: recentActionNames,
  };
}
