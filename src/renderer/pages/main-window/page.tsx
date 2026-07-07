// Restored from ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js

import { useEffect, useState } from "react";
import {
  getMainWindowTitleBarApi,
  type LoadErrorDetails,
} from "../../shared/api/claude-desktop-api";
import { WarningCircleIcon } from "../../shared/icons/warning-circle-icon";
import { FormattedMessage } from "../../shared/i18n/formatted-message";
import { Button } from "../../shared/ui/button";

const healthCheckState: {
  waiting?: Promise<boolean>;
} = {};

function resetHealthCheckWait() {
  healthCheckState.waiting = undefined;
}

function getHealthCheckDelay(attempt: number) {
  const baseDelay = Math.min(1000 * Math.pow(2, attempt - 1), 30000);
  const jitter = Math.random() * 0.1 * baseDelay;
  return baseDelay + jitter;
}

function sleep(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

async function waitForClaudeHealth(attempt = 1): Promise<boolean> {
  const api = getMainWindowTitleBarApi();
  const isOnline = navigator.onLine;

  if (isOnline) {
    console.log(
      "HEALTH-CHECK",
      "Requesting health check",
      `(attempt ${attempt})`,
    );

    if (await api?.isClaudeCurrentlyHealthy?.()) {
      return true;
    }

    attempt += 1;
  }

  const retryDelay = getHealthCheckDelay(attempt);
  console.log(
    "HEALTH-CHECK",
    `${isOnline ? "Fetch failed" : "offline"}, waiting ${(
      retryDelay / 1000
    ).toPrecision(3)}s`,
  );

  await sleep(retryDelay);
  return waitForClaudeHealth(attempt);
}

function waitForClaudeHealthOnce() {
  healthCheckState.waiting ||=
    waitForClaudeHealth().finally(resetHealthCheckWait);
  return healthCheckState.waiting;
}

type LoadErrorOverlayProps = {
  details: LoadErrorDetails;
  onRefresh: () => void;
};

function LoadErrorOverlay({ details, onRefresh }: LoadErrorOverlayProps) {
  useEffect(() => {
    void waitForClaudeHealthOnce().then(onRefresh);
  }, [onRefresh]);

  const fallbackErrorDescription = "Check your network connection";

  return (
    <div
      className="nc-drag absolute z-50 flex flex-col items-center justify-center"
      style={{
        top: "0px",
        left: 0,
        right: 0,
        bottom: 0,
        fontFamily: "Anthropic Sans",
      }}
    >
      <div className="nc-no-drag select-none flex flex-col items-center justify-center max-w-md p-6 space-y-2">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-danger-200/10 text-danger-100">
          <WarningCircleIcon size={32} />
        </div>
        <h1 className="text-l font-bold text-center">
          <FormattedMessage
            id="Nmvo1ufAY5"
            defaultMessage="Couldn't connect to Claude"
            description="Error title shown when the app fails to connect to Claude's servers"
          />
        </h1>
        <p className="text-xs text-center text-text-400 dark:text-text-100 select-text !mb-2">
          {details.errorDescription || fallbackErrorDescription}
        </p>
        <Button onClick={onRefresh} variant="secondary">
          <FormattedMessage
            id="ilE9e0uxNN"
            defaultMessage="Refresh"
            description="Button label to retry the connection"
          />
        </Button>
      </div>
    </div>
  );
}

type TitleBarSpacerProps = {
  isMainWindow: boolean;
  titleBarHeight?: number;
  windowTitle: string;
};

function TitleBarSpacer({
  isMainWindow,
  titleBarHeight = isMainWindow ? 0 : 28,
  windowTitle,
}: TitleBarSpacerProps) {
  if (isMainWindow) {
    return titleBarHeight === 0 ? null : (
      <div
        className="nc-drag"
        style={{
          height: `${titleBarHeight}px`,
          width: "100%",
        }}
      />
    );
  }

  return (
    <>
      <div
        className="flex flex-row items-center justify-center select-none nc-drag"
        style={{ height: `${titleBarHeight}px` }}
      >
        <h1
          className="text-xs text-center self-center opacity-40 font-bold select-none"
          id="titleBar"
        >
          {windowTitle}
        </h1>
      </div>
      <div
        className="absolute top-0 left-0 right-0 flex flex-row items-center select-none nc-drag"
        style={{
          height: `${titleBarHeight + 1}px`,
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div />
      </div>
    </>
  );
}

function requestMainViewReload() {
  getMainWindowTitleBarApi()?.requestReloadMainView?.();
}

export function MainWindowPage() {
  const [windowTitle, setWindowTitle] = useState("Claude");
  const [loadError, setLoadError] = useState<LoadErrorDetails | null>(null);

  useEffect(() => {
    return getMainWindowTitleBarApi()?.onUpdateTitleBar?.(setWindowTitle);
  }, []);

  useEffect(() => {
    return getMainWindowTitleBarApi()?.onShowLoadError?.(setLoadError);
  }, []);

  useEffect(() => {
    return getMainWindowTitleBarApi()?.onHideLoadError?.(() => {
      setLoadError(null);
    });
  }, []);

  useEffect(() => {
    getMainWindowTitleBarApi()?.titleBarReady?.();
  }, []);

  return (
    <>
      <TitleBarSpacer isMainWindow windowTitle={windowTitle} />
      {loadError && (
        <LoadErrorOverlay
          details={loadError}
          onRefresh={requestMainViewReload}
        />
      )}
    </>
  );
}
