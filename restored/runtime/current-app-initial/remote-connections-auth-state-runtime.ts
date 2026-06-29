// Restored from ref/webview/assets/app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js
// App-initial bridge for local remote-control auth and enabled-state sync.
import { _vscodeApiC as VscodeApiError } from "../../boundaries/vscode-api";
import {
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlEnabledChunk,
  initLocalRemoteControlErrorHandlingChunk,
  initSetRemoteControlEnabledForHostChunk,
  isRemoteControlTokenInvalidatedError,
  setLocalRemoteControlEnabled,
  setRemoteControlEnabledForHost,
} from "../../remote/local-remote-control-enabled-sync";

export const REMOTE_CONNECTIONS_AUTH_CLIENT_ID =
  "client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR";

export function initRemoteConnectionsAuthClientIdChunk(): void {}

export function isHandledLocalRemoteControlEnableError(
  error: unknown,
): boolean {
  return (
    isRemoteControlTokenInvalidatedError(error) ||
    error instanceof VscodeApiError
  );
}

export {
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlEnabledChunk,
  initLocalRemoteControlErrorHandlingChunk,
  initSetRemoteControlEnabledForHostChunk,
  setLocalRemoteControlEnabled,
  setRemoteControlEnabledForHost,
};
