// Restored from ref/webview/assets/sidebar-onboarding-checklist-state-DcFn_T2V.js
// sidebar-onboarding-checklist-state-DcFn_T2V chunk restored from the Codex webview bundle.
import { createPersistedSignal } from "../runtime/persisted-signal";
type SidebarOnboardingChecklistItemId = string;
type SidebarOnboardingChecklistState = {
  collapsed: boolean;
  completedItemIds: SidebarOnboardingChecklistItemId[];
  dismissed?: boolean;
};
type SidebarOnboardingChecklistStateByAccountId = Record<
  string,
  SidebarOnboardingChecklistState
>;
type ScopedStore = {
  set<TValue>(
    signal: unknown,
    value: TValue | ((previous: TValue | null | undefined) => TValue),
  ): void;
};
const defaultSidebarOnboardingChecklistState: SidebarOnboardingChecklistState =
  {
    collapsed: false,
    completedItemIds: [],
  };
const emptySidebarOnboardingChecklistStateByAccountId: SidebarOnboardingChecklistStateByAccountId =
  {};
const sidebarOnboardingChecklistStateAState = (store: ScopedStore): void => {
  store.set(
    sidebarOnboardingChecklistStateCState,
    emptySidebarOnboardingChecklistStateByAccountId,
  );
};
const sidebarOnboardingChecklistStateCState = createPersistedSignal(
  "sidebar-onboarding-checklist-state-by-account-id-v1",
  emptySidebarOnboardingChecklistStateByAccountId,
);
function sidebarOnboardingChecklistStateIState(
  state: SidebarOnboardingChecklistState,
  itemId: SidebarOnboardingChecklistItemId,
): boolean {
  return state.completedItemIds.includes(itemId);
}
function sidebarOnboardingChecklistStateNState(
  store: ScopedStore,
  accountId: string,
): void {
  store.set(sidebarOnboardingChecklistStateCState, (stateByAccountId) => {
    const nextStateByAccountId =
      stateByAccountId ?? emptySidebarOnboardingChecklistStateByAccountId;
    const currentState = sidebarOnboardingChecklistStateRState(
      nextStateByAccountId,
      accountId,
    );
    return {
      ...nextStateByAccountId,
      [accountId]: {
        ...currentState,
        dismissed: true,
      },
    };
  });
}
function sidebarOnboardingChecklistStateOState(
  store: ScopedStore,
  accountId: string,
  collapsed: boolean,
): void {
  store.set(sidebarOnboardingChecklistStateCState, (stateByAccountId) => {
    const nextStateByAccountId =
      stateByAccountId ?? emptySidebarOnboardingChecklistStateByAccountId;
    const currentState = sidebarOnboardingChecklistStateRState(
      nextStateByAccountId,
      accountId,
    );
    return {
      ...nextStateByAccountId,
      [accountId]: {
        ...currentState,
        collapsed,
      },
    };
  });
}
function sidebarOnboardingChecklistStateRState(
  stateByAccountId:
    | SidebarOnboardingChecklistStateByAccountId
    | null
    | undefined,
  accountId: string,
): SidebarOnboardingChecklistState {
  return (
    stateByAccountId?.[accountId] ?? defaultSidebarOnboardingChecklistState
  );
}
const sidebarOnboardingChecklistStateSState = createPersistedSignal(
  "sidebar-onboarding-checklist-debug-enabled",
  false,
);
function sidebarOnboardingChecklistStateTState(
  store: ScopedStore,
  accountId: string,
  itemId: SidebarOnboardingChecklistItemId,
): void {
  store.set(sidebarOnboardingChecklistStateCState, (stateByAccountId) => {
    const nextStateByAccountId =
      stateByAccountId ?? emptySidebarOnboardingChecklistStateByAccountId;
    const currentState = sidebarOnboardingChecklistStateRState(
      nextStateByAccountId,
      accountId,
    );
    return sidebarOnboardingChecklistStateIState(currentState, itemId)
      ? nextStateByAccountId
      : {
          ...nextStateByAccountId,
          [accountId]: {
            ...currentState,
            completedItemIds: [...currentState.completedItemIds, itemId],
          },
        };
  });
}
export {
  sidebarOnboardingChecklistStateAState,
  sidebarOnboardingChecklistStateCState,
  sidebarOnboardingChecklistStateIState,
  sidebarOnboardingChecklistStateNState,
  sidebarOnboardingChecklistStateOState,
  sidebarOnboardingChecklistStateRState,
  sidebarOnboardingChecklistStateSState,
  sidebarOnboardingChecklistStateTState,
};
