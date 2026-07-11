// Restored from the Claude desktop renderer bundle.
// Types describing the app-server connection status badge and row states.

export type IntlLike = {
  formatMessage: (message: unknown, values?: Record<string, unknown>) => string;
};

export type AppServerConnectionStateName =
  | "connected"
  | "connecting"
  | "disconnected"
  | "error"
  | "restarting";

export type AppServerConnectionError =
  | {
      code: "connection-failed";
      message: string;
    }
  | {
      code: "login-required";
    }
  | {
      code: "remote-codex-not-found";
    }
  | {
      code: "restart-required";
      currentVersion?: string | null;
      installedVersion?: string | null;
    }
  | {
      code: "update-required";
      currentVersion: string;
      minRequiredVersion: string;
    };

export type AppServerConnectionSurface =
  | "connection-status-badge"
  | "connections-row";

export type AppServerConnectionAction =
  | {
      kind: "install-codex";
      label: string;
      loadingLabel?: string;
      tooltipText?: string;
    }
  | {
      kind: "login";
      label: string;
    }
  | {
      kind: "restart";
      label: string;
      tooltipText?: string;
    }
  | {
      kind: "settings";
      label: string;
    };

export type AppServerConnectionStatusCopy = {
  action: AppServerConnectionAction | null;
  label: string;
  message: string | undefined;
};

export type ResolveAppServerConnectionStatusInput = {
  canLogin: boolean;
  error: AppServerConnectionError | null | undefined;
  state: AppServerConnectionStateName;
  surface: AppServerConnectionSurface;
};
