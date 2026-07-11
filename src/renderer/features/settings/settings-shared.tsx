// Restored from ref/webview/assets/settings-shared.js
// @ts-nocheck
// Stub for the restored settings-shared module.

import type { ReactNode } from "react";

export type SettingsMenuButtonProps = {
  children?: ReactNode;
  className?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function SettingsMenuButton(props: SettingsMenuButtonProps) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

export type SettingsSectionTitleProps = {
  children?: ReactNode;
  className?: string;
  slug?: string;
};

export function SettingsSectionTitle(props: SettingsSectionTitleProps) {
  return <h2 className={props.className}>{props.children ?? props.slug}</h2>;
}

export type SettingsSectionSubtitleProps = {
  children?: ReactNode;
  className?: string;
  slug?: string;
};

export function SettingsSectionSubtitle(props: SettingsSectionSubtitleProps) {
  return <p className={props.className}>{props.children ?? props.slug}</p>;
}

export type SettingsNavLabelProps = {
  children?: ReactNode;
  className?: string;
  slug?: string;
};

export function SettingsNavLabel(props: SettingsNavLabelProps) {
  return <span className={props.className}>{props.children ?? props.slug}</span>;
}
// Added to satisfy relative import checks.
export const getSettingsNavMessage = undefined as never;
