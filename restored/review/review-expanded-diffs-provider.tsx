// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Context provider + hook for the review "expand all diffs" toggle, persisting the
// user's choice under the "review" disclosure key.

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { usePersistedToggleSetter } from "../boundaries/onboarding-commons-externals.facade";

export interface ReviewExpandedDiffsContextValue {
  expandedDiffs: boolean;
  toggleExpandedDiffs: () => void;
}

const ReviewExpandedDiffsContext =
  createContext<ReviewExpandedDiffsContextValue>({
    expandedDiffs: true,
    toggleExpandedDiffs: () => {},
  });

export interface ReviewExpandedDiffsProviderProps {
  children: ReactNode;
}

export function ReviewExpandedDiffsProvider({
  children,
}: ReviewExpandedDiffsProviderProps) {
  const [expandedDiffs, setExpandedDiffs] = useState(true);
  const persistExpandedDiffs = usePersistedToggleSetter(
    setExpandedDiffs,
    "review",
  );
  const toggleExpandedDiffs = () => {
    persistExpandedDiffs(!expandedDiffs);
  };

  return (
    <ReviewExpandedDiffsContext.Provider
      value={{ expandedDiffs, toggleExpandedDiffs }}
    >
      {children}
    </ReviewExpandedDiffsContext.Provider>
  );
}

export function useReviewExpandedDiffs(): ReviewExpandedDiffsContextValue {
  return useContext(ReviewExpandedDiffsContext);
}
