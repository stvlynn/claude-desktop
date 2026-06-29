// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// End-of-turn resource cards rendered beneath an assistant message: local file,
// generated website preview, Appgen/Sites app, and Google Drive resource cards,
// plus the expandable list that lays them out (localConversation domain).
import type { ReactElement, SVGProps } from "react";
import { useState } from "react";
import posixPath from "path-browserify";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  ThreadResourceCard,
  ThreadResourceCardHeader,
  ThreadResourceCardExpandButton,
} from "../ui/thread-resource-card";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { ChevronIcon } from "../icons/chevron-icon";
import { ShareIcon } from "../icons/share-icon";
import { GoogleResourceKindIcon } from "./google-resource-kind-icon";
import type { GoogleResourceKind } from "./google-resource-kind-icon";
import {
  resolveWebsiteResourcePath,
  parseWebsitePreviewMetadata,
  buildFaviconDataUri,
} from "./website-resource-preview";
import {
  useModalController,
  useAppgenProject,
  useOpenTarget,
  handleOpenResourceLink,
  openInBrowserTarget,
  openFileResourceFromTurn,
  trackOpenInCodexBrowser,
  useHostConfig,
  useHostRequest,
  usePlatform,
  getFileExtension,
  useOpenInTargets,
  filterOpenInTargets,
  basename,
  normalizePath,
  getFileIconComponent,
  getGoogleWorkspaceExportTarget,
  GoogleWorkspaceExportMenuItems,
  analyticsClickSource,
  analyticsClickAction,
  trackGoogleWorkspaceResourceClick,
  useConnectApp,
  AppConnectDialog,
  OpenFileContextMenuWrapper,
  OpenInTargetsPreloader,
  ResourceOverflowMenu,
  OpenInTargetsHoverSubtitle,
  AppgenSiteIcon,
  AccessPolicyIcon,
  getAccessPolicyMessageValues,
  getAccessPolicySubtitleDescriptor,
  isBrowserOpenableUrl,
  useBrowserSidebarEnabled,
  useProductLogger,
  useHostQuery,
  useAppStore,
  openAppgenShareDialog,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_FAVICON_BYTES = 262144;
const MAX_VISIBLE_RESOURCES = 3;

const OVERLAY_BUTTON_CLASS_NAME =
  "peer/end-resource absolute inset-0 cursor-interaction bg-transparent group-hover/end-resource:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset";

const HOVER_REVEAL_CLASS_NAME =
  "peer-hover/end-resource:[&_.end-resource-default-subtitle]:hidden peer-hover/end-resource:[&_.end-resource-hover-subtitle]:inline-flex";

function headerClassName(isMenuOpen: boolean): string {
  return clsx(
    "pointer-events-none relative z-10",
    !isMenuOpen && HOVER_REVEAL_CLASS_NAME,
  );
}

export interface AppgenAccessPolicySubtitleProps {
  accessPolicy: unknown;
  isLoading: boolean;
}

export function AppgenAccessPolicySubtitle({
  accessPolicy,
  isLoading,
}: AppgenAccessPolicySubtitleProps) {
  if (isLoading) {
    return (
      <span className="inline-flex align-middle">
        <Spinner className="icon-2xs" />
      </span>
    );
  }
  const messageValues = getAccessPolicyMessageValues(accessPolicy);
  const descriptor = getAccessPolicySubtitleDescriptor(messageValues);
  return (
    <span className="flex items-center gap-1">
      <AccessPolicyIcon
        aria-hidden={true}
        accessPolicy={accessPolicy}
        className="icon-2xs shrink-0"
      />
      <FormattedMessage {...descriptor} values={messageValues} />
    </span>
  );
}

export interface AppgenSiteResource {
  type: "appgen-app";
  url: string;
  projectId: string;
  title?: string | null;
}

export interface AppgenSiteEndResourceCardProps {
  conversationId: string;
  cwd: string | null;
  hostId: string;
  resource: AppgenSiteResource;
}

export function AppgenSiteEndResourceCard({
  conversationId,
  cwd,
  hostId,
  resource,
}: AppgenSiteEndResourceCardProps) {
  const modalController = useModalController();
  const { data, isLoading } = useAppgenProject(resource.projectId);
  const intl = useIntl();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const accessPolicy = data?.access_policy ?? null;
  const isTitleLoading = isLoading && resource.title == null;
  const title =
    resource.title ??
    data?.title ??
    intl.formatMessage({
      id: "localConversation.endResource.appgenFallbackTitle",
      defaultMessage: "Site",
      description: "Fallback title for a Sites conversation resource card",
    });
  const openTarget = useOpenTarget({
    href: resource.url,
    openTargetIntent: "default",
  });
  const handleClick = (event: React.MouseEvent) => {
    handleOpenResourceLink({
      event,
      href: resource.url,
      initiator: "mcp_app_resource",
      openTarget,
    });
  };
  const handleOpenInCodexBrowser = () => {
    trackOpenInCodexBrowser({
      conversationId,
      url: resource.url,
      source: "manual",
      initiator: "mcp_app_resource",
    });
  };
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openAppgenSite",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a Sites conversation resource card",
          },
          { title },
        )}
        className={OVERLAY_BUTTON_CLASS_NAME}
        onClick={handleClick}
        onFocus={() => setShouldLoadTargets(true)}
        onMouseEnter={() => setShouldLoadTargets(true)}
        type="button"
      />
      <ThreadResourceCardHeader
        className={clsx(
          "pointer-events-none relative z-10",
          !isMenuOpen && HOVER_REVEAL_CLASS_NAME,
        )}
        icon={
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary">
            <AppgenSiteIcon className="icon-md" />
          </span>
        }
        title={isTitleLoading ? <Spinner className="icon-2xs" /> : title}
        titleTooltip={isTitleLoading ? undefined : title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              <AppgenAccessPolicySubtitle
                accessPolicy={accessPolicy}
                isLoading={isLoading}
              />
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              <OpenInTargetsHoverSubtitle
                cwd={cwd}
                hostId={hostId}
                href={resource.url}
                openTarget={openTarget}
                shouldLoadTargets={shouldLoadTargets}
              />
            </span>
          </>
        }
        trailing={
          <div className="flex items-center gap-2">
            <ResourceOverflowMenu
              cwd={cwd}
              hostId={hostId}
              isOpen={isMenuOpen}
              onOpenChange={setMenuOpen}
              onOpenInCodexBrowser={handleOpenInCodexBrowser}
              openPath={resource.url}
            />
            <Button
              className="pointer-events-auto"
              color="primary"
              size="toolbar"
              onClick={() => {
                openAppgenShareDialog(modalController, resource.projectId);
              }}
            >
              <ShareIcon aria-hidden={true} className="icon-xs" />
              <FormattedMessage
                id="localConversation.endResource.shareAppgenSite"
                defaultMessage="Share"
                description="Button label for sharing a Sites conversation resource"
              />
            </Button>
          </div>
        }
      />
    </div>
  );
}

