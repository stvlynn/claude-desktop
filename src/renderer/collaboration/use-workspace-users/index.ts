// Boundary stub for workspace-user collaboration helpers.
// Provides the minimal exports required by the appgen-share-dialog cluster.

export type WorkspaceUser = {
  account_user_id: string;
  email?: string | null;
  name?: string | null;
};

export type ShareTargetOption = {
  user?: WorkspaceUser;
  group?: { id: string; name: string; size: number };
  kind?: "user" | "group";
  chipLabel?: string;
  id?: string;
  label?: string;
  secondaryLabel?: string | null;
};

export type WorkspaceAccessOption = {
  value: string;
  label: string;
  description?: string;
  icon?: unknown;
};

export function workspaceUserToShareTargetOption(
  user: WorkspaceUser,
): ShareTargetOption {
  return {
    kind: "user",
    user,
    chipLabel: user.name ?? user.email ?? user.account_user_id,
    id: `user:${user.account_user_id}`,
    label: user.name ?? user.email ?? user.account_user_id,
    secondaryLabel: user.name != null ? user.email ?? null : null,
  };
}

export function WorkspaceAccessSelect(_props: unknown): null {
  return null;
}
