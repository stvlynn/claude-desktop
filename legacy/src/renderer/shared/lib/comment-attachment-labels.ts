// Restored from ref/webview/assets/comment-attachment-labels-BEv69mU6.js
// Plain-text formatting helpers for comment/annotation attachment labels.
// The original used react-intl plural formatting; this version uses simple
// English pluralization so it does not require the full i18n runtime.

type CommentAttachmentKind = "annotation" | "comment";

function formatCountWithPlural(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function formatCommentAttachmentCount(
  count: number,
  kind: CommentAttachmentKind,
) {
  switch (kind) {
    case "annotation":
      return formatCountWithPlural(count, "annotation", "annotations");
    case "comment":
      return formatCountWithPlural(count, "comment", "comments");
  }
}

export function formatCommentAttachmentSummary({
  annotationCount,
  commentCount,
  designTweakCount = 0,
}: {
  annotationCount: number;
  commentCount: number;
  designTweakCount?: number;
}) {
  const totalAnnotationCount = annotationCount + designTweakCount;
  return totalAnnotationCount > 0 && commentCount > 0
    ? `${formatCommentAttachmentCount(totalAnnotationCount, "annotation")}, ${formatCommentAttachmentCount(commentCount, "comment")}`
    : totalAnnotationCount > 0
      ? formatCommentAttachmentCount(totalAnnotationCount, "annotation")
      : commentCount > 0
        ? formatCommentAttachmentCount(commentCount, "comment")
        : "";
}

export function formatRemoveCommentAttachmentLabel(
  kind: CommentAttachmentKind,
) {
  switch (kind) {
    case "annotation":
      return "Remove annotations attachment";
    case "comment":
      return "Remove comments attachment";
  }
}

export function formatCommentAttachmentKindCount(
  kind: CommentAttachmentKind,
  count: number,
) {
  return formatCommentAttachmentCount(count, kind);
}
