// Restored from ref/.vite/build/index.pre.js

export const CLAUDE_APP_NAME = "Claude";
export const CLAUDE_APP_USER_MODEL_ID = "com.anthropic.claude";
export const CLAUDE_CONFIG_FILE_NAME = "claude_desktop_config.json";
export const CLAUDE_THIRD_PARTY_SUFFIX = "-3p";

export type ClaudeBootstrapConfiguration = {
  enabled?: boolean;
  url?: unknown;
};

export type ClaudeAuthenticationConfiguration = {
  disableDeepLinks?: boolean;
  disableClaudeAiSignIn?: boolean;
};

export type ClaudeDesktopConfiguration = {
  authentication?: ClaudeAuthenticationConfiguration;
  bootstrap?: ClaudeBootstrapConfiguration;
  deploymentMode?: "1p" | "3p";
  inference?: unknown;
  telemetry?: {
    disableEssential?: boolean;
  };
};

export function hasRemoteDebuggingArgument(argv: readonly string[]): boolean {
  return argv.some((argument) => {
    const normalized = argument.replace(/^(?:--|-|\/)/, "").toLowerCase();
    return (
      normalized.startsWith("remote-debugging-port") ||
      normalized.startsWith("remote-debugging-pipe")
    );
  });
}

export function isThirdPartyConfiguration(
  configuration: ClaudeDesktopConfiguration,
): boolean {
  const hasExternalProvider =
    configuration.inference !== undefined ||
    (configuration.bootstrap?.url !== undefined &&
      configuration.bootstrap.enabled !== false);
  const disablesClaudeSignIn =
    configuration.authentication?.disableClaudeAiSignIn === true;
  return (
    hasExternalProvider &&
    (disablesClaudeSignIn || configuration.deploymentMode !== "1p")
  );
}

export function isTrustedClaudeAiOverrideUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.host.endsWith(".ant.dev") || url.hostname === "localhost";
  } catch {
    return false;
  }
}
