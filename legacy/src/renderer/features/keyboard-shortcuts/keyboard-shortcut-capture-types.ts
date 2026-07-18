// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
// Types and command filtering for keyboard-shortcut capture/settings UI.

import { useIntl } from "react-intl";
import {
  CODEX_COMMANDS,
  isElectronRuntimeCommand,
} from "../../shared/lib/electron-menu-shortcuts";
import type { KeyboardShortcutCommand } from "./types";

export type KeymapState = {
  bindings: Array<{
    command: string;
    key?: string | null;
  }>;
};

export type ShortcutEntry = {
  accelerator: string;
  label: string;
};

export type CaptureMode = "append" | "replace" | "set";

export type CaptureState = {
  accelerator: string | null;
  commandId: string;
  conflictingCommandTitle: string | null;
  mode: CaptureMode;
};

export type ShortcutUpdate =
  | {
      accelerator: string;
      type: "append" | "set";
    }
  | {
      accelerator: string;
      previousAccelerator: string;
      type: "replace";
    }
  | {
      accelerator: string;
      type: "remove";
    }
  | {
      type: "reset";
    };

export type MutationLike = {
  isPending: boolean;
  mutateAsync(input: unknown): Promise<unknown>;
};

export type IntlLike = ReturnType<typeof useIntl>;
export type ErrorByCommandId = Record<string, string | undefined>;
export type CommandWithTitle = {
  command: KeyboardShortcutCommand;
  title: string;
};

export const KEYBINDING_LABEL_DEBOUNCE_MS = 1_000;
export const SHORTCUT_COMMANDS = (
  CODEX_COMMANDS as KeyboardShortcutCommand[]
).filter(isElectronRuntimeCommand as (command: KeyboardShortcutCommand) => boolean);
