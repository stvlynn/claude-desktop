// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Automation schedule form state <-> RRULE-string conversion and parsing helpers.

import { RRule, rrulestr } from "rrule";
import {
  sortWeekdays,
  weekdaySetsEqual,
  type WeekdayToken,
} from "./schedule-weekdays";
import {
  ALL_WEEKDAYS,
  DEFAULT_SCHEDULE_TIME,
  WEEKDAYS_MONDAY_TO_FRIDAY,
  RRULE_WEEKDAY_BY_TOKEN,
  MINUTELY_STANDALONE_OPTION_KEYS,
  HOURLY_STANDALONE_OPTION_KEYS,
  DAILY_WEEKLY_STANDALONE_OPTION_KEYS,
  representativeWeekday,
  parseScheduleTime,
  formatRruleTime,
  normalizeRruleMinute,
  weekdaysFromByweekday,
  weekdaysFromRruleText,
  currentTimeZoneId,
  isValidRruleText,
} from "../../boundaries/onboarding-commons-externals.facade";

export type ScheduleFormMode =
  | "hourly"
  | "daily"
  | "weekdays"
  | "weekly"
  | "custom";

export interface ScheduleForm {
  mode: ScheduleFormMode;
  intervalHours: number;
  intervalMinutes: number | null;
  weekdays: WeekdayToken[];
  time: string;
  customRrule: string;
}

export interface ParsedRruleSchedule {
  freq: number;
  isStandaloneRrule: boolean;
  hasMultipleTimeValues: boolean;
  interval: number;
  minute: number | null;
  origOptions: Record<string, unknown>;
  rruleText: string;
  time: string;
  weekdays: WeekdayToken[];
}

export function createDefaultDailyScheduleForm(): ScheduleForm {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: ALL_WEEKDAYS,
    time: DEFAULT_SCHEDULE_TIME,
    customRrule: "",
  };
}

export function createDefaultHourlyScheduleForm(): ScheduleForm {
  return {
    ...createDefaultDailyScheduleForm(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    weekdays: ALL_WEEKDAYS,
    customRrule: "",
  };
}

export function normalizeIntervalHours(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}

export function normalizeIntervalMinutes(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}

export function hourlyIntervalRruleString(intervalHours: number): string {
  const interval = normalizeIntervalHours(intervalHours) ?? 1;
  return new RRule({
    freq: RRule.HOURLY,
    interval,
    byminute: 0,
    byweekday: ALL_WEEKDAYS.map(
      (token: WeekdayToken) => RRULE_WEEKDAY_BY_TOKEN[token],
    ),
  }).toString();
}

export function minuteIntervalRruleString(intervalMinutes: number): string {
  const interval = normalizeIntervalMinutes(intervalMinutes) ?? 30;
  return new RRule({ freq: RRule.MINUTELY, interval }).toString();
}

export function weeklyRruleString({
  time,
  weekdays,
}: {
  time: string;
  weekdays: WeekdayToken[];
}): string {
  const parsedTime =
    parseScheduleTime(time) ?? parseScheduleTime(DEFAULT_SCHEDULE_TIME);
  return parsedTime
    ? new RRule({
        freq: RRule.WEEKLY,
        byhour: parsedTime.hour,
        byminute: parsedTime.minute,
        byweekday: sortWeekdays(weekdays).map(
          (token) => RRULE_WEEKDAY_BY_TOKEN[token],
        ),
      }).toString()
    : "";
}

export function scheduleFormToRruleString(form: ScheduleForm): string {
  switch (form.mode) {
    case "hourly":
      return form.intervalMinutes == null
        ? hourlyIntervalRruleString(form.intervalHours)
        : minuteIntervalRruleString(form.intervalMinutes);
    case "daily":
      return weeklyRruleString({ time: form.time, weekdays: ALL_WEEKDAYS });
    case "weekdays":
      return weeklyRruleString({
        time: form.time,
        weekdays: Array.from(WEEKDAYS_MONDAY_TO_FRIDAY),
      });
    case "weekly":
      return weeklyRruleString({
        time: form.time,
        weekdays: [representativeWeekday(form.weekdays)],
      });
    case "custom":
      return form.customRrule.trim();
  }
}

export function parseRruleSchedule(
  rruleText: string | null | undefined,
): ParsedRruleSchedule | null {
  if (!rruleText) return null;
  try {
    const ruleSet = rrulestr(rruleText, {
      forceset: true,
      tzid: currentTimeZoneId() ?? undefined,
    });
    const firstRule = ruleSet.rrules()[0];
    if (!firstRule) return null;
    const options = firstRule.options;
    const weekdays =
      weekdaysFromByweekday(options.byweekday) ??
      weekdaysFromRruleText(rruleText) ??
      ALL_WEEKDAYS;
    return {
      freq: options.freq,
      isStandaloneRrule:
        firstRule.origOptions.dtstart == null &&
        ruleSet.rrules().length === 1 &&
        ruleSet.rdates().length === 0 &&
        ruleSet.exrules().length === 0 &&
        ruleSet.exdates().length === 0,
      hasMultipleTimeValues:
        (Array.isArray(options.byhour) && options.byhour.length > 1) ||
        (Array.isArray(options.byminute) && options.byminute.length > 1),
      interval: Math.max(1, Math.round(options.interval ?? 1)),
      minute: normalizeRruleMinute(options.byminute),
      origOptions: firstRule.origOptions as Record<string, unknown>,
      rruleText,
      time: formatRruleTime(options.byhour, options.byminute, options),
      weekdays,
    };
  } catch {
    return null;
  }
}

export function hasOnlyKnownOptions(
  parsed: ParsedRruleSchedule,
  allowedKeys: Set<string>,
): boolean {
  return (
    parsed.isStandaloneRrule &&
    Object.keys(parsed.origOptions).every((key) => allowedKeys.has(key))
  );
}

export function scheduleIntervalMinutes(
  parsed: ParsedRruleSchedule,
): number | null {
  if (parsed.hasMultipleTimeValues) return null;
  if (
    parsed.freq === RRule.MINUTELY &&
    hasOnlyKnownOptions(parsed, MINUTELY_STANDALONE_OPTION_KEYS)
  ) {
    return normalizeIntervalMinutes(parsed.interval) ?? 30;
  }
  if (
    parsed.freq === RRule.HOURLY &&
    hasOnlyKnownOptions(parsed, HOURLY_STANDALONE_OPTION_KEYS) &&
    (parsed.minute == null || parsed.minute === 0) &&
    weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)
  ) {
    return (normalizeIntervalHours(parsed.interval) ?? 1) * 60;
  }
  return null;
}

