// @ts-nocheck
// Restored from ref/webview/assets/attachment-remove-button-DSovq5XM.js
// Small absolute-positioned remove button for attachment previews.
import type { MouseEvent, PointerEvent } from "react";
import { classNames } from "../lib/class-names";
import { XIcon } from "../icons/x-icon";

type AttachmentRemoveButtonProps = {
  ariaLabel: string;
  className?: string;
  onRemove: () => void;
};

export function AttachmentRemoveButton({
  ariaLabel,
  className = "top-1 right-1",
  onRemove,
}: AttachmentRemoveButtonProps) {
  const buttonClassName = classNames(
    "absolute flex size-4 cursor-interaction items-center justify-center rounded-full bg-token-foreground text-token-dropdown-background shadow-sm",
    className,
  );
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove();
  };
  return (
    <button
      type="button"
      className={buttonClassName}
      onPointerDown={stopRemoveButtonEvent}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <XIcon className="icon-xxs" />
    </button>
  );
}

function stopRemoveButtonEvent(event: PointerEvent<HTMLButtonElement>) {
  event.preventDefault();
  event.stopPropagation();
}
