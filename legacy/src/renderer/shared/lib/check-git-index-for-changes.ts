// Restored from ref/webview/assets/check-git-index-for-changes-adW1BmYE.js
// Cross-component signal for requesting a git index change check.

const CHECK_GIT_INDEX_FOR_CHANGES_EVENT = "codex-check-git-index-for-changes";

export function requestGitIndexChangeCheck(): void {
  window.dispatchEvent(new CustomEvent(CHECK_GIT_INDEX_FOR_CHANGES_EVENT));
}

export function onGitIndexChangeCheckRequested(
  callback: () => void,
): () => void {
  const listener = () => {
    callback();
  };
  window.addEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
  return () => {
    window.removeEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
  };
}

export const initCheckGitIndexForChangesChunk = undefined as never;
