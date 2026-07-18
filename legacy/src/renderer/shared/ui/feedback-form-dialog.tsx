// Restored from ref/webview/assets/feedback-form-dialog-U7w-wHRu.js
// Feedback form dialog restored from the Claude webview bundle.
import React, {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { classNames } from "../lib/class-names";
import { CheckMdIcon } from "../icons/check-md-icon";
import { PlusIcon } from "../icons/plus-icon";
import { Button } from "./main-button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "./dialog-layout";

type FeedbackOptionLabel = ReactNode;

type FeedbackOption = {
  id: string;
  label: FeedbackOptionLabel;
};

type FeedbackPayload = {
  details: string;
  selectedOptionId: string;
};

type FeedbackSubmitResult = boolean | void | Promise<boolean | void>;

type FeedbackFormDialogProps = {
  belowFreeformContent?: ReactNode;
  closeOnSubmit?: "after-submit" | "immediate";
  freeformFeedbackRequired?: boolean;
  initialDetails?: string;
  initialSelectedOptionId?: string | null;
  onClose: () => void;
  onOptionSelect?: (payload: FeedbackPayload) => void;
  onSubmit: (payload: FeedbackPayload) => FeedbackSubmitResult;
  options: FeedbackOption[];
};

const messages = {
  title: "Share feedback",
  optionsLabel: "Feedback options",
  submit: "Submit",
  detailsPlaceholder: {
    required: "Share details (required)",
    optional: "Share details (optional)",
  },
} as const;

export function FeedbackFormDialog({
  belowFreeformContent,
  closeOnSubmit = "after-submit",
  freeformFeedbackRequired = false,
  initialDetails = "",
  initialSelectedOptionId,
  onClose,
  onOptionSelect,
  onSubmit,
  options,
}: FeedbackFormDialogProps) {
  const [details, setDetails] = React.useState(initialDetails);
  const [submitting, setSubmitting] = React.useState(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<string | null>(
    initialSelectedOptionId ?? null,
  );
  const trimmedDetails = details.trim();
  const detailsPlaceholder = freeformFeedbackRequired
    ? messages.detailsPlaceholder.required
    : messages.detailsPlaceholder.optional;
  const optionsLabel = messages.optionsLabel;
  const submitDisabled =
    selectedOptionId == null ||
    (freeformFeedbackRequired && trimmedDetails.length === 0);
  const submitFeedback = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedOptionId == null || submitting || submitDisabled) {
      return;
    }
    const payload = {
      selectedOptionId,
      details: trimmedDetails,
    };
    if (closeOnSubmit === "immediate") {
      if (onSubmit(payload) !== false) {
        onClose();
      }
      return;
    }
    setSubmitting(true);
    let shouldClose = false;
    try {
      shouldClose = (await onSubmit(payload)) !== false;
    } finally {
      setSubmitting(false);
    }
    if (shouldClose) {
      onClose();
    }
  };
  const submitOnMetaEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.metaKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };
  return (
    <DialogLayout
      open={true}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
      size="wide"
    >
      <DialogBody as="form" className="gap-2" onSubmit={submitFeedback}>
        <DialogSection>
          <DialogHeader title={messages.title} titleSize="dialog" />
        </DialogSection>
        <DialogSection>
          <div className="gap-3">
            <div
              role="radiogroup"
              aria-label={optionsLabel}
              className="flex flex-wrap gap-2"
            >
              {options.map((option) => {
                const selected = selectedOptionId === option.id;
                const OptionIcon = selected ? CheckMdIcon : PlusIcon;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => {
                      setSelectedOptionId(option.id);
                      onOptionSelect?.({
                        details: trimmedDetails,
                        selectedOptionId: option.id,
                      });
                    }}
                    className={classNames(
                      "border-token-border cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1",
                      "focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-1",
                      selected
                        ? "bg-token-foreground text-token-dropdown-background"
                        : "text-token-foreground hover:bg-token-menu-background/60",
                    )}
                  >
                    <OptionIcon className="icon-xxs" />
                    {option.label}
                  </button>
                );
              })}
            </div>
            <textarea
              autoFocus={true}
              className="min-h-[120px] w-full rounded-2xl border border-token-border px-3 py-2 text-token-input-foreground shadow-sm outline-none focus:ring-1 focus:ring-token-focus-border"
              placeholder={detailsPlaceholder}
              aria-label={detailsPlaceholder}
              value={details}
              onChange={(event) => {
                setDetails(event.target.value);
              }}
              onKeyDown={submitOnMetaEnter}
            />
            {belowFreeformContent}
          </div>
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button
              color="primary"
              disabled={submitDisabled}
              loading={submitting}
              type="submit"
            >
              {messages.submit}
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
// Added to satisfy relative import checks.
export const initFeedbackFormDialogChunk = undefined as never;