export function formatFileTypeLabel(
  extension: string | null,
  intl: ReturnType<typeof useIntl>,
): string | null {
  if (extension == null) {
    return null;
  }
  const upperExtension = extension.toUpperCase();
  if (
    extension === "pdf" ||
    extension === "doc" ||
    extension === "docx" ||
    extension === "md" ||
    extension === "mdx"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.documentFileType",
        defaultMessage: "Document · {extension}",
        description: "File type label for a document resource card",
      },
      { extension: upperExtension },
    );
  }
  if (
    extension === "csv" ||
    extension === "tsv" ||
    extension === "xls" ||
    extension === "xlsm" ||
    extension === "xlsx"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.spreadsheetFileType",
        defaultMessage: "Spreadsheet · {extension}",
        description: "File type label for a spreadsheet resource card",
      },
      { extension: upperExtension },
    );
  }
  if (extension === "ppt" || extension === "pptx") {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.presentationFileType",
        defaultMessage: "Slides · {extension}",
        description: "File type label for a presentation resource card",
      },
      { extension: upperExtension },
    );
  }
  if (
    extension === "avif" ||
    extension === "gif" ||
    extension === "jpeg" ||
    extension === "jpg" ||
    extension === "png" ||
    extension === "webp"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.imageFileType",
        defaultMessage: "Image · {extension}",
        description: "File type label for an image resource card",
      },
      { extension: upperExtension },
    );
  }
  return null;
}

export function formatParentDirectoryLabel(filePath: string): string {
  const directory = posixPath.posix.dirname(normalizePath(filePath));
  return directory === "." ? "/" : `${directory}/`;
}

