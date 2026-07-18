// Restored from ref/webview/assets/home-use-cases-data-hIxZSoyH.js
// Also matches ref/webview/assets/home-use-cases-data-BeTzhg1t.js.
// Shared types for home page use-case data.

import type { MessageDescriptor } from "react-intl";

export type HomeUseCaseMode = "worktree" | "local";

export type HomeUseCaseItem = {
  id: string;
  promptMessage: MessageDescriptor;
  iconName: string;
  mode: HomeUseCaseMode;
  initialCollaborationMode?: "plan";
  isAutomation?: boolean;
  automationPromptMessage?: MessageDescriptor;
};
