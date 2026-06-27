// Restored from ref/webview/assets/pull-request-check-rows-Q1OJv6O3.js
// Compact action button used by pull request side-panel rows.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  BP as classNames,
  DN as Button,
  ON as initButtonComponentPrimitives,
  VP as initClassNameRuntime,
  hM as initTooltipRuntime,
  pM as Tooltip,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

export type PullRequestInlineActionButtonProps = {
  ariaLabel?: string;
  children: ReactNode;
  color?: "ghostMuted" | "secondary" | string;
  disabled?: boolean;
  inset?: boolean;
  tooltipContent?: ReactNode;
  onClick?: () => void;
};

export function PullRequestInlineActionButton({
  ariaLabel,
  children,
  color = "ghostMuted",
  disabled,
  inset,
  tooltipContent,
  onClick,
}: PullRequestInlineActionButtonProps) {
  const className = classNames("inline-flex", !inset && "-me-1.5");
  const button = (
    <span className={className}>
      <Button
        aria-label={ariaLabel}
        className={disabled ? "text-token-text-secondary" : undefined}
        color={disabled ? "ghost" : color}
        disabled={disabled}
        size="toolbar"
        onClick={onClick}
      >
        {children}
      </Button>
    </span>
  );
  return disabled && tooltipContent != null ? (
    <Tooltip tooltipContent={tooltipContent}>{button}</Tooltip>
  ) : (
    button
  );
}

export const initPullRequestInlineActionButtonChunk = once(() => {
  initClassNameRuntime();
  initButtonComponentPrimitives();
  initTooltipRuntime();
});
