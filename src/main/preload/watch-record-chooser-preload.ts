// Restored from ref/.vite/build/watchRecordChooser.js

import { contextBridge, ipcRenderer } from "electron";

export interface WatchRecordChooserBridge {
  choose(choice: unknown): Promise<unknown>;
}

contextBridge.exposeInMainWorld("wrChooserApi", {
  choose: (choice: unknown) => ipcRenderer.invoke("wr-chooser-choose", choice),
} satisfies WatchRecordChooserBridge);
