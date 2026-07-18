// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for the native About dialog helpers.

import type {
  BrowserWindow,
  BrowserWindowConstructorOptions,
  NativeImage,
} from "electron";
import type { BuildFlavorValue, RuntimeAppBrand } from "../domain/app-brand";

export type NativeMessageDescriptor = {
  messageId: string;
  defaultMessage: string;
  values?: Record<string, unknown>;
};

export type NativeMessageFormatter = {
  formatMessage(message: NativeMessageDescriptor): string;
};

export type AboutDialogIcons = {
  htmlIconDataUrl: string | null;
  windowIcon: NativeImage;
};

export type AboutDialogHtmlOptions = {
  appDisplayName: string;
  buildInfoLabel: string;
  buildInfoText: string;
  iconDataUrl: string | null;
  isDark: boolean;
  okLabel: string | null;
  title: string;
};

export type LoadAboutDialogIconOptions = {
  appBrand?: RuntimeAppBrand;
  buildFlavor: BuildFlavorValue;
  macAppBundlePath?: string | null;
  platform?: NodeJS.Platform;
  resourcesPath?: string;
};

export type ShowAboutDialogOptions = LoadAboutDialogIconOptions & {
  browserWindowOptions?: Partial<BrowserWindowConstructorOptions>;
  formatBuildFlavorVersionSuffix?: (
    buildFlavor: BuildFlavorValue,
  ) => string | null;
  formatter?: NativeMessageFormatter;
  parent?: BrowserWindow | null;
};