function isFileManagerTarget(target: { target: string }): boolean {
  return target.target === "fileManager";
}

function isNonFileManagerTarget(target: { target: string }): boolean {
  return target.target !== "fileManager";
}

export interface FileEndResourceCardProps {
  turnId?: string;
  conversationId: string;
  cwd: string | null;
  hostId: string;
  inputMessageId?: string | null;
  messageId?: string | null;
  onOpen?: () => void;
  path: string;
}

export function FileEndResourceCard({
  turnId,
  conversationId,
  cwd,
  hostId,
  inputMessageId,
  messageId,
  onOpen,
  path,
}: FileEndResourceCardProps) {
  const store = useAppStore();
  const intl = useIntl();
  const { platform } = usePlatform();
  const hostConfig = useHostConfig(hostId);
  const openFileRequest = useHostRequest("open-file");
  const extension = getFileExtension(path);
  const [showPreloader, setShowPreloader] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const {
    clearConnectingApp,
    connectingApp,
    handleAppConnectOAuthStarted,
    handleConnectApp,
  } = useConnectApp({ hostId });
  const {
    canLoadTargets,
    targets,
    availableTargets,
    mode,
    hasLoadedTargets,
    isLoadingTargets,
    open,
  } = useOpenInTargets({ turnId, cwd, hostId, openPath: path });
  const filename = basename(path);
  const openInItems = filterOpenInTargets({
    targets,
    availableTargets,
    includeHiddenTargets: true,
    mode,
  }).filter(isNonFileManagerTarget);
  const fileManagerTarget = availableTargets.includes("fileManager")
    ? (targets.find(isFileManagerTarget) ?? null)
    : null;
  const googleExportTarget = getGoogleWorkspaceExportTarget(path);
  const hasGoogleExport = googleExportTarget != null;
  const subtitleLabel =
    formatFileTypeLabel(extension, intl) ?? formatParentDirectoryLabel(path);
  const handleOpen = () => {
    onOpen?.();
    openFileResourceFromTurn({
      scope: store,
      path,
      cwd,
      hostConfig,
      hostId,
      openFile: openFileRequest.mutate,
      openInSidePanel: true,
    });
  };
  const showPreloaderOnHover = () => {
    setShowPreloader(true);
  };
  const preloader =
    canLoadTargets && showPreloader ? (
      <OpenInTargetsPreloader cwd={cwd} hostId={hostId} openPath={path} />
    ) : null;
  const isLoadingTargetsNow =
    canLoadTargets && showPreloader && isLoadingTargets;
  const hasOpenInOptions =
    isLoadingTargetsNow || openInItems.length > 0 || hasGoogleExport;
  const FileIcon = getFileIconComponent(path);
  const overlayButton = (
    <button
      aria-label={intl.formatMessage(
        {
          id: "localConversation.endResource.openResource",
          defaultMessage: "Open {filename}",
          description:
            "Accessible label for opening a conversation resource card",
        },
        { filename },
      )}
      className={OVERLAY_BUTTON_CLASS_NAME}
      onClick={handleOpen}
      type="button"
    />
  );
  const iconNode = (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
      <FileIcon className="size-6" />
    </span>
  );
  const subtitle = (
    <>
      <span className="end-resource-default-subtitle">{subtitleLabel}</span>
      <span className="end-resource-hover-subtitle hidden items-center gap-1">
        <FormattedMessage
          id="localConversation.endResource.openPreview"
          defaultMessage="Open preview"
          description="Hover subtitle for opening a conversation resource preview"
        />
      </span>
    </>
  );
  const trailing = isOpening ? (
    <Spinner />
  ) : (
    <DropdownMenu
      align="end"
      open={isMenuOpen}
      disabled={
        hasLoadedTargets &&
        openInItems.length === 0 &&
        fileManagerTarget == null &&
        !hasGoogleExport
      }
      contentClassName="pt-2"
      triggerButton={
        <Button
          className="end-resource-open-button pointer-events-auto !self-center !bg-transparent hover:!bg-token-list-hover-background data-[state=open]:!bg-token-list-hover-background"
          color="outline"
          onFocus={showPreloaderOnHover}
          onMouseEnter={showPreloaderOnHover}
          size="toolbar"
        >
          <FormattedMessage
            id="localConversation.endResource.openIn"
            defaultMessage="Open in"
            description="Button label for opening a conversation resource"
          />
          <ChevronIcon className="icon-2xs opacity-50" />
        </Button>
      }
      onOpenChange={(open) => {
        setMenuOpen(open);
        if (open) {
          showPreloaderOnHover();
        }
      }}
    >
      <div className="flex min-w-[160px] flex-col gap-0.5">
        {openInItems.map((item) => (
          <Dropdown.Item
            key={item.id}
            onSelect={() => {
              open(item.target, {
                appPath: item.appPath,
                path,
                persistPreferred: false,
              });
            }}
          >
            <Dropdown.ItemIcon>
              <img alt="" src={item.icon} className="icon-sm" />
            </Dropdown.ItemIcon>
            {item.label}
          </Dropdown.Item>
        ))}
        {isLoadingTargetsNow ? (
          <Dropdown.Message compact={true}>
            <FormattedMessage
              id="localConversation.endResource.loadingAvailableApps"
              defaultMessage="Loading available apps…"
              description="Dropdown item shown while loading apps that can open a conversation resource"
            />
          </Dropdown.Message>
        ) : null}
        {hasGoogleExport ? (
          <GoogleWorkspaceExportMenuItems
            analyticsClickSource={
              analyticsClickSource.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU
            }
            analyticsContext={{
              threadId: conversationId,
              turnId: turnId ?? null,
              inputMessageId: inputMessageId ?? null,
              messageId: messageId ?? null,
            }}
            cwd={cwd}
            handleConnectApp={handleConnectApp}
            hostId={hostId}
            isOpening={isOpening}
            onCloseDropdown={() => setMenuOpen(false)}
            onOpeningChange={setIsOpening}
            path={path}
            title={filename}
          />
        ) : null}
        {fileManagerTarget == null ? null : (
          <>
            {hasOpenInOptions ? <Dropdown.Separator /> : null}
            <Dropdown.Item
              onSelect={() => {
                open("fileManager", { path, persistPreferred: false });
              }}
            >
              <Dropdown.ItemIcon>
                <img alt="" src={fileManagerTarget.icon} className="icon-sm" />
              </Dropdown.ItemIcon>
              {platform === "macOS" ? (
                <FormattedMessage
                  id="localConversation.endResource.revealInFinder"
                  defaultMessage="Reveal in Finder"
                  description="Dropdown item for revealing a conversation resource in Finder"
                />
              ) : platform === "windows" ? (
                <FormattedMessage
                  id="localConversation.endResource.openInExplorer"
                  defaultMessage="Open in Explorer"
                  description="Dropdown item for revealing a conversation resource in File Explorer"
                />
              ) : (
                <FormattedMessage
                  id="localConversation.endResource.openInFileManager"
                  defaultMessage="Open in File Manager"
                  description="Dropdown item for revealing a conversation resource in the system file manager"
                />
              )}
            </Dropdown.Item>
          </>
        )}
      </div>
    </DropdownMenu>
  );
  const card = (
    <OpenFileContextMenuWrapper
      cwd={cwd}
      hostId={hostId}
      openInSidePanel={true}
      path={path}
    >
      <div className="group/end-resource relative">
        {overlayButton}
        <ThreadResourceCardHeader
          className={headerClassName(isMenuOpen)}
          icon={iconNode}
          title={filename}
          subtitle={subtitle}
          trailing={trailing}
        />
      </div>
    </OpenFileContextMenuWrapper>
  );
  const connectDialog =
    hasGoogleExport && connectingApp != null ? (
      <AppConnectDialog
        app={connectingApp}
        hostId={hostId}
        onClose={clearConnectingApp}
        onOAuthStarted={handleAppConnectOAuthStarted}
      />
    ) : null;
  return (
    <>
      {preloader}
      {card}
      {connectDialog}
    </>
  );
}

const WebsitePreviewFallbackIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={9} fill="#CDF3FF" />
    <path
      fill="#41CEF9"
      fillRule="evenodd"
      d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2ZM9.172 13c.146 4.477 1.284 7 2.828 7 1.544 0 2.682-2.523 2.828-7H9.172Zm-5.108 0a7.994 7.994 0 0 0 4.313 6.134C7.686 17.622 7.261 15.549 7.174 13h-3.11Zm12.762 0c-.087 2.55-.512 4.622-1.204 6.134A7.994 7.994 0 0 0 19.936 13h-3.11Zm-8.45-8.135A7.995 7.995 0 0 0 4.065 11h3.11c.087-2.55.511-4.623 1.203-6.135ZM12.001 4c-1.544 0-2.682 2.523-2.828 7h5.656C14.682 6.523 13.544 4 12 4Zm3.622.865C16.314 6.377 16.74 8.45 16.826 11h3.11a7.995 7.995 0 0 0-4.314-6.135Z"
      clipRule="evenodd"
    />
  </svg>
);

export interface WebsiteResource {
  type: "website";
  target: string;
}

export interface WebsiteEndResourceCardProps {
  cwd: string | null;
  hostId: string;
  resource: WebsiteResource;
}

export function WebsiteEndResourceCard({
  cwd,
  hostId,
  resource,
}: WebsiteEndResourceCardProps) {
  const intl = useIntl();
  const hostConfig = useHostConfig(hostId);
  const browserSidebarEnabled = useBrowserSidebarEnabled();
  const openFileRequest = useHostRequest("open-file");
  const resolvedPath = resolveWebsiteResourcePath({
    cwd,
    target: resource.target,
  });
  const hasResolvedPath = resolvedPath != null;
  const { data: previewMetadata } = useHostQuery("read-file", {
    params: { path: resolvedPath ?? "", hostId },
    queryConfig: { enabled: hasResolvedPath },
    select: (result: { contents: string }) =>
      parseWebsitePreviewMetadata({
        filePath: resolvedPath,
        html: result.contents,
      }),
  });
  const faviconFilePath =
    previewMetadata?.favicon?.type === "file"
      ? previewMetadata.favicon.path
      : null;
  const hasFaviconFile = faviconFilePath != null;
  const { data: faviconMetadata } = useHostQuery("read-file-metadata", {
    params: { path: faviconFilePath ?? "", hostId },
    queryConfig: { enabled: hasFaviconFile },
  });
  const canReadFaviconBytes =
    faviconMetadata?.isFile === true &&
    faviconMetadata.sizeBytes != null &&
    faviconMetadata.sizeBytes <= MAX_FAVICON_BYTES;
  const { data: faviconDataUri } = useHostQuery("read-file-binary", {
    params: { path: faviconFilePath ?? "", hostId },
    queryConfig: { enabled: canReadFaviconBytes },
    select: (result: { contentsBase64?: string | null }) =>
      result.contentsBase64 == null || faviconFilePath == null
        ? null
        : buildFaviconDataUri({
            contentsBase64: result.contentsBase64,
            filePath: faviconFilePath,
          }),
  });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const [faviconError, setFaviconError] = useState<string | null>(null);
  const faviconSrc =
    previewMetadata?.favicon?.type === "url"
      ? previewMetadata.favicon.src
      : canReadFaviconBytes
        ? faviconDataUri
        : null;
  const title =
    previewMetadata?.title ??
    intl.formatMessage({
      id: "localConversation.endResource.websiteTitle",
      defaultMessage: "Web preview",
      description: "Title for a generated website preview resource card",
    });
  const isBrowserUrl = isBrowserOpenableUrl(resource.target);
  const openTarget = useOpenTarget({
    href: resource.target,
    openTargetIntent: "default",
  });
  const resolvedOpenTarget = isBrowserUrl ? openTarget : undefined;
  const openInDefault = () => {
    openFileResourceFromTurn({
      path: resource.target,
      cwd,
      browserSidebarEnabled,
      hostConfig,
      hostId,
      openFile: openFileRequest.mutate,
    });
  };
  const handleClick = (event: React.MouseEvent) => {
    if (isBrowserUrl) {
      handleOpenResourceLink({
        event,
        href: resource.target,
        initiator: "mcp_app_resource",
        openTarget: resolvedOpenTarget,
      });
      return;
    }
    openInDefault();
  };
  const handleOpenInCodexBrowser = isBrowserUrl
    ? () => {
        openInBrowserTarget({
          href: resource.target,
          initiator: "mcp_app_resource",
          openTarget: "in-app-browser",
        });
      }
    : openInDefault;
  const showTargetsOnHover = () => {
    setShouldLoadTargets(true);
  };
  const copyLink = isBrowserOpenableUrl(resource.target)
    ? resource.target
    : undefined;
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openWebsite",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a website preview resource card",
          },
          { title },
        )}
        className={OVERLAY_BUTTON_CLASS_NAME}
        onClick={handleClick}
        onFocus={showTargetsOnHover}
        onMouseEnter={showTargetsOnHover}
        type="button"
      />
      <ThreadResourceCardHeader
        className={headerClassName(isMenuOpen)}
        icon={
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
            {faviconSrc != null && faviconError !== faviconSrc ? (
              <img
                alt=""
                className="size-6 rounded-2xs object-contain"
                draggable={false}
                onError={() => setFaviconError(faviconSrc)}
                src={faviconSrc}
              />
            ) : (
              <WebsitePreviewFallbackIcon className="size-6" />
            )}
          </span>
        }
        title={title}
        titleTooltip={title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              <FormattedMessage
                id="localConversation.endResource.websiteSubtitle"
                defaultMessage="Website"
                description="Subtitle for a generated website preview resource card"
              />
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              {isBrowserUrl ? (
                <OpenInTargetsHoverSubtitle
                  cwd={cwd}
                  hostId={hostId}
                  href={resource.target}
                  openTarget={resolvedOpenTarget}
                  shouldLoadTargets={shouldLoadTargets}
                />
              ) : (
                <FormattedMessage
                  id="localConversation.endResource.openInCodexBrowserSubtitle"
                  defaultMessage="Open"
                  description="Hover subtitle for opening a website preview in the Codex browser"
                />
              )}
            </span>
          </>
        }
        trailing={
          <ResourceOverflowMenu
            copyLink={copyLink}
            cwd={cwd}
            hostId={hostId}
            isOpen={isMenuOpen}
            onOpenChange={setMenuOpen}
            onOpenInCodexBrowser={handleOpenInCodexBrowser}
            openPath={resource.target}
          />
        }
      />
    </div>
  );
}

