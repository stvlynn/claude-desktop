// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// Thread handoff operation ID helpers.

export function createThreadHandoffOperationId(): string {
  return Math.random().toString(36).slice(2);
}

export function initThreadHandoffOperationIdsChunk(): void {}
