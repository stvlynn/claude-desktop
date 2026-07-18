// Restored from ref/.vite/build/index.js

export const APP_FEATURE_NAMES = [
  "artifactsPane",
  "nativeQuickEntry",
  "quickEntryDictation",
  "customQuickEntryDictationShortcut",
  "quickEntryGlobalShortcut",
  "plushRaccoon",
  "quietPenguin",
  "louderPenguin",
  "chillingSlothEnterprise",
  "chillingSlothFeat",
  "chillingSlothSshShell",
  "chillingSlothLocal",
  "chillingSlothPool",
  "yukonSilver",
  "yukonSilverGems",
  "yukonSilverGemsCache",
  "wakeScheduler",
  "desktopTopBar",
  "ccdPlugins",
  "computerUse",
  "coworkWatchRecord",
  "coworkKappa",
  "coworkArtifacts",
  "framebufferPreview",
  "iosSimulator",
  "androidEmulator",
  "iosSimulatorH264",
  "grandPrix",
  "tearOffHalo",
  "coworkArtifactPopout",
  "claudeDesignWindow",
  "coworkRemoteSessionSpaces",
  "spaceMemoryBridge",
  "grandPrixRequest",
  "bootstrapConfig",
  "chatIn3p",
  "builtinMcpPresets",
  "surfaceTogglesPreview",
  "chatTab",
  "chatCodeExecution",
  "coworkBranchSession",
  "epitaxyMcpApps",
] as const;

export type AppFeatureName = (typeof APP_FEATURE_NAMES)[number];
export type UnsupportedAppFeatureCode =
  | "unknown"
  | "disabled_by_enterprise"
  | "disabled_by_user"
  | "unsupported_platform"
  | "unsupported_session"
  | "unsupported_architecture"
  | "msix_required"
  | "unsupported_os_version"
  | "virtualization_not_available"
  | "virtualization_entitlement_missing"
  | "hcs_not_available"
  | "virtualization_tools_missing"
  | "kvm_permission_denied"
  | "vhost_vsock_module_missing"
  | "beta_disabled_by_org";

export type AppFeatureSupport =
  | { status: "supported"; maturity?: "beta" }
  | {
      status: "unsupported";
      reason: string;
      unsupportedCode: UnsupportedAppFeatureCode;
    }
  | { status: "unavailable" };

export type SupportedAppFeatures = Partial<
  Record<AppFeatureName, AppFeatureSupport>
>;

export type AppFeatureEnvironment = {
  platform: NodeJS.Platform;
  arch: string;
  macOsMajor: number;
  windowsBuild?: number;
  isPackaged: boolean;
  isWindowsStore: boolean;
  microphoneRestricted: boolean;
  waylandGlobalShortcutsPortalAvailable: boolean;
  codeSurfaceEnabled: boolean;
  coworkSurfaceEnabled: boolean;
  chatSurfaceEnabled: boolean;
  chatAdvancedFileAnalysisEnabled: boolean;
  bashDisabled: boolean;
  secureVmEnabledByEnterprise: boolean;
  secureVmEnabledByUser: boolean;
};

const supported = (): AppFeatureSupport => ({ status: "supported" });
const unavailable = (): AppFeatureSupport => ({ status: "unavailable" });
const unsupported = (
  reason: string,
  unsupportedCode: UnsupportedAppFeatureCode,
): AppFeatureSupport => ({ status: "unsupported", reason, unsupportedCode });

function prototypeFeature(
  environment: AppFeatureEnvironment,
  evaluate: () => AppFeatureSupport,
): AppFeatureSupport {
  return environment.isPackaged ? unavailable() : evaluate();
}

function evaluateCoworkBase(
  environment: AppFeatureEnvironment,
): AppFeatureSupport {
  if (environment.platform !== "darwin" && environment.platform !== "win32") {
    return unsupported(
      `Cowork is not currently supported on ${environment.platform}`,
      "unsupported_platform",
    );
  }
  if (environment.arch !== "x64" && environment.arch !== "arm64") {
    return unsupported(
      `Cowork is not currently supported on ${environment.platform} with an ${environment.arch} CPU`,
      "unsupported_architecture",
    );
  }
  if (environment.platform === "win32" && !environment.isWindowsStore) {
    return unsupported(
      "Cowork requires Claude Desktop be installed with our modern installer",
      "msix_required",
    );
  }
  if (
    environment.platform === "win32" &&
    (environment.windowsBuild ?? 0) < 19041
  ) {
    return unsupported(
      "Cowork requires Windows 10 build 2004 or later. Update your operating system to use this feature.",
      "unsupported_os_version",
    );
  }
  if (environment.platform === "darwin" && environment.macOsMajor < 14) {
    return unsupported(
      "Cowork requires macOS 14.0 (Sonoma) or later. Update your operating system to use this feature.",
      "unsupported_os_version",
    );
  }
  return supported();
}

function evaluateCowork(environment: AppFeatureEnvironment): AppFeatureSupport {
  const base = evaluateCoworkBase(environment);
  if (base.status !== "supported") return base;
  if (!environment.secureVmEnabledByEnterprise) {
    return unsupported(
      "Ask your IT administrator to enable the secureVmFeaturesEnabled setting in the Claude desktop configuration profile.",
      "disabled_by_enterprise",
    );
  }
  if (!environment.coworkSurfaceEnabled) {
    return unsupported("", "disabled_by_enterprise");
  }
  if (!environment.secureVmEnabledByUser) {
    return unsupported(
      "Enable the secureVmFeaturesEnabled preference to use this feature.",
      "disabled_by_user",
    );
  }
  return supported();
}

