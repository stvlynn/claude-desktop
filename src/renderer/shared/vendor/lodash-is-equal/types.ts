// @ts-nocheck
// Restored from ref/webview/assets/isEqual-DoHfXEc2.js
// Type surface for the bundled lodash deep-equality compatibility chunk.

export type EqualityCustomizer = (
  leftValue: unknown,
  rightValue: unknown,
  key?: PropertyKey,
  leftObject?: object,
  rightObject?: object,
  stack?: SeenPairs,
) => boolean | undefined;

export type SeenPairs = WeakMap<object, WeakMap<object, boolean>>;

export type IsEqualFunction = {
  (leftValue: unknown, rightValue: unknown): boolean;
  default: IsEqualFunction;
};
