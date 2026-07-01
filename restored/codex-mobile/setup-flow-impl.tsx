// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Semantic implementation for the Codex Mobile setup flow surface used by the current-ref compatibility layer.
import { useEffect, useRef, useState } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotDollarLowerS as initTypeScriptHelpersRuntime,
  currentAppInitialSharedCompatSlotUnderscoreLowerC as loadReactRuntime,
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntime,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotUpperFLowerS as createScopedQueryFamily,
  currentAppInitialSharedCompatSlotLowerGLowerC as initCurrentSharedCompatRuntime,
  currentAppInitialSharedCompatSlotUpperGLowerO as useScopedValue,
  currentAppInitialSharedCompatSlotUpperGLowerS as initScopedStateRuntime,
  currentAppInitialSharedCompatSlotLowerI as invokeAppMethod,
  currentAppInitialSharedCompatSlotUpperILowerS as createScopedQuery,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotLowerLLowerC as initElementFactoryRuntime,
  currentAppInitialSharedCompatSlotLowerQLowerO as useQueryResult,
  currentAppInitialSharedCompatSlotLowerQLowerS as useAtomValueTuple,
  currentAppInitialSharedCompatSlotLowerTLowerC as useMutation,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT as SetupPageHeader,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT as initSetupPageHeaderRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerILowerS as openExternalUrl,
  worktreeNewThreadQueryCompatSlotLowerNLowerS as initOpenExternalUrlRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  imagePickerSchemaCapabilities as logProductEvent,
  localRemoteConnectionDescriptorSchema as initLocalRemoteConnectionDescriptorRuntime,
  parseWorkspaceRootPathList,
  currentAppInitialSharedControlConnectConnectionRuntime as initRemoteControlConnectionRuntime,
  currentAppInitialSharedMember0542 as localRemoteControlHostId,
  currentAppInitialSharedMember0593 as setRemoteControlPending,
  intlFormatDateTimeRuntime as initIntlDateTimeRuntime,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceRuntime,
  statsigMountSignal as initStatsigMountSignalRuntime,
  currentAppInitialSharedMember0686 as appServerHostConfigById,
  currentAppInitialSharedMember0454 as waitForRemoteControlConnectionReady,
  currentAppInitialSharedFunction0722 as useLocalStorageSetting,
  currentAppInitialSharedMember0740 as remoteControlHostEnabledSignal,
  currentAppInitialSharedMember0279 as codexMobileSetupStepViewedEvent,
  currentAppInitialSharedDisplayRuntime as initCurrentSharedDisplayRuntime,
  remoteConnectionRuntime0298 as initRemoteConnectionRuntime,
  currentAppInitialSharedMember0781 as useFeatureFlag,
  localRemoteConnectionKind as readLocalRemoteConnectionValue,
  currentAppInitialSharedRuntime0816 as initCurrentSharedRemoteRuntime,
  currentAppInitialSharedMember0835 as useStatsigGate,
  openAiNativeAppDefinition as initOpenAiNativeAppRuntime,
  currentAppInitialSharedMember0432 as codexMobileSetupActionEvent,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerBLowerT as ensureMfaSetupState,
  pullRequestNewThreadCompatSlotUpperDLowerT as MfaSetupRequiredError,
  pullRequestNewThreadCompatSlotLowerKLowerT as initMfaSetupErrorRuntime,
  pullRequestNewThreadCompatSlotUpperSLowerT as mfaRequirementQuery,
  pullRequestNewThreadCompatSlotUnderscoreLowerT as enrolledRemoteControlClientQuery,
  pullRequestNewThreadCompatSlotUpperTLowerT as listRemoteControlClientsForHost,
  pullRequestNewThreadCompatSlotLowerWLowerT as initRemoteControlClientListRuntime,
  pullRequestNewThreadCompatSlotLowerXLowerT as mfaSetupCompletedQuery,
  pullRequestNewThreadCompatSlotLowerYLowerT as initMfaRequirementRuntime,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  initAppgenProjectHeaderChunk,
  AppgenProjectHeader,
} from "../appgen/project-header";
import {
  setLocalRemoteControlEnabled,
  initLocalRemoteControlEnabledChunk,
  isHandledLocalRemoteControlEnableError,
  initSetRemoteControlEnabledForHostChunk,
  handleLocalRemoteControlEnableError,
  setRemoteControlEnabledForHost,
  initLocalRemoteControlErrorHandlingChunk,
} from "../runtime/current-app-initial/remote-connections-auth-state-runtime";
import {
  CodexMobileSetupBody,
  CodexMobileSetupDialog,
  codexMobileSetupStepDebugOverrideAtom,
  initCodexMobileSetupDialogArtChunk,
  initCodexMobileSetupDialogChunk,
  initCodexMobileSetupStepDebugOverrideChunk,
} from "./setup-dialog";

const REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS = 30_000;

type RemoteControlStatus = "disabled" | "errored" | "connecting" | "connected";
type CodexMobileSetupStep =
  | "initial"
  | "mfa-required"
  | "allow-host"
  | "waiting"
  | "connected"
  | "dismiss";
type CodexMobileSetupStepOverride = CodexMobileSetupStep | "auto";
type CodexMobileSetupSurface = "dialog" | "page";
type RemoteControlHostKind = "local" | string;

interface RemoteControlClient {
  clientId: string;
  [key: string]: unknown;
}

interface CodexMobileSetupFlowProps {
  initialStep?: CodexMobileSetupStep | null;
  onClose: () => void;
  variant: CodexMobileSetupSurface;
}

interface CodexMobileSetupPageProps {
  onAllowHost: () => void;
  onFinishSetup: () => void;
  onSkip: () => void;
  onStartSetup: () => void;
  setupInProgress: boolean;
  showAllowHostError: boolean;
  showStartSetupError: boolean;
  step: CodexMobileSetupStep;
}

interface InitialStepInput {
  isMfaSetupRequiredError: boolean;
  mfaSetupRequired: boolean;
  remoteControlStatus: RemoteControlStatus;
}

interface ShouldShowSetupInput extends InitialStepInput {
  initialRemoteControlStatus: RemoteControlStatus;
  setupStepDebugOverride: CodexMobileSetupStepOverride;
}

interface WaitForAddedClientQueryInput {
  existingClientIds: Set<string> | null;
  hostId: string | null;
  localRemoteControlClientId: string | null;
  waiting: boolean;
}

interface ScopeQueryContext {
  get: (token: unknown, ...args: unknown[]) => any;
  queryClient?: {
    getQueryData: (key: unknown[]) => any;
    setQueryData: (key: unknown[], value: unknown) => void;
  };
}

export let remoteControlClientsQuery: any;
export let appServerRemoteControlClientsQuery: any;
export let waitingForAddedRemoteControlClientQuery: any;
let pollingRemoteControlClientsQuery: any;

export const initCodexMobileSetupFlowNoopChunk = runOnce(() => {});

export function filterRemoteControlClientsExceptCurrent(
  clients: RemoteControlClient[] | null | undefined,
  localRemoteControlClientId: string | null | undefined,
): RemoteControlClient[] | null | undefined {
  if (clients == null) return clients;
  if (localRemoteControlClientId == null) return clients;
  return clients.filter(
    (client) => client.clientId !== localRemoteControlClientId,
  );
}

function hasNewRemoteControlClient(
  clients: RemoteControlClient[] | null | undefined,
  existingClientIds: Set<string>,
): boolean {
  return (
    clients?.some((client) => !existingClientIds.has(client.clientId)) === true
  );
}

function getWaitingForAddedClientResult(
  clients: RemoteControlClient[] | null | undefined,
  existingClientIds: Set<string>,
): CodexMobileSetupStep | null {
  if (clients == null || !hasNewRemoteControlClient(clients, existingClientIds))
    return null;
  return existingClientIds.size === 0 && clients.length === 1
    ? "connected"
    : "dismiss";
}

function serializeWaitingForAddedClientQueryKey({
  existingClientIds,
  hostId,
  localRemoteControlClientId,
  waiting,
}: WaitForAddedClientQueryInput): string {
  return JSON.stringify({
    existingClientIds:
      existingClientIds == null ? null : Array.from(existingClientIds).sort(),
    hostId,
    localRemoteControlClientId,
    waiting,
  });
}

