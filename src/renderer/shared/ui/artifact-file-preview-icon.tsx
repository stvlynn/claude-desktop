// @ts-nocheck
// Restored from ref/webview/assets/artifact-file-preview-icon-tUwFASV6.js
// Artifact file preview icon restored from the Codex webview bundle.

import type { ComponentType, SVGProps } from "react";
import { classNames } from "../lib/class-names";
import { getFileIcon } from "../lib/get-file-icon";

type ArtifactFilePreviewIconProps = {
  path: string;
  iconClassName?: string;
  imageClassName?: string;
  getImagePreviewSrc?: (path: string) => string | null | undefined;
};

function ArtifactFilePreviewIcon({
  getImagePreviewSrc,
  iconClassName,
  imageClassName,
  path,
}: ArtifactFilePreviewIconProps) {
  const imagePreviewSrc = getImagePreviewSrc?.(path) ?? null;
  if (imagePreviewSrc != null) {
    return (
      <img
        alt=""
        className={classNames("shrink-0 object-cover", imageClassName)}
        src={imagePreviewSrc}
      />
    );
  }
  const Icon = getFileIcon(path) as ComponentType<SVGProps<SVGSVGElement>>;
  return <Icon className={classNames("shrink-0", iconClassName)} />;
}

export { ArtifactFilePreviewIcon };
