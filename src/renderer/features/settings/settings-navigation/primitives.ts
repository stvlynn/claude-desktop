// Restored from ref/webview/assets/app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel-BHOEvyvO.js
// @ts-nocheck
// Semantic facade for settings navigation primitives.

import { initSettingsNavigationDisclosureIconChunk } from "../../../shared/icons/settings-navigation-disclosure-icon";
import { initComposeRefsChunk } from "../../../shared/lib/compose-refs";

export {
  initSettingsNavigationDisclosureIconChunk,
  SettingsNavigationDisclosureIcon,
} from "../../../shared/icons/settings-navigation-disclosure-icon";
export { SettingsNavRow } from "./nav-row";
export { SettingsNavSection } from "./nav-section";
export { composeRefs, initComposeRefsChunk } from "../../../shared/lib/compose-refs";

export function initSettingsNavigationPrimitivesChunk(): void {
  initComposeRefsChunk();
  initSettingsNavigationDisclosureIconChunk();
}
