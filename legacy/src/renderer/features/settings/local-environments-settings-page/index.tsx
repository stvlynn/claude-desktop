// Restored from ref/webview/assets/local-environments-settings-page-q1SLOHGN.js
// Claude local-environment settings orchestration.

import React from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "../../../shared/vendor/react-router";
import { FormattedMessage } from "../../../shared/vendor/react-intl";
import {
  _vscodeApiO as useVscodeQuery,
  vscodeApiF as vscodeBridge,
} from "../../../shared/runtime/vscode-api";
import { useSignalValue } from "../../../shared/runtime/app-scope-hooks";
import {
  type WorkspaceGroup,
  workspaceGroupsSignal,
} from "../../../shared/runtime/workspace-signals";
import { SettingsGroup } from "../../../shared/lib/settings-group";
import { SettingsContentLayout } from "../../../shared/ui/settings-content-layout";
import { SettingsSectionTitle } from "../settings-shared";
import { useSettingsHostContext } from "../settings-host-context";
import {
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
  parseLocalEnvironmentCreateRoute,
} from "../local-environment-create-route";
import { localEnvironmentEditorFormModule } from "./editor-form";
import { localEnvironmentPreviewModule } from "./preview";
import { LocalEnvironmentShared } from "./shared";
import { localEnvironmentWorkspaceModule } from "./workspace-list";

type EnvironmentSummary = {
  configPath: string;
  workspaceRoot?: string | null;
};

type LocalEnvironmentConfigResponse = {
  configPath: string;
  exists: boolean;
};

type ParsedEnvironmentResponse = {
  environment:
    | { type: "success"; environment: unknown }
    | { type: "error"; error: { message: string } };
};

type QueryResult<T> = {
  data?: T;
  error?: Error | null;
  isLoading: boolean;
};

type BreadcrumbProps = {
  workspaceRoot: string;
  workspaceGroup: WorkspaceGroup | null;
  mode?: "edit";
  onBack(): void;
};

type WorkspaceSelectorProps = {
  groups: WorkspaceGroup[];
  hostId: string;
  isLoading: boolean;
  onAddWorkspace(): void;
  onCreateEnvironment(workspaceRoot: string, configPath: string | null): void;
  onSelectEnvironment(workspaceRoot: string, configPath: string | null): void;
};

type EditorProps = {
  hostId: string;
  workspaceRoot: string;
  workspaceGroup: WorkspaceGroup | null;
  configPath: string;
  configExists: boolean;
  initialEnvironment: unknown;
  parseErrorMessage: string | null;
  readErrorMessage: string | null;
  onSaved(): void;
};

type PreviewProps = Omit<EditorProps, "hostId" | "configPath" | "onSaved"> & {
  onEdit(): void;
};

const LocalEnvironmentBreadcrumb =
  LocalEnvironmentShared.LocalEnvironmentBreadcrumb as unknown as React.ComponentType<BreadcrumbProps>;
const WorkspaceLocalEnvironmentSelector =
  localEnvironmentWorkspaceModule.WorkspaceLocalEnvironmentSelector as unknown as React.ComponentType<WorkspaceSelectorProps>;
const LocalEnvironmentEditor =
  localEnvironmentEditorFormModule.LocalEnvironmentEditorForm as unknown as React.ComponentType<EditorProps>;
const LocalEnvironmentPreview =
  localEnvironmentPreviewModule.LocalEnvironmentPreview as unknown as React.ComponentType<PreviewProps>;