export const initCodexMobileSetupFlowQueriesChunk = runOnce(() => {
  initCurrentSharedRuntime();
  initRemoteControlConnectionRuntime();
  initAppScopeRuntime();
  initLocalRemoteConnectionDescriptorRuntime();
  initStatsigMountSignalRuntime();
  initRemoteControlClientListRuntime();
  initCodexMobileSetupFlowNoopChunk();

  remoteControlClientsQuery = createScopedQuery(
    appScopeRoot,
    ({ get }: ScopeQueryContext) => {
      const environmentId =
        readLocalRemoteConnectionValue(
          get,
          "local_remote_control_environment_id",
        ) ?? null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      return {
        queryKey: [
          "remote-control-clients",
          environmentId,
          includeBrowserClients,
        ],
        queryFn: () =>
          listRemoteControlClientsForHost(environmentId, {
            includeBrowserClients,
          }),
        staleTime: REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS,
      };
    },
  );

  appServerRemoteControlClientsQuery = createScopedQueryFamily(
    appScopeRoot,
    (hostId: string, { get }: ScopeQueryContext) => {
      const hostConfig = get(appServerHostConfigById, hostId);
      const environmentId = hostConfig?.environmentId;

      return {
        enabled: environmentId != null,
        queryKey: [
          "remote-control-clients",
          "app-server",
          hostId,
          hostConfig?.installationId,
        ],
        queryFn: () =>
          environmentId == null
            ? Promise.resolve([])
            : listRemoteControlClientsForHost(environmentId, {
                appServerHostId: hostId,
              }),
        staleTime: REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS,
      };
    },
  );

  pollingRemoteControlClientsQuery = createScopedQueryFamily(
    appScopeRoot,
    (enabled: boolean, { get }: ScopeQueryContext) => {
      const environmentId =
        readLocalRemoteConnectionValue(
          get,
          "local_remote_control_environment_id",
        ) ?? null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      return {
        enabled,
        queryKey: [
          "remote-control-clients",
          environmentId,
          includeBrowserClients,
        ],
        queryFn: () =>
          listRemoteControlClientsForHost(environmentId, {
            includeBrowserClients,
          }),
        refetchInterval: enabled ? 1000 : false,
        staleTime: 0,
      };
    },
  );

  waitingForAddedRemoteControlClientQuery = createScopedQueryFamily(
    appScopeRoot,
    (
      {
        existingClientIds,
        hostId,
        localRemoteControlClientId,
        waiting,
      }: WaitForAddedClientQueryInput,
      { get, queryClient }: ScopeQueryContext,
    ) => {
      let environmentId: string | null = null;
      let installationId: string | null = null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      if (waiting && hostId == null) {
        environmentId =
          readLocalRemoteConnectionValue(
            get,
            "local_remote_control_environment_id",
          ) ?? null;
      } else if (waiting) {
        const hostConfig = get(appServerHostConfigById, hostId);
        environmentId = hostConfig?.environmentId;
        installationId = hostConfig?.installationId;
      }

      const queryKey = [
        "remote-control-clients",
        "waiting-for-added",
        hostId,
        includeBrowserClients,
        hostId == null ? environmentId : installationId,
        existingClientIds == null ? null : Array.from(existingClientIds).sort(),
        localRemoteControlClientId,
      ];

      return {
        enabled:
          waiting &&
          existingClientIds != null &&
          (hostId == null || environmentId != null),
        gcTime: 0,
        queryKey,
        queryFn: async () => {
          const cachedResult = queryClient?.getQueryData(queryKey);
          if (cachedResult != null || existingClientIds == null)
            return cachedResult ?? null;

          const clients = await listRemoteControlClientsForHost(
            environmentId ?? null,
            {
              appServerHostId: hostId ?? undefined,
              includeBrowserClients,
            },
          );

          if (hostId != null) {
            queryClient?.setQueryData(
              ["remote-control-clients", "app-server", hostId, installationId],
              clients,
            );
          }

          return getWaitingForAddedClientResult(
            filterRemoteControlClientsExceptCurrent(
              clients,
              localRemoteControlClientId,
            ),
            existingClientIds,
          );
        },
        refetchInterval: (query: { state: { data: unknown } }) =>
          waiting && query.state.data == null ? 1000 : false,
        staleTime: 0,
      };
    },
    { key: serializeWaitingForAddedClientQueryKey },
  );
});

