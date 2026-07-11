// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// Normalization of Apple Event replies into typed Computer Use capture results.

import {
  readCaptureImageDataUrl,
  resolveCaptureImagePath,
} from "./image-utils";
import type {
  ComputerUseCaptureUpdate,
  ComputerUseStartCaptureResult,
} from "./types";

export function normalizeStartCaptureReply(
  rawReply: unknown,
): ComputerUseStartCaptureResult {
  if (!isRecord(rawReply)) {
    throw Error("Invalid Computer Use start-capture Apple Event reply");
  }

  const result = rawReply.result;
  if (result === "appshot_permissions_abandoned") {
    return {
      result,
      animationDuration: null,
      transitionSnapshotHeight: null,
      transitionSpringDampingFraction: null,
      transitionSpringResponse: null,
      permissionGrantState: isPermissionGrantState(rawReply.permissionGrantState)
        ? rawReply.permissionGrantState
        : null,
    };
  }
  if (result !== "started") {
    throw Error("Invalid Computer Use start-capture result");
  }

  return {
    result,
    animationDuration: numberOrNull(rawReply.animationDuration),
    transitionSnapshotHeight: positiveFiniteNumberOrNull(
      rawReply.transitionSnapshotHeight,
    ),
    transitionSpringDampingFraction: numberOrNull(
      rawReply.transitionSpringDampingFraction,
    ),
    transitionSpringResponse: numberOrNull(rawReply.transitionSpringResponse),
  };
}

export async function normalizeCaptureUpdateReply(
  rawReply: unknown,
): Promise<ComputerUseCaptureUpdate> {
  if (!isRecord(rawReply) || typeof rawReply.type !== "string") {
    throw Error("Invalid Computer Use capture update Apple Event reply");
  }

  switch (rawReply.type) {
    case "metadata":
      return {
        type: "metadata",
        app: {
          bundleIdentifier:
            isRecord(rawReply.app) &&
            typeof rawReply.app.bundleIdentifier === "string"
              ? rawReply.app.bundleIdentifier
              : "",
        },
      };
    case "axText":
      return {
        type: "axText",
        text: typeof rawReply.text === "string" ? rawReply.text : "",
      };
    case "screenshot": {
      const screenshotPath = await resolveCaptureImagePath(
        typeof rawReply.screenshotURL === "string"
          ? rawReply.screenshotURL
          : isRecord(rawReply.screenshot) &&
              typeof rawReply.screenshot.url === "string"
            ? rawReply.screenshot.url
            : null,
      );
      return {
        type: "screenshot",
        screenshotPath,
        screenshotDataURL:
          screenshotPath == null
            ? null
            : await readCaptureImageDataUrl(screenshotPath),
      };
    }
    case "completed": {
      const transitionSnapshotPath = await resolveCaptureImagePath(
        typeof rawReply.transitionSnapshotURL === "string"
          ? rawReply.transitionSnapshotURL
          : null,
      );
      return {
        type: "completed",
        transitionSnapshotPath,
        transitionSnapshotDataURL:
          transitionSnapshotPath == null
            ? null
            : await readCaptureImageDataUrl(transitionSnapshotPath),
      };
    }
    case "failed": {
      const failureReason =
        typeof rawReply.failureReason === "string" &&
        rawReply.failureReason.trim() !== ""
          ? rawReply.failureReason
          : "native_service_failed";
      return {
        type: "failed",
        failureReason,
      };
    }
    default:
      throw Error(
        `Unknown Computer Use capture update type '${rawReply.type}'`,
      );
  }
}

function numberOrNull(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function positiveFiniteNumberOrNull(value: unknown): number | null {
  const numericValue = numberOrNull(value);
  return numericValue == null || numericValue <= 0 ? null : numericValue;
}

function isPermissionGrantState(value: unknown): value is string {
  return (
    value === "none_granted" ||
    value === "accessibility_granted" ||
    value === "screen_recording_granted" ||
    value === "both_granted"
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
