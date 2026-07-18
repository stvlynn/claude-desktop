// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js
// Onboarding and workspace-onboarding state aliases for the select workspace flow.
import {
  initOnboardingStateChunk,
  initOnboardingStateStorageKeysChunk,
} from "../../features/onboarding/onboarding-state";
import { initWorkspaceOnboardingControllerChunk } from "../../features/onboarding/workspace-onboarding-controller/index";
import { initWorkspaceOnboardingExperimentChunk } from "../../shared/onboarding/workspace-onboarding-experiment";
import { initUseIsRemoteHostChunk } from "../../shared/lib/use-is-remote-host";

export {
  hasCompletedProjectlessOnboardingSignal,
  hideFirstNewThreadOnboardingPromosAtom,
  hideGoogleTilesDebugOverrideSignal,
  homepageOnboardingTilesDebugOverrideAtom,
  initOnboardingStateChunk,
  initOnboardingStateStorageKeysChunk,
  isBeforeWorkspaceExperimentCutoff,
  lastCompletedOnboardingAtom,
  lastCompletedOnboardingStorageKey,
  onboardingMailProviderDebugOverrideSignal,
  onboardingOverrideAtom,
  onboardingPluginChecklistActiveAtom,
  pluginSuggestionsV2EnabledAtCompletionAtom,
  primaryRuntimeInstallReadyAtom,
  primaryRuntimeInstallRequestedAtom,
  projectlessOnboardingCompletedAtom,
  projectlessOnboardingCompletedStorageKey,
  shouldHideFirstNewThreadOnboardingPromos,
  welcomeOnboardingPendingAtom,
  welcomeV2OnboardingStorageKey,
  welcomeV2RoleStateAtom,
  workspaceExperimentAssignmentAtom,
  workspaceOnboardingAutolaunchAppliedAtom,
} from "../../features/onboarding/onboarding-state";
export {
  getWorkspaceOnboardingPlaygroundName,
  shouldShowDirectWorkspacePicker,
  useTeenOnboardingEligibility,
  useWorkspaceOnboardingAutoLaunch,
  useWorkspaceOnboardingExperiment,
} from "../../features/onboarding/workspace-onboarding-controller/index";
export {
  initWorkspaceOnboardingExperimentChunk,
  isDirectFolderPickerArm,
  isModalCopyCtaPlaygroundArm,
  WORKSPACE_ONBOARDING_EXPERIMENT_ID,
  WORKSPACE_ONBOARDING_PLAYGROUND_NAME,
  WORKSPACE_ONBOARDING_V2_ARM,
} from "../../shared/onboarding/workspace-onboarding-experiment";
export {
  initUseIsRemoteHostChunk,
  useIsRemoteHost,
} from "../../shared/lib/use-is-remote-host";

export function initOnboardingSelectWorkspaceCurrentRuntimeChunk(): void {
  initOnboardingStateChunk();
  initWorkspaceOnboardingControllerChunk();
  initWorkspaceOnboardingExperimentChunk();
  initUseIsRemoteHostChunk();
  initOnboardingStateStorageKeysChunk();
}
