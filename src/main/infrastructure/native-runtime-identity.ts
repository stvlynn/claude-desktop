// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Native runtime identity: app brand / display name and native menu locale
// message loader used by the main process.

import * as path from "node:path";
import { app } from "electron";
import { readPackageMetadataField } from "../infrastructure/package-metadata";
import {
  getRuntimeAppBrandDisplayName,
  parseRuntimeAppBrand,
  RuntimeAppBrands,
  type RuntimeAppBrand,
} from "../domain/app-brand";
import {
  NativeIntl,
  NativeIntlLoader,
} from "../infrastructure/desktop-runtime-types";

let configuredNativeIntl: {
  repoRoot: string | null;
  nativeIntl: NativeIntl;
} | null = null;

export async function configureNativeIntl(repoRoot: string): Promise<void> {
  if (configuredNativeIntl?.repoRoot === repoRoot) return;
  try {
    configuredNativeIntl = {
      repoRoot,
      nativeIntl: await NativeIntlMessages.load(repoRoot),
    };
  } catch {
    configuredNativeIntl = {
      repoRoot: null,
      nativeIntl: NativeIntlMessages.createDefault(),
    };
  }
}

export function getNativeIntl(): NativeIntl {
  if (configuredNativeIntl == null) {
    throw new Error("NativeIntl has not been configured.");
  }
  return configuredNativeIntl.nativeIntl;
}

export class NativeIntlMessages {
  constructor(readonly messages: Record<string, string>) {}

  static async load(repoRoot: string): Promise<NativeIntlMessages> {
    const locale = app.getLocale().replace(/_/g, "-");
    const [language] = locale.split("-");
    const localeRoot = app.isPackaged
      ? path.join(app.getAppPath(), "native-menu-locales")
      : path.join(repoRoot, "webview", "src", "locales");
    const candidates = [
      path.join(localeRoot, `${locale}.json`),
      language ? path.join(localeRoot, `${language}.json`) : null,
    ].filter((item): item is string => item != null);
    for (const candidate of candidates) {
      try {
        const fs = await import("node:fs/promises");
        return new NativeIntlMessages(
          JSON.parse(await fs.readFile(candidate, "utf8")),
        );
      } catch {}
    }
    return NativeIntlMessages.createDefault();
  }

  static createDefault(): NativeIntlMessages {
    return new NativeIntlMessages({});
  }

  formatMessage({
    defaultMessage,
    messageId,
    values = {},
  }: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string {
    const template = this.messages[messageId] ?? defaultMessage;
    return template.replace(/\{([^}]+)\}/g, (match, key: string) =>
      values[key] == null ? match : String(values[key]),
    );
  }
}

export function getNativeIntlLoader(): NativeIntlLoader {
  return NativeIntlMessages;
}

export function getRuntimeAppBrand(): RuntimeAppBrand {
  const fromPackage = readPackageMetadataField<RuntimeAppBrand>(
    "codexAppBrand",
    {
      parse: parseRuntimeAppBrand,
    },
  );
  return (
    (fromPackage as RuntimeAppBrand | null) ??
    parseRuntimeAppBrand(process.env.CODEX_APP_BRAND) ??
    RuntimeAppBrands.Codex
  );
}

export function getRuntimeAppName(): string {
  return getRuntimeAppBrandDisplayName(getRuntimeAppBrand()) ?? "Codex";
}
