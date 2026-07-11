// @ts-nocheck
// Restored from ref/.vite/build/src-CoIhwwHr.js
// Runtime app brand and build-flavor helpers.

export const RuntimeAppBrands = {
  Codex: "codex",
  ChatGPT: "chatgpt",
} as const;

export type RuntimeAppBrand =
  (typeof RuntimeAppBrands)[keyof typeof RuntimeAppBrands];

export type BuildFlavorValue =
  "dev" | "agent" | "nightly" | "internal-alpha" | "public-beta" | "prod";

export type WindowsStoreConfig = {
  storeProductId: string;
  storeUpdateManifestUrl: string;
};

export type WindowsUpdaterConfig =
  | {
      kind: "msix";
    }
  | ({
      kind: "store";
    } & WindowsStoreConfig);

export const BuildFlavors = {
  Dev: "dev" as const,
  Agent: "agent" as const,
  Nightly: "nightly" as const,
  InternalAlpha: "internal-alpha" as const,
  PublicBeta: "public-beta" as const,
  Prod: "prod" as const,
  values: [
    "dev",
    "agent",
    "nightly",
    "internal-alpha",
    "public-beta",
    "prod",
  ] as BuildFlavorValue[],
  help: "dev, agent, nightly, internal-alpha, public-beta, prod",
  isValid(value: unknown): value is BuildFlavorValue {
    return (
      typeof value === "string" &&
      this.values.includes(value as BuildFlavorValue)
    );
  },
  parse(value: string | undefined | null): BuildFlavorValue | null {
    const trimmed = value?.trim();
    return trimmed && this.isValid(trimmed) ? trimmed : null;
  },
  isInternal(value: string): boolean {
    return ["dev", "agent", "nightly", "internal-alpha"].includes(value);
  },
  allowDebugMenu(value: string): boolean {
    return this.isInternal(value);
  },
  supportsReactScan(value: string): boolean {
    return value === "dev" || value === "agent" || value === "nightly";
  },
  shouldIncludeSparkle(
    buildFlavor: BuildFlavorValue,
    platform: NodeJS.Platform,
    env: NodeJS.ProcessEnv = process.env,
  ): boolean {
    return shouldIncludePlatformUpdater(buildFlavor, platform, "darwin", env);
  },
  shouldIncludeWindowsUpdater(
    buildFlavor: BuildFlavorValue,
    platform: NodeJS.Platform,
    env: NodeJS.ProcessEnv = process.env,
  ): boolean {
    return (
      shouldIncludePlatformUpdater(buildFlavor, platform, "win32", env) &&
      windowsUpdaterConfigForFlavor(buildFlavor) != null
    );
  },
  shouldIncludeWindowsMsixUpdater(
    buildFlavor: BuildFlavorValue,
    platform: NodeJS.Platform,
    env: NodeJS.ProcessEnv = process.env,
  ): boolean {
    return (
      shouldIncludePlatformUpdater(buildFlavor, platform, "win32", env) &&
      windowsUpdaterConfigForFlavor(buildFlavor)?.kind === "msix"
    );
  },
  shouldIncludeBrowserUsePeerAuthorization(
    buildFlavor: BuildFlavorValue,
    platform: NodeJS.Platform,
  ): boolean {
    return platform === "darwin" && releaseBuildFlavors.includes(buildFlavor);
  },
  shouldIncludeUpdater(
    buildFlavor: BuildFlavorValue,
    platform: NodeJS.Platform,
    env: NodeJS.ProcessEnv = process.env,
  ): boolean {
    return (
      this.shouldIncludeSparkle(buildFlavor, platform, env) ||
      this.shouldIncludeWindowsUpdater(buildFlavor, platform, env)
    );
  },
  getWindowsStoreConfig(
    buildFlavor: BuildFlavorValue,
  ): WindowsStoreConfig | null {
    const config = windowsUpdaterConfigForFlavor(buildFlavor);
    return config?.kind === "store"
      ? {
          storeProductId: config.storeProductId,
          storeUpdateManifestUrl: config.storeUpdateManifestUrl,
        }
      : null;
  },
  allowDevtools(buildFlavor: BuildFlavorValue): boolean {
    return this.isInternal(buildFlavor);
  },
};

// Compatibility alias for code that expects the singular `BuildFlavor` export.
export { BuildFlavors as BuildFlavor };

const releaseBuildFlavors: BuildFlavorValue[] = [
  BuildFlavors.Nightly,
  BuildFlavors.InternalAlpha,
  BuildFlavors.PublicBeta,
  BuildFlavors.Prod,
];

const windowsUpdaterByFlavor: Partial<
  Record<BuildFlavorValue, WindowsUpdaterConfig>
> = {
  [BuildFlavors.Nightly]: {
    kind: "msix",
  },
  [BuildFlavors.InternalAlpha]: {
    kind: "msix",
  },
  [BuildFlavors.PublicBeta]: {
    kind: "store",
    storeProductId: "9N8CJ4W95TBZ",
    storeUpdateManifestUrl:
      "https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json",
  },
  [BuildFlavors.Prod]: {
    kind: "store",
    storeProductId: "9PLM9XGG6VKS",
    storeUpdateManifestUrl:
      "https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json",
  },
};

function isSparkleDisabled(env: NodeJS.ProcessEnv): boolean {
  return env.CODEX_SPARKLE_ENABLED === "false";
}

function shouldIncludePlatformUpdater(
  buildFlavor: BuildFlavorValue,
  platform: NodeJS.Platform,
  targetPlatform: NodeJS.Platform,
  env: NodeJS.ProcessEnv,
): boolean {
  return (
    !isSparkleDisabled(env) &&
    releaseBuildFlavors.includes(buildFlavor) &&
    platform === targetPlatform
  );
}

function windowsUpdaterConfigForFlavor(
  buildFlavor: BuildFlavorValue,
): WindowsUpdaterConfig | null {
  return windowsUpdaterByFlavor[buildFlavor] ?? null;
}

export function getRuntimeAppBrandDisplayName(
  brand: unknown,
): string | undefined {
  switch (brand) {
    case RuntimeAppBrands.Codex:
      return "Codex";
    case RuntimeAppBrands.ChatGPT:
      return "ChatGPT";
    default:
      return undefined;
  }
}

export function parseRuntimeAppBrand(
  value: string | undefined,
): RuntimeAppBrand | null {
  const trimmed = value?.trim();
  return trimmed === RuntimeAppBrands.Codex ||
    trimmed === RuntimeAppBrands.ChatGPT
    ? trimmed
    : null;
}

function buildFlavorSuffix(buildFlavor: string): string | null {
  switch (buildFlavor) {
    case BuildFlavors.Dev:
      return "Dev";
    case BuildFlavors.Agent:
      return "Agent";
    case BuildFlavors.Nightly:
      return "Nightly";
    case BuildFlavors.InternalAlpha:
      return "Alpha";
    case BuildFlavors.PublicBeta:
      return "Beta";
    case BuildFlavors.Prod:
      return null;
    default:
      return null;
  }
}

export function formatRuntimeAppName(
  buildFlavor: string,
  brand: RuntimeAppBrand = RuntimeAppBrands.Codex,
): string {
  const suffix = buildFlavorSuffix(buildFlavor);
  const displayName = getRuntimeAppBrandDisplayName(brand) ?? "Codex";
  return suffix == null ? displayName : `${displayName} (${suffix})`;
}
