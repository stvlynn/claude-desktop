// Re-export boundary for fork-conversation-actions.
export { resolveLocalEnvironmentSelection } from "./selection";
export type {
  LocalEnvironment,
  LocalEnvironmentSelectionsByWorkspace,
} from "./types";

export const useLocalEnvironmentSelection = () => {};