export function LocalEnvironmentsSettingsPage(): React.ReactElement {
  const location = useLocation();
  const searchParams = React.useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigate = useNavigate();
  const { selectedHostId } = useSettingsHostContext();
  const allWorkspaceGroups = useSignalValue<WorkspaceGroup[]>(
    workspaceGroupsSignal,
  );
  const isCreateRoute = location.pathname === LOCAL_ENVIRONMENT_CREATE_ROUTE;
  const createRoute = isCreateRoute
    ? parseLocalEnvironmentCreateRoute(
        searchParams,
        (location.state ?? {}) as { hostId?: string; returnTo?: string },
      )
    : null;
  const hostId = createRoute?.hostId ?? selectedHostId;
  const workspaceGroups = (allWorkspaceGroups ?? []).filter(
    (group) =>
      group.path != null &&
      (hostId === "local"
        ? group.hostId == null || group.hostId === "local"
        : group.hostId === hostId),
  );

  const [workspaceRoot, setWorkspaceRoot] = React.useState<string | null>(
    createRoute?.workspaceRoot ?? searchParams.get("workspaceRoot"),
  );
  const [selectedConfigPath, setSelectedConfigPath] = React.useState<
    string | null
  >(createRoute?.configPath ?? searchParams.get("configPath"));
  const [isEditing, setIsEditing] = React.useState(
    createRoute != null || searchParams.get("mode") === "edit",
  );
  const workspaceGroup =
    workspaceGroups.find((group) => group.path === workspaceRoot) ?? null;

  const environmentsQuery = useVscodeQuery("local-environments", {
    params: { hostId, workspaceRoot: workspaceRoot ?? "" },
    queryConfig: { enabled: workspaceRoot != null },
    select: (response: { environments?: EnvironmentSummary[] }) =>
      response.environments ?? [],
  }) as QueryResult<EnvironmentSummary[]>;
  const environments = environmentsQuery.data ?? [];
  const inferredConfigPath =
    environments.find(
      (environment) => environment.workspaceRoot === workspaceRoot,
    )?.configPath ??
    environments[0]?.configPath ??
    null;
  const configPath =
    selectedConfigPath ?? createRoute?.configPath ?? inferredConfigPath;

  const configQuery = useVscodeQuery("local-environment-config", {
    params: { configPath: configPath ?? "", hostId },
    queryConfig: { enabled: workspaceRoot != null && configPath != null },
  }) as QueryResult<LocalEnvironmentConfigResponse>;
  const resolvedConfigPath = configQuery.data?.configPath ?? configPath;
  const environmentQuery = useVscodeQuery("local-environment", {
    params: { configPath: resolvedConfigPath ?? "", hostId },
    queryConfig: {
      enabled:
        workspaceRoot != null &&
        resolvedConfigPath != null &&
        configQuery.data?.exists === true,
    },
  }) as QueryResult<ParsedEnvironmentResponse>;

  if (isCreateRoute && createRoute == null) {
    return <Navigate to="/settings/local-environments" replace />;
  }

  const selectEnvironment = (
    nextWorkspaceRoot: string,
    nextConfigPath: string | null,
  ) => {
    setWorkspaceRoot(nextWorkspaceRoot);
    setSelectedConfigPath(nextConfigPath);
    setIsEditing(false);
  };
  const createEnvironment = (
    nextWorkspaceRoot: string,
    nextConfigPath: string | null,
  ) => {
    setWorkspaceRoot(nextWorkspaceRoot);
    setSelectedConfigPath(nextConfigPath);
    setIsEditing(true);
  };
  const leaveEditor = () => {
    if (createRoute != null) {
      navigate(createRoute.returnTo, { replace: true });
    } else {
      setIsEditing(false);
    }
  };
  const clearWorkspace = () => {
    setWorkspaceRoot(null);
    setSelectedConfigPath(null);
    setIsEditing(false);
  };
  const breadcrumb =
    workspaceRoot == null ? null : (
      <LocalEnvironmentBreadcrumb
        workspaceRoot={workspaceRoot}
        workspaceGroup={workspaceGroup}
        mode={isEditing ? "edit" : undefined}
        onBack={isEditing ? leaveEditor : clearWorkspace}
      />
    );

  if (workspaceRoot == null) {
    return (
      <LocalEnvironmentsSettingsContent
        subtitle={
          <FormattedMessage
            id="settings.localEnvironments.workspaceSelect.description"
            defaultMessage="Local environments tell Claude how to set up worktrees for a project."
            description="Description for the workspace selection step"
          />
        }
      >
        <WorkspaceLocalEnvironmentSelector
          groups={workspaceGroups}
          hostId={hostId}
          isLoading={false}
          onAddWorkspace={() =>
            vscodeBridge.dispatchMessage("add-workspace-root", { hostId })
          }
          onCreateEnvironment={createEnvironment}
          onSelectEnvironment={selectEnvironment}
        />
      </LocalEnvironmentsSettingsContent>
    );
  }

  const isLoading =
    environmentsQuery.isLoading ||
    configQuery.isLoading ||
    environmentQuery.isLoading;
  if (isLoading) {
    return (
      <LocalEnvironmentsSettingsContent backSlot={breadcrumb}>
        <LocalEnvironmentState
          title="Loading local environments"
          body="Fetching your project configuration."
        />
      </LocalEnvironmentsSettingsContent>
    );
  }

  if (configQuery.data == null || resolvedConfigPath == null) {
    return (
      <LocalEnvironmentsSettingsContent backSlot={breadcrumb}>
        <LocalEnvironmentState
          title="Local environments unavailable"
          body="We could not load local environment settings for this project."
        />
      </LocalEnvironmentsSettingsContent>
    );
  }

  const parsedEnvironment = environmentQuery.data?.environment;
  const initialEnvironment =
    parsedEnvironment?.type === "success"
      ? parsedEnvironment.environment
      : null;
  const parseErrorMessage =
    parsedEnvironment?.type === "error"
      ? parsedEnvironment.error.message
      : null;
  const readErrorMessage =
    configQuery.error?.message ??
    environmentQuery.error?.message ??
    environmentsQuery.error?.message ??
    null;

  return (
    <LocalEnvironmentsSettingsContent backSlot={breadcrumb}>
      {isEditing ? (
        <LocalEnvironmentEditor
          hostId={hostId}
          workspaceRoot={workspaceRoot}
          workspaceGroup={workspaceGroup}
          configPath={configQuery.data.configPath}
          configExists={configQuery.data.exists}
          initialEnvironment={initialEnvironment}
          parseErrorMessage={parseErrorMessage}
          readErrorMessage={readErrorMessage}
          onSaved={leaveEditor}
        />
      ) : (
        <LocalEnvironmentPreview
          workspaceRoot={workspaceRoot}
          workspaceGroup={workspaceGroup}
          configExists={configQuery.data.exists}
          initialEnvironment={initialEnvironment}
          parseErrorMessage={parseErrorMessage}
          readErrorMessage={readErrorMessage}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </LocalEnvironmentsSettingsContent>
  );
}

function LocalEnvironmentsSettingsContent({
  backSlot,
  children,
  subtitle,
}: {
  backSlot?: React.ReactNode;
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}): React.ReactElement {
  return (
    <SettingsContentLayout
      title={<SettingsSectionTitle slug="local-environments" />}
      subtitle={subtitle}
      backSlot={backSlot}
    >
      {children}
    </SettingsContentLayout>
  );
}

function LocalEnvironmentState({
  body,
  title,
}: {
  body: string;
  title: string;
}): React.ReactElement {
  return (
    <SettingsGroup>
      <SettingsGroup.Header title={title} />
      <SettingsGroup.Content>
        <div className="p-3 text-sm text-token-text-secondary">{body}</div>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
