// Restored from ref/.vite/build/src-CoIhwwHr.js
// Domain types for ambient suggestions shared between the background refresh
// coordinator and the app-server suggestion generation pipeline.

export type AmbientSuggestionDomain = "science" | null;

export type AmbientSuggestionStatus = "pending" | "accepted" | "dismissed";

export type AmbientSuggestionRefreshMode = "default" | "first-plugin-connect";

export type AmbientSuggestion = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  appIds: string[];
  status: AmbientSuggestionStatus;
  createdAtMs: number;
  updatedAtMs: number;
};

export type AmbientSuggestionsFile = {
  projectRoot: string;
  generatedAtMs: number | null;
  currentSuggestionIds: string[];
  suggestions: AmbientSuggestion[];
};

export type AmbientSuggestionGenerationStatus = {
  domain: AmbientSuggestionDomain;
  projectRoot: string;
  runningCount: number;
  runningStartedAtMs: number | null;
  safetyRunningCount: number;
  safetyStartedAtMs: number | null;
  lastFinishedAtMs: number | null;
};

export type ConnectedApp = {
  id: string;
  name: string;
  isAccessible?: boolean;
  isEnabled?: boolean;
};

export type AmbientConnectedAppState = {
  connectedApps: ConnectedApp[];
  disabledConnectedApps: ConnectedApp[];
  disabledAmbientAppIds: Set<string>;
  disabledAppIds: string[];
  disableAllApps: boolean;
  listAppsSucceeded: boolean;
};

export type AmbientDisabledPluginConfig = {
  disabledMcpServerConfigs: Record<string, unknown>;
  disabledPluginIds: string[];
};

export type AmbientThreadSummary = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
};

export type AmbientSuggestionCandidate = {
  title: string;
  description: string;
  prompt: string;
  appId: string;
};

export type AmbientSuggestionCandidateResponse = {
  suggestions: AmbientSuggestionCandidate[];
};

export type AmbientSuggestionSafetyResponse = {
  exclude: Array<{ id: string; reason: string }>;
};

export type AmbientGenerationTokenUsage = {
  last: {
    inputTokens: number;
    cachedInputTokens: number;
    outputTokens: number;
    reasoningOutputTokens: number;
    totalTokens: number;
  };
};

export type AppServerThread = {
  id: string;
  name?: string | null;
  preview: string;
  updatedAt: number;
  cwd: string;
  ephemeral: boolean;
};

export type AppServerMarketplacePlugin = {
  id: string;
  name: string;
  installed?: boolean;
  enabled?: boolean;
  localVersion?: unknown;
  source?: { type?: string };
};

export type AppServerMarketplace = {
  name: string;
  plugins: AppServerMarketplacePlugin[];
};

export type AppServerPathApi = {
  join(...segments: string[]): string;
  resolve(...segments: string[]): string;
};