async function setRemoteControlEnabledForSetup(
  routeScope: any,
  hostKind: RemoteControlHostKind,
  enabled: boolean,
): Promise<unknown> {
  return hostKind === "local"
    ? (await invokeAppMethod("set-local-remote-control-enabled", {
        params: { enabled },
      }),
      setLocalRemoteControlEnabled(routeScope, enabled, { force: true }))
    : setRemoteControlEnabledForHost(routeScope, hostKind, enabled);
}

export async function enableRemoteControlForSetup(
  routeScope: any,
  hostKind: RemoteControlHostKind,
  waitForConnectionReady: boolean,
): Promise<unknown> {
  if (!waitForConnectionReady)
    return setRemoteControlEnabledForSetup(routeScope, hostKind, false);

  setRemoteControlPending(routeScope, hostKind, false);
  const connectionReady = waitForRemoteControlConnectionReady(
    routeScope,
    hostKind,
    { ignoreCurrentError: true },
  );

  try {
    const enableRemoteControl = setRemoteControlEnabledForSetup(
      routeScope,
      hostKind,
      true,
    );
    return await Promise.race([
      connectionReady,
      enableRemoteControl.then(() => connectionReady),
    ]);
  } catch (error) {
    setRemoteControlPending(routeScope, hostKind, true);
    throw error;
  }
}

export const initRemoteControlEnableForSetupChunk = runOnce(() => {
  initSetRemoteControlEnabledForHostChunk();
  initRemoteControlConnectionRuntime();
  initCurrentSharedDisplayRuntime();
  loadReactRuntime();
  initLocalRemoteControlEnabledChunk();
});

export function getInitialCodexMobileSetupStep({
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
}: InitialStepInput): CodexMobileSetupStep | undefined {
  return isRemoteControlUnavailable(remoteControlStatus) ||
    isMfaSetupRequiredError
    ? "initial"
    : mfaSetupRequired
      ? "mfa-required"
      : undefined;
}

export function shouldShowCodexMobileSetupFlow({
  initialRemoteControlStatus,
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
  setupStepDebugOverride,
}: ShouldShowSetupInput): boolean {
  return (
    isMfaSetupRequiredError ||
    !!mfaSetupRequired ||
    isRemoteControlUnavailable(remoteControlStatus) ||
    isRemoteControlUnavailable(initialRemoteControlStatus) ||
    setupStepDebugOverride !== "auto"
  );
}

function getSetupStepForHostState({
  remoteControlHostEnabled,
  hasEnrolledRemoteControlClient,
}: {
  hasEnrolledRemoteControlClient: boolean;
  remoteControlHostEnabled: boolean;
}): CodexMobileSetupStep {
  return remoteControlHostEnabled
    ? hasEnrolledRemoteControlClient
      ? "connected"
      : "waiting"
    : "initial";
}

function includesMfaSetupRequiredError(errors: unknown[]): boolean {
  return errors.some((error) => error instanceof MfaSetupRequiredError);
}

function isRemoteControlUnavailable(status: RemoteControlStatus): boolean {
  switch (status) {
    case "disabled":
    case "errored":
      return true;
    case "connecting":
    case "connected":
      return false;
  }
}

export const initMfaSetupFlowRuntime = runOnce(() => {
  initMfaSetupErrorRuntime();
});

