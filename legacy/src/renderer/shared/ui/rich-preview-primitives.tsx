// Restored from ref/webview/assets/rich-preview-primitives-C3E5AsLr.js
// rich-preview-primitives-C3E5AsLr chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { classNames } from "../lib/class-names";
import { Spinner } from "./spinner";
type RichPreviewClassNameProps = {
  className?: string;
};
type RichPreviewChildrenProps = {
  children?: ReactNode;
};
type RichPreviewMetaTextProps = RichPreviewClassNameProps &
  RichPreviewChildrenProps;
function RichPreviewLoading({ className }: RichPreviewClassNameProps) {
  return (
    <div
      className={classNames(
        "text-token-text-secondary flex items-center gap-2",
        className,
      )}
    >
      <Spinner className="icon-xs text-token-input-placeholder-foreground" />
      <span>Loading preview…</span>
    </div>
  );
}
function RichPreviewMetaText({
  className,
  children,
}: RichPreviewMetaTextProps) {
  return (
    <span className={classNames("text-token-text-secondary text-xs", className)}>
      {children}
    </span>
  );
}
function RichPreviewBody({ children }: RichPreviewChildrenProps) {
  return (
    <div className="flex min-h-40 flex-col">
      <div className="flex flex-1 items-center justify-center overflow-auto p-3 text-sm">
        {children}
      </div>
    </div>
  );
}
export { RichPreviewMetaText, RichPreviewBody, RichPreviewLoading };
