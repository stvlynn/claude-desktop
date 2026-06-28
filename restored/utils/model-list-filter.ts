// Restored from ref/webview/assets/model-list-filter-BOpqDcyc.js
// model-list-filter-BOpqDcyc chunk restored from the Codex webview bundle.
type ReasoningEffort = {
  reasoningEffort: string;
  description: string;
};

type ModelListItem = {
  model: string;
  hidden?: boolean;
  isDefault?: boolean;
  supportedReasoningEfforts: ReasoningEffort[];
  [key: string]: unknown;
};

type ModelListFilterOptions = {
  authMethod: string;
  availableModels: Set<string>;
  defaultModel: string;
  models: ModelListItem[];
  useHiddenModels: boolean;
};

type ModelListFilterResult = {
  models: ModelListItem[];
  defaultModel: ModelListItem | null;
};

const COPILOT_DEFAULT_REASONING_EFFORT: ReasoningEffort = {
  reasoningEffort: "medium",
  description: "medium effort",
};

export function modelListFilter({
  authMethod,
  availableModels,
  defaultModel,
  models,
  useHiddenModels,
}: ModelListFilterOptions): ModelListFilterResult {
  const filteredModels: ModelListItem[] = [];
  let selectedDefaultModel: ModelListItem | null = null;
  const shouldUseHiddenModels =
    useHiddenModels && authMethod !== "amazonBedrock";

  models.forEach((model) => {
    const isVisible = shouldUseHiddenModels
      ? availableModels.has(model.model)
      : !model.hidden;
    if (!isVisible) return;

    const supportedReasoningEfforts =
      authMethod === "copilot"
        ? [
            model.supportedReasoningEfforts.find(
              (effort) => effort.reasoningEffort === "medium",
            ) ?? COPILOT_DEFAULT_REASONING_EFFORT,
          ]
        : [...model.supportedReasoningEfforts];

    const filteredModel = {
      ...model,
      supportedReasoningEfforts,
    };
    filteredModels.push(filteredModel);
    if (model.isDefault) selectedDefaultModel = model;
  });

  selectedDefaultModel ??=
    filteredModels.find((model) => model.model === defaultModel) ?? null;

  return {
    models: filteredModels,
    defaultModel: selectedDefaultModel,
  };
}
