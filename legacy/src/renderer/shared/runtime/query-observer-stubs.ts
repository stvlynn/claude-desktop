// Restored from ref/webview/assets/app-scope-Cp_DWew0.js
// TanStack Query-compatible observer stubs used by the restored useQueries shim.
// These placeholders keep the useQueries implementation compiling until the real
// query runtime is wired.

export class appScopeT {
  options: Record<string, unknown>;
  constructor(_client: unknown, options: Record<string, unknown>) {
    this.options = options;
  }
  setOptions(options: Record<string, unknown>): void {
    this.options = options;
  }
  getCurrentResult(): Record<string, unknown> {
    return {};
  }
  subscribe(_listener: (result: Record<string, unknown>) => void): () => void {
    return () => {};
  }
  destroy(): void {}
  getCurrentQuery(): unknown {
    return undefined;
  }
  getOptimisticResult(
    _options: Record<string, unknown>,
  ): Record<string, unknown> {
    return {};
  }
  trackResult(
    result: Record<string, unknown>,
    _tracker: (prop: string) => void,
  ): Record<string, unknown> {
    return result;
  }
  trackProp(_prop: string): void {}
}

export class appScopeX {
  listeners = new Set<(value: unknown) => void>();
  subscribe(listener: (value: unknown) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  hasListeners(): boolean {
    return this.listeners.size > 0;
  }
}
