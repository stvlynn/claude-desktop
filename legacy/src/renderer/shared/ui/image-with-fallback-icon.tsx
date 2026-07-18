// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js
// Shared UI: image with a globe fallback icon shown while loading or on error.

import { useState } from "react";
import { classNames } from "../lib/class-names";
import { GlobeIcon } from "../icons/globe-icon";

export type ImageWithFallbackIconProps = {
  className?: string;
  showFallbackWhileLoading?: boolean;
  src: string;
};

export function ImageWithFallbackIcon({
  className,
  showFallbackWhileLoading = true,
  src,
}: ImageWithFallbackIconProps): JSX.Element {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const showFallback =
    failedSrc === src || (showFallbackWhileLoading && loadedSrc !== src);
  const showImage = failedSrc !== src;

  return (
    <span
      className={classNames(
        "relative flex shrink-0 items-center justify-center",
        className,
      )}
    >
      {showFallback ? (
        <GlobeIcon aria-hidden={true} className="h-full w-full" />
      ) : null}
      {showImage ? (
        <img
          alt=""
          className={classNames(
            "absolute h-full w-full rounded-2xs object-contain",
            loadedSrc === src ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onError={() => {
            setFailedSrc(src);
          }}
          onLoad={() => {
            setLoadedSrc(src);
          }}
          referrerPolicy="no-referrer"
          src={src}
        />
      ) : null}
    </span>
  );
}

export default ImageWithFallbackIcon;
