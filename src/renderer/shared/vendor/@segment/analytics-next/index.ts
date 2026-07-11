// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// @ts-nocheck
// Boundary stub for @segment/analytics-next to unblock segment-metric-helpers promotion.

export type SegmentEvent = unknown;

export class Context {
  event: SegmentEvent;
  constructor(event: SegmentEvent) {
    this.event = event;
  }
}

export { Context as SegmentContext };
