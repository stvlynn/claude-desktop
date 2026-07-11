// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Flat boundary
// Vendored runtime interop stub for onboarding-commons-externals facade.

import React from "react";

export function updateSharedObjectState(
  _store: unknown,
  _key: string,
  _updater: (current: unknown) => unknown,
): void {}

export const appAtomScope = undefined as never;
export const canonicalizeRootPath = undefined as never;
export const codexHomeQueryAtom = undefined as never;
export const conversationCwdAtom = undefined as never;
export const conversationHostIdAtom = undefined as never;
export const conversationWorkspaceStateAtom = undefined as never;
export const derivedAtomFamily = undefined as never;
export const DURATIONS = undefined as never;
export const getHostBridge = undefined as never;
export const hostConfigAtom = undefined as never;
export const isPathWithin = undefined as never;
export function normalizePath(value: string): string {
  return value.replace(/\\/g, "/").replace(/\/+/g, "/");
}
export const queryAtomFamily = undefined as never;
export const uniq = undefined as never;
export const worktreeStatusQueryKey = undefined as never;
export const workspaceRootsQueryAtom = undefined as never;
export const codexMetadataEventProtoNamespaces = undefined as never;
export const emptyCodexEventDescriptor = undefined as never;
export const useAnalyticsEnabledQuery = undefined as never;
export const AnalyticsLogger = undefined as never;
export const analyticsApiClient = undefined as never;
export const buildAnalyticsRequestInit = undefined as never;
export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2793 7.71101C15.539 7.45131 15.961 7.45131 16.2207 7.71101C16.4804 7.97071 16.4804 8.39272 16.2207 8.65242L10.4707 14.4024C10.211 14.6621 9.78902 14.6621 9.52932 14.4024L3.77932 8.65242L3.69436 8.54792C3.52385 8.28979 3.55205 7.93828 3.77932 7.71101C4.00659 7.48374 4.3581 7.45554 4.61623 7.62605L4.72073 7.71101L10 12.9903L15.2793 7.71101Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.6}
      />
    </svg>
  );
}
export function OverflowMenuButton({
  label,
  size,
  iconClassName,
  className,
}: {
  label: string;
  size?: string;
  iconClassName?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      data-size={size}
      className={className}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="currentColor"
        className={iconClassName}
        aria-hidden="true"
      >
        <circle cx={8} cy={3} r={1.5} />
        <circle cx={8} cy={8} r={1.5} />
        <circle cx={8} cy={13} r={1.5} />
      </svg>
    </button>
  );
}
export function RawOutputIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V14C4.5 14.8284 5.17157 15.5 6 15.5H14C14.8284 15.5 15.5 14.8284 15.5 14V6C15.5 5.17157 14.8284 4.5 14 4.5H6ZM6 7C6 6.72386 6.22386 6.5 6.5 6.5H13.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 7.5 13.5 7.5H6.5C6.22386 7.5 6 7.27614 6 7ZM6 10C6 9.72386 6.22386 9.5 6.5 9.5H13.5C13.7761 9.5 14 9.72386 14 10C14 10.2761 13.7761 10.5 13.5 10.5H6.5C6.22386 10.5 6 10.2761 6 10ZM6 13C6 12.7239 6.22386 12.5 6.5 12.5H10.5C10.7761 12.5 11 12.7239 11 13C11 13.2761 10.7761 13.5 10.5 13.5H6.5C6.22386 13.5 6 13.2761 6 13Z"
        fill="currentColor"
      />
    </svg>
  );
}
export const currentRouteSignal = undefined as never;
export const diffSourceSignal = undefined as never;
export const appRootScope = undefined as never;
export const appStoreScope = undefined as never;
export const conversationByClientThreadIdAtom = undefined as never;
export function createParametricAtom(..._args: unknown[]): unknown {
  return undefined;
}
export function createRouteScopedComputedAtom(..._args: unknown[]): unknown {
  return undefined;
}
export function readPersistedSignalSnapshot(..._args: unknown[]): unknown {
  return undefined;
}
export function joinPath(..._parts: string[]): string {
  return _parts.join("/");
}
export function useConversationComments(
  _conversationId: string | number,
  _localConversationId?: string | number | null,
): { comments: unknown[]; modelComments: unknown[]; setComments: (next: unknown) => void } {
  return { comments: [], modelComments: [], setComments: () => {} };
}
export function toConversationKey(_id: string | number): string {
  return String(_id);
}
export function readScopedSignal<T>(_signal: unknown, _key: unknown): T | undefined {
  return undefined;
}
export const conversationHeadBranchAtom = undefined as never;
export const pullRequestStatusAtom: {
  type: "success";
  data: { commentAttachments: unknown[] };
} = { type: "success", data: { commentAttachments: [] } };
export function useEffectEvent<T extends (..._args: unknown[]) => unknown>(
  _callback: T,
): T {
  return _callback;
}
export function createKeyedAtomFamily<T>(
  _equality: (a: T, b: T) => boolean,
  _initialValue: T,
): (_key: string) => { get: () => T; set: (value: T) => void; subscribe: (listener: (value: T) => void) => () => void } {
  return (_key: string) => ({
    get: () => _initialValue,
    set: () => {},
    subscribe: () => () => {},
  });
}
export function useHostQuery<T = Record<string, unknown>>(
  _key: string,
  _options: { hostId?: string; params?: unknown; queryConfig?: { enabled?: boolean } },
): { data?: T; isLoading: boolean; error?: unknown } {
  return { data: undefined, isLoading: false, error: undefined };
}
export function getRpcRequester<T = unknown>(..._args: unknown[]): T {
  return undefined as T;
}
export function CloseIcon(_props: Record<string, unknown>): JSX.Element {
  return <></>;
}
export function CopyIcon(_props: Record<string, unknown>): JSX.Element {
  return <></>;
}
export function copyTextToClipboard(_text: string, _event?: unknown): Promise<void> {
  return Promise.resolve();
}
export const toastControllerAtom: {
  success: (_message: string) => void;
  danger: (_message: string) => void;
} = {
  success: () => {},
  danger: () => {},
};
export function useScopedStore(
  _scope?: unknown,
): {
  get: <T>(_atom: unknown) => T;
  set: (_atom: unknown, _value: unknown) => void;
} {
  return { get: () => undefined as never, set: () => {} };
}
export function useQueryClient(): {
  invalidateQueries: (_options: { queryKey: unknown[] }) => Promise<void>;
} {
  return { invalidateQueries: async () => {} };
}
export function useMutation<T = unknown>(
  _options: unknown,
): { mutateAsync: () => Promise<T>; mutate: () => Promise<T>; isPending: boolean } {
  return { mutateAsync: async () => undefined as T, mutate: async () => undefined as T, isPending: false };
}
export function resolveHostConfigId(_hostConfig: unknown): string {
  return String(_hostConfig);
}
export function ConversationStatusRow(_props: Record<string, unknown>): JSX.Element {
  return <></>;
}
export function CollapsibleToolActivity(_props: Record<string, unknown>): JSX.Element {
  return <></>;
}
export function CommandOutputBlock(_props: Record<string, unknown>): JSX.Element {
  return <></>;
}
export function EnvironmentSetupIcon(
  _props: Record<string, unknown>,
): JSX.Element {
  return <></>;
}
export function ConversationActivityIcon(
  _props: Record<string, unknown>,
): JSX.Element {
  return <></>;
}
export function DiffSourceDisplay(_props: { diffSource?: unknown }): JSX.Element {
  return <></>;
}
export function ElectronSurface(): JSX.Element {
  return <></>;
}
export function initDiffSource(_store: unknown, _source: string): void {}
export function useSignalValue<T>(_signal: unknown): T {
  return undefined as T;
}
export function useStore(_signal: unknown): unknown {
  return undefined;
}
export function CommandMenuGroup({
  children,
}: {
  children?: React.ReactNode;
  heading?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  key?: React.Key;
}): JSX.Element {
  return <>{children}</>;
}
export function CommandMenuItem(_props: {
  value?: string;
  title?: string;
  onSelect?: () => void;
}): JSX.Element {
  return <></>;
}
export function navigateToProject(
  _store: unknown,
  _navigate: unknown,
  _group: unknown,
): void {}
export function useCommandMenuRegistration(_options: unknown): void {}
export const workspaceGroupsSignal = undefined as never;
export const ConversationCard = undefined as never;
export const ConversationMarkdown = undefined as never;
export const CopyButton = undefined as never;
export const DownloadIcon = undefined as never;
export const ExternalLinkIcon = undefined as never;
export const IconButtonTooltip = undefined as never;
export const PlanIcon = undefined as never;
export const PlatformGate = undefined as never;
export const ShareConversationButton = undefined as never;
export const ShimmerText = undefined as never;
export const SidePanelIcon = undefined as never;
export const SidePanelTabId = undefined as never;
export const codexAnalyticsConfigAtom = undefined as never;
export function createScopedAtom(..._args: unknown[]): unknown {
  return undefined;
}
export const defaultLayoutTransition = undefined as never;
export const hostMessageBridge = undefined as never;
export const planSidePanelEnabledAtom = undefined as never;
export const sidePanelTabManager = undefined as never;
export const useAppStore = undefined as never;
export const useAtomValue = undefined as never;
export const uniqBy = undefined as never;

// Automation-related stubs
export const appMessenger = {
  dispatchMessage: (_type: string, _payload?: unknown): void => {
    // no-op stub
  },
};
export const automationDeletedExternallyMessage =
  "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.";
export const buildQueryKey = (...parts: unknown[]): unknown[] => parts;
export const setHeartbeatAutomationsEnabled = (_enabled: boolean): void => {
  // no-op stub
};
