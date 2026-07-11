// @ts-nocheck
// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js

import { useCallback, useRef, useSyncExternalStore } from "react";
import type { SectionRegistry } from "./types";

const ACTIVE_SECTION_OFFSET_PX = 96;

export function useSectionedPageNavigationState({
  container,
  sectionIds,
}: {
  container: HTMLElement | null;
  sectionIds: string[];
}) {
  const sectionElementsRef = useRef<SectionRegistry>({});
  const activeSectionId = useActiveSectionId({
    container,
    sectionElementsRef,
    sectionIds,
  });
  const setSectionElement = useCallback(
    (sectionId: string, element: HTMLElement | null) => {
      if (element == null) {
        delete sectionElementsRef.current[sectionId];
        return;
      }
      sectionElementsRef.current[sectionId] = element;
    },
    [],
  );
  const scrollToSection = useCallback((sectionId: string) => {
    sectionElementsRef.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  return {
    activeSectionId,
    scrollToSection,
    setSectionElement,
  };
}

function useActiveSectionId({
  container,
  sectionElementsRef,
  sectionIds,
}: {
  container: HTMLElement | null;
  sectionElementsRef: React.RefObject<SectionRegistry>;
  sectionIds: string[];
}) {
  const subscribe = useCallback(
    (notify: () => void) => {
      if (container == null) return noop;
      const handleChange = () => {
        notify();
      };
      container.addEventListener("scroll", handleChange, {
        passive: true,
      });
      const resizeObserver =
        typeof ResizeObserver === "undefined"
          ? null
          : new ResizeObserver(handleChange);
      if (resizeObserver != null) {
        resizeObserver.observe(container);
        const registry = sectionElementsRef.current;
        if (registry != null) {
          for (const sectionId of sectionIds) {
            const element = registry[sectionId];
            if (element != null) resizeObserver.observe(element);
          }
        }
      }
      return () => {
        container.removeEventListener("scroll", handleChange);
        resizeObserver?.disconnect();
      };
    },
    [container, sectionElementsRef, sectionIds],
  );
  const getSnapshot = useCallback(() => {
    if (sectionIds.length === 0) return null;
    if (container == null) return sectionIds[0];
    const activeTop =
      container.getBoundingClientRect().top + ACTIVE_SECTION_OFFSET_PX;
    let activeSectionId = sectionIds[0];
    const registry = sectionElementsRef.current;
    if (registry != null) {
      for (const sectionId of sectionIds) {
        const element = registry[sectionId];
        if (element == null) continue;
        if (element.getBoundingClientRect().top <= activeTop) {
          activeSectionId = sectionId;
        } else {
          break;
        }
      }
    }
    return activeSectionId;
  }, [container, sectionElementsRef, sectionIds]);
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

function noop() {}
