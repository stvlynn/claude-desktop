// Restored from ref/.vite/build/main--VWTbRdF.js
// Main Electron startup entry point. The checkpoint now exposes the original
// startup order, but the service constructors it calls still require semantic
// restoration before this entry point can be made runnable.

type MainStartupPhase = {
  key: string;
  sourceLines: string;
  responsibilities: readonly string[];
};

const OPEN_RESTORATION_BOUNDARY_CODE = "OPEN_RESTORATION_BOUNDARY";
const DISABLED_CHRONICLE_SIDECAR_CONTROL_STATE = {
  enabled: false,
  running: false,
  state: "disabled",
} as const;

const MAIN_STARTUP_PHASES: readonly MainStartupPhase[] = [
  {
    key: "bootstrap-handoff",
    sourceLines: "109760-109866",
    responsibilities: [
      "read desktop bootstrap handoff",
      "derive build flags and updater/sparkle availability",
      "create desktop error reporter and Datadog log sink",
      "create startup tracer and root disposable set",
    ],
  },
  {
    key: "electron-ready-and-protocols",
    sourceLines: "109867-109898",
    responsibilities: [
      "wait for Electron app readiness",
      "load React devtools in development",
      "register the app:// protocol handler",
      "hydrate the shell environment",
      "create desktop runtime paths and configure feature defaults",
    ],
  },
  {
    key: "window-services-and-theme-ipc",
    sourceLines: "109899-109981",
    responsibilities: [
      "create avatar overlay integration",
      "create window services and trusted IPC predicate",
      "register system theme sync IPC",
      "install native theme update broadcasts",
      "prepare updater quit behavior",
    ],
  },
  {
    key: "worker-and-window-context",
    sourceLines: "109982-110153",
    responsibilities: [
      "create desktop worker manager",
      "create app window context and browser sidebar suppression",
      "wire Sparkle bridge callbacks",
      "configure deep links, application menu refresh, and worker main-RPC handlers",
      "register worker bus message handlers",
    ],
  },
  {
    key: "second-instance-dock-and-tray",
    sourceLines: "110154-110277",
    responsibilities: [
      "focus or create the primary window for second-instance launches",
      "route queued process arguments through deep links",
      "create macOS dock recent-thread controller",
      "set up tray controls and Chronicle sidecar toggles",
    ],
  },
  {
    key: "computer-use-and-bundled-plugins",
    sourceLines: "110278-110430",
    responsibilities: [
      "create Computer Use controller and analytics forwarding",
      "register turn-cleanup disposables",
      "create bundled plugin reconciler",
      "sync macOS Computer Use service bundle",
      "start internal node_repl host services when available",
      "create browser native-pipe feature controller",
    ],
  },
  {
    key: "feature-availability-and-ipc",
    sourceLines: "110431-110533",
    responsibilities: [
      "apply feature availability updates",
      "register desktop IPC handlers",
      "register quit confirmation and updater-exit handling",
      "wire native context menu icon search roots",
    ],
  },
  {
    key: "sqlite-config-and-settings",
    sourceLines: "110534-110626",
    responsibilities: [
      "apply Codex app config from disk",
      "open local app-server SQLite through recovery/backfill flow",
      "enable app-server SQLite recovery UX",
      "initialize desktop settings from the app-server connection",
      "replace the initial updater quit handler with the full cleanup path",
    ],
  },
  {
    key: "automation-window-context-and-first-window",
    sourceLines: "110627-110714",
    responsibilities: [
      "create automation scheduler and automation event controller",
      "register Windows folder context menu",
      "refresh the application menu",
      "wait for bundled plugin reconciliation",
      "ensure and focus the first window",
      "flush pending deep links and finish startup tracing",
    ],
  },
];

function shouldHandleStateDatabaseOpenError(error: unknown): boolean {
  const message = (
    error instanceof Error ? error.message : String(error)
  ).toLowerCase();
  return (
    message.includes("sqlite state db") ||
    message.includes("state db backfill") ||
    message.includes("sqlite") ||
    message.includes("database")
  );
}

function createMainStartupOpenBoundaryError(): Error {
  return Object.assign(
    Error(
      "main--VWTbRdF remains an open restoration boundary: the startup phase map is recovered, but window services, app-server lifecycle, worker handlers, tray/menu/updater wiring, IPC registration, and telemetry still require semantic restoration.",
    ),
    {
      code: OPEN_RESTORATION_BOUNDARY_CODE,
      chunk: "main--VWTbRdF",
      disabledChronicleSidecarControlState:
        DISABLED_CHRONICLE_SIDECAR_CONTROL_STATE,
      recoveredStartupPhases: MAIN_STARTUP_PHASES.map((phase) => ({
        key: phase.key,
        sourceLines: phase.sourceLines,
      })),
      shouldHandleStateDatabaseOpenError,
    },
  );
}

async function runMainAppStartup(): Promise<void> {
  throw createMainStartupOpenBoundaryError();
}

export { runMainAppStartup };
