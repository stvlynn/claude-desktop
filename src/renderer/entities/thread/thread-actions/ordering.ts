// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// @ts-nocheck
// Minimal ordering stub for the thread actions cluster.

export function getSidebarThreadEntityIds(_order: unknown): string[] {
  return [];
}

export function getResolvedVisibleThreadOrder(
  _visibleIds: string[],
  _pendingOrder?: unknown,
): string[] {
  return _visibleIds;
}

export function areThreadKeyArraysEqual(
  _a: string[],
  _b: string[],
): boolean {
  if (_a.length !== _b.length) return false;
  return _a.every((value, index) => value === _b[index]);
}

export function getThreadTaskKeys(_tasks: unknown[]): string[] {
  return [];
}

export function getSidebarThreadKeyFromValue(_value: unknown): string | null {
  return null;
}

export function mergeVisibleThreadIdsIntoThreadOrder(
  _order: unknown,
  _visibleIds: string[],
): unknown {
  return _order;
}

export function sortThreadTasksByPinnedOrder(
  _tasks: unknown[],
  _pinnedOrder: string[],
): unknown[] {
  return _tasks;
}

export function getThreadMoveTarget(
  _order: unknown,
  _sourceIndex: number,
  _targetIndex: number,
): unknown {
  return { index: _targetIndex };
}