export function CodexMobileSetupFlow({
  initialStep,
  onClose,
  variant,
}: CodexMobileSetupFlowProps) {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const navigate = parseWorkspaceRootPathList();
  const trackedStepRef = useRef<string | null>(null);
  const remoteControlHostEnabled = useScopedValue(
    remoteControlHostEnabledSignal,
    localRemoteControlHostId,
  );
  const [setupStepDebugOverride] = useAtomValueTuple(
    codexMobileSetupStepDebugOverrideAtom,
  );
  const enrolledRemoteControlClient = useQueryResult(
    enrolledRemoteControlClientQuery,
  );
  const [localRemoteControlClientId] = useLocalStorageSetting(
    "local_remote_control_client_id",
  );
  const [manualStep, setManualStep] = useState<CodexMobileSetupStep | null>(
    initialStep ?? null,
  );
  const [existingClientIds, setExistingClientIds] =
    useState<Set<string> | null>(null);
  const hostDerivedStep =
    manualStep ??
    getSetupStepForHostState({
      remoteControlHostEnabled,
      hasEnrolledRemoteControlClient: enrolledRemoteControlClient.data,
    });
  const pollingClientsResult = useScopedValue(
    pollingRemoteControlClientsQuery,
    hostDerivedStep === "waiting",
  );
  const remoteControlClients = filterRemoteControlClientsExceptCurrent(
    pollingClientsResult.data,
    localRemoteControlClientId,
  );
  const resolvedStep =
    hostDerivedStep === "waiting" &&
    (existingClientIds == null
      ? remoteControlClients?.length
      : hasNewRemoteControlClient(remoteControlClients, existingClientIds))
      ? "connected"
      : hostDerivedStep;
  const mfaRequirement = useQueryResult(mfaRequirementQuery);
  const mfaSetupCompleted = useQueryResult(mfaSetupCompletedQuery);
  const visibleStep =
    setupStepDebugOverride === "auto"
      ? hostDerivedStep === "mfa-required" && mfaSetupCompleted.data
        ? "allow-host"
        : resolvedStep
      : setupStepDebugOverride;
  const trackAction = (action: string) => {
    logProductEvent(routeScope, codexMobileSetupActionEvent, {
      action,
      step: visibleStep,
      surface: variant,
    });
  };

  useEffect(() => {
    const stepKey = `${variant}:${visibleStep}`;
    if (trackedStepRef.current === stepKey) return;
    trackedStepRef.current = stepKey;
    logProductEvent(routeScope, codexMobileSetupStepViewedEvent, {
      step: visibleStep,
      surface: variant,
    });
  }, [routeScope, variant, visibleStep]);

  const startSetupMutation = useMutation({
    mutationFn: () => ensureMfaSetupState(routeScope),
    onSuccess: (mfaRequired: boolean) => {
      setManualStep(mfaRequired ? "mfa-required" : "allow-host");
    },
  });
  const allowHostMutation = useMutation({
    mutationFn: async () => {
      await enableRemoteControlForSetup(
        routeScope,
        localRemoteControlHostId,
        true,
      );
      const clientsSnapshot = routeScope.query.snapshot(
        remoteControlClientsQuery,
      );
      await clientsSnapshot.invalidate({ exact: true, refetchType: "none" });
      return clientsSnapshot.fetch();
    },
    onSuccess: (clients: RemoteControlClient[]) => {
      setExistingClientIds(
        new Set(
          filterRemoteControlClientsExceptCurrent(
            clients,
            localRemoteControlClientId,
          )?.map(getRemoteControlClientId),
        ),
      );
      setManualStep("waiting");
    },
    onError: (error: unknown) => {
      handleLocalRemoteControlEnableError(routeScope, error);
    },
  });
  const hasMfaRequiredError = includesMfaSetupRequiredError([
    enrolledRemoteControlClient.error,
    pollingClientsResult.error,
    mfaRequirement.error,
    startSetupMutation.error,
    allowHostMutation.error,
  ]);

  useEffect(() => {
    if (hasMfaRequiredError) navigate("/login", { replace: true });
  }, [hasMfaRequiredError, navigate]);

  const setupInProgress =
    startSetupMutation.isPending ||
    allowHostMutation.isPending ||
    (mfaRequirement.data === "required" && mfaSetupCompleted.isLoading);
  const showAllowHostError =
    allowHostMutation.isError &&
    !isHandledLocalRemoteControlEnableError(allowHostMutation.error);

  if (
    (setupStepDebugOverride === "auto" &&
      manualStep == null &&
      remoteControlHostEnabled &&
      enrolledRemoteControlClient.isLoading) ||
    hasMfaRequiredError
  ) {
    return null;
  }

  const onAllowHost = () => {
    trackAction("allow_host");
    allowHostMutation.mutate();
  };
  const onSkip = () => {
    trackAction("skip");
    onClose();
  };
  const onStartSetup = () => {
    trackAction("start_setup");
    startSetupMutation.mutate();
  };

  if (variant === "dialog") {
    return (
      <CodexMobileSetupDialog
        open={true}
        showAllowHostError={showAllowHostError}
        showStartSetupError={startSetupMutation.isError}
        setupInProgress={setupInProgress}
        step={visibleStep}
        onAllowHost={onAllowHost}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
        onSkip={onSkip}
        onStartSetup={onStartSetup}
      />
    );
  }

  return (
    <CodexMobileSetupPage
      showAllowHostError={showAllowHostError}
      showStartSetupError={startSetupMutation.isError}
      setupInProgress={setupInProgress}
      step={visibleStep}
      onAllowHost={onAllowHost}
      onFinishSetup={onClose}
      onSkip={onSkip}
      onStartSetup={onStartSetup}
    />
  );
}

