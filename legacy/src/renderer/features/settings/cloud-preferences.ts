// Restored from ref/webview/assets/cloud-preferences-DDzA-ZMw.js
// Updated with exports from ref/webview/assets/cloud-preferences-B7VkZ8HI.js.

import {
  _vscodeApiS as useVscodeMutation,
  vscodeApiA as useVscodeQueryClient,
  vscodeApiU,
  vscodeApiV as useVscodeQuery,
} from "../../shared/runtime/vscode-api";
import { codexRequest } from "../../shared/runtime/request";
type CloudPreferencePatternVariable = {
  char_count: number;
  example: string;
  value: string;
};
const CLOUD_USER_PREFERENCES_QUERY_KEY = ["cloud-user-preferences"];
const CLOUD_PREFERENCES_CONFIG_QUERY_KEY = ["cloud-preferences-config"];
type CloudUserPreferences = {
  branch_format?: string;
  git_diff_mode?: string;
  [key: string]: unknown;
};

type CloudPreferencesConfig = {
  branch_format?: string;
  git_diff_mode?: string;
  branch_format_max_length?: number;
  branch_format_special_values?: Array<{
    char_count: number;
    example: string;
    value: string;
  }>;
  [key: string]: unknown;
};

type QueryResult<TData> = {
  data?: TData;
  isError: boolean;
  isLoading: boolean;
  refetch(): Promise<unknown>;
};

function useCloudUserPreferences(): QueryResult<CloudUserPreferences> {
  return useVscodeQuery({
    queryKey: CLOUD_USER_PREFERENCES_QUERY_KEY,
    queryFn: fetchCloudUserPreferences,
    retry: false,
    staleTime: vscodeApiU.FIVE_MINUTES,
  }) as QueryResult<CloudUserPreferences>;
}
function fetchCloudUserPreferences() {
  return codexRequest.safeGet("/wham/settings/user");
}
function useCloudPreferencesConfig(): QueryResult<CloudPreferencesConfig> {
  return useVscodeQuery({
    queryKey: CLOUD_PREFERENCES_CONFIG_QUERY_KEY,
    queryFn: fetchCloudPreferencesConfig,
    retry: false,
    staleTime: vscodeApiU.FIVE_MINUTES,
  }) as QueryResult<CloudPreferencesConfig>;
}
function fetchCloudPreferencesConfig() {
  return codexRequest.safeGet("/wham/settings/configs/user-preferences");
}
export type CloudPreferenceUpdate = {
  branch_format?: string;
  git_diff_mode?: string;
  [key: string]: unknown;
};

type CloudMutationResult = {
  isPending: boolean;
  mutate(
    preference: CloudPreferenceUpdate,
    options?: {
      onSuccess?: () => void;
      onError?: () => void;
    },
  ): void;
};

function useUpdateCloudUserPreferences(): CloudMutationResult {
  const queryClient = useVscodeQueryClient();
  const mutation = useVscodeMutation({
    mutationFn: updateCloudUserPreferences,
    onSuccess: (preferences) => {
      queryClient.setQueryData(CLOUD_USER_PREFERENCES_QUERY_KEY, preferences);
    },
  });
  return mutation as CloudMutationResult;
}
function updateCloudUserPreferences(preferences: unknown) {
  return codexRequest.safePatch("/wham/settings/user", {
    requestBody: preferences,
  });
}
function validateCloudPathPattern(
  pattern: string | null | undefined,
  maxLength: number | undefined,
  variables: CloudPreferencePatternVariable[] | undefined,
) {
  if (pattern == null || maxLength == null || variables == null) return null;
  const openingBraceCount = (pattern.match(/{/g) ?? []).length;
  if (openingBraceCount !== (pattern.match(/}/g) ?? []).length) {
    return "bracket-mismatch";
  }
  if (openingBraceCount === 0) return "missing-pattern";
  const variableValues = variables.map((variable) => variable.value);
  if (
    (pattern.match(/{([^}]+)}/g) ?? []).some(
      (match) => !variableValues.includes(match),
    )
  ) {
    return "invalid-pattern";
  }
  const resolvedPattern = replaceCloudPathPatternVariables(
    pattern,
    variables,
    (variable) => "x".repeat(variable.char_count),
  );
  return resolvedPattern.length > maxLength
    ? "too-long"
    : resolvedPattern.startsWith("/")
      ? "leading-slash"
      : /^[a-zA-Z0-9./\-_]+$/.test(resolvedPattern)
        ? null
        : "invalid-characters";
}
function renderCloudPathPatternExample(
  pattern: string,
  variables: CloudPreferencePatternVariable[],
) {
  return replaceCloudPathPatternVariables(
    pattern,
    variables,
    (variable) => variable.example,
  );
}
function replaceCloudPathPatternVariables(
  pattern: string,
  variables: CloudPreferencePatternVariable[],
  getReplacement: (variable: CloudPreferencePatternVariable) => string,
) {
  let resolvedPattern = pattern;
  for (const variable of variables) {
    resolvedPattern = resolvedPattern.replaceAll(
      variable.value,
      getReplacement(variable),
    );
  }
  return resolvedPattern;
}
function initCloudPreferencesChunk(): void {}
export {
  useUpdateCloudUserPreferences,
  useCloudUserPreferences,
  validateCloudPathPattern,
  useCloudPreferencesConfig,
  renderCloudPathPatternExample,
  initCloudPreferencesChunk,
};
