// Restored from ref/webview/assets/app-initial~app-main~page~onboarding-page~skills-settings~plugins-settings~remote-connectio~c59x15mv-DDkvwlbO.js

import * as React from "react";

export type StoreSubscribe = (onStoreChange: () => void) => () => void;
export type SnapshotGetter<Snapshot> = () => Snapshot;
export type SnapshotSelector<Snapshot, Selection> = (
  snapshot: Snapshot,
) => Selection;
export type SelectionEquality<Selection> = (
  left: Selection,
  right: Selection,
) => boolean;

export interface UseSyncExternalStoreWithSelectorModule {
  useSyncExternalStoreWithSelector: typeof useSyncExternalStoreWithSelector;
}

interface SnapshotState<Snapshot> {
  value: Snapshot;
  getSnapshot: SnapshotGetter<Snapshot>;
}

interface SelectionState<Selection> {
  hasValue: boolean;
  value: Selection | undefined;
}

const objectIs =
  typeof Object.is === "function"
    ? Object.is
    : (left: unknown, right: unknown) =>
        (left === right &&
          (left !== 0 || 1 / (left as number) === 1 / (right as number))) ||
        (left !== left && right !== right);

function canUseDom(): boolean {
  return (
    typeof window !== "undefined" &&
    window.document !== undefined &&
    window.document.createElement !== undefined
  );
}

function didSnapshotChange<Snapshot>(
  snapshotState: SnapshotState<Snapshot>,
): boolean {
  try {
    return !objectIs(snapshotState.value, snapshotState.getSnapshot());
  } catch {
    return true;
  }
}

function useSyncExternalStoreFallback<Snapshot>(
  subscribe: StoreSubscribe,
  getSnapshot: SnapshotGetter<Snapshot>,
  getServerSnapshot?: SnapshotGetter<Snapshot>,
): Snapshot {
  if (!canUseDom()) return (getServerSnapshot ?? getSnapshot)();

  const value = getSnapshot();
  const [{ snapshotState }, forceUpdate] = React.useState({
    snapshotState: { value, getSnapshot },
  });

  React.useLayoutEffect(() => {
    snapshotState.value = value;
    snapshotState.getSnapshot = getSnapshot;
    if (didSnapshotChange(snapshotState)) forceUpdate({ snapshotState });
  }, [subscribe, value, getSnapshot]);

  React.useEffect(() => {
    if (didSnapshotChange(snapshotState)) forceUpdate({ snapshotState });
    return subscribe(() => {
      if (didSnapshotChange(snapshotState)) forceUpdate({ snapshotState });
    });
  }, [subscribe]);

  React.useDebugValue(value);
  return value;
}

const useSyncExternalStoreCompat =
  React.useSyncExternalStore ?? useSyncExternalStoreFallback;

export function useSyncExternalStoreWithSelector<Snapshot, Selection>(
  subscribe: StoreSubscribe,
  getSnapshot: SnapshotGetter<Snapshot>,
  getServerSnapshot: SnapshotGetter<Snapshot> | undefined,
  selector: SnapshotSelector<Snapshot, Selection>,
  isEqual?: SelectionEquality<Selection>,
): Selection {
  const selectionStateRef = React.useRef<SelectionState<Selection> | null>(
    null,
  );
  if (selectionStateRef.current === null) {
    selectionStateRef.current = { hasValue: false, value: undefined };
  }
  const selectionState = selectionStateRef.current;

  const [getSelectedSnapshot, getSelectedServerSnapshot] = React.useMemo(() => {
    let hasMemo = false;
    let memoizedSnapshot: Snapshot;
    let memoizedSelection: Selection;

    function memoizedSelector(nextSnapshot: Snapshot): Selection {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        const nextSelection = selector(nextSnapshot);
        if (isEqual !== undefined && selectionState.hasValue) {
          const currentSelection = selectionState.value as Selection;
          if (isEqual(currentSelection, nextSelection)) {
            memoizedSelection = currentSelection;
            return currentSelection;
          }
        }

        memoizedSelection = nextSelection;
        return nextSelection;
      }

      const previousSelection = memoizedSelection;
      if (objectIs(memoizedSnapshot, nextSnapshot)) return previousSelection;

      const nextSelection = selector(nextSnapshot);
      if (isEqual !== undefined && isEqual(previousSelection, nextSelection)) {
        memoizedSnapshot = nextSnapshot;
        return previousSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }

    return [
      () => memoizedSelector(getSnapshot()),
      getServerSnapshot === undefined
        ? undefined
        : () => memoizedSelector(getServerSnapshot()),
    ] as const;
  }, [getSnapshot, getServerSnapshot, selector, isEqual]);

  const selection = useSyncExternalStoreCompat(
    subscribe,
    getSelectedSnapshot,
    getSelectedServerSnapshot,
  );

  React.useEffect(() => {
    selectionState.hasValue = true;
    selectionState.value = selection;
  }, [selection]);

  React.useDebugValue(selection);
  return selection;
}

export const useSyncExternalStoreWithSelectorModule: UseSyncExternalStoreWithSelectorModule =
  { useSyncExternalStoreWithSelector };

export function loadUseSyncExternalStoreWithSelectorModule(): UseSyncExternalStoreWithSelectorModule {
  return useSyncExternalStoreWithSelectorModule;
}
