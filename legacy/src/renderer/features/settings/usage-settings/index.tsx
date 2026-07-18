// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Claude usage settings orchestration.

import React from "react";
import { FormattedMessage } from "../../../shared/vendor/react-intl";
import {
  vscodeApiU as queryTimings,
  vscodeApiV as useQuery,
} from "../../../shared/runtime/vscode-api";
import { codexRequest } from "../../../shared/runtime/request";
import { isNonQuorumEnterpriseSku } from "../../../shared/lib/skus";
import { SettingsGroup } from "../../../shared/lib/settings-group";
import { Button } from "../../../shared/ui/button";
import { SettingsContentLayout } from "../../../shared/ui/settings-content-layout";
import { useUsageSettingsAccess } from "../../../shared/lib/use-usage-settings-access";
import {
  useAutoTopUpMutations,
  useAutoTopUpSettingsQuery,
  useSaveWorkspaceAdminRequestMutation,
  useUsageLimitIncreaseRequestQuery,
  useWorkspaceAdminRequestsQuery,
  useWorkspaceMonthlyUsageQuery,
} from "../usage-queries";
import { SettingsSectionTitle } from "../settings-shared";
import { UsageSettingsAutoTopUpModule } from "./auto-top-up";
import { UsageSettingsHistoryModule } from "./history";
import { UsageSettingsLimitsModule } from "./limits";
import { UsageSettingsPlanModule } from "./plan";

const CHAT_GPT_BILLING_SETTINGS_URL =
  "https://chatgpt.com/#settings/Subscription";

type RateLimitStatus = {
  credits?: unknown;
};

type WorkspaceMonthlyUsage = {
  effective_monthly_limit?: {
    enforcement_mode?: string;
    limit?: number | null;
  } | null;
};

type AccountSettings = {
  kind?: string;
};

type SaveRequestMutation = {
  isPending: boolean;
  mutateAsync(input: unknown): Promise<unknown>;
};

type UsageLimitsProps = {
  rateLimitStatus: RateLimitStatus | null;
  showEnterpriseMonthlyUsageLimit?: boolean;
  canRequestEnterpriseMonthlyUsageLimit?: boolean;
  workspaceRequestPolicy?: AccountSettings | null;
  workspaceMonthlyUsage?: WorkspaceMonthlyUsage | null;
  workspaceAdminRequests?: unknown;
  isWorkspaceAdminRequestsLoading?: boolean;
  isSavingWorkspaceAdminRequest?: boolean;
  saveWorkspaceAdminRequest?: (input: unknown) => Promise<unknown>;
};

const UsageLimits =
  UsageSettingsLimitsModule.usageSettingsUnit55 as unknown as React.ComponentType<UsageLimitsProps>;

function useRateLimitStatusQuery() {
  return useQuery({
    queryKey: ["rate-limit-status"],
    queryFn: () => codexRequest.safeGet("/wham/usage"),
    retry: false,
    refetchInterval: queryTimings.ONE_MINUTE,
    refetchIntervalInBackground: false,
  });
}

