// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Query signal for the host-provided list-automations endpoint.

import {
  $N as initVscodeApiBridge,
  $P as initAppScopeRuntime,
  QN as createVscodeQueryOptions,
  QP as appScopeRoot,
  aP as queryDurations,
  oP as initQueryDurationConstants,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { once } from "../../runtime/commonjs-interop";

export let automationsQuerySignal: unknown;

export const initAutomationsQueryChunk = once(() => {
  initAppScopeRuntime();
  initQueryDurationConstants();
  initVscodeApiBridge();
  automationsQuerySignal = createVscodeQueryOptions(
    appScopeRoot,
    "list-automations",
    {
      enabled: true,
      refetchInterval: queryDurations.ONE_MINUTE,
      staleTime: queryDurations.ONE_MINUTE,
    },
  );
});