function addBetaMaturity(features: SupportedAppFeatures): SupportedAppFeatures {
  const result = { ...features };
  for (const name of [
    "chatTab",
    "surfaceTogglesPreview",
    "chatCodeExecution",
  ] as const) {
    const feature = result[name];
    if (feature?.status === "supported") {
      result[name] = { ...feature, maturity: "beta" };
    }
  }
  return result;
}

export function evaluateSupportedAppFeatures(
  environment: AppFeatureEnvironment,
): SupportedAppFeatures {
  const cowork = evaluateCowork(environment);
  const coworkDependent = cowork.status === "supported" ? supported() : cowork;
  const macPrototype = (): AppFeatureSupport =>
    environment.platform === "darwin"
      ? supported()
      : unsupported(
          "Device simulator panel requires macOS",
          "unsupported_platform",
        );
  const nativeQuickEntry = (): AppFeatureSupport =>
    environment.platform !== "darwin"
      ? unavailable()
      : environment.macOsMajor < 13
        ? unsupported("This feature requires macOS 13.0 or higher", "unknown")
        : supported();
  const quickEntryDictation = (): AppFeatureSupport =>
    environment.platform !== "darwin"
      ? unavailable()
      : environment.macOsMajor < 14
        ? unsupported("This feature requires macOS 14.0 or higher", "unknown")
        : environment.microphoneRestricted
          ? unsupported(
              "Claude Nest has been restricted from accessing the microphone by a system administrator",
              "unknown",
            )
          : supported();
  const quickEntryGlobalShortcut =
    environment.platform === "linux" &&
    !environment.waylandGlobalShortcutsPortalAvailable
      ? unsupported(
          "Global keyboard shortcuts require the GlobalShortcuts desktop portal, which this Wayland session does not provide",
          "unsupported_session",
        )
      : supported();
  const chillingSlothEnterprise = environment.codeSurfaceEnabled
    ? supported()
    : unsupported(
        "Claude Code for Desktop has been disabled by your organization administrator",
        "disabled_by_enterprise",
      );
  const computerUse =
    environment.platform === "darwin" || environment.platform === "win32"
      ? supported()
      : unsupported(
          "Computer use is not available on this platform",
          "unsupported_platform",
        );
  const coworkWatchRecord =
    environment.platform === "darwin"
      ? unavailable()
      : unsupported(
          "Watch-record is not available on this platform",
          "unsupported_platform",
        );
  const tearOffHalo =
    environment.platform !== "darwin"
      ? unsupported(
          "Tear-off halo overlay requires macOS",
          "unsupported_platform",
        )
      : environment.macOsMajor < 13
        ? unsupported(
            "Tear-off halo overlay requires macOS 13 or higher",
            "unsupported_os_version",
          )
        : supported();

  return addBetaMaturity({
    artifactsPane: unavailable(),
    nativeQuickEntry: nativeQuickEntry(),
    quickEntryDictation: quickEntryDictation(),
    quickEntryGlobalShortcut,
    customQuickEntryDictationShortcut: supported(),
    plushRaccoon: prototypeFeature(environment, supported),
    quietPenguin: prototypeFeature(environment, () =>
      environment.platform === "darwin" || environment.platform === "win32"
        ? supported()
        : unavailable(),
    ),
    louderPenguin: unavailable(),
    chillingSlothFeat: supported(),
    chillingSlothSshShell: supported(),
    chillingSlothEnterprise,
    chillingSlothLocal: supported(),
    chillingSlothPool: unavailable(),
    yukonSilver: cowork,
    yukonSilverGems: coworkDependent,
    yukonSilverGemsCache: coworkDependent,
    wakeScheduler: prototypeFeature(environment, () =>
      environment.platform !== "darwin"
        ? unavailable()
        : environment.macOsMajor < 13
          ? unsupported(
              "This feature requires macOS 13.0 or higher",
              "unsupported_os_version",
            )
          : unavailable(),
    ),
    desktopTopBar: supported(),
    ccdPlugins: supported(),
    computerUse,
    coworkWatchRecord,
    coworkKappa: coworkDependent,
    coworkArtifacts: coworkDependent,
    framebufferPreview: prototypeFeature(environment, unavailable),
    iosSimulator: prototypeFeature(environment, macPrototype),
    androidEmulator: prototypeFeature(environment, macPrototype),
    iosSimulatorH264: prototypeFeature(environment, macPrototype),
    grandPrix: unavailable(),
    tearOffHalo,
    coworkArtifactPopout: supported(),
    claudeDesignWindow: supported(),
    coworkRemoteSessionSpaces: supported(),
    spaceMemoryBridge: unavailable(),
    grandPrixRequest: unavailable(),
    coworkBranchSession: supported(),
    bootstrapConfig: supported(),
    chatIn3p: supported(),
    builtinMcpPresets: supported(),
    surfaceTogglesPreview: prototypeFeature(environment, supported),
    chatTab: environment.chatSurfaceEnabled ? supported() : unavailable(),
    chatCodeExecution:
      environment.chatAdvancedFileAnalysisEnabled && !environment.bashDisabled
        ? supported()
        : unavailable(),
    epitaxyMcpApps: unavailable(),
  });
}
