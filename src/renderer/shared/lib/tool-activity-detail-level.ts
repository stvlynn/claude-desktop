// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Detail-level predicate for deciding whether grouped tool activity should show.

type ConversationDetailLevel = "STEPS_PROSE" | string;

interface ToolActivityItem {
  type: string;
}

interface ConversationActivityUnit {
  kind: string;
  entry?: { kind: string; item?: ToolActivityItem };
}

export function shouldShowToolActivityForDetailLevel(
  conversationDetailLevel: ConversationDetailLevel,
  units: ConversationActivityUnit[],
): boolean {
  if (conversationDetailLevel !== "STEPS_PROSE") return true;
  return units.some((unit) => {
    if (unit.kind !== "entry" || unit.entry == null) return true;
    if (unit.entry.kind !== "item" || unit.entry.item == null) return true;
    return (
      unit.entry.item.type !== "automatic-approval-review" &&
      unit.entry.item.type !== "exec" &&
      unit.entry.item.type !== "patch"
    );
  });
}