export function getGoogleResourceSubtitle(
  resourceKind: GoogleResourceKind,
): ReactElement | undefined {
  switch (resourceKind) {
    case "document":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleDocsSubtitle"
          defaultMessage="Google Docs"
          description="Subtitle for a Google Docs conversation resource card"
        />
      );
    case "spreadsheet":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleSheetsSubtitle"
          defaultMessage="Google Sheets"
          description="Subtitle for a Google Sheets conversation resource card"
        />
      );
    case "presentation":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleSlidesSubtitle"
          defaultMessage="Google Slides"
          description="Subtitle for a Google Slides conversation resource card"
        />
      );
    case "drive":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleDriveSubtitle"
          defaultMessage="Drive"
          description="Subtitle for a Google Drive conversation resource card"
        />
      );
  }
}

export interface GoogleDriveResource {
  type: "google-drive";
  url: string;
  title: string;
  resourceKind: GoogleResourceKind;
}

export interface GoogleDriveEndResourceCardProps {
  analyticsContext: {
    threadId: string;
    turnId: string | null;
    inputMessageId: string | null;
    messageId: string | null;
  };
  conversationId: string;
  hostId: string;
  resource: GoogleDriveResource;
}

export function GoogleDriveEndResourceCard({
  analyticsContext,
  conversationId,
  hostId,
  resource,
}: GoogleDriveEndResourceCardProps) {
  const intl = useIntl();
  const productLogger = useProductLogger();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const openTarget = useOpenTarget({
    href: resource.url,
    openTargetIntent: "default",
  });
  const handleClick = (event: React.MouseEvent) => {
    trackGoogleWorkspaceResourceClick({
      clickAction:
        analyticsClickAction.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_OPEN_EXISTING_RESOURCE,
      clickSource:
        analyticsClickSource.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD,
      context: analyticsContext,
      productLogger,
      resourceKind: resource.resourceKind,
    });
    handleOpenResourceLink({
      event,
      href: resource.url,
      originHostId: hostId,
      initiator: "mcp_app_resource",
      openTarget,
    });
  };
  const handleOpenInCodexBrowser = () => {
    trackOpenInCodexBrowser({
      conversationId,
      url: resource.url,
      source: "manual",
      initiator: "mcp_app_resource",
    });
  };
  const showTargetsOnHover = () => {
    setShouldLoadTargets(true);
  };
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openGoogleDriveResource",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a Google Drive conversation resource card",
          },
          { title: resource.title },
        )}
        className={OVERLAY_BUTTON_CLASS_NAME}
        onClick={handleClick}
        onFocus={showTargetsOnHover}
        onMouseEnter={showTargetsOnHover}
        type="button"
      />
      <ThreadResourceCardHeader
        className={headerClassName(isMenuOpen)}
        icon={
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
            <GoogleResourceKindIcon
              className="size-6"
              resourceKind={resource.resourceKind}
            />
          </span>
        }
        title={resource.title}
        titleTooltip={resource.title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              {getGoogleResourceSubtitle(resource.resourceKind)}
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              <OpenInTargetsHoverSubtitle
                cwd={null}
                hostId={hostId}
                href={resource.url}
                openTarget={openTarget}
                shouldLoadTargets={shouldLoadTargets}
              />
            </span>
          </>
        }
        trailing={
          <ResourceOverflowMenu
            copyLink={resource.url}
            cwd={null}
            hostId={hostId}
            isOpen={isMenuOpen}
            onOpenChange={setMenuOpen}
            onOpenInCodexBrowser={handleOpenInCodexBrowser}
            openPath={resource.url}
          />
        }
      />
    </div>
  );
}

