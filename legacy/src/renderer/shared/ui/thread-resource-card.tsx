// Restored from ref/webview/assets/thread-resource-card-1r6t8CDV.js
// Shared card primitives for end-of-turn resources and review summaries.

import * as React from "react";

import { classNames } from "../lib/class-names";
import { ChevronIcon } from "../icons/chevron-icon";

export type ThreadResourceCardProps = React.HTMLAttributes<HTMLDivElement>;

export const ThreadResourceCard = React.forwardRef<
  HTMLDivElement,
  ThreadResourceCardProps
>(function ThreadResourceCard({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={classNames(
        "overflow-hidden rounded-xl border border-token-border bg-token-bg-secondary/30",
        className,
      )}
      {...props}
    />
  );
});

export type ThreadResourceCardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  titleTooltip?: string;
  trailing?: React.ReactNode;
};

export function ThreadResourceCardHeader({
  className,
  icon,
  subtitle,
  title,
  titleTooltip,
  trailing,
  ...props
}: ThreadResourceCardHeaderProps) {
  return (
    <div
      className={classNames(
        "flex min-w-0 items-center gap-3 px-3 py-2.5",
        className,
      )}
      {...props}
    >
      {icon == null ? null : <span className="shrink-0">{icon}</span>}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium text-token-foreground" title={titleTooltip}>
          {title}
        </span>
        {subtitle == null ? null : (
          <span className="truncate text-sm text-token-description-foreground">
            {subtitle}
          </span>
        )}
      </span>
      {trailing == null ? null : <span className="shrink-0">{trailing}</span>}
    </div>
  );
}

export type ThreadResourceCardExpandButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isExpanded?: boolean;
  };

export function ThreadResourceCardExpandButton({
  children,
  className,
  isExpanded = false,
  type = "button",
  ...props
}: ThreadResourceCardExpandButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        "flex w-full cursor-interaction items-center justify-center gap-1 px-3 py-2 text-sm text-token-description-foreground hover:bg-token-list-hover-background hover:text-token-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronIcon
        className={classNames(
          "icon-2xs transition-transform",
          isExpanded && "rotate-180",
        )}
      />
    </button>
  );
}

export function ThreadResourceCardPill({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full bg-token-bg-secondary px-2 py-0.5 text-xs text-token-description-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function initThreadResourceCardChunk(): void {}
