// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Boundary stub for avatar overlay pill exports.

export type AvatarOverlayActivityItem = unknown;
export type CompactWaitingRequest = unknown;
export type CompactWaitingRequestAction = unknown;
export type IntlShapeLike = unknown;

export function AvatarOverlayPillDismissButton(_props: unknown): null {
  return null;
}

export function formatWaitingRequestAccessibleLabel(
  _searchText: string,
  _request: unknown,
): string {
  return "";
}

export function getAvatarOverlayActivityStatusConfig(
  _activity: unknown,
): unknown {
  return null;
}

export function getLatestAvatarOverlayActivitySubtitle(
  _item: unknown,
  _intl: unknown,
): string {
  return "";
}

export function getWaitingRequestSearchText(
  _request: unknown,
  _intl: unknown,
): string {
  return "";
}

export function initAvatarOverlayPillChunk(): void {}

// Added to unblock avatar-overlay-page promotion.
export const AVATAR_OVERLAY_MASCOT_ASPECT_RATIO = 1;
export function buildAvatarOverlayPillActivityItems(): unknown[] {
  return [];
}
export function clampAvatarOverlayMascotWidth(_width: number): number {
  return _width;
}
export function createAvatarOverlayMascotWidthStyle(
  _width: number,
): Record<string, string | number> {
  return {};
}
export function getAvatarOverlayPillVisibilityMode(): string {
  return "visible";
}
export function initAvatarOverlayActivityStatusChunk(): void {}
export function initAvatarOverlayMascotWidthChunk(): void {}
export function initAvatarOverlayPillActivityItemsChunk(): void {}
export function initAvatarOverlayPillDismissButtonChunk(): void {}
export function initAvatarOverlayPillEmptyChunk(): void {}
export function initCompactWaitingRequestChunk(): void {}
export function observeElementSize(
  _element: Element,
  _callback: (size: { width: number; height: number }) => void,
): () => void {
  return () => {};
}
export function useAvatarOverlayMascotWidth(): {
  mascotWidth: number;
  setMascotWidth: (width: number) => void;
} {
  return { mascotWidth: 48, setMascotWidth: () => {} };
}
