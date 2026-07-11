// Restored from ref/webview/assets/app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58-Cm2ohVFa.js
// @ts-nocheck
// Current settings shared facade: section copy, menu trigger, and title/subtitle helpers.

import { initReactIntlRuntimeChunk } from "../../../shared/vendor/react-intl-approval-review-runtime";

export {
  getSettingsNavMessage,
  SettingsMenuButton,
  SettingsNavLabel,
  SettingsSectionSubtitle,
  SettingsSectionTitle,
} from ".";

function initClassNamesChunk(): void {}

function initThreadResourceChevronIconChunk(): void {}

export function initSettingsSharedMessagesChunk(): void {
  initReactIntlRuntimeChunk();
}

export function initSettingsSharedCurrentChunk(): void {
  initClassNamesChunk();
  initReactIntlRuntimeChunk();
  initSettingsSharedMessagesChunk();
  initThreadResourceChevronIconChunk();
}
