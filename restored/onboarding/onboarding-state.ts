// Restored from ref/webview/assets/onboarding-state-Ddi1pOV8.js
import {
  _appScopeC as createDerivedSignal,
  _appScopeX as createWritableAtom,
  appScopeRoot,
} from "../boundaries/app-scope";
import { workspaceRootOptionsQuery } from "../boundaries/thread-context-inputs.facade";
import { appShellStateExportVAlias as notifyAppShellStateChanged } from "../app-shell/app-shell-state";
import { createPersistedSignal } from "../runtime/persisted-signal";
import { persistedAtom } from "../utils/persisted-atom";
type WorkspaceRootsQueryResult = {
  data?: {
    roots: unknown[];
  } | null;
  isLoading: boolean;
};
type FirstNewThreadPromoRoute = {
  hideFirstNewThreadOnboardingPromos: boolean;
  pathname: string;
};
type WelcomeV2RoleState = {
  roles: unknown[];
  personalizedSuggestionsEnabled: boolean;
  workMode: unknown | null;
};
const lastCompletedOnboardingStorageKey = "last_completed_onboarding";
const projectlessOnboardingCompletedStorageKey =
  "electron:onboarding-projectless-completed";
const welcomeV2OnboardingStorageKey = "welcomeV2Onboarding";
const onboardingOverrideAtom = persistedAtom(
  "electron:onboarding-override",
  "auto",
);
const welcomeOnboardingPendingAtom = persistedAtom(
  "electron:onboarding-welcome-pending",
  false,
);
const projectlessOnboardingCompletedAtom = persistedAtom(
  projectlessOnboardingCompletedStorageKey,
  false,
);
const projectlessOnboardingCompletedSignal = createPersistedSignal(
  projectlessOnboardingCompletedStorageKey,
  false,
);
const hasCompletedProjectlessOnboardingSignal = createDerivedSignal(
  appScopeRoot,
  ({ get }: { get<TValue>(atom: unknown): TValue }) => {
    const projectlessOnboardingCompleted = get<boolean | null>(
      projectlessOnboardingCompletedSignal,
    );
    const workspaceRootsQuery = get<WorkspaceRootsQueryResult>(
      workspaceRootOptionsQuery,
    );
    return resolveProjectlessOnboardingCompletion({
      projectlessOnboardingCompleted,
      workspaceRootsCount: workspaceRootsQuery.data?.roots.length ?? 0,
      workspaceRootsIsLoading:
        workspaceRootsQuery.data == null && workspaceRootsQuery.isLoading,
    });
  },
);
const hideFirstNewThreadOnboardingPromosAtom = persistedAtom(
  "electron:onboarding-hide-first-new-thread-promos",
  false,
);
const onboardingPluginChecklistActiveAtom = persistedAtom(
  "electron:onboarding-plugin-checklist-active",
  false,
);
const forceHomeTilesVisibleAtom = persistedAtom(
  "electron:onboarding-force-home-tiles-visible",
  false,
);
const persistedLastCompletedOnboardingAtom = persistedAtom<number | null>(
  lastCompletedOnboardingStorageKey,
  null,
);
const lastCompletedOnboardingAtom = createWritableAtom(
  (get: <TValue>(atom: unknown) => TValue) =>
    get<number | null>(persistedLastCompletedOnboardingAtom),
  (
    _get: unknown,
    set: (atom: unknown, value: number | null) => void,
    nextCompletedAtSeconds: number | null,
  ) => {
    if (nextCompletedAtSeconds != null) notifyAppShellStateChanged();
    set(persistedLastCompletedOnboardingAtom, nextCompletedAtSeconds);
  },
);
const primaryRuntimeInstallRequestedAtom = persistedAtom(
  "electron:onboarding-primary-runtime-install-requested",
  false,
);
const primaryRuntimeInstallReadyAtom = persistedAtom(
  "electron:onboarding-primary-runtime-install-ready",
  false,
);
function shouldHideFirstNewThreadOnboardingPromos({
  hideFirstNewThreadOnboardingPromos,
  pathname,
}: FirstNewThreadPromoRoute): boolean {
  return hideFirstNewThreadOnboardingPromos && pathname === "/";
}
function resolveProjectlessOnboardingCompletion({
  projectlessOnboardingCompleted,
  workspaceRootsCount,
  workspaceRootsIsLoading,
}: {
  projectlessOnboardingCompleted: boolean | null;
  workspaceRootsCount: number;
  workspaceRootsIsLoading: boolean;
}): boolean | null {
  if (projectlessOnboardingCompleted == null) return null;
  if (projectlessOnboardingCompleted) return true;
  if (workspaceRootsIsLoading) return null;
  return workspaceRootsCount > 0;
}
const workspaceExperimentCutoffMs = new Date(2026, 3, 30).getTime();
function isBeforeWorkspaceExperimentCutoff(
  completedAtSeconds: number | null | undefined,
): boolean {
  return (
    completedAtSeconds == null ||
    completedAtSeconds * 1000 < workspaceExperimentCutoffMs
  );
}
const workspaceExperimentAssignmentAtom = persistedAtom<unknown | null>(
  "electron:onboarding-workspace-experiment-assignment",
  null,
);
const workspaceOnboardingAutolaunchAppliedAtom = persistedAtom(
  "electron:onboarding-workspace-autolaunch-applied",
  false,
);
const welcomeV2RoleStateAtom = persistedAtom<WelcomeV2RoleState>(
  "electron:onboarding-welcome-v2-role-state",
  {
    roles: [],
    personalizedSuggestionsEnabled: true,
    workMode: null,
  },
);
export {
  lastCompletedOnboardingStorageKey,
  onboardingOverrideAtom,
  primaryRuntimeInstallReadyAtom,
  welcomeV2RoleStateAtom,
  workspaceOnboardingAutolaunchAppliedAtom,
  isBeforeWorkspaceExperimentCutoff,
  shouldHideFirstNewThreadOnboardingPromos,
  lastCompletedOnboardingAtom,
  primaryRuntimeInstallRequestedAtom,
  hasCompletedProjectlessOnboardingSignal,
  forceHomeTilesVisibleAtom,
  onboardingPluginChecklistActiveAtom,
  workspaceExperimentAssignmentAtom,
  hideFirstNewThreadOnboardingPromosAtom,
  welcomeOnboardingPendingAtom,
  welcomeV2OnboardingStorageKey,
  projectlessOnboardingCompletedAtom,
  projectlessOnboardingCompletedStorageKey,
};
