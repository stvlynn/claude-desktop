// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Gallery of assistant-generated images with a responsive carousel and full-screen preview.
import React, { useState } from "react";
import { classNames } from "../../utils/class-names";
import { useIntl } from "../../vendor/react-intl";
import type { IntlShape } from "../../vendor/react-intl";
import { ImagesIcon } from "../../icons/images-icon";
import { Button } from "../../ui/button";
import { useResizeObserverRef } from "../../utils/use-resize-observer";
import { openImagePreviewTab } from "../../image-side-panel/open-image-preview-tab";
import type { ImageAssetResolver } from "../../image-side-panel/use-image-asset-download";
import {
  ChevronDownIcon,
  ImagePreviewLightbox,
  conversationTitleAtom,
  threadAtomScope as threadScope,
  useResolvedImageSrc,
  useScopedAtomValue,
  useStore,
} from "../../boundaries/onboarding-commons-externals.facade";

const TRANSPARENT_GIF_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const OVERLAY_PILL_CLASS_NAMES =
  "rounded-full bg-black/45 font-medium text-white shadow-sm backdrop-blur-[12px]";

const IMAGE_GAP_PX = 8;
const MAX_VISIBLE_IMAGES = 4;

export type GeneratedImage = {
  id: string;
  src?: string | null;
  previewSrc?: string | null;
  width?: number | null;
  height?: number | null;
};

type SidePanelImage = {
  alt: string;
  id: string;
  previewSrc: string;
  src: string;
  tabTitle: string;
};

type GalleryLayout = {
  heightPx: number;
  aspectRatio: "natural" | "square";
  maxStartIndex: number;
  overflowCount: number;
  visibleCount: number;
};

function computeGalleryLayout({
  containerWidthPx,
  imageAspectRatios,
}: {
  containerWidthPx: number | null;
  imageAspectRatios: number[];
}): GalleryLayout {
  const count = imageAspectRatios.length;
  const singleAspectRatio = count === 1 ? imageAspectRatios[0] : null;
  let heightPx = 0;
  if (containerWidthPx != null) {
    heightPx =
      singleAspectRatio == null
        ? Math.max((containerWidthPx - 24) / MAX_VISIBLE_IMAGES, 0)
        : containerWidthPx / singleAspectRatio;
  }
  const naturalWidth =
    imageAspectRatios.reduce(
      (total, aspectRatio) => total + aspectRatio * heightPx,
      0,
    ) +
    Math.max(count - 1, 0) * IMAGE_GAP_PX;
  if (containerWidthPx == null || naturalWidth <= containerWidthPx) {
    return {
      heightPx,
      aspectRatio: "natural",
      maxStartIndex: 0,
      overflowCount: 0,
      visibleCount: count,
    };
  }
  const visibleCount = Math.min(count, MAX_VISIBLE_IMAGES);
  const overflowCount = Math.max(count - visibleCount, 0);
  return {
    heightPx,
    aspectRatio: "square",
    maxStartIndex: overflowCount,
    overflowCount,
    visibleCount,
  };
}

function aspectRatioFromDimensions(image: {
  width?: number | null;
  height?: number | null;
}): number | null {
  if (
    image.width == null ||
    image.height == null ||
    image.width <= 0 ||
    image.height <= 0
  ) {
    return null;
  }
  return image.width / image.height;
}

function formatGeneratedImageAlt(intl: IntlShape, imageNumber: number): string {
  return intl.formatMessage(
    {
      id: "codex.localConversation.generatedImage",
      defaultMessage: "Generated image {imageNumber}",
      description:
        "Alt text for an assistant-generated image shown in the final response",
    },
    { imageNumber },
  );
}

export type GeneratedImageGalleryProps = {
  images: GeneratedImage[];
  conversationImages?: GeneratedImage[];
  conversationId: string;
  imageAssetResolver?: ImageAssetResolver;
};

