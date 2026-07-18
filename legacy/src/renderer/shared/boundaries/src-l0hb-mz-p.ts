// Restored from ref/webview/assets/src-l0hb-mz-p.js
// Boundary facade bridging restored imports to existing src/ runtime boundaries.
// Boundary facade: re-exports the src-l0hb runtime helpers.
export {
  appshotSettingDefinitions,
  generalSettingDefinitions,
  gitSettingDefinitions,
  globalSettingKeys,
  worktreeSettingDefinitions,
} from "../runtime/src-l0hb/settings";
export {
  buildPermissionOverridesForAgentMode,
  inferAgentModeFromThreadSettings,
} from "../runtime/src-l0hb/permissions";
export {
  createLocalConversationPath,
  isAbsoluteOrWindowsPath,
  localConversationRoutePattern,
  normalizeConversationId,
  normalizeGitRoot,
  normalizeProjectRoot,
  normalizeWorkspacePath,
} from "../runtime/src-l0hb/paths";
export {
  formatUnknownError,
  isHeartbeatAutomation,
  normalizePersonality,
  serializeCommentAttachmentInputItem,
  toFeatureConfigKeyPath,
} from "../runtime/src-l0hb/runtime-helpers";
export {
  zodEnumSchema,
  zodObject,
  zodObjectSchema,
  zodString,
} from "../runtime/src-l0hb/zod-runtime";

export {
  browserAutofillAndPasswordsCapabilityName,
  browserDownloadsCapabilityName,
  browserExtensionsCapabilityName,
  browserPermissionsCapabilityName,
  browserWebViewEnhancementsCapabilityName,
} from "../runtime/src-l0hb-mz-p";

// Sentry-related stubs for error-boundary cluster
export const formatRendererSentryRelease = (): string => "";
export const isRendererTracingBuildFlavor = (): boolean => false;
export const normalizeRendererSentryVersion = (_version: string): string =>
  _version;
export const rendererSentryDsn = "";
