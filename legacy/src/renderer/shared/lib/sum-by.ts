// Restored from ref/webview/assets/sumBy-CSgbzDRq.js
// Lodash-style sumBy helper.

import { baseIteratee } from "./markdown-to-search-text-iteratee";

function baseSum<T>(
  array: ArrayLike<T>,
  iteratee: (value: T) => number | undefined,
) {
  let result: number | undefined;
  for (let index = 0; index < array.length; index += 1) {
    const current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

export function sumBy<T>(
  array: ArrayLike<T> | null | undefined,
  iteratee?: unknown,
) {
  return array && array.length
    ? baseSum(array, baseIteratee(iteratee) as (value: T) => number | undefined)
    : 0;
}
