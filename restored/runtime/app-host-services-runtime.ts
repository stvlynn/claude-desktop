// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// App-host service bridge bootstrap used by the Electron app-main entry.
import {
  _S as createPersistentSignalRaw,
  Bm as onboardingWizardActionRaw,
  Df as initProductEventRuntimeRaw,
  Mb as connectAppHostServicesRaw,
  gS as initPersistentSignalRuntimeRaw,
  jb as initAppHostServicesRuntimeChunkRaw,
  nb as getCachedConversationTurnsRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";

type PersistentSignalFactory = <TValue>(
  key: string,
  defaultValue: TValue,
) => unknown;
type OnboardingWizardActionCatalog = {
  CODEX_ONBOARDING_WIZARD_ACTION_VIEWED: string;
  [action: string]: string;
};

export const createPersistentSignal =
  createPersistentSignalRaw as PersistentSignalFactory;
export const onboardingWizardAction =
  onboardingWizardActionRaw as OnboardingWizardActionCatalog;

export function initAppHostServicesRuntimeChunk(): void {
  initAppHostServicesRuntimeChunkRaw();
}

export async function connectAppHostServices(): Promise<void> {
  await connectAppHostServicesRaw();
}

export function initProductEventRuntime(): void {
  initProductEventRuntimeRaw();
}

export function initPersistentSignalRuntime(): void {
  initPersistentSignalRuntimeRaw();
}

export function getCachedConversationTurns<TTurn = unknown>(
  conversation: unknown,
): readonly TTurn[] {
  return getCachedConversationTurnsRaw(conversation) as readonly TTurn[];
}
