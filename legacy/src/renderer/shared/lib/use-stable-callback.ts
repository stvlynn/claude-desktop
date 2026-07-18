// Restored from ref/webview/assets/use-stable-callback-BtVbB7Gq.js
// Stable callback hook: keeps the latest callback reference without changing
// the identity of the returned function.
import React from "react";

export function initUseStableCallback(): void {}

export function useStableCallback<TArgs extends unknown[], TReturn>(
  callback: (...args: TArgs) => TReturn,
): (...args: TArgs) => TReturn {
  const callbackRef = React.useRef(callback);
  React.useInsertionEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return React.useCallback((...args: TArgs): TReturn => {
    return callbackRef.current(...args);
  }, []);
}
