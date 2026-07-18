// Restored from ref/webview/assets/home-use-cases-data-hIxZSoyH.js
// Also matches ref/webview/assets/home-use-cases-data-BeTzhg1t.js.
// Aggregate home page use-case data used by the home page and automations page.

import { AUTOMATION_HOME_USE_CASES } from "./use-cases-automation";
import { MANUAL_HOME_USE_CASES } from "./use-cases-manual";
import type { HomeUseCaseItem } from "./use-cases-types";

export * from "./use-cases-types";
export { AUTOMATION_HOME_USE_CASES, getAutomationHomeUseCases } from "./use-cases-automation";
export { MANUAL_HOME_USE_CASES } from "./use-cases-manual";

export const HOME_USE_CASES: HomeUseCaseItem[] = [
  ...MANUAL_HOME_USE_CASES,
  ...AUTOMATION_HOME_USE_CASES,
];

export function initHomeUseCasesDataChunk(): void {}
