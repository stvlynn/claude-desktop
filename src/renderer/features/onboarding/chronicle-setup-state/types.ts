// @ts-nocheck
// Stubs for chronicle-setup-state local types.
// These are placeholders to allow the restored cluster to compile while
// real shapes are reverse-engineered from the ref chunk.

export type ChroniclePermissionStatus =
  | "granted"
  | "denied"
  | "restricted"
  | "not-determined"
  | "unknown";

export type ChronicleSidecarProcessState =
  | "running"
  | "restarting"
  | "starting"
  | "stopping"
  | "disabled"
  | "stopped";

export type ChronicleSetupState =
  | { kind: "ready" }
  | { kind: "failed"; message: string }
  | { kind: "preparing" }
  | { kind: "starting" }
  | {
      kind: "screen-recording-permission-needed";
      status: ChroniclePermissionStatus;
    }
  | {
      kind: "accessibility-permission-needed";
      status: ChroniclePermissionStatus;
    };

export type BuildChronicleSetupStateInput = {
  accessibilityStatus?: ChroniclePermissionStatus | null;
  errorMessage?: string | null;
  isSidecarPresent: boolean;
  isUpdatingChronicle: boolean;
  processState?: ChronicleSidecarProcessState | null;
  screenRecordingStatus?: ChroniclePermissionStatus | null;
};

export type MemoryConfig = {
  disableOnExternalContext?: boolean | null;
  generateMemories?: boolean | null;
  useMemories?: boolean | null;
};

export type CodexMemoryStateSnapshot = {
  generateMemoriesEnabled: boolean;
  memoryFeatureEnabled: boolean;
  memoriesEnabled: boolean;
  useMemoriesEnabled: boolean;
};

export type CodexMemoryStateSnapshotInput = {
  isMemoryFeatureEnabled: boolean;
  memoryConfig: MemoryConfig;
};
