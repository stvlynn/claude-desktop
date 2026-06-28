// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import { Badge } from "../../utils/badge";
import { Button } from "../../ui/button";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { PlusIcon } from "../../icons/plus-icon";
import { Tooltip } from "../../ui/tooltip-b";
import type { ComposerContextButtonProps } from "./types";
function preventMouseDownDefault(event: React.MouseEvent) {
  event.preventDefault();
}
function ComposerContextButton({
  disabled = false,
  onOpen,
}: ComposerContextButtonProps) {
  const intl = useIntl();
  const tooltipContent = (
    <div className="flex items-center gap-1">
      <FormattedMessage
        id="composer.contextButton.tooltip"
        defaultMessage="Add files and more"
        description="Tooltip for the button that opens contextual composer suggestions"
      />
      <Badge className="px-1 py-0 text-xs leading-none">
        <FormattedMessage
          id="composer.contextButton.keyboardEquivalent"
          defaultMessage="@"
          description="Keyboard equivalent shown in the contextual composer button tooltip"
        />
      </Badge>
    </div>
  );
  const ariaLabel = intl.formatMessage({
    id: "composer.contextButton.ariaLabel",
    defaultMessage: "Add files and more",
    description:
      "Accessible label for the button that opens contextual composer suggestions",
  });
  return (
    <Tooltip
      tooltipContent={tooltipContent}
      side="top"
      align="center"
      sideOffset={4}
    >
      <Button
        aria-label={ariaLabel}
        color="ghost"
        disabled={disabled}
        size="composer"
        uniform
        onMouseDown={preventMouseDownDefault}
        onClick={onOpen}
      >
        <PlusIcon className="icon-sm" />
      </Button>
    </Tooltip>
  );
}
export { ComposerContextButton };
