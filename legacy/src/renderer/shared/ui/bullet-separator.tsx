// Restored from ref/webview/assets/bullet-separator-BJK3jgEi.js
// bullet-separator-BJK3jgEi chunk restored from the Codex webview bundle.
import { classNames } from "../lib/class-names";

export type BulletSeparatorProps = {
  className?: string;
};

export function BulletSeparator({
  className,
}: BulletSeparatorProps): JSX.Element {
  return (
    <span aria-hidden={true} className={classNames("last:hidden", className)}>
      ·
    </span>
  );
}
