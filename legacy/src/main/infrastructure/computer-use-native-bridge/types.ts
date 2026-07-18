// Restored from ref/.vite/build/worker.js
// Shared type definitions for the macOS Apple Event Computer Use capture bridge.

export type ComputerUseStartCaptureResult =
  | {
      animationDuration: null;
      permissionGrantState: string | null;
      result: "appshot_permissions_abandoned";
      transitionSnapshotHeight: null;
      transitionSpringDampingFraction: null;
      transitionSpringResponse: null;
    }
  | {
      animationDuration: number | null;
      result: "started";
      transitionSnapshotHeight: number | null;
      transitionSpringDampingFraction: number | null;
      transitionSpringResponse: number | null;
    };

export type ComputerUseCaptureUpdate =
  | { type: "metadata"; app: { bundleIdentifier: string } }
  | { type: "axText"; text: string }
  | {
      type: "screenshot";
      screenshotPath: string | null;
      screenshotDataURL: string | null;
    }
  | {
      type: "completed";
      transitionSnapshotPath: string | null;
      transitionSnapshotDataURL: string | null;
    }
  | { type: "failed"; failureReason: string };

export type AppleEventRuntime = {
  AECreateAppleEvent(
    eventClass: number,
    eventId: number,
    target: Buffer,
    returnId: number,
    transactionId: number,
    event: Buffer,
  ): number;
  AECreateDesc(
    descriptorType: number,
    data: Buffer,
    dataLength: number,
    target: Buffer,
  ): number;
  AEDisposeDesc(descriptor: Buffer): number;
  AEGetParamPtr(
    event: Buffer,
    keyword: number,
    desiredType: number,
    actualType: Buffer,
    data: Buffer,
    maxSize: number,
    actualSize: Buffer,
  ): number;
  AEPutParamPtr(
    event: Buffer,
    keyword: number,
    typeCode: number,
    data: Buffer,
    dataLength: number,
  ): number;
  AESendMessage(
    event: Buffer,
    reply: Buffer,
    sendMode: number,
    timeout: number,
  ): number;
};