function getRemoteControlClientId(client: RemoteControlClient): string {
  return client.clientId;
}

function CodexMobileSetupPage({
  onAllowHost,
  onFinishSetup,
  onSkip,
  onStartSetup,
  setupInProgress,
  showAllowHostError,
  showStartSetupError,
  step,
}: CodexMobileSetupPageProps) {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const isRemoteBrandingEnabled = useFeatureFlag("824038554");
  const navigate = parseWorkspaceRootPathList();
  const trackAction = (action: string) => {
    logProductEvent(routeScope, codexMobileSetupActionEvent, {
      action,
      step,
      surface: "page",
    });
  };
  const pageHeader =
    step === "allow-host" || step === "mfa-required" || step === "waiting" ? (
      <SetupPageHeader.Header>
        <AppgenProjectHeader
          start={
            isRemoteBrandingEnabled ? (
              <FormattedMessage
                id="codexMobile.setupPage.remoteTitle"
                defaultMessage="Set up Remote"
                description="Toolbar title shown during Remote setup"
              />
            ) : (
              <FormattedMessage
                id="codexMobile.setupPage.title"
                defaultMessage="Set up Codex Mobile"
                description="Toolbar title shown during Codex mobile setup"
              />
            )
          }
        />
      </SetupPageHeader.Header>
    ) : null;

  return (
    <>
      {pageHeader}
      <CodexMobileSetupBody
        onAllowHost={onAllowHost}
        onContinueOnChatGPT={(event) => {
          trackAction("continue_on_chatgpt");
          openExternalUrl({
            event,
            href: "https://chatgpt.com/#settings/Security",
            initiator: "open_in_browser_bridge",
          });
        }}
        onFinishSetup={() => {
          trackAction("finish_setup");
          onFinishSetup();
        }}
        onManageConnections={() => {
          trackAction("manage_connections");
          navigate("/settings/connections");
        }}
        onSkip={onSkip}
        onStartSetup={onStartSetup}
        setupInProgress={setupInProgress}
        showAllowHostError={showAllowHostError}
        showStartSetupError={showStartSetupError}
        step={step}
        variant="page"
      />
    </>
  );
}

export const initCodexMobileSetupFlowChunk = runOnce(() => {
  initCurrentSharedCompatRuntime();
  initRemoteControlRefreshSourceRuntime();
  initTypeScriptHelpersRuntime();
  initScopedStateRuntime();
  initCurrentSharedRuntime();
  loadReactRuntime();
  initElementFactoryRuntime();
  initIntlDateTimeRuntime();
  initOpenAiNativeAppRuntime();
  initRemoteControlConnectionRuntime();
  initSetupPageHeaderRuntime();
  initOpenExternalUrlRuntime();
  initRemoteConnectionRuntime();
  initCodexMobileSetupFlowQueriesChunk();
  initCodexMobileSetupFlowNoopChunk();
  initLocalRemoteControlErrorHandlingChunk();
  initRemoteControlEnableForSetupChunk();
  initAppScopeRuntime();
  initCurrentSharedDisplayRuntime();
  initCurrentSharedRemoteRuntime();
  initAppgenProjectHeaderChunk();
  initCodexMobileSetupStepDebugOverrideChunk();
  initCodexMobileSetupDialogChunk();
  initMfaRequirementRuntime();
  initMfaSetupFlowRuntime();
  initCodexMobileSetupDialogArtChunk();
});

export {
  appServerRemoteControlClientsQuery as codexMobileSetupAppServerClientsQuery,
  remoteControlClientsQuery as codexMobileSetupRemoteControlClientsQuery,
  waitingForAddedRemoteControlClientQuery as codexMobileSetupWaitingForAddedClientQuery,
};
