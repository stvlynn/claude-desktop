// Restored from ref/.vite/build/index.pre.js

import path from "node:path";
import { app } from "electron";
import * as Sentry from "@sentry/electron/main";
import type { ClaudeDesktopConfiguration } from "../domain/claude-startup";

const DESKTOP_SENTRY_DSN =
  "https://2f98127cbffe4740b1f767a2de77d23b@o1158394.ingest.us.sentry.io/4507368973008896";

function scrubText(value: string): string {
  const home = app.getPath("home");
  const appPath = app.getAppPath();
  return value
    .replaceAll(appPath, "app://")
    .replaceAll(home, "<home>")
    .replace(/\bhttps?:\/\/\S+/gi, "<url>")
    .replace(/([/\\]+(?:Users|home)[/\\]+)[^/\\\n]+/gi, "$1<user>")
    .replace(/\b([A-Za-z]):([\\/])/g, "<drv>:$2")
    .replace(/\\\\[^\\]+\\[^\\\s'\",:()]+/g, "<unc>");
}

function scrubUnknown(value: unknown): unknown {
  if (typeof value === "string") return scrubText(value);
  if (Array.isArray(value)) return value.map(scrubUnknown);
  if (typeof value !== "object" || value == null) return value;
  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, scrubUnknown(entry)]),
  );
}

export function initializeDesktopSentry({
  configuration,
  deploymentMode,
  installId,
}: {
  configuration: ClaudeDesktopConfiguration | null;
  deploymentMode: "1p" | "3p";
  installId: string;
}): void {
  if (configuration?.telemetry?.disableEssential || process.env.CI) return;

  Sentry.init({
    dsn: DESKTOP_SENTRY_DSN,
    integrations(defaultIntegrations) {
      const enabledDefaults = app.commandLine.hasSwitch("disable-gpu")
        ? defaultIntegrations.filter(
            (integration) => integration.name.toLowerCase() !== "gpucontext",
          )
        : defaultIntegrations;
      return [
        ...enabledDefaults,
        Sentry.childProcessIntegration({ events: false }),
        Sentry.extraErrorDataIntegration(),
      ];
    },
    initialScope: {
      user: { id: installId },
      tags: { deployment_mode: deploymentMode },
    },
    sendDefaultPii: false,
    beforeSend(event) {
      return scrubUnknown(event) as typeof event;
    },
    beforeSendTransaction(event) {
      return scrubUnknown(event) as typeof event;
    },
    beforeBreadcrumb(breadcrumb) {
      if (breadcrumb.category === "console" && breadcrumb.level === "debug") {
        return null;
      }
      const scrubbed = scrubUnknown(breadcrumb) as typeof breadcrumb;
      if (
        scrubbed.category &&
        new Set(["http", "fetch", "xhr", "electron.net"]).has(
          scrubbed.category,
        ) &&
        scrubbed.data
      ) {
        delete scrubbed.data["http.query"];
        delete scrubbed.data["http.fragment"];
      }
      return scrubbed;
    },
  });
}

export function getDesktopInstallIdPath(): string {
  return path.resolve(app.getPath("userData"), "ant-did");
}
