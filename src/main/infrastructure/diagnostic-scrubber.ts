// Restored from ref/.vite/build/index.js (bundle diagnostics scrubber)

import * as os from "node:os";
import * as path from "node:path";

const SCRUB_FAILED_LINE = "[line withheld: scrub failed]";
const MAX_LINE_BYTES = 8 * 1024;

const emailPattern =
  /[\w.+-]{1,64}@[\w-]{1,63}(?:\.[\w-]{1,63}){0,7}\.[A-Za-z][\w-]{0,62}/g;
const ipv4Pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
const ipv6Pattern =
  /\b(?:[A-Fa-f0-9]{1,4}:){2,7}(?::?[A-Fa-f0-9]{1,4}){1,7}\b/g;
const secretPatterns: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/gi, "Bearer <token>"],
  [/(:\s*)Basic\s+[A-Za-z0-9+/=]{8,}/gi, "$1Basic <token>"],
  [/\bsk-ant-[A-Za-z0-9._-]{8,}/g, "<token>"],
  [/\b[sr]k[-_][A-Za-z0-9_-]{20,}/g, "<token>"],
  [/\bA[SK]IA[0-9A-Z]{16}\b/gi, "<token>"],
  [/\bAIza[0-9A-Za-z_-]{35}(?![0-9A-Za-z_-])/gi, "<token>"],
  [/\bgh[opusr]_[A-Za-z0-9]{36,}/g, "<token>"],
  [/\bxox[baprs]-[A-Za-z0-9-]{10,}/g, "<token>"],
  [/\bey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, "<jwt>"],
  [
    /((?:password|passwd|pwd|pass[-_]?phrase|secret|token|credential|auth|api[-_]?key|access[-_]?key|refresh[-_]?token|client[-_]?secret|private[-_]?key|session[-_]?(?:key|token|id))\s*(?:=>|===|:=|::|==|[:=])\s*)[^\s,;]+/gi,
    "$1<redacted>",
  ],
];

export function scrubDiagnosticLine(value: string): string {
  try {
    const truncated =
      Buffer.byteLength(value, "utf8") > MAX_LINE_BYTES
        ? `${Buffer.from(value, "utf8").subarray(0, MAX_LINE_BYTES).toString("utf8")}…<truncated>`
        : value;
    let scrubbed = scrubFilesystemPaths(truncated);
    scrubbed = scrubbed.replace(emailPattern, "<email>");
    scrubbed = scrubbed
      .replace(ipv4Pattern, "<ip>")
      .replace(ipv6Pattern, (match) =>
        /^\d{1,2}:\d{2}:\d{2}$/.test(match) ? match : "<ip>",
      );
    scrubbed = scrubbed.replace(/\b(?:https?|wss?):\/\/\S+/gi, (match) => {
      const trailing = /[)\].,;:'"}]+$/.exec(match)?.[0] ?? "";
      const candidate = trailing ? match.slice(0, -trailing.length) : match;
      try {
        const url = new URL(candidate);
        return `${url.protocol}//${url.host}/<path>${trailing}`;
      } catch {
        return `<url>${trailing}`;
      }
    });
    for (const [pattern, replacement] of secretPatterns) {
      scrubbed = scrubbed.replace(pattern, replacement);
    }
    return scrubbed;
  } catch {
    return SCRUB_FAILED_LINE;
  }
}

export function scrubDiagnosticBuffer(
  fileName: string,
  contents: Buffer,
): Buffer {
  const lowerName = fileName.toLowerCase();
  if (lowerName.endsWith(".json")) {
    try {
      return Buffer.from(
        JSON.stringify(scrubJsonValue(JSON.parse(contents.toString("utf8")))),
        "utf8",
      );
    } catch {
      return scrubText(contents);
    }
  }
  if (lowerName.endsWith(".jsonl")) {
    return Buffer.from(
      contents
        .toString("utf8")
        .split("\n")
        .map((line) => {
          if (!line.trim()) return line;
          try {
            return JSON.stringify(scrubJsonValue(JSON.parse(line)));
          } catch {
            return scrubDiagnosticLine(line);
          }
        })
        .join("\n"),
      "utf8",
    );
  }
  if (lowerName.endsWith(".log") || lowerName.endsWith(".txt")) {
    return scrubText(contents);
  }
  return contents;
}

function scrubText(contents: Buffer): Buffer {
  return Buffer.from(
    contents.toString("utf8").split("\n").map(scrubDiagnosticLine).join("\n"),
    "utf8",
  );
}

function scrubJsonValue(value: unknown, seen = new WeakSet<object>()): unknown {
  if (typeof value === "string") return scrubDiagnosticLine(value);
  if (typeof value !== "object" || value == null) return value;
  if (seen.has(value)) return "[Circular]";
  seen.add(value);
  if (Array.isArray(value))
    return value.map((entry) => scrubJsonValue(entry, seen));
  const result: Record<string, unknown> = Object.create(null);
  for (const [key, entry] of Object.entries(value)) {
    const scrubbedKey = scrubDiagnosticLine(key);
    result[uniqueKey(result, scrubbedKey)] = scrubJsonValue(entry, seen);
  }
  return result;
}

function uniqueKey(target: Record<string, unknown>, key: string): string {
  if (!Object.hasOwn(target, key)) return key;
  let index = 2;
  while (Object.hasOwn(target, `${key}[${index}]`)) index += 1;
  return `${key}[${index}]`;
}

function scrubFilesystemPaths(value: string): string {
  let result = value;
  const home = os.homedir();
  if (home) result = result.replaceAll(home, "<home>");
  const appPath = process.resourcesPath
    ? path.dirname(process.resourcesPath)
    : null;
  if (appPath) result = result.replaceAll(appPath, "app://");
  return result
    .replace(/([/\\]+(?:Users|home)[/\\]+)[^/\\\n]+/gi, "$1<user>")
    .replace(/(\/(?:Volumes|mnt|media)\/)[^/\n]+/g, "$1<vol>")
    .replace(/\b([A-Za-z]):([/\\])/g, "<drv>:$2")
    .replace(/\\\\[^\\]+\\[^\\\s'\",:()]+/g, "<unc>");
}