export type EndResource =
  | ({ type: "file"; path: string } & Record<string, unknown>)
  | GoogleDriveResource
  | AppgenSiteResource
  | WebsiteResource;

export interface EndResourcesListProps {
  turnId?: string;
  conversationId: string;
  cwd: string | null;
  hostId: string;
  inputMessageId?: string | null;
  messageId?: string | null;
  onFileOpen?: (path: string) => void;
  resources: EndResource[];
}

export function EndResourcesList({
  turnId,
  conversationId,
  cwd,
  hostId,
  inputMessageId,
  messageId,
  onFileOpen,
  resources,
}: EndResourcesListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleResources = isExpanded
    ? resources
    : resources.slice(0, MAX_VISIBLE_RESOURCES);
  const hiddenCount = resources.length - visibleResources.length;
  if (resources.length === 0) {
    return null;
  }
  const renderResource = (resource: EndResource): ReactElement | undefined => {
    switch (resource.type) {
      case "file":
        return (
          <FileEndResourceCard
            key={resource.path}
            turnId={turnId}
            conversationId={conversationId}
            cwd={cwd}
            hostId={hostId}
            inputMessageId={inputMessageId}
            messageId={messageId}
            onOpen={() => {
              onFileOpen?.(resource.path);
            }}
            path={resource.path}
          />
        );
      case "google-drive":
        return (
          <GoogleDriveEndResourceCard
            key={resource.url}
            conversationId={conversationId}
            hostId={hostId}
            analyticsContext={{
              threadId: conversationId,
              turnId: turnId ?? null,
              inputMessageId: inputMessageId ?? null,
              messageId: messageId ?? null,
            }}
            resource={resource}
          />
        );
      case "appgen-app":
        return (
          <AppgenSiteEndResourceCard
            key={resource.url}
            conversationId={conversationId}
            cwd={cwd}
            hostId={hostId}
            resource={resource}
          />
        );
      case "website":
        return (
          <WebsiteEndResourceCard
            key={resource.target}
            cwd={cwd}
            hostId={hostId}
            resource={resource}
          />
        );
    }
  };
  return (
    <ThreadResourceCard className="divide-y divide-token-border">
      {visibleResources.map(renderResource)}
      {hiddenCount > 0 ? (
        <ThreadResourceCardExpandButton
          isExpanded={false}
          onClick={() => setIsExpanded(true)}
        >
          <FormattedMessage
            id="localConversation.endResource.showMore"
            defaultMessage="Show {count, number} more"
            description="Button label that expands hidden conversation resource rows"
            values={{ count: hiddenCount }}
          />
        </ThreadResourceCardExpandButton>
      ) : null}
    </ThreadResourceCard>
  );
}

export function isNativeSystemDefaultTarget(event: {
  target: string;
  appPath?: string | null;
  kind?: string;
}): boolean {
  return (
    event.target === "systemDefault" &&
    event.appPath != null &&
    event.kind === "native"
  );
}
