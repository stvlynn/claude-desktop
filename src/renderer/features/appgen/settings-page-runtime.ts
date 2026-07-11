// @ts-nocheck
// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Runtime initialization for the semantic AppgenSettingsPage restore.

import { once } from "../../shared/runtime/commonjs-interop";
import {
  initRemoteProjectsAppSharedSemanticRuntime,
  appgenProjectAccessSchemas as initAppgenProjectAccessSchemas,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { initWorktreeNewThreadOrchestratorSemanticRuntime } from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  initButtonRuntime,
  initOpenExternalUrlRuntime,
  initToastControllerRuntime,
  worktreeNewThreadQueryCompatSlotUpperDLowerM as initLoadingSpinnerRuntime,
  worktreeNewThreadQueryCompatSlotUpperELowerM as initButtonGroupRuntime,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as initButtonTextRuntime,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appMainCurrentCompatSlotUpperILowerN as initSettingsRowRuntime,
  appMainCurrentCompatSlotUpperILowerO as initAccessMessageRuntime,
  appMainCurrentCompatSlotUpperKLowerO as initAccessPolicyIconRuntime,
  appMainCurrentCompatSlotUpperPLowerO as initAccessPolicyDescriptionRuntime,
  appMainCurrentCompatSlotUpperZ as initAppMainRuntime,
} from "../../shared/vendor/app-main-current-runtime/index";
import { initProjectSiteRoutesChunk } from "../../shared/runtime/current-app-initial/appgen-site-route-icon-runtime";
import { initAppgenShareDialogChunk } from "../appgen-share-dialog/index";
import { initToolbarBreadcrumbChunk } from "../../shared/ui/toolbar-breadcrumb";
import { initDialogLayoutComponents } from "../../shared/ui/dialog-layout/index";
import { initExternalLinkIconChunk } from "../../shared/icons/external-link-icon";
import { initPlusSmIconChunk } from "../../shared/icons/plus-sm-icon";
import { initSettingsGroupChunk } from "../../shared/lib/settings-group";
import { initSettingsEmptyStateChunk } from "../../shared/ui/settings-empty-state";
import { initModalControllerStateChunk } from "../../shared/ui/modal-controller-state";

const initAppgenSettingsPageRuntimeOnce = once(() => {
  initRemoteProjectsAppSharedSemanticRuntime();
  initOpenAiNativeAppDefinition();
  initAppgenProjectAccessSchemas();
  initWorktreeNewThreadOrchestratorSemanticRuntime();
  initButtonRuntime();
  initButtonTextRuntime();
  initButtonGroupRuntime();
  initLoadingSpinnerRuntime();
  initOpenExternalUrlRuntime();
  initToastControllerRuntime();
  initProjectSiteRoutesChunk();
  initToolbarBreadcrumbChunk();
  initDialogLayoutComponents();
  initSettingsGroupChunk();
  initSettingsEmptyStateChunk();
  initModalControllerStateChunk();
  initAppgenShareDialogChunk();
  initExternalLinkIconChunk();
  initPlusSmIconChunk();
  initAppMainRuntime();
  initSettingsRowRuntime();
  initAccessMessageRuntime();
  initAccessPolicyIconRuntime();
  initAccessPolicyDescriptionRuntime();
});

export function initAppgenSettingsPageRuntime(): void {
  initAppgenSettingsPageRuntimeOnce();
}
