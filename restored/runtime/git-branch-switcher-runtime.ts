// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

export {
  $h as getHostCacheKey,
  GN as useGlobalSettingValue,
  HF as branchSettingKeys,
  Lj as PlusIcon,
  Op as initConversationStateSelectors,
  Rj as initPlusIcon,
  VN as initSwitchRuntime,
  Vh as useGitOperationQuery,
  eg as initGitRootQueryRuntime,
  fu as initWorkspaceQueryRuntime,
  gV as createQuerySignalFamily,
  gg as setConversationBranchOverride,
  hg as initConversationBranchOverrideRuntime,
  jh as createHostQueryOptions,
  tg as createGitRootQueryOptions,
  wm as localConversationTitleSignal,
  zh as updateGitMetadataCache,
} from "../vendor/appg-thread-shared-runtime";

import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  Dropdown,
  DropdownMenu,
  FormattedMessage,
  initAppDialog,
  initButtonComponentPrimitives,
  initDialogLayoutComponents,
  initDropdownMenuPrimitives,
  initIntlRuntime,
  useIntl,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import { normalizeWorkspacePath } from "../boundaries/src-l0hb-mz-p";
import {
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "./app-server-mutation-runtime";
import { appScope, initAppScope, initScopeRuntime } from "./app-scope-runtime";
import { useScope, useScopedValue } from "./app-scope-hooks";
import {
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  useGitAvailabilityQuery,
} from "./git-query-runtime";
import {
  initHostQueryRuntime,
  initQueryDurationConstants,
  queryDurations,
  useDebouncedValue,
} from "./host-query-runtime";
import { initIntlMessageRuntime } from "./intl-message-runtime";
import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";
import {
  getChunkModuleExports,
  initReactRuntime,
} from "./shared-utility-runtime";
import { initToastRuntime, toastSignal } from "./toast-runtime";

export {
  appScope,
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  Dropdown,
  DropdownMenu,
  FormattedMessage,
  getChunkModuleExports,
  initAppDialog,
  initAppScope,
  initButtonComponentPrimitives,
  initDialogLayoutComponents,
  initDropdownMenuPrimitives,
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initHostQueryRuntime,
  initIntlMessageRuntime,
  initIntlRuntime,
  initQueryDurationConstants,
  initReactQueryRuntime,
  initReactRuntime,
  initScopeRuntime,
  initToastRuntime,
  initVscodeApiBridge,
  normalizeWorkspacePath,
  queryDurations,
  toastSignal,
  useAppServerMutation,
  useDebouncedValue,
  useGitAvailabilityQuery,
  useIntl,
  useQueryClient,
  useScope,
  useScopedValue,
};

export {
  Dl as initCurrentGitBranchSignal,
  Tl as currentGitBranchSignal,
} from "../vendor/projects-app-shared-runtime";

export {
  Dl as CreateBranchDialogGraphic,
  Jl as CommitChangesBeforeBranchSwitchPanel,
  Kl as initCommitChangesBeforeBranchSwitchPanel,
  Ol as initBranchSwitchReviewPanelRuntime,
  Xl as buildDefaultBranchName,
  Yl as initDefaultBranchNameRuntime,
  Zl as initBranchSearchMenuMessages,
  au as initBranchSearchMenuRuntime,
  bl as initBranchSwitchReviewRuntime,
  cu as initCommitFlowRuntime,
  ou as findFileDiffStats,
  ql as useDefaultBranchQuery,
  ru as branchSwitchReviewTargetSignal,
  su as mergeReviewSummaryStats,
  yl as BranchSearchMenu,
} from "../vendor/profile-page-runtime";
