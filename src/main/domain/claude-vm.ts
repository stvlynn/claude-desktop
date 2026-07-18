// Restored from ref/.vite/build/index.js

export const CLAUDE_VM_BUNDLE_VERSION =
  "6d1538ba6fecc4e5c5583993c4b30bb1875f0f5a";

export type ClaudeVmDownloadStatus = "not_downloaded" | "downloading" | "ready";
export type ClaudeVmRunningStatus = "offline" | "booting" | "ready";
export type ClaudeVmReachability =
  "unknown" | "reachable" | "probably_unreachable" | "unreachable";

export interface ClaudeVmBundleFile {
  name: string;
  checksum: string;
  progressStart: number;
  progressEnd: number;
}

export const CLAUDE_VM_BUNDLE_FILES: Readonly<
  Record<"arm64" | "x64", readonly ClaudeVmBundleFile[]>
> = {
  arm64: [
    {
      name: "rootfs.img",
      checksum:
        "f40e54e816c94625497b37e477a1d70fcdf980f1f0acc166b666a214083e1e00",
      progressStart: 0,
      progressEnd: 100,
    },
  ],
  x64: [
    {
      name: "rootfs.img",
      checksum:
        "bc64e0dbc039c30ce986ad3edd2d0cb38d57d78450be72b3a5d4e747c54bf482",
      progressStart: 0,
      progressEnd: 100,
    },
  ],
};

export interface ClaudeVmStartOptions {
  memoryGB?: number;
}

export interface YukonSilverConfig {
  autoDownloadInBackground: boolean;
  autoStartOnUserIntent: boolean;
  memoryGB: number;
  [key: string]: unknown;
}

export interface ClaudeVmApiReachabilityState {
  reachability: ClaudeVmReachability;
  willTryRecover: boolean;
  probeTarget?: string;
}
