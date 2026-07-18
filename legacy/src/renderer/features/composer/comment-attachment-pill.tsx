// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Comment and annotation attachment pills.

import type { ReactNode } from "react";
import { useIntl } from "../../shared/runtime/react-intl";

import { ImagesIcon } from "../../shared/icons/images-icon";
import { PencilIcon } from "../../shared/icons/pencil-icon";
import {
  formatCommentAttachmentKindCount,
  formatRemoveCommentAttachmentLabel,
} from "../../shared/ui/comment-attachment-labels";
import { FileAttachmentPill } from "./file-attachment-pill";
import { MessageSquareIcon } from "./message-square-icon";
import { PopoverAttachmentPill } from "./popover-attachment-pill";
import type {
  CommentAttachmentKind,
  IconComponent,
} from "../../shared/lib/attachment-pill-types";

export interface CommentAttachmentPillProps {
  count: number;
  attachmentKind: CommentAttachmentKind;
  icon?: "design-tweak" | "image-comment";
  onRemove?: () => void;
  tooltipContent?: ReactNode;
}

export function CommentAttachmentPill({
  count,
  attachmentKind,
  icon,
  onRemove,
  tooltipContent,
}: CommentAttachmentPillProps) {
  const intl = useIntl();
  const label = formatCommentAttachmentKindCount(intl, attachmentKind, count);
  let pillIcon: IconComponent = MessageSquareIcon;
  switch (icon) {
    case "design-tweak":
      pillIcon = PencilIcon;
      break;
    case "image-comment":
      pillIcon = ImagesIcon;
      break;
  }
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : formatRemoveCommentAttachmentLabel(intl, attachmentKind);

  if (tooltipContent == null) {
    return (
      <FileAttachmentPill
        filename={label}
        Icon={pillIcon}
        onRemove={onRemove}
        onRemoveAriaLabel={removeAriaLabel}
      />
    );
  }
  return (
    <PopoverAttachmentPill
      Icon={pillIcon}
      label={label}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      popoverContent={tooltipContent}
    />
  );
}

export function initCommentAttachmentPillChunk(): void {}
