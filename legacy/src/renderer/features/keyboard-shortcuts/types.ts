// Restored from the Claude desktop renderer bundle.
// Types for the keyboard-shortcuts search and command registry.

export type IntlMessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};

export type IntlFormatter = {
  formatMessage(
    descriptor: IntlMessageDescriptor,
    values?: Record<string, unknown>,
  ): string;
};

export type KeyboardShortcutCommand = {
  id: string;
  kind: string;
  titleIntlId?: string;
  descriptionIntlId?: string;
  commandMenuGroupKey?: string | null;
  electron?: {
    menuTitleIntlId?: string;
  };
};

export type KeyboardShortcutCommandTextOverride = {
  title?: string;
  description?: string;
};
