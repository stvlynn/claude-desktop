// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~appearance-settings~general-settings-C3J7WwqO.js
// External agent import shared layout and icon primitives.
import type { ReactNode, SVGProps } from "react";

import { codexAppGaLogo } from "../../utils/codex-app-ga-logo";

export const EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME =
  "h-[18px] w-[18px] rounded-[3px] border-[1px]";

export const CODEX_APP_GA_LOGO_URL = codexAppGaLogo;

type CheckedState = boolean | "indeterminate";

type SelectableRowProps = {
  checkboxClassName?: string;
  checkboxId?: string;
  checked?: CheckedState;
  className?: string;
  control?: ReactNode;
  controlPlacement?: "left" | "right";
  description?: ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  label: ReactNode;
  labelClassName?: string;
  leadingContent?: ReactNode;
  onCheckedChange?: (checked: CheckedState) => void;
  trailingClassName?: string;
  trailingContent?: ReactNode;
  trailingControl?: ReactNode;
};

type ImportLayoutProps = {
  children?: ReactNode;
  fullBleed?: boolean;
  hideHeader?: boolean;
  showBrandIcon?: boolean;
};

type ScrollableListProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
};

type ImportHeroProps = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  textClassName?: string;
  title: ReactNode;
  titleClassName?: string;
};

function joinClassNames(
  ...classNames: readonly (false | null | string | undefined)[]
): string {
  return classNames.filter(Boolean).join(" ");
}

export function OnboardingImportLayout({
  children,
  fullBleed = false,
  hideHeader = false,
  showBrandIcon = false,
}: ImportLayoutProps): JSX.Element {
  const shouldShowDragRegion = !hideHeader && !showBrandIcon;
  const contentClassName = fullBleed
    ? "fixed inset-0"
    : joinClassNames(
        "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
        shouldShowDragRegion ? "top-toolbar-sm pt-2" : "top-0 pt-8",
      );

  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
      {shouldShowDragRegion ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
      ) : null}
      {showBrandIcon ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none">
          <ExternalAgentImportBrandIcon
            appBrand="codex"
            className="pointer-events-none size-6 text-token-foreground"
          />
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

export function ExternalAgentImportScrollableList({
  ariaLabel,
  children,
  className,
}: ScrollableListProps): JSX.Element {
  return (
    <div
      aria-label={ariaLabel}
      className={joinClassNames(
        "flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4",
        className,
      )}
      role="list"
    >
      {children}
    </div>
  );
}

export function ExternalAgentImportSelectableRow({
  checkboxClassName = EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME,
  checkboxId,
  checked,
  className,
  control,
  controlPlacement = "left",
  description,
  descriptionClassName,
  disabled = false,
  label,
  labelClassName,
  leadingContent,
  onCheckedChange,
  trailingClassName,
  trailingContent,
  trailingControl,
}: SelectableRowProps): JSX.Element {
  const generatedControl =
    control ??
    (checkboxId == null || checked == null || onCheckedChange == null ? null : (
      <input
        aria-checked={checked === "indeterminate" ? "mixed" : checked}
        checked={checked === true}
        className={checkboxClassName}
        disabled={disabled}
        id={checkboxId}
        onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        type="checkbox"
      />
    ));

  const labelFor = generatedControl == null ? undefined : checkboxId;
  const leftControl =
    controlPlacement === "left" ? <div>{generatedControl}</div> : null;
  const rightControl =
    controlPlacement === "right" ? <div>{generatedControl}</div> : null;

  return (
    <div
      className={joinClassNames(
        "relative flex items-start gap-2 last:border-b-0",
        className,
      )}
      role="listitem"
    >
      {leftControl}
      {leadingContent == null ? null : <div>{leadingContent}</div>}
      <label
        className="flex min-w-0 flex-1 items-start gap-2 text-left"
        htmlFor={labelFor}
      >
        <div className="min-w-0 flex-1">
          <div
            className={joinClassNames(
              "truncate text-base leading-5 text-token-foreground",
              labelClassName,
            )}
          >
            {label}
          </div>
          {description == null ? null : (
            <div
              className={joinClassNames(
                "truncate text-xs leading-4 text-token-text-secondary",
                descriptionClassName,
              )}
            >
              {description}
            </div>
          )}
        </div>
        {trailingContent == null ? null : (
          <span
            className={joinClassNames(
              "max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground",
              trailingClassName,
            )}
          >
            {trailingContent}
          </span>
        )}
      </label>
      {trailingControl == null ? null : <div>{trailingControl}</div>}
      {rightControl}
    </div>
  );
}

export function ChatGptAgentBrandIcon(
  iconProps: SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      fill="none"
      height={36}
      viewBox="0 0 36 36"
      width={36}
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
    >
      <path
        d="M13.8 13.15V9.76c0-.29.11-.5.36-.64l6.82-3.93a6.34 6.34 0 0 1 3.17-.78c4.29 0 6.99 3.32 6.99 6.85 0 .25 0 .54-.04.82l-7.06-4.14c-.43-.25-.86-.25-1.28 0L13.8 13.15Zm15.92 13.2v-8.1c0-.5-.21-.86-.64-1.11l-8.96-5.21 2.93-1.67c.25-.15.46-.15.71 0l6.82 3.92a6.93 6.93 0 0 1 3.28 5.92 6.69 6.69 0 0 1-4.14 6.25ZM18 22.85l-4.19-2.35v-5L18 13.15l4.19 2.35v5L18 22.85Zm2.69 12.99a8.25 8.25 0 0 1-6.24-2.57 9.3 9.3 0 0 1-2.82.46c-4.78 0-8.92-3.82-8.92-8.92 0-.75.11-1.5.29-2.25A8.87 8.87 0 0 1 0 15.9c0-3.82 2.57-7.57 6.56-8.6C7.39 3.23 10.99.16 15.31.16a8.77 8.77 0 0 1 6.24 2.57c.93-.32 1.86-.46 2.82-.46 4.78 0 8.92 3.82 8.92 8.92 0 .75-.11 1.5-.29 2.25A8.85 8.85 0 0 1 36 20.1c0 3.82-2.57 7.56-6.56 8.6a8.89 8.89 0 0 1-8.75 7.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ExternalAgentImportBrandIcon({
  appBrand,
  className,
}: {
  appBrand?: string;
  className?: string;
}): JSX.Element {
  return appBrand === "chatgpt" ? (
    <ChatGptAgentBrandIcon aria-hidden="true" className={className} />
  ) : (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      src={CODEX_APP_GA_LOGO_URL}
    />
  );
}

export function ExternalAgentImportHero({
  children,
  className,
  icon,
  subtitle,
  subtitleClassName,
  textClassName,
  title,
  titleClassName,
}: ImportHeroProps): JSX.Element {
  return (
    <div
      className={joinClassNames(
        "flex w-full flex-col items-center gap-6",
        className,
      )}
    >
      {icon ?? null}
      <div
        className={joinClassNames(
          "flex w-full flex-col items-center text-center",
          textClassName,
        )}
      >
        <span
          className={joinClassNames(
            "text-heading-lg font-semibold text-token-foreground",
            titleClassName,
          )}
        >
          {title}
        </span>
        {subtitle == null ? null : (
          <span
            className={joinClassNames(
              "text-lg leading-6 text-token-description-foreground",
              subtitleClassName,
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export function initExternalAgentImportBrandIconChunk(): void {}

export function initChatGptAgentBrandIconChunk(): void {}

export function initExternalAgentImportDialogChunk(): void {}

export function initExternalAgentImportLogoAssetChunk(): void {}
