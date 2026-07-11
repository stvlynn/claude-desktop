// @ts-nocheck
// Restored from ref/.vite/renderer/find_in_page/assets/FindInPage-BE9M4xe7.js

import {
  type ChangeEvent,
  type KeyboardEvent,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useIntl } from "react-intl";
import { getFindInPageApi } from "../../shared/api/claude-desktop-api";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CloseSquareIcon,
} from "../../shared/icons/find-in-page-icons";
import { classNames } from "../../shared/lib/class-names";

const MIN_SEARCH_LENGTH = 3;
const SEARCH_DEBOUNCE_MS = 250;
const RECENT_INPUT_FOCUS_MS = 400;

type SearchResultState = {
  activeIndex: number;
  total: number | null;
};

type FindBarIconButtonProps = {
  bordered?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function FindBarIconButton({
  bordered,
  children,
  className,
  ...buttonProps
}: FindBarIconButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "w-[30px] h-[30px] rounded-lg text-text-300 border flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none",
        bordered
          ? "border-border-300 hover:border-border-200"
          : "border-transparent hover:bg-bg-200",
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

type FindInputProps = {
  inputRef: RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDismissSearchRequest: () => void;
  onSearchNext: () => void;
  onSearchPrevious: () => void;
  value: string;
};

function FindInput({
  inputRef,
  onChange,
  onDismissSearchRequest,
  onSearchNext,
  onSearchPrevious,
  value,
}: FindInputProps) {
  const intl = useIntl();

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.shiftKey ? onSearchPrevious() : onSearchNext();
        return;
      }

      if (event.key === "Escape") {
        onDismissSearchRequest();
      }
    },
    [onDismissSearchRequest, onSearchNext, onSearchPrevious],
  );

  return (
    <input
      ref={inputRef}
      type="text"
      className="p-0 pl-1 w-full border-none outline-none focus:ring-0 text-text-200 bg-transparent placeholder:text-text-400 placeholder:opacity-70"
      placeholder={intl.formatMessage({
        id: "sNnRQsIEYz",
        defaultMessage: "Find in page",
        description:
          "Placeholder text shown in the search input field that allows users to search for text within the current page",
      })}
      value={value}
      onKeyUp={handleKeyUp}
      onChange={onChange}
    />
  );
}

export function FindInPage() {
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement>(null);
  const lastInputAtRef = useRef(0);
  const [query, setQuery] = useState("");
  const [resultState, setResultState] = useState<SearchResultState>({
    activeIndex: 0,
    total: null,
  });

  useEffect(() => {
    let focusTimer: ReturnType<typeof setTimeout> | undefined;

    const focusInputWhenVisible = () => {
      if (document.visibilityState !== "visible") {
        return;
      }

      const input = inputRef.current;
      if (!input || document.activeElement === input) {
        return;
      }

      if (focusTimer) {
        clearTimeout(focusTimer);
      }

      focusTimer = setTimeout(() => {
        focusTimer = undefined;
        const currentInput = inputRef.current;
        if (currentInput && document.activeElement !== currentInput) {
          currentInput.focus();
          currentInput.select();
        }
      }, 100);
    };

    document.addEventListener("visibilitychange", focusInputWhenVisible);
    window.addEventListener("focus", focusInputWhenVisible);

    return () => {
      if (focusTimer) {
        clearTimeout(focusTimer);
      }

      document.removeEventListener("visibilitychange", focusInputWhenVisible);
      window.removeEventListener("focus", focusInputWhenVisible);
    };
  }, []);

  useEffect(() => {
    const api = getFindInPageApi();

    if (query.length < MIN_SEARCH_LENGTH) {
      void api?.stopFindInPage?.().catch(() => {});
      setResultState({ activeIndex: 0, total: 0 });
      return;
    }

    const searchTimer = setTimeout(() => {
      void api
        ?.findInPage?.(query, { findNext: true })
        .then((result) => {
          setResultState({
            activeIndex: result?.activeIndex || 0,
            total: result?.total || 0,
          });
        })
        .catch(() => null);
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [query]);

  const stepToMatch = useCallback(
    async (forward: boolean) => {
      const api = getFindInPageApi();

      try {
        const result = await api?.findInPage?.(query, {
          findNext: false,
          forward,
        });

        setResultState({
          activeIndex: result?.activeIndex || 0,
          total: result?.total || 0,
        });
      } catch {}
    },
    [query],
  );

  useEffect(() => {
    return getFindInPageApi()?.onStepToMatch?.((forward) => {
      if (query.length >= MIN_SEARCH_LENGTH) {
        void stepToMatch(forward);
      }
    });
  }, [query, stepToMatch]);

  useEffect(() => {
    return getFindInPageApi()?.onFocusInput?.(() => {
      window.focus();
      inputRef.current?.focus();

      if (performance.now() - lastInputAtRef.current > RECENT_INPUT_FOCUS_MS) {
        inputRef.current?.select();
      }
    });
  }, []);

  useEffect(() => {
    return getFindInPageApi()?.onBlurInput?.(() => {
      inputRef.current?.blur();
    });
  }, []);

  const dismissFindSession = useCallback(() => {
    setTimeout(() => {
      setQuery("");
    }, 100);

    void getFindInPageApi()
      ?.endFindSession?.()
      .catch(() => {});
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      lastInputAtRef.current = performance.now();
      setQuery(event.target.value);
      setResultState((current) => ({ ...current, total: null }));
    },
    [],
  );

  const matchCountLabel = useMemo(() => {
    if (query.length >= MIN_SEARCH_LENGTH && resultState.total !== null) {
      return `${resultState.activeIndex}/${resultState.total}`;
    }

    return "";
  }, [query, resultState]);

  return (
    <div className="font-sans fixed inset-0 m-2 rounded-lg p-3 flex items-center gap-2 bg-bg-000 shadow-element">
      <div className="flex-1">
        <FindInput
          value={query}
          onChange={handleInputChange}
          onSearchNext={() => void stepToMatch(true)}
          onSearchPrevious={() => void stepToMatch(false)}
          onDismissSearchRequest={dismissFindSession}
          inputRef={inputRef}
        />
      </div>
      <span
        id="findInPageCount"
        role="status"
        className="text-xs text-nowrap text-text-500 tabular-nums select-none"
      >
        {matchCountLabel}
      </span>
      <FindBarIconButton
        onClick={() => void stepToMatch(false)}
        disabled={matchCountLabel === "" || resultState.activeIndex <= 1}
        aria-label={intl.formatMessage({
          id: "dxTrXnjtp0",
          defaultMessage: "Previous match",
          description:
            "Accessible label for the find-in-page button that jumps to the previous search match",
        })}
      >
        <ArrowUpIcon />
      </FindBarIconButton>
      <FindBarIconButton
        onClick={() => void stepToMatch(true)}
        disabled={
          matchCountLabel === "" ||
          !resultState.total ||
          resultState.activeIndex >= resultState.total
        }
        aria-label={intl.formatMessage({
          id: "lu0ZPQSzrk",
          defaultMessage: "Next match",
          description:
            "Accessible label for the find-in-page button that jumps to the next search match",
        })}
      >
        <ArrowDownIcon />
      </FindBarIconButton>
      <FindBarIconButton
        bordered
        onClick={dismissFindSession}
        aria-label={intl.formatMessage({
          id: "t0wMcoAvaD",
          defaultMessage: "Close find bar",
          description:
            "Accessible label for the button that closes the find-in-page bar",
        })}
      >
        <CloseSquareIcon />
      </FindBarIconButton>
    </div>
  );
}

export default FindInPage;
