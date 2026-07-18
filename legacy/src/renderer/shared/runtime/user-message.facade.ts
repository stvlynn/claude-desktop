// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// User-message dependencies resolved from restored composer, settings, and
// app-scope runtime modules.

import { fr as createEditComposerController } from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";
import * as messageRuntime from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj";
import * as promptRuntime from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG";

export {
  appScopeO as useAppStore,
  appScopeRoot,
  appScopeUnderscore as createScopedAtom,
  useAppScopeValue as useScopedAtomValue,
  useAppScopeValue as useSignalValue,
} from "../../features/plugins/eval-control/app-scope";
export { ComposerEditor } from "../../features/composer/composer-editor-runtime";
export {
  settingsAtoms as composerSettingKeys,
  useSettingValue,
} from "../../features/composer/composer-settings";
export type { HookRunStats } from "../../entities/conversation/hook-stats-tooltip-button";
export { HookStatsTooltipButton } from "../../entities/conversation/hook-stats-tooltip-button";
export type { ThreadDetailLevel } from "../lib/thread-detail-level";
export { useMeasuredTextCollapse as useCollapsibleText } from "../lib/use-measured-text-collapse";
export {
  as as hasPromptSyntax,
  is as hasFileMentions,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG";
export {
  Jn as SkillAutocompletePopover,
  Vr as dispatchComposerSuggestion,
  Zr as MentionAutocompleteList,
  _r as useMentionAutocomplete,
  da as MentionAutocompletePopover,
  f as useAnchoredPlacement,
  qn as useSkillAutocomplete,
  sr as useOnUnmount,
  xr as subscribeToComposerUpdates,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";

export { createEditComposerController };

export type EditComposerController = ReturnType<
  typeof createEditComposerController
>;
export type UserMessageModel = string;

export type HostContext = {
  submitCodexAnalyticsEvent?: (event: Record<string, unknown>) => void;
};

export const hostContextSignal: unknown = messageRuntime.jf;
export const codeModeSignal: unknown = promptRuntime.to;
export const normalizeMessageText = messageRuntime.xv as (
  message: UserMessageModel,
) => string;
export const isPlanFollowUp = messageRuntime.t_ as (text: string) => boolean;
export const getExternalLinkContextMenuConversationId = messageRuntime.Fs as (
  value: unknown,
) => string | null;

const stripMarkdownForClipboardRaw = messageRuntime.Gc as (
  text: string,
  options?: unknown,
) => string;
export function stripMarkdownForClipboard(text: string): string {
  return stripMarkdownForClipboardRaw(text, undefined);
}
