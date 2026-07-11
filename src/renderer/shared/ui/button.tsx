// @ts-nocheck
// Restored from ref/.vite/renderer/about_window/assets/AboutWindow-DJTf96rn.js

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";
import { classNames } from "../lib/class-names";

export type ButtonVariant =
  "primary" | "secondary" | "flat" | "ghost" | "danger";

export type ButtonSize =
  | "default"
  | "sm"
  | "lg"
  | "icon"
  | "icon_xs"
  | "icon_sm"
  | "icon_lg"
  | "inline"
  | "toolbar"
  | "unset";

type SharedButtonProps = {
  append?: ReactNode;
  loading?: boolean;
  prepend?: ReactNode;
  rounded?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type AnchorButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onLinkClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    onLinkClick?: never;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const buttonVariantClassNames: Record<ButtonVariant, string> = {
  danger:
    "bg-danger-200 text-oncolor-100 font-sans font-medium transition hover:scale-y-[1.015] hover:scale-x-[1.005] hover:opacity-95",
  flat: "bg-brand-000 text-oncolor-100 font-sans font-medium transition-colors hover:bg-brand-200",
  ghost:
    "text-text-300 border-transparent transition font-sans duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100",
  primary:
    "bg-text-000 text-bg-000 relative overflow-hidden font-medium font-sans transition-transform will-change-transform ease-[cubic-bezier(0.165,0.85,0.45,1)] duration-150 hover:scale-y-[1.015] hover:scale-x-[1.005] backface-hidden after:absolute after:inset-0 after:bg-[radial-gradient(at_bottom,hsla(var(--bg-000)/20%),hsla(var(--bg-000)/0%))] after:opacity-0 after:transition after:duration-200 after:translate-y-2 hover:after:opacity-100 hover:after:translate-y-0",
  secondary:
    "text-text-000 border-0.5 border-border-300 relative overflow-hidden font-sans font-medium transition duration-100 hover:border-border-300/0 bg-bg-300/0 hover:bg-bg-400 backface-hidden",
};

function getButtonSizeClassName(
  size: ButtonSize,
  hasPrepend: boolean,
  hasAppend: boolean,
) {
  let className = {
    default:
      "h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap text-sm",
    icon: "h-9 w-9 rounded-md active:scale-95 shrink-0",
    icon_lg: "h-11 w-11 rounded-[0.6rem] active:scale-95",
    icon_sm: "h-8 w-8 rounded-md active:scale-95",
    icon_xs: "h-6 w-6 rounded-md active:scale-95",
    inline: "px-0.5 rounded-[0.25rem]",
    lg: "h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",
    sm: "h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",
    toolbar: "h-8 px-2 rounded-md text-xs active:scale-[0.985] whitespace-nowrap",
    unset: "",
  }[size];

  if (hasPrepend) {
    if (size === "default")
      className = className.replace("px-4", "pl-2 pr-3 gap-1");
    if (size === "lg")
      className = className.replace("px-5", "pl-2.5 pr-3.5 gap-1");
    if (size === "sm")
      className = className.replace("px-3", "pl-2 pr-2.5 gap-1");
  }

  if (hasAppend) {
    if (size === "default")
      className = className.replace("px-4", "pl-3 pr-2 gap-1");
    if (size === "lg")
      className = className.replace("px-5", "pl-3.5 pr-2.5 gap-1");
    if (size === "sm")
      className = className.replace("px-3", "pl-2.5 pr-2 gap-1");
  }

  return className;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      append,
      children,
      className,
      loading,
      prepend,
      rounded,
      size = "default",
      variant = "primary",
      ...props
    },
    ref,
  ) => {
    const content = (
      <>
        {prepend}
        {loading ? <span className="opacity-50">{children}</span> : children}
        {append}
      </>
    );
    const buttonClassName = classNames(
      "inline-flex items-center justify-center relative shrink-0 select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none",
      buttonVariantClassNames[variant],
      getButtonSizeClassName(size, Boolean(prepend), Boolean(append)),
      rounded && "!rounded-full",
      className,
    );

    if ("href" in props && props.href) {
      const { href, onLinkClick, rel, style, target } = props;
      return (
        <a
          href={href}
          target={target || "_self"}
          rel={rel}
          className={buttonClassName}
          aria-label={props["aria-label"]}
          onClick={onLinkClick}
          style={style}
        >
          {content}
        </a>
      );
    }

    const { type = "button", ...buttonProps } = props as NativeButtonProps;

    return (
      <button
        className={buttonClassName}
        ref={ref}
        type={type}
        {...buttonProps}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export function initButtonComponentPrimitives(): void {
  // no-op chunk initializer for restored consumers
}
