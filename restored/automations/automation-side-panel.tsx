// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The scheduled-task (automation) editor rendered inside a side-panel tab. Edits
// a draft automation (name, prompt, schedule, destination, model, etc.), autosaves
// persisted automations on change, and creates/updates from suggestion seeds.
import React from "react";
import type { ReactElement, ReactNode } from "react";
import { useIntl, FormattedMessage } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Badge } from "../utils/badge";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { AutomationNameInput } from "./automation-name-input";
import { AutomationPromptForm } from "./automation-prompt-form";
import { AutomationExecutionEnvironmentDropdown } from "./automation-execution-environment-dropdown";
import { AutomationHeartbeatThreadDropdown } from "./automation-heartbeat-thread-dropdown";
import { AutomationModelReasoningDropdown } from "./automation-model-reasoning-dropdown";
import { AutomationSchedulePicker } from "./automation-schedule-picker";
import { AutomationSaveTooltip } from "./automation-save-tooltip";
import { useHeartbeatThreadOptions } from "./use-heartbeat-thread-options";
import { areAutomationRecordsEqual } from "./automation-record-sync";
import {
  DEFAULT_AUTOMATION_DRAFT,
  validateAutomationDraft,
  getAutomationDraftRrule,
  createAutomationDraftFromAutomation,
  createAutomationDraftFromSeed,
  applyAutomationDraftModelDefaults,
  toAutomationUpdatePayload,
  toAutomationCreatePayload,
  applyHeartbeatTargetThread,
  setAutomationDraftCwds,
  getAutomationDestinationOptions,
  getAutomationDraftDestination,
  setAutomationDraftDestination,
} from "./shared";
import { getAutomationTelemetryProperties } from "../settings/automations/automation-telemetry";
import { srcBi as isHeartbeatAutomation } from "../boundaries/src-l0hb-mz-p";
import { formatAutomationNextRun } from "../inbox/automation-next-run-format";
import {
  useAppScope,
  useAtomValue,
  useSetSignal,
  useQueryClient,
  useFeatureGate,
  useModelSettings,
  useScopedStore,
  useDebouncedValue,
  useHostRequest,
  createScopedStoreFactory,
  appRootScope,
  codexAnalyticsConfigAtom,
  pendingAutomationDirectiveSignal,
  workspaceFoldersQuerySignal,
  workspaceGroupsSignal,
  LOCAL_HOST_ID,
  hostBridge,
  toastControllerToken,
  buildQueryKey,
  formatWorkspaceRootLabel,
  buildWorkspaceFolderOptions,
  getAutomationSessionKey,
  arePayloadsEqual,
  shouldHideAutomationExecutionEnvironment,
  ScheduledTaskIcon,
  Spinner,
  OpenInIcon,
  codexAutomationProductEvent,
  AutomationActionProto,
  AutomationSourceProto,
  AutomationFailureReasonProto,
  AutomationDetailSection,
  AutomationDetailRow,
  WorkspaceFolderDropdown,
} from "../boundaries/onboarding-commons-externals.facade";

const ALLOW_THREAD_DESTINATION_GATE_ID = "1488233300";
const AUTOMATION_SIDE_PANEL_FORM_ID = "automation-side-panel-form";
const MISSING_AUTOMATION_ERROR_MESSAGE =
  "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.";

const automationDraftStoreFactory = createScopedStoreFactory(
  appRootScope,
  (
    { initialDraft }: { initialDraft: unknown },
    { signal }: { signal: <T>(value: T) => unknown },
  ) => ({
    draft$: signal(initialDraft),
    hasUserEdited$: signal(false),
  }),
  { excludeFieldsFromKey: ["initialDraft"] },
);

type AutomationDraft =
  ReturnType<typeof validateAutomationDraft> extends never
    ? Record<string, unknown>
    : Record<string, unknown>;

export type AutomationSession =
  | { type: "persisted"; automationId: string }
  | {
      type: "proposal";
      seed: { directiveKey: string; [key: string]: unknown };
      targetAutomationId?: string | null;
    };

interface AutomationRecord {
  id: string;
  nextRunAt?: number | null;
  lastRunAt?: number | null;
  status?: string;
  [key: string]: unknown;
}

export interface AutomationSidePanelProps {
  automation: AutomationRecord | null;
  draftInstanceId: string;
  models: unknown;
  session: AutomationSession;
  onClose: () => void;
  onNameChange: (name: string) => void;
  onSaved: (automation: AutomationRecord) => void;
}

