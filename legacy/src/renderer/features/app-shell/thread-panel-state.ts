// Restored from ref/webview/assets/thread-panel-state-_Pmf_86i.js
// Partial stub to unblock thread-find promotion.

export const THREAD_PANEL_IDS = ["right", "bottom"] as const;

export function initThreadPanelStateRuntime(): void {}

export function getThreadPanelController(_panelId: string): unknown {
  return undefined;
}

export function findPanelForTab(_store: unknown, _tabId: string): string | null {
  return null;
}

export function openThreadPanel(_store: unknown, _panelId: string): boolean {
  return false;
}

export function closeThreadPanel(_store: unknown, _panelId: string): void {}

export function activateThreadPanelTab(
  _store: unknown,
  _panelId: string,
  _tabId: string,
): boolean {
  return false;
}
