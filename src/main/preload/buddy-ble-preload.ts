// Restored from ref/.vite/build/mainView.js
// Web Bluetooth transport hosted in the trusted Claude web preload.

import { contextBridge, ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const UART_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
const UART_WRITE = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";
const UART_NOTIFY = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";
const WRITE_CHUNK_BYTES = 180;

type BluetoothCharacteristic = EventTarget & {
  startNotifications(): Promise<void>;
  writeValueWithoutResponse(value: BufferSource): Promise<void>;
};

type BluetoothServer = {
  disconnect(): void;
  getPrimaryService(uuid: string): Promise<{
    getCharacteristic(uuid: string): Promise<BluetoothCharacteristic>;
  }>;
};

type BluetoothDevice = EventTarget & {
  name?: string;
  gatt: { connect(): Promise<BluetoothServer> };
};

type BluetoothNavigator = Navigator & {
  bluetooth?: {
    requestDevice(options: {
      acceptAllDevices: boolean;
      optionalServices: string[];
    }): Promise<BluetoothDevice>;
  };
};

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.buddy", "BuddyBleTransport", method);

export function installBuddyBlePreload(): void {
  let writeCharacteristic: BluetoothCharacteristic | null = null;
  let notifyCharacteristic: BluetoothCharacteristic | null = null;
  let server: BluetoothServer | null = null;
  let device: BluetoothDevice | null = null;
  let disconnected: (() => void) | null = null;
  let receiveBuffer = "";
  let decoder = new TextDecoder("utf-8");
  let writeQueue = Promise.resolve();
  const encoder = new TextEncoder();

  const reportState = (
    state: "ready" | "connected" | "disconnected",
    name?: string,
  ) => ipcRenderer.invoke(channel("reportState"), state, name);
  const log = (message: string) => ipcRenderer.invoke(channel("log"), message);

  const onNotification = (event: Event): void => {
    const value = (event.target as { value?: DataView }).value;
    if (!value) return;
    const bytes = new Uint8Array(
      value.buffer,
      value.byteOffset,
      value.byteLength,
    );
    receiveBuffer += decoder.decode(bytes, { stream: true });
    let newline = receiveBuffer.indexOf("\n");
    while (newline >= 0) {
      const line = receiveBuffer.slice(0, newline).replace(/\r$/, "");
      receiveBuffer = receiveBuffer.slice(newline + 1);
      if (line) void ipcRenderer.invoke(channel("rx"), line);
      newline = receiveBuffer.indexOf("\n");
    }
  };

  const clearConnection = (): void => {
    if (device && disconnected) {
      device.removeEventListener("gattserverdisconnected", disconnected);
    }
    notifyCharacteristic?.removeEventListener(
      "characteristicvaluechanged",
      onNotification,
    );
    server?.disconnect();
    writeCharacteristic = null;
    notifyCharacteristic = null;
    server = null;
    device = null;
    disconnected = null;
    receiveBuffer = "";
    decoder = new TextDecoder("utf-8");
  };

  const disconnect = (): void => {
    clearConnection();
    void reportState("disconnected");
  };

  const connect = async (selected: BluetoothDevice): Promise<void> => {
    clearConnection();
    device = selected;
    disconnected = () => {
      if (device === selected) {
        clearConnection();
        void reportState("disconnected");
      }
    };
    selected.addEventListener("gattserverdisconnected", disconnected);
    try {
      server = await selected.gatt.connect();
      const service = await server.getPrimaryService(UART_SERVICE);
      writeCharacteristic = await service.getCharacteristic(UART_WRITE);
      notifyCharacteristic = await service.getCharacteristic(UART_NOTIFY);
      try {
        await notifyCharacteristic.startNotifications();
      } catch (error) {
        void log(
          `startNotifications: ${errorMessage(error)}; retrying after pair`,
        );
        await new Promise((resolve) => setTimeout(resolve, 1_500));
        await notifyCharacteristic.startNotifications();
      }
      notifyCharacteristic.addEventListener(
        "characteristicvaluechanged",
        onNotification,
      );
      await reportState("connected", selected.name ?? "Nibblet");
    } catch (error) {
      clearConnection();
      throw error;
    }
  };

  const pair = async (): Promise<boolean> => {
    const bluetooth = (navigator as BluetoothNavigator).bluetooth;
    if (!bluetooth) {
      void log("Web Bluetooth not available");
      return false;
    }
    try {
      const selected = await bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [UART_SERVICE],
      });
      await connect(selected);
      return true;
    } catch (error) {
      void log(`pair failed: ${errorMessage(error)}`);
      return false;
    }
  };

  const writeLine = (line: string): void => {
    writeQueue = writeQueue
      .then(async () => {
        if (!writeCharacteristic) return;
        const bytes = encoder.encode(`${line}\n`);
        for (
          let offset = 0;
          offset < bytes.length;
          offset += WRITE_CHUNK_BYTES
        ) {
          await writeCharacteristic.writeValueWithoutResponse(
            bytes.slice(offset, offset + WRITE_CHUNK_BYTES),
          );
        }
      })
      .catch((error) => void log(`write failed: ${errorMessage(error)}`));
  };

  const txHandler = (_event: Electron.IpcRendererEvent, line: string): void =>
    writeLine(line);
  ipcRenderer.on(channel("tx"), txHandler);
  contextBridge.exposeInMainWorld("buddyBle", { pair, disconnect });
  void reportState("ready");
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