function showAutomationSaveErrorToast(
  store: {
    get: (token: unknown) => {
      danger: (title: string, options: { description: string }) => void;
    };
  },
  intl: ReturnType<typeof useIntl>,
  message: string,
): void {
  store.get(toastControllerToken).danger(
    intl.formatMessage({
      id: "inbox.automations.saveError",
      defaultMessage: "Could not save scheduled task",
      description: "Toast title when saving a scheduled task fails",
    }),
    { description: message },
  );
}

export function AutomationStatusBadge({
  status,
}: {
  status: string;
}): ReactElement {
  const intl = useIntl();
  let dotClassName = "";
  let label = "";
  switch (status) {
    case "ACTIVE":
      dotClassName = "bg-token-charts-green";
      label = intl.formatMessage({
        id: "inbox.automations.status.active",
        defaultMessage: "Active",
        description: "Label for active automation status",
      });
      break;
    case "PAUSED":
      dotClassName = "bg-token-charts-orange";
      label = intl.formatMessage({
        id: "inbox.automations.status.paused",
        defaultMessage: "Paused",
        description: "Label for paused automation status",
      });
      break;
    case "DELETED":
      dotClassName = "bg-token-charts-red";
      label = intl.formatMessage({
        id: "inbox.automations.status.deleted",
        defaultMessage: "Deleted",
        description: "Label for deleted automation status",
      });
      break;
  }
  return (
    <Badge className="gap-2 rounded-full px-2.5 py-1 text-base">
      <span className={classNames("size-2 rounded-full", dotClassName)} />
      {label}
    </Badge>
  );
}

export function AutomationDetailPill({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <Badge className="rounded-full px-2.5 py-1 text-base">{children}</Badge>
  );
}

