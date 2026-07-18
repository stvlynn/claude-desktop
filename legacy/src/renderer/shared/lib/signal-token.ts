// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Shared signal-token primitive used by sidebar state, renderer debug settings,
// and other signal-store consumers.

export type SignalToken<TValue> = {
  readonly defaultValue: TValue;
  readonly key: string;
};

export type SignalStore = {
  get<TValue>(signal: SignalToken<TValue>): TValue;
  set<TValue>(
    signal: SignalToken<TValue>,
    value: TValue | ((current: TValue) => TValue),
  ): void;
};

export function createSignalToken<TValue>(
  key: string,
  defaultValue: TValue,
): SignalToken<TValue> {
  return { defaultValue, key };
}
