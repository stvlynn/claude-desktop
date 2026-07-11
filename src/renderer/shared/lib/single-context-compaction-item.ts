// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Extracts the lone context-compaction item from a list of render units, when present.

type ContextCompactionItem = {
  type: "context-compaction";
  completed: boolean;
  [key: string]: unknown;
};

interface RenderUnitEntry {
  kind: string;
  item?: { type: string } & Record<string, unknown>;
}

export function getSingleContextCompactionItem(
  units: readonly RenderUnitEntry[],
): ContextCompactionItem | null {
  if (units.length !== 1) {
    return null;
  }
  const onlyUnit = units[0];
  if (
    onlyUnit == null ||
    onlyUnit.kind !== "item" ||
    onlyUnit.item == null
  ) {
    return null;
  }
  if (onlyUnit.item.type !== "context-compaction") {
    return null;
  }
  return onlyUnit.item as ContextCompactionItem;
}
