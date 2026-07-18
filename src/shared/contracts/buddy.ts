// Restored from ref/.vite/build/buddy.js and ref/.vite/build/mainView.js

export const BUDDY_METHODS = [
  "status",
  "deviceStatus",
  "setName",
  "pairDevice",
  "scanDevices",
  "pickDevice",
  "cancelScan",
  "submitPin",
  "forgetDevice",
  "pickFolder",
  "preview",
  "install",
] as const;

export type BuddyMethod = (typeof BUDDY_METHODS)[number];

export const BUDDY_BLE_METHODS = ["rx", "reportState", "log"] as const;
export type BuddyBleMethod = (typeof BUDDY_BLE_METHODS)[number];
