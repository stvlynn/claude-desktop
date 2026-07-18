// Restored from ref/.vite/build/index.js

import * as schema from "zod";

const acceleratorPreference = schema.union([
  schema.literal("off"),
  schema.object({ accelerator: schema.string() }),
]);
const optionalAcceleratorPreference = schema.union([
  schema.literal("double-tap-option"),
  acceleratorPreference,
]);
const dictationAcceleratorPreference = schema.union([
  schema.literal("capslock"),
  schema.literal("double-tap-capslock"),
  acceleratorPreference,
]);
const stringArray = schema.array(schema.string());

export const appPreferenceSchema = schema.object({
  menuBarEnabled: schema.boolean(),
  legacyQuickEntryEnabled: schema.boolean(),
  chromeExtensionEnabled: schema.boolean(),
  chromeExtensionInstallDialogDismissed: schema.boolean(),
  chromeExtension: schema.object({
    pairedDeviceId: schema.string().optional(),
    pairedDeviceName: schema.string().optional(),
    pairedFromDeviceIds: stringArray.optional(),
  }),
  quickEntryShortcut: optionalAcceleratorPreference,
  quickEntryDictationShortcut: dictationAcceleratorPreference,
  hardwareBuddyEnabled: schema.boolean(),
  plushRaccoonEnabled: schema.boolean(),
  quietPenguinEnabled: schema.boolean(),
  louderPenguinEnabled: schema.boolean(),
  floatingPenguinEnabled: schema.boolean(),
  plushRaccoonOption1: acceleratorPreference,
  plushRaccoonOption2: acceleratorPreference,
  plushRaccoonOption3: acceleratorPreference,
  chillingSlothLocation: schema.union([
    schema.literal("default"),
    schema.object({ customPath: schema.string() }),
  ]),
  ccBranchPrefix: schema.string(),
  ccMaxWarmWorktrees: schema.number().int().min(0),
  ccWorktreeReapAfterHours: schema.number().min(0),
  secureVmFeaturesEnabled: schema.boolean(),
  launchEnabled: schema.boolean(),
  launchPreviewStorage: schema.enum(["none", "shared", "session"]),
  launchPreviewPersistedWorkspaces: stringArray,
  launchPreviewSessionScopedSessions: stringArray,
  launchPreviewAllowedOrigins: stringArray,
  launchPreviewAllowedDomainTransitions: stringArray,
  localAgentModeTrustedFolders: stringArray,
  remoteFolderConsentMemory: stringArray,
  remoteSessionFolderGrants: schema.record(
    schema.string(),
    schema.array(
      schema.union([
        schema.string(),
        schema.object({
          display: schema.string(),
          unc: schema.string().optional(),
          letter: schema.string().optional(),
        }),
      ]),
    ),
  ),
  allowAllBrowserActions: schema.boolean(),
  dispatchTrustedCodeWorkspaces: stringArray,
  dispatchCodeTasksPermissionMode: schema.enum([
    "default",
    "acceptEdits",
    "plan",
    "auto",
    "bypassPermissions",
  ]),
  coworkScheduledTasksEnabled: schema.boolean(),
  coworkHipaaRestricted: schema.boolean(),
  ccdScheduledTasksEnabled: schema.boolean(),
  installSourceLanding: schema.literal("code").nullable(),
  sidebarMode: schema.enum(["chat", "code", "task", "epitaxy"]),
  bypassPermissionsModeEnabled: schema.boolean(),
  bypassPermissionsOptInByAccount: schema.record(
    schema.string(),
    schema.boolean(),
  ),
  bypassPermissionsGateByAccount: schema.record(
    schema.string(),
    schema.boolean(),
  ),
  dockBounceEnabled: schema.boolean(),
  coworkWebSearchEnabled: schema.boolean(),
  coworkModelAutoFallbackByAccount: schema.record(
    schema.string(),
    schema.boolean(),
  ),
  coworkDisabledTools: stringArray,
  coworkSpaceContextEnabled: schema.boolean(),
  keepAwakeEnabled: schema.boolean(),
  wakeSchedulerEnabled: schema.boolean(),
  wakeSchedulerApprovedThisCycle: schema.boolean(),
  wakeSchedulerRegisteredAtVersion: schema.string(),
  wakeSchedulerCourtesyFlippedKeepAwake: schema.boolean(),
  wakeSchedulerDisableEmitted: schema.boolean(),
  coworkOnboardingResumeStep: schema
    .object({
      step: schema.enum(["ios", "setup"]),
      accountKey: schema.string(),
    })
    .nullable(),
  chicagoEnabled: schema.boolean(),
  remoteToolsDeviceName: schema.string(),
  chicagoAutoUnhide: schema.boolean(),
  chicagoUserDeniedBundleIds: stringArray,
  vmMemoryGB: schema.number().int().min(0),
  vmCpuCount: schema.number().int().min(0),
  ccAutoArchiveOnPrClose: schema.boolean(),
  ccRemoteControlDefaultEnabled: schema.boolean().nullable(),
  epitaxyPrefs: schema.record(schema.string(), schema.unknown()),
});

