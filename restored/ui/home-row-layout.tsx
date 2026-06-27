// Restored from ref/webview/assets/home-row-layout-nv_THLYD.js
// Also matches ref/webview/assets/home-row-layout-DglQhCVZ.js.
// Small layout primitives used by home-page rows.
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { ComposerFooterLabel } from "../composer/composer-footer-dy-rb-fs-kv";
import { once } from "../runtime/commonjs-interop";
type SpanProps = ComponentPropsWithoutRef<"span">;
export const initHomeRowLayoutChunk = once(() => {});
function HomeRowContent({ className, ...spanProps }: SpanProps) {
  return (
    <span
      className={clsx("flex min-w-0 flex-1 items-center gap-1.5", className)}
      {...spanProps}
    />
  );
}
function HomeRowIcon({ className, ...spanProps }: SpanProps) {
  return (
    <span
      className={clsx(
        "flex size-4 shrink-0 items-center justify-center",
        className,
      )}
      {...spanProps}
    />
  );
}
function HomeRowLabel({ className, ...labelProps }: SpanProps) {
  return (
    <ComposerFooterLabel
      collapse="xs"
      className={clsx(
        "min-w-0 flex-1 truncate text-sm leading-[18px]",
        className,
      )}
      {...labelProps}
    />
  );
}
export { HomeRowIcon, HomeRowLabel, HomeRowContent };
