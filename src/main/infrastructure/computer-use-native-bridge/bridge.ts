// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// Public entry points for starting and polling the macOS Computer Use capture.

import type {
  AppleEventRuntime,
  ComputerUseCaptureUpdate,
  ComputerUseStartCaptureResult,
} from "./types";
import {
  assertAppleEventStatus,
  createAppleEventDescriptorBuffer,
  createKernelProcessDescriptor,
  fourCharCode,
  formatAppleEventStatus,
  getAppleEventParamPtr,
  getAppleEventRuntime,
  putAppleEventDataParam,
  putAppleEventUtf8Param,
} from "./apple-event-runtime";
import {
  normalizeCaptureUpdateReply,
  normalizeStartCaptureReply,
} from "./reply-parsers";

type ComputerUseStartCaptureRequest = {
  animationTarget?: unknown;
  app?: unknown;
  permissionRequestId?: unknown;
  requestId: string;
  serviceProcessIdentifier: number;
};

type ComputerUseCaptureUpdateRequest = {
  requestId: string;
  serviceProcessIdentifier: number;
};

const REQUEST_TYPES = {
  getNextCaptureUpdate: "ComputerUseIPCAppNextCaptureUpdateRequest",
  startCapture: "ComputerUseIPCAppStartCaptureRequest",
} as const;

