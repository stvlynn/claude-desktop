// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// Boundary stub for @segment/analytics-core to unblock segment-metric-helpers promotion.

export type CoreContext = unknown;
export type IntegrationsOptions = unknown;

export class PriorityQueue<T = unknown> {
  items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.shift();
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