export function UsageSettings(): React.ReactElement | null {
  const {
    canManageCreditSettings,
    isUsageSettingsAccessLoading,
    isUsageSettingsVisible,
    plan,
  } = useUsageSettingsAccess();
  const isEnterprisePlan = isNonQuorumEnterpriseSku(plan);

  const rateLimitQuery = useRateLimitStatusQuery();
  const autoTopUpQuery = useAutoTopUpSettingsQuery({
    enabled: canManageCreditSettings,
  });
  const workspaceUsageQuery = useWorkspaceMonthlyUsageQuery({
    enabled:
      isEnterprisePlan &&
      isUsageSettingsVisible &&
      !isUsageSettingsAccessLoading,
  });
  const workspaceUsage = workspaceUsageQuery.data as
    WorkspaceMonthlyUsage | null | undefined;
  const canRequestEnterpriseLimit =
    workspaceUsage?.effective_monthly_limit?.limit != null &&
    workspaceUsage.effective_monthly_limit.limit >= 0 &&
    workspaceUsage.effective_monthly_limit.enforcement_mode === "HARD_CAP";

  const accountSettingsQuery = useUsageLimitIncreaseRequestQuery({
    enabled: isEnterprisePlan && canRequestEnterpriseLimit,
  });
  const accountSettings = accountSettingsQuery.data as
    AccountSettings | null | undefined;
  const usesNativeLimitRequests = accountSettings?.kind === "openai_native";
  const workspaceRequestsQuery = useWorkspaceAdminRequestsQuery({
    enabled:
      isEnterprisePlan && canRequestEnterpriseLimit && usesNativeLimitRequests,
  });
  const saveRequestMutation =
    useSaveWorkspaceAdminRequestMutation() as SaveRequestMutation;
  const autoTopUpMutations = useAutoTopUpMutations();

  if (!isUsageSettingsVisible && !isUsageSettingsAccessLoading) return null;

  const accessLoading = !isUsageSettingsVisible && isUsageSettingsAccessLoading;
  const contentLoading = isEnterprisePlan
    ? (workspaceUsageQuery.isLoading && workspaceUsage == null) ||
      (canRequestEnterpriseLimit &&
        usesNativeLimitRequests &&
        workspaceRequestsQuery.isLoading &&
        workspaceRequestsQuery.data == null)
    : (canManageCreditSettings &&
        autoTopUpQuery.isLoading &&
        autoTopUpQuery.data == null) ||
      (rateLimitQuery.isLoading && rateLimitQuery.data == null);
  const contentError = isEnterprisePlan
    ? (workspaceUsageQuery.isError && workspaceUsage == null) ||
      (canRequestEnterpriseLimit &&
        usesNativeLimitRequests &&
        workspaceRequestsQuery.isError &&
        workspaceRequestsQuery.data == null)
    : (canManageCreditSettings &&
        autoTopUpQuery.isError &&
        autoTopUpQuery.data == null) ||
      (rateLimitQuery.isError && rateLimitQuery.data == null);

  const retry = () => {
    if (isEnterprisePlan) {
      void workspaceUsageQuery.refetch();
      if (canRequestEnterpriseLimit) {
        void accountSettingsQuery.refetch();
        if (usesNativeLimitRequests) void workspaceRequestsQuery.refetch();
      }
      return;
    }
    void rateLimitQuery.refetch();
    if (canManageCreditSettings) void autoTopUpQuery.refetch();
  };

  if (accessLoading || contentLoading || contentError) {
    return (
      <UsageSettingsState
        label={
          accessLoading ? (
            <FormattedMessage
              id="settings.usage.access.loading"
              defaultMessage="Checking subscription…"
              description="Loading label while checking whether Usage settings should be visible"
            />
          ) : contentError ? (
            <FormattedMessage
              id="settings.usage.load.error"
              defaultMessage="Could not load usage settings."
              description="Error label shown when usage settings cannot be fetched"
            />
          ) : (
            <FormattedMessage
              id="settings.usage.load.loading"
              defaultMessage="Loading usage settings…"
              description="Loading label while usage settings are being fetched"
            />
          )
        }
        action={
          contentError ? (
            <Button color="secondary" size="toolbar" onClick={retry}>
              <FormattedMessage
                id="settings.usage.load.retry"
                defaultMessage="Retry"
                description="Retry button for usage settings fetch errors"
              />
            </Button>
          ) : null
        }
      />
    );
  }

  if (canManageCreditSettings && autoTopUpQuery.data == null) return null;

  const rateLimitStatus = (rateLimitQuery.data ??
    null) as RateLimitStatus | null;

  if (isEnterprisePlan) {
    return (
      <SettingsContentLayout
        title={
          <FormattedMessage
            id="settings.usage.enterprise.title"
            defaultMessage="Usage limits"
            description="Title for enterprise usage limits settings"
          />
        }
        subtitle={
          <FormattedMessage
            id="settings.usage.enterprise.subtitle"
            defaultMessage="See your usage within the limits defined by your administrator."
            description="Subtitle for enterprise usage limits settings"
          />
        }
        subtitleClassName="whitespace-normal"
        titleStackClassName="gap-2 pb-1"
      >
        <UsageLimits
          rateLimitStatus={rateLimitStatus}
          showEnterpriseMonthlyUsageLimit
          canRequestEnterpriseMonthlyUsageLimit={canRequestEnterpriseLimit}
          workspaceRequestPolicy={accountSettings}
          workspaceMonthlyUsage={workspaceUsage}
          workspaceAdminRequests={workspaceRequestsQuery.data ?? null}
          isWorkspaceAdminRequestsLoading={workspaceRequestsQuery.isLoading}
          isSavingWorkspaceAdminRequest={saveRequestMutation.isPending}
          saveWorkspaceAdminRequest={saveRequestMutation.mutateAsync}
        />
      </SettingsContentLayout>
    );
  }

  return (
    <SettingsContentLayout
      title={<SettingsSectionTitle slug="usage" />}
      subtitle={<UsageSettingsSubtitle />}
      subtitleClassName="whitespace-normal"
      titleStackClassName="gap-2 pb-1"
    >
      <UsageSettingsPlanModule.usageSettingsUnit42 plan={plan} />
      {canManageCreditSettings && autoTopUpQuery.data != null ? (
        <UsageSettingsAutoTopUpModule.usageSettingsUnit9
          serverState={autoTopUpQuery.data}
          creditDetails={rateLimitStatus?.credits ?? null}
          enableAutoTopUpMutation={autoTopUpMutations.enableAutoTopUpMutation}
          updateAutoTopUpMutation={autoTopUpMutations.updateAutoTopUpMutation}
          disableAutoTopUpMutation={autoTopUpMutations.disableAutoTopUpMutation}
        />
      ) : null}
      <UsageLimits rateLimitStatus={rateLimitStatus} />
      <UsageSettingsHistoryModule.usageSettingsUnit50
        showCreditHistory={canManageCreditSettings}
      />
      <UsageSettingsPlanModule._n plan={plan} />
    </SettingsContentLayout>
  );
}

function UsageSettingsSubtitle(): React.ReactElement {
  return (
    <FormattedMessage
      id="settings.usage.subtitle"
      defaultMessage="To view invoices, change your payment method, and take other actions, visit <settings>settings</settings> on Web"
      description="Subtitle pointing users to ChatGPT billing settings for broader billing actions"
      values={{
        settings: (chunks: React.ReactNode) => (
          <a
            className="inline-flex cursor-interaction text-token-text-link-foreground"
            href={CHAT_GPT_BILLING_SETTINGS_URL}
            target="_blank"
            rel="noreferrer"
          >
            {chunks}
          </a>
        ),
      }}
    />
  );
}

function UsageSettingsState({
  action,
  label,
}: {
  action: React.ReactNode;
  label: React.ReactNode;
}): React.ReactElement {
  return (
    <SettingsContentLayout title={<SettingsSectionTitle slug="usage" />}>
      <SettingsGroup>
        <SettingsGroup.Content>
          <div className="flex items-center justify-between gap-6">
            <span>{label}</span>
            {action}
          </div>
        </SettingsGroup.Content>
      </SettingsGroup>
    </SettingsContentLayout>
  );
}
