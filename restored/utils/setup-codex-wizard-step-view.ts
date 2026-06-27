// Restored from ref/webview/assets/setup-codex-wizard-step-view-BS-WCe9O.js
// Tracks one-time onboarding wizard step view events.

import { useEffect, useRef } from "react";
import { once } from "../runtime/commonjs-interop";
import {
  _appScopeO as useCurrentAppScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  JV as initReactRuntime,
  kE as initProductEventRuntime,
  qV as getChunkModuleExports,
  ub as initOnboardingWizardTrackingRuntime,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import { trackOnboardingWizardAction } from "../boundaries/thread-context-inputs.facade";
import { onboardingWizardAction } from "../generated/product-logger";

export const initSetupCodexWizardStepViewChunk = once(() => {
  getChunkModuleExports();
  initProductEventRuntime();
  initScopeRuntime();
  initReactRuntime();
  initOnboardingWizardTrackingRuntime();
  initAppScope();
});

export function useSetupCodexWizardStepView(
  phase: string,
  enabled: boolean = true,
): void {
  const appScope = useCurrentAppScope(appScopeRoot);
  const viewedPhaseRef = useRef<string | null>(null);
  useEffect(() => {
    if (!enabled || viewedPhaseRef.current === phase) return;
    viewedPhaseRef.current = phase;
    trackOnboardingWizardAction(
      appScope,
      phase,
      onboardingWizardAction.CODEX_ONBOARDING_WIZARD_ACTION_VIEWED,
    );
  }, [enabled, phase, appScope]);
}