export type AppPreferences = schema.infer<typeof appPreferenceSchema>;

export const APP_PREFERENCE_DEFAULTS: AppPreferences = {
  menuBarEnabled: true,
  legacyQuickEntryEnabled: true,
  chromeExtensionEnabled: true,
  chromeExtensionInstallDialogDismissed: false,
  chromeExtension: {},
  quickEntryShortcut: "double-tap-option",
  quickEntryDictationShortcut: "off",
  hardwareBuddyEnabled: false,
  plushRaccoonEnabled: false,
  quietPenguinEnabled: false,
  louderPenguinEnabled: false,
  floatingPenguinEnabled: false,
  plushRaccoonOption1: "off",
  plushRaccoonOption2: "off",
  plushRaccoonOption3: "off",
  chillingSlothLocation: "default",
  ccBranchPrefix: "claude",
  ccMaxWarmWorktrees: 3,
  ccWorktreeReapAfterHours: 24,
  secureVmFeaturesEnabled: true,
  launchEnabled: true,
  launchPreviewStorage: "none",
  launchPreviewPersistedWorkspaces: [],
  launchPreviewSessionScopedSessions: [],
  launchPreviewAllowedOrigins: [],
  launchPreviewAllowedDomainTransitions: [],
  localAgentModeTrustedFolders: [],
  remoteFolderConsentMemory: [],
  remoteSessionFolderGrants: {},
  allowAllBrowserActions: false,
  dispatchTrustedCodeWorkspaces: [],
  dispatchCodeTasksPermissionMode: "acceptEdits",
  coworkScheduledTasksEnabled: false,
  coworkHipaaRestricted: false,
  ccdScheduledTasksEnabled: false,
  installSourceLanding: null,
  sidebarMode: "chat",
  bypassPermissionsModeEnabled: false,
  bypassPermissionsOptInByAccount: {},
  bypassPermissionsGateByAccount: {},
  dockBounceEnabled: false,
  coworkWebSearchEnabled: true,
  coworkModelAutoFallbackByAccount: {},
  coworkDisabledTools: [],
  coworkSpaceContextEnabled: false,
  keepAwakeEnabled: false,
  wakeSchedulerEnabled: false,
  wakeSchedulerApprovedThisCycle: false,
  wakeSchedulerRegisteredAtVersion: "",
  wakeSchedulerCourtesyFlippedKeepAwake: false,
  wakeSchedulerDisableEmitted: false,
  coworkOnboardingResumeStep: null,
  chicagoEnabled: false,
  remoteToolsDeviceName: "",
  chicagoAutoUnhide: true,
  chicagoUserDeniedBundleIds: [],
  vmMemoryGB: 0,
  vmCpuCount: 0,
  ccAutoArchiveOnPrClose: false,
  ccRemoteControlDefaultEnabled: null,
  epitaxyPrefs: {},
};

export const RENDERER_FORBIDDEN_APP_PREFERENCES = new Set<keyof AppPreferences>(
  [
    "remoteSessionFolderGrants",
    "remoteFolderConsentMemory",
    "localAgentModeTrustedFolders",
    "coworkDisabledTools",
    "secureVmFeaturesEnabled",
    "launchPreviewPersistedWorkspaces",
    "launchPreviewSessionScopedSessions",
    "launchPreviewAllowedDomainTransitions",
  ],
);

const acceleratorTokens = new Set([
  "Command",
  "Cmd",
  "Control",
  "Ctrl",
  "CommandOrControl",
  "CmdOrCtrl",
  "Alt",
  "Option",
  "AltGr",
  "Shift",
  "Super",
  "Meta",
  "Plus",
  "Space",
  "Tab",
  "Capslock",
  "Numlock",
  "Scrolllock",
  "Backspace",
  "Delete",
  "Insert",
  "Return",
  "Enter",
  "Up",
  "Down",
  "Left",
  "Right",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Escape",
  "Esc",
  "VolumeUp",
  "VolumeDown",
  "VolumeMute",
  "MediaNextTrack",
  "MediaPreviousTrack",
  "MediaStop",
  "MediaPlayPause",
  "PrintScreen",
]);

export function isValidElectronAccelerator(accelerator: string): boolean {
  return accelerator
    .split("+")
    .every(
      (token) =>
        acceleratorTokens.has(token) ||
        /^[A-Za-z]$/.test(token) ||
        /^[0-9]$/.test(token) ||
        /^F([1-9]|1[0-9]|2[0-4])$/.test(token) ||
        /^num([0-9]|dec|add|sub|mult|div)$/.test(token) ||
        /^[)!@#$%^&*(:;+=<,_\->.?/~`{}\]|[\\'"\"]$/.test(token),
    );
}
