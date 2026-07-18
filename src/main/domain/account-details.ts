// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type ClaudeAccountDetails = {
  accountTaggedId?: string | null;
  accountUuid?: string;
  canUseOmelette?: boolean;
  displayName?: string | null;
  emailAddress?: string | null;
  fullName?: string | null;
  hasWiggle?: boolean;
  isEnterprise?: boolean;
  isHipaaRegulated?: boolean;
  isLegacySeatBased?: boolean;
  isLoggedOut: boolean;
  isRaven?: boolean;
  paidAccountTier?: string;
};

const events = new EventEmitter();
events.setMaxListeners(20);
let currentAccountDetails: ClaudeAccountDetails | null = null;
const accountDetailKeys = [
  "accountTaggedId",
  "accountUuid",
  "canUseOmelette",
  "displayName",
  "emailAddress",
  "fullName",
  "hasWiggle",
  "isEnterprise",
  "isHipaaRegulated",
  "isLegacySeatBased",
  "isLoggedOut",
  "isRaven",
  "paidAccountTier",
] as const;

function isOptionalBoolean(value: unknown): boolean {
  return value === undefined || typeof value === "boolean";
}

function isOptionalString(value: unknown, nullable = false): boolean {
  return (
    value === undefined ||
    typeof value === "string" ||
    (nullable && value === null)
  );
}

export function parseClaudeAccountDetails(
  value: unknown,
): ClaudeAccountDetails | null {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    return null;
  }
  const candidate = value as Record<string, unknown>;
  if (
    typeof candidate.isLoggedOut !== "boolean" ||
    !isOptionalBoolean(candidate.hasWiggle) ||
    !isOptionalBoolean(candidate.isRaven) ||
    !isOptionalBoolean(candidate.isHipaaRegulated) ||
    !isOptionalBoolean(candidate.isEnterprise) ||
    !isOptionalBoolean(candidate.canUseOmelette) ||
    !isOptionalBoolean(candidate.isLegacySeatBased) ||
    !isOptionalString(candidate.paidAccountTier) ||
    !isOptionalString(candidate.displayName, true) ||
    !isOptionalString(candidate.fullName, true) ||
    !isOptionalString(candidate.accountTaggedId, true) ||
    !isOptionalString(candidate.emailAddress, true) ||
    (candidate.accountUuid !== undefined &&
      (typeof candidate.accountUuid !== "string" ||
        !UUID_PATTERN.test(candidate.accountUuid)))
  ) {
    return null;
  }
  return Object.fromEntries(
    accountDetailKeys
      .filter((key) => candidate[key] !== undefined)
      .map((key) => [key, candidate[key]]),
  ) as ClaudeAccountDetails;
}

export function getClaudeAccountDetails(): ClaudeAccountDetails | null {
  return currentAccountDetails;
}

export function setClaudeAccountDetails(value: unknown): void {
  const parsed = parseClaudeAccountDetails(value);
  if (parsed == null) throw new TypeError("Invalid Claude account details");
  currentAccountDetails = parsed;
  events.emit("change", parsed);
}

export function resetClaudeAccountDetails(): void {
  currentAccountDetails = null;
  events.emit("change", null);
}

export function onClaudeAccountDetailsChange(
  listener: (value: ClaudeAccountDetails | null) => void,
): () => void {
  events.on("change", listener);
  return () => events.off("change", listener);
}
