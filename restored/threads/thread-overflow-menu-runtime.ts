// Restored from ref/webview/assets/thread-overflow-menu-yh1Ldo2y.js
// Runtime bindings for thread overflow actions, side chat, and heartbeat automation tabs.
import { k as useThreadCommandHandler } from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js";
import {
  initAppgFeatureGateAndSideConversationRuntime as initSideConversationProducer,
  initAppgThreadActionAndMessageRuntime as initThreadActionMenuRuntime,
} from "../runtime/appg-shared-runtime-initializers";
import { initSignalStateRuntime as initQueryRuntime } from "../runtime/signal-state-runtime";

import {
  initAppServerRequestRuntime as initSideConversationPromptProducer,
  sendAppServerRequest as runConversationAction,
} from "../runtime/app-server-request";

import { initToastRuntime, toastSignal } from "../runtime/toast-runtime";
import { sendHostRequest } from "../runtime/host-request-runtime";

import { initReactRuntime } from "../runtime/shared-utility-runtime";

import { initVscodeBridgeRuntime as initDeveloperInstructionsProducer } from "../runtime/platform-content-runtime";
import {
  appLogger as logger,
  initAppLoggerRuntime as initConversationActionAndLoggerRuntime,
} from "../runtime/app-logger";

import {
  Ga as initElectronPlatformContent,
  ii as closeSideChatThreadAssociation,
  Ln as initKeyboardModifierState,
  Rn as useCommandRegistration,
  ri as initToastProducer,
  Si as initThreadOverflowQueryRuntime,
  ti as registerSideChatThreadAssociation,
  Wa as PlatformContentGate,
  xi as RenameThreadDialog,
} from "../vendor/pull-request-thread-actions-runtime";
import {
  _c as getPanelController,
  a as forkConversationFromLatest,
  b as initForkThreadMessages,
  C as useThreadActions,
  c as localEnvironmentSelectionsByWorkspaceSignal,
  Cn as initForkDialogLocalIcon,
  ed as bottomPanelActivationSignal,
  Ga as MoreHorizontalIcon,
  Ka as initMoreHorizontalIcon,
  kn as initForkDialogWorktreeIcon,
  l as initPendingWorktreeNavigationRoute,
  n as initProjectsAppProducer,
  o as createForkConversationPendingWorktree,
  On as WorktreeForkIcon,
  rd as rightPanelActivationSignal,
  S as useThreadPinControls,
  sd as initThreadPanelProducer,
  Sn as LocalForkIcon,
  So as initWorkspaceRouteHelpers,
  s as initThreadActionMessages,
  t as SideChatIcon,
  wo as isSideChatUnavailable,
  x as threadActionMessages,
  yc as initNavigationProducer,
  Yi as threadActionShortcutSignal,
  Bx as modelSelectionSignal,
  cm as conversationHostIdSignal,
  Ou as buildInstructionOverrides,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  mv as initCurrentRefViewRuntime,
  Ob as initConversationCacheProducer,
  Op as initHostConversationActionsProducer,
  Ov as useNavigate,
  Sm as threadSourceSignal,
  Up as conversationCollaborationModeSignal,
  Wp as conversationModelOverrideSignal,
} from "../vendor/projects-app-shared-runtime";
import {
  Ar as initAutomationPanelRuntime,
  Du as initProfileRouteProducer,
  Eu as LoadingPanel,
  gm as initHeartbeatAutomationTabsRuntime,
  hm as HeartbeatAutomationIcon,
  Jm as initCreateHeartbeatAutomationRuntime,
  jr as openExistingHeartbeatAutomationTab,
  Mr as openCreateHeartbeatAutomationTab,
} from "../vendor/profile-page-runtime";
import {
  useScope,
  useSignalValue,
  useScopedValue,
} from "../runtime/app-scope-hooks";
import { initScopeRuntime } from "../runtime/app-scope-runtime";

const initConversationActionProducer = initConversationActionAndLoggerRuntime;
const initLoggerRuntime = initConversationActionAndLoggerRuntime;
const useSignalSnapshot = useScopedValue;

export {
  bottomPanelActivationSignal,
  buildInstructionOverrides,
  closeSideChatThreadAssociation,
  conversationCollaborationModeSignal,
  conversationHostIdSignal,
  conversationModelOverrideSignal,
  createForkConversationPendingWorktree,
  forkConversationFromLatest,
  getPanelController,
  HeartbeatAutomationIcon,
  initAutomationPanelRuntime,
  initConversationActionProducer,
  initConversationCacheProducer,
  initCreateHeartbeatAutomationRuntime,
  initCurrentRefViewRuntime,
  initDeveloperInstructionsProducer,
  initElectronPlatformContent,
  initForkDialogLocalIcon,
  initForkDialogWorktreeIcon,
  initForkThreadMessages,
  initHeartbeatAutomationTabsRuntime,
  initHostConversationActionsProducer,
  initKeyboardModifierState,
  initLoggerRuntime,
  initMoreHorizontalIcon,
  initNavigationProducer,
  initPendingWorktreeNavigationRoute,
  initProfileRouteProducer,
  initProjectsAppProducer,
  initQueryRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initSideConversationProducer,
  initSideConversationPromptProducer,
  initThreadActionMenuRuntime,
  initThreadActionMessages,
  initThreadOverflowQueryRuntime,
  initThreadPanelProducer,
  initToastProducer,
  initToastRuntime,
  initWorkspaceRouteHelpers,
  isSideChatUnavailable,
  LoadingPanel,
  localConversationRouteScope,
  localEnvironmentSelectionsByWorkspaceSignal,
  LocalForkIcon,
  logger,
  modelSelectionSignal,
  MoreHorizontalIcon,
  openCreateHeartbeatAutomationTab,
  openExistingHeartbeatAutomationTab,
  PlatformContentGate,
  registerSideChatThreadAssociation,
  RenameThreadDialog,
  rightPanelActivationSignal,
  runConversationAction,
  sendHostRequest,
  SideChatIcon,
  threadActionMessages,
  threadActionShortcutSignal,
  threadSourceSignal,
  toastSignal,
  useCommandRegistration,
  useNavigate,
  useScope,
  useScopedValue,
  useSignalSnapshot,
  useSignalValue,
  useThreadActions,
  useThreadCommandHandler,
  useThreadPinControls,
  WorktreeForkIcon,
};