export function GeneratedImageGallery(props: GeneratedImageGalleryProps) {
  const { images, conversationImages, conversationId, imageAssetResolver } =
    props;
  const sidePanelSource =
    conversationImages === undefined ? images : conversationImages;
  const intl = useIntl();
  const conversationTitle = useScopedAtomValue(
    conversationTitleAtom,
    conversationId,
  );
  const [openImageId, setOpenImageId] = useState<string | null>(null);
  const [containerWidthPx, setContainerWidthPx] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [measuredAspectRatios, setMeasuredAspectRatios] = useState<
    Record<string, number>
  >({});

  const openIndex = images.findIndex((image) => image.id === openImageId);
  const openImage = openIndex === -1 ? null : images[openIndex];
  const previousImage = openIndex > 0 ? images[openIndex - 1] : null;
  const nextImage = openIndex >= 0 ? images[openIndex + 1] : null;

  const layout = computeGalleryLayout({
    containerWidthPx,
    imageAspectRatios: images.map(
      (image) =>
        measuredAspectRatios[image.id] ?? aspectRatioFromDimensions(image) ?? 1,
    ),
  });

  const clampedStartIndex = Math.min(startIndex, layout.maxStartIndex);
  const canGoToPreviousImages = clampedStartIndex > 0;
  const canGoToNextImages = clampedStartIndex < layout.maxStartIndex;
  const translateOffsetPx =
    clampedStartIndex * (layout.heightPx + IMAGE_GAP_PX);

  const containerRef = useResizeObserverRef((entry: ResizeObserverEntry) => {
    const nextWidth = Math.floor(entry.contentRect.width);
    setContainerWidthPx((current) =>
      current === nextWidth ? current : nextWidth,
    );
  });

  const sidePanelImages: SidePanelImage[] = sidePanelSource.map(
    (image, index) => {
      const imageNumber = index + 1;
      return {
        alt: formatGeneratedImageAlt(intl, imageNumber),
        id: image.id,
        previewSrc: image.previewSrc ?? image.src ?? "",
        src: image.src ?? image.previewSrc ?? "",
        tabTitle:
          conversationTitle == null
            ? formatGeneratedImageAlt(intl, imageNumber)
            : intl.formatMessage(
                {
                  id: "codex.localConversation.generatedImageTabTitle",
                  defaultMessage:
                    "{conversationTitle} - Generated image {imageNumber}",
                  description:
                    "Title for a generated image preview tab, prefixed by the conversation title",
                },
                { conversationTitle, imageNumber },
              ),
      };
    },
  );

  const handleAspectRatioChange = (id: string, aspectRatio: number) => {
    setMeasuredAspectRatios((current) =>
      current[id] === aspectRatio ? current : { ...current, [id]: aspectRatio },
    );
  };

  const singleImageWidthClass = images.length === 1 && "w-full max-w-[400px]";
  const containerClassName = classNames(
    "group/generated-image-gallery-controls relative overflow-hidden",
    singleImageWidthClass,
  );
  const containerStyle = { height: layout.heightPx };
  const trackStyle = {
    height: layout.heightPx,
    transform:
      layout.aspectRatio === "square"
        ? `translateX(-${translateOffsetPx}px)`
        : undefined,
  };

  const imageButtons = images.map((image, index) => {
    const hiddenInCarousel =
      layout.aspectRatio === "square" &&
      (index < clampedStartIndex ||
        index >= clampedStartIndex + layout.visibleCount);
    return (
      <div key={image.id} className="relative shrink-0">
        <GeneratedImagePreviewButton
          fullSrc={image.src ?? image.previewSrc ?? ""}
          src={image.previewSrc ?? image.src ?? ""}
          conversationId={conversationId}
          heightPx={layout.heightPx}
          imageAssetResolver={imageAssetResolver}
          imageNumber={index + 1}
          intrinsicHeight={image.height ?? null}
          intrinsicWidth={image.width ?? null}
          imageAspectRatio={aspectRatioFromDimensions(image)}
          square={layout.aspectRatio === "square"}
          hiddenInCarousel={hiddenInCarousel}
          sidePanelImages={sidePanelImages}
          sidePanelImageId={image.id}
          onAspectRatioChange={(aspectRatio) => {
            handleAspectRatioChange(image.id, aspectRatio);
          }}
          onOpenPreview={() => {
            setOpenImageId(image.id);
          }}
        />
      </div>
    );
  });

  const track = (
    <div
      className="flex gap-2 transition-transform duration-200 ease-out motion-reduce:transition-none"
      style={trackStyle}
    >
      {imageButtons}
    </div>
  );

  const overflowControls =
    layout.aspectRatio === "square" && layout.overflowCount > 0 ? (
      <GalleryOverflowControls
        overflowCount={layout.overflowCount}
        canGoToPreviousImages={canGoToPreviousImages}
        canGoToNextImages={canGoToNextImages}
        onPreviousImages={() => {
          setStartIndex(Math.max(clampedStartIndex - 1, 0));
        }}
        onNextImages={() => {
          setStartIndex(Math.min(clampedStartIndex + 1, layout.maxStartIndex));
        }}
      />
    ) : null;

  const galleryElement = (
    <div
      ref={containerRef}
      className={containerClassName}
      data-testid="generated-image-gallery"
      style={containerStyle}
    >
      {track}
      {overflowControls}
    </div>
  );

  const previewDialog =
    openImage == null ? null : (
      <GeneratedImagePreviewDialog
        src={openImage.src ?? openImage.previewSrc ?? ""}
        conversationId={conversationId}
        imageAssetResolver={imageAssetResolver}
        imageNumber={openIndex + 1}
        open
        onOpenChange={(open) => {
          if (!open) setOpenImageId(null);
        }}
        onPreviousImage={
          previousImage == null
            ? undefined
            : () => {
                setOpenImageId(previousImage.id);
              }
        }
        onNextImage={
          nextImage == null
            ? undefined
            : () => {
                setOpenImageId(nextImage.id);
              }
        }
      />
    );

  return (
    <>
      {galleryElement}
      {previewDialog}
    </>
  );
}

