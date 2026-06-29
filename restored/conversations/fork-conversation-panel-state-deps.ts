// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Panel tab snapshot helpers used when moving or forking conversations.
export {
  $S as rightPanelOpenStateKey,
  AS as focusAreaStateKey,
  B_ as getActiveBrowserTabId,
  Ds as getBrowserTabIdForPanelTab,
  Es as deriveBrowserConversationId,
  ic as getConversationPanelLayoutSnapshot,
  Kv as rightPanelTabsDescriptor,
  mx as isWorkspaceFilePath,
  Rd as terminalSessionSnapshotStore,
  vi as isUncPath,
  vx as normalizeFilesystemPath,
  Wv as bottomPanelTabsDescriptor,
  ws as browserTabIdForConversation,
  Wy as rightPanelFullWidthStateKey,
  Yv as browserTabSnapshotStore,
  ZS as bottomPanelOpenStateKey,
  z_ as getAllBrowserTabIdsForConversation,
  _i as isWindowsStyleAbsolutePath,
} from "../boundaries/current-ref/app-main-current-producer";

export function terminalTabIdForSession(sessionId: unknown): string {
  return `terminal:${String(sessionId)}`;
}
