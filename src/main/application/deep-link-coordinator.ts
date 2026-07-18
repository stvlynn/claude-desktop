// Restored from ref/.vite/build/index.js
// Application: parse and coordinate Claude desktop protocol URLs.

import { getRootStructuredLogger } from "../infrastructure/structured-logger";
import type {
  DeepLinkCoordinator,
  DeepLinkCoordinatorOptions,
  DeepLinkRoute,
} from "../infrastructure/desktop-runtime-types";

const CLAUDE_PROTOCOLS = new Set([
  "claude:",
  "claude-dev:",
  "claude-nest:",
  "claude-nest-dev:",
  "claude-nest-prod:",
]);
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_QUERY_LENGTH = 14 * 1024;
const AUTH_QUERY_KEYS = [
  "authed_mcp_server_id",
  "server",
  "step",
  "gcal_success",
  "gmail_success",
  "gdrive_success",
  "github_success",
  "oauth_error",
  "oauth_error_subtype",
  "entra_aadsts_code",
  "entra_trace_id",
  "flow_id",
] as const;
const CLAUDE_AI_PASSTHROUGH_PATHS = new Set([
  "settings",
  "admin-settings",
  "create",
  "tasks",
  "task",
  "space",
  "claude-code-desktop",
  "code",
  "design",
  "cowork",
  "local_sessions",
]);

function appendAuthQuery(
  source: URLSearchParams,
  target: URLSearchParams,
): void {
  for (const key of AUTH_QUERY_KEYS) {
    const value = source.get(key);
    if (value) target.set(key, value);
  }
}

function navigationRoute(
  pathname: string,
  query?: URLSearchParams,
): DeepLinkRoute {
  const search = query?.toString();
  return {
    kind: "navigate",
    path: search ? `${pathname}?${search}` : pathname,
  };
}

function parseCoworkDeepLink(url: URL): DeepLinkRoute | null {
  if (url.pathname === "/shared-artifact") {
    const uuid = url.searchParams.get("uuid");
    return uuid !== null && UUID_PATTERN.test(uuid)
      ? navigationRoute(`/cowork-artifact?shared=${encodeURIComponent(uuid)}`)
      : null;
  }
  if (url.pathname !== "/new") return null;
  const query = new URLSearchParams();
  const prompt = url.searchParams.get("q")?.slice(0, MAX_QUERY_LENGTH);
  if (prompt) query.set("q", prompt);
  const folders = url.searchParams.getAll("folder");
  const files = url.searchParams.getAll("file");
  for (const folder of folders) query.append("folder", folder);
  for (const file of files) query.append("file", file);
  if (folders.length > 0 || files.length > 0) query.set("src", "external");
  return navigationRoute("/task/new", query);
}

function parseCodeDeepLink(url: URL): DeepLinkRoute | null {
  if (url.pathname !== "/new") return null;
  const query = new URLSearchParams();
  const prompt = (
    url.searchParams.get("q") ?? url.searchParams.get("prompt")
  )?.slice(0, MAX_QUERY_LENGTH);
  if (prompt) query.set("q", prompt);
  const folders = url.searchParams.getAll("folder");
  for (const folder of folders) query.append("folder", folder);
  if (folders.length > 0) query.set("src", "external");
  return navigationRoute("/epitaxy", query);
}

function parseClaudeAiDeepLink(url: URL): DeepLinkRoute | null {
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0];
  switch (first) {
    case "magic-link": {
      const hashParts = url.hash.slice(1).split(":");
      if (hashParts.length !== 2 || !hashParts[0] || !hashParts[1]) return null;
      return {
        kind: "authenticatedNavigation",
        anonymousId: url.searchParams.get("anon_id"),
        path: `/magic-link#${hashParts[0]}:${hashParts[1]}`,
      };
    }
    case "new": {
      const query = new URLSearchParams();
      const prompt = url.searchParams.get("q")?.slice(0, MAX_QUERY_LENGTH);
      if (prompt) query.set("q", prompt);
      appendAuthQuery(url.searchParams, query);
      return navigationRoute("/new", query);
    }
    case "sso-callback":
      if (segments.length !== 1) return null;
      return {
        kind: "authenticatedNavigation",
        anonymousId: url.searchParams.get("anon_id"),
        path: `/sso-callback${url.search}`,
        removeAnonymousIdFromQuery: true,
      };
    case "mcp-auth-callback":
      return {
        kind: "handleDeepLink",
        url: `https://claude.ai${url.pathname}${url.search}`,
      };
    case "chat":
      return segments.length === 2 && UUID_PATTERN.test(segments[1] ?? "")
        ? navigationRoute(`/chat/${segments[1]}`)
        : navigationRoute("/recents");
    case "project":
      return segments.length === 2 && UUID_PATTERN.test(segments[1] ?? "")
        ? navigationRoute(`/project/${segments[1]}`)
        : navigationRoute("/projects");
    case "customize": {
      if (
        segments.slice(1).join("/") === "plugins/new" &&
        url.searchParams.has("marketplace")
      ) {
        const query = new URLSearchParams();
        const marketplace = url.searchParams.get("marketplace");
        const plugin = url.searchParams.get("plugin");
        if (marketplace) query.set("marketplace", marketplace);
        if (plugin) query.set("plugin", plugin);
        return navigationRoute("/customize/plugins/new", query);
      }
      return navigationRoute(url.pathname, url.searchParams);
    }
    default:
      if (first && CLAUDE_AI_PASSTHROUGH_PATHS.has(first)) {
        const query = new URLSearchParams();
        appendAuthQuery(url.searchParams, query);
        return navigationRoute(url.pathname, query);
      }
      return {
        kind: "handleDeepLink",
        url: `https://claude.ai${url.pathname}${url.search}${url.hash}`,
      };
  }
}