export function detectScheduleMode(
  parsed: ParsedRruleSchedule,
): ScheduleFormMode {
  if (parsed.hasMultipleTimeValues) return "custom";
  if (
    parsed.freq === RRule.HOURLY &&
    hasOnlyKnownOptions(parsed, HOURLY_STANDALONE_OPTION_KEYS) &&
    parsed.interval === 1 &&
    parsed.minute === 0 &&
    weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)
  ) {
    return "hourly";
  }
  if (
    hasOnlyKnownOptions(parsed, DAILY_WEEKLY_STANDALONE_OPTION_KEYS) &&
    parsed.interval === 1 &&
    (parsed.freq === RRule.DAILY || parsed.freq === RRule.WEEKLY)
  ) {
    if (weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)) return "daily";
    if (weekdaySetsEqual(parsed.weekdays, WEEKDAYS_MONDAY_TO_FRIDAY)) {
      return "weekdays";
    }
    if (parsed.weekdays.length === 1) return "weekly";
  }
  return "custom";
}

export function scheduleFormFromRrule(
  rruleText: string | null | undefined,
): ScheduleForm {
  const form = createDefaultDailyScheduleForm();
  const parsed = parseRruleSchedule(rruleText);
  if (!parsed) return form;
  const mode = detectScheduleMode(parsed);
  return {
    ...form,
    mode,
    intervalHours: parsed.interval,
    intervalMinutes: null,
    weekdays: parsed.weekdays,
    time: parsed.time,
    customRrule: mode === "custom" ? parsed.rruleText : "",
  };
}

export function hourlyScheduleFormFromRrule(
  rruleText: string | null | undefined,
): ScheduleForm {
  const form = createDefaultHourlyScheduleForm();
  const parsed = parseRruleSchedule(rruleText);
  if (!parsed) return form;
  const intervalMinutes = scheduleIntervalMinutes(parsed);
  if (intervalMinutes == null) {
    const mode = detectScheduleMode(parsed);
    return mode === "daily" || mode === "weekdays" || mode === "weekly"
      ? { ...form, mode, weekdays: parsed.weekdays, time: parsed.time }
      : mode === "custom"
        ? { ...form, mode, customRrule: parsed.rruleText }
        : form;
  }
  return {
    ...form,
    intervalHours: Math.max(1, Math.round(intervalMinutes / 60)),
    intervalMinutes,
  };
}

export function isScheduleFormValid(form: ScheduleForm): boolean {
  switch (form.mode) {
    case "hourly":
      return form.intervalMinutes == null
        ? normalizeIntervalHours(form.intervalHours) != null
        : normalizeIntervalMinutes(form.intervalMinutes) != null;
    case "daily":
    case "weekdays":
    case "weekly":
      return parseScheduleTime(form.time) != null;
    case "custom":
      return isValidRruleText(form.customRrule.trim());
  }
}

export function convertScheduleFormMode(
  form: ScheduleForm,
  mode: ScheduleFormMode,
): ScheduleForm {
  if (mode === "custom") {
    return {
      ...form,
      mode: "custom",
      customRrule:
        form.mode === "custom" && form.customRrule.trim()
          ? form.customRrule
          : scheduleFormToRruleString(form),
    };
  }
  if (mode === "hourly") {
    return {
      ...form,
      mode: "hourly",
      intervalHours:
        form.mode === "hourly"
          ? (normalizeIntervalHours(form.intervalHours) ?? 1)
          : 1,
      intervalMinutes:
        form.intervalMinutes == null
          ? null
          : (normalizeIntervalMinutes(form.intervalMinutes) ?? 30),
    };
  }
  if (mode === "daily") {
    return { ...form, mode: "daily", weekdays: ALL_WEEKDAYS };
  }
  if (mode === "weekdays") {
    return {
      ...form,
      mode: "weekdays",
      weekdays: Array.from(WEEKDAYS_MONDAY_TO_FRIDAY),
    };
  }
  return {
    ...form,
    mode: "weekly",
    weekdays: [representativeWeekday(form.weekdays)],
  };
}