const APPLE_EVENT_RETRY_DELAYS_MS = [50, 100, 200, 400, 800] as const;
const RETRYABLE_APPLE_EVENT_ERROR_PATTERN =
  /^AESendMessage failed with -(?:600|609|1708|1717) \(/;

const CLIENT_API_VERSION = "CodexComputerUseNativeBridge-1";

const APPLE_EVENT_CODES = {
  eventClass: fourCharCode("SkCu"),
  eventId: fourCharCode("SndR"),
  requestType: fourCharCode("RspT"),
  requestData: fourCharCode("ReqD"),
  clientApiVersion: fourCharCode("ClVn"),
  directObject: fourCharCode("----"),
  errorNumber: fourCharCode("errn"),
  errorString: fourCharCode("errs"),
  data: fourCharCode("tdta"),
  utf8Text: fourCharCode("utf8"),
  kernelProcessId: fourCharCode("kpid"),
  sint32: fourCharCode("long"),
} as const;

export async function startComputerUseCaptureNativeBridge({
  animationTarget,
  app,
  permissionRequestId,
  requestId,
  serviceProcessIdentifier,
}: ComputerUseStartCaptureRequest): Promise<ComputerUseStartCaptureResult> {
  const rawReply = await sendComputerUseCaptureRequestWithRetry({
    request: {
      animationTarget,
      app,
      permissionRequestId,
      requestId,
    },
    requestType: REQUEST_TYPES.startCapture,
    serviceProcessIdentifier,
    timeoutSeconds: 115,
  });
  return normalizeStartCaptureReply(rawReply);
}

export async function getNextComputerUseCaptureUpdate({
  requestId,
  serviceProcessIdentifier,
}: ComputerUseCaptureUpdateRequest): Promise<ComputerUseCaptureUpdate> {
  const rawReply = await sendComputerUseCaptureRequestWithRetry({
    request: { requestId },
    requestType: REQUEST_TYPES.getNextCaptureUpdate,
    serviceProcessIdentifier,
    timeoutSeconds: 125,
  });
  return normalizeCaptureUpdateReply(rawReply);
}

async function sendComputerUseCaptureRequestWithRetry({
  request,
  requestType,
  serviceProcessIdentifier,
  timeoutSeconds,
}: {
  request: unknown;
  requestType: string;
  serviceProcessIdentifier: number;
  timeoutSeconds: number;
}): Promise<unknown> {
  for (
    let attempt = 0;
    attempt <= APPLE_EVENT_RETRY_DELAYS_MS.length;
    attempt += 1
  ) {
    try {
      return await sendComputerUseCaptureAppleEvent({
        request,
        requestType,
        runtime: await getAppleEventRuntime(),
        serviceProcessIdentifier,
        timeoutSeconds,
      });
    } catch (error) {
      const retryDelayMs = APPLE_EVENT_RETRY_DELAYS_MS[attempt];
      if (
        retryDelayMs == null ||
        !(error instanceof Error) ||
        !RETRYABLE_APPLE_EVENT_ERROR_PATTERN.test(error.message)
      ) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }
  throw Error("Computer Use capture Apple Event retry loop exhausted");
}

async function sendComputerUseCaptureAppleEvent({
  request,
  requestType,
  runtime,
  serviceProcessIdentifier,
  timeoutSeconds,
}: {
  request: unknown;
  requestType: string;
  runtime: AppleEventRuntime;
  serviceProcessIdentifier: number;
  timeoutSeconds: number;
}): Promise<unknown> {
  if (process.platform !== "darwin") {
    throw Error("Codex Computer Use native bridge is only available on macOS");
  }

  const targetDescriptor = createAppleEventDescriptorBuffer();
  const eventDescriptor = createAppleEventDescriptorBuffer();
  const replyDescriptor = createAppleEventDescriptorBuffer();
  const descriptorsToDispose: Buffer[] = [];

  try {
    createKernelProcessDescriptor({
      descriptorType: APPLE_EVENT_CODES.kernelProcessId,
      pid: serviceProcessIdentifier,
      runtime,
      target: targetDescriptor,
    });
    descriptorsToDispose.push(targetDescriptor);

    assertAppleEventStatus(
      runtime.AECreateAppleEvent(
        APPLE_EVENT_CODES.eventClass,
        APPLE_EVENT_CODES.eventId,
        targetDescriptor,
        -1,
        0,
        eventDescriptor,
      ),
      "AECreateAppleEvent",
    );
    descriptorsToDispose.push(eventDescriptor);

    putAppleEventUtf8Param({
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.requestType,
      runtime,
      typeCode: APPLE_EVENT_CODES.utf8Text,
      value: requestType,
    });
    putAppleEventUtf8Param({
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.clientApiVersion,
      runtime,
      typeCode: APPLE_EVENT_CODES.utf8Text,
      value: CLIENT_API_VERSION,
    });
    putAppleEventDataParam({
      data: Buffer.from(
        JSON.stringify(stripUndefinedProperties(request)),
        "utf8",
      ),
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.requestData,
      runtime,
      typeCode: APPLE_EVENT_CODES.data,
    });

    assertAppleEventStatus(
      runtime.AESendMessage(
        eventDescriptor,
        replyDescriptor,
        3,
        Math.ceil(timeoutSeconds * 60),
      ),
      "AESendMessage",
    );
    descriptorsToDispose.push(replyDescriptor);

    return parseAppleEventReply(runtime, replyDescriptor);
  } finally {
    for (const descriptor of descriptorsToDispose.reverse()) {
      runtime.AEDisposeDesc(descriptor);
    }
  }
}

function parseAppleEventReply(
  runtime: AppleEventRuntime,
  replyDescriptor: Buffer,
): unknown {
  const errorNumber = getAppleEventParamPtr({
    desiredType: APPLE_EVENT_CODES.sint32,
    event: replyDescriptor,
    keyword: APPLE_EVENT_CODES.errorNumber,
    maxSize: 4,
    runtime,
  });
  if (errorNumber.status === 0) {
    const errorString = getAppleEventParamPtr({
      desiredType: APPLE_EVENT_CODES.utf8Text,
      event: replyDescriptor,
      keyword: APPLE_EVENT_CODES.errorString,
      maxSize: 1024 * 1024,
      runtime,
    });
    const message =
      errorString.status === 0
        ? errorString.data.toString("utf8")
        : "Unknown error";
    throw Error(
      `Codex Computer Use Apple Event error ${errorNumber.data.readInt32LE(0)}: ${message}`,
    );
  }

  const responseData = getAppleEventParamPtr({
    desiredType: APPLE_EVENT_CODES.data,
    event: replyDescriptor,
    keyword: APPLE_EVENT_CODES.directObject,
    maxSize: 1024 * 1024,
    runtime,
  });
  if (responseData.status !== 0) {
    throw Error(
      `Codex Computer Use Apple Event reply did not include response data (${formatAppleEventStatus(responseData.status)})`,
    );
  }
  return JSON.parse(responseData.data.toString("utf8"));
}

function stripUndefinedProperties(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripUndefinedProperties);
  if (!isRecord(value)) return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, propertyValue]) => propertyValue !== undefined)
      .map(([key, propertyValue]) => [
        key,
        stripUndefinedProperties(propertyValue),
      ]),
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
