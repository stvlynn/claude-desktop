// @ts-nocheck
// Restored from ref/webview/assets/modal-controller-state-BN7B52no.js
// modal-controller-state-BN7B52no chunk restored from the Codex webview bundle.

import type { ComponentType } from "react";
import { _appScopeG, _appScopeS, _appScopeT } from "./app-scope";

type ModalEntry<Props = unknown> = {
  key: number;
  ModalComponent: ComponentType<Props>;
  props: Props;
};

type ModalControllerState = {
  modals: ModalEntry[];
  nextKey: number;
};

type ScopedModalStore = {
  get<T>(signal: unknown): T;
  set<T>(signal: unknown, updater: T | ((current: T) => T)): void;
};

const modalControllerStateSignal = _appScopeG(
  _appScopeT,
  (): ModalControllerState => ({
    modals: [],
    nextKey: 1,
  }),
);

export function initModalControllerStateChunk(): void {}

function isSameModalComponent(
  left: ComponentType<unknown>,
  right: ComponentType<unknown>,
) {
  return left === right;
}

export function useModalControllerState(): ModalControllerState {
  return _appScopeS(modalControllerStateSignal) as ModalControllerState;
}

export function isModalControllerModalOpen(
  store: ScopedModalStore,
  ModalComponent: ComponentType<unknown>,
): boolean {
  return store
    .get<ModalControllerState>(modalControllerStateSignal)
    .modals.some((modal) =>
      isSameModalComponent(modal.ModalComponent, ModalComponent),
    );
}

export function openModalControllerModal<Props>(
  store: ScopedModalStore,
  ModalComponent: ComponentType<Props>,
  props: Props,
): void {
  store.set<ModalControllerState>(modalControllerStateSignal, (state) => {
    const existingModal = state.modals.find((modal) =>
      isSameModalComponent(
        modal.ModalComponent as ComponentType<unknown>,
        ModalComponent as ComponentType<unknown>,
      ),
    );
    const nextModal: ModalEntry<Props> = {
      key: existingModal?.key ?? state.nextKey,
      ModalComponent,
      props,
    };
    if (existingModal) {
      return {
        ...state,
        modals: [
          ...state.modals.filter(
            (modal) =>
              !isSameModalComponent(
                modal.ModalComponent,
                ModalComponent as ComponentType<unknown>,
              ),
          ),
          nextModal as ModalEntry<unknown>,
        ],
      };
    }
    return {
      modals: [...state.modals, nextModal as ModalEntry<unknown>],
      nextKey: state.nextKey + 1,
    };
  });
}

export function closeModalControllerModal(
  store: ScopedModalStore,
  ModalComponent: ComponentType<unknown>,
): void {
  store.set<ModalControllerState>(modalControllerStateSignal, (state) => {
    const remainingModals = state.modals.filter(
      (modal) => !isSameModalComponent(modal.ModalComponent, ModalComponent),
    );
    return remainingModals.length === state.modals.length
      ? state
      : {
          ...state,
          modals: remainingModals,
        };
  });
}
