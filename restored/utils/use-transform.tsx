// Restored from ref/webview/assets/use-transform-Cjp4fIKs.js
// use-transform-Cjp4fIKs chunk restored from the Codex webview bundle.
import React from "react";
import * as framerMotionValues from "../vendor/framer-motion-single-value";
const createMotionValue = framerMotionValues.singleValueJ;
const frame = framerMotionValues._singleValueDt;
const collectedMotionValues = framerMotionValues._singleValueQ;
const createInterpolator = framerMotionValues._singleValueTt;
const cancelFrame = framerMotionValues.singleValueUt;
type MotionValue<T = unknown> = {
  get(): T;
  set(value: T): void;
  on(eventName: "change" | string, listener: (latest: T) => void): () => void;
};
type MotionConfigContextValue = {
  isStatic?: boolean;
};
const MotionConfigContext = React.createContext<MotionConfigContextValue>({
  isStatic: false,
});
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useConstant<T>(initializer: () => T): T {
  const ref = React.useRef<T | null>(null);
  if (ref.current === null) {
    ref.current = initializer();
  }
  return ref.current;
}
function createTransformer(...args: Array<any>) {
  const hasInputValue = !Array.isArray(args[0]);
  const argOffset = hasInputValue ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const transformer = createInterpolator(inputRange, outputRange, options);
  return hasInputValue ? transformer(inputValue) : transformer;
}
function useMotionValue<T>(initialValue: T): MotionValue<T> {
  const value = useConstant(() => createMotionValue(initialValue));
  const { isStatic } = React.useContext(MotionConfigContext);
  if (isStatic) {
    const [, forceRender] = React.useState(initialValue);
    React.useEffect(() => value.on("change", forceRender), []);
  }
  return value;
}
function useCombineMotionValues<T>(
  values: Array<MotionValue>,
  combineValues: () => T,
): MotionValue<T> {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((motionValue) =>
      motionValue.on("change", scheduleUpdate),
    );
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed<T>(compute: () => T): MotionValue<T> {
  collectedMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectedMotionValues.current, compute);
  collectedMotionValues.current = undefined;
  return value;
}
function useListTransform<T>(
  values: Array<MotionValue>,
  transformer: (latest: Array<unknown>) => T,
): MotionValue<T> {
  const latest = useConstant<Array<unknown>>(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    for (let index = 0; index < values.length; index++) {
      latest[index] = values[index].get();
    }
    return transformer(latest);
  });
}
function useTransform<T>(
  value: MotionValue | Array<MotionValue> | (() => T),
  inputRange?: Array<number> | ((latest: unknown) => T),
  outputRange?: Array<T>,
  options?: unknown,
): MotionValue<T> {
  if (typeof value === "function") {
    return useComputed(value);
  }
  const transformer =
    typeof inputRange === "function"
      ? inputRange
      : createTransformer(inputRange, outputRange, options);
  return Array.isArray(value)
    ? useListTransform(value, transformer as (latest: Array<unknown>) => T)
    : useListTransform([value], ([latest]) => transformer(latest));
}
export type { MotionValue };
export {
  createMotionValue,
  useCombineMotionValues,
  useMotionValue,
  useTransform,
};
