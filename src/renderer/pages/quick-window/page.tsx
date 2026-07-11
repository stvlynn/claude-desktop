// @ts-nocheck
// Restored from ref/.vite/renderer/quick_window/assets/main-CMY67unU.js

import {
  type ChangeEvent,
  type CSSProperties,
  type DragEvent,
  type KeyboardEvent,
  type WheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIntl } from "react-intl";
import { getQuickWindowApi } from "../../shared/api/claude-desktop-api";
import { ClaudeLogo } from "../../shared/icons/claude-logo";

const MAX_PROMPT_LENGTH = 16384;
const REQUEST_SKOOCH_DELAY_MS = 750;
const MIN_INPUT_HEIGHT_PX = 24;
const MAX_WINDOW_PADDING_PX = 100;
const SINGLE_LINE_PADDING_PX = 8;
const SCROLLING_PADDING_PX = 22;

type ElectronRegionStyle = CSSProperties & {
  WebkitAppRegion?: "drag" | "no-drag";
};

function resizePromptInput(textarea: HTMLTextAreaElement) {
  textarea.style.height = `${MIN_INPUT_HEIGHT_PX}px`;

  const nextHeight = Math.min(
    textarea.scrollHeight,
    window.innerHeight - MAX_WINDOW_PADDING_PX,
  );
  const isScrollable = textarea.scrollHeight > nextHeight;

  textarea.style.height = `${nextHeight}px`;
  textarea.style.overflowY = isScrollable ? "auto" : "hidden";
  textarea.style.paddingTop = `${
    isScrollable ? SCROLLING_PADDING_PX : SINGLE_LINE_PADDING_PX
  }px`;
  textarea.style.paddingBottom = `${
    isScrollable ? SCROLLING_PADDING_PX : SINGLE_LINE_PADDING_PX
  }px`;
}

export function QuickWindowPage() {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const skoochTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [prompt, setPrompt] = useState("");

  const requestSkooch = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    void getQuickWindowApi()?.requestSkooch?.(
      container.scrollWidth,
      container.scrollHeight,
    );
  }, []);

  const scheduleSkooch = useCallback(() => {
    if (skoochTimerRef.current) {
      clearTimeout(skoochTimerRef.current);
    }

    skoochTimerRef.current = setTimeout(() => {
      skoochTimerRef.current = undefined;
      requestSkooch();
    }, REQUEST_SKOOCH_DELAY_MS);
  }, [requestSkooch]);

  const resizeInput = useCallback(() => {
    if (inputRef.current) {
      resizePromptInput(inputRef.current);
    }
  }, []);

  const dismissWithPrompt = useCallback((nextPrompt: string | null) => {
    void getQuickWindowApi()?.requestDismiss?.(nextPrompt);
  }, []);

  const handlePromptChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setPrompt(event.target.value);
      resizePromptInput(event.target);
      scheduleSkooch();
    },
    [scheduleSkooch],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key !== "Enter" || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      dismissWithPrompt(prompt);
      setPrompt("");

      requestAnimationFrame(resizeInput);
    },
    [dismissWithPrompt, prompt, resizeInput],
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Escape") {
        dismissWithPrompt(null);
      }
    },
    [dismissWithPrompt],
  );

  const handleBodyClick = useCallback(
    (event: MouseEvent) => {
      const container = containerRef.current;

      if (
        container &&
        event.target instanceof Node &&
        container.contains(event.target)
      ) {
        return;
      }

      inputRef.current?.focus();
      dismissWithPrompt(null);
    },
    [dismissWithPrompt],
  );

  const handleWheel = useCallback((event: WheelEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;

    if (textarea.scrollHeight <= textarea.clientHeight) {
      return;
    }

    event.preventDefault();
    textarea.scrollTop += event.deltaY;
  }, []);

  const blockDrag = useCallback((event: DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "none";
      event.dataTransfer.dropEffect = "none";
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [handleBodyClick]);

  useEffect(() => {
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      clearTimeout(focusTimer);

      if (skoochTimerRef.current) {
        clearTimeout(skoochTimerRef.current);
      }
    };
  }, []);

  const containerStyle: ElectronRegionStyle = {
    WebkitAppRegion: "drag",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(245, 245, 250, 0.95))",
    borderRadius: 16,
    boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.2)",
    fontFamily:
      '"Anthropic Sans", -apple-system, BlinkMacSystemFont, sans-serif',
  };

  const inputStyle: ElectronRegionStyle = {
    WebkitAppRegion: "no-drag",
    background: "transparent",
    boxShadow: "none",
    boxSizing: "border-box",
    color: "var(--claude-foreground-color)",
    fontFamily:
      '"Anthropic Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    height: 40,
    lineHeight: "150%",
    marginLeft: -8,
    marginRight: 22,
    minHeight: MIN_INPUT_HEIGHT_PX,
    overflowY: "hidden",
    padding: SINGLE_LINE_PADDING_PX,
  };

  return (
    <div
      ref={containerRef}
      className="container flex flex-row items-start relative"
      style={containerStyle}
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <ClaudeLogo width={18} height={18} />
      </div>
      <div className="flex flex-1 flex-row items-center min-h-14">
        <textarea
          ref={inputRef}
          id="prompt-input"
          className="block flex-auto w-full border-none outline-none resize-none"
          value={prompt}
          maxLength={MAX_PROMPT_LENGTH}
          placeholder={intl.formatMessage({
            defaultMessage: "What can I help you with today?",
            description: "Placeholder text for the prompt input",
            id: "S3MXlbjkax",
          })}
          style={inputStyle}
          onChange={handlePromptChange}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onWheel={handleWheel}
          onDragEnter={blockDrag}
          onDragOver={blockDrag}
          onDragLeave={blockDrag}
          onDrop={blockDrag}
        />
      </div>
    </div>
  );
}

export default QuickWindowPage;
