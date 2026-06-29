// Restored from ref/webview/assets/lib-BWT6A3Q0.js
// Minimal React Intl compatibility layer for restored UI modules.
export type PrimitiveType = string | number | boolean | null | undefined;
export type MessageDescriptor = {
  defaultMessage?: string;
  description?: string;
  id?: string;
};
export type IntlShape = {
  formatDate(value: unknown, options?: Intl.DateTimeFormatOptions): string;
  formatMessage(
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType>,
  ): string;
  formatNumber(value: number, options?: Intl.NumberFormatOptions): string;
  formatRelativeTime(
    value: number,
    unit: Intl.RelativeTimeFormatUnit,
    options?: Intl.RelativeTimeFormatOptions,
  ): string;
};
export type ResolvedIntlConfig = Record<string, unknown>;
export type ReactIntlConfig = {
  defaultLocale?: string;
  locale?: string;
  messages?: Record<string, string>;
};

type ProviderProps = {
  children?: unknown;
};
type FormattedMessageProps = MessageDescriptor & {
  values?: Record<string, PrimitiveType>;
};
type FormattedRelativeTimeProps = Intl.RelativeTimeFormatOptions & {
  unit: Intl.RelativeTimeFormatUnit;
  value: number;
};

export const IntlErrorCode = {
  FORMAT_ERROR: "FORMAT_ERROR",
  INVALID_CONFIG: "INVALID_CONFIG",
  MISSING_DATA: "MISSING_DATA",
  MISSING_TRANSLATION: "MISSING_TRANSLATION",
  UNSUPPORTED_FORMATTER: "UNSUPPORTED_FORMATTER",
} as const;
export type IntlErrorCode = (typeof IntlErrorCode)[keyof typeof IntlErrorCode];

function interpolateMessage(
  message: string,
  values?: Record<string, PrimitiveType>,
) {
  if (!values) return message;
  return message.replace(/\{([^}]+)\}/g, (match, key) =>
    values[key] == null ? match : String(values[key]),
  );
}

export function defineMessage<TMessage extends MessageDescriptor>(
  message: TMessage,
): TMessage {
  return message;
}

export function defineMessages<
  TMessages extends Record<string, MessageDescriptor>,
>(messages: TMessages): TMessages {
  return messages;
}

export function createIntl(config: ReactIntlConfig = {}): IntlShape {
  const locale = config.locale || config.defaultLocale;
  return {
    formatDate: (value, options) =>
      value instanceof Date || typeof value === "number"
        ? new Intl.DateTimeFormat(locale, options).format(value)
        : String(value ?? ""),
    formatMessage: (descriptor, values) =>
      interpolateMessage(
        descriptor.id != null && config.messages?.[descriptor.id] != null
          ? config.messages[descriptor.id]
          : (descriptor.defaultMessage ?? descriptor.id ?? ""),
        values,
      ),
    formatNumber: (value, options) =>
      new Intl.NumberFormat(locale, options).format(value),
    formatRelativeTime: (value, unit, options) =>
      new Intl.RelativeTimeFormat(locale, options).format(value, unit),
  };
}

export function createIntlCache(): Record<string, never> {
  return {};
}

export function useIntl(): IntlShape {
  return createIntl();
}

export function initIntlRuntime(): void {}

export function FormattedMessage({
  defaultMessage,
  id,
  values,
}: FormattedMessageProps): string {
  return interpolateMessage(defaultMessage ?? id ?? "", values);
}

export function FormattedDate({
  value,
  ...options
}: { value: unknown } & Intl.DateTimeFormatOptions): string {
  return createIntl().formatDate(value, options);
}

export function FormattedNumber({
  value,
  ...options
}: { value: number } & Intl.NumberFormatOptions): string {
  return createIntl().formatNumber(value, options);
}

export function FormattedRelativeTime({
  unit,
  value,
  ...options
}: FormattedRelativeTimeProps): string {
  return createIntl().formatRelativeTime(value, unit, options);
}

export function IntlProvider({ children }: ProviderProps): unknown {
  return children;
}

export const RawIntlProvider = IntlProvider;
export function initReactIntlRuntimeChunk(): void {}

export const libA = createIntl;
export const libC = createIntlCache;
export const libI = defineMessages;
export const libL = useIntl;
export const libN = FormattedNumber;
export const libO = defineMessage;
export const libR = RawIntlProvider;
export const libS = FormattedMessage;
