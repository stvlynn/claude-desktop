// @ts-nocheck
// Restored from ref/webview/assets/_defineProperty-CjRaK4yh.js
// DefineProperty chunk restored from the Codex webview bundle.
import { createCommonJsModule } from "../runtime/commonjs-interop";
import { isEqualW as createGetNativeProperty } from "./lodash-is-equal";

export const defineProperty = createCommonJsModule((_exports, module) => {
  const getNativeProperty = createGetNativeProperty() as unknown as (
    object: object,
    key: PropertyKey,
  ) => typeof Object.defineProperty | undefined;
  module.exports = (() => {
    try {
      const objectDefineProperty = getNativeProperty(Object, "defineProperty");
      if (!objectDefineProperty) return undefined;
      objectDefineProperty({}, "", {});
      return objectDefineProperty;
    } catch {
      return undefined;
    }
  })() as Record<PropertyKey, any>;
});
