// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// @ts-nocheck
// Type-only stub for settings-page-current modules.

export type SettingsSectionSlug = string;

export type SettingsSearchMessageDescriptor = {
  defaultMessage: string;
  id: string;
};

export type SettingsSearchTarget = {
  messages: readonly SettingsSearchMessageDescriptor[];
  sectionSlug: SettingsSectionSlug;
  terms?: readonly string[];
};

export type SettingsSearchTargetDescriptor = {
  messageTexts: string[];
  panelLabel: string;
  sectionSlug: SettingsSectionSlug;
};

export type SettingsSearchResult = {
  messageTexts: string[];
  panelLabel: string;
  sectionSlug: SettingsSectionSlug;
  score: number;
};

export type SettingsIntlShape = {
  formatMessage: (descriptor: SettingsSearchMessageDescriptor) => string;
};

export type SettingsNavigationIcon = unknown;

export type SettingsNavigationIconMap = Record<
  SettingsSectionSlug,
  SettingsNavigationIcon
>;

export type ExperimentalFeature = {
  id: string;
  visible?: boolean;
};

export type LocaleSearchOption = {
  value: string;
  label: string;
};

export type AvailabilityResult = {
  available: boolean;
  reason?: string;
};

export type HostAppInfo = {
  isSystemBackdropSupported?: boolean;
};

export type HostConfig = {
  kind: "local" | "remote";
};

export type OpenExternalUrlOptions = {
  url: string;
};

export type PanelStateSerializer = (state: unknown) => unknown;

export type ProfileVisibilityState = unknown;

export type RouteScopeStore = unknown;

export type SettingsHostSelectionState = {
  connectedRemoteConnections: unknown[];
  remoteConnectionHostIds: string[];
  selectedHostId: string | null;
  setSelectedHostId: (hostId: string) => void;
};

export type SettingsListNavigationOptions = unknown;

export type SettingsListNavigationState = unknown;

export type SettingsQueryResult<TData> = {
  data: TData | undefined;
  isLoading: boolean;
  error: unknown;
};

export type SettingsSplitViewComponent = () => boolean;

export type UsageSettingsAccessState = unknown;

export type SettingsNavigationGroup = {
  sectionSlugs: SettingsSectionSlug[];
};

export type SettingsNavigationGroupDefinition = {
  groupSlug: string;
  sectionSlugs: SettingsSectionSlug[];
};

export type SettingsNavigationSection = {
  slug: SettingsSectionSlug;
  label: string;
};

export type SettingsNavigationSidebarProps = {
  className?: string;
};

export type SettingsPageNavigationState = {
  activeSettingsSection: SettingsSectionSlug;
  visibleSettingsSections: SettingsSectionSlug[];
};

export type SettingsSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export type SettingsSearchResultsProps = {
  query: string;
  results: SettingsSearchResult[];
};

export type LocaleDisplayFormatter = (locale: string) => string;
