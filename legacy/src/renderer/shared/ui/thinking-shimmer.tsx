// Restored from ref/webview/assets/thinking-shimmer-D6c2nHwp.js

import * as React from "react";
import { classNames } from "../lib/class-names";

const styles = {
  cadencedShimmer: "_cadencedShimmer_18j3y_1",
  cadencedShimmerSweep: "_cadencedShimmerSweep_18j3y_12",
  cadencedShimmerHighlight: "_cadencedShimmerHighlight_18j3y_37",
  cadencedShimmerActive: "_cadencedShimmerActive_18j3y_46",
  cadencedLoadingShimmerSweep: "_cadencedLoadingShimmerSweep_18j3y_1",
  cadencedLoadingShimmerHighlight: "_cadencedLoadingShimmerHighlight_18j3y_1",
};

const CADENCED_SHIMMER_ACTIVE_MS = 1000;
const CADENCED_SHIMMER_INTERVAL_MS = 4000;
const CADENCED_SHIMMER_INITIAL_DELAY_MS = 600;
const CADENCED_SHIMMER_VARIANT = "cadenced_legacy";
const THINKING_SHIMMER_EXPERIMENT_ID = "1585730870";

type ThinkingShimmerProps = React.HTMLAttributes<HTMLSpanElement> & {
  active?: boolean;
};

type ThinkingShimmerMessageProps = Omit<ThinkingShimmerProps, "children"> & {
  message?: React.ReactNode;
};

function ThinkingShimmer({
  active,
  className,
  children,
  ...rest
}: ThinkingShimmerProps) {
  if (active !== undefined && !active) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    );
  }
  return (
    <CadencedThinkingShimmer className={className} {...rest}>
      {children}
    </CadencedThinkingShimmer>
  );
}

function CadencedThinkingShimmer({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  // The original used a Statsig experiment to toggle the cadenced variant.
  // In the restored source we default to the legacy shimmer behavior; the
  // cadenced animation code is kept as a stable no-op fallback.
  const useCadencedShimmer = false;
  const shimmerRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (
      !useCadencedShimmer ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const shimmerElement = shimmerRef.current;
    if (shimmerElement == null) return;
    let activeTimeout: number | undefined;
    const clearActiveTimeout = () => {
      if (activeTimeout != null) {
        window.clearTimeout(activeTimeout);
        activeTimeout = undefined;
      }
    };
    const triggerShimmer = () => {
      clearActiveTimeout();
      shimmerElement.classList.remove(styles.cadencedShimmerActive);
      shimmerElement.classList.add(styles.cadencedShimmerActive);
      activeTimeout = window.setTimeout(() => {
        shimmerElement.classList.remove(styles.cadencedShimmerActive);
        activeTimeout = undefined;
      }, CADENCED_SHIMMER_ACTIVE_MS);
    };
    let interval: number | undefined;
    const initialTimeout = window.setTimeout(() => {
      triggerShimmer();
      interval = window.setInterval(
        triggerShimmer,
        CADENCED_SHIMMER_INTERVAL_MS,
      );
    }, CADENCED_SHIMMER_INITIAL_DELAY_MS);
    return () => {
      clearActiveTimeout();
      window.clearTimeout(initialTimeout);
      if (interval != null) window.clearInterval(interval);
      shimmerElement.classList.remove(styles.cadencedShimmerActive);
    };
  }, [useCadencedShimmer]);

  const cadencedSweep = useCadencedShimmer ? (
    <span aria-hidden={true} className={styles.cadencedShimmerSweep}>
      <span className={styles.cadencedShimmerHighlight}>{children}</span>
    </span>
  ) : null;

  return (
    <span
      ref={useCadencedShimmer ? shimmerRef : undefined}
      className={classNames(
        "loading-shimmer-pure-text",
        useCadencedShimmer && styles.cadencedShimmer,
        className,
      )}
      {...rest}
    >
      {children}
      {cadencedSweep}
    </span>
  );
}

function ThinkingShimmerMessage({
  className,
  message,
  ...rest
}: ThinkingShimmerMessageProps) {
  return (
    <ThinkingShimmer
      className={classNames(
        "text-size-chat leading-[calc(var(--codex-chat-font-size)_+_8px)] select-none truncate",
        className,
      )}
      {...rest}
    >
      {message ?? "Thinking"}
    </ThinkingShimmer>
  );
}

const ShimmerText = ThinkingShimmer;

export function initThinkingShimmerChunk(): void {}

export { ShimmerText, ThinkingShimmerMessage, ThinkingShimmer };
