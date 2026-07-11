// Restored from ref/webview/assets/product-logger-ibAP2Yp2.js
// @ts-nocheck
// Hook for reading the scoped product analytics logger.
import { useAppScopeValue } from "../../shared/runtime/app-scope";
import { __productLoggerR, type ProductLogger } from "./product-logger";

export function useProductLogger(): ProductLogger {
  return useAppScopeValue<ProductLogger>(__productLoggerR);
}

