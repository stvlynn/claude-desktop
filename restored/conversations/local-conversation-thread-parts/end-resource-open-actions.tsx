// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Actions for opening a linked conversation end-resource: platform-aware open wrapper, hover subtitle, and the "Open in" dropdown.

import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { AppWindowIcon } from "../../icons/app-window-icon";
import { Button } from "../../ui/button";
import {
  PlatformGate,
  ExternalLinkIcon,
  ChevronDownIcon,
  useOpenTargets,
  OpenTargetsPrefetch,
  ExternalOpenLink,
  buildOpenTargetMenuItems,
  isVisibleOpenTargetMenuItem,
  OpenTargetDropdownMenu,
  OpenTargetMenu,
  CopyLinkIcon,
} from "../../boundaries/onboarding-commons-externals.facade";

type OpenTargetKind = "native" | string;

interface OpenTarget {
  default?: boolean;
  kind?: OpenTargetKind;
  appPath?: string | null;
  label?: string | null;
}

interface OpenTargetMenuItem {
  id: string;
  target: OpenTarget;
  appPath?: string | null;
  icon?: string;
  label: React.ReactNode;
}

export function isDefaultNativeOpenTarget(target: OpenTarget): boolean {
  return (
    target.default === true &&
    target.kind === "native" &&
    target.appPath != null
  );
}

export interface EndResourceOpenActionProps {
  cwd: string;
  hostId: string;
  href: string;
  openTarget: string;
  shouldLoadTargets: boolean;
}

export function EndResourceOpenAction({
  cwd,
  hostId,
  href,
  openTarget,
  shouldLoadTargets,
}: EndResourceOpenActionProps) {
  const { canLoadTargets, targets } = useOpenTargets({
    cwd,
    hostId,
    openPath: href,
  });
  const defaultBrowserName: string | null =
    targets.find(isDefaultNativeOpenTarget)?.label ?? null;

  const prefetch =
    canLoadTargets && shouldLoadTargets && openTarget !== "in-app-browser" ? (
      <OpenTargetsPrefetch cwd={cwd} hostId={hostId} openPath={href} />
    ) : null;

  return (
    <>
      {prefetch}
      <PlatformGate electron>
        {openTarget === "in-app-browser" ? (
          <FormattedMessage
            id="localConversation.endResource.openLinkInCodexBrowserSubtitle"
            defaultMessage="Open"
            description="Hover subtitle for opening a linked conversation resource in the Codex browser"
          />
        ) : (
          <EndResourceOpenSubtitle
            browserName={defaultBrowserName}
            fallbackToDefaultBrowser
            href={href}
            openTarget={openTarget}
          />
        )}
      </PlatformGate>
      <PlatformGate browser chromeExtension extension>
        <EndResourceOpenSubtitle
          browserName={defaultBrowserName}
          fallbackToDefaultBrowser={false}
          href={href}
          openTarget={openTarget}
        />
      </PlatformGate>
    </>
  );
}

export interface EndResourceOpenSubtitleProps {
  browserName: string | null;
  fallbackToDefaultBrowser: boolean;
  href: string;
  openTarget: string;
}

export function EndResourceOpenSubtitle({
  browserName,
  fallbackToDefaultBrowser,
  href,
  openTarget,
}: EndResourceOpenSubtitleProps) {
  const subtitle =
    browserName == null ? (
      fallbackToDefaultBrowser ? (
        <FormattedMessage
          id="localConversation.endResource.openInDefaultBrowserSubtitle"
          defaultMessage="Open in default browser"
          description="Fallback hover subtitle for opening a linked conversation resource when the system browser name is unavailable"
        />
      ) : (
        <FormattedMessage
          id="localConversation.endResource.openInBrowserSubtitle"
          defaultMessage="Open in browser"
          description="Fallback hover subtitle for opening a linked conversation resource when the browser name is unavailable"
        />
      )
    ) : (
      <FormattedMessage
        id="localConversation.endResource.openInNamedBrowserSubtitle"
        defaultMessage="Open in {browser}"
        description="Hover subtitle for opening a linked conversation resource in the user's default browser"
        values={{ browser: browserName }}
      />
    );

  return (
    <>
      {subtitle}
      <ExternalOpenLink
        className="icon-2xs"
        ExternalIcon={ExternalLinkIcon}
        href={href}
        openTarget={openTarget}
      />
    </>
  );
}

