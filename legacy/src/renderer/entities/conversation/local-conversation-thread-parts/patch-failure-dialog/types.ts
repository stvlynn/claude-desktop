// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Patch failure dialog type definitions.

export type PatchFailureDialogProps = {
  cwd?: string | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  failure?: PatchActionFailure | null;
  hostId?: string | null;
};

export type PatchActionResult = {
  appliedPaths: string[];
  conflictedPaths: string[];
  skippedPaths: string[];
  status: "success" | "partial-success" | "error" | string;
  execOutput?: { output?: string | null } | null;
};

export type PatchActionFailure = {
  action: "undo" | "reapply";
  result: PatchActionResult;
};

export type PatchPathGroupProps = {
  toneClassName?: string;
  heading?: string;
  paths?: string[];
};
