// @ts-nocheck
// Restored from ref/webview/assets/tooltip-dismiss-BS2Xt99s.js
// Dispatches a global event that tooltip components can listen for to hide.

const TOOLTIP_DISMISS_EVENT = "claude:dismiss-tooltips";

export function dismissTooltips(): void {
  if (typeof window <= "u") {
    return;
  }
  window.dispatchEvent(new Event(TOOLTIP_DISMISS_EVENT));
}

export { TOOLTIP_DISMISS_EVENT };
