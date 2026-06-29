// Restored from ref/webview/assets/thread-side-panel-tabs-tc-mAOFK.js
// Semantic side-panel tab barrel for the updated Codex webview bundle.
import {
  Cl as toggleThreadSidePanel,
  fl as getBrowserTabIdForSidePanelOpen,
  gl as openThreadBrowserSidePanelTab,
  hl as openThreadBranchReviewSidePanelTab,
  ml as openSessionSandboxSidePanel,
  pl as initThreadSidePanelTabsChunk,
  Sl as primeBrowserTabTransfers,
  vl as openThreadBrowserSidePanelTabWithoutAnimation,
  xl as openThreadTimelineSidePanel,
  yl as openThreadLastTurnReviewSidePanelTab,
  _l as openThreadBrowserSidePanelTabWithPendingState,
  bl as openThreadReviewSidePanelTab,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import {
  closeMcpAppTab as closeThreadMcpAppSidePanelTab,
  mcpAppTabId as getThreadMcpAppSidePanelTabId,
  openMcpAppTab as openThreadMcpAppSidePanelTab,
} from "../plugins/mcp-app-tab";

initThreadSidePanelTabsChunk();

const THREAD_SIDE_PANEL_TAB = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;

export {
  THREAD_SIDE_PANEL_TAB,
  closeThreadMcpAppSidePanelTab,
  getBrowserTabIdForSidePanelOpen,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadBranchReviewSidePanelTab,
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  openThreadBrowserSidePanelTabWithoutAnimation,
  openThreadLastTurnReviewSidePanelTab,
  openThreadMcpAppSidePanelTab,
  openThreadReviewSidePanelTab,
  openThreadTimelineSidePanel,
  primeBrowserTabTransfers,
  toggleThreadSidePanel,
};
