// Restored from ref/webview/assets/sectioned-page-OCNQDwEC.js
// sectioned-page-OCNQDwEC chunk restored from the Codex webview bundle.
import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
type SectionedPageNavOrientation = "vertical" | "horizontal";
type SectionedPageNavSection = {
  id: string;
  title: ReactNode;
};
type SectionedPageProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  contentInnerClassName?: string;
  disableScrollFade?: boolean;
  header?: ReactNode;
  navAccessory?: ReactNode;
  navFooter?: ReactNode;
  navOrientation?: SectionedPageNavOrientation;
  navSections?: SectionedPageNavSection[];
  onSelectNavSection?: (sectionId: string) => void;
  sections: SectionedPageNavSection[];
  showNav?: boolean;
};
type SectionedPageSectionProps = {
  action?: ReactNode;
  children?: ReactNode;
  id: string;
  showDivider?: boolean;
  stickyHeader?: boolean;
  title: ReactNode;
};
type SectionRegistry = Record<string, HTMLElement | null | undefined>;
type SectionRegistryContextValue = {
  setSectionElement: (sectionId: string, element: HTMLElement | null) => void;
};
const ACTIVE_SECTION_OFFSET_PX = 96;
const SectionRegistryContext =
  React.createContext<SectionRegistryContextValue | null>(null);
