// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Public sharing helpers and workspace user controls.
import {
  WorkspaceAccessDropdown,
  WorkspaceAccessSelect,
} from "./access-controls";
import { ShareTargetAutocomplete } from "./autocomplete";
import { ShareDialogPrimaryActions } from "./primary-actions";
import {
  filterAvailableWorkspaceUsers,
  getWorkspaceUserDisplayName,
  useWorkspaceGroupsQuery,
  useWorkspaceUsersQuery,
  workspaceUserToShareTargetOption,
} from "./queries";
import { ShareTargetRow } from "./share-target-row";
export {
  ShareTargetAutocomplete,
  getWorkspaceUserDisplayName,
  WorkspaceAccessDropdown,
  ShareDialogPrimaryActions,
  useWorkspaceUsersQuery,
  filterAvailableWorkspaceUsers,
  ShareTargetRow,
  workspaceUserToShareTargetOption,
  useWorkspaceGroupsQuery,
  WorkspaceAccessSelect,
};
export type {
  ShareDialogActionConfig,
  ShareDialogPrimaryAction,
  ShareTargetOption,
  ShareTargetOptionSection,
  WorkspaceAccessOption,
  WorkspaceGroup,
  WorkspaceUser,
} from "./types";
