// Restored from ref/.vite/build/computerUseTeach.js

import { contextBridge, ipcRenderer } from "electron";

export interface ComputerUseTeachBridge {
  onShow(listener: (payload: unknown) => void): void;
  onWorking(listener: () => void): void;
  onHide(listener: () => void): void;
  next(): Promise<unknown>;
  exit(): Promise<unknown>;
  mouseEnter(): void;
  mouseLeave(): void;
  onReassertHover(listener: () => void): void;
}

const bridge: ComputerUseTeachBridge = {
  onShow: (listener) => {
    ipcRenderer.on("cu-teach:show", (_event, payload) => listener(payload));
  },
  onWorking: (listener) => {
    ipcRenderer.on("cu-teach:working", listener);
  },
  onHide: (listener) => {
    ipcRenderer.on("cu-teach:hide", listener);
  },
  next: () => ipcRenderer.invoke("cu-teach:next"),
  exit: () => ipcRenderer.invoke("cu-teach:exit"),
  mouseEnter: () => ipcRenderer.send("cu-teach:mouse-enter"),
  mouseLeave: () => ipcRenderer.send("cu-teach:mouse-leave"),
  onReassertHover: (listener) => {
    ipcRenderer.on("cu-teach:reassert-hover", listener);
  },
};

contextBridge.exposeInMainWorld("cuTeach", bridge);
