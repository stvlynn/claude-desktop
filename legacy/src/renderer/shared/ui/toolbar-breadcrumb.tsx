// Restored from ref/webview/assets/toolbar-breadcrumb-Z_0PUIuH.js
// Ancestor and current-page breadcrumb rendering for toolbars.
import { Fragment } from "react";
import type { ReactNode } from "react";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { once } from "../lib/once";
import { Button } from "./main-button";

type ToolbarBreadcrumbAncestor = {
  id: string;
  label: ReactNode;
  onClick: () => void;
};

type ToolbarBreadcrumbProps = {
  ancestors: ToolbarBreadcrumbAncestor[];
  current?: ReactNode | null;
};

export const initToolbarBreadcrumbChunk = once(() => {});

export function ToolbarBreadcrumb({
  ancestors,
  current,
}: ToolbarBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex min-w-0 items-center gap-1 text-base text-token-description-foreground"
    >
      {ancestors.map((ancestor, index) => (
        <Fragment key={ancestor.id}>
          {index > 0 ? (
            <ChevronRightIcon aria-hidden={true} className="icon-xs shrink-0" />
          ) : null}
          <Button
            className="min-w-0"
            color="ghost"
            size="toolbar"
            onClick={ancestor.onClick}
          >
            <span className="min-w-0 truncate">{ancestor.label}</span>
          </Button>
        </Fragment>
      ))}
      {current == null ? null : (
        <>
          {ancestors.length > 0 ? (
            <ChevronRightIcon aria-hidden={true} className="icon-xs shrink-0" />
          ) : null}
          <span
            aria-current="page"
            className="flex h-token-button-composer min-w-0 items-center truncate px-2 text-token-foreground"
          >
            {current}
          </span>
        </>
      )}
    </nav>
  );
}
