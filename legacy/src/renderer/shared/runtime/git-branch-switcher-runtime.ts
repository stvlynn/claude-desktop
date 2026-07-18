// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Boundary stub for git-branch-switcher runtime to unblock git cluster promotion.

import * as React from "react";

// Runtime init no-ops
export const initAppDialog = () => {};
export const initAppScope = () => {};
export const initBranchSearchMenuMessages = () => {};
export const initBranchSearchMenuRuntime = () => {};
export const initBranchSwitchReviewPanelRuntime = () => {};
export const initBranchSwitchReviewRuntime = () => {};
export const initButtonComponentPrimitives = () => {};
export const initCommitChangesBeforeBranchSwitchPanel = () => {};
export const initCommitFlowRuntime = () => {};
export const initConversationBranchOverrideRuntime = () => {};
export const initConversationStateSelectors = () => {};
export const initCurrentGitBranchSignal = () => {};
export const initDefaultBranchNameRuntime = () => {};
export const initDialogLayoutComponents = () => {};
export const initDropdownMenuPrimitives = () => {};
export const initGitBranchQueryRuntime = () => {};
export const initGitQueryKeyHelpers = () => {};
export const initGitRootQueryRuntime = () => {};
export const initHostQueryRuntime = () => {};
export const initIntlMessageRuntime = () => {};
export const initIntlRuntime = () => {};
export const initPlusIcon = () => {};
export const initQueryDurationConstants = () => {};
export const initReactQueryRuntime = () => {};
export const initReactRuntime = () => {};
export const initScopeRuntime = () => {};
export const initSwitchRuntime = () => {};
export const initToastRuntime = () => {};
export const initVscodeApiBridge = () => {};
export const initWorkspaceQueryRuntime = () => {};

// Signals / atoms
export const appScope = {};
export const branchSwitchReviewTargetSignal = {};
export const currentGitBranchSignal = {};
export const localConversationTitleSignal = {};
export const toastSignal = {};

// Query / mutation hooks
export function useAppServerMutation() {
  return { mutate: () => {}, mutateAsync: async () => ({}) };
}
export function useGitAvailabilityQuery() {
  return { data: true };
}
export function useGitOperationQuery() {
  return { data: undefined };
}
export function useQueryClient() {
  return {};
}
export function useScope() {
  return {};
}
export function useScopedValue() {
  return undefined;
}
export function useGlobalSettingValue() {
  return undefined;
}
export function useDefaultBranchQuery() {
  return { data: undefined };
}
export function useDebouncedValue<T>(value: T): T {
  return value;
}
export function useIntl() {
  return { formatMessage: ({ defaultMessage }: { defaultMessage: string }) => defaultMessage };
}

// Helpers
export const getChunkModuleExports = () => ({});
export const getHostCacheKey = () => "";
export const queryDurations = { stale: 0, gcTime: 0 };
export const normalizeWorkspacePath = (path: string) => path;
export const createGitRootQueryOptions = () => ({}) as any;
export const createHostQueryOptions = () => ({}) as any;
export const createQuerySignalFamily = () => ({}) as any;
export const updateGitMetadataCache = () => {};
export const branchSettingKeys = [];
export const buildDefaultBranchName = () => "main";
export const mergeReviewSummaryStats = () => ({});
export const findFileDiffStats = () => undefined;
export const setConversationBranchOverride = () => {};

// UI primitives
export const BranchSearchMenu = () => null;
export const Button = (props: any) => React.createElement("button", props);
export const CommitChangesBeforeBranchSwitchPanel = () => null;
export const CreateBranchDialogGraphic = () => null;
export const DialogBody = (props: any) => React.createElement("div", props);
export const DialogFooter = (props: any) => React.createElement("div", props);
export const DialogHeader = (props: any) => React.createElement("div", props);
export const DialogLayout = (props: any) => React.createElement("div", props);
export const DialogSection = (props: any) => React.createElement("div", props);
export const Dropdown = (props: any) => React.createElement("div", props);
export const DropdownMenu = () => null;
export const FormattedMessage = ({ defaultMessage }: { defaultMessage?: string }) =>
  React.createElement(React.Fragment, null, defaultMessage);
export const PlusIcon = () => null;