type GeneratedImagePreviewButtonProps = {
  fullSrc: string;
  src: string;
  conversationId: string;
  heightPx: number;
  imageAssetResolver?: ImageAssetResolver;
  imageNumber: number;
  intrinsicHeight: number | null;
  intrinsicWidth: number | null;
  imageAspectRatio: number | null;
  square: boolean;
  hiddenInCarousel: boolean;
  sidePanelImages: SidePanelImage[];
  sidePanelImageId: string;
  onAspectRatioChange: (aspectRatio: number) => void;
  onOpenPreview: () => void;
};

export function GeneratedImagePreviewButton(
  props: GeneratedImagePreviewButtonProps,
) {
  const {
    fullSrc,
    src,
    conversationId,
    heightPx,
    imageAssetResolver,
    imageNumber,
    intrinsicHeight,
    intrinsicWidth,
    imageAspectRatio,
    square,
    hiddenInCarousel,
    sidePanelImages,
    sidePanelImageId,
    onAspectRatioChange,
    onOpenPreview,
  } = props;
  const intl = useIntl();
  const store = useStore(threadScope);

  const { previewSrc } = useResolvedImageSrc({
    src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  const { previewSrc: fullPreviewSrc, downloadSrc } = useResolvedImageSrc({
    src: fullSrc,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });

  const altText = formatGeneratedImageAlt(intl, imageNumber);
  const aspectWidthPx =
    square || imageAspectRatio == null
      ? undefined
      : imageAspectRatio * heightPx;
  const hasIntrinsicSize =
    intrinsicWidth != null &&
    intrinsicHeight != null &&
    intrinsicWidth > 0 &&
    intrinsicHeight > 0;

  if (previewSrc == null) {
    const placeholderWidth = aspectWidthPx ?? heightPx;
    return (
      <div
        className="generated-image-placeholder-pulse shrink-0 rounded-[16px]"
        style={{ height: heightPx, width: placeholderWidth }}
      />
    );
  }

  const imageWidth = square ? heightPx : aspectWidthPx;
  const buttonStyle = { height: heightPx, width: imageWidth };
  const tabIndex = hiddenInCarousel ? -1 : undefined;

  const handleClick = () => {
    const opened = openImagePreviewTab(store, {
      alt: altText,
      attachmentSrc: fullSrc,
      downloadSrc: downloadSrc ?? fullPreviewSrc ?? previewSrc,
      generatedImages: sidePanelImages,
      imageAssetResolver,
      initialImageId: sidePanelImageId,
      referrerPolicy: "no-referrer",
      src: fullPreviewSrc ?? previewSrc,
      title:
        sidePanelImages.find((item) => item.id === sidePanelImageId)
          ?.tabTitle ?? formatGeneratedImageAlt(intl, imageNumber),
    });
    if (!opened) onOpenPreview();
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth <= 0 || naturalHeight <= 0) return;
    if (imageAspectRatio == null) {
      onAspectRatioChange(naturalWidth / naturalHeight);
    }
  };

  const imageClassName = classNames(
    "block h-full",
    square ? "w-full object-cover" : "w-auto object-contain",
  );

  return (
    <button
      type="button"
      className="shrink-0 cursor-interaction overflow-hidden rounded-[16px] bg-token-main-surface-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
      data-testid="generated-image-preview"
      style={buttonStyle}
      aria-label={altText}
      aria-hidden={hiddenInCarousel}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      <img
        src={previewSrc}
        alt={altText}
        width={hasIntrinsicSize ? (intrinsicWidth ?? undefined) : undefined}
        height={hasIntrinsicSize ? (intrinsicHeight ?? undefined) : undefined}
        className={imageClassName}
        referrerPolicy="no-referrer"
        onLoad={handleImageLoad}
      />
    </button>
  );
}

type GalleryOverflowControlsProps = {
  overflowCount: number;
  canGoToPreviousImages: boolean;
  canGoToNextImages: boolean;
  onPreviousImages: () => void;
  onNextImages: () => void;
};

function blurOnPointerUp(event: React.PointerEvent<HTMLButtonElement>) {
  event.currentTarget.blur();
}

function GalleryOverflowControls(props: GalleryOverflowControlsProps) {
  const {
    overflowCount,
    canGoToPreviousImages,
    canGoToNextImages,
    onPreviousImages,
    onNextImages,
  } = props;
  const intl = useIntl();
  const previousImagesLabel = intl.formatMessage({
    id: "codex.localConversation.generatedImageGallery.previousImages",
    defaultMessage: "Previous images",
    description: "Aria label for moving the generated image carousel backward",
  });
  const nextImagesLabel = intl.formatMessage({
    id: "codex.localConversation.generatedImageGallery.nextImages",
    defaultMessage: "Next images",
    description: "Aria label for moving the generated image carousel forward",
  });

  const overflowBadgeClassName = classNames(
    "pointer-events-none absolute right-2 bottom-2 inline-flex h-6 items-center gap-0.5 pr-2 pl-1.5 text-sm leading-none group-focus-within/generated-image-gallery-controls:opacity-0 group-hover/generated-image-gallery-controls:opacity-0",
    OVERLAY_PILL_CLASS_NAMES,
  );
  const overflowBadge = (
    <div className={overflowBadgeClassName}>
      <ImagesIcon className="size-4 shrink-0" />
      <span className="tabular-nums">{overflowCount}</span>
    </div>
  );

  const navButtonClassName = classNames(
    "size-6 !rounded-full !bg-black/45 !p-0 !text-white enabled:hover:!bg-black/60 disabled:!bg-black/45 disabled:!text-white/45 disabled:opacity-100",
    OVERLAY_PILL_CLASS_NAMES,
  );

  const navControls = (
    <div className="pointer-events-none absolute right-2 bottom-2 z-10 flex items-center gap-1 opacity-0 group-focus-within/generated-image-gallery-controls:pointer-events-auto group-focus-within/generated-image-gallery-controls:opacity-100 group-hover/generated-image-gallery-controls:pointer-events-auto group-hover/generated-image-gallery-controls:opacity-100">
      <Button
        color="secondary"
        size="icon"
        uniform
        className={navButtonClassName}
        aria-label={previousImagesLabel}
        disabled={!canGoToPreviousImages}
        onClick={onPreviousImages}
        onPointerUp={blurOnPointerUp}
      >
        <ChevronDownIcon className="size-4 rotate-90 [&_path]:[stroke-width:1.2px]" />
      </Button>
      <Button
        color="secondary"
        size="icon"
        uniform
        className={navButtonClassName}
        aria-label={nextImagesLabel}
        disabled={!canGoToNextImages}
        onClick={onNextImages}
        onPointerUp={blurOnPointerUp}
      >
        <ChevronDownIcon className="size-4 -rotate-90 [&_path]:[stroke-width:1.2px]" />
      </Button>
    </div>
  );

  return (
    <>
      {overflowBadge}
      {navControls}
    </>
  );
}

type GeneratedImagePreviewDialogProps = {
  src: string;
  conversationId: string;
  imageAssetResolver?: ImageAssetResolver;
  imageNumber: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNextImage?: () => void;
  onPreviousImage?: () => void;
};

export function GeneratedImagePreviewDialog(
  props: GeneratedImagePreviewDialogProps,
) {
  const {
    src,
    conversationId,
    imageAssetResolver,
    imageNumber,
    open,
    onOpenChange,
    onNextImage,
    onPreviousImage,
  } = props;
  const intl = useIntl();
  const { previewSrc, downloadSrc } = useResolvedImageSrc({
    src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: open,
  });
  const altText = formatGeneratedImageAlt(intl, imageNumber);
  const closeAriaLabel = intl.formatMessage({
    id: "codex.localConversation.closeGeneratedImagePreview",
    defaultMessage: "Close image preview",
    description:
      "Aria label for closing the image preview dialog for a generated image",
  });

  return (
    <ImagePreviewLightbox
      src={previewSrc ?? TRANSPARENT_GIF_DATA_URL}
      downloadSrc={downloadSrc ?? TRANSPARENT_GIF_DATA_URL}
      alt={altText}
      open={open}
      onOpenChange={onOpenChange}
      onNextImage={onNextImage}
      onPreviousImage={onPreviousImage}
      closeAriaLabel={closeAriaLabel}
      imageReferrerPolicy="no-referrer"
    />
  );
}
