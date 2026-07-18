// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
export type PopcornCrdtUpdate = string | readonly unknown[];

export type PopcornCrdtUpdateInput = PopcornCrdtUpdate | null | undefined;

export type PopcornCrdtRestoreController = {
  applyCrdtUpdate(update: PopcornCrdtUpdate): Promise<void> | void;
  subscribeCrdtUpdates?(
    onUpdate: (update: PopcornCrdtUpdate) => void,
  ): void | (() => void);
};

export type PopcornCrdtBootstrapState = {
  initialCrdtState: PopcornCrdtUpdateInput;
  bootstrappedExternalCrdtUpdates: PopcornCrdtUpdate[];
};

export type UseBootstrappedExternalCrdtUpdatesOptions = {
  initialCrdtState?: PopcornCrdtUpdateInput;
  externalCrdtUpdates?: readonly PopcornCrdtUpdateInput[] | null;
};

export type UseBootstrappedExternalCrdtUpdatesResult = {
  initialCrdtState: PopcornCrdtUpdateInput;
  externalCrdtUpdates: PopcornCrdtUpdate[];
};

export type UseExternalCrdtRestoreStateOptions = {
  artifactLabel: string;
  controller?: PopcornCrdtRestoreController | null;
  externalCrdtUpdates?: readonly PopcornCrdtUpdateInput[] | null;
  onCrdtUpdate?: (update: PopcornCrdtUpdate) => void;
};

export type ExternalCrdtRestoreState =
  | {
      kind: "restoring";
      pendingUpdateCount: number;
    }
  | {
      kind: "failed";
      artifactLabel: string;
      errorMessage: string;
      pendingUpdateCount: number;
    };

export type ExternalCrdtRestoreOverlayProps = {
  artifactLabel: string;
  restoreState: ExternalCrdtRestoreState | null;
};
