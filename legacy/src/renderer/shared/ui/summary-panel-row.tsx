// Restored from ref/webview/assets/summary-panel-row-D3U8QDSL.js

import type {
  HTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  PointerEventHandler,
  ReactNode,
  Ref,
} from "react";
import { classNames } from "../lib/class-names";

type AriaExpanded = HTMLAttributes<HTMLDivElement>["aria-expanded"];

type SummaryPanelRowProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "aria-expanded" | "onClick" | "onKeyDown" | "onPointerDown" | "title"
> & {
  "aria-expanded"?: AriaExpanded;
  actions?: ReactNode;
  actionsAlwaysFocusable?: boolean;
  actionsVisible?: boolean;
  ariaExpanded?: AriaExpanded;
  disabled?: boolean;
  density?: "compact" | "comfortable";
  icon?: ReactNode;
  interactive?: boolean;
  label: ReactNode;
  labelClassName?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
  ref?: Ref<HTMLDivElement>;
  title?: string;
  trailing?: ReactNode;
  trailingVisible?: boolean;
};

export function SummaryPanelRow({
  "aria-expanded": ariaExpandedAttribute,
  actions,
  actionsAlwaysFocusable = false,
  actionsVisible = false,
  ariaExpanded,
  className,
  disabled = false,
  density = "compact",
  icon,
  interactive = false,
  label,
  labelClassName = "truncate",
  onClick,
  onKeyDown,
  onPointerDown,
  ref,
  title,
  trailing,
  trailingVisible = false,
  ...rest
}: SummaryPanelRowProps) {
  const hasHandlers =
    onClick != null || onPointerDown != null || onKeyDown != null;
  const isEnabledInteractive = !disabled && hasHandlers;
  const isStyledInteractive = !disabled && (interactive || hasHandlers);
  const densityClassName =
    density === "comfortable" ? "min-h-8 py-1.5" : "h-7 py-1";
  const rootClassName = classNames(
    "group/summary-panel-row relative isolate flex w-full min-w-0 items-center gap-2 rounded-sm border-0 bg-transparent px-0 text-left",
    densityClassName,
    isStyledInteractive
      ? "cursor-interaction text-token-foreground"
      : "text-token-text-secondary",
    isStyledInteractive &&
      "before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-token-list-hover-background",
    disabled && "cursor-not-allowed",
    className,
  );
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!disabled) onKeyDown?.(event);
    if (
      !isEnabledInteractive ||
      onClick == null ||
      event.defaultPrevented ||
      (event.key !== "Enter" && event.key !== " ")
    ) {
      return;
    }
    event.preventDefault();
    event.currentTarget.click();
  };
  return (
    <div
      {...rest}
      aria-disabled={disabled || undefined}
      aria-expanded={ariaExpanded ?? ariaExpandedAttribute}
      className={rootClassName}
      onClick={isEnabledInteractive ? onClick : undefined}
      onKeyDown={handleKeyDown}
      onPointerDown={isEnabledInteractive ? onPointerDown : undefined}
      ref={ref}
      role={hasHandlers ? "button" : undefined}
      tabIndex={isEnabledInteractive ? 0 : undefined}
      title={title}
    >
      {icon}
      <span className="flex min-w-0 flex-1 items-center gap-2">
        <span className={classNames("text-base", labelClassName)}>{label}</span>
        {actions == null ? null : (
          <span
            className={classNames(
              "shrink-0 items-center",
              (actionsVisible || !actionsAlwaysFocusable) && "ms-auto",
              actionsVisible
                ? "flex"
                : actionsAlwaysFocusable
                  ? "pointer-events-none absolute inset-y-0 end-0 flex opacity-0 group-focus-within/summary-panel-row:pointer-events-auto group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:pointer-events-auto group-hover/summary-panel-row:opacity-100"
                  : "hidden group-focus-within/summary-panel-row:flex group-hover/summary-panel-row:flex",
            )}
            onClick={stopMousePropagation}
            onKeyDown={stopKeyboardPropagation}
          >
            {actions}
          </span>
        )}
        {trailing == null ? null : (
          <span
            className={classNames(
              "shrink-0 leading-none opacity-0 group-focus-visible/summary-panel-row:opacity-100 group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:opacity-100",
              (actions == null || !actionsVisible || trailingVisible) &&
                "ms-auto",
              actions != null &&
                !actionsVisible &&
                "group-focus-within/summary-panel-row:ms-0 group-hover/summary-panel-row:ms-0",
              trailingVisible && "opacity-100",
            )}
          >
            {trailing}
          </span>
        )}
      </span>
    </div>
  );
}

function stopKeyboardPropagation(event: KeyboardEvent<HTMLSpanElement>) {
  event.stopPropagation();
}
function stopMousePropagation(event: MouseEvent<HTMLSpanElement>) {
  event.stopPropagation();
}
