// Restored from ref/webview/assets/segmented-toggle-WuxzI5uh.js
// Segmented toggle control built on top of the shared Button and Tooltip.
import type { ComponentProps, ReactNode } from "react";
import { classNames } from "../lib/class-names";
import { Button } from "./main-button";
import { Tooltip } from "./tooltip-b";

export type SegmentedToggleOption = {
  id: string;
  label: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  tooltipContent?: ReactNode;
};

export type SegmentedToggleProps = {
  options?: SegmentedToggleOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
  buttonClassName?: string;
  fullWidth?: boolean;
  uniform?: boolean;
  selectedColor?: ComponentProps<typeof Button>["color"];
  unselectedColor?: ComponentProps<typeof Button>["color"];
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function SegmentedToggle({
  options = [],
  selectedId,
  onSelect,
  size = "default",
  className,
  buttonClassName,
  fullWidth = false,
  uniform,
  selectedColor = "secondary",
  unselectedColor = "ghost",
  ariaLabel,
  ariaLabelledBy,
}: SegmentedToggleProps) {
  const shouldUseUniformButtons =
    uniform ?? (size === "icon" && options.length > 2);
  return (
    <div
      className={classNames(
        fullWidth ? "flex w-full" : "inline-flex",
        "items-center gap-0.5",
        className,
      )}
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {options.map((option) => {
        const selected = option.id === selectedId;
        const disabled = option.disabled ?? false;
        const button = (
          <Button
            key={option.id}
            color={selected ? selectedColor : unselectedColor}
            size={size}
            onClick={() => {
              if (!disabled) {
                onSelect(option.id);
              }
            }}
            aria-pressed={selected}
            uniform={shouldUseUniformButtons}
            aria-label={option.ariaLabel}
            disabled={disabled}
            className={classNames(
              fullWidth ? "flex-1 justify-center" : undefined,
              buttonClassName,
            )}
          >
            {option.label}
          </Button>
        );
        return option.tooltipContent ? (
          <Tooltip key={option.id} tooltipContent={option.tooltipContent}>
            {button}
          </Tooltip>
        ) : (
          button
        );
      })}
    </div>
  );
}
