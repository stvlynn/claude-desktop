// @ts-nocheck
// Restored from ref/.vite/build/trace-recording-upload-DPG3eKCS.js
// Compresses a content trace recording, attaches metadata and a desktop log
// archive, then uploads it through the provided feedback callback.

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { promisify } from "node:util";
import * as zlib from "node:zlib";
import {
  createFeedbackDesktopLogArchive,
  removeFeedbackDesktopLogArchive,
} from "./desktop-log-archive";
import { createLazyScopedStructuredLogger } from "./structured-logger";

type TraceCorrelation = {
  conversationId?: string | null;
  hostId?: string | null;
  windowId?: string | number | null;
};

type RuntimeHealth = {
  gpuVendor?: string | null;
  gpuRenderer?: string | null;
  hardwareAccelerationEnabled?: boolean;
};

export type UploadFeedbackRequest = {
  classification: "trace-recording";
  reason: string;
  threadId: string | null;
  includeLogs: boolean;
  extraLogFiles: string[];
  tags: Record<string, string | undefined>;
};

export type UploadTraceRecordingOptions = {
  tracePath: string;
  buildFlavor: string;
  buildNumber?: string | null;
  appVersion: string;
  traceRecordingNote?: string | null;
  recordingDurationMs?: number | null;
  correlation?: TraceCorrelation | null;
  runtimeHealth?: RuntimeHealth | null;
  uploadFeedback(request: UploadFeedbackRequest): Promise<{
    threadId: string;
  }>;
};

const DEFAULT_TRACE_REASON = "Desktop content trace recording";
const gzip = promisify(zlib.gzip);
const logger = createLazyScopedStructuredLogger("content-tracing");

export async function uploadTraceRecording({
  tracePath,
  buildFlavor,
  buildNumber,
  appVersion,
  traceRecordingNote,
  recordingDurationMs,
  correlation,
  runtimeHealth,
  uploadFeedback,
}: UploadTraceRecordingOptions): Promise<string> {
  const gzipPath = `${tracePath}.gz`;
  const metadataPath = `${tracePath}.metadata.json`;
  const note = traceRecordingNote?.trim() || null;
  let logArchiveId: string | null = null;
  try {
    const traceBytes = await fs.readFile(tracePath);
    const gzippedTrace = await gzip(traceBytes);
    await Promise.all([
      fs.writeFile(gzipPath, gzippedTrace),
      fs.writeFile(
        metadataPath,
        JSON.stringify(
          {
            classification: "trace-recording",
            description: note,
            recordingDurationMs: recordingDurationMs ?? null,
            correlation: correlation ?? null,
            runtimeHealth: runtimeHealth ?? null,
            trace: {
              filename: path.basename(tracePath),
              sizeBytes: traceBytes.byteLength,
              gzipSizeBytes: gzippedTrace.byteLength,
            },
          },
          null,
          2,
        ),
      ),
    ]);
    const logArchive = await createFeedbackDesktopLogArchive();
    logArchiveId = logArchive?.archiveId ?? null;
    const uploadResult = await uploadFeedback({
      classification: "trace-recording",
      reason: note ?? DEFAULT_TRACE_REASON,
      threadId: correlation?.conversationId ?? null,
      includeLogs: true,
      extraLogFiles: [
        gzipPath,
        metadataPath,
        ...(logArchive == null ? [] : [logArchive.archivePath]),
      ],
      tags: {
        app_version: appVersion,
        app_build: buildNumber ?? undefined,
        buildFlavor,
        trace_recording: "content-trace",
        trace_filename: path.basename(gzipPath),
        platform: process.platform,
        recording_duration_ms:
          recordingDurationMs == null ? undefined : String(recordingDurationMs),
        host_id: correlation?.hostId ?? undefined,
        window_id:
          correlation?.windowId == null
            ? undefined
            : String(correlation.windowId),
        gpu_vendor: runtimeHealth?.gpuVendor ?? undefined,
        gpu_renderer: runtimeHealth?.gpuRenderer ?? undefined,
        hardware_acceleration:
          runtimeHealth == null
            ? undefined
            : runtimeHealth.hardwareAccelerationEnabled
              ? "enabled"
              : "disabled",
      },
    });
    return uploadResult.threadId;
  } finally {
    await Promise.all([
      removeTemporaryFile(gzipPath),
      removeTemporaryFile(metadataPath),
      ...(logArchiveId == null
        ? []
        : [removeFeedbackDesktopLogArchive(logArchiveId)]),
    ]);
  }
}

async function removeTemporaryFile(filePath: string): Promise<void> {
  try {
    await fs.rm(filePath, {
      force: true,
    });
  } catch (error) {
    logger().warning("Failed to remove temporary trace upload file.", {
      safe: {},
      sensitive: {
        error,
        path: filePath,
      },
    });
  }
}
