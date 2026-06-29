// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scrolls (and focuses) the DOM node tagged for a local-conversation item id into view.

const CONVERSATION_ITEM_TARGET_ATTRIBUTE =
  "data-local-conversation-item-target-ids";

function findConversationItemElement(itemId: string): Element | null {
  const encodedId = encodeURIComponent(itemId);
  const candidates = document.querySelectorAll(
    `[${CONVERSATION_ITEM_TARGET_ATTRIBUTE}]`,
  );
  for (const candidate of candidates) {
    const ids = (
      candidate.getAttribute(CONVERSATION_ITEM_TARGET_ATTRIBUTE) ?? ""
    ).split(" ");
    if (ids.includes(encodedId)) {
      return candidate;
    }
  }
  return null;
}

export function scrollConversationItemIntoView(
  itemId: string,
  behavior?: ScrollBehavior,
): boolean {
  const element = findConversationItemElement(itemId);
  if (element == null) {
    return false;
  }
  element.scrollIntoView({ block: "center", behavior });
  (element as HTMLElement).focus({ preventScroll: true });
  return true;
}
