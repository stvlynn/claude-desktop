// Type boundaries for the electron menu / keyboard shortcut command registry.

export type CommandKind = "webview" | "vscode-only" | "electron-only";

export type Keybinding = {
  key: string;
};

export type PlatformKeybindings = {
  macOS?: Keybinding[];
  default?: Keybinding[];
};

export type ElectronCommandConfig = {
  menuTitle?: string;
  menuTitleIntlId?: string;
  defaultKeybindings?: Keybinding[];
  platformDefaultKeybindings?: PlatformKeybindings;
};

export type VSCodeCommandConfig = {
  commandId?: string;
  [key: string]: unknown;
};

export type CodexCommandDefinition = {
  id: string;
  titleIntlId?: string;
  descriptionIntlId?: string;
  shortcutScope?: string;
  allowsBareModifiers?: boolean;
  commandMenu?: boolean;
  availableIn?: string[];
  electron?: ElectronCommandConfig;
  vscodeCommand?: VSCodeCommandConfig;
};

export type CodexCommand = CodexCommandDefinition & {
  kind: CommandKind;
};

export type KeymapBinding = {
  command: string;
  key?: string | null;
};

export type KeymapState = {
  bindings: KeymapBinding[];
};
