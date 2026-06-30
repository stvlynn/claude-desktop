// Restored from ref/webview/assets/middleware-m1mRm6yO.js
// Current Rolldown build merged the Segment middleware entry and base runtime.
import {
  middlewareA as AnalyticsEvent,
  middlewareC as getAnalyticsPackageType,
  middlewareD as getGlobalScope,
  middlewareI as segmentFacadeClasses,
  middlewareL as analyticsVersion,
  middlewareN as sourceMiddlewarePlugin,
  middlewareO as RemoteMetricsStore,
  middlewareR as createSegmentFacade,
  middlewareS as analyticsApiHost,
  middlewareT as applyDestinationMiddleware,
  middlewareU as segmentFetch,
} from "./segment-middleware";

export function initGlobalScopeResolver(): void {}
export function initAnalyticsEventClass(): void {}
export function initAnalyticsApiHost(): void {}
export function initAnalyticsVersion(): void {}
export function initFacadeClasses(): void {}
export function initAnalyticsPackageType(): void {}
export function initSegmentMiddlewareChunk(): void {}
export function initRemoteMetricsClass(): void {}
export function initFetchWrapper(): void {}

export {
  AnalyticsEvent,
  RemoteMetricsStore,
  analyticsApiHost,
  analyticsVersion,
  applyDestinationMiddleware,
  createSegmentFacade,
  getAnalyticsPackageType,
  getGlobalScope,
  segmentFacadeClasses,
  segmentFetch,
  sourceMiddlewarePlugin,
};