export function parseClaudeDeepLink(rawUrl: string): DeepLinkRoute | null {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (!CLAUDE_PROTOCOLS.has(url.protocol)) return null;
  switch (url.host) {
    case "cowork":
      return parseCoworkDeepLink(url);
    case "code":
      return parseCodeDeepLink(url);
    case "login":
      if (url.pathname !== "/google-auth") return null;
      return url.searchParams.has("code")
        ? {
            kind: "googleAuth",
            code: url.searchParams.get("code") ?? "",
            anonymousId: url.searchParams.get("anon_id"),
          }
        : null;
    case "claude.ai":
      return parseClaudeAiDeepLink(url);
    case "preview":
    case "hotkey":
    case "debug-handoff":
    case "resume":
      return null;
    default:
      return null;
  }
}

function parseProcessDeepLinks(argv: readonly string[]): DeepLinkRoute[] {
  return argv.flatMap((argument) => {
    const route = parseClaudeDeepLink(argument);
    return route === null ? [] : [route];
  });
}

export function createDeepLinkCoordinator({
  app: electronApp,
  ensurePrimaryWindowVisible,
  errorReporter,
  initialArgv,
  isMacOS,
  navigateToRoute,
}: DeepLinkCoordinatorOptions): DeepLinkCoordinator {
  const pendingRoutes: DeepLinkRoute[] = [];
  const logger = getRootStructuredLogger();

  async function flushPendingDeepLinks(): Promise<void> {
    if (pendingRoutes.length === 0 || !electronApp.isReady()) return;
    const targetWindow = await ensurePrimaryWindowVisible();
    if (!targetWindow) return;
    const route = pendingRoutes.at(-1);
    pendingRoutes.length = 0;
    if (route) await navigateToRoute(targetWindow, route);
  }

  function queueRoute(route: DeepLinkRoute): void {
    pendingRoutes.push(route);
    if (!electronApp.isReady()) return;
    void flushPendingDeepLinks().catch((error: unknown) => {
      errorReporter.reportNonFatal(
        error instanceof Error ? error : new Error(String(error)),
        { kind: "flush-pending-deep-links" },
      );
    });
  }

  function queueClaudeDeepLinkUrl(url: string): boolean {
    const route = parseClaudeDeepLink(url);
    if (route === null) return false;
    queueRoute(route);
    return true;
  }

  function queueProcessArgs(args: string[]): boolean {
    const routes = parseProcessDeepLinks(args);
    for (const route of routes) queueRoute(route);
    return routes.length > 0;
  }

  function registerProtocolClient(): void {
    if (electronApp.isPackaged && process.platform !== "win32") return;
    try {
      if (!electronApp.setAsDefaultProtocolClient("claude")) {
        logger.warning("Failed to register claude:// protocol handler", {
          safe: { isPackaged: electronApp.isPackaged },
          sensitive: {},
        });
      }
    } catch (error) {
      logger.warning("Failed to register claude:// protocol handler", {
        safe: {},
        sensitive: { error },
      });
    }
  }

  if (isMacOS) {
    electronApp.on("open-url", (event, url) => {
      queueClaudeDeepLinkUrl(url);
      event.preventDefault();
    });
  }
  for (const route of parseProcessDeepLinks(initialArgv)) queueRoute(route);

  return {
    registerProtocolClient,
    queueProcessArgs,
    flushPendingDeepLinks,
    queueClaudeDeepLinkUrl,
  };
}
