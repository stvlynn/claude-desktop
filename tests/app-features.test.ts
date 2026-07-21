import { describe, expect, test } from "bun:test";
import {
  APP_FEATURE_NAMES,
  evaluateSupportedAppFeatures,
  type AppFeatureEnvironment,
} from "../src/main/domain/app-features";

function baseEnvironment(
  overrides: Partial<AppFeatureEnvironment> = {},
): AppFeatureEnvironment {
  return {
    platform: "darwin",
    arch: "arm64",
    macOsMajor: 14,
    isPackaged: true,
    isWindowsStore: false,
    microphoneRestricted: false,
    waylandGlobalShortcutsPortalAvailable: true,
    codeSurfaceEnabled: true,
    coworkSurfaceEnabled: true,
    chatSurfaceEnabled: false,
    chatAdvancedFileAnalysisEnabled: false,
    bashDisabled: false,
    secureVmEnabledByEnterprise: true,
    secureVmEnabledByUser: true,
    ...overrides,
  };
}

describe("evaluateSupportedAppFeatures", () => {
  test("returns an entry for every known app feature name", () => {
    const features = evaluateSupportedAppFeatures(baseEnvironment());
    for (const name of APP_FEATURE_NAMES) {
      expect(features[name]).toBeDefined();
      expect(["supported", "unsupported", "unavailable"]).toContain(
        features[name]!.status,
      );
    }
  });

  test("marks native quick entry unavailable off macOS", () => {
    const features = evaluateSupportedAppFeatures(
      baseEnvironment({ platform: "linux", macOsMajor: 0 }),
    );
    expect(features.nativeQuickEntry).toEqual({ status: "unavailable" });
  });

  test("disables cowork when enterprise secureVm is off", () => {
    const features = evaluateSupportedAppFeatures(
      baseEnvironment({ secureVmEnabledByEnterprise: false }),
    );
    expect(features.yukonSilver?.status).toBe("unsupported");
    if (features.yukonSilver?.status === "unsupported") {
      expect(features.yukonSilver.unsupportedCode).toBe(
        "disabled_by_enterprise",
      );
    }
    expect(features.coworkArtifacts?.status).toBe("unsupported");
    expect(features.yukonSilverGems?.status).toBe("unsupported");
  });

  test("disables cowork when user secureVm preference is off", () => {
    const features = evaluateSupportedAppFeatures(
      baseEnvironment({ secureVmEnabledByUser: false }),
    );
    expect(features.yukonSilver?.status).toBe("unsupported");
    if (features.yukonSilver?.status === "unsupported") {
      expect(features.yukonSilver.unsupportedCode).toBe("disabled_by_user");
    }
  });

  test("requires Windows Store build for cowork on win32", () => {
    const features = evaluateSupportedAppFeatures(
      baseEnvironment({
        platform: "win32",
        arch: "x64",
        macOsMajor: 0,
        windowsBuild: 19045,
        isWindowsStore: false,
      }),
    );
    expect(features.yukonSilver?.status).toBe("unsupported");
    if (features.yukonSilver?.status === "unsupported") {
      expect(features.yukonSilver.unsupportedCode).toBe("msix_required");
    }
  });

  test("gates chatCodeExecution on advanced file analysis and bash", () => {
    const blocked = evaluateSupportedAppFeatures(
      baseEnvironment({
        chatAdvancedFileAnalysisEnabled: true,
        bashDisabled: true,
      }),
    );
    expect(blocked.chatCodeExecution).toEqual({ status: "unavailable" });

    const enabled = evaluateSupportedAppFeatures(
      baseEnvironment({
        chatAdvancedFileAnalysisEnabled: true,
        bashDisabled: false,
      }),
    );
    expect(enabled.chatCodeExecution?.status).toBe("supported");
    if (enabled.chatCodeExecution?.status === "supported") {
      expect(enabled.chatCodeExecution.maturity).toBe("beta");
    }
  });

  test("hides prototype features when packaged", () => {
    const packaged = evaluateSupportedAppFeatures(
      baseEnvironment({ isPackaged: true }),
    );
    expect(packaged.plushRaccoon).toEqual({ status: "unavailable" });
    expect(packaged.iosSimulator).toEqual({ status: "unavailable" });

    const unpackaged = evaluateSupportedAppFeatures(
      baseEnvironment({ isPackaged: false }),
    );
    expect(unpackaged.plushRaccoon).toEqual({ status: "supported" });
    expect(unpackaged.iosSimulator).toEqual({ status: "supported" });
  });
});
