// Restored from ref/webview/assets/settings-back-route-BfYwS6rz.js
// settings-back-route-BfYwS6rz chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../utils/animations";
export interface SettingsNavSectionProps {
  children: ReactNode;
  className?: string;
  collapsed?: boolean | null;
  title?: ReactNode;
  titleActions?: ReactNode;
  titleClassName?: string;
  titleRowClassName?: string;
}
export function SettingsNavSection({
  children,
  className,
  collapsed,
  title,
  titleActions,
  titleClassName,
  titleRowClassName,
}: SettingsNavSectionProps) {
  const sectionClassName = clsx(
    "flex flex-col",
    collapsed == null && "gap-1",
    className,
  );
  const titleRow =
    title == null ? null : (
      <div
        className={clsx(
          "flex items-center justify-between gap-2",
          titleRowClassName ?? "pr-0.5 pl-2",
        )}
      >
        <div
          className={clsx(
            "min-w-0 flex-1",
            titleClassName ??
              "text-base text-token-input-placeholder-foreground opacity-75",
          )}
        >
          {title}
        </div>
        {titleActions == null ? null : (
          <div className="shrink-0">{titleActions}</div>
        )}
      </div>
    );
  const content =
    collapsed == null ? (
      <div className="flex flex-col gap-px">{children}</div>
    ) : (
      <AnimatePresence initial={false}>
        {collapsed ? null : (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transitionEnd: {
                overflow: "visible",
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              overflow: "hidden",
            }}
            transition={animations}
            className="overflow-hidden"
          >
            <div className={clsx("flex flex-col gap-px", title && "pt-1")}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  return (
    <div className={sectionClassName}>
      {titleRow}
      {content}
    </div>
  );
}
