// Restored from ref/.vite/build/transcript-search-worker/transcriptSearchWorker.js

import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import {
  getUtilityProcessParentPort,
  postToUtilityProcessParent,
  registerUtilityProcessExitHandlers,
  type UtilityProcessMessagePort,
} from "./utility-process-port";

export const TRANSCRIPT_SEARCH_SNIPPET_RADIUS = 80;
export const TRANSCRIPT_SEARCH_CONCURRENCY = 4;

export type TranscriptSearchSession = {
  sessionId: string;
  transcriptPath: string;
  lastActivityAt: number;
};

export type TranscriptSearchRequest = {
  type: "search";
  requestId: string;
  query: string;
  messageTypes: string[];
  sessions: TranscriptSearchSession[];
  limit: number;
};

export type TranscriptSearchHit = {
  sessionId: string;
  snippet: string;
  lastActivityAt: number;
};

type TranscriptContentBlock = {
  type?: string;
  text?: string;
};

type TranscriptRecord = {
  type?: string;
  message?: {
    content?: string | TranscriptContentBlock[];
  };
};

export function buildTranscriptSearchPrefilter(
  query: string,
): ((line: string) => boolean) | null {
  const tokens = query.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;
  if (tokens.some((token) => /["\\]|[^\x20-\x7e]/.test(token))) return null;

  const tokenPatterns = tokens.map(
    (token) => new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "iu"),
  );
  return (line) => {
    if (tokenPatterns.every((pattern) => pattern.test(line))) return true;
    if (!line.includes("İ")) return false;
    const lowerLine = line.toLowerCase();
    return tokens.every((token) => lowerLine.includes(token));
  };
}

export function extractTranscriptText(
  content: string | TranscriptContentBlock[] | undefined,
): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";

  let text = "";
  for (const block of content) {
    if (
      block &&
      typeof block === "object" &&
      block.type === "text" &&
      typeof block.text === "string"
    ) {
      text += `${block.text} `;
    }
  }
  return text;
}

export function makeTranscriptSearchSnippet(
  text: string,
  matchIndex: number,
  queryLength: number,
): string {
  const start = Math.max(0, matchIndex - TRANSCRIPT_SEARCH_SNIPPET_RADIUS);
  const end = Math.min(
    text.length,
    matchIndex + queryLength + TRANSCRIPT_SEARCH_SNIPPET_RADIUS,
  );
  const snippet = text.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${snippet}${end < text.length ? "…" : ""}`;
}

export async function scanTranscriptFile(
  session: TranscriptSearchSession,
  normalizedQuery: string,
  messageTypes: ReadonlySet<string>,
  prefilter: ((line: string) => boolean) | null,
): Promise<TranscriptSearchHit | null> {
  const stream = createReadStream(session.transcriptPath, { encoding: "utf8" });
  const lines = createInterface({ input: stream, crlfDelay: Infinity });
  let snippet: string | null = null;

  try {
    for await (const line of lines) {
      if (!line || (prefilter && !prefilter(line))) continue;

      let record: TranscriptRecord;
      try {
        record = JSON.parse(line) as TranscriptRecord;
      } catch {
        continue;
      }
      if (!record.type || !messageTypes.has(record.type)) continue;

      const text = extractTranscriptText(record.message?.content);
      if (!text) continue;
      const normalizedText = text.replace(/\s+/g, " ");
      const matchIndex = normalizedText.toLowerCase().indexOf(normalizedQuery);
      if (matchIndex === -1) continue;

      snippet = makeTranscriptSearchSnippet(
        normalizedText,
        matchIndex,
        normalizedQuery.length,
      );
      break;
    }
  } finally {
    lines.close();
    stream.destroy();
  }

  return snippet === null
    ? null
    : {
        sessionId: session.sessionId,
        snippet,
        lastActivityAt: session.lastActivityAt,
      };
}

export async function searchTranscripts(
  request: TranscriptSearchRequest,
): Promise<TranscriptSearchHit[]> {
  const normalizedQuery = request.query
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  const messageTypes = new Set(request.messageTypes);
  const prefilter = buildTranscriptSearchPrefilter(normalizedQuery);
  const hits: TranscriptSearchHit[] = [];
  const inputOrder = new Map(
    request.sessions.map((session, index) => [session.sessionId, index]),
  );
  let nextSessionIndex = 0;
  const inFlight = new Set<Promise<void>>();

  const launchNext = () => {
    if (
      hits.length >= request.limit ||
      nextSessionIndex >= request.sessions.length
    ) {
      return;
    }
    const session = request.sessions[nextSessionIndex++];
    const task = scanTranscriptFile(
      session,
      normalizedQuery,
      messageTypes,
      prefilter,
    )
      .then((hit) => {
        if (hit) hits.push(hit);
      })
      .catch(() => undefined)
      .finally(() => {
        inFlight.delete(task);
        launchNext();
      });
    inFlight.add(task);
  };

  for (let index = 0; index < TRANSCRIPT_SEARCH_CONCURRENCY; index += 1) {
    launchNext();
  }
  while (inFlight.size > 0) await Promise.race(inFlight);

  hits.sort(
    (left, right) =>
      right.lastActivityAt - left.lastActivityAt ||
      (inputOrder.get(left.sessionId) ?? 0) -
        (inputOrder.get(right.sessionId) ?? 0),
  );
  return hits.slice(0, request.limit);
}

function isTranscriptSearchRequest(
  value: unknown,
): value is TranscriptSearchRequest {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as { type?: unknown }).type === "search"
  );
}

export function registerTranscriptSearchWorker(): void {
  getUtilityProcessParentPort()?.once("message", (event) => {
    if (event.data !== null && typeof event.data === "object") {
      const init = event.data as { type?: unknown };
      const port = event.ports?.[0];
      if (init.type === "init" && port) {
        port.on("message", (messageEvent) => {
          if (!isTranscriptSearchRequest(messageEvent.data)) return;
          const request = messageEvent.data;
          void searchTranscripts(request)
            .then((hits) => {
              postToUtilityProcessParent(port, {
                type: "result",
                requestId: request.requestId,
                hits,
              });
            })
            .catch((error: unknown) => {
              postToUtilityProcessParent(port, {
                type: "error",
                requestId: request.requestId,
                message:
                  error instanceof Error ? error.message : "Unknown error",
              });
            });
        });
        port.start();
        return;
      }
    }
    process.exit(1);
  });
  registerUtilityProcessExitHandlers();
}

registerTranscriptSearchWorker();
