// Restored from ref/.vite/build/mainWindow.js

export const CURRENT_CLAUDE_EIPC_PREFIX =
  "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_";

export function currentClaudeIpcChannel(
  namespace: string,
  contract: string,
  method: string,
): string {
  return `${CURRENT_CLAUDE_EIPC_PREFIX}${namespace}_$_${contract}_$_${method}`;
}
