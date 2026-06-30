// Restored from ref/webview/assets/codex-mobile-page-CB-Xg-VQ.js
// Current Codex mobile page backing bundle with restored dependency imports.

import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerALowerC,
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperGLowerS,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotLowerQLowerS,
  currentAppInitialSharedCompatSlotDollarLowerS,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  currentAppInitialSharedMember0542,
  parseWorkspaceRootPathList,
  currentAppInitialSharedControlConnectConnectionRuntime,
  currentAppInitialSharedMember0686,
  currentAppInitialSharedDisplayRuntime,
  openAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerVLowerT,
  pullRequestNewThreadCompatSlotLowerYLowerT,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  codexMobileSetupDialogA,
  codexMobileSetupDialogD,
  codexMobileSetupDialogR,
  codexMobileSetupDialogU,
} from "../runtime/current-app-initial/codex-mobile-setup-dialog-current-runtime";
import {
  codexMobileSetupFlowA,
  codexMobileSetupFlowI,
  codexMobileSetupFlowN,
  codexMobileSetupFlowR,
  codexMobileSetupFlowT,
} from "../runtime/current-app-initial/codex-mobile-setup-flow-current-runtime";
export function CodexMobilePage() {
  let codexMobilePageValue14 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    codexMobilePageValue15 = currentAppInitialSharedCompatSlotUpperGLowerO(
      currentAppInitialSharedMember0686,
      currentAppInitialSharedMember0542,
    ),
    [codexMobilePageValue16] = currentAppInitialSharedCompatSlotLowerQLowerS(
      codexMobileSetupDialogU,
    ),
    codexMobilePageValue17 = pullRequestNewThreadCompatSlotLowerVLowerT(
      codexMobilePageValue14,
    );
  let { data, isError, isFetching, isPending } =
    currentAppInitialSharedCompatSlotLowerALowerC(codexMobilePageValue17);
  if (isPending || codexMobilePageValue15 == null) return null;
  return codexMobilePageValue3.jsx(codexMobilePageHelper1, {
    isMfaSetupRequiredError: isError,
    isMfaSetupRequiredFetching: isFetching,
    mfaSetupRequired: data,
    remoteControlStatus: codexMobilePageValue15.status,
    setupStepDebugOverride: codexMobilePageValue16,
  });
}
function codexMobilePageHelper1(codexMobilePageParam1) {
  let {
      isMfaSetupRequiredError,
      isMfaSetupRequiredFetching,
      mfaSetupRequired,
      remoteControlStatus,
      setupStepDebugOverride,
    } = codexMobilePageParam1,
    codexMobilePageValue5 = parseWorkspaceRootPathList(),
    [codexMobilePageValue6] =
      codexMobilePageValue2.useState(remoteControlStatus);
  if (isMfaSetupRequiredFetching) return null;
  if (
    codexMobileSetupFlowA({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      initialRemoteControlStatus: codexMobilePageValue6,
      remoteControlStatus,
      setupStepDebugOverride,
    })
  ) {
    let codexMobilePageValue9 = codexMobilePageValue3.jsx(
      worktreeNewThreadOrchestratorCompatSlotLowerOLowerT.MainContentLayout,
      {
        layout: "full-bleed",
      },
    );
    let codexMobilePageValue10 = codexMobileSetupFlowR({
      isMfaSetupRequiredError,
      mfaSetupRequired,
      remoteControlStatus,
    });
    let codexMobilePageValue11 = () => {
      codexMobilePageValue5("/");
    };
    let codexMobilePageValue12;
    return (
      <>
        {codexMobilePageValue9}
        {codexMobilePageValue3.jsx(codexMobileSetupFlowT, {
          initialStep: codexMobilePageValue10,
          onClose: codexMobilePageValue11,
          variant: "page",
        })}
      </>
    );
  }
  let codexMobilePageValue7 = codexMobilePageValue3.jsx(
    worktreeNewThreadOrchestratorCompatSlotLowerOLowerT.MainContentLayout,
    {
      layout: "full-bleed",
    },
  );
  return (
    <>
      {codexMobilePageValue7}
      {codexMobilePageValue3.jsx(codexMobileSetupDialogR, {
        onManageConnections: () => {
          codexMobilePageValue5("/settings/connections");
        },
      })}
    </>
  );
}
var codexMobilePageValue1, codexMobilePageValue2, codexMobilePageValue3;
once(() => {
  codexMobilePageValue1 = currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotDollarLowerS();
  currentAppInitialSharedCompatSlotUpperGLowerS();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  codexMobilePageValue2 = toEsModule(
    currentAppInitialSharedCompatSlotUnderscoreLowerC(),
    1,
  );
  openAiNativeAppDefinition();
  currentAppInitialSharedControlConnectConnectionRuntime();
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  codexMobileSetupDialogD();
  codexMobileSetupFlowN();
  pullRequestNewThreadCompatSlotLowerYLowerT();
  codexMobileSetupFlowI();
  codexMobileSetupDialogA();
  codexMobilePageValue3 = currentAppInitialSharedCompatSlotLowerLLowerC();
})();
