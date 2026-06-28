// Restored from ref/webview/assets/thread-resource-card-1r6t8CDV.js
// thread-resource-card-1r6t8CDV chunk restored from the Codex webview bundle.
import type { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import { ChevronIcon } from "../icons/chevron-icon";
type ThreadResourceCardPadding = "default" | "compact" | "extraCompact";
type ThreadResourceCardPillSize = "default" | "medium" | "toolbar";
type ThreadResourceCardProps = {
  as?: "div" | "span";
  children?: ReactNode;
  className?: string;
};
type ThreadResourceCardHeaderProps = {
  className?: string;
  icon?: ReactNode;
  padding?: ThreadResourceCardPadding;
  reserveTrailingSpace?: boolean;
  subtitle?: ReactNode;
  title?: ReactNode;
  titleTooltip?: string;
  trailing?: ReactNode;
};
type ThreadResourceCardPillProps = {
  label?: ReactNode;
  matchDropdownWidth?: boolean;
  matchDropdownWidthLabel?: ReactNode;
  showChevron?: boolean;
  size?: ThreadResourceCardPillSize;
};
type ThreadResourceCardExpandButtonProps = {
  children?: ReactNode;
  isExpanded: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const HEADER_PADDING_CLASS_NAMES = {
  default: "px-4 py-3",
  compact: "p-2",
  extraCompact: "p-1.5",
} as const;
const HEADER_RESERVED_TRAILING_PADDING_CLASS_NAMES = {
  default: "py-3 pr-10 pl-4",
  compact: "py-2 pr-8 pl-2",
  extraCompact: "py-1.5 pr-10 pl-1.5",
} as const;
const PILL_TEXT_CLASS_NAMES = {
  default: "text-size-chat-sm",
  medium: "text-base",
  toolbar: "h-token-button-composer text-base leading-[18px]",
} as const;
const PILL_PADDING_CLASS_NAMES = {
  default: "px-2 py-1",
  medium: "px-4 py-1.5",
  toolbar: "px-2 py-0",
} as const;
function ThreadResourceCardHeader({
  className,
  icon,
  padding = "default",
  reserveTrailingSpace,
  subtitle,
  title,
  titleTooltip,
  trailing,
}: ThreadResourceCardHeaderProps) {
  const paddingClassName =
    reserveTrailingSpace !== undefined && reserveTrailingSpace
      ? HEADER_RESERVED_TRAILING_PADDING_CLASS_NAMES[padding]
      : HEADER_PADDING_CLASS_NAMES[padding];
  return (
    <span
      className={clsx(
        "flex min-w-0 items-center gap-2.5 text-left",
        paddingClassName,
        className,
      )}
    >
      {icon}
      <span className="flex min-w-0 flex-1 flex-col">
        <span
          className="text-size-chat truncate font-medium text-token-foreground"
          title={titleTooltip}
        >
          {title}
        </span>
        {subtitle == null ? null : (
          <span className="text-size-chat-sm truncate text-token-text-secondary">
            {subtitle}
          </span>
        )}
      </span>
      {trailing}
    </span>
  );
}
function ThreadResourceCardExpandButton({
  children,
  isExpanded,
  onClick,
}: ThreadResourceCardExpandButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      className="text-size-chat flex h-10 cursor-interaction items-center justify-center gap-1 text-token-text-tertiary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
      onClick={onClick}
    >
      {children}
      <ChevronIcon className={clsx("icon-xs", isExpanded && "rotate-180")} />
    </button>
  );
}
function ThreadResourceCardPill({
  label,
  matchDropdownWidth = false,
  matchDropdownWidthLabel,
  size = "default",
  showChevron = false,
}: ThreadResourceCardPillProps) {
  return (
    <span
      className={clsx(
        "flex shrink-0 items-center overflow-hidden rounded-lg border border-token-border text-token-foreground",
        PILL_TEXT_CLASS_NAMES[size],
      )}
    >
      {matchDropdownWidth ? (
        <span className={clsx("grid", PILL_PADDING_CLASS_NAMES[size])}>
          <span
            aria-hidden={true}
            className="invisible col-start-1 row-start-1 flex items-center gap-1"
          >
            {matchDropdownWidthLabel ?? label}
            <ChevronIcon className="icon-2xs shrink-0" />
          </span>
          <span className="col-start-1 row-start-1 flex items-center justify-center">
            {label}
          </span>
        </span>
      ) : (
        <span
          className={clsx(
            "flex items-center font-medium",
            PILL_PADDING_CLASS_NAMES[size],
          )}
        >
          {label}
        </span>
      )}
      {showChevron ? (
        <span className="flex self-stretch border-l border-token-border px-1.5">
          <ChevronIcon className="icon-2xs self-center text-token-text-tertiary" />
        </span>
      ) : null}
    </span>
  );
}
function ThreadResourceCard({
  as = "div",
  children,
  className,
}: ThreadResourceCardProps) {
  const resolvedClassName = clsx(
    "flex max-w-full flex-col overflow-hidden rounded-lg border border-token-border bg-token-dropdown-background/50 text-token-foreground shadow-sm extension:bg-token-input-background/50",
    className,
  );
  if (as === "span") {
    return <span className={resolvedClassName}>{children}</span>;
  }
  return <div className={resolvedClassName}>{children}</div>;
}
export {
  ThreadResourceCardHeader,
  ThreadResourceCardExpandButton,
  ThreadResourceCardPill,
  ThreadResourceCard,
};
