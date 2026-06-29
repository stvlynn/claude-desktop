// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Leaf value editors for the browser design-tweaks editor: scrub-able numeric
// inputs, color/opacity/length fields, suggestion dropdowns, and the per-type router.
import {
  useRef,
  type ChangeEvent,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { ChevronIcon } from "../../icons/chevron-icon";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import {
  COLOR_INPUT_CLASS,
  INPUT_FRAME_CLASS,
  INPUT_TEXT_CLASS,
  INPUT_WIDTH_LG,
  INPUT_WIDTH_MD,
  INPUT_WIDTH_SM,
  NUMERIC_INPUT_CLASS,
  SCRUB_ACTIVATION_THRESHOLD,
  SCRUB_CURSOR,
  SCRUB_PIXELS_PER_STEP,
  type SuggestionOption,
} from "./design-editor-constants";
import {
  type DesignDeclaration,
  clamp,
  extractPixelValue,
  formatNumber,
  getDeclarationSuggestions,
  getPlaceholderValue,
  getPropertyLabel,
  humanizePropertyName,
  isColorProperty,
  isLengthLikeDeclaration,
  normalizeGapValue,
  parsePixelNumber,
  resolveScrubBaseValue,
  toHexColor,
} from "./design-editor-model";

type ScrubState = {
  hasScrubbed: boolean;
  lastValue: number;
  pointerId: number;
  previousBodyCursor: string;
  previousBodyOverscrollBehavior: string;
  previousBodyUserSelect: string;
  previousDocumentOverscrollBehavior: string;
  previousScrollContainerOverflowY: string;
  previousScrollContainerOverscrollBehavior: string;
  previousTargetCursor: string;
  scrollContainer: HTMLElement | null;
  startClientY: number;
  startValue: number;
};

export type DesignScrubInputProps = {
  ariaLabel?: string;
  className?: string;
  formatScrubValue?: (value: number) => string;
  inputMode?: "decimal";
  max?: string;
  min?: string;
  property: string;
  scrubMax?: number;
  scrubMin?: number;
  scrubStep?: number | null;
  scrubValue?: number | null;
  step?: string;
  title?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

export function DesignScrubInput({
  ariaLabel,
  className,
  formatScrubValue,
  inputMode,
  max,
  min,
  property,
  scrubMax,
  scrubMin,
  scrubStep,
  scrubValue,
  step,
  title,
  type,
  placeholder,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignScrubInputProps) {
  const scrubStateRef = useRef<ScrubState | null>(null);
  const suppressNextClickRef = useRef(false);

  const handlePointerDown = (event: PointerEvent<HTMLInputElement>) => {
    if (
      type !== "number" ||
      scrubStep == null ||
      scrubValue == null ||
      !Number.isFinite(scrubValue) ||
      event.button !== 0 ||
      !event.isPrimary ||
      event.pointerType === "touch"
    ) {
      return;
    }
    const { body, documentElement } = event.currentTarget.ownerDocument;
    const bodyStyle = body.style;
    const documentStyle = documentElement.style;
    const scrollContainer = event.currentTarget.closest<HTMLElement>(
      "[data-browser-sidebar-design-scroll-container]",
    );
    const previousTargetCursor = event.currentTarget.style.cursor;
    const previousBodyCursor = bodyStyle.cursor;
    const previousBodyOverscrollBehavior = bodyStyle.overscrollBehavior;
    const previousDocumentOverscrollBehavior = documentStyle.overscrollBehavior;
    const previousScrollContainerOverflowY =
      scrollContainer?.style.overflowY ?? "";
    const previousScrollContainerOverscrollBehavior =
      scrollContainer?.style.overscrollBehavior ?? "";
    event.preventDefault();
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.currentTarget.dataset.scrubbing = "true";
    event.currentTarget.style.cursor = SCRUB_CURSOR;
    bodyStyle.cursor = SCRUB_CURSOR;
    bodyStyle.overscrollBehavior = "none";
    documentStyle.overscrollBehavior = "none";
    if (scrollContainer != null) {
      scrollContainer.style.overflowY = "hidden";
      scrollContainer.style.overscrollBehavior = "none";
    }
    scrubStateRef.current = {
      hasScrubbed: false,
      lastValue: scrubValue,
      pointerId: event.pointerId,
      previousBodyCursor,
      previousBodyOverscrollBehavior,
      previousBodyUserSelect: bodyStyle.userSelect,
      previousDocumentOverscrollBehavior,
      previousScrollContainerOverflowY,
      previousScrollContainerOverscrollBehavior,
      previousTargetCursor,
      scrollContainer,
      startClientY: event.clientY,
      startValue: scrubValue,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLInputElement>) => {
    const scrub = scrubStateRef.current;
    if (
      scrub == null ||
      scrub.pointerId !== event.pointerId ||
      scrubStep == null ||
      formatScrubValue == null
    ) {
      return;
    }
    const deltaY = scrub.startClientY - event.clientY;
    event.preventDefault();
    if (!scrub.hasScrubbed && Math.abs(deltaY) < SCRUB_ACTIVATION_THRESHOLD) {
      return;
    }
    if (!scrub.hasScrubbed) {
      const bodyStyle = event.currentTarget.ownerDocument.body.style;
      bodyStyle.cursor = SCRUB_CURSOR;
      bodyStyle.userSelect = "none";
      scrub.hasScrubbed = true;
      onScrubActiveChange?.(property, event.currentTarget);
    }
    const steps = Math.trunc(deltaY / SCRUB_PIXELS_PER_STEP);
    const nextValue = clamp(
      scrub.startValue + steps * scrubStep,
      scrubMin,
      scrubMax,
    );
    if (nextValue === scrub.lastValue) {
      event.preventDefault();
      return;
    }
    scrub.lastValue = nextValue;
    event.preventDefault();
    onValueChange(formatScrubValue(nextValue));
  };

  const endScrub = (element: HTMLElement | null) => {
    const scrub = scrubStateRef.current;
    if (scrub == null) return;
    if (element != null) {
      const bodyStyle = element.ownerDocument.body.style;
      const documentStyle = element.ownerDocument.documentElement.style;
      bodyStyle.cursor = scrub.previousBodyCursor;
      bodyStyle.overscrollBehavior = scrub.previousBodyOverscrollBehavior;
      bodyStyle.userSelect = scrub.previousBodyUserSelect;
      documentStyle.overscrollBehavior =
        scrub.previousDocumentOverscrollBehavior;
      element.style.cursor = scrub.previousTargetCursor;
      delete element.dataset.scrubbing;
    }
    if (scrub.scrollContainer != null) {
      scrub.scrollContainer.style.overflowY =
        scrub.previousScrollContainerOverflowY;
      scrub.scrollContainer.style.overscrollBehavior =
        scrub.previousScrollContainerOverscrollBehavior;
    }
    if (scrub.hasScrubbed) {
      suppressNextClickRef.current = true;
      onScrubActiveChange?.(null, element);
    }
    scrubStateRef.current = null;
  };

  const handlePointerUp = (event: PointerEvent<HTMLInputElement>) => {
    const scrub = scrubStateRef.current;
    if (scrub == null || scrub.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (scrub.hasScrubbed) event.preventDefault();
    endScrub(event.currentTarget);
  };

  const handleLostPointerCapture = (event: PointerEvent<HTMLInputElement>) => {
    endScrub(event.currentTarget);
  };

  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (
      type === "number" &&
      event.currentTarget.ownerDocument.activeElement === event.currentTarget
    ) {
      event.currentTarget.blur();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      event.preventDefault();
    }
  };

  return (
    <input
      aria-label={ariaLabel}
      className={clsx(
        className,
        "touch-none cursor-text hover:cursor-ns-resize active:cursor-ns-resize",
      )}
      inputMode={inputMode}
      max={max}
      min={min}
      step={step}
      title={title}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onClick={handleClick}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
    />
  );
}

export type DesignPropertyLabelProps = {
  property: string;
  spacingAxisOnly?: boolean;
};

export function DesignPropertyLabel({
  property,
  spacingAxisOnly,
}: DesignPropertyLabelProps) {
  if (spacingAxisOnly === true) {
    if (property === "margin-top" || property === "padding-top") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.topSpacingProperty"
          defaultMessage="Top"
          description="Compact property label for top margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-bottom" || property === "padding-bottom") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.bottomSpacingProperty"
          defaultMessage="Bottom"
          description="Compact property label for bottom margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-left" || property === "padding-left") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.leftSpacingProperty"
          defaultMessage="Left"
          description="Compact property label for left margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-right" || property === "padding-right") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.rightSpacingProperty"
          defaultMessage="Right"
          description="Compact property label for right margin or padding in the in-app browser design edit card"
        />
      );
    }
  }
  switch (property) {
    case "color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.textColorProperty"
          defaultMessage="Text color"
          description="Property label for text color in the in-app browser design edit card"
        />
      );
    case "background-color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.backgroundProperty"
          defaultMessage="Background"
          description="Property label for background color in the in-app browser design edit card"
        />
      );
    case "font-family":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontProperty"
          defaultMessage="Font"
          description="Property label for font family in the in-app browser design edit card"
        />
      );
    case "font-size":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontSizeProperty"
          defaultMessage="Font size"
          description="Property label for font size in the in-app browser design edit card"
        />
      );
    case "font-weight":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontWeightProperty"
          defaultMessage="Font weight"
          description="Property label for font weight in the in-app browser design edit card"
        />
      );
    case "border-radius":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderRadiusProperty"
          defaultMessage="Border radius"
          description="Property label for border radius in the in-app browser design edit card"
        />
      );
    case "border-color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderColorProperty"
          defaultMessage="Border color"
          description="Property label for border color in the in-app browser design edit card"
        />
      );
    case "border-width":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderWidthProperty"
          defaultMessage="Border width"
          description="Property label for border width in the in-app browser design edit card"
        />
      );
    case "width":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.widthProperty"
          defaultMessage="Width"
          description="Property label for width in the in-app browser design edit card"
        />
      );
    case "height":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.heightProperty"
          defaultMessage="Height"
          description="Property label for height in the in-app browser design edit card"
        />
      );
    case "flex-direction":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.flexDirectionProperty"
          defaultMessage="Layout direction"
          description="Property label for flex direction in the in-app browser design edit card"
        />
      );
    case "justify-content":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.justifyContentProperty"
          defaultMessage="Distribution"
          description="Property label for justify-content in the in-app browser design edit card"
        />
      );
    case "align-items":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.alignItemsProperty"
          defaultMessage="Alignment"
          description="Property label for align-items in the in-app browser design edit card"
        />
      );
    case "gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.gapProperty"
          defaultMessage="Spacing"
          description="Property label for flex gap in the in-app browser design edit card"
        />
      );
    case "row-gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.rowGapProperty"
          defaultMessage="Vertical"
          description="Property label for row gap in the in-app browser design edit card"
        />
      );
    case "column-gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.columnGapProperty"
          defaultMessage="Horizontal"
          description="Property label for column gap in the in-app browser design edit card"
        />
      );
    case "padding":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.paddingProperty"
          defaultMessage="Padding"
          description="Property label for padding in the in-app browser design edit card"
        />
      );
    case "margin":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.marginProperty"
          defaultMessage="Margin"
          description="Property label for margin in the in-app browser design edit card"
        />
      );
    default:
      return <>{humanizePropertyName(property)}</>;
  }
}

