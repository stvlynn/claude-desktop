// @ts-nocheck
// Restored from ref/webview/assets/copy-button-CRbl2OgP.js
// copy-button-CRbl2OgP chunk restored from the Codex webview bundle.

import type { MouseEvent, ReactNode } from "react";
import { useCallback, useState } from "react";
import { classNames } from "../lib/class-names";
import { useIsMounted } from "../lib/use-is-mounted";
import { CheckMdIcon } from "../icons/check-md-icon";
import { CopyIcon } from "../icons/copy-icon";
import { Button } from "./main-button";
import { Tooltip } from "./tooltip-b";

type CopyButtonProps = {
  ariaLabel?: string;
  buttonText?: boolean | ReactNode;
  className?: string;
  iconClassName?: string;
  iconOnly?: boolean;
  onCopy: (event: MouseEvent<HTMLButtonElement>) => void;
};

function CopyButton({
  buttonText,
  iconClassName = "icon-sm",
  onCopy,
  ariaLabel,
  className,
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const isMounted = useIsMounted();

  const handleCopy = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onCopy(event);
      setCopied(true);
      setTimeout(() => {
        if (isMounted()) setCopied(false);
      }, 2000);
    },
    [isMounted, onCopy],
  );

  const copiedLabel = "Copied";

  let visibleText = copied ? copiedLabel : buttonText;
  if (visibleText === true) {
    visibleText = "Copy";
  }

  const tooltipContent = copied
    ? copiedLabel
    : (buttonText ?? "Copy");

  const buttonAriaLabel = copied
    ? "Copied"
    : (ariaLabel ?? "Copy");

  const icon = copied ? (
    <CheckMdIcon className={iconClassName} />
  ) : (
    <CopyIcon className={iconClassName} />
  );

  return (
    <Tooltip tooltipContent={tooltipContent} disabled={!iconOnly}>
      <Button
        className={classNames(copied && "text-token-foreground", className)}
        aria-label={buttonAriaLabel}
        color="ghost"
        size="icon"
        onClick={copied ? undefined : handleCopy}
      >
        {icon}
        {!iconOnly && visibleText}
      </Button>
    </Tooltip>
  );
}

export { CopyButton };

export const useIsMounted = () => {};
