// Restored from ref/webview/assets/progress-step-row-CUPOU6py.js
// progress-step-row-CUPOU6py chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { classNames } from "../lib/class-names";
import { CheckCircleIcon } from "../icons/check-circle-icon";
import { UnselectedCircleIcon } from "../icons/unselected-circle-icon";
import { XCircleIcon } from "../icons/x-circle-icon";
import { Spinner } from "./spinner";
type ProgressStepStatus = "running" | "done" | "failed" | "pending";
type ProgressStepRowProps = {
  children?: ReactNode;
  compact?: boolean;
  status: ProgressStepStatus;
};
function ProgressStepRow({
  children,
  compact = false,
  status,
}: ProgressStepRowProps) {
  const labelClassName = classNames(
    compact
      ? "text-size-chat text-token-conversation-summary-leading"
      : "text-base leading-6 tracking-[-0.13px]",
    !compact && {
      "font-medium text-token-foreground": status === "running",
      "text-token-foreground": status === "done",
      "text-token-editor-error-foreground": status === "failed",
      "text-token-description-foreground": status === "pending",
    },
  );
  return (
    <div className={classNames("flex items-center", compact ? "gap-2" : "gap-3")}>
      <ProgressStepStatusIcon status={status} />
      <div className={labelClassName}>
        <span className="sr-only">
          <ProgressStepScreenReaderStatus status={status} />
        </span>
        {children}
      </div>
    </div>
  );
}
function ProgressStepStatusIcon({ status }: { status: ProgressStepStatus }) {
  let icon: ReactNode;
  switch (status) {
    case "running":
      icon = <Spinner className="icon-xs" />;
      break;
    case "done":
      icon = <CheckCircleIcon className="icon-xs" />;
      break;
    case "failed":
      icon = (
        <XCircleIcon className="icon-xs text-token-editor-error-foreground" />
      );
      break;
    case "pending":
      icon = <UnselectedCircleIcon className="icon-xs" />;
      break;
  }
  return (
    <span
      aria-hidden={true}
      className="flex h-4 w-4 shrink-0 items-center justify-center text-token-text-secondary"
    >
      {icon}
    </span>
  );
}
function ProgressStepScreenReaderStatus({
  status,
}: {
  status: ProgressStepStatus;
}) {
  switch (status) {
    case "running":
      return <span>In progress:</span>;
    case "done":
      return <span>Completed:</span>;
    case "failed":
      return <span>Failed:</span>;
    case "pending":
      return <span>Pending:</span>;
  }
}
export { ProgressStepRow };
