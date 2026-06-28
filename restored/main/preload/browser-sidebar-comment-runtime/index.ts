// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment runtime document-context public surface.

export { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
export {
  areBrowserSidebarAnchorsEqual,
  areScrollContainerSnapshotsEqual,
} from "./anchors";
export { normalizeCssColorValue } from "./colors";
export {
  DEFAULT_DESIGN_GROUP_ATTRIBUTE,
  mergeDesignStyleDeclarationValues,
  readDesignStyleDeclarations,
  serializeDesignDraftStyles,
} from "./design-css";
export {
  BROWSER_SIDEBAR_DOM_OBSERVER_INIT,
  observeBrowserSidebarExternalDomMutations,
  subscribeToBrowserSidebarScrollContainers,
} from "./dom-observers";
export {
  addBrowserSidebarElementDesignGroup,
  readBrowserSidebarElementDesignGroups,
  setBrowserSidebarElementDesignGroups,
  syncBrowserSidebarDesignDraftElements,
} from "./design-dom-groups";
export { observeBrowserSidebarDesignDraftDom } from "./design-dom-observer";
export {
  DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID,
  syncBrowserSidebarDesignDraftStyleElement,
} from "./design-dom-style";
export {
  applyBrowserSidebarDesignTextDrafts,
  DEFAULT_DESIGN_ORIGINAL_TEXT_ATTRIBUTE,
  restoreBrowserSidebarDesignTextDrafts,
} from "./design-dom-text";
export {
  getElementOwnerWindow,
  getVisibleElementViewportRect,
  isBrowserSidebarElement,
  isElementVisibleForBrowserSidebar,
} from "./element-geometry";
export {
  BROWSER_SIDEBAR_COMMENTS_ROOT_ID,
  BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE,
  eventComposedPathIncludes,
  eventHasBrowserSidebarInteractionBlocker,
  isBrowserSidebarOverlayElement,
  isBrowserSidebarRootEvent,
  stopBrowserSidebarEvent,
} from "./event-interactions";
export {
  BROWSER_SIDEBAR_BASE_DESIGN_STYLE_PROPERTIES,
  BROWSER_SIDEBAR_FLEX_DESIGN_STYLE_PROPERTIES,
  getBrowserSidebarElementSnapshot,
  readBrowserSidebarElementDesignStyleDeclarations,
} from "./element-metadata";
export {
  getBrowserSidebarElementAccessibleName,
  getBrowserSidebarElementImmediateText,
  getBrowserSidebarElementPath,
  getBrowserSidebarElementTargetLabel,
  getBrowserSidebarElementTitle,
  getBrowserSidebarNearbyElementText,
  readBrowserSidebarElementTextDraft,
} from "./element-text";
export {
  createGoogleDocsDocumentContext,
  isGoogleWorkspaceDocumentUrl,
  parseGoogleDocsDocumentUrl,
  parseGoogleSheetsDocumentId,
} from "./google-workspace-urls";
export {
  getGoogleDocsElementHoverClassName,
  getGoogleDocsPostedRegionClassName,
  getGoogleDocsRegionHoverClassName,
  isGoogleDocsAnnotationOverlay,
  isGoogleDocsAnnotationTarget,
  isLargeEnoughForGoogleDocsAnnotation,
} from "./google-docs-overlay";
export {
  applyBrowserSidebarViewportSizeOverride,
  BROWSER_SIDEBAR_MARKER_POINT_INSET,
  browserSidebarRectToOverlayStyle,
  computeBrowserSidebarEditorOverlayRect,
  computeBrowserSidebarMarkerViewportSize,
  getBrowserSidebarThemeVariant,
  getBrowserSidebarViewportScrollState,
  getBrowserSidebarViewportSize,
  getElementMetadataTooltipViewportRect,
  mergeBrowserSidebarMarkerViewportSize,
  scaleBrowserSidebarOverlayRect,
} from "./overlay-layout";
export {
  areBrowserSidebarPageUrlsEquivalent,
  frameUrlMatchesWindow,
  parseBrowserSidebarPageUrl,
} from "./page-urls";
export {
  BROWSER_SIDEBAR_REGION_DRAG_THRESHOLD,
  hasBrowserSidebarRegionDragStarted,
  isPointInsideCurrentBrowserSidebarViewport,
  rectBetweenBrowserSidebarRegionDragPoints,
  updateBrowserSidebarRegionDragState,
} from "./region-drag";
export {
  clampNumber,
  computeCommentEditorRect,
  hasPointMovedPastThreshold,
  inverseViewportScale,
  isPointInsideViewportSize,
  rectBetweenPoints,
  scaleRect,
  spreadCoincidentMarkerPoints,
} from "./geometry";
export { normalizeBrowserSidebarText } from "./text";
export type {
  BrowserSidebarCommentEditorLayoutOptions,
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
export type {
  BrowserSidebarMarkerViewportSizeInput,
  BrowserSidebarMetadataTooltipRectOptions,
  BrowserSidebarOverlayRectStyle,
  BrowserSidebarThemeVariant,
  BrowserSidebarViewportScrollState,
  BrowserSidebarViewportWindow,
} from "./overlay-layout";
export type {
  BrowserSidebarRegionDragState,
  BrowserSidebarViewportSizeWindow,
} from "./region-drag";
export type {
  BrowserSidebarAnchorPoint,
  BrowserSidebarCommentAnchor,
  BrowserSidebarElementAnchor,
  BrowserSidebarRegionAnchor,
  BrowserSidebarScrollContainerSnapshot,
  BrowserSidebarTextAnchor,
  BrowserSidebarTextLocator,
} from "./anchors";
export type {
  BrowserSidebarDesignStyleDeclaration,
  BrowserSidebarDesignStyleDraft,
} from "./design-css";
export type {
  BrowserSidebarFrameWindowResolver,
  BrowserSidebarScrollContainerAnchor,
} from "./dom-observers";
export type {
  BrowserSidebarDesignDomDraft,
  BrowserSidebarDesignDomOptions,
  BrowserSidebarDesignDraftElementResolver,
} from "./design-dom-types";
export type { BrowserSidebarElementSnapshot } from "./element-metadata";
export type { BrowserSidebarTextDraft } from "./element-text";
export type {
  BrowserSidebarComposedPathEvent,
  BrowserSidebarStopEventOptions,
  BrowserSidebarStoppableEvent,
} from "./event-interactions";
export type {
  BrowserSidebarAnchorLike,
  BrowserSidebarDocumentContextInput,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarGoogleDocsDocumentLocation,
  BrowserSidebarViewportRect,
} from "./types";