function SectionedPageSection({
  id,
  title,
  action,
  stickyHeader = false,
  showDivider = true,
  children,
}: SectionedPageSectionProps) {
  const registry = React.useContext(SectionRegistryContext);
  const setSectionRef = React.useCallback(
    (element: HTMLElement | null) => {
      registry?.setSectionElement(id, element);
    },
    [id, registry],
  );
  return (
    <section className="flex flex-col gap-4" id={id} ref={setSectionRef}>
      <div
        className={clsx(
          "flex items-center justify-between gap-3 [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)] pr-0.5 pb-2",
          stickyHeader &&
            "relative sticky top-0 z-10 bg-token-main-surface-primary after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-token-main-surface-primary after:content-['']",
          showDivider && "border-b border-token-border-light",
        )}
      >
        <div className="text-lg leading-6 font-medium text-token-foreground">
          {title}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
function SectionedPage({
  ariaLabel,
  sections,
  children,
  className,
  contentInnerClassName,
  disableScrollFade = false,
  header,
  navOrientation = "vertical",
  navAccessory,
  navFooter,
  navSections,
  onSelectNavSection,
  showNav = true,
}: SectionedPageProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [scrollContainer, setScrollContainer] =
    React.useState<HTMLDivElement | null>(null);
  const setScrollContainerRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (scrollContainerRef.current !== element) {
        scrollContainerRef.current = element;
        setScrollContainer(element);
      }
    },
    [],
  );
  const sectionIds = sections.map(getSectionId);
  const { activeSectionId, scrollToSection, setSectionElement } =
    useSectionedPageNavigationState({
      container: scrollContainer,
      sectionIds,
    });
  const visibleNavSections = navSections ?? sections;
  const shouldShowNav = showNav && visibleNavSections.length > 0;
  return (
    <div
      className={clsx(
        "flex min-h-0 w-full flex-1 flex-col gap-8 [--sectioned-page-leading-inset:0.5rem]",
        className,
      )}
    >
      {header == null ? null : (
        <SectionedPageHeader>{header}</SectionedPageHeader>
      )}
      <div
        className={clsx(
          shouldShowNav
            ? navOrientation === "vertical"
              ? "flex min-h-0 w-full flex-1 flex-col gap-8 lg:grid lg:grid-cols-[theme(spacing.32)_minmax(0,1fr)] lg:items-start lg:gap-10"
              : "flex min-h-0 w-full flex-1 flex-col gap-8"
            : "flex min-h-0 w-full flex-1 flex-col",
        )}
      >
        {shouldShowNav ? (
          <SectionedPageNav
            activeSectionId={activeSectionId}
            accessory={navAccessory}
            ariaLabel={ariaLabel}
            footer={navFooter}
            orientation={navOrientation}
            onSelectSection={onSelectNavSection ?? scrollToSection}
            sections={visibleNavSections}
          />
        ) : null}
        <SectionRegistryContext.Provider
          value={{
            setSectionElement,
          }}
        >
          <div
            className={clsx(
              "relative min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable] lg:h-full",
              !disableScrollFade &&
                "vertical-scroll-fade-mask [--edge-fade-distance:1rem]",
            )}
            ref={setScrollContainerRef}
          >
            <div
              className={clsx(
                "mx-auto w-full max-w-[var(--thread-content-max-width)]",
                contentInnerClassName,
              )}
            >
              {children}
            </div>
          </div>
        </SectionRegistryContext.Provider>
      </div>
    </div>
  );
}
function useSectionedPageNavigationState({
  container,
  sectionIds,
}: {
  container: HTMLElement | null;
  sectionIds: string[];
}) {
  const sectionElementsRef = React.useRef<SectionRegistry>({});
  const activeSectionId = useActiveSectionId({
    container,
    sectionElementsRef,
    sectionIds,
  });
  const setSectionElement = React.useCallback(
    (sectionId: string, element: HTMLElement | null) => {
      if (element == null) {
        delete sectionElementsRef.current[sectionId];
        return;
      }
      sectionElementsRef.current[sectionId] = element;
    },
    [],
  );
  const scrollToSection = React.useCallback((sectionId: string) => {
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
  const subscribe = React.useCallback(
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
        for (const sectionId of sectionIds) {
          const element = sectionElementsRef.current[sectionId];
          if (element != null) resizeObserver.observe(element);
        }
      }
      return () => {
        container.removeEventListener("scroll", handleChange);
        resizeObserver?.disconnect();
      };
    },
    [container, sectionElementsRef, sectionIds],
  );
  const getSnapshot = React.useCallback(() => {
    if (sectionIds.length === 0) return null;
    if (container == null) return sectionIds[0];
    const activeTop =
      container.getBoundingClientRect().top + ACTIVE_SECTION_OFFSET_PX;
    let activeSectionId = sectionIds[0];
    for (const sectionId of sectionIds) {
      const element = sectionElementsRef.current[sectionId];
      if (element == null) continue;
      if (element.getBoundingClientRect().top <= activeTop) {
        activeSectionId = sectionId;
      } else {
        break;
      }
    }
    return activeSectionId;
  }, [container, sectionElementsRef, sectionIds]);
  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
function SectionedPageHeader({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-1 px-panel pt-panel">
      {children}
    </div>
  );
}
function SectionedPageNav({
  activeSectionId,
  accessory,
  ariaLabel,
  footer,
  orientation,
  onSelectSection,
  sections,
}: {
  activeSectionId: string | null;
  accessory?: ReactNode;
  ariaLabel?: string;
  footer?: ReactNode;
  orientation: SectionedPageNavOrientation;
  onSelectSection: (sectionId: string) => void;
  sections: SectionedPageNavSection[];
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className={
        orientation === "vertical" ? "hidden lg:block lg:self-start" : "w-full"
      }
    >
      {orientation === "vertical" ? (
        <div className="flex flex-col gap-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={clsx(
                "text-left text-lg leading-6 transition-colors",
                activeSectionId === section.id
                  ? "text-token-foreground"
                  : "text-token-text-secondary hover:text-token-foreground",
              )}
              onClick={(event) => {
                event.preventDefault();
                onSelectSection(section.id);
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col gap-8">
          <div className="mx-auto flex w-full flex-col gap-8 px-panel lg:max-w-none">
            {footer}
            <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color={activeSectionId === section.id ? "secondary" : "ghost"}
                  size="toolbar"
                  onClick={() => {
                    onSelectSection(section.id);
                  }}
                  aria-pressed={activeSectionId === section.id}
                >
                  {section.title}
                </Button>
              ))}
              {accessory == null ? null : (
                <div className="flex items-center gap-3">
                  <div className="h-6 w-px bg-token-border-light" />
                  {accessory}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
function getSectionId(section: SectionedPageNavSection) {
  return section.id;
}
function noop() {}
export { SectionedPageSection, SectionedPage };
