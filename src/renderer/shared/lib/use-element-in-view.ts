// @ts-nocheck
// Restored from ref/webview/assets/use-element-in-view-lTZiz79I.js
// Also matches ref/webview/assets/use-element-in-view-BYpNnWHn.js.

import { useSyncExternalStore } from "react";

export type UseElementInViewOptions = {
  container: Element | null | undefined;
  target: Element | null | undefined;
};

const noopSubscribe = (): void => {};

export function useElementInView({
  container,
  target,
}: UseElementInViewOptions): boolean {
  const subscribe = (onStoreChange: () => void) => {
    if (!container || !target) return noopSubscribe;
    const notify = () => onStoreChange();
    container.addEventListener("scroll", notify, {
      passive: true,
    });
    const resizeObserver =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(notify);
    resizeObserver?.observe(container);
    resizeObserver?.observe(target);
    return () => {
      container.removeEventListener("scroll", notify);
      resizeObserver?.disconnect();
    };
  };
  const getSnapshot = () => {
    if (!container || !target) return true;
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return (
      targetRect.bottom > containerRect.top &&
      targetRect.top < containerRect.bottom
    );
  };
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function initUseElementInViewChunk(): void {
  // no-op chunk initializer for restored consumers
}
