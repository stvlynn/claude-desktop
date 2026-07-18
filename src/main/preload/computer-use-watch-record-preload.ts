// Restored from ref/.vite/build/computerUseWatchRecord.js

import { contextBridge, ipcRenderer } from "electron";

export interface ComputerUseWatchRecordBridge {
  onStepCount(listener: (stepCount: number) => void): void;
  done(): Promise<unknown>;
  discard(): Promise<unknown>;
}

const bridge: ComputerUseWatchRecordBridge = {
  onStepCount: (listener) => {
    ipcRenderer.on("cu-watch-record:stepCount", (_event, count: number) =>
      listener(count),
    );
  },
  done: () => ipcRenderer.invoke("cu-watch-record:done"),
  discard: () => ipcRenderer.invoke("cu-watch-record:discard"),
};

contextBridge.exposeInMainWorld("cuWatchRecord", bridge);
