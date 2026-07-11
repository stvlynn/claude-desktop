// @ts-nocheck
// Restored from ref/webview/assets/diff-stats-BELN7TEd.js
// diff-stats-BELN7TEd chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { classNames } from "../lib/class-names";
type DiffStatsVariant = "color" | "monochrome";
type DiffStatRollingNumberVariant = "diff-stat" | "inline";
type DiffStatsProps = {
  className?: string;
  linesAdded: number;
  linesRemoved: number;
  variant?: DiffStatsVariant;
};
type DiffStatRollingNumberProps = {
  value: number;
  variant?: DiffStatRollingNumberVariant;
};
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const DIGIT_STACK_CLASS_NAMES: Record<string, string> = {
  0: "diff-stat-digit-stack-0",
  1: "diff-stat-digit-stack-1",
  2: "diff-stat-digit-stack-2",
  3: "diff-stat-digit-stack-3",
  4: "diff-stat-digit-stack-4",
  5: "diff-stat-digit-stack-5",
  6: "diff-stat-digit-stack-6",
  7: "diff-stat-digit-stack-7",
  8: "diff-stat-digit-stack-8",
  9: "diff-stat-digit-stack-9",
};
function DiffStatRollingNumber({
  value,
  variant = "diff-stat",
}: DiffStatRollingNumberProps) {
  const formattedValue = String(value);
  const characters = Array.from(formattedValue);
  let digitKeyIndex = characters.filter(isDigit).length;
  return (
    <span aria-label={formattedValue} className="diff-stat-rolling-number">
      {characters.map((character, index) =>
        isDigit(character) ? (
          <DiffStatDigit
            key={`digit-${--digitKeyIndex}`}
            digit={character}
            variant={variant}
          />
        ) : (
          <span
            key={`separator-${index}`}
            aria-hidden="true"
            className="diff-stat-number-separator"
          >
            {character}
          </span>
        ),
      )}
    </span>
  );
}
function DiffStats({
  linesAdded,
  linesRemoved,
  variant = "color",
  className,
}: DiffStatsProps) {
  return (
    <DiffStatsContainer
      className={className}
      addedContent={String(linesAdded)}
      removedContent={String(linesRemoved)}
      variant={variant}
    />
  );
}
function AnimatedDiffStats({
  linesAdded,
  linesRemoved,
  variant = "color",
  className,
}: DiffStatsProps) {
  return (
    <DiffStatsContainer
      className={className}
      addedContent={
        <DiffStatRollingNumber key="linesAdded" value={linesAdded} />
      }
      removedContent={
        <DiffStatRollingNumber key="linesRemoved" value={linesRemoved} />
      }
      variant={variant}
    />
  );
}
function DiffStatsContainer({
  addedContent,
  className,
  removedContent,
  variant,
}: {
  addedContent: ReactNode;
  className?: string;
  removedContent: ReactNode;
  variant: DiffStatsVariant;
}) {
  return (
    <span
      data-thread-find-skip={true}
      className={classNames(
        "inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight",
        className,
      )}
    >
      <span
        className={classNames(
          "flex shrink-0 items-center",
          getAddedClassName(variant),
        )}
      >
        +{addedContent}
      </span>
      <span
        className={classNames(
          "flex shrink-0 items-center",
          getRemovedClassName(variant),
        )}
      >
        -{removedContent}
      </span>
    </span>
  );
}
function DiffStatDigit({
  digit,
  variant,
}: {
  digit: string;
  variant: DiffStatRollingNumberVariant;
}) {
  return (
    <span
      aria-hidden="true"
      className={classNames(
        "diff-stat-digit-column",
        variant === "inline" && "diff-stat-digit-column-inline",
      )}
    >
      <span className="diff-stat-digit-clip">
        <span
          className={classNames(
            "diff-stat-digit-stack",
            DIGIT_STACK_CLASS_NAMES[digit],
          )}
        >
          {DIGITS.map((candidateDigit) => (
            <span key={candidateDigit}>{candidateDigit}</span>
          ))}
        </span>
      </span>
    </span>
  );
}
function getAddedClassName(variant: DiffStatsVariant) {
  return variant === "monochrome"
    ? "text-token-input-placeholder-foreground"
    : "text-token-git-decoration-added-resource-foreground";
}
function getRemovedClassName(variant: DiffStatsVariant) {
  return variant === "monochrome"
    ? "text-token-input-placeholder-foreground"
    : "text-token-git-decoration-deleted-resource-foreground";
}
function isDigit(value: string) {
  return value >= "0" && value <= "9";
}
export { DiffStatRollingNumber, DiffStats, AnimatedDiffStats };
