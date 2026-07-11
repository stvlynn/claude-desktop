// @ts-nocheck
// Restored from ref/webview/assets/format-relative-date-time-DLmXX0fU.js
// format-relative-date-time-DLmXX0fU chunk restored from the Codex webview bundle.
import React from "react";

const MINUTE_MS = 60_000;
const WEEK_DAYS = 7;
const MONTH_DAYS = 30;
const YEAR_DAYS = 365;

let currentNow = new Date();
let intervalId: number | null = null;
const listeners = new Set<() => void>();

export function formatRelativeDateTime({ dateString }: { dateString: string }) {
  const now = useCurrentMinute();
  return formatCompactRelativeDateTime(dateString, now);
}

export function RelativeTime(props: { dateString: string }) {
  return formatRelativeDateTime(props);
}

function useCurrentMinute() {
  return React.useSyncExternalStore(
    subscribeToCurrentMinute,
    getCurrentNow,
    getCurrentNow,
  );
}

function subscribeToCurrentMinute(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) startMinuteTicker();
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) stopMinuteTicker();
  };
}

function startMinuteTicker() {
  if (intervalId != null || typeof window === "undefined") return;
  updateCurrentNow();
  intervalId = window.setInterval(updateCurrentNow, MINUTE_MS);
}

function stopMinuteTicker() {
  if (intervalId == null) return;
  window.clearInterval(intervalId);
  intervalId = null;
}

function updateCurrentNow() {
  currentNow = new Date();
  for (const listener of listeners) listener();
}

function getCurrentNow() {
  return currentNow;
}

function formatCompactRelativeDateTime(dateString: string, now: Date) {
  const date = new Date(dateString);
  const elapsedMinutes = minutesBetween(now, date);
  const elapsedDays = daysBetween(now, date);
  const positiveMinutes = Math.max(1, elapsedMinutes);
  if (positiveMinutes < 60) {
    return `${positiveMinutes}m`;
  }
  const elapsedHours = Math.floor(positiveMinutes / 60);
  if (elapsedHours < 24) {
    return `${elapsedHours}h`;
  }
  const positiveDays = Math.max(1, elapsedDays);
  if (positiveDays < WEEK_DAYS) {
    return `${positiveDays}d`;
  }
  if (positiveDays < MONTH_DAYS) {
    return `${Math.floor(positiveDays / WEEK_DAYS)}w`;
  }
  if (positiveDays < YEAR_DAYS) {
    return `${Math.floor(positiveDays / MONTH_DAYS)}mo`;
  }
  return `${Math.floor(positiveDays / YEAR_DAYS)}y`;
}

function minutesBetween(later: Date, earlier: Date) {
  return Math.floor((later.getTime() - earlier.getTime()) / MINUTE_MS);
}

function daysBetween(later: Date, earlier: Date) {
  const laterDay = new Date(
    later.getFullYear(),
    later.getMonth(),
    later.getDate(),
  );
  const earlierDay = new Date(
    earlier.getFullYear(),
    earlier.getMonth(),
    earlier.getDate(),
  );
  return Math.round((laterDay.getTime() - earlierDay.getTime()) / 86_400_000);
}
// Added to satisfy relative import checks.
export const initRelativeTimeRuntimeChunk = undefined as never;
