// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Shared appearance/general-settings theme runtime types.

export type ThemeVariant = "light" | "dark";

export type CodexThemeFonts = {
  code: string | null;
  ui: string | null;
};

export type CodexThemeSemanticColors = {
  diffAdded: string;
  diffRemoved: string;
  skill: string;
};

export type CodexChromeTheme = {
  accent: string;
  contrast: number;
  fonts: CodexThemeFonts;
  ink: string;
  opaqueWindows: boolean;
  semanticColors: CodexThemeSemanticColors;
  surface: string;
};

export type CodeThemeRegistration = {
  id: string;
  label?: string;
  theme?: Partial<CodexChromeTheme>;
  variant?: ThemeVariant;
};

export type ThemeEditorSelection = {
  codeThemeId: string;
  theme: CodexChromeTheme;
};
