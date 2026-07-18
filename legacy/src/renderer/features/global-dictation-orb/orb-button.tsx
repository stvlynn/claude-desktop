// Restored from ref/webview/assets/global-dictation-orb-D5sxKQB_.js
// Floating global dictation orb button.
import type { MouseEventHandler, RefObject } from "react";
import { classNames } from "../../shared/lib/class-names";
import { RegenerateIcon } from "../../shared/icons/regenerate-icon";
import { XIcon } from "../../shared/icons/x-icon";
import { Spinner } from "../../shared/ui/spinner";

type GlobalDictationOrbStatus = "idle" | "listening" | "transcribing" | "error";

type GlobalDictationOrbButtonProps = {
  canRetryError: boolean;
  errorMessage: string | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
  status: GlobalDictationOrbStatus;
  waveformCanvasRef: RefObject<HTMLCanvasElement>;
};

const styles = {
  recordingOrb: "_recordingOrb_1csnm_1",
};

export function GlobalDictationOrbButton({
  canRetryError,
  errorMessage,
  onClick,
  status,
  waveformCanvasRef,
}: GlobalDictationOrbButtonProps) {
  const isTranscribing = status === "transcribing";
  const canRetry = status === "error" && canRetryError;
  const ariaLabel = getAriaLabel({
    canRetry,
    errorMessage,
    status,
  });
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classNames(
        "no-drag pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25",
        status === "listening"
          ? classNames("cursor-interaction text-white", styles.recordingOrb)
          : "bg-token-dropdown-background text-token-text-secondary",
        status === "error" && "cursor-interaction",
      )}
      disabled={isTranscribing}
      onClick={onClick}
    >
      {status === "listening" ? (
        <canvas
          ref={waveformCanvasRef}
          className="size-10 text-white"
          aria-hidden="true"
        />
      ) : null}
      {isTranscribing ? <Spinner className="icon-sm" /> : null}
      {canRetry ? <RegenerateIcon className="icon-sm" /> : null}
      {status === "error" && !canRetryError ? (
        <XIcon className="icon-sm" />
      ) : null}
      <span className="sr-only">
        {status === "listening" ? "Listening" : null}
        {isTranscribing ? "Transcribing" : null}
        {status === "error" && errorMessage != null ? errorMessage : null}
      </span>
    </button>
  );
}

function getAriaLabel({
  canRetry,
  errorMessage,
  status,
}: {
  canRetry: boolean;
  errorMessage: string | null;
  status: GlobalDictationOrbStatus;
}): string {
  if (canRetry) {
    return errorMessage == null
      ? "Retry dictation"
      : `Retry dictation: ${errorMessage}`;
  }
  if (status === "error") {
    return errorMessage == null
      ? "Dismiss dictation"
      : `Dismiss dictation: ${errorMessage}`;
  }
  if (status === "transcribing") {
    return "Transcribing";
  }
  return "Stop dictation";
}
