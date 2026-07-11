// @ts-nocheck
// Restored from ref/webview/assets/isEqual-DoHfXEc2.js
// Deep-equality implementation used by Codex's bundled lodash compatibility layer.
import type { EqualityCustomizer, IsEqualFunction, SeenPairs } from "./types";

const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;
const objectToString = Object.prototype.toString;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

function sameValueZero(leftValue: unknown, rightValue: unknown) {
  return (
    leftValue === rightValue ||
    (leftValue !== leftValue && rightValue !== rightValue)
  );
}

function isObjectLike(value: unknown): value is object {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

function getTag(value: unknown) {
  return objectToString.call(value);
}

function enumerableKeys(value: object): PropertyKey[] {
  let keys: PropertyKey[] = Object.keys(value);
  for (let symbol of Object.getOwnPropertySymbols(value))
    if (propertyIsEnumerable.call(value, symbol)) keys.push(symbol);
  return keys;
}

function hasSeenPair(
  stack: SeenPairs,
  leftObject: object,
  rightObject: object,
) {
  return stack.get(leftObject)?.get(rightObject) === true;
}

function rememberPair(
  stack: SeenPairs,
  leftObject: object,
  rightObject: object,
) {
  let rightObjects = stack.get(leftObject);
  if (!rightObjects) {
    rightObjects = new WeakMap();
    stack.set(leftObject, rightObjects);
  }
  rightObjects.set(rightObject, true);
}

function bytesFor(value: ArrayBuffer | ArrayBufferView) {
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  return new Uint8Array(value.buffer as ArrayBuffer, value.byteOffset, value.byteLength);
}

function equalBytes(
  leftValue: ArrayBuffer | ArrayBufferView,
  rightValue: ArrayBuffer | ArrayBufferView,
) {
  let leftBytes = bytesFor(leftValue);
  let rightBytes = bytesFor(rightValue);
  if (leftBytes.length !== rightBytes.length) return false;
  for (let index = 0; index < leftBytes.length; index++)
    if (leftBytes[index] !== rightBytes[index]) return false;
  return true;
}

function equalUnordered(
  leftValues: readonly unknown[],
  rightValues: readonly unknown[],
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  if (leftValues.length > rightValues.length) return false;
  if (
    !(bitmask & COMPARE_PARTIAL_FLAG) &&
    leftValues.length !== rightValues.length
  )
    return false;

  let matchedRightIndexes = new Set<number>();
  for (let leftIndex = 0; leftIndex < leftValues.length; leftIndex++) {
    let matched = false;
    for (let rightIndex = 0; rightIndex < rightValues.length; rightIndex++) {
      if (matchedRightIndexes.has(rightIndex)) continue;
      if (
        isEqualN(
          leftValues[leftIndex],
          rightValues[rightIndex],
          bitmask,
          customizer,
          stack,
        )
      ) {
        matchedRightIndexes.add(rightIndex);
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

function equalArrayLike(
  leftArray: ArrayLike<unknown>,
  rightArray: ArrayLike<unknown>,
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  if (leftArray.length > rightArray.length) return false;
  if (
    !(bitmask & COMPARE_PARTIAL_FLAG) &&
    leftArray.length !== rightArray.length
  )
    return false;

  for (let index = 0; index < leftArray.length; index++) {
    let customResult = customizer?.(
      leftArray[index],
      rightArray[index],
      index,
      leftArray,
      rightArray,
      stack,
    );
    if (customResult !== undefined) {
      if (!customResult) return false;
      continue;
    }
    if (!isEqualN(leftArray[index], rightArray[index], bitmask, undefined, stack))
      return false;
  }
  return true;
}

function equalObject(
  leftObject: object,
  rightObject: object,
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  if (hasSeenPair(stack, leftObject, rightObject)) return true;
  rememberPair(stack, leftObject, rightObject);

  let leftKeys = enumerableKeys(leftObject);
  let rightKeys = enumerableKeys(rightObject);

  if (
    !(bitmask & COMPARE_PARTIAL_FLAG) &&
    leftKeys.length !== rightKeys.length
  ) {
    return false;
  }

  for (let key of leftKeys) {
    if (!Object.prototype.hasOwnProperty.call(rightObject, key as string))
      return false;

    let leftValue = (leftObject as Record<PropertyKey, unknown>)[key];
    let rightValue = (rightObject as Record<PropertyKey, unknown>)[key];

    let customResult = customizer?.(
      leftValue,
      rightValue,
      key,
      leftObject,
      rightObject,
      stack,
    );
    if (customResult !== undefined) {
      if (!customResult) return false;
      continue;
    }

    if (!isEqualN(leftValue, rightValue, bitmask, undefined, stack))
      return false;
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    for (let key of rightKeys) {
      if (!Object.prototype.hasOwnProperty.call(leftObject, key as string))
        return false;
    }
  }

  return true;
}

function equalByTag(
  leftValue: unknown,
  rightValue: unknown,
  tag: string,
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
): boolean {
  switch (tag) {
    case "[object DataView]":
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return equalBytes(
        leftValue as ArrayBuffer | ArrayBufferView,
        rightValue as ArrayBuffer | ArrayBufferView,
      );
    case "[object ArrayBuffer]":
      return equalBytes(
        leftValue as ArrayBuffer,
        rightValue as ArrayBuffer,
      );
    case "[object Boolean]":
    case "[object Date]":
      return +(leftValue as Date) === +(rightValue as Date);
    case "[object Error]":
      return (
        (leftValue as Error).name === (rightValue as Error).name &&
        (leftValue as Error).message === (rightValue as Error).message
      );
    case "[object Number]":
      if (
        (leftValue as number) !== (leftValue as number) ||
        (rightValue as number) !== (rightValue as number)
      ) {
        return sameValueZero(leftValue as number, rightValue as number);
      }
      return (
        (leftValue as number) === (rightValue as number) ||
        sameValueZero(leftValue as number, rightValue as number)
      );
    case "[object RegExp]":
      return (
        (leftValue as RegExp).source === (rightValue as RegExp).source &&
        (leftValue as RegExp).flags === (rightValue as RegExp).flags
      );
    case "[object Symbol]":
      return sameValueZero(
        (leftValue as symbol).valueOf(),
        (rightValue as symbol).valueOf(),
      );
    case "[object Map]":
    case "[object Set]":
      return equalUnordered(
        [...((leftValue as Iterable<unknown>) ?? [])],
        [...((rightValue as Iterable<unknown>) ?? [])],
        bitmask,
        customizer,
        stack,
      );
    case "[object Array]":
    case "[object Arguments]":
      return equalArrayLike(
        leftValue as ArrayLike<unknown>,
        rightValue as ArrayLike<unknown>,
        bitmask,
        customizer,
        stack,
      );
    case "[object Function]":
    case "[object GeneratorFunction]":
    case "[object AsyncFunction]":
      return leftValue === rightValue;
    default:
      return false;
  }
}

export function isEqualN(
  leftValue: unknown,
  rightValue: unknown,
  bitmask?: number,
  customizer?: EqualityCustomizer,
  stack?: SeenPairs,
): boolean {
  bitmask ??= 0;
  stack ??= new WeakMap();

  if (leftValue === rightValue) return true;

  let customResult = customizer?.(
    leftValue,
    rightValue,
    undefined,
    undefined,
    undefined,
    stack,
  );
  if (customResult !== undefined) return !!customResult;

  if (leftValue == null || rightValue == null) return leftValue === rightValue;

  if (
    typeof leftValue !== "object" &&
    typeof rightValue !== "object"
  ) {
    return sameValueZero(leftValue, rightValue);
  }

  if (!isObjectLike(leftValue) || !isObjectLike(rightValue)) return false;

  let leftTag = getTag(leftValue);
  let rightTag = getTag(rightValue);

  if (leftTag !== rightTag) {
    if (
      !(
        (leftTag === "[object Map]" && rightTag === "[object Set]") ||
        (leftTag === "[object Set]" && rightTag === "[object Map]")
      )
    ) {
      return false;
    }
  }

  if (
    leftTag === "[object Object]" ||
    leftTag === "[object Array]" ||
    leftTag === "[object Arguments]"
  ) {
    return equalObject(
      leftValue as object,
      rightValue as object,
      bitmask,
      customizer,
      stack,
    );
  }

  return equalByTag(
    leftValue,
    rightValue,
    leftTag,
    bitmask,
    customizer,
    stack,
  );
}

export function createIsEqualFunction(): IsEqualFunction {
  const fn = (leftValue: unknown, rightValue: unknown): boolean =>
    isEqualN(leftValue, rightValue);
  fn.default = fn;
  return fn;
}