export function AutomationSidePanel({
  automation,
  draftInstanceId,
  models,
  session,
  onClose,
  onNameChange,
  onSaved,
}: AutomationSidePanelProps): ReactElement {
  const store = useAppScope(appRootScope);
  const intl = useIntl();
  const queryClient = useQueryClient();
  const analytics = useAtomValue(codexAnalyticsConfigAtom);
  const setResolvedDirective = useSetSignal(pendingAutomationDirectiveSignal);

  const modelSettings = useModelSettings({ hostId: LOCAL_HOST_ID, cwd: null });

  const initialDraft =
    session.type === "proposal"
      ? createAutomationDraftFromSeed({
          seed: session.seed,
          targetAutomation: automation,
          models,
        })
      : automation == null
        ? DEFAULT_AUTOMATION_DRAFT
        : createAutomationDraftFromAutomation(automation, models);
  const sessionKey = getAutomationSessionKey(session);

  const draftStore = useScopedStore(automationDraftStoreFactory, {
    draftInstanceId,
    initialDraft,
    sessionKey,
  });
  const draftValue = useAtomValue(draftStore.draft$) as AutomationDraft;
  const hasUserEdited = useAtomValue(draftStore.hasUserEdited$) as boolean;
  const [lastFailedDraft, setLastFailedDraft] = React.useState<unknown>(null);

  const draft = applyAutomationDraftModelDefaults({
    draft: draftValue,
    modelSettings,
  });
  const updateDraft = (
    update: AutomationDraft | ((draft: AutomationDraft) => AutomationDraft),
  ) => {
    const current = applyAutomationDraftModelDefaults({
      draft: store.get(draftStore.draft$) as AutomationDraft,
      modelSettings,
    });
    const next = typeof update === "function" ? update(current) : update;
    if (next !== current) {
      store.set(draftStore.hasUserEdited$, true);
      store.set(draftStore.draft$, next);
    }
  };

  const { data: workspaceData } = useAtomValue(workspaceFoldersQuerySignal);
  const roots: string[] = workspaceData?.roots ?? [];
  const labels: Record<string, string> = workspaceData?.labels ?? {};
  const formatRootLabel = (root: string) =>
    formatWorkspaceRootLabel({ root, labels });
  const workspaceGroups = useAtomValue(workspaceGroupsSignal);
  const allowThreadDestination = useFeatureGate(
    ALLOW_THREAD_DESTINATION_GATE_ID,
  );

  const { options: threadOptions, hasPinnedThreads } =
    useHeartbeatThreadOptions(draft.targetThreadId as string | null);
  const { trimmedName, trimmedPrompt, canSave } =
    validateAutomationDraft(draft);
  const rrule = getAutomationDraftRrule(draft);
  const updatePayload =
    draft.id != null && canSave && rrule != null && draft.status !== "DELETED"
      ? toAutomationUpdatePayload({
          draft,
          name: trimmedName,
          prompt: trimmedPrompt,
          status: draft.status,
          rrule,
        })
      : null;
  const debouncedUpdatePayload = useDebouncedValue(updatePayload, 600);
  const retryNeeded = arePayloadsEqual(lastFailedDraft, updatePayload);

  const upsertAutomation = (item: AutomationRecord) => {
    queryClient.setQueryData(
      buildQueryKey("list-automations"),
      (previous: { items: AutomationRecord[] } | undefined) =>
        previous == null
          ? { items: [item] }
          : {
              items: previous.items.some((entry) => entry.id === item.id)
                ? previous.items.map((entry) =>
                    entry.id === item.id ? item : entry,
                  )
                : [...previous.items, item],
            },
    );
    queryClient.invalidateQueries({
      queryKey: buildQueryKey("list-automations"),
    });
    setLastFailedDraft(null);
  };

  const onCreateSuccess = ({ item }: { item: AutomationRecord }) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_CREATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: true,
      ...getAutomationTelemetryProperties(item),
    });
    upsertAutomation(item);
    if (session.type === "proposal") {
      setResolvedDirective({
        directiveKey: session.seed.directiveKey,
        automationId: item.id,
      });
    }
    onSaved(item);
  };
  const onCreateError = (error: Error, payload: unknown) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_CREATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: false,
      ...getAutomationTelemetryProperties(payload),
      failureReason:
        AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
    });
    showAutomationSaveErrorToast(store, intl, error.message);
  };
  const createMutation = useHostRequest("automation-create", {
    onSuccess: onCreateSuccess,
    onError: onCreateError,
  });

  const onUpdateSuccess = ({ item }: { item: AutomationRecord }) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_UPDATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: true,
      ...getAutomationTelemetryProperties(item),
    });
    upsertAutomation(item);
    if (session.type === "proposal") {
      setResolvedDirective({
        directiveKey: session.seed.directiveKey,
        automationId: item.id,
      });
      onSaved(item);
    }
  };
  const onUpdateError = (error: Error, payload: unknown) => {
    setLastFailedDraft(payload);
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_UPDATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: false,
      ...getAutomationTelemetryProperties(payload),
      failureReason:
        error.message === MISSING_AUTOMATION_ERROR_MESSAGE
          ? AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
          : AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
    });
    showAutomationSaveErrorToast(store, intl, error.message);
  };
  const updateMutation = useHostRequest("automation-update", {
    onSuccess: onUpdateSuccess,
    onError: onUpdateError,
  });

  React.useEffect(() => {
    if (
      session.type !== "persisted" ||
      !hasUserEdited ||
      automation == null ||
      debouncedUpdatePayload == null ||
      updateMutation.isPending ||
      areAutomationRecordsEqual(automation, debouncedUpdatePayload) ||
      arePayloadsEqual(lastFailedDraft, debouncedUpdatePayload)
    ) {
      return;
    }
    updateMutation.mutate(debouncedUpdatePayload);
  }, [
    automation,
    debouncedUpdatePayload,
    lastFailedDraft,
    hasUserEdited,
    session.type,
    updateMutation,
    updateMutation.isPending,
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (session.type !== "proposal" || !canSave || rrule == null) {
      return;
    }
    if (updatePayload != null) {
      updateMutation.mutate(updatePayload);
      return;
    }
    createMutation.mutate(
      toAutomationCreatePayload({
        draft,
        name: trimmedName,
        prompt: trimmedPrompt,
        rrule,
      }),
    );
  };
  const handleRetry = () => {
    if (updatePayload == null || updateMutation.isPending) {
      return;
    }
    setLastFailedDraft(null);
    updateMutation.mutate(updatePayload);
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;
  const isHeartbeat = draft.kind === "heartbeat";
  const hideExecutionEnvironment =
    shouldHideAutomationExecutionEnvironment(draft);
  const executionEnvironmentId = getAutomationDraftDestination(draft);

  let executionEnvironmentOptions: string[];
  if (automation == null) {
    executionEnvironmentOptions = getAutomationDestinationOptions({
      allowThreadDestination,
    });
  } else if (isHeartbeatAutomation(automation)) {
    executionEnvironmentOptions = ["thread"];
  } else {
    executionEnvironmentOptions = ["local", "worktree"];
  }

  const folderOptions = buildWorkspaceFolderOptions({
    workspaceGroups,
    roots,
    formatRootLabel,
  });
  const nextRunLabel = formatAutomationNextRun({
    intl,
    nextRunAt: automation?.nextRunAt ?? null,
    status: draft.status as string,
  });
  const lastRunLabel =
    automation?.lastRunAt == null
      ? intl.formatMessage({
          id: "inbox.automations.lastRun.none",
          defaultMessage: "-",
          description: "Fallback label when an automation has not run yet",
        })
      : intl.formatDate(new Date(automation.lastRunAt), {
          dateStyle: "medium",
          timeStyle: "short",
        });
  const saveTooltip = canSave ? null : (
    <AutomationSaveTooltip
      draft={draft}
      action={updatePayload == null ? "create" : "save"}
    />
  );

  const handleNameChange = (value: string) => {
    updateDraft((current) => ({ ...current, name: value }));
    onNameChange(value);
  };

  const nameInput = (
    <AutomationNameInput
      id={`${AUTOMATION_SIDE_PANEL_FORM_ID}-title`}
      value={draft.name as string}
      onChange={handleNameChange}
    />
  );

  const promptSection = (
    <AutomationDetailSection
      title={
        <FormattedMessage
          id="inbox.automations.promptSection"
          defaultMessage="Prompt"
          description="Section label above the automation prompt in the detail panel"
        />
      }
    >
      <div className="px-1">
        <AutomationPromptForm
          draft={draft}
          setDraft={updateDraft}
          roots={roots}
          onSubmit={handleSubmit}
          formId={`${AUTOMATION_SIDE_PANEL_FORM_ID}-prompt`}
          promptSize="compact"
        />
      </div>
    </AutomationDetailSection>
  );

  const statusSection =
    session.type === "persisted" ? (
      <AutomationDetailSection
        title={
          <FormattedMessage
            id="inbox.automations.statusSection"
            defaultMessage="Status"
            description="Section label above the automation status section in the right rail"
          />
        }
      >
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.status.label",
            defaultMessage: "Status",
            description:
              "Label for the automation status row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationStatusBadge status={draft.status as string} />
        </AutomationDetailRow>
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.nextRun.label",
            defaultMessage: "Next run",
            description:
              "Label for the automation next run time row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationDetailPill>{nextRunLabel}</AutomationDetailPill>
        </AutomationDetailRow>
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.lastRun.label",
            defaultMessage: "Last ran",
            description:
              "Label for the automation last run time row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationDetailPill>{lastRunLabel}</AutomationDetailPill>
        </AutomationDetailRow>
      </AutomationDetailSection>
    ) : null;

  const executionEnvironmentRow = hideExecutionEnvironment ? null : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.executionEnvironment.label",
        defaultMessage: "Runs in",
        description:
          "Label for the automation execution environment row in the details rail",
      })}
      variant="compact"
    >
      <div className="flex items-center gap-1">
        <AutomationExecutionEnvironmentDropdown
          selectedId={executionEnvironmentId}
          optionIds={executionEnvironmentOptions}
          align="end"
          className="!text-base"
          showIcon={false}
          ariaLabel={intl.formatMessage({
            id: "settings.automations.executionEnvironment.ariaLabel",
            defaultMessage: "Execution environment",
            description: "Aria label for execution environment dropdown",
          })}
          onSelect={(value: string) => {
            updateDraft((current) =>
              setAutomationDraftDestination(current, value),
            );
          }}
        />
      </div>
    </AutomationDetailRow>
  );

  const destinationRow = isHeartbeat ? (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.targetThread.label",
        defaultMessage: "Chat",
        description:
          "Label for the heartbeat automation target thread row in the details rail",
      })}
      variant="compact"
    >
      <AutomationHeartbeatThreadDropdown
        selectedThreadId={draft.targetThreadId}
        options={threadOptions}
        hasPinnedThreads={hasPinnedThreads}
        align="end"
        className="!text-base"
        showIcon={false}
        onSelect={(selection: { threadId: string; title: string }) => {
          updateDraft((current) =>
            applyHeartbeatTargetThread({
              draft: current,
              threadId: selection.threadId,
              title: selection.title,
            }),
          );
        }}
      />
    </AutomationDetailRow>
  ) : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.folder.label",
        defaultMessage: "Project",
        description: "Label for the automation folder row in the details rail",
      })}
      variant="compact"
    >
      <WorkspaceFolderDropdown
        selectedRoots={draft.cwds}
        options={folderOptions}
        placeholder={intl.formatMessage({
          id: "settings.automations.projectDropdown.placeholder",
          defaultMessage: "Select project",
          description: "Placeholder text for automation project dropdown",
        })}
        align="end"
        className="!text-base"
        showIcon={false}
        localOnlyTooltip={intl.formatMessage({
          id: "settings.automations.projectDropdown.localOnlyTooltip",
          defaultMessage:
            "Scheduled tasks can only be created for local projects",
          description:
            "Tooltip explaining why scheduled task project options only include local projects when remote connections are connected",
        })}
        onChange={(value: string[]) => {
          updateDraft((current) => setAutomationDraftCwds(current, value));
        }}
      />
    </AutomationDetailRow>
  );

  const repeatsLabel = isHeartbeat
    ? intl.formatMessage({
        id: "inbox.automations.interval.label",
        defaultMessage: "Interval",
        description: "Label for the heartbeat automation interval control",
      })
    : intl.formatMessage({
        id: "inbox.automations.repeats.label",
        defaultMessage: "Repeats",
        description: "Label for the automation repeats control",
      });
  const intervalStyle = isHeartbeat ? "heartbeat" : "default";
  const schedulePicker = (
    <AutomationSchedulePicker
      scheduleMode={draft.scheduleConfig.mode}
      scheduleConfig={draft.scheduleConfig}
      align="end"
      className="!text-base"
      showIcon={false}
      intervalStyle={intervalStyle}
      onUpdateScheduleDraft={(scheduleConfig: unknown) => {
        updateDraft((current) => ({
          ...current,
          rawRrule: null,
          scheduleConfig,
          scheduleDirty: true,
        }));
      }}
    />
  );
  const repeatsRow = (
    <AutomationDetailRow label={repeatsLabel} variant="compact">
      {schedulePicker}
    </AutomationDetailRow>
  );

  const modelRow = isHeartbeat ? null : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.model.label",
        defaultMessage: "Model",
        description: "Label for the automation model row in the details rail",
      })}
      variant="compact"
    >
      <AutomationModelReasoningDropdown
        selectedModel={draft.model}
        reasoningEffort={draft.reasoningEffort}
        align="end"
        className="!text-base"
        onSelect={(model: string, reasoningEffort: string) => {
          updateDraft((current) => ({ ...current, model, reasoningEffort }));
        }}
      />
    </AutomationDetailRow>
  );

  const detailsSection = (
    <AutomationDetailSection
      title={
        <FormattedMessage
          id="inbox.automations.details"
          defaultMessage="Details"
          description="Section label above the automation details rail"
        />
      }
    >
      {executionEnvironmentRow}
      {destinationRow}
      {repeatsRow}
      {modelRow}
    </AutomationDetailSection>
  );

  const body = (
    <div className="min-h-0 flex-1 overflow-y-auto p-panel">
      <div className="flex min-h-0 flex-col gap-6">
        {nameInput}
        {promptSection}
        {statusSection}
        {detailsSection}
      </div>
    </div>
  );

  const footer = (
    <div className="flex shrink-0 items-center justify-end gap-2 border-t border-token-border p-panel">
      {session.type === "proposal" ? (
        <>
          <Button color="ghost" size="toolbar" onClick={onClose}>
            <FormattedMessage
              id="automation.sidePanel.cancel"
              defaultMessage="Cancel"
              description="Cancel button label for the scheduled task editor"
            />
          </Button>
          <Tooltip
            tooltipContent={saveTooltip}
            disabled={saveTooltip == null}
            delayOpen
          >
            <span className="inline-flex">
              <Button
                color="outline"
                size="toolbar"
                type="submit"
                form={`${AUTOMATION_SIDE_PANEL_FORM_ID}-prompt`}
                className={canSave ? undefined : "pointer-events-none"}
                loading={isSaving}
                disabled={!canSave}
              >
                {session.targetAutomationId == null ? (
                  <FormattedMessage
                    id="automation.sidePanel.createSuggestion"
                    defaultMessage="Create scheduled task"
                    description="Button label for accepting a suggested scheduled task"
                  />
                ) : (
                  <FormattedMessage
                    id="automation.sidePanel.applySuggestion"
                    defaultMessage="Apply changes"
                    description="Button label for accepting a suggested scheduled task update"
                  />
                )}
              </Button>
            </span>
          </Tooltip>
        </>
      ) : (
        <>
          {retryNeeded ? (
            <Button
              color="outline"
              size="toolbar"
              loading={updateMutation.isPending}
              onClick={handleRetry}
            >
              <FormattedMessage
                id="automation.sidePanel.retrySave"
                defaultMessage="Retry save"
                description="Button label for retrying a failed scheduled task save"
              />
            </Button>
          ) : null}
          <Button
            color="outline"
            size="toolbar"
            onClick={() => {
              hostBridge.dispatchHostMessage({
                type: "navigate-to-route",
                path: `/automations?automationId=${session.automationId}`,
              });
            }}
          >
            <FormattedMessage
              id="automation.sidePanel.showAutomation"
              defaultMessage="Open in Scheduled"
              description="Button label for opening the full scheduled task page from the thread side panel"
            />
            <OpenInIcon className="icon-2xs" />
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      {body}
      {footer}
    </div>
  );
}