type DesignColorInputProps = {
  isEdited: boolean;
  placeholderValue?: string;
  value: string;
  onValueChange: (value: string) => void;
};

function DesignColorInput({
  isEdited,
  placeholderValue,
  value,
  onValueChange,
}: DesignColorInputProps) {
  const colorValue = value || (placeholderValue ?? "");
  const hexValue = toHexColor(colorValue);
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_LG,
        "flex min-h-7 min-w-0 items-center gap-2 px-2",
      )}
    >
      <input
        className={clsx(
          COLOR_INPUT_CLASS,
          "h-5 w-5 shrink-0 cursor-interaction overflow-hidden rounded-md border border-token-border bg-transparent p-0",
        )}
        type="color"
        value={hexValue}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
      <input
        className={clsx(
          INPUT_TEXT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        value={value}
        placeholder={placeholderValue}
        title={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </span>
  );
}

type DesignOpacityInputProps = {
  ariaLabel: string;
  isEdited: boolean;
  placeholderValue?: string;
  property: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

function DesignOpacityInput({
  ariaLabel,
  isEdited,
  placeholderValue,
  property,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignOpacityInputProps) {
  const scrubValue = resolveScrubBaseValue(value, placeholderValue);
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_SM,
        "flex min-h-7 min-w-0 items-center px-3",
      )}
    >
      <DesignScrubInput
        ariaLabel={ariaLabel}
        className={clsx(
          INPUT_TEXT_CLASS,
          NUMERIC_INPUT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        inputMode="decimal"
        max="1"
        min="0"
        property={property}
        step="0.01"
        title={value}
        type="number"
        placeholder={placeholderValue}
        value={value}
        scrubMax={1}
        scrubMin={0}
        scrubStep={0.01}
        scrubValue={scrubValue}
        formatScrubValue={formatNumber}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    </span>
  );
}

type DesignLengthInputProps = {
  ariaLabel: string;
  isEdited: boolean;
  placeholderValue?: string;
  property: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

function DesignLengthInput({
  ariaLabel,
  isEdited,
  placeholderValue,
  property,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignLengthInputProps) {
  const pixelValue = extractPixelValue(value) ?? "";
  const placeholder =
    extractPixelValue(placeholderValue ?? "") ??
    normalizeGapValue(property, placeholderValue ?? value) ??
    undefined;
  const scrubValue =
    parsePixelNumber(value) ?? parsePixelNumber(placeholderValue ?? "") ?? 0;
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_SM,
        "flex min-h-7 min-w-0 items-center gap-1 px-3",
      )}
    >
      <DesignScrubInput
        ariaLabel={ariaLabel}
        className={clsx(
          INPUT_TEXT_CLASS,
          NUMERIC_INPUT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        inputMode="decimal"
        property={property}
        step="any"
        title={value}
        type="number"
        value={pixelValue}
        placeholder={placeholder}
        scrubStep={1}
        scrubValue={scrubValue}
        formatScrubValue={formatNumber}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={(nextValue) => {
          onValueChange(nextValue.length === 0 ? "" : `${nextValue}px`);
        }}
      />
      <span className="shrink-0 font-mono text-xs text-token-text-tertiary">
        <FormattedMessage
          id="browserSidebarDesignEditor.pixelUnit"
          defaultMessage="px"
          description="Pixel unit label shown beside numeric design edit fields"
        />
      </span>
    </span>
  );
}

type DesignSuggestionInputProps = {
  ariaLabel: string;
  compact?: boolean;
  isEdited: boolean;
  placeholderValue?: string;
  portalContainer?: HTMLElement | null;
  property: string;
  suggestions: SuggestionOption[];
  value: string;
  onValueChange: (value: string) => void;
};

function DesignSuggestionInput({
  ariaLabel,
  compact = false,
  isEdited,
  placeholderValue,
  portalContainer,
  property,
  suggestions,
  value,
  onValueChange,
}: DesignSuggestionInputProps) {
  const selected = suggestions.find((option) => option.value === value);
  if (property === "font-family") {
    return (
      <span
        className={clsx(
          INPUT_FRAME_CLASS,
          INPUT_WIDTH_MD,
          "flex min-h-7 min-w-0 items-center overflow-hidden",
        )}
      >
        <input
          aria-label={ariaLabel}
          className={clsx(
            INPUT_TEXT_CLASS,
            "h-7 min-w-0 flex-1 truncate px-3 text-left",
            !isEdited && "text-token-input-placeholder-foreground",
          )}
          value={value}
          placeholder={placeholderValue}
          title={value}
          onChange={(event) => {
            onValueChange(event.target.value);
          }}
        />
        <DropdownMenu
          align="end"
          contentWidth="sm"
          portalContainer={portalContainer}
          triggerButton={
            <button
              aria-label={ariaLabel}
              className="flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center border-l border-token-border-light text-token-text-tertiary hover:bg-token-list-hover-background"
              data-browser-sidebar-design-no-drag={true}
              type="button"
            >
              <ChevronIcon className="icon-2xs rotate-90" />
            </button>
          }
        >
          <Dropdown.Section className="flex max-h-[220px] flex-col overflow-y-auto">
            {suggestions.map((option) => (
              <Dropdown.Item
                key={`${option.label ?? option.value}-${option.value}`}
                RightIcon={option.value === value ? CheckMdIcon : undefined}
                onSelect={() => {
                  onValueChange(option.value);
                }}
              >
                {option.label ?? option.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Section>
        </DropdownMenu>
      </span>
    );
  }
  if (suggestions.length === 0) {
    return (
      <span
        className={clsx(
          INPUT_FRAME_CLASS,
          "flex min-h-7 w-full min-w-0 items-center px-3",
        )}
      >
        <input
          aria-label={ariaLabel}
          className={clsx(
            INPUT_TEXT_CLASS,
            "h-7 w-full truncate text-left",
            !isEdited && "text-token-input-placeholder-foreground",
          )}
          value={value}
          placeholder={placeholderValue}
          title={value}
          onChange={(event) => {
            onValueChange(event.target.value);
          }}
        />
      </span>
    );
  }
  const triggerLabel =
    selected?.label ?? (value.length === 0 ? placeholderValue : value);
  const displayLabel = selected?.label ?? (value || placeholderValue);
  return (
    <DropdownMenu
      align="end"
      contentWidth="sm"
      portalContainer={portalContainer}
      triggerButton={
        <button
          aria-label={ariaLabel}
          className={clsx(
            INPUT_FRAME_CLASS,
            compact ? INPUT_WIDTH_SM : INPUT_WIDTH_MD,
            "flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-left",
          )}
          title={triggerLabel}
          type="button"
        >
          <span
            className={clsx(
              "min-w-0 flex-1 truncate font-mono text-xs",
              isEdited
                ? "text-token-input-foreground"
                : "text-token-input-placeholder-foreground",
            )}
          >
            {displayLabel}
          </span>
          <ChevronIcon className="icon-2xs shrink-0 rotate-90 text-token-text-tertiary" />
        </button>
      }
    >
      <Dropdown.Section className="flex max-h-[220px] flex-col overflow-y-auto">
        {suggestions.map((option) => (
          <Dropdown.Item
            key={`${option.label ?? option.value}-${option.value}`}
            RightIcon={option.value === value ? CheckMdIcon : undefined}
            onSelect={() => {
              onValueChange(option.value);
            }}
          >
            {option.label ?? option.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Section>
    </DropdownMenu>
  );
}

export type DesignSpacingGridInputProps = {
  declarations: DesignDeclaration[];
  property: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (property: string, value: string) => void;
};

const SPACING_SIDE_ORDER = ["top", "right", "bottom", "left"] as const;

export function DesignSpacingGridInput({
  declarations,
  property,
  onScrubActiveChange,
  onValueChange,
}: DesignSpacingGridInputProps) {
  const intl = useIntl();
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        "-ml-6 grid min-h-7 w-[calc(100%+1.5rem)] grid-cols-4 overflow-hidden",
      )}
      data-browser-sidebar-design-scrub-value-cell={true}
    >
      {SPACING_SIDE_ORDER.map((side, index) => {
        const declaration = declarations.find(
          (item) => item.property === `${property}-${side}`,
        );
        if (declaration == null) {
          return (
            <span
              key={`${property}-${side}`}
              className={clsx(
                "flex min-h-7 items-center justify-center font-mono text-xs text-token-input-placeholder-foreground",
                index > 0 && "border-l border-token-border-light",
              )}
            />
          );
        }
        const pixelValue = extractPixelValue(declaration.value);
        const isNumeric = declaration.value.length === 0 || pixelValue != null;
        return (
          <DesignScrubInput
            key={declaration.property}
            ariaLabel={getPropertyLabel(intl, declaration.property)}
            className={clsx(
              INPUT_TEXT_CLASS,
              isNumeric && NUMERIC_INPUT_CLASS,
              "min-h-7 w-full px-1 text-center",
              index > 0 && "border-l border-token-border-light",
              declaration.value === declaration.previousValue &&
                "text-token-input-placeholder-foreground",
            )}
            inputMode={isNumeric ? "decimal" : undefined}
            property={declaration.property}
            formatScrubValue={formatNumber}
            scrubStep={isNumeric ? 1 : undefined}
            scrubValue={
              isNumeric
                ? (parsePixelNumber(declaration.value) ??
                  parsePixelNumber(declaration.placeholderValue ?? "") ??
                  0)
                : null
            }
            step={isNumeric ? "any" : undefined}
            title={declaration.value}
            type={isNumeric ? "number" : undefined}
            placeholder={
              extractPixelValue(declaration.placeholderValue ?? "") ??
              normalizeGapValue(
                declaration.property,
                declaration.placeholderValue ?? declaration.value,
              ) ??
              undefined
            }
            value={isNumeric ? (pixelValue ?? "") : declaration.value}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(nextValue) => {
              onValueChange(
                declaration.property,
                isNumeric && nextValue.length > 0
                  ? `${nextValue}px`
                  : nextValue,
              );
            }}
          />
        );
      })}
    </span>
  );
}

export type DesignFlexGapGridInputProps = {
  columnGap: DesignDeclaration;
  rowGap: DesignDeclaration;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (property: string, value: string) => void;
};

export function DesignFlexGapGridInput({
  columnGap,
  rowGap,
  onScrubActiveChange,
  onValueChange,
}: DesignFlexGapGridInputProps) {
  const intl = useIntl();
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        "grid min-h-7 w-full grid-cols-2 overflow-hidden",
      )}
      data-browser-sidebar-design-scrub-value-cell={true}
    >
      {[columnGap, rowGap].map((declaration, index) => {
        const pixelValue = extractPixelValue(declaration.value);
        const isNumeric =
          declaration.value.length === 0 ||
          pixelValue != null ||
          normalizeGapValue(declaration.property, declaration.value) != null;
        return (
          <DesignScrubInput
            key={declaration.property}
            ariaLabel={getPropertyLabel(intl, declaration.property)}
            className={clsx(
              INPUT_TEXT_CLASS,
              isNumeric && NUMERIC_INPUT_CLASS,
              "min-h-7 w-full px-1 text-center",
              index > 0 && "border-l border-token-border-light",
              declaration.value === declaration.previousValue &&
                "text-token-input-placeholder-foreground",
            )}
            formatScrubValue={formatNumber}
            inputMode={isNumeric ? "decimal" : undefined}
            property={declaration.property}
            scrubStep={isNumeric ? 1 : undefined}
            scrubValue={
              isNumeric
                ? (parsePixelNumber(declaration.value) ??
                  parsePixelNumber(declaration.placeholderValue ?? "") ??
                  Number(
                    normalizeGapValue(
                      declaration.property,
                      declaration.placeholderValue ?? declaration.value,
                    ) ?? "0",
                  ))
                : null
            }
            step={isNumeric ? "any" : undefined}
            title={declaration.value}
            type={isNumeric ? "number" : undefined}
            placeholder={
              extractPixelValue(declaration.placeholderValue ?? "") ??
              normalizeGapValue(
                declaration.property,
                declaration.placeholderValue ?? declaration.value,
              ) ??
              undefined
            }
            value={isNumeric ? (pixelValue ?? "") : declaration.value}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(nextValue) => {
              onValueChange(
                declaration.property,
                isNumeric && nextValue.length > 0
                  ? `${nextValue}px`
                  : nextValue,
              );
            }}
          />
        );
      })}
    </span>
  );
}

export type DesignDeclarationValueEditorProps = {
  declaration: DesignDeclaration;
  dropdownPortalContainer?: HTMLElement | null;
  isEdited: boolean;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

export function DesignDeclarationValueEditor({
  declaration,
  dropdownPortalContainer,
  isEdited,
  onScrubActiveChange,
  onValueChange,
}: DesignDeclarationValueEditorProps) {
  const intl = useIntl();
  const placeholderValue = getPlaceholderValue(declaration);
  if (isColorProperty(declaration.property)) {
    return (
      <DesignColorInput
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        value={declaration.value}
        onValueChange={onValueChange}
      />
    );
  }
  if (declaration.property === "opacity") {
    return (
      <DesignOpacityInput
        ariaLabel={getPropertyLabel(intl, declaration.property)}
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        property={declaration.property}
        value={declaration.value}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    );
  }
  if (isLengthLikeDeclaration(declaration)) {
    return (
      <DesignLengthInput
        ariaLabel={getPropertyLabel(intl, declaration.property)}
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        property={declaration.property}
        value={declaration.value}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    );
  }
  const isCompact =
    declaration.property === "font-family" ||
    declaration.property === "font-weight";
  return (
    <DesignSuggestionInput
      ariaLabel={getPropertyLabel(intl, declaration.property)}
      compact={isCompact}
      portalContainer={dropdownPortalContainer}
      property={declaration.property}
      suggestions={getDeclarationSuggestions(intl, declaration)}
      isEdited={isEdited}
      placeholderValue={placeholderValue}
      value={declaration.value}
      onValueChange={onValueChange}
    />
  );
}
