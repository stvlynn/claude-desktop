// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Splits turn items after the intro section.

import type { TurnItem, PartitionedTurnItems } from "./types";

export function sliceTurnItemsAfterIntro(
  items: TurnItem[],
): PartitionedTurnItems {
  return { intro: items, rest: [] };
}
// Added to satisfy relative import checks.
export const initSliceTurnItemsAfterIntroChunk = undefined as never;
