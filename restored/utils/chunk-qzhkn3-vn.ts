// Restored from ref/webview/assets/chunk-QZHKN3VN-D8sZjzJc.js
// chunk-QZHKN3VN-D8sZjzJc chunk restored from the Codex webview bundle.
export class ImperativeState<TRecords = unknown> {
  public records: TRecords;
  public constructor(public readonly init: () => TRecords) {
    this.records = this.init();
  }
  public reset(): void {
    this.records = this.init();
  }
}

export function initChunkQZHKN3VN(): void {}