export interface EndResourceOpenInMenuProps {
  cwd: string;
  copyLink: string | null;
  hostId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenInCodexBrowser: () => void;
  openPath: string;
}

export function EndResourceOpenInMenu({
  cwd,
  copyLink,
  hostId,
  isOpen,
  onOpenChange,
  onOpenInCodexBrowser,
  openPath,
}: EndResourceOpenInMenuProps) {
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const {
    canLoadTargets,
    targets,
    availableTargets,
    mode,
    isLoadingTargets,
    open,
  } = useOpenTargets({ cwd, hostId, openPath });

  const menuItems: OpenTargetMenuItem[] = buildOpenTargetMenuItems({
    targets,
    availableTargets,
    includeHiddenTargets: true,
    mode,
  }).filter(isVisibleOpenTargetMenuItem);

  const handleInteract = () => {
    setHasInteracted(true);
  };

  const prefetch =
    canLoadTargets && hasInteracted ? (
      <OpenTargetsPrefetch cwd={cwd} hostId={hostId} openPath={openPath} />
    ) : null;

  const isLoading =
    canLoadTargets &&
    hasInteracted &&
    isLoadingTargets &&
    menuItems.length === 0;

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (next) {
      handleInteract();
    }
  };

  const triggerButton = (
    <Button
      className="end-resource-open-button pointer-events-auto !self-center !bg-transparent hover:!bg-token-list-hover-background data-[state=open]:!bg-token-list-hover-background"
      color="outline"
      onFocus={handleInteract}
      onMouseEnter={handleInteract}
      size="toolbar"
    >
      <FormattedMessage
        id="localConversation.endResource.openIn"
        defaultMessage="Open in"
        description="Button label for opening a conversation resource"
      />
      <ChevronDownIcon className="icon-2xs opacity-50" />
    </Button>
  );

  const codexBrowserItem = (
    <OpenTargetMenu.Item onSelect={onOpenInCodexBrowser}>
      <OpenTargetMenu.ItemIcon>
        <AppWindowIcon aria-hidden className="icon-sm" />
      </OpenTargetMenu.ItemIcon>
      <FormattedMessage
        id="localConversation.endResource.openInCodexBrowser"
        defaultMessage="Codex Browser"
        description="Dropdown item for opening a website preview in Codex Browser"
      />
    </OpenTargetMenu.Item>
  );

  const nativeAppItems = menuItems.map((item) => (
    <OpenTargetMenu.Item
      key={item.id}
      onSelect={() => {
        open(item.target, {
          appPath: item.appPath,
          path: openPath,
          persistPreferred: false,
        });
      }}
    >
      <OpenTargetMenu.ItemIcon>
        <img alt="" src={item.icon} className="icon-sm" />
      </OpenTargetMenu.ItemIcon>
      {item.label}
    </OpenTargetMenu.Item>
  ));

  const loadingMessage = isLoading ? (
    <OpenTargetMenu.Message compact>
      <FormattedMessage
        id="localConversation.endResource.loadingAvailableApps"
        defaultMessage="Loading available apps…"
        description="Dropdown item shown while loading apps that can open a conversation resource"
      />
    </OpenTargetMenu.Message>
  ) : null;

  const copyLinkSection =
    copyLink == null ? null : (
      <>
        <OpenTargetMenu.Separator />
        <OpenTargetMenu.Item
          onSelect={() => {
            copyToClipboard(copyLink);
          }}
        >
          <OpenTargetMenu.ItemIcon>
            <CopyLinkIcon aria-hidden className="icon-sm" />
          </OpenTargetMenu.ItemIcon>
          <FormattedMessage
            id="localConversation.endResource.copyLink"
            defaultMessage="Copy link"
            description="Dropdown item for copying a conversation resource link"
          />
        </OpenTargetMenu.Item>
      </>
    );

  const menuContent = (
    <div className="flex min-w-[160px] flex-col gap-0.5">
      {codexBrowserItem}
      {nativeAppItems}
      {loadingMessage}
      {copyLinkSection}
    </div>
  );

  return (
    <>
      {prefetch}
      <OpenTargetDropdownMenu
        align="end"
        open={isOpen}
        contentClassName="pt-2"
        triggerButton={triggerButton}
        onOpenChange={handleOpenChange}
      >
        {menuContent}
      </OpenTargetDropdownMenu>
    </>
  );
}
