// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// macOS Apple Event runtime binding via objc-js / Foundation / AppKit.

import type { AppleEventRuntime } from "./types";

type ObjcJsModule = {
  callFunction(
    name: string,
    signature: { returns: string; args: readonly string[] },
    ...args: unknown[]
  ): unknown;
  fromPointer: unknown;
  NobjcLibrary: new (path: string) => Record<string, unknown>;
};

let appleEventRuntimePromise: Promise<AppleEventRuntime> | null = null;

export function getAppleEventRuntime(): Promise<AppleEventRuntime> {
  appleEventRuntimePromise ??= loadAppleEventRuntime();
  return appleEventRuntimePromise;
}

async function loadAppleEventRuntime(): Promise<AppleEventRuntime> {
  const { callFunction, fromPointer, NobjcLibrary } = (await import(
    "objc-js"
  )) as unknown as ObjcJsModule;
  const foundation = new NobjcLibrary(
    "/System/Library/Frameworks/Foundation.framework/Foundation",
  );
  const appKit = new NobjcLibrary(
    "/System/Library/Frameworks/AppKit.framework/AppKit",
  );
  const bridge = {
    callFunction,
    fromPointer,
    ObjC: {
      NSBundle: requireObjcClass(foundation, "NSBundle"),
      NSDictionary: requireObjcClass(foundation, "NSDictionary"),
      NSString: requireObjcClass(foundation, "NSString"),
      NSURL: requireObjcClass(foundation, "NSURL"),
      NSRunningApplication: requireObjcClass(appKit, "NSRunningApplication"),
      NSWorkspace: requireObjcClass(appKit, "NSWorkspace"),
    },
  };

  return {
    AECreateDesc: bindAppleEventFunction(bridge, "AECreateDesc", [
      "I",
      "^v",
      "Q",
      "^v",
    ]),
    AEDisposeDesc: bindAppleEventFunction(bridge, "AEDisposeDesc", ["^v"]),
    AECreateAppleEvent: bindAppleEventFunction(bridge, "AECreateAppleEvent", [
      "I",
      "I",
      "^v",
      "s",
      "i",
      "^v",
    ]),
    AEPutParamPtr: bindAppleEventFunction(bridge, "AEPutParamPtr", [
      "^v",
      "I",
      "I",
      "^v",
      "Q",
    ]),
    AESendMessage: bindAppleEventFunction(bridge, "AESendMessage", [
      "^v",
      "^v",
      "I",
      "i",
    ]),
    AEGetParamPtr: bindAppleEventFunction(bridge, "AEGetParamPtr", [
      "^v",
      "I",
      "I",
      "^I",
      "^v",
      "Q",
      "^Q",
    ]),
  };
}

function bindAppleEventFunction(
  bridge: Pick<ObjcJsModule, "callFunction">,
  name: string,
  args: readonly string[],
): (...args: unknown[]) => number {
  return (...functionArgs) =>
    Number(
      bridge.callFunction(
        name,
        {
          returns: "i",
          args,
        },
        ...functionArgs,
      ),
    );
}

export function createKernelProcessDescriptor({
  descriptorType,
  pid,
  runtime,
  target,
}: {
  descriptorType: number;
  pid: number;
  runtime: AppleEventRuntime;
  target: Buffer;
}): void {
  const processIdentifier = Buffer.alloc(4);
  processIdentifier.writeInt32LE(pid, 0);
  assertAppleEventStatus(
    runtime.AECreateDesc(
      descriptorType,
      processIdentifier,
      processIdentifier.length,
      target,
    ),
    "AECreateDesc(kpid)",
  );
}

export function putAppleEventUtf8Param({
  event,
  keyword,
  runtime,
  typeCode,
  value,
}: {
  event: Buffer;
  keyword: number;
  runtime: AppleEventRuntime;
  typeCode: number;
  value: string;
}): void {
  putAppleEventDataParam({
    data: Buffer.from(value, "utf8"),
    event,
    keyword,
    runtime,
    typeCode,
  });
}

export function putAppleEventDataParam({
  data,
  event,
  keyword,
  runtime,
  typeCode,
}: {
  data: Buffer;
  event: Buffer;
  keyword: number;
  runtime: AppleEventRuntime;
  typeCode: number;
}): void {
  assertAppleEventStatus(
    runtime.AEPutParamPtr(event, keyword, typeCode, data, data.length),
    `AEPutParamPtr(${fourCharString(keyword)})`,
  );
}

export function getAppleEventParamPtr({
  desiredType,
  event,
  keyword,
  maxSize,
  runtime,
}: {
  desiredType: number;
  event: Buffer;
  keyword: number;
  maxSize: number;
  runtime: AppleEventRuntime;
}): { data: Buffer; status: number } {
  const actualType = Buffer.alloc(4);
  const actualSize = Buffer.alloc(8);
  const data = Buffer.alloc(maxSize);
  const status = runtime.AEGetParamPtr(
    event,
    keyword,
    desiredType,
    actualType,
    data,
    data.length,
    actualSize,
  );
  return {
    data: data.subarray(0, Number(actualSize.readBigUInt64LE(0))),
    status,
  };
}

export function assertAppleEventStatus(
  status: number,
  operation: string,
): void {
  if (status !== 0) {
    throw Error(`${operation} failed with ${formatAppleEventStatus(status)}`);
  }
}

export function formatAppleEventStatus(status: number): string {
  return status === 0 ? "0" : `${status} (${fourCharString(status)})`;
}

export function fourCharCode(value: string): number {
  if (value.length !== 4) {
    throw TypeError("fourCharCode requires a four-character string");
  }
  return (
    value.charCodeAt(0) * 16_777_216 +
    value.charCodeAt(1) * 65_536 +
    value.charCodeAt(2) * 256 +
    value.charCodeAt(3)
  );
}

export function fourCharString(value: number): string {
  const unsigned = ((value % 4_294_967_296) + 4_294_967_296) % 4_294_967_296;
  return String.fromCharCode(
    Math.floor(unsigned / 16_777_216) % 256,
    Math.floor(unsigned / 65_536) % 256,
    Math.floor(unsigned / 256) % 256,
    unsigned % 256,
  );
}

export function createAppleEventDescriptorBuffer(): Buffer {
  return Buffer.alloc(16);
}

function requireObjcClass(
  library: Record<string, unknown>,
  className: string,
): unknown {
  const objcClass = library[className];
  if (objcClass == null) {
    throw Error(`Objective-C class not found: ${className}`);
  }
  return objcClass;
}
