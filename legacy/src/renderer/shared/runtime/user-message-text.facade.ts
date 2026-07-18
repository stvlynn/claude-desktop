// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Typed semantic boundary for the user-message text renderer.

import type {
  ComponentType,
  ReactNode,
} from "react";
import * as legacyMessageRuntime from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";

import {
  Zt as ExternalLinkContextMenuLinkRaw,
  Nt as FileMentionRaw,
  Ft as SkillReferenceChipRaw,
  fn as handleCopyEventRaw,
  ut as isSkillReferenceRaw,
  ct as matchSkillReferencesRaw,
  Ot as renderInlineLinkRaw,
  st as renderStreamingTextRaw,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";
import {
  No as matchNextLinkRaw,
  Bo as normalizeLinkLabelRaw,
  Vo as normalizeLinkPathRaw,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj";

export {
  isFileReferencePathValue as isFileReference,
  parseFileReference,
} from "../lib/file-reference-path";

type SkillReferenceMatch = { content: string; index: number };
type LinkMatch = {
  end: number;
  label: string;
  path: string;
  start: number;
};

export const ExternalLinkContextMenuLink =
  ExternalLinkContextMenuLinkRaw as ComponentType<any>;
export const FileMention = FileMentionRaw as ComponentType<any>;
export const SkillReferenceChip = SkillReferenceChipRaw as ComponentType<any>;
export const markdownStyles = legacyMessageRuntime.zt as {
  markdownRoot: string;
};

export const handleCopyEvent = handleCopyEventRaw as (
  event: ClipboardEvent,
  container: HTMLElement,
) => void;
export const isSkillReference = isSkillReferenceRaw as (
  value: string,
) => boolean;
export const matchSkillReferences = matchSkillReferencesRaw as (
  text: string,
) => SkillReferenceMatch[] | null;
export const matchNextLink = matchNextLinkRaw as (
  text: string,
  start: number,
) => LinkMatch | null;
export const normalizeLinkLabel = normalizeLinkLabelRaw as (
  label: string,
) => string;
export const normalizeLinkPath = normalizeLinkPathRaw as (
  path: string,
) => string;
export const renderInlineLink = renderInlineLinkRaw as (options: {
  className?: string;
  cwd?: string | null;
  elementKey: string;
  hostId?: string;
  href: string;
  label: string;
  onFileLinkOpen?: (path: string) => void;
  openFileLinksInSidePanel?: boolean;
}) => ReactNode;
export const renderStreamingText = renderStreamingTextRaw as (options: {
  cwd?: string | null;
  fadeText?: boolean;
  hostId?: string;
  keyPrefix: string;
  segmenter?: Intl.Segmenter | null;
  text: string;
}) => ReactNode;
