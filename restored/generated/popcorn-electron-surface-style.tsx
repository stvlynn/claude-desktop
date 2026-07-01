// Restored from ref/webview/assets/popcorn-electron-surface-style-jyyIi7EC.js
// Flat boundary. Vendored Popcorn Electron runtime backing module preserved for legacy alias compatibility.
// PopcornElectronSurfaceStyle chunk restored from the Codex webview bundle.
import React from "react";
import { toEsModule } from "../runtime/commonjs-interop";
import ReactDOM from "react-dom";
import clsx from "clsx";
import {
  s as popcornElectronSurfaceStyleImport10,
  a as popcornElectronSurfaceStyleImport5,
  c as popcornElectronSurfaceStyleImport6,
  l as popcornElectronSurfaceStyleImport7,
  n as popcornElectronSurfaceStyleImport8,
  o as popcornElectronSurfaceStyleImport9,
} from "@floating-ui/react-dom";
import {
  ContextMenu,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuSeparator,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../vendor/radix-context-menu";
import { q } from "../boundaries/workbook-runtime";
import {
  _remoteTextEditSessionB,
  remoteTextEditSessionD,
  remoteTextEditSessionF,
  remoteTextEditSessionI,
  remoteTextEditSessionL,
  remoteTextEditSessionO,
  remoteTextEditSessionS,
  remoteTextEditSessionV,
} from "./remote-text-edit-session";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "../vendor/radix-popover";
import {
  _ as popcornElectronSurfaceStyleImport11,
  c as popcornElectronSurfaceStyleImport12,
  g as popcornElectronSurfaceStyleImport13,
  h as popcornElectronSurfaceStyleImport14,
  l as popcornElectronSurfaceStyleImport15,
  m as popcornElectronSurfaceStyleImport16,
  o as popcornElectronSurfaceStyleImport17,
  p as popcornElectronSurfaceStyleImport18,
  r as popcornElectronSurfaceStyleImport19,
  u as popcornElectronSurfaceStyleImport20,
} from "@dnd-kit/core";
function popcornElectronSurfaceStyleHelper1(
  popcornElectronSurfaceStyleParam83,
  popcornElectronSurfaceStyleParam84,
  popcornElectronSurfaceStyleParam85,
) {
  let popcornElectronSurfaceStyleValue343 =
    popcornElectronSurfaceStyleParam83.slice();
  return (
    popcornElectronSurfaceStyleValue343.splice(
      popcornElectronSurfaceStyleParam85 < 0
        ? popcornElectronSurfaceStyleValue343.length +
            popcornElectronSurfaceStyleParam85
        : popcornElectronSurfaceStyleParam85,
      0,
      popcornElectronSurfaceStyleValue343.splice(
        popcornElectronSurfaceStyleParam84,
        1,
      )[0],
    ),
    popcornElectronSurfaceStyleValue343
  );
}
function popcornElectronSurfaceStyleHelper2(
  popcornElectronSurfaceStyleParam71,
  popcornElectronSurfaceStyleParam72,
) {
  return popcornElectronSurfaceStyleParam71.reduce(
    (accumulator, current, index) => {
      let popcornElectronSurfaceStyleValue369 =
        popcornElectronSurfaceStyleParam72.get(current);
      return (
        popcornElectronSurfaceStyleValue369 &&
          (accumulator[index] = popcornElectronSurfaceStyleValue369),
        accumulator
      );
    },
    Array(popcornElectronSurfaceStyleParam71.length),
  );
}
function popcornElectronSurfaceStyleHelper3(
  popcornElectronSurfaceStyleParam143,
) {
  return (
    popcornElectronSurfaceStyleParam143 !== null &&
    popcornElectronSurfaceStyleParam143 >= 0
  );
}
function popcornElectronSurfaceStyleHelper4(
  popcornElectronSurfaceStyleParam61,
  popcornElectronSurfaceStyleParam62,
) {
  if (popcornElectronSurfaceStyleParam61 === popcornElectronSurfaceStyleParam62)
    return !0;
  if (
    popcornElectronSurfaceStyleParam61.length !==
    popcornElectronSurfaceStyleParam62.length
  )
    return !1;
  for (
    let popcornElectronSurfaceStyleValue362 = 0;
    popcornElectronSurfaceStyleValue362 <
    popcornElectronSurfaceStyleParam61.length;
    popcornElectronSurfaceStyleValue362++
  )
    if (
      popcornElectronSurfaceStyleParam61[
        popcornElectronSurfaceStyleValue362
      ] !==
      popcornElectronSurfaceStyleParam62[popcornElectronSurfaceStyleValue362]
    )
      return !1;
  return !0;
}
function popcornElectronSurfaceStyleHelper5(
  popcornElectronSurfaceStyleParam110,
) {
  return typeof popcornElectronSurfaceStyleParam110 == `boolean`
    ? {
        draggable: popcornElectronSurfaceStyleParam110,
        droppable: popcornElectronSurfaceStyleParam110,
      }
    : popcornElectronSurfaceStyleParam110;
}
var popcornElectronSurfaceStyleValue2 = {
  scaleX: 1,
  scaleY: 1,
};
export const popcornElectronSurfaceStyleEt = (
  popcornElectronSurfaceStyleParam12,
) => {
  let {
      rects: rects,
      activeNodeRect: activeNodeRect,
      activeIndex: activeIndex,
      overIndex: overIndex,
      index: index,
    } = popcornElectronSurfaceStyleParam12,
    popcornElectronSurfaceStyleValue215 = rects[activeIndex] ?? activeNodeRect;
  if (!popcornElectronSurfaceStyleValue215) return null;
  let popcornElectronSurfaceStyleValue216 = popcornElectronSurfaceStyleHelper6(
    rects,
    index,
    activeIndex,
  );
  if (index === activeIndex) {
    let popcornElectronSurfaceStyleValue344 = rects[overIndex];
    return popcornElectronSurfaceStyleValue344
      ? {
          x:
            activeIndex < overIndex
              ? popcornElectronSurfaceStyleValue344.left +
                popcornElectronSurfaceStyleValue344.width -
                (popcornElectronSurfaceStyleValue215.left +
                  popcornElectronSurfaceStyleValue215.width)
              : popcornElectronSurfaceStyleValue344.left -
                popcornElectronSurfaceStyleValue215.left,
          y: 0,
          ...popcornElectronSurfaceStyleValue2,
        }
      : null;
  }
  return index > activeIndex && index <= overIndex
    ? {
        x:
          -popcornElectronSurfaceStyleValue215.width -
          popcornElectronSurfaceStyleValue216,
        y: 0,
        ...popcornElectronSurfaceStyleValue2,
      }
    : index < activeIndex && index >= overIndex
      ? {
          x:
            popcornElectronSurfaceStyleValue215.width +
            popcornElectronSurfaceStyleValue216,
          y: 0,
          ...popcornElectronSurfaceStyleValue2,
        }
      : {
          x: 0,
          y: 0,
          ...popcornElectronSurfaceStyleValue2,
        };
};
function popcornElectronSurfaceStyleHelper6(
  popcornElectronSurfaceStyleParam35,
  popcornElectronSurfaceStyleParam36,
  popcornElectronSurfaceStyleParam37,
) {
  let popcornElectronSurfaceStyleValue291 =
      popcornElectronSurfaceStyleParam35[popcornElectronSurfaceStyleParam36],
    popcornElectronSurfaceStyleValue292 =
      popcornElectronSurfaceStyleParam35[
        popcornElectronSurfaceStyleParam36 - 1
      ],
    popcornElectronSurfaceStyleValue293 =
      popcornElectronSurfaceStyleParam35[
        popcornElectronSurfaceStyleParam36 + 1
      ];
  return !popcornElectronSurfaceStyleValue291 ||
    (!popcornElectronSurfaceStyleValue292 &&
      !popcornElectronSurfaceStyleValue293)
    ? 0
    : popcornElectronSurfaceStyleParam37 < popcornElectronSurfaceStyleParam36
      ? popcornElectronSurfaceStyleValue292
        ? popcornElectronSurfaceStyleValue291.left -
          (popcornElectronSurfaceStyleValue292.left +
            popcornElectronSurfaceStyleValue292.width)
        : popcornElectronSurfaceStyleValue293.left -
          (popcornElectronSurfaceStyleValue291.left +
            popcornElectronSurfaceStyleValue291.width)
      : popcornElectronSurfaceStyleValue293
        ? popcornElectronSurfaceStyleValue293.left -
          (popcornElectronSurfaceStyleValue291.left +
            popcornElectronSurfaceStyleValue291.width)
        : popcornElectronSurfaceStyleValue291.left -
          (popcornElectronSurfaceStyleValue292.left +
            popcornElectronSurfaceStyleValue292.width);
}
var popcornElectronSurfaceStyleTt = (popcornElectronSurfaceStyleParam34) => {
    let {
        rects: rects,
        activeIndex: activeIndex,
        overIndex: overIndex,
        index: index,
      } = popcornElectronSurfaceStyleParam34,
      popcornElectronSurfaceStyleValue288 = popcornElectronSurfaceStyleHelper1(
        rects,
        overIndex,
        activeIndex,
      ),
      popcornElectronSurfaceStyleValue289 = rects[index],
      popcornElectronSurfaceStyleValue290 =
        popcornElectronSurfaceStyleValue288[index];
    return !popcornElectronSurfaceStyleValue290 ||
      !popcornElectronSurfaceStyleValue289
      ? null
      : {
          x:
            popcornElectronSurfaceStyleValue290.left -
            popcornElectronSurfaceStyleValue289.left,
          y:
            popcornElectronSurfaceStyleValue290.top -
            popcornElectronSurfaceStyleValue289.top,
          scaleX:
            popcornElectronSurfaceStyleValue290.width /
            popcornElectronSurfaceStyleValue289.width,
          scaleY:
            popcornElectronSurfaceStyleValue290.height /
            popcornElectronSurfaceStyleValue289.height,
        };
  },
  popcornElectronSurfaceStyleValue3 = `Sortable`,
  popcornElectronSurfaceStyleValue4 = React.createContext({
    activeIndex: -1,
    containerId: popcornElectronSurfaceStyleValue3,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: popcornElectronSurfaceStyleTt,
    disabled: {
      draggable: !1,
      droppable: !1,
    },
  });
export function popcornElectronSurfaceStyleDollar(
  popcornElectronSurfaceStyleParam3,
) {
  let {
      children: children,
      id: id,
      items: items,
      strategy = popcornElectronSurfaceStyleTt,
      disabled = !1,
    } = popcornElectronSurfaceStyleParam3,
    {
      active: active,
      dragOverlay: dragOverlay,
      droppableRects: droppableRects,
      over: over,
      measureDroppableContainers: measureDroppableContainers,
    } = popcornElectronSurfaceStyleImport12(),
    popcornElectronSurfaceStyleValue157 = popcornElectronSurfaceStyleImport11(
      popcornElectronSurfaceStyleValue3,
      id,
    ),
    popcornElectronSurfaceStyleValue158 = dragOverlay.rect !== null,
    popcornElectronSurfaceStyleValue159 = (0, React.useMemo)(
      () =>
        items.map((item) =>
          typeof item == `object` && `id` in item ? item.id : item,
        ),
      [items],
    ),
    popcornElectronSurfaceStyleValue160 = active != null,
    popcornElectronSurfaceStyleValue161 = active
      ? popcornElectronSurfaceStyleValue159.indexOf(active.id)
      : -1,
    popcornElectronSurfaceStyleValue162 = over
      ? popcornElectronSurfaceStyleValue159.indexOf(over.id)
      : -1,
    popcornElectronSurfaceStyleValue163 = (0, React.useRef)(
      popcornElectronSurfaceStyleValue159,
    ),
    popcornElectronSurfaceStyleValue164 = !popcornElectronSurfaceStyleHelper4(
      popcornElectronSurfaceStyleValue159,
      popcornElectronSurfaceStyleValue163.current,
    ),
    popcornElectronSurfaceStyleValue165 =
      (popcornElectronSurfaceStyleValue162 !== -1 &&
        popcornElectronSurfaceStyleValue161 === -1) ||
      popcornElectronSurfaceStyleValue164,
    popcornElectronSurfaceStyleValue166 =
      popcornElectronSurfaceStyleHelper5(disabled);
  (popcornElectronSurfaceStyleImport13(() => {
    popcornElectronSurfaceStyleValue164 &&
      popcornElectronSurfaceStyleValue160 &&
      measureDroppableContainers(popcornElectronSurfaceStyleValue159);
  }, [
    popcornElectronSurfaceStyleValue164,
    popcornElectronSurfaceStyleValue159,
    popcornElectronSurfaceStyleValue160,
    measureDroppableContainers,
  ]),
    (0, React.useEffect)(() => {
      popcornElectronSurfaceStyleValue163.current =
        popcornElectronSurfaceStyleValue159;
    }, [popcornElectronSurfaceStyleValue159]));
  let popcornElectronSurfaceStyleValue167 = (0, React.useMemo)(
    () => ({
      activeIndex: popcornElectronSurfaceStyleValue161,
      containerId: popcornElectronSurfaceStyleValue157,
      disabled: popcornElectronSurfaceStyleValue166,
      disableTransforms: popcornElectronSurfaceStyleValue165,
      items: popcornElectronSurfaceStyleValue159,
      overIndex: popcornElectronSurfaceStyleValue162,
      useDragOverlay: popcornElectronSurfaceStyleValue158,
      sortedRects: popcornElectronSurfaceStyleHelper2(
        popcornElectronSurfaceStyleValue159,
        droppableRects,
      ),
      strategy: strategy,
    }),
    [
      popcornElectronSurfaceStyleValue161,
      popcornElectronSurfaceStyleValue157,
      popcornElectronSurfaceStyleValue166.draggable,
      popcornElectronSurfaceStyleValue166.droppable,
      popcornElectronSurfaceStyleValue165,
      popcornElectronSurfaceStyleValue159,
      popcornElectronSurfaceStyleValue162,
      droppableRects,
      popcornElectronSurfaceStyleValue158,
      strategy,
    ],
  );
  return React.createElement(
    popcornElectronSurfaceStyleValue4.Provider,
    {
      value: popcornElectronSurfaceStyleValue167,
    },
    children,
  );
}
var popcornElectronSurfaceStyleValue5 = (
    popcornElectronSurfaceStyleParam100,
  ) => {
    let {
      id: id,
      items: items,
      activeIndex: activeIndex,
      overIndex: overIndex,
    } = popcornElectronSurfaceStyleParam100;
    return popcornElectronSurfaceStyleHelper1(
      items,
      activeIndex,
      overIndex,
    ).indexOf(id);
  },
  popcornElectronSurfaceStyleValue6 = (popcornElectronSurfaceStyleParam33) => {
    let {
      containerId: containerId,
      isSorting: isSorting,
      wasDragging: wasDragging,
      index: index,
      items: items,
      newIndex: newIndex,
      previousItems: previousItems,
      previousContainerId: previousContainerId,
      transition: transition,
    } = popcornElectronSurfaceStyleParam33;
    return !transition ||
      !wasDragging ||
      (previousItems !== items && index === newIndex)
      ? !1
      : isSorting
        ? !0
        : newIndex !== index && containerId === previousContainerId;
  },
  popcornElectronSurfaceStyleValue7 = {
    duration: 200,
    easing: `ease`,
  },
  popcornElectronSurfaceStyleValue8 = `transform`,
  me = popcornElectronSurfaceStyleImport18.Transition.toString({
    property: popcornElectronSurfaceStyleValue8,
    duration: 0,
    easing: `linear`,
  }),
  popcornElectronSurfaceStyleValue9 = {
    roleDescription: `sortable`,
  };
function popcornElectronSurfaceStyleHelper7(
  popcornElectronSurfaceStyleParam10,
) {
  let {
      disabled: disabled,
      index: index,
      node: node,
      rect: rect,
    } = popcornElectronSurfaceStyleParam10,
    [popcornElectronSurfaceStyleValue205, popcornElectronSurfaceStyleValue206] =
      (0, React.useState)(null),
    popcornElectronSurfaceStyleValue207 = (0, React.useRef)(index);
  return (
    popcornElectronSurfaceStyleImport13(() => {
      if (
        !disabled &&
        index !== popcornElectronSurfaceStyleValue207.current &&
        node.current
      ) {
        let popcornElectronSurfaceStyleValue299 = rect.current;
        if (popcornElectronSurfaceStyleValue299) {
          let popcornElectronSurfaceStyleValue315 =
              popcornElectronSurfaceStyleImport17(node.current, {
                ignoreTransform: !0,
              }),
            popcornElectronSurfaceStyleValue316 = {
              x:
                popcornElectronSurfaceStyleValue299.left -
                popcornElectronSurfaceStyleValue315.left,
              y:
                popcornElectronSurfaceStyleValue299.top -
                popcornElectronSurfaceStyleValue315.top,
              scaleX:
                popcornElectronSurfaceStyleValue299.width /
                popcornElectronSurfaceStyleValue315.width,
              scaleY:
                popcornElectronSurfaceStyleValue299.height /
                popcornElectronSurfaceStyleValue315.height,
            };
          (popcornElectronSurfaceStyleValue316.x ||
            popcornElectronSurfaceStyleValue316.y) &&
            popcornElectronSurfaceStyleValue206(
              popcornElectronSurfaceStyleValue316,
            );
        }
      }
      index !== popcornElectronSurfaceStyleValue207.current &&
        (popcornElectronSurfaceStyleValue207.current = index);
    }, [disabled, index, node, rect]),
    (0, React.useEffect)(() => {
      popcornElectronSurfaceStyleValue205 &&
        popcornElectronSurfaceStyleValue206(null);
    }, [popcornElectronSurfaceStyleValue205]),
    popcornElectronSurfaceStyleValue205
  );
}
export function popcornElectronSurfaceStyleNt(
  popcornElectronSurfaceStyleParam2,
) {
  let {
      animateLayoutChanges = popcornElectronSurfaceStyleValue6,
      attributes: attributes,
      disabled: disabled,
      data: data,
      getNewIndex = popcornElectronSurfaceStyleValue5,
      id: id,
      strategy: strategy,
      resizeObserverConfig: resizeObserverConfig,
      transition = popcornElectronSurfaceStyleValue7,
    } = popcornElectronSurfaceStyleParam2,
    {
      items: items,
      containerId: containerId,
      activeIndex: activeIndex,
      disabled: _disabled,
      disableTransforms: disableTransforms,
      sortedRects: sortedRects,
      overIndex: overIndex,
      useDragOverlay: popcornElectronSurfaceStyleValue111,
      strategy: _strategy,
    } = (0, React.useContext)(popcornElectronSurfaceStyleValue4),
    popcornElectronSurfaceStyleValue112 = popcornElectronSurfaceStyleHelper8(
      disabled,
      _disabled,
    ),
    popcornElectronSurfaceStyleValue113 = items.indexOf(id),
    popcornElectronSurfaceStyleValue114 = (0, React.useMemo)(
      () => ({
        sortable: {
          containerId: containerId,
          index: popcornElectronSurfaceStyleValue113,
          items: items,
        },
        ...data,
      }),
      [containerId, data, popcornElectronSurfaceStyleValue113, items],
    ),
    popcornElectronSurfaceStyleValue115 = (0, React.useMemo)(
      () => items.slice(items.indexOf(id)),
      [items, id],
    ),
    {
      rect: rect,
      node: node,
      isOver: isOver,
      setNodeRef: setNodeRef,
    } = popcornElectronSurfaceStyleImport20({
      id: id,
      data: popcornElectronSurfaceStyleValue114,
      disabled: popcornElectronSurfaceStyleValue112.droppable,
      resizeObserverConfig: {
        updateMeasurementsFor: popcornElectronSurfaceStyleValue115,
        ...resizeObserverConfig,
      },
    }),
    {
      active: active,
      activatorEvent: activatorEvent,
      activeNodeRect: activeNodeRect,
      attributes: _attributes,
      setNodeRef: _setNodeRef,
      listeners: listeners,
      isDragging: isDragging,
      over: over,
      setActivatorNodeRef: setActivatorNodeRef,
      transform: transform,
    } = popcornElectronSurfaceStyleImport15({
      id: id,
      data: popcornElectronSurfaceStyleValue114,
      attributes: {
        ...popcornElectronSurfaceStyleValue9,
        ...attributes,
      },
      disabled: popcornElectronSurfaceStyleValue112.draggable,
    }),
    popcornElectronSurfaceStyleValue116 = popcornElectronSurfaceStyleImport14(
      setNodeRef,
      _setNodeRef,
    ),
    popcornElectronSurfaceStyleValue117 = !!active,
    popcornElectronSurfaceStyleValue118 =
      popcornElectronSurfaceStyleValue117 &&
      !disableTransforms &&
      popcornElectronSurfaceStyleHelper3(activeIndex) &&
      popcornElectronSurfaceStyleHelper3(overIndex),
    popcornElectronSurfaceStyleValue119 =
      !popcornElectronSurfaceStyleValue111 && isDragging,
    _popcornElectronSurfaceStyleEt = popcornElectronSurfaceStyleValue118
      ? ((popcornElectronSurfaceStyleValue119 &&
        popcornElectronSurfaceStyleValue118
          ? transform
          : null) ??
        (strategy ?? _strategy)({
          rects: sortedRects,
          activeNodeRect: activeNodeRect,
          activeIndex: activeIndex,
          overIndex: overIndex,
          index: popcornElectronSurfaceStyleValue113,
        }))
      : null,
    popcornElectronSurfaceStyleValue120 =
      popcornElectronSurfaceStyleHelper3(activeIndex) &&
      popcornElectronSurfaceStyleHelper3(overIndex)
        ? getNewIndex({
            id: id,
            items: items,
            activeIndex: activeIndex,
            overIndex: overIndex,
          })
        : popcornElectronSurfaceStyleValue113,
    _popcornElectronSurfaceStyleTt = active?.id,
    popcornElectronSurfaceStyleValue121 = (0, React.useRef)({
      activeId: _popcornElectronSurfaceStyleTt,
      items: items,
      newIndex: popcornElectronSurfaceStyleValue120,
      containerId: containerId,
    }),
    _popcornElectronSurfaceStyleDollar =
      items !== popcornElectronSurfaceStyleValue121.current.items,
    _popcornElectronSurfaceStyleNt = animateLayoutChanges({
      active: active,
      containerId: containerId,
      isDragging: isDragging,
      isSorting: popcornElectronSurfaceStyleValue117,
      id: id,
      index: popcornElectronSurfaceStyleValue113,
      items: items,
      newIndex: popcornElectronSurfaceStyleValue121.current.newIndex,
      previousItems: popcornElectronSurfaceStyleValue121.current.items,
      previousContainerId:
        popcornElectronSurfaceStyleValue121.current.containerId,
      transition: transition,
      wasDragging: popcornElectronSurfaceStyleValue121.current.activeId != null,
    }),
    popcornElectronSurfaceStyleValue122 = popcornElectronSurfaceStyleHelper7({
      disabled: !_popcornElectronSurfaceStyleNt,
      index: popcornElectronSurfaceStyleValue113,
      node: node,
      rect: rect,
    });
  return (
    (0, React.useEffect)(() => {
      (popcornElectronSurfaceStyleValue117 &&
        popcornElectronSurfaceStyleValue121.current.newIndex !==
          popcornElectronSurfaceStyleValue120 &&
        (popcornElectronSurfaceStyleValue121.current.newIndex =
          popcornElectronSurfaceStyleValue120),
        containerId !==
          popcornElectronSurfaceStyleValue121.current.containerId &&
          (popcornElectronSurfaceStyleValue121.current.containerId =
            containerId),
        items !== popcornElectronSurfaceStyleValue121.current.items &&
          (popcornElectronSurfaceStyleValue121.current.items = items));
    }, [
      popcornElectronSurfaceStyleValue117,
      popcornElectronSurfaceStyleValue120,
      containerId,
      items,
    ]),
    (0, React.useEffect)(() => {
      if (
        _popcornElectronSurfaceStyleTt ===
        popcornElectronSurfaceStyleValue121.current.activeId
      )
        return;
      if (
        _popcornElectronSurfaceStyleTt != null &&
        popcornElectronSurfaceStyleValue121.current.activeId == null
      ) {
        popcornElectronSurfaceStyleValue121.current.activeId =
          _popcornElectronSurfaceStyleTt;
        return;
      }
      let popcornElectronSurfaceStyleValue287 = setTimeout(() => {
        popcornElectronSurfaceStyleValue121.current.activeId =
          _popcornElectronSurfaceStyleTt;
      }, 50);
      return () => clearTimeout(popcornElectronSurfaceStyleValue287);
    }, [_popcornElectronSurfaceStyleTt]),
    {
      active: active,
      activeIndex: activeIndex,
      attributes: _attributes,
      data: popcornElectronSurfaceStyleValue114,
      rect: rect,
      index: popcornElectronSurfaceStyleValue113,
      newIndex: popcornElectronSurfaceStyleValue120,
      items: items,
      isOver: isOver,
      isSorting: popcornElectronSurfaceStyleValue117,
      isDragging: isDragging,
      listeners: listeners,
      node: node,
      overIndex: overIndex,
      over: over,
      setNodeRef: popcornElectronSurfaceStyleValue116,
      setActivatorNodeRef: setActivatorNodeRef,
      setDroppableNodeRef: setNodeRef,
      setDraggableNodeRef: _setNodeRef,
      transform:
        popcornElectronSurfaceStyleValue122 ?? _popcornElectronSurfaceStyleEt,
      transition: __popcornElectronSurfaceStyleQ(),
    }
  );
  function __popcornElectronSurfaceStyleQ() {
    if (
      popcornElectronSurfaceStyleValue122 ||
      (_popcornElectronSurfaceStyleDollar &&
        popcornElectronSurfaceStyleValue121.current.newIndex ===
          popcornElectronSurfaceStyleValue113)
    )
      return me;
    if (
      !(
        (popcornElectronSurfaceStyleValue119 &&
          !popcornElectronSurfaceStyleImport16(activatorEvent)) ||
        !transition
      ) &&
      (popcornElectronSurfaceStyleValue117 || _popcornElectronSurfaceStyleNt)
    )
      return popcornElectronSurfaceStyleImport18.Transition.toString({
        ...transition,
        property: popcornElectronSurfaceStyleValue8,
      });
  }
}
function popcornElectronSurfaceStyleHelper8(
  popcornElectronSurfaceStyleParam48,
  popcornElectronSurfaceStyleParam49,
) {
  return typeof popcornElectronSurfaceStyleParam48 == `boolean`
    ? {
        draggable: popcornElectronSurfaceStyleParam48,
        droppable: !1,
      }
    : {
        draggable:
          popcornElectronSurfaceStyleParam48?.draggable ??
          popcornElectronSurfaceStyleParam49.draggable,
        droppable:
          popcornElectronSurfaceStyleParam48?.droppable ??
          popcornElectronSurfaceStyleParam49.droppable,
      };
}
(popcornElectronSurfaceStyleImport19.Down,
  popcornElectronSurfaceStyleImport19.Right,
  popcornElectronSurfaceStyleImport19.Up,
  popcornElectronSurfaceStyleImport19.Left);
function popcornElectronSurfaceStyleHelper9(
  popcornElectronSurfaceStyleParam19,
) {
  switch (popcornElectronSurfaceStyleParam19.type) {
    case `workbook-range`:
    case `workbook-floating-element`:
      return `workbook:${popcornElectronSurfaceStyleParam19.sheetName}`;
    case `presentation-element-selection`:
    case `presentation-region`:
      return `presentation:${popcornElectronSurfaceStyleParam19.slideId}`;
    default:
      return popcornElectronSurfaceStyleParam19;
  }
}
function popcornElectronSurfaceStyleQ(
  popcornElectronSurfaceStyleParam51,
  popcornElectronSurfaceStyleParam52,
) {
  let popcornElectronSurfaceStyleValue310 = popcornElectronSurfaceStyleHelper9(
      popcornElectronSurfaceStyleParam52,
    ),
    popcornElectronSurfaceStyleValue311 = new Set(
      popcornElectronSurfaceStyleParam51
        .filter(
          (item) =>
            popcornElectronSurfaceStyleHelper9(item.target) ===
            popcornElectronSurfaceStyleValue310,
        )
        .map((item) => item.annotationNumber)
        .filter((item) => item > 0),
    ),
    popcornElectronSurfaceStyleValue312 = 1;
  for (
    ;
    popcornElectronSurfaceStyleValue311.has(
      popcornElectronSurfaceStyleValue312,
    );
  )
    popcornElectronSurfaceStyleValue312 += 1;
  return popcornElectronSurfaceStyleValue312;
}
var be = 0.18,
  popcornElectronSurfaceStyleValue10 = 51,
  popcornElectronSurfaceStyleValue11 = 156,
  popcornElectronSurfaceStyleValue12 = 255,
  popcornElectronSurfaceStyleValue13 = `rgb(${popcornElectronSurfaceStyleValue10}, ${popcornElectronSurfaceStyleValue11}, ${popcornElectronSurfaceStyleValue12})`,
  popcornElectronSurfaceStyleValue14 = `rgba(${popcornElectronSurfaceStyleValue10}, ${popcornElectronSurfaceStyleValue11}, ${popcornElectronSurfaceStyleValue12}, ${be})`,
  _popcornElectronSurfaceStyleQ = `var(--color-token-text-link-foreground, #339cff)`,
  popcornElectronSurfaceStyleK = `var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))`;
export function popcornElectronSurfaceStyleJ(
  popcornElectronSurfaceStyleParam39,
) {
  let popcornElectronSurfaceStyleValue297 =
    popcornElectronSurfaceStyleParam39?.ownerDocument.defaultView;
  if (
    !popcornElectronSurfaceStyleParam39 ||
    !popcornElectronSurfaceStyleValue297
  )
    return popcornElectronSurfaceStyleValue13;
  let popcornElectronSurfaceStyleValue298 =
    popcornElectronSurfaceStyleValue297.getComputedStyle(
      popcornElectronSurfaceStyleParam39,
    );
  return (
    popcornElectronSurfaceStyleHelper10(
      popcornElectronSurfaceStyleValue298,
      `--color-text-accent`,
    ) ??
    popcornElectronSurfaceStyleHelper10(
      popcornElectronSurfaceStyleValue298,
      `--color-accent-blue`,
    ) ??
    popcornElectronSurfaceStyleValue13
  );
}
export function popcornElectronSurfaceStyleX(
  popcornElectronSurfaceStyleParam111,
) {
  let popcornElectronSurfaceStyleValue358 = popcornElectronSurfaceStyleHelper11(
    popcornElectronSurfaceStyleParam111,
  );
  return popcornElectronSurfaceStyleValue358
    ? `rgb(${popcornElectronSurfaceStyleValue358.r}, ${popcornElectronSurfaceStyleValue358.g}, ${popcornElectronSurfaceStyleValue358.b})`
    : popcornElectronSurfaceStyleParam111;
}
export function popcornElectronSurfaceStyleY(
  popcornElectronSurfaceStyleParam101,
) {
  let popcornElectronSurfaceStyleValue352 = popcornElectronSurfaceStyleHelper11(
    popcornElectronSurfaceStyleParam101,
  );
  return popcornElectronSurfaceStyleValue352
    ? `rgba(${popcornElectronSurfaceStyleValue352.r}, ${popcornElectronSurfaceStyleValue352.g}, ${popcornElectronSurfaceStyleValue352.b}, ${be})`
    : popcornElectronSurfaceStyleValue14;
}
export function popcornElectronSurfaceStyleZ(
  popcornElectronSurfaceStyleParam112,
) {
  return (
    popcornElectronSurfaceStyleParam112.includes(`var(`) ||
    popcornElectronSurfaceStyleParam112.includes(`color-mix(`)
  );
}
function popcornElectronSurfaceStyleHelper10(
  popcornElectronSurfaceStyleParam102,
  popcornElectronSurfaceStyleParam103,
) {
  let popcornElectronSurfaceStyleValue353 = popcornElectronSurfaceStyleParam102
    .getPropertyValue(popcornElectronSurfaceStyleParam103)
    .trim();
  return popcornElectronSurfaceStyleValue353.length > 0
    ? popcornElectronSurfaceStyleValue353
    : null;
}
function popcornElectronSurfaceStyleHelper11(
  popcornElectronSurfaceStyleParam14,
) {
  let popcornElectronSurfaceStyleValue227 =
    popcornElectronSurfaceStyleParam14.trim();
  if (popcornElectronSurfaceStyleValue227.startsWith(`#`))
    return popcornElectronSurfaceStyleHelper12(
      popcornElectronSurfaceStyleValue227,
    );
  let popcornElectronSurfaceStyleValue228 =
    /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i.exec(
      popcornElectronSurfaceStyleValue227,
    );
  if (!popcornElectronSurfaceStyleValue228) return null;
  let popcornElectronSurfaceStyleValue229 =
      popcornElectronSurfaceStyleValue228[1],
    popcornElectronSurfaceStyleValue230 =
      popcornElectronSurfaceStyleValue228[2],
    popcornElectronSurfaceStyleValue231 =
      popcornElectronSurfaceStyleValue228[3];
  return popcornElectronSurfaceStyleValue229 == null ||
    popcornElectronSurfaceStyleValue230 == null ||
    popcornElectronSurfaceStyleValue231 == null
    ? null
    : {
        r: Number(popcornElectronSurfaceStyleValue229),
        g: Number(popcornElectronSurfaceStyleValue230),
        b: Number(popcornElectronSurfaceStyleValue231),
      };
}
function popcornElectronSurfaceStyleHelper12(
  popcornElectronSurfaceStyleParam11,
) {
  if (popcornElectronSurfaceStyleParam11.length === 4) {
    let popcornElectronSurfaceStyleValue305 =
        popcornElectronSurfaceStyleParam11[1],
      popcornElectronSurfaceStyleValue306 =
        popcornElectronSurfaceStyleParam11[2],
      popcornElectronSurfaceStyleValue307 =
        popcornElectronSurfaceStyleParam11[3];
    return popcornElectronSurfaceStyleValue305 == null ||
      popcornElectronSurfaceStyleValue306 == null ||
      popcornElectronSurfaceStyleValue307 == null
      ? null
      : {
          r: Number.parseInt(
            popcornElectronSurfaceStyleValue305 +
              popcornElectronSurfaceStyleValue305,
            16,
          ),
          g: Number.parseInt(
            popcornElectronSurfaceStyleValue306 +
              popcornElectronSurfaceStyleValue306,
            16,
          ),
          b: Number.parseInt(
            popcornElectronSurfaceStyleValue307 +
              popcornElectronSurfaceStyleValue307,
            16,
          ),
        };
  }
  return popcornElectronSurfaceStyleParam11.length === 7
    ? {
        r: Number.parseInt(popcornElectronSurfaceStyleParam11.slice(1, 3), 16),
        g: Number.parseInt(popcornElectronSurfaceStyleParam11.slice(3, 5), 16),
        b: Number.parseInt(popcornElectronSurfaceStyleParam11.slice(5, 7), 16),
      }
    : null;
}
var popcornElectronSurfaceStyleValue16 = `M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z`,
  popcornElectronSurfaceStyleValue17 = `<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${popcornElectronSurfaceStyleValue16}" fill="#0285FF" stroke="white" stroke-width="1.65"/></svg>`,
  popcornElectronSurfaceStyleValue18 = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif`,
  popcornElectronSurfaceStyleValue19 = `data:image/svg+xml,${encodeURIComponent(popcornElectronSurfaceStyleValue17)}`;
`${popcornElectronSurfaceStyleValue19}`;
var popcornElectronSurfaceStyleValue20 = 6,
  popcornElectronSurfaceStyleValue21 = {
    color: `white`,
  };
export const popcornElectronSurfaceStyleV = `url("${popcornElectronSurfaceStyleValue19}") 13 12, crosshair`;
function popcornElectronSurfaceStyleG(popcornElectronSurfaceStyleParam65) {
  return popcornElectronSurfaceStyleParam65.width === 0 &&
    popcornElectronSurfaceStyleParam65.height === 0
    ? {
        left: popcornElectronSurfaceStyleParam65.left,
        top: popcornElectronSurfaceStyleParam65.top,
      }
    : {
        left:
          popcornElectronSurfaceStyleParam65.left +
          popcornElectronSurfaceStyleParam65.width,
        top: Math.max(26 / 2, popcornElectronSurfaceStyleParam65.top),
      };
}
export function popcornElectronSurfaceStyleW({
  markerNumber: markerNumber,
  position: position,
  draft = !1,
  selected = !1,
  testId: testId,
  title: title,
  onClick: onClick,
  onMouseEnter: onMouseEnter,
  onMouseLeave: onMouseLeave,
  onFocus: onFocus,
  onBlur: onBlur,
}) {
  let popcornElectronSurfaceStyleValue142 =
      onClick != null ||
      onMouseEnter != null ||
      onMouseLeave != null ||
      onFocus != null ||
      onBlur != null,
    popcornElectronSurfaceStyleValue143 = clsx(
      `absolute z-30 flex items-center justify-center border-0 bg-transparent p-0`,
      popcornElectronSurfaceStyleValue142
        ? `pointer-events-auto cursor-pointer`
        : `pointer-events-none`,
    ),
    popcornElectronSurfaceStyleValue144 = {
      color: _popcornElectronSurfaceStyleQ,
      left: position.left,
      top: position.top,
      width: 26,
      height: 26,
      transform: selected
        ? `translate(-50%, -50%) scale(1.08)`
        : `translate(-50%, -50%)`,
    },
    popcornElectronSurfaceStyleValue145 =
      markerNumber == null ? null : (
        <span
          className={`pointer-events-none relative z-10 [transform:translate(-0.5px,-0.5px)] text-[10px] leading-none font-bold text-white`}
          style={popcornElectronSurfaceStyleValue21}
        >
          {markerNumber}
        </span>
      );
  return popcornElectronSurfaceStyleValue142 ? (
    <button
      type={`button`}
      data-testid={testId}
      data-popcorn-annotation-marker={`true`}
      className={popcornElectronSurfaceStyleValue143}
      style={popcornElectronSurfaceStyleValue144}
      title={title}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {React.createElement(popcornElectronSurfaceStyleHelper14, null)}
      {popcornElectronSurfaceStyleValue145}
    </button>
  ) : (
    <div
      data-testid={testId}
      className={popcornElectronSurfaceStyleValue143}
      style={popcornElectronSurfaceStyleValue144}
      title={title}
    >
      {React.createElement(popcornElectronSurfaceStyleHelper14, null)}
      {popcornElectronSurfaceStyleValue145}
    </div>
  );
}
export function popcornElectronSurfaceStyleH({
  bounds: bounds,
  onClick: onClick,
  placement = `bottom-right`,
  shortcutScopeElement: shortcutScopeElement,
  testId = `popcorn-ask-for-edit-button`,
}) {
  (0, React.useEffect)(() => {
    let popcornElectronSurfaceStyleValue193 =
      shortcutScopeElement?.ownerDocument.defaultView;
    if (
      popcornElectronSurfaceStyleValue193 == null ||
      shortcutScopeElement == null
    )
      return;
    let popcornElectronSurfaceStyleValue194 = (event) => {
      let popcornElectronSurfaceStyleValue212 =
          event.target instanceof popcornElectronSurfaceStyleValue193.Node &&
          shortcutScopeElement.contains(event.target),
        popcornElectronSurfaceStyleValue213 =
          shortcutScopeElement.ownerDocument.activeElement,
        popcornElectronSurfaceStyleValue214 =
          popcornElectronSurfaceStyleValue213 instanceof
            popcornElectronSurfaceStyleValue193.Node &&
          shortcutScopeElement.contains(popcornElectronSurfaceStyleValue213);
      event.defaultPrevented ||
        event.repeat ||
        (!event.metaKey && !event.ctrlKey) ||
        event.altKey ||
        event.shiftKey ||
        event.key.toLowerCase() !== `i` ||
        (!popcornElectronSurfaceStyleValue212 &&
          !popcornElectronSurfaceStyleValue214) ||
        (event.preventDefault(),
        event.stopPropagation(),
        onClick(`ask_codex_shortcut`));
    };
    return (
      popcornElectronSurfaceStyleValue193.addEventListener(
        `keydown`,
        popcornElectronSurfaceStyleValue194,
        !0,
      ),
      () => {
        popcornElectronSurfaceStyleValue193.removeEventListener(
          `keydown`,
          popcornElectronSurfaceStyleValue194,
          !0,
        );
      }
    );
  }, [onClick, shortcutScopeElement]);
  let popcornElectronSurfaceStyleValue132 =
      popcornElectronSurfaceStyleHelper15(),
    popcornElectronSurfaceStyleValue133 = (event) => {
      (event.preventDefault(), event.stopPropagation());
    };
  return (
    <button
      type={`button`}
      aria-label={`Ask Codex`}
      data-popcorn-ask-for-edit={`true`}
      data-popcorn-ask-for-edit-placement={placement}
      data-testid={testId}
      className={`pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-white py-[3px] pr-[3px] pl-2 text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-black shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-black/10 hover:bg-[color-mix(in_srgb,white_92%,var(--color-token-foreground)_8%)]`}
      style={popcornElectronSurfaceStyleHelper13(bounds, placement)}
      onMouseDown={popcornElectronSurfaceStyleValue133}
      onClick={(popcornElectronSurfaceStyleParam145) => {
        (popcornElectronSurfaceStyleValue133(
          popcornElectronSurfaceStyleParam145,
        ),
          onClick(`ask_codex_button`));
      }}
    >
      <span
        className={`h-[18px]`}
        style={{
          fontFamily: popcornElectronSurfaceStyleValue18,
        }}
      >{`Ask Codex`}</span>
      <span
        aria-hidden={`true`}
        className={`inline-flex h-[18px] items-center rounded-full bg-[#efefef] px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-[#6b6b6b]`}
        style={{
          fontFamily: popcornElectronSurfaceStyleValue18,
        }}
      >
        {popcornElectronSurfaceStyleValue132}
      </span>
    </button>
  );
}
function popcornElectronSurfaceStyleHelper13(
  popcornElectronSurfaceStyleParam8,
  popcornElectronSurfaceStyleParam9,
) {
  switch (popcornElectronSurfaceStyleParam9) {
    case `bottom-left`:
      return {
        fontFamily: popcornElectronSurfaceStyleValue18,
        left: popcornElectronSurfaceStyleParam8.left,
        top:
          popcornElectronSurfaceStyleParam8.top +
          popcornElectronSurfaceStyleParam8.height +
          popcornElectronSurfaceStyleValue20,
      };
    case `bottom-right`:
      return {
        fontFamily: popcornElectronSurfaceStyleValue18,
        left:
          popcornElectronSurfaceStyleParam8.left +
          popcornElectronSurfaceStyleParam8.width,
        top:
          popcornElectronSurfaceStyleParam8.top +
          popcornElectronSurfaceStyleParam8.height +
          popcornElectronSurfaceStyleValue20,
        transform: `translateX(-100%)`,
      };
    case `top-left`:
      return {
        fontFamily: popcornElectronSurfaceStyleValue18,
        left: popcornElectronSurfaceStyleParam8.left,
        top:
          popcornElectronSurfaceStyleParam8.top -
          popcornElectronSurfaceStyleValue20,
        transform: `translateY(-100%)`,
      };
    case `top-right`:
      return {
        fontFamily: popcornElectronSurfaceStyleValue18,
        left:
          popcornElectronSurfaceStyleParam8.left +
          popcornElectronSurfaceStyleParam8.width,
        top:
          popcornElectronSurfaceStyleParam8.top -
          popcornElectronSurfaceStyleValue20,
        transform: `translate(-100%, -100%)`,
      };
  }
}
function popcornElectronSurfaceStyleHelper14() {
  return (
    <svg
      aria-hidden={!0}
      className={`absolute inset-0 size-full`}
      fill={`none`}
      viewBox={`0 0 26 25`}
    >
      <path
        d={popcornElectronSurfaceStyleValue16}
        fill={`currentColor`}
        stroke={`white`}
        strokeWidth={`1.65`}
      />
    </svg>
  );
}
function popcornElectronSurfaceStyleHelper15() {
  return typeof navigator < `u` && /Win|Linux/.test(navigator.platform)
    ? `Ctrl I`
    : `⌘I`;
}
export function popcornElectronSurfaceStyleU({
  bounds: bounds,
  borderRadius: borderRadius,
  fillOnly = !1,
  borderWidthPx = 2,
  borderColor = _popcornElectronSurfaceStyleQ,
  fillColor = popcornElectronSurfaceStyleK,
  shadow = !fillOnly,
  testId: testId,
}) {
  return (
    <div
      data-testid={testId}
      className={clsx(`pointer-events-none absolute box-border`)}
      style={{
        left: bounds.left,
        top: bounds.top,
        width: bounds.width,
        height: bounds.height,
        borderRadius: borderRadius,
        backgroundColor: fillColor,
        borderStyle: fillOnly ? `none` : `dashed`,
        borderWidth: fillOnly ? 0 : borderWidthPx,
        borderColor: borderColor,
        boxShadow:
          fillOnly || !shadow
            ? `none`
            : `inset 0 0 0 1px rgba(255,255,255,0.28)`,
      }}
    />
  );
}
export const popcornElectronSurfaceStyleF = `#111111`;
function popcornElectronSurfaceStyleHelper16(
  popcornElectronSurfaceStyleParam53,
) {
  let [popcornElectronSurfaceStyleValue317] =
    popcornElectronSurfaceStyleParam53;
  return popcornElectronSurfaceStyleValue317
    ? popcornElectronSurfaceStyleParam53.length === 1
      ? `M ${popcornElectronSurfaceStyleValue317.x} ${popcornElectronSurfaceStyleValue317.y}`
      : popcornElectronSurfaceStyleParam53.reduce(
          (accumulator, current, index) =>
            `${accumulator}${index === 0 ? `` : ` `}${index === 0 ? `M` : `L`} ${current.x} ${current.y}`,
          ``,
        )
    : ``;
}
function popcornElectronSurfaceStyleHelper17(
  popcornElectronSurfaceStyleParam23,
) {
  let popcornElectronSurfaceStyleValue258 =
    popcornElectronSurfaceStyleParam23[0];
  if (!popcornElectronSurfaceStyleValue258) return null;
  let popcornElectronSurfaceStyleValue259 =
      popcornElectronSurfaceStyleValue258.x,
    popcornElectronSurfaceStyleValue260 = popcornElectronSurfaceStyleValue258.x,
    popcornElectronSurfaceStyleValue261 = popcornElectronSurfaceStyleValue258.y,
    popcornElectronSurfaceStyleValue262 = popcornElectronSurfaceStyleValue258.y;
  for (let popcornElectronSurfaceStyleValue339 of popcornElectronSurfaceStyleParam23.slice(
    1,
  ))
    ((popcornElectronSurfaceStyleValue259 = Math.min(
      popcornElectronSurfaceStyleValue259,
      popcornElectronSurfaceStyleValue339.x,
    )),
      (popcornElectronSurfaceStyleValue260 = Math.max(
        popcornElectronSurfaceStyleValue260,
        popcornElectronSurfaceStyleValue339.x,
      )),
      (popcornElectronSurfaceStyleValue261 = Math.min(
        popcornElectronSurfaceStyleValue261,
        popcornElectronSurfaceStyleValue339.y,
      )),
      (popcornElectronSurfaceStyleValue262 = Math.max(
        popcornElectronSurfaceStyleValue262,
        popcornElectronSurfaceStyleValue339.y,
      )));
  return {
    left: popcornElectronSurfaceStyleValue259,
    top: popcornElectronSurfaceStyleValue261,
    width:
      popcornElectronSurfaceStyleValue260 - popcornElectronSurfaceStyleValue259,
    height:
      popcornElectronSurfaceStyleValue262 - popcornElectronSurfaceStyleValue261,
  };
}
export function _popcornElectronSurfaceStyleZ(
  popcornElectronSurfaceStyleParam132,
) {
  return popcornElectronSurfaceStyleHelper17(
    popcornElectronSurfaceStyleParam132.flatMap((item) => item.points),
  );
}
export function popcornElectronSurfaceStyleB(
  popcornElectronSurfaceStyleParam27,
  { paddingPx = 24, minSizePx = 96 } = {},
) {
  let popcornElectronSurfaceStyleValue278 =
      popcornElectronSurfaceStyleParam27.width + paddingPx * 2,
    popcornElectronSurfaceStyleValue279 =
      popcornElectronSurfaceStyleParam27.height + paddingPx * 2,
    popcornElectronSurfaceStyleValue280 = Math.max(
      minSizePx,
      popcornElectronSurfaceStyleValue278,
    ),
    popcornElectronSurfaceStyleValue281 = Math.max(
      minSizePx,
      popcornElectronSurfaceStyleValue279,
    );
  return {
    left:
      popcornElectronSurfaceStyleParam27.left -
      (popcornElectronSurfaceStyleValue280 -
        popcornElectronSurfaceStyleParam27.width) /
        2,
    top:
      popcornElectronSurfaceStyleParam27.top -
      (popcornElectronSurfaceStyleValue281 -
        popcornElectronSurfaceStyleParam27.height) /
        2,
    width: popcornElectronSurfaceStyleValue280,
    height: popcornElectronSurfaceStyleValue281,
  };
}
export function popcornElectronSurfaceStyleL(
  popcornElectronSurfaceStyleParam20,
  popcornElectronSurfaceStyleParam21,
) {
  let popcornElectronSurfaceStyleValue254 = Math.min(
      popcornElectronSurfaceStyleParam21.width,
      popcornElectronSurfaceStyleParam20.width,
    ),
    popcornElectronSurfaceStyleValue255 = Math.min(
      popcornElectronSurfaceStyleParam21.height,
      popcornElectronSurfaceStyleParam20.height,
    );
  return {
    left: Math.min(
      Math.max(0, popcornElectronSurfaceStyleParam20.left),
      Math.max(
        0,
        popcornElectronSurfaceStyleParam21.width -
          popcornElectronSurfaceStyleValue254,
      ),
    ),
    top: Math.min(
      Math.max(0, popcornElectronSurfaceStyleParam20.top),
      Math.max(
        0,
        popcornElectronSurfaceStyleParam21.height -
          popcornElectronSurfaceStyleValue255,
      ),
    ),
    width: popcornElectronSurfaceStyleValue254,
    height: popcornElectronSurfaceStyleValue255,
  };
}
export function popcornElectronSurfaceStyleR({
  drawingId: drawingId,
  screenshot: screenshot,
  markerViewportPoint: markerViewportPoint,
  viewportSize: viewportSize,
}) {
  return {
    localBrowserCommentMetadata: {
      kind: `region`,
      ...(markerViewportPoint == null
        ? {}
        : {
            markerViewportPoint: {
              ...markerViewportPoint,
            },
          }),
      ...(viewportSize == null
        ? {}
        : {
            viewportSize: {
              ...viewportSize,
            },
          }),
    },
    localBrowserScreenshot: {
      ...screenshot,
      commentId: drawingId,
    },
  };
}
export async function popcornElectronSurfaceStyleI({
  cropRect: cropRect,
  viewportSize: viewportSize,
  baseCanvas: baseCanvas,
  overlayCanvases = [],
  strokes: strokes,
  projectPoint: projectPoint,
  mimeType = `image/png`,
}) {
  if (
    typeof OffscreenCanvas > `u` ||
    typeof OffscreenCanvas.prototype.convertToBlob != `function`
  )
    throw Error(
      `Popcorn drawing screenshot export requires OffscreenCanvas support.`,
    );
  let popcornElectronSurfaceStyleValue134 =
      baseCanvas.width / Math.max(1, viewportSize.width),
    popcornElectronSurfaceStyleValue135 =
      baseCanvas.height / Math.max(1, viewportSize.height),
    popcornElectronSurfaceStyleValue136 = Math.max(
      1,
      Math.round(cropRect.width * popcornElectronSurfaceStyleValue134),
    ),
    popcornElectronSurfaceStyleValue137 = Math.max(
      1,
      Math.round(cropRect.height * popcornElectronSurfaceStyleValue135),
    ),
    popcornElectronSurfaceStyleValue138 = new OffscreenCanvas(
      popcornElectronSurfaceStyleValue136,
      popcornElectronSurfaceStyleValue137,
    ),
    popcornElectronSurfaceStyleValue139 =
      popcornElectronSurfaceStyleValue138.getContext(`2d`);
  if (!popcornElectronSurfaceStyleValue139)
    throw Error(`Failed to acquire OffscreenCanvas 2d context.`);
  ((popcornElectronSurfaceStyleValue139.imageSmoothingEnabled = !0),
    (popcornElectronSurfaceStyleValue139.imageSmoothingQuality = `high`),
    (popcornElectronSurfaceStyleValue139.fillStyle = `#ffffff`),
    popcornElectronSurfaceStyleValue139.fillRect(
      0,
      0,
      popcornElectronSurfaceStyleValue136,
      popcornElectronSurfaceStyleValue137,
    ));
  let popcornElectronSurfaceStyleValue140 =
      popcornElectronSurfaceStyleValue136 / Math.max(1, cropRect.width),
    popcornElectronSurfaceStyleValue141 =
      popcornElectronSurfaceStyleValue137 / Math.max(1, cropRect.height);
  for (let popcornElectronSurfaceStyleValue244 of [
    baseCanvas,
    ...overlayCanvases,
  ])
    !popcornElectronSurfaceStyleValue244 ||
      popcornElectronSurfaceStyleValue244.width <= 0 ||
      popcornElectronSurfaceStyleValue244.height <= 0 ||
      popcornElectronSurfaceStyleValue139.drawImage(
        popcornElectronSurfaceStyleValue244,
        cropRect.left *
          (popcornElectronSurfaceStyleValue244.width /
            Math.max(1, viewportSize.width)),
        cropRect.top *
          (popcornElectronSurfaceStyleValue244.height /
            Math.max(1, viewportSize.height)),
        cropRect.width *
          (popcornElectronSurfaceStyleValue244.width /
            Math.max(1, viewportSize.width)),
        cropRect.height *
          (popcornElectronSurfaceStyleValue244.height /
            Math.max(1, viewportSize.height)),
        0,
        0,
        popcornElectronSurfaceStyleValue136,
        popcornElectronSurfaceStyleValue137,
      );
  for (let popcornElectronSurfaceStyleValue179 of strokes) {
    let popcornElectronSurfaceStyleValue185 =
      popcornElectronSurfaceStyleValue179.points
        .map((item) => projectPoint(item))
        .filter((item) => item != null);
    if (popcornElectronSurfaceStyleValue185.length !== 0) {
      if (
        (popcornElectronSurfaceStyleValue139.save(),
        (popcornElectronSurfaceStyleValue139.strokeStyle =
          popcornElectronSurfaceStyleValue179.color),
        (popcornElectronSurfaceStyleValue139.fillStyle =
          popcornElectronSurfaceStyleValue179.color),
        (popcornElectronSurfaceStyleValue139.lineCap = `round`),
        (popcornElectronSurfaceStyleValue139.lineJoin = `round`),
        (popcornElectronSurfaceStyleValue139.lineWidth =
          popcornElectronSurfaceStyleValue179.strokeWidth *
          Math.max(
            popcornElectronSurfaceStyleValue140,
            popcornElectronSurfaceStyleValue141,
          )),
        popcornElectronSurfaceStyleValue185.length === 1)
      ) {
        let [popcornElectronSurfaceStyleValue300] =
          popcornElectronSurfaceStyleValue185;
        if (!popcornElectronSurfaceStyleValue300) {
          popcornElectronSurfaceStyleValue139.restore();
          continue;
        }
        (popcornElectronSurfaceStyleValue139.beginPath(),
          popcornElectronSurfaceStyleValue139.arc(
            (popcornElectronSurfaceStyleValue300.x - cropRect.left) *
              popcornElectronSurfaceStyleValue140,
            (popcornElectronSurfaceStyleValue300.y - cropRect.top) *
              popcornElectronSurfaceStyleValue141,
            (popcornElectronSurfaceStyleValue179.strokeWidth *
              Math.max(
                popcornElectronSurfaceStyleValue140,
                popcornElectronSurfaceStyleValue141,
              )) /
              2,
            0,
            Math.PI * 2,
          ),
          popcornElectronSurfaceStyleValue139.fill(),
          popcornElectronSurfaceStyleValue139.restore());
        continue;
      }
      (popcornElectronSurfaceStyleValue139.beginPath(),
        popcornElectronSurfaceStyleValue185.forEach((item, index) => {
          let popcornElectronSurfaceStyleValue350 =
              (item.x - cropRect.left) * popcornElectronSurfaceStyleValue140,
            popcornElectronSurfaceStyleValue351 =
              (item.y - cropRect.top) * popcornElectronSurfaceStyleValue141;
          index === 0
            ? popcornElectronSurfaceStyleValue139.moveTo(
                popcornElectronSurfaceStyleValue350,
                popcornElectronSurfaceStyleValue351,
              )
            : popcornElectronSurfaceStyleValue139.lineTo(
                popcornElectronSurfaceStyleValue350,
                popcornElectronSurfaceStyleValue351,
              );
        }),
        popcornElectronSurfaceStyleValue139.stroke(),
        popcornElectronSurfaceStyleValue139.restore());
    }
  }
  return {
    blob: await popcornElectronSurfaceStyleValue138.convertToBlob({
      type: mimeType,
    }),
    width: popcornElectronSurfaceStyleValue136,
    height: popcornElectronSurfaceStyleValue137,
    mimeType: mimeType,
  };
}
function popcornElectronSurfaceStyleHelper18(
  popcornElectronSurfaceStyleParam115,
  popcornElectronSurfaceStyleParam116,
) {
  return popcornElectronSurfaceStyleParam115.points
    .map((item) => popcornElectronSurfaceStyleParam116(item))
    .filter((item) => item != null);
}
function popcornElectronSurfaceStyleHelper19({
  stroke: stroke,
  projectPoint: projectPoint,
}) {
  let popcornElectronSurfaceStyleValue211 = popcornElectronSurfaceStyleHelper18(
    stroke,
    projectPoint,
  );
  if (popcornElectronSurfaceStyleValue211.length === 0) return null;
  if (popcornElectronSurfaceStyleValue211.length === 1) {
    let [popcornElectronSurfaceStyleValue341] =
      popcornElectronSurfaceStyleValue211;
    return popcornElectronSurfaceStyleValue341 ? (
      <circle
        cx={popcornElectronSurfaceStyleValue341.x}
        cy={popcornElectronSurfaceStyleValue341.y}
        r={stroke.strokeWidth / 2}
        fill={stroke.color}
      />
    ) : null;
  }
  return (
    <path
      d={popcornElectronSurfaceStyleHelper16(
        popcornElectronSurfaceStyleValue211,
      )}
      fill={`none`}
      stroke={stroke.color}
      strokeWidth={stroke.strokeWidth}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    />
  );
}
export function popcornElectronSurfaceStyleP({
  strokes: strokes,
  projectPoint: projectPoint,
  testId: testId,
  clipBounds: clipBounds,
}) {
  let popcornElectronSurfaceStyleValue177 = `popcorn-drawing-overlay-${(0, React.useId)().replace(/[:]/g, ``)}`;
  return strokes.length === 0 ? null : (
    <svg
      data-testid={testId}
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden`}
      width={`100%`}
      height={`100%`}
    >
      {clipBounds ? (
        <defs>
          <clipPath id={popcornElectronSurfaceStyleValue177}>
            <rect
              x={clipBounds.left}
              y={clipBounds.top}
              width={clipBounds.width}
              height={clipBounds.height}
            />
          </clipPath>
        </defs>
      ) : null}
      <g
        clipPath={
          clipBounds ? `url(#${popcornElectronSurfaceStyleValue177})` : void 0
        }
      >
        {strokes.map((item, index) =>
          React.createElement(popcornElectronSurfaceStyleHelper19, {
            stroke: item,
            projectPoint: projectPoint,
          }),
        )}
      </g>
    </svg>
  );
}
var popcornElectronSurfaceStyleValue22 = 0;
export function popcornElectronSurfaceStyleN(
  popcornElectronSurfaceStyleParam96,
) {
  return (
    (popcornElectronSurfaceStyleValue22 += 1),
    `${popcornElectronSurfaceStyleParam96}-${Date.now().toString(36)}-${popcornElectronSurfaceStyleValue22.toString(36)}`
  );
}
function popcornElectronSurfaceStyleHelper20({
  active: active,
  disabled = !1,
  onClick: onClick,
  label: label,
  activeLabel = label,
  icon: icon,
  testId: testId,
}) {
  let popcornElectronSurfaceStyleValue123 = (0, React.useRef)(null),
    [popcornElectronSurfaceStyleValue124, popcornElectronSurfaceStyleValue125] =
      (0, React.useState)(!1),
    [popcornElectronSurfaceStyleValue126, popcornElectronSurfaceStyleValue127] =
      (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (active) return;
    (popcornElectronSurfaceStyleValue125(!1),
      popcornElectronSurfaceStyleValue127(!1));
    let popcornElectronSurfaceStyleValue331 =
      popcornElectronSurfaceStyleValue123.current;
    typeof document < `u` &&
      popcornElectronSurfaceStyleValue331 != null &&
      popcornElectronSurfaceStyleValue331 === document.activeElement &&
      popcornElectronSurfaceStyleValue331.blur();
  }, [active]);
  let popcornElectronSurfaceStyleValue128 = `color-mix(in srgb, var(--color-token-charts-blue, #339cff) ${popcornElectronSurfaceStyleValue126 && !popcornElectronSurfaceStyleValue124 ? `15%` : `10%`}, transparent)`,
    popcornElectronSurfaceStyleValue129 =
      active && activeLabel != null ? activeLabel : label;
  return (
    <button
      ref={popcornElectronSurfaceStyleValue123}
      type={`button`}
      data-testid={testId}
      aria-label={popcornElectronSurfaceStyleValue129}
      aria-pressed={active}
      disabled={disabled}
      className={clsx(
        `ease-basic inline-flex h-token-button-composer min-w-8 appearance-none items-center overflow-hidden rounded-lg border border-transparent text-base leading-[18px] outline-none transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none`,
        `disabled:cursor-not-allowed disabled:opacity-100`,
        active
          ? `max-w-40 justify-start px-2.5`
          : `max-w-8 justify-center px-0`,
        active
          ? `border-token-charts-blue/40`
          : `bg-transparent text-token-text-tertiary hover:bg-token-list-hover-background`,
      )}
      style={
        active
          ? {
              backgroundColor: popcornElectronSurfaceStyleValue128,
              color: `var(--color-token-text-link-foreground, #339cff)`,
            }
          : void 0
      }
      onClick={() => {
        (popcornElectronSurfaceStyleValue125(!active), onClick());
      }}
      onPointerEnter={() => {
        popcornElectronSurfaceStyleValue127(!0);
      }}
      onPointerLeave={() => {
        (popcornElectronSurfaceStyleValue127(!1),
          popcornElectronSurfaceStyleValue125(!1));
      }}
    >
      <span
        className={clsx(
          `flex min-w-0 items-center`,
          active ? `justify-start` : `w-full justify-center`,
        )}
      >
        {icon({
          className: clsx(
            `icon-sm shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
            active ? `-translate-x-0.5` : `translate-x-0`,
          ),
        })}
        <span
          className={clsx(
            `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
            active ? `ms-1.5 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
          )}
        >
          {popcornElectronSurfaceStyleValue129}
        </span>
      </span>
    </button>
  );
}
export function _popcornElectronSurfaceStyleJ({
  active: active,
  disabled = !1,
  onClick: onClick,
  testId = `popcorn-annotation-button`,
}) {
  return React.createElement(popcornElectronSurfaceStyleHelper20, {
    active: active,
    activeLabel: `Annotating`,
    disabled: disabled,
    onClick: onClick,
    label: `Annotation`,
    icon: remoteTextEditSessionV,
    testId: testId,
  });
}
export function popcornElectronSurfaceStyleM({
  active: active,
  disabled = !1,
  onClick: onClick,
  testId = `popcorn-drawing-button`,
}) {
  return React.createElement(popcornElectronSurfaceStyleHelper20, {
    active: active,
    disabled: disabled,
    onClick: onClick,
    label: `Drawing`,
    icon: remoteTextEditSessionF,
    testId: testId,
  });
}
var popcornElectronSurfaceStyleValue23 = toEsModule(ReactDOM()),
  popcornElectronSurfaceStyleValue24 = 294,
  popcornElectronSurfaceStyleValue25 = 12,
  popcornElectronSurfaceStyleValue26 = 16,
  popcornElectronSurfaceStyleValue27 = 4,
  popcornElectronSurfaceStyleValue28 = 112,
  popcornElectronSurfaceStyleValue29 = 44,
  popcornElectronSurfaceStyleValue30 = 24,
  popcornElectronSurfaceStyleValue31 = 72,
  popcornElectronSurfaceStyleValue32 = clsx(
    `text-token-dropdown-foreground placeholder:text-token-description-foreground min-h-0 w-full resize-none border-0 bg-transparent p-0 font-sans leading-normal outline-none`,
    `appearance-none shadow-none [text-decoration:none]`,
    `focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent`,
    `[outline:none] [box-shadow:none] [-webkit-appearance:none]`,
    `!min-h-0 max-h-full flex-1 overflow-y-auto text-[length:var(--codex-chat-font-size,13px)] leading-6`,
  ),
  _t = {
    "--codex-chat-font-size": `13px`,
    fontSize: `var(--codex-chat-font-size, 13px)`,
  },
  popcornElectronSurfaceStyleValue33 = `pointer-events-none absolute inset-x-0 top-0 flex flex-col overflow-visible bg-transparent`,
  popcornElectronSurfaceStyleValue34 = `pointer-events-auto relative w-full overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height] duration-150 ease-out motion-reduce:transition-none [background-color:var(--color-token-dropdown-background,var(--color-token-main-surface-primary,white))]`,
  popcornElectronSurfaceStyleValue35 = `absolute left-4 min-w-0 overflow-hidden transition-[width,top,bottom] duration-150 ease-out motion-reduce:transition-none`,
  popcornElectronSurfaceStyleValue36 = `absolute right-3 bottom-2 left-2 flex origin-bottom-left items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
  popcornElectronSurfaceStyleValue37 = `pointer-events-none absolute top-0 left-0 whitespace-pre text-[length:var(--codex-chat-font-size,13px)] leading-5 font-sans opacity-0`,
  popcornElectronSurfaceStyleValue38 = 28,
  popcornElectronSurfaceStyleValue39 = 8,
  popcornElectronSurfaceStyleValue40 = 16,
  popcornElectronSurfaceStyleValue41 = 8,
  popcornElectronSurfaceStyleValue42 = 40,
  popcornElectronSurfaceStyleValue43 = 12,
  popcornElectronSurfaceStyleValue44 = `browser-comment-popup-shake`,
  popcornElectronSurfaceStyleValue45 = `popcorn-annotation-editor-shake-style`,
  popcornElectronSurfaceStyleValue46 = `
@keyframes browser-comment-popup-shake {
  0%,
  100% {
    transform: translateX(0) rotate(0deg);
  }
  12% {
    transform: translateX(6px) rotate(0.75deg);
  }
  26% {
    transform: translateX(-12px) rotate(-1.5deg);
  }
  40% {
    transform: translateX(16px) rotate(2deg);
  }
  54% {
    transform: translateX(-16px) rotate(-2deg);
  }
  68% {
    transform: translateX(12px) rotate(1.5deg);
  }
  82% {
    transform: translateX(-6px) rotate(-0.75deg);
  }
}

.browser-comment-popup-shake {
  animation: browser-comment-popup-shake 900ms linear both;
}

@media (prefers-reduced-motion: reduce) {
  .browser-comment-popup-shake {
    animation: none;
  }
}
`,
  popcornElectronSurfaceStyleValue47 = new WeakMap();
export const _popcornElectronSurfaceStyleK = (0, React.forwardRef)(function (
  {
    anchorBounds: anchorBounds,
    containerElement: containerElement,
    portalContainerElement = null,
    value: value,
    onChange: onChange,
    onCancel: onCancel,
    onSubmit: onSubmit,
    mode = `create`,
    onDelete: onDelete,
    testId = `popcorn-annotation-editor`,
  },
  popcornElectronSurfaceStyleParam1,
) {
  let popcornElectronSurfaceStyleValue74 = (0, React.useRef)(null),
    popcornElectronSurfaceStyleValue75 = (0, React.useRef)(null),
    popcornElectronSurfaceStyleValue76 = (0, React.useRef)(null),
    popcornElectronSurfaceStyleValue77 = (0, React.useRef)(null),
    [popcornElectronSurfaceStyleValue78, popcornElectronSurfaceStyleValue79] =
      (0, React.useState)(!1),
    [popcornElectronSurfaceStyleValue80, popcornElectronSurfaceStyleValue81] =
      (0, React.useState)(!1),
    popcornElectronSurfaceStyleValue82 = mode === `edit`,
    popcornElectronSurfaceStyleValue83 = value.trim().length > 0,
    popcornElectronSurfaceStyleValue84 =
      popcornElectronSurfaceStyleValue82 && popcornElectronSurfaceStyleValue78,
    popcornElectronSurfaceStyleValue85 = !popcornElectronSurfaceStyleValue80,
    popcornElectronSurfaceStyleValue86 =
      portalContainerElement ?? containerElement,
    popcornElectronSurfaceStyleValue87 = (0, React.useMemo)(
      () => (anchorBounds ? popcornElectronSurfaceStyleG(anchorBounds) : null),
      [anchorBounds],
    ),
    popcornElectronSurfaceStyleValue88 = (0, React.useMemo)(
      () =>
        !popcornElectronSurfaceStyleValue87 || !containerElement
          ? null
          : {
              contextElement: containerElement,
              getBoundingClientRect: () => {
                let popcornElectronSurfaceStyleValue319 =
                    containerElement.getBoundingClientRect(),
                  popcornElectronSurfaceStyleValue320 =
                    popcornElectronSurfaceStyleValue319.left +
                    popcornElectronSurfaceStyleValue87.left,
                  popcornElectronSurfaceStyleValue321 =
                    popcornElectronSurfaceStyleValue319.top +
                    popcornElectronSurfaceStyleValue87.top -
                    popcornElectronSurfaceStyleValue29 / 2;
                return {
                  x: popcornElectronSurfaceStyleValue320,
                  y: popcornElectronSurfaceStyleValue321,
                  left: popcornElectronSurfaceStyleValue320,
                  top: popcornElectronSurfaceStyleValue321,
                  width: 0,
                  height: popcornElectronSurfaceStyleValue29,
                  right: popcornElectronSurfaceStyleValue320,
                  bottom:
                    popcornElectronSurfaceStyleValue321 +
                    popcornElectronSurfaceStyleValue29,
                };
              },
            },
      [containerElement, popcornElectronSurfaceStyleValue87],
    ),
    {
      refs: refs,
      x: x,
      y: y,
      strategy: strategy,
      update: update,
    } = popcornElectronSurfaceStyleImport6({
      placement: `right-start`,
      strategy: `absolute`,
      middleware: [
        popcornElectronSurfaceStyleImport5(
          popcornElectronSurfaceStyleValue26 +
            popcornElectronSurfaceStyleValue27,
        ),
        popcornElectronSurfaceStyleImport8({
          fallbackPlacements: [`left-start`],
          padding: popcornElectronSurfaceStyleValue25,
          ...(popcornElectronSurfaceStyleValue86
            ? {
                boundary: popcornElectronSurfaceStyleValue86,
              }
            : {}),
        }),
        popcornElectronSurfaceStyleImport9({
          padding: popcornElectronSurfaceStyleValue25,
          ...(popcornElectronSurfaceStyleValue86
            ? {
                boundary: popcornElectronSurfaceStyleValue86,
              }
            : {}),
        }),
        popcornElectronSurfaceStyleImport10({
          padding: popcornElectronSurfaceStyleValue25,
          ...(popcornElectronSurfaceStyleValue86
            ? {
                boundary: popcornElectronSurfaceStyleValue86,
              }
            : {}),
          apply({ availableWidth: availableWidth, elements: elements }) {
            elements.floating.style.maxWidth = `${Math.max(0, availableWidth)}px`;
          },
        }),
      ],
      whileElementsMounted: popcornElectronSurfaceStyleImport7,
    }),
    popcornElectronSurfaceStyleValue89 = popcornElectronSurfaceStyleValue78
      ? popcornElectronSurfaceStyleValue28
      : popcornElectronSurfaceStyleValue29,
    popcornElectronSurfaceStyleValue90 =
      y == null
        ? void 0
        : y +
          (popcornElectronSurfaceStyleValue28 -
            popcornElectronSurfaceStyleValue89) /
            2 +
          popcornElectronSurfaceStyleValue27,
    popcornElectronSurfaceStyleValue91 = (0, React.useCallback)(
      (popcornElectronSurfaceStyleParam86) => {
        if (
          ((popcornElectronSurfaceStyleValue74.current =
            popcornElectronSurfaceStyleParam86),
          refs.setFloating(popcornElectronSurfaceStyleParam86),
          typeof popcornElectronSurfaceStyleParam1 == `function`)
        ) {
          popcornElectronSurfaceStyleParam1(popcornElectronSurfaceStyleParam86);
          return;
        }
        popcornElectronSurfaceStyleParam1 &&
          (popcornElectronSurfaceStyleParam1.current =
            popcornElectronSurfaceStyleParam86);
      },
      [popcornElectronSurfaceStyleParam1, refs],
    );
  if (
    ((0, React.useEffect)(() => {
      anchorBounds && popcornElectronSurfaceStyleValue75.current?.focus();
    }, [anchorBounds]),
    (0, React.useEffect)(() => {
      let popcornElectronSurfaceStyleValue301 =
        popcornElectronSurfaceStyleValue75.current;
      if (popcornElectronSurfaceStyleValue301 == null) return;
      let popcornElectronSurfaceStyleValue302 = (event) => {
        event.stopPropagation();
      };
      return (
        popcornElectronSurfaceStyleValue301.addEventListener(
          `wheel`,
          popcornElectronSurfaceStyleValue302,
          {
            passive: !0,
          },
        ),
        () => {
          popcornElectronSurfaceStyleValue301.removeEventListener(
            `wheel`,
            popcornElectronSurfaceStyleValue302,
          );
        }
      );
    }, [anchorBounds]),
    (0, React.useLayoutEffect)(() => {
      let popcornElectronSurfaceStyleValue220 =
        popcornElectronSurfaceStyleValue75.current;
      if (!popcornElectronSurfaceStyleValue220) return;
      let popcornElectronSurfaceStyleValue221 =
          popcornElectronSurfaceStyleHelper24(value),
        popcornElectronSurfaceStyleValue222 =
          popcornElectronSurfaceStyleValue82 ||
          popcornElectronSurfaceStyleHelper21({
            text: value,
            hasMultipleBlocks: popcornElectronSurfaceStyleValue221 > 1,
            measureElement: popcornElectronSurfaceStyleValue77.current,
            surfaceElement: popcornElectronSurfaceStyleValue76.current,
          });
      if (
        popcornElectronSurfaceStyleValue222 !==
        popcornElectronSurfaceStyleValue78
      ) {
        popcornElectronSurfaceStyleValue79(popcornElectronSurfaceStyleValue222);
        return;
      }
      if (popcornElectronSurfaceStyleValue222) {
        ((popcornElectronSurfaceStyleValue220.style.height = `0px`),
          (popcornElectronSurfaceStyleValue220.style.height = `${Math.min(Math.max(popcornElectronSurfaceStyleValue220.scrollHeight, popcornElectronSurfaceStyleValue221 * popcornElectronSurfaceStyleValue30), popcornElectronSurfaceStyleValue31)}px`));
        return;
      }
      popcornElectronSurfaceStyleValue220.style.height = `${popcornElectronSurfaceStyleValue30}px`;
    }, [
      popcornElectronSurfaceStyleValue82,
      popcornElectronSurfaceStyleValue78,
      value,
    ]),
    (0, React.useEffect)(() => {
      refs.setReference(popcornElectronSurfaceStyleValue88);
    }, [refs, popcornElectronSurfaceStyleValue88]),
    (0, React.useEffect)(() => {
      let popcornElectronSurfaceStyleValue217 = (event) => {
          popcornElectronSurfaceStyleValue81(event.metaKey || event.ctrlKey);
        },
        popcornElectronSurfaceStyleValue218 = () => {
          popcornElectronSurfaceStyleValue81(!1);
        };
      return (
        window.addEventListener(
          `keydown`,
          popcornElectronSurfaceStyleValue217,
          !0,
        ),
        window.addEventListener(
          `keyup`,
          popcornElectronSurfaceStyleValue217,
          !0,
        ),
        window.addEventListener(`blur`, popcornElectronSurfaceStyleValue218),
        () => {
          (window.removeEventListener(
            `keydown`,
            popcornElectronSurfaceStyleValue217,
            !0,
          ),
            window.removeEventListener(
              `keyup`,
              popcornElectronSurfaceStyleValue217,
              !0,
            ),
            window.removeEventListener(
              `blur`,
              popcornElectronSurfaceStyleValue218,
            ));
        }
      );
    }, []),
    (0, React.useEffect)(() => {
      anchorBounds && update?.();
    }, [
      anchorBounds?.height,
      anchorBounds?.left,
      anchorBounds?.top,
      anchorBounds?.width,
      value,
      popcornElectronSurfaceStyleValue78,
      update,
    ]),
    !anchorBounds)
  )
    return null;
  let popcornElectronSurfaceStyleValue92 = (
    <div
      ref={popcornElectronSurfaceStyleValue91}
      data-testid={testId}
      className={`pointer-events-auto z-40`}
      style={{
        position: strategy,
        left: x ?? 0,
        top: popcornElectronSurfaceStyleValue90 ?? 0,
        width: popcornElectronSurfaceStyleValue24,
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
      }}
    >
      <form
        className={`pointer-events-none relative h-[112px] w-full overflow-visible bg-transparent text-token-foreground`}
        style={_t}
        onSubmit={(event) => {
          (event.preventDefault(),
            popcornElectronSurfaceStyleValue83 &&
              onSubmit(
                popcornElectronSurfaceStyleValue82 ? `saved` : `direct`,
                `button`,
              ));
        }}
      >
        <div
          className={popcornElectronSurfaceStyleValue33}
          style={{
            height: popcornElectronSurfaceStyleValue28,
          }}
        >
          <div
            ref={popcornElectronSurfaceStyleValue76}
            data-browser-comment-editor-surface={!0}
            className={popcornElectronSurfaceStyleValue34}
            style={{
              height: popcornElectronSurfaceStyleValue89,
              backgroundColor: `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
            }}
          >
            <div
              className={clsx(
                popcornElectronSurfaceStyleValue35,
                popcornElectronSurfaceStyleValue84
                  ? `top-2 bottom-11 w-[calc(100%-32px)]`
                  : `top-2 bottom-2 w-[calc(100%-60px)]`,
              )}
            >
              <div className={`h-full min-h-0 translate-y-0.5`}>
                <textarea
                  ref={popcornElectronSurfaceStyleValue75}
                  value={value}
                  onChange={(event) => onChange(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === `Escape`) {
                      (event.preventDefault(),
                        event.stopPropagation(),
                        onCancel());
                      return;
                    }
                    event.key === `Enter` &&
                      !event.altKey &&
                      !event.shiftKey &&
                      popcornElectronSurfaceStyleValue83 &&
                      (event.preventDefault(),
                      event.stopPropagation(),
                      onSubmit(
                        popcornElectronSurfaceStyleValue82 ||
                          event.metaKey ||
                          event.ctrlKey
                          ? `saved`
                          : `direct`,
                        `keyboard`,
                      ));
                  }}
                  placeholder={`Describe a change or ask a question`}
                  rows={1}
                  className={clsx(
                    popcornElectronSurfaceStyleValue32,
                    !popcornElectronSurfaceStyleValue78 &&
                      `!overflow-hidden whitespace-nowrap`,
                  )}
                  style={{
                    fontSize: `var(--codex-chat-font-size, 13px)`,
                    lineHeight: `${popcornElectronSurfaceStyleValue30}px`,
                    appearance: `none`,
                    WebkitAppearance: `none`,
                    outline: `none`,
                    boxShadow: `none`,
                    border: `0 none transparent`,
                    borderImage: `none`,
                    backgroundColor: `transparent`,
                    backgroundImage: `none`,
                  }}
                />
              </div>
            </div>
            <span
              ref={popcornElectronSurfaceStyleValue77}
              aria-hidden={`true`}
              className={popcornElectronSurfaceStyleValue37}
              style={{
                fontSize: `var(--codex-chat-font-size, 13px)`,
                lineHeight: `${popcornElectronSurfaceStyleValue30}px`,
              }}
            >
              {value}
            </span>
            {popcornElectronSurfaceStyleValue82 ? (
              <div
                aria-hidden={!popcornElectronSurfaceStyleValue78}
                className={clsx(
                  popcornElectronSurfaceStyleValue36,
                  `justify-between`,
                  popcornElectronSurfaceStyleValue78
                    ? `scale-100 opacity-100`
                    : `pointer-events-none scale-95 opacity-0`,
                )}
              >
                <button
                  type={`button`}
                  aria-label={`Delete annotation`}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`}
                  onClick={onDelete}
                >
                  {React.createElement(_remoteTextEditSessionB, {
                    className: `size-4`,
                  })}
                </button>
                <div className={`flex items-center gap-1.5`}>
                  <button
                    type={`button`}
                    tabIndex={popcornElectronSurfaceStyleValue78 ? void 0 : -1}
                    className={`border-token-border-light bg-token-main-surface-primary text-token-text-primary hover:bg-token-bg-tertiary inline-flex h-8 items-center rounded-full border px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium`}
                    style={{
                      fontSize: `var(--codex-chat-font-size, 13px)`,
                      lineHeight: `20px`,
                    }}
                    onClick={onCancel}
                  >{`Cancel`}</button>
                  <button
                    type={`submit`}
                    disabled={!popcornElectronSurfaceStyleValue83}
                    className={clsx(
                      `inline-flex h-8 items-center rounded-full px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium transition-colors`,
                      popcornElectronSurfaceStyleValue83
                        ? `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`
                        : `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`,
                    )}
                    style={{
                      fontSize: `var(--codex-chat-font-size, 13px)`,
                      lineHeight: `20px`,
                    }}
                  >{`Save`}</button>
                </div>
              </div>
            ) : null}
            {popcornElectronSurfaceStyleValue82 ? null : (
              <div
                className={`absolute right-2 bottom-2 flex items-center gap-2`}
              >
                <button
                  aria-label={`Comment`}
                  data-browser-comment-submit={!0}
                  type={`button`}
                  disabled={!popcornElectronSurfaceStyleValue83}
                  className={clsx(
                    `inline-flex size-7 items-center justify-center rounded-full transition-colors`,
                    popcornElectronSurfaceStyleValue83
                      ? `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`
                      : `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`,
                  )}
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() => {
                    popcornElectronSurfaceStyleValue83 &&
                      onSubmit(
                        popcornElectronSurfaceStyleValue80 ? `saved` : `direct`,
                        `button`,
                      );
                  }}
                >
                  {popcornElectronSurfaceStyleValue85
                    ? React.createElement(_remoteTextEditSessionB, {
                        className: `size-4`,
                      })
                    : React.createElement(remoteTextEditSessionS, {
                        className: `size-4`,
                      })}
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
  return portalContainerElement
    ? (0, popcornElectronSurfaceStyleValue23.createPortal)(
        popcornElectronSurfaceStyleValue92,
        portalContainerElement,
      )
    : popcornElectronSurfaceStyleValue92;
});
function popcornElectronSurfaceStyleHelper21({
  text: text,
  hasMultipleBlocks: hasMultipleBlocks,
  measureElement: measureElement,
  surfaceElement: surfaceElement,
}) {
  let popcornElectronSurfaceStyleValue275 = text.trim();
  if (popcornElectronSurfaceStyleValue275.length === 0) return !1;
  if (hasMultipleBlocks) return !0;
  let popcornElectronSurfaceStyleValue276 =
      popcornElectronSurfaceStyleHelper22(surfaceElement),
    popcornElectronSurfaceStyleValue277 = popcornElectronSurfaceStyleHelper23(
      text,
      measureElement,
    );
  return popcornElectronSurfaceStyleValue276 == null ||
    popcornElectronSurfaceStyleValue277 == null
    ? popcornElectronSurfaceStyleValue275.length >=
        popcornElectronSurfaceStyleValue42
    : popcornElectronSurfaceStyleValue277 + popcornElectronSurfaceStyleValue43 >
        popcornElectronSurfaceStyleValue276;
}
function popcornElectronSurfaceStyleHelper22(
  popcornElectronSurfaceStyleParam22,
) {
  if (popcornElectronSurfaceStyleParam22 == null) return null;
  let popcornElectronSurfaceStyleValue256 =
    popcornElectronSurfaceStyleParam22.getBoundingClientRect();
  if (popcornElectronSurfaceStyleValue256.width === 0) return null;
  let popcornElectronSurfaceStyleValue257 =
    popcornElectronSurfaceStyleParam22
      .querySelector(`[data-browser-comment-submit]`)
      ?.getBoundingClientRect().width ?? popcornElectronSurfaceStyleValue38;
  return (
    popcornElectronSurfaceStyleValue256.width -
    popcornElectronSurfaceStyleValue40 -
    popcornElectronSurfaceStyleValue41 -
    popcornElectronSurfaceStyleValue257 -
    popcornElectronSurfaceStyleValue39
  );
}
function popcornElectronSurfaceStyleHelper23(
  popcornElectronSurfaceStyleParam87,
  popcornElectronSurfaceStyleParam88,
) {
  return popcornElectronSurfaceStyleParam88 == null
    ? null
    : ((popcornElectronSurfaceStyleParam88.textContent =
        popcornElectronSurfaceStyleParam87),
      popcornElectronSurfaceStyleParam88.getBoundingClientRect().width);
}
function popcornElectronSurfaceStyleHelper24(
  popcornElectronSurfaceStyleParam118,
) {
  return Math.max(
    1,
    popcornElectronSurfaceStyleParam118.split(/\r\n|\r|\n/).length,
  );
}
export function popcornElectronSurfaceStyleA(
  popcornElectronSurfaceStyleParam13,
) {
  if (popcornElectronSurfaceStyleParam13 == null) return;
  let popcornElectronSurfaceStyleValue223 =
    popcornElectronSurfaceStyleParam13.ownerDocument;
  (popcornElectronSurfaceStyleHelper25(popcornElectronSurfaceStyleValue223),
    popcornElectronSurfaceStyleParam13.classList.remove(
      popcornElectronSurfaceStyleValue44,
    ));
  let popcornElectronSurfaceStyleValue224 =
    popcornElectronSurfaceStyleValue223.defaultView;
  if (popcornElectronSurfaceStyleValue224 == null) {
    popcornElectronSurfaceStyleParam13.classList.add(
      popcornElectronSurfaceStyleValue44,
    );
    return;
  }
  let popcornElectronSurfaceStyleValue225 =
    popcornElectronSurfaceStyleValue47.get(popcornElectronSurfaceStyleParam13);
  popcornElectronSurfaceStyleValue225 != null &&
    popcornElectronSurfaceStyleValue224.cancelAnimationFrame(
      popcornElectronSurfaceStyleValue225,
    );
  let popcornElectronSurfaceStyleValue226 =
    popcornElectronSurfaceStyleValue224.requestAnimationFrame(() => {
      (popcornElectronSurfaceStyleValue47.delete(
        popcornElectronSurfaceStyleParam13,
      ),
        popcornElectronSurfaceStyleParam13.classList.add(
          popcornElectronSurfaceStyleValue44,
        ));
    });
  popcornElectronSurfaceStyleValue47.set(
    popcornElectronSurfaceStyleParam13,
    popcornElectronSurfaceStyleValue226,
  );
}
function popcornElectronSurfaceStyleHelper25(
  popcornElectronSurfaceStyleParam58,
) {
  if (
    popcornElectronSurfaceStyleParam58.getElementById(
      popcornElectronSurfaceStyleValue45,
    ) != null
  )
    return;
  let popcornElectronSurfaceStyleValue328 =
    popcornElectronSurfaceStyleParam58.createElement(`style`);
  ((popcornElectronSurfaceStyleValue328.id =
    popcornElectronSurfaceStyleValue45),
    (popcornElectronSurfaceStyleValue328.textContent =
      popcornElectronSurfaceStyleValue46),
    popcornElectronSurfaceStyleParam58.head.appendChild(
      popcornElectronSurfaceStyleValue328,
    ));
}
var popcornElectronSurfaceStyleValue48 = 32,
  popcornElectronSurfaceStyleValue49 = 294,
  popcornElectronSurfaceStyleValue50 = 16,
  popcornElectronSurfaceStyleValue51 = 12,
  popcornElectronSurfaceStyleValue52 = 26,
  popcornElectronSurfaceStyleValue53 = `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
  popcornElectronSurfaceStyleValue54 = `var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))`,
  popcornElectronSurfaceStyleValue55 = `var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))`;
function popcornElectronSurfaceStyleHelper26(
  popcornElectronSurfaceStyleParam122,
  popcornElectronSurfaceStyleParam123,
  popcornElectronSurfaceStyleParam124,
) {
  return Math.min(
    popcornElectronSurfaceStyleParam124,
    Math.max(
      popcornElectronSurfaceStyleParam123,
      popcornElectronSurfaceStyleParam122,
    ),
  );
}
function popcornElectronSurfaceStyleHelper27(
  popcornElectronSurfaceStyleParam7,
) {
  let popcornElectronSurfaceStyleValue197 = Math.min(
      popcornElectronSurfaceStyleValue49,
      Math.max(
        1,
        popcornElectronSurfaceStyleParam7.containerWidth -
          popcornElectronSurfaceStyleValue50 * 2,
      ),
    ),
    popcornElectronSurfaceStyleValue198 = Math.min(
      popcornElectronSurfaceStyleParam7.previewWidth &&
        popcornElectronSurfaceStyleParam7.previewWidth > 0
        ? popcornElectronSurfaceStyleParam7.previewWidth
        : popcornElectronSurfaceStyleValue197,
      popcornElectronSurfaceStyleValue197,
    ),
    popcornElectronSurfaceStyleValue199 =
      popcornElectronSurfaceStyleValue52 / 2 +
      popcornElectronSurfaceStyleValue51,
    popcornElectronSurfaceStyleValue200 = popcornElectronSurfaceStyleHelper26(
      popcornElectronSurfaceStyleParam7.markerPoint.left -
        popcornElectronSurfaceStyleValue198 / 2,
      popcornElectronSurfaceStyleValue50,
      Math.max(
        popcornElectronSurfaceStyleValue50,
        popcornElectronSurfaceStyleParam7.containerWidth -
          popcornElectronSurfaceStyleValue198 -
          popcornElectronSurfaceStyleValue50,
      ),
    ),
    popcornElectronSurfaceStyleValue201 =
      popcornElectronSurfaceStyleParam7.markerPoint.top -
      popcornElectronSurfaceStyleValue199 -
      popcornElectronSurfaceStyleValue48;
  if (popcornElectronSurfaceStyleValue201 >= popcornElectronSurfaceStyleValue50)
    return {
      left: popcornElectronSurfaceStyleValue200,
      top: popcornElectronSurfaceStyleValue201,
      maxWidth: popcornElectronSurfaceStyleValue197,
    };
  let popcornElectronSurfaceStyleValue202 =
    popcornElectronSurfaceStyleParam7.markerPoint.top +
    popcornElectronSurfaceStyleValue199;
  return popcornElectronSurfaceStyleValue202 +
    popcornElectronSurfaceStyleValue48 <=
    popcornElectronSurfaceStyleParam7.containerHeight -
      popcornElectronSurfaceStyleValue50
    ? {
        left: popcornElectronSurfaceStyleValue200,
        top: popcornElectronSurfaceStyleValue202,
        maxWidth: popcornElectronSurfaceStyleValue197,
      }
    : {
        left: popcornElectronSurfaceStyleValue200,
        top: popcornElectronSurfaceStyleHelper26(
          popcornElectronSurfaceStyleValue201,
          popcornElectronSurfaceStyleValue50,
          Math.max(
            popcornElectronSurfaceStyleValue50,
            popcornElectronSurfaceStyleParam7.containerHeight -
              popcornElectronSurfaceStyleValue48 -
              popcornElectronSurfaceStyleValue50,
          ),
        ),
        maxWidth: popcornElectronSurfaceStyleValue197,
      };
}
export function popcornElectronSurfaceStyleO({
  body: body,
  markerPosition: markerPosition,
  containerElement: containerElement,
  testId = `popcorn-annotation-preview`,
}) {
  let popcornElectronSurfaceStyleValue146 = (0, React.useRef)(null),
    [popcornElectronSurfaceStyleValue147, popcornElectronSurfaceStyleValue148] =
      (0, React.useState)(null);
  if (
    ((0, React.useLayoutEffect)(() => {
      let popcornElectronSurfaceStyleValue334 =
        popcornElectronSurfaceStyleValue146.current;
      if (!popcornElectronSurfaceStyleValue334) return;
      let popcornElectronSurfaceStyleValue335 = Math.ceil(
        popcornElectronSurfaceStyleValue334.getBoundingClientRect().width,
      );
      popcornElectronSurfaceStyleValue148(
        (popcornElectronSurfaceStyleParam151) =>
          popcornElectronSurfaceStyleParam151 ===
          popcornElectronSurfaceStyleValue335
            ? popcornElectronSurfaceStyleParam151
            : popcornElectronSurfaceStyleValue335,
      );
    }, [body, markerPosition.left, markerPosition.top]),
    !containerElement)
  )
    return null;
  let popcornElectronSurfaceStyleValue149 = popcornElectronSurfaceStyleHelper27(
    {
      markerPoint: markerPosition,
      containerWidth: containerElement.clientWidth,
      containerHeight: containerElement.clientHeight,
      previewWidth: popcornElectronSurfaceStyleValue147 ?? void 0,
    },
  );
  return (
    <div
      ref={popcornElectronSurfaceStyleValue146}
      data-testid={testId}
      className={`pointer-events-none absolute z-40 flex select-none items-center overflow-hidden rounded-lg border px-2 py-1 text-sm shadow-lg`}
      style={{
        ...popcornElectronSurfaceStyleValue149,
        backgroundColor: popcornElectronSurfaceStyleValue53,
        borderColor: popcornElectronSurfaceStyleValue55,
        color: popcornElectronSurfaceStyleValue54,
        height: popcornElectronSurfaceStyleValue48,
        width: `fit-content`,
        backdropFilter: `blur(8px)`,
        WebkitBackdropFilter: `blur(8px)`,
      }}
    >
      <div
        className={`min-w-0 overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-inherit`}
      >
        {body.replace(/\s+/g, ` `).trim()}
      </div>
    </div>
  );
}
export function popcornElectronSurfaceStyleD(
  popcornElectronSurfaceStyleParam4,
  popcornElectronSurfaceStyleParam5,
) {
  let popcornElectronSurfaceStyleValue168 =
      popcornElectronSurfaceStyleParam5?.onDismissAnnotation,
    popcornElectronSurfaceStyleValue169 =
      popcornElectronSurfaceStyleParam5?.onDismissAllAnnotations,
    [popcornElectronSurfaceStyleValue170, popcornElectronSurfaceStyleValue171] =
      (0, React.useState)([]),
    popcornElectronSurfaceStyleValue172 = (0, React.useCallback)(
      (popcornElectronSurfaceStyleParam133) => {
        (popcornElectronSurfaceStyleValue171(
          (popcornElectronSurfaceStyleParam144) =>
            popcornElectronSurfaceStyleParam144.filter(
              (item) =>
                item.annotationId !== popcornElectronSurfaceStyleParam133,
            ),
        ),
          popcornElectronSurfaceStyleValue168?.(
            popcornElectronSurfaceStyleParam133,
          ));
      },
      [popcornElectronSurfaceStyleValue168],
    ),
    popcornElectronSurfaceStyleValue173 = (0, React.useCallback)(() => {
      (popcornElectronSurfaceStyleValue171([]),
        popcornElectronSurfaceStyleValue169?.());
    }, [popcornElectronSurfaceStyleValue169]),
    popcornElectronSurfaceStyleValue174 = (0, React.useCallback)((event) => {
      popcornElectronSurfaceStyleValue171(
        (popcornElectronSurfaceStyleParam117) => {
          let popcornElectronSurfaceStyleValue359 =
            popcornElectronSurfaceStyleQ(
              popcornElectronSurfaceStyleParam117,
              event.target,
            );
          return [
            ...popcornElectronSurfaceStyleParam117,
            {
              ...event,
              annotationNumber: popcornElectronSurfaceStyleValue359,
            },
          ];
        },
      );
    }, []),
    popcornElectronSurfaceStyleValue175 = (0, React.useCallback)(
      (
        popcornElectronSurfaceStyleParam120,
        popcornElectronSurfaceStyleParam121,
      ) => {
        popcornElectronSurfaceStyleValue171(
          (popcornElectronSurfaceStyleParam136) =>
            popcornElectronSurfaceStyleParam136.map((item) =>
              item.annotationId === popcornElectronSurfaceStyleParam120
                ? {
                    ...item,
                    ...popcornElectronSurfaceStyleParam121,
                  }
                : item,
            ),
        );
      },
      [],
    );
  return (
    (0, React.useEffect)(() => {
      if (!popcornElectronSurfaceStyleParam4) return;
      let popcornElectronSurfaceStyleValue329 = {
        dismissAnnotation: popcornElectronSurfaceStyleValue172,
        dismissAllAnnotations: popcornElectronSurfaceStyleValue173,
      };
      return (
        (popcornElectronSurfaceStyleParam4.current =
          popcornElectronSurfaceStyleValue329),
        () => {
          popcornElectronSurfaceStyleParam4.current ===
            popcornElectronSurfaceStyleValue329 &&
            (popcornElectronSurfaceStyleParam4.current = null);
        }
      );
    }, [
      popcornElectronSurfaceStyleValue173,
      popcornElectronSurfaceStyleValue172,
      popcornElectronSurfaceStyleParam4,
    ]),
    {
      annotations: popcornElectronSurfaceStyleValue170,
      addPendingAnnotation: popcornElectronSurfaceStyleValue174,
      updatePendingAnnotation: popcornElectronSurfaceStyleValue175,
      dismissAnnotation: popcornElectronSurfaceStyleValue172,
      dismissAllAnnotations: popcornElectronSurfaceStyleValue173,
    }
  );
}
export function popcornElectronSurfaceStyleE(
  popcornElectronSurfaceStyleParam6,
) {
  let [
      popcornElectronSurfaceStyleValue180,
      popcornElectronSurfaceStyleValue181,
    ] = (0, React.useState)([]),
    popcornElectronSurfaceStyleValue182 = (0, React.useCallback)(
      (popcornElectronSurfaceStyleParam140) => {
        popcornElectronSurfaceStyleValue181(
          (popcornElectronSurfaceStyleParam146) =>
            popcornElectronSurfaceStyleParam146.filter(
              (item) => item.drawingId !== popcornElectronSurfaceStyleParam140,
            ),
        );
      },
      [],
    ),
    popcornElectronSurfaceStyleValue183 = (0, React.useCallback)(() => {
      popcornElectronSurfaceStyleValue181([]);
    }, []),
    popcornElectronSurfaceStyleValue184 = (0, React.useCallback)((event) => {
      popcornElectronSurfaceStyleValue181(
        (popcornElectronSurfaceStyleParam68) => [
          ...popcornElectronSurfaceStyleParam68,
          {
            drawingId: event.drawingId,
            artifactKind: event.artifactKind,
            label: event.label,
            target: event.target,
            strokes: event.strokes,
          },
        ],
      );
    }, []);
  return (
    (0, React.useEffect)(() => {
      if (!popcornElectronSurfaceStyleParam6) return;
      let popcornElectronSurfaceStyleValue330 = {
        dismissDrawing: popcornElectronSurfaceStyleValue182,
        dismissAllDrawings: popcornElectronSurfaceStyleValue183,
      };
      return (
        (popcornElectronSurfaceStyleParam6.current =
          popcornElectronSurfaceStyleValue330),
        () => {
          popcornElectronSurfaceStyleParam6.current ===
            popcornElectronSurfaceStyleValue330 &&
            (popcornElectronSurfaceStyleParam6.current = null);
        }
      );
    }, [
      popcornElectronSurfaceStyleValue183,
      popcornElectronSurfaceStyleValue182,
      popcornElectronSurfaceStyleParam6,
    ]),
    {
      drawings: popcornElectronSurfaceStyleValue180,
      addPendingDrawing: popcornElectronSurfaceStyleValue184,
      dismissDrawing: popcornElectronSurfaceStyleValue182,
      dismissAllDrawings: popcornElectronSurfaceStyleValue183,
    }
  );
}
var popcornElectronSurfaceStyleValue56 = {
    "--text-base": `13px`,
    "--text-sm": `12px`,
    "--text-xs": `11px`,
    "--vscode-font-size": `13px`,
    "--vscode-editor-font-size": `12px`,
    "--vscode-chat-font-size": `13px`,
    "--vscode-chat-editor-font-size": `12px`,
    "--codex-chat-font-size": `var(--vscode-chat-font-size, 13px)`,
    "--codex-chat-code-font-size": `var(--vscode-chat-editor-font-size, 12px)`,
    "--color-token-main-surface-primary": `#ffffff`,
    "--color-token-side-bar-background": `#ffffff`,
    "--color-background-accent": `#e5f3ff`,
    "--color-background-accent-hover": `#e5f3ff`,
    "--color-background-accent-active": `#e5f3ff`,
    "--interactive-bg-secondary-hover": `rgba(13, 13, 13, 0.02)`,
    "--interactive-bg-secondary-press": `rgba(13, 13, 13, 0.05)`,
    "--color-token-bg-primary": `#ffffff`,
    "--color-token-bg-secondary": `#ffffff`,
    "--color-token-bg-tertiary": `rgba(0, 0, 0, 0.03)`,
    "--color-token-charts-blue": `#339cff`,
    "--color-token-interactive-bg-secondary-hover": `var(--interactive-bg-secondary-hover)`,
    "--color-token-interactive-bg-secondary-press": `var(--interactive-bg-secondary-press)`,
    "--color-token-interactive-bg-secondary-selected": `var(--interactive-bg-secondary-press)`,
    "--color-token-interactive-bg-accent-muted-context": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 10%, transparent)`,
    "--color-token-interactive-bg-accent-muted-hover": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 15%, transparent)`,
    "--color-token-interactive-bg-accent-muted-press": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 18%, transparent)`,
    "--color-token-foreground": `rgba(13, 13, 13, 1)`,
    "--color-token-description-foreground": `rgba(143, 143, 143, 1)`,
    "--color-token-text-link-foreground": `#339cff`,
    "--color-token-interactive-label-secondary-default": `var(--color-token-text-primary)`,
    "--color-token-interactive-label-accent-default": `var(--color-token-text-link-foreground)`,
    "--color-token-focus-border": `rgba(16, 163, 127, 0.8)`,
    "--color-token-list-hover-background": `rgba(0, 0, 0, 0.05)`,
    "--color-token-text-primary": `rgba(13, 13, 13, 1)`,
    "--color-token-text-secondary": `rgba(143, 143, 143, 1)`,
    "--color-token-text-tertiary": `rgba(143, 143, 143, 1)`,
    "--color-token-border-default": `rgba(13, 13, 13, 0.08)`,
    "--color-token-border-light": `rgba(13, 13, 13, 0.05)`,
    colorScheme: `light`,
  },
  _popcornElectronSurfaceStyleW = {
    "--text-base": `13px`,
    "--text-sm": `12px`,
    "--text-xs": `11px`,
    "--vscode-font-size": `var(--vscode-font-size, 13px)`,
    "--vscode-editor-font-size": `var(--vscode-editor-font-size, 12px)`,
    "--vscode-chat-font-size": `var(--vscode-chat-font-size, var(--vscode-font-size, 13px))`,
    "--vscode-chat-editor-font-size": `var(--vscode-chat-editor-font-size, var(--vscode-editor-font-size, 12px))`,
    "--codex-chat-font-size": `var(--vscode-chat-font-size, var(--vscode-font-size, 13px))`,
    "--codex-chat-code-font-size": `var(--vscode-chat-editor-font-size, var(--vscode-editor-font-size, 12px))`,
    "--color-token-main-surface-primary": `var(--color-background-surface)`,
    "--color-token-side-bar-background": `var(--color-background-surface)`,
    "--color-background-accent": `color-mix(in srgb, var(--color-background-surface) 87%, var(--color-accent-blue, #339cff) 13%)`,
    "--color-background-accent-hover": `color-mix(in srgb, var(--color-background-surface) 85%, var(--color-accent-blue, #339cff) 15%)`,
    "--color-background-accent-active": `color-mix(in srgb, var(--color-background-surface) 83%, var(--color-accent-blue, #339cff) 17%)`,
    "--interactive-bg-secondary-hover": `color-mix(in srgb, var(--color-text-foreground) 10%, transparent)`,
    "--interactive-bg-secondary-press": `color-mix(in srgb, var(--color-text-foreground) 5%, transparent)`,
    "--color-token-bg-primary": `var(--color-background-surface)`,
    "--color-token-bg-secondary": `color-mix(in srgb, var(--color-background-surface) 92%, transparent)`,
    "--color-token-bg-tertiary": `color-mix(in srgb, var(--color-background-surface) 85%, transparent)`,
    "--color-token-charts-blue": `var(--color-accent-blue, #339cff)`,
    "--color-token-interactive-bg-secondary-hover": `var(--interactive-bg-secondary-hover)`,
    "--color-token-interactive-bg-secondary-press": `var(--interactive-bg-secondary-press)`,
    "--color-token-interactive-bg-secondary-selected": `var(--interactive-bg-secondary-press)`,
    "--color-token-interactive-bg-accent-muted-context": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 10%, transparent)`,
    "--color-token-interactive-bg-accent-muted-hover": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 15%, transparent)`,
    "--color-token-interactive-bg-accent-muted-press": `color-mix(in srgb, var(--color-token-text-link-foreground, #339cff) 18%, transparent)`,
    "--color-token-foreground": `var(--color-text-foreground)`,
    "--color-token-description-foreground": `var(--vscode-descriptionForeground)`,
    "--color-token-text-link-foreground": `var(--color-text-accent, var(--color-accent-blue, #339cff))`,
    "--color-token-interactive-label-secondary-default": `var(--color-token-text-primary)`,
    "--color-token-interactive-label-accent-default": `var(--color-token-text-link-foreground)`,
    "--color-token-focus-border": `var(--vscode-focusBorder)`,
    "--color-token-list-hover-background": `var(--vscode-list-hoverBackground)`,
    "--color-token-text-primary": `var(--color-text-foreground)`,
    "--color-token-text-secondary": `color-mix(in srgb, var(--color-text-foreground) 65%, transparent)`,
    "--color-token-text-tertiary": `var(--vscode-descriptionForeground)`,
    "--color-token-border-default": `var(--color-border, rgba(13, 13, 13, 0.08))`,
    "--color-token-border-light": `var(--color-border-light, rgba(13, 13, 13, 0.05))`,
    colorScheme: `dark light`,
  };
function popcornElectronSurfaceStyleHelper28(
  popcornElectronSurfaceStyleParam139,
) {
  return popcornElectronSurfaceStyleParam139 === `codex`
    ? _popcornElectronSurfaceStyleW
    : popcornElectronSurfaceStyleValue56;
}
export function popcornElectronSurfaceStyleT(
  popcornElectronSurfaceStyleParam147,
) {
  return `#ffffff`;
}
export function popcornElectronSurfaceStyleC({
  trigger: trigger,
  actions: actions,
}) {
  return React.createElement(ContextMenu, null, [
    React.createElement(
      ContextMenuTrigger,
      {
        asChild: !0,
      },
      trigger,
    ),
    React.createElement(
      ContextMenuPortal,
      null,
      React.createElement(
        ContextMenuContent,
        {
          className: `border-token-border-light bg-token-bg-primary z-50 min-w-[160px] rounded-xl border p-1 shadow-lg`,
        },
        actions.map((item) => {
          if (item.kind === `separator`)
            return React.createElement(ContextMenuSeparator, {
              className: `bg-token-border-light my-1 h-px`,
            });
          let popcornElectronSurfaceStyleValue176 = item.icon;
          return React.createElement(
            ContextMenuItem,
            {
              disabled: item.disabled,
              "data-testid": item.testId,
              onSelect: () => {
                item.disabled || item.onSelect();
              },
              className: clsx(
                `text-token-text-primary flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-token-bg-secondary`,
                item.color === `danger` ? `text-red-600` : null,
              ),
            },
            [
              React.createElement(popcornElectronSurfaceStyleValue176, {
                className: `size-4`,
              }),
              <span>{item.label}</span>,
            ],
          );
        }),
      ),
    ),
  ]);
}
var popcornElectronSurfaceStyleValue57 = 1;
export const popcornElectronSurfaceStyleS =
  typeof window > `u` ? React.useEffect : React.useLayoutEffect;
function on(
  popcornElectronSurfaceStyleParam125,
  popcornElectronSurfaceStyleParam126,
  popcornElectronSurfaceStyleParam127,
) {
  return Math.min(
    popcornElectronSurfaceStyleParam127,
    Math.max(
      popcornElectronSurfaceStyleParam126,
      popcornElectronSurfaceStyleParam125,
    ),
  );
}
function _popcornElectronSurfaceStyleB(
  popcornElectronSurfaceStyleParam104,
  popcornElectronSurfaceStyleParam105,
  popcornElectronSurfaceStyleParam106,
) {
  let popcornElectronSurfaceStyleValue354 = Math.max(
    popcornElectronSurfaceStyleParam104.k,
    2 ** -52,
  );
  return {
    x:
      (popcornElectronSurfaceStyleParam105 -
        popcornElectronSurfaceStyleParam104.x) /
      popcornElectronSurfaceStyleValue354,
    y:
      (popcornElectronSurfaceStyleParam106 -
        popcornElectronSurfaceStyleParam104.y) /
      popcornElectronSurfaceStyleValue354,
  };
}
export function _popcornElectronSurfaceStyleX(
  popcornElectronSurfaceStyleParam128,
  popcornElectronSurfaceStyleParam129,
  popcornElectronSurfaceStyleParam130,
) {
  return {
    x:
      popcornElectronSurfaceStyleParam129 *
        popcornElectronSurfaceStyleParam128.k +
      popcornElectronSurfaceStyleParam128.x,
    y:
      popcornElectronSurfaceStyleParam130 *
        popcornElectronSurfaceStyleParam128.k +
      popcornElectronSurfaceStyleParam128.y,
  };
}
function popcornElectronSurfaceStyleHelper29(
  popcornElectronSurfaceStyleParam89,
  popcornElectronSurfaceStyleParam90,
  popcornElectronSurfaceStyleParam91,
  popcornElectronSurfaceStyleParam92,
  popcornElectronSurfaceStyleParam93,
  popcornElectronSurfaceStyleParam94,
) {
  let popcornElectronSurfaceStyleValue347 = _popcornElectronSurfaceStyleB(
      popcornElectronSurfaceStyleParam89,
      popcornElectronSurfaceStyleParam90,
      popcornElectronSurfaceStyleParam91,
    ),
    popcornElectronSurfaceStyleValue348 = on(
      popcornElectronSurfaceStyleParam92,
      popcornElectronSurfaceStyleParam93,
      popcornElectronSurfaceStyleParam94,
    );
  return {
    k: popcornElectronSurfaceStyleValue348,
    x:
      popcornElectronSurfaceStyleParam90 -
      popcornElectronSurfaceStyleValue347.x *
        popcornElectronSurfaceStyleValue348,
    y:
      popcornElectronSurfaceStyleParam91 -
      popcornElectronSurfaceStyleValue347.y *
        popcornElectronSurfaceStyleValue348,
  };
}
function _popcornElectronSurfaceStyleV(
  popcornElectronSurfaceStyleParam16,
  popcornElectronSurfaceStyleParam17,
  popcornElectronSurfaceStyleParam18,
) {
  let popcornElectronSurfaceStyleValue238 = Math.max(
      0,
      popcornElectronSurfaceStyleParam18.width,
    ),
    popcornElectronSurfaceStyleValue239 = Math.max(
      0,
      popcornElectronSurfaceStyleParam18.height,
    ),
    popcornElectronSurfaceStyleValue240 = Math.max(
      0,
      popcornElectronSurfaceStyleParam17.width,
    ),
    popcornElectronSurfaceStyleValue241 = Math.max(
      0,
      popcornElectronSurfaceStyleParam17.height,
    ),
    popcornElectronSurfaceStyleValue242 = Math.min(
      0,
      popcornElectronSurfaceStyleValue240 -
        popcornElectronSurfaceStyleValue238 *
          popcornElectronSurfaceStyleParam16.k,
    ),
    popcornElectronSurfaceStyleValue243 = Math.min(
      0,
      popcornElectronSurfaceStyleValue241 -
        popcornElectronSurfaceStyleValue239 *
          popcornElectronSurfaceStyleParam16.k,
    );
  return {
    ...popcornElectronSurfaceStyleParam16,
    x: Math.min(
      0,
      Math.max(
        popcornElectronSurfaceStyleValue242,
        popcornElectronSurfaceStyleParam16.x,
      ),
    ),
    y: Math.min(
      0,
      Math.max(
        popcornElectronSurfaceStyleValue243,
        popcornElectronSurfaceStyleParam16.y,
      ),
    ),
  };
}
function popcornElectronSurfaceStyleUnderscore(
  popcornElectronSurfaceStyleParam137,
) {
  return {
    left: -popcornElectronSurfaceStyleParam137.x,
    top: -popcornElectronSurfaceStyleParam137.y,
  };
}
export function _popcornElectronSurfaceStyleG(
  popcornElectronSurfaceStyleParam109,
) {
  let popcornElectronSurfaceStyleValue357 = Math.max(
    popcornElectronSurfaceStyleParam109.k,
    2 ** -52,
  );
  return {
    left:
      -popcornElectronSurfaceStyleParam109.x /
      popcornElectronSurfaceStyleValue357,
    top:
      -popcornElectronSurfaceStyleParam109.y /
      popcornElectronSurfaceStyleValue357,
  };
}
function _popcornElectronSurfaceStyleY(
  popcornElectronSurfaceStyleParam97,
  popcornElectronSurfaceStyleParam98,
  popcornElectronSurfaceStyleParam99,
) {
  let popcornElectronSurfaceStyleValue349 =
    popcornElectronSurfaceStyleParam97.getBoundingClientRect();
  return {
    x:
      popcornElectronSurfaceStyleParam98 -
      popcornElectronSurfaceStyleValue349.left,
    y:
      popcornElectronSurfaceStyleParam99 -
      popcornElectronSurfaceStyleValue349.top,
  };
}
function popcornElectronSurfaceStyleHelper30(
  popcornElectronSurfaceStyleParam26,
) {
  let popcornElectronSurfaceStyleValue270 =
      popcornElectronSurfaceStyleParam26.values(),
    popcornElectronSurfaceStyleValue271 =
      popcornElectronSurfaceStyleValue270.next().value,
    popcornElectronSurfaceStyleValue272 =
      popcornElectronSurfaceStyleValue270.next().value;
  if (
    !popcornElectronSurfaceStyleValue271 ||
    !popcornElectronSurfaceStyleValue272
  )
    return null;
  let popcornElectronSurfaceStyleValue273 =
      popcornElectronSurfaceStyleValue272.x -
      popcornElectronSurfaceStyleValue271.x,
    popcornElectronSurfaceStyleValue274 =
      popcornElectronSurfaceStyleValue272.y -
      popcornElectronSurfaceStyleValue271.y;
  return {
    centerX:
      (popcornElectronSurfaceStyleValue271.x +
        popcornElectronSurfaceStyleValue272.x) /
      2,
    centerY:
      (popcornElectronSurfaceStyleValue271.y +
        popcornElectronSurfaceStyleValue272.y) /
      2,
    distance: Math.max(
      popcornElectronSurfaceStyleValue57,
      Math.hypot(
        popcornElectronSurfaceStyleValue273,
        popcornElectronSurfaceStyleValue274,
      ),
    ),
  };
}
var popcornElectronSurfaceStyleValue58 = new Intl.DateTimeFormat(void 0, {
    dateStyle: `medium`,
    timeStyle: `short`,
  }),
  popcornElectronSurfaceStyleValue59 = [`👍`, `❤️`, `👀`, `✅`],
  popcornElectronSurfaceStyleValue60 = `text-[length:var(--codex-chat-font-size,13px)] leading-5`,
  popcornElectronSurfaceStyleValue61 = `text-[11px] leading-4`;
function _n(popcornElectronSurfaceStyleParam73) {
  if (!popcornElectronSurfaceStyleParam73) return ``;
  let popcornElectronSurfaceStyleValue337 = new Date(
    popcornElectronSurfaceStyleParam73,
  );
  return Number.isNaN(popcornElectronSurfaceStyleValue337.getTime())
    ? ``
    : popcornElectronSurfaceStyleValue58.format(
        popcornElectronSurfaceStyleValue337,
      );
}
function popcornElectronSurfaceStyleHelper31(
  popcornElectronSurfaceStyleParam69,
) {
  switch (popcornElectronSurfaceStyleParam69) {
    case `resolved`:
      return `Resolved`;
    case `active`:
      return `Active`;
    default:
      return `Thread`;
  }
}
function popcornElectronSurfaceStyleHelper32({
  open: open,
  onOpenChange: onOpenChange,
  trigger: trigger,
  children: children,
}) {
  return React.createElement(
    Popover,
    {
      open: open,
      onOpenChange: onOpenChange,
    },
    [
      React.createElement(
        PopoverTrigger,
        {
          asChild: !0,
        },
        trigger,
      ),
      React.createElement(
        PopoverPortal,
        null,
        React.createElement(
          PopoverContent,
          {
            side: `bottom`,
            align: `end`,
            sideOffset: 6,
            collisionPadding: 8,
            className: `border-token-border-light bg-token-bg-primary z-[120] min-w-40 rounded-xl border p-1 shadow-[0_14px_40px_rgba(15,23,42,0.16)]`,
            onOpenAutoFocus: (event) => event.preventDefault(),
            onCloseAutoFocus: (event) => event.preventDefault(),
            onPointerDown: (event) => event.stopPropagation(),
          },
          children,
        ),
      ),
    ],
  );
}
function $({ onClick: onClick, children: children, destructive = !1 }) {
  return (
    <button
      type={`button`}
      className={clsx(
        `flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left`,
        popcornElectronSurfaceStyleValue60,
        destructive
          ? `text-[#D14343] hover:bg-[color-mix(in_srgb,#D14343_10%,transparent)]`
          : `text-token-text-primary hover:bg-token-bg-secondary`,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function popcornElectronSurfaceStyleHelper33({
  label: label,
  active: active,
  count: count,
  onClick: onClick,
  interactive: interactive,
}) {
  let popcornElectronSurfaceStyleValue178 = clsx(
    `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] leading-4`,
    active
      ? `bg-[color-mix(in_srgb,var(--color-token-charts-blue,#339cff)_16%,transparent)] text-token-text-link-foreground`
      : `bg-token-bg-tertiary text-token-description-foreground`,
    interactive && `transition-colors hover:bg-token-bg-secondary`,
  );
  return !interactive || !onClick ? (
    <span
      className={popcornElectronSurfaceStyleValue178}
    >{`${label} ${count}`}</span>
  ) : (
    <button
      type={`button`}
      className={popcornElectronSurfaceStyleValue178}
      onClick={onClick}
    >{`${label} ${count}`}</button>
  );
}
function popcornElectronSurfaceStyleHelper34({
  value: value,
  onChange: onChange,
  onSubmit: onSubmit,
}) {
  let popcornElectronSurfaceStyleValue150 = value.trim();
  return (
    <div className={`border-token-border-light border-t pt-3`}>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={2}
        placeholder={`Reply`}
        className={clsx(
          `border-token-border-light bg-token-bg-primary text-token-text-primary min-h-20 w-full resize-none rounded-xl border px-3 py-2 outline-none placeholder:text-token-description-foreground`,
          popcornElectronSurfaceStyleValue60,
        )}
        onKeyDown={(event) => {
          event.key !== `Enter` ||
            event.shiftKey ||
            (event.preventDefault(),
            popcornElectronSurfaceStyleValue150 && onSubmit());
        }}
      />
      <div className={`mt-2 flex justify-end`}>
        <button
          type={`button`}
          className={clsx(
            `rounded-lg px-3 py-1.5 font-medium transition-colors`,
            popcornElectronSurfaceStyleValue60,
            popcornElectronSurfaceStyleValue150
              ? `bg-token-main-surface-primary text-token-text-primary hover:bg-token-bg-secondary`
              : `bg-token-bg-tertiary text-token-description-foreground`,
          )}
          disabled={!popcornElectronSurfaceStyleValue150}
          onClick={onSubmit}
        >{`Reply`}</button>
      </div>
    </div>
  );
}
function popcornElectronSurfaceStyleHelper35({
  comment: comment,
  viewerAuthorId: viewerAuthorId,
  canMutate: canMutate,
  isEditing: isEditing,
  draftValue: draftValue,
  onDraftChange: onDraftChange,
  onStartEdit: onStartEdit,
  onCommitEdit: onCommitEdit,
  onCancelEdit: onCancelEdit,
  onDelete: onDelete,
  onToggleReaction: onToggleReaction,
}) {
  let [popcornElectronSurfaceStyleValue93, popcornElectronSurfaceStyleValue94] =
      (0, React.useState)(!1),
    [popcornElectronSurfaceStyleValue95, popcornElectronSurfaceStyleValue96] =
      (0, React.useState)(!1),
    popcornElectronSurfaceStyleValue97 = (0, React.useMemo)(
      () => _n(comment.editedAt ?? comment.createdAt),
      [comment.createdAt, comment.editedAt],
    ),
    popcornElectronSurfaceStyleValue98 = draftValue.trim(),
    popcornElectronSurfaceStyleValue99 = (
      popcornElectronSurfaceStyleParam149,
    ) =>
      viewerAuthorId != null &&
      popcornElectronSurfaceStyleParam149.includes(viewerAuthorId);
  return (
    <div className={`flex gap-3 rounded-2xl bg-token-main-surface-primary`}>
      <div
        className={`bg-token-bg-tertiary text-token-text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold`}
      >
        {comment.author.initials ?? `??`}
      </div>
      <div className={`min-w-0 flex-1`}>
        <div className={`flex items-start justify-between gap-3`}>
          <div className={`min-w-0`}>
            <div
              className={clsx(
                `text-token-text-primary truncate font-medium`,
                popcornElectronSurfaceStyleValue60,
              )}
            >
              {comment.author.displayName}
            </div>
            {popcornElectronSurfaceStyleValue97 ? (
              <div
                className={clsx(
                  `text-token-description-foreground mt-0.5`,
                  popcornElectronSurfaceStyleValue61,
                )}
              >
                {popcornElectronSurfaceStyleValue97}
                {comment.editedAt ? ` · edited` : ``}
              </div>
            ) : null}
          </div>
          {canMutate && !comment.isDeleted
            ? React.createElement(
                popcornElectronSurfaceStyleHelper32,
                {
                  open: popcornElectronSurfaceStyleValue93,
                  onOpenChange: popcornElectronSurfaceStyleValue94,
                  trigger: (
                    <button
                      type={`button`}
                      className={`text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`}
                      aria-label={`Comment actions`}
                    >
                      {React.createElement(remoteTextEditSessionO, {
                        className: `size-4`,
                      })}
                    </button>
                  ),
                },
                <div className={`flex flex-col`}>
                  {React.createElement(
                    $,
                    {
                      onClick: () => {
                        (popcornElectronSurfaceStyleValue94(!1), onStartEdit());
                      },
                    },
                    [
                      React.createElement(remoteTextEditSessionI, {
                        className: `size-4`,
                      }),
                      `Edit`,
                    ],
                  )}
                  {React.createElement(
                    $,
                    {
                      destructive: !0,
                      onClick: () => {
                        (popcornElectronSurfaceStyleValue94(!1), onDelete());
                      },
                    },
                    [
                      React.createElement(_remoteTextEditSessionB, {
                        className: `size-4`,
                      }),
                      `Delete`,
                    ],
                  )}
                </div>,
              )
            : null}
        </div>
        {isEditing ? (
          <div className={`mt-2`}>
            <textarea
              value={draftValue}
              onChange={(event) => onDraftChange(event.target.value)}
              rows={3}
              className={clsx(
                `border-token-border-light bg-token-bg-primary text-token-text-primary min-h-24 w-full resize-none rounded-xl border px-3 py-2 outline-none`,
                popcornElectronSurfaceStyleValue60,
              )}
              onKeyDown={(event) => {
                event.key !== `Enter` ||
                  event.shiftKey ||
                  (event.preventDefault(),
                  popcornElectronSurfaceStyleValue98 && onCommitEdit());
              }}
            />
            <div className={`mt-2 flex justify-end gap-2`}>
              <button
                type={`button`}
                className={clsx(
                  `text-token-description-foreground hover:bg-token-bg-secondary rounded-lg px-2.5 py-1.5 transition-colors`,
                  popcornElectronSurfaceStyleValue60,
                )}
                onClick={onCancelEdit}
              >{`Cancel`}</button>
              <button
                type={`button`}
                className={clsx(
                  `rounded-lg px-2.5 py-1.5 font-medium transition-colors`,
                  popcornElectronSurfaceStyleValue60,
                  popcornElectronSurfaceStyleValue98
                    ? `bg-token-main-surface-primary text-token-text-primary hover:bg-token-bg-secondary`
                    : `bg-token-bg-tertiary text-token-description-foreground`,
                )}
                disabled={!popcornElectronSurfaceStyleValue98}
                onClick={onCommitEdit}
              >{`Save`}</button>
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              `mt-2 whitespace-pre-wrap`,
              popcornElectronSurfaceStyleValue60,
              comment.isDeleted
                ? `text-token-description-foreground italic`
                : `text-token-text-primary`,
            )}
          >
            {comment.isDeleted ? `Comment deleted.` : comment.text}
          </div>
        )}
        {!isEditing && !comment.isDeleted ? (
          <div className={`mt-2 flex items-center justify-between gap-2`}>
            <div className={`flex flex-wrap items-center gap-1.5`}>
              {comment.reactions.map((item) =>
                React.createElement(popcornElectronSurfaceStyleHelper33, {
                  label: item.type,
                  count: item.count,
                  active: popcornElectronSurfaceStyleValue99(item.authorIds),
                  interactive: canMutate,
                  onClick: canMutate
                    ? () => onToggleReaction(item.type)
                    : void 0,
                }),
              )}
              {canMutate
                ? React.createElement(
                    popcornElectronSurfaceStyleHelper32,
                    {
                      open: popcornElectronSurfaceStyleValue95,
                      onOpenChange: popcornElectronSurfaceStyleValue96,
                      trigger: (
                        <button
                          type={`button`}
                          className={`text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`}
                          aria-label={`Add reaction`}
                        >
                          {React.createElement(remoteTextEditSessionL, {
                            className: `size-4`,
                          })}
                        </button>
                      ),
                    },
                    <div className={`flex items-center gap-1`}>
                      {popcornElectronSurfaceStyleValue59.map((item) => (
                        <button
                          key={item}
                          type={`button`}
                          className={`hover:bg-token-bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg transition-colors`}
                          onClick={() => {
                            (popcornElectronSurfaceStyleValue96(!1),
                              onToggleReaction(item));
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>,
                  )
                : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export function _popcornElectronSurfaceStyleM({
  targetPrimaryLabel: targetPrimaryLabel,
  targetSecondaryLabel: targetSecondaryLabel,
  status: status,
  resolvedByName: resolvedByName,
  resolvedAt: resolvedAt,
  comments: comments,
  isEditing: isEditing,
  viewerAuthorId: viewerAuthorId,
  onReply: onReply,
  onResolve: onResolve,
  onReopen: onReopen,
  onDeleteThread: onDeleteThread,
  onToggleReaction: onToggleReaction,
  onEditComment: onEditComment,
  onDeleteComment: onDeleteComment,
}) {
  let popcornElectronSurfaceStyleValue100 = isEditing && viewerAuthorId != null,
    popcornElectronSurfaceStyleValue101 =
      popcornElectronSurfaceStyleValue100 &&
      status !== `resolved` &&
      onReply != null,
    [popcornElectronSurfaceStyleValue102, popcornElectronSurfaceStyleValue103] =
      (0, React.useState)(``),
    [popcornElectronSurfaceStyleValue104, popcornElectronSurfaceStyleValue105] =
      (0, React.useState)(!1),
    [popcornElectronSurfaceStyleValue106, popcornElectronSurfaceStyleValue107] =
      (0, React.useState)(null),
    [popcornElectronSurfaceStyleValue108, popcornElectronSurfaceStyleValue109] =
      (0, React.useState)(``);
  (0, React.useEffect)(() => {
    popcornElectronSurfaceStyleValue106 != null &&
      !comments.some(
        (item) => item.id === popcornElectronSurfaceStyleValue106,
      ) &&
      (popcornElectronSurfaceStyleValue107(null),
      popcornElectronSurfaceStyleValue109(``));
  }, [comments, popcornElectronSurfaceStyleValue106]);
  let popcornElectronSurfaceStyleValue110 =
    status === `resolved`
      ? [resolvedByName, _n(resolvedAt)].filter(Boolean).join(` · `)
      : null;
  return (
    <div
      className={`flex w-[22rem] max-w-[min(28rem,calc(100vw-32px))] flex-col gap-3`}
    >
      <div className={`flex items-start justify-between gap-3`}>
        <div className={`min-w-0 flex-1`}>
          <div className={`flex items-center gap-2`}>
            <span
              className={clsx(
                `inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium`,
                status === `resolved`
                  ? `bg-token-bg-tertiary text-token-description-foreground`
                  : `bg-[color-mix(in_srgb,var(--color-token-charts-blue,#339cff)_12%,transparent)] text-token-text-link-foreground`,
              )}
            >
              {popcornElectronSurfaceStyleHelper31(status)}
            </span>
            {targetSecondaryLabel ? (
              <div
                className={`text-token-description-foreground truncate text-[11px] leading-4`}
              >
                {targetSecondaryLabel}
              </div>
            ) : null}
          </div>
          {popcornElectronSurfaceStyleValue110 ? (
            <div
              className={clsx(
                `text-token-description-foreground mt-1`,
                popcornElectronSurfaceStyleValue61,
              )}
            >
              {popcornElectronSurfaceStyleValue110}
            </div>
          ) : null}
        </div>
        <div className={`flex shrink-0 items-center gap-1.5`}>
          <span
            className={`border-token-border-light text-token-text-primary inline-flex rounded-full border px-2 py-1 text-[11px] leading-4 font-medium`}
          >
            {targetPrimaryLabel}
          </span>
          {popcornElectronSurfaceStyleValue100 &&
          (onResolve || onReopen || onDeleteThread)
            ? React.createElement(
                popcornElectronSurfaceStyleHelper32,
                {
                  open: popcornElectronSurfaceStyleValue104,
                  onOpenChange: popcornElectronSurfaceStyleValue105,
                  trigger: (
                    <button
                      type={`button`}
                      className={`text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`}
                      aria-label={`Thread actions`}
                    >
                      {React.createElement(remoteTextEditSessionO, {
                        className: `size-4`,
                      })}
                    </button>
                  ),
                },
                <div className={`flex flex-col`}>
                  {status === `resolved`
                    ? onReopen
                      ? React.createElement(
                          $,
                          {
                            onClick: () => {
                              (popcornElectronSurfaceStyleValue105(!1),
                                onReopen());
                            },
                          },
                          [
                            React.createElement(remoteTextEditSessionD, {
                              className: `size-4`,
                            }),
                            `Reopen thread`,
                          ],
                        )
                      : null
                    : onResolve
                      ? React.createElement(
                          $,
                          {
                            onClick: () => {
                              (popcornElectronSurfaceStyleValue105(!1),
                                onResolve());
                            },
                          },
                          [
                            React.createElement(remoteTextEditSessionS, {
                              className: `size-4`,
                            }),
                            `Resolve thread`,
                          ],
                        )
                      : null}
                  {onDeleteThread
                    ? React.createElement(
                        $,
                        {
                          destructive: !0,
                          onClick: () => {
                            (popcornElectronSurfaceStyleValue105(!1),
                              onDeleteThread());
                          },
                        },
                        [
                          React.createElement(_remoteTextEditSessionB, {
                            className: `size-4`,
                          }),
                          `Delete thread`,
                        ],
                      )
                    : null}
                </div>,
              )
            : null}
        </div>
      </div>
      <div
        className={`flex max-h-[min(22rem,60vh)] flex-col gap-3 overflow-y-auto pr-1`}
      >
        {comments.map((item) => {
          let popcornElectronSurfaceStyleValue210 =
            popcornElectronSurfaceStyleValue106 === item.id;
          return React.createElement(popcornElectronSurfaceStyleHelper35, {
            comment: item,
            viewerAuthorId: viewerAuthorId,
            canMutate: popcornElectronSurfaceStyleValue100,
            isEditing: popcornElectronSurfaceStyleValue210,
            draftValue: popcornElectronSurfaceStyleValue210
              ? popcornElectronSurfaceStyleValue108
              : item.text,
            onDraftChange: popcornElectronSurfaceStyleValue109,
            onStartEdit: () => {
              (popcornElectronSurfaceStyleValue107(item.id),
                popcornElectronSurfaceStyleValue109(item.text));
            },
            onCommitEdit: () => {
              let popcornElectronSurfaceStyleValue360 =
                popcornElectronSurfaceStyleValue108.trim();
              !popcornElectronSurfaceStyleValue360 ||
                !onEditComment ||
                (onEditComment(item.id, popcornElectronSurfaceStyleValue360),
                popcornElectronSurfaceStyleValue107(null),
                popcornElectronSurfaceStyleValue109(``));
            },
            onCancelEdit: () => {
              (popcornElectronSurfaceStyleValue107(null),
                popcornElectronSurfaceStyleValue109(``));
            },
            onDelete: () => {
              (onDeleteComment?.(item.id),
                popcornElectronSurfaceStyleValue106 === item.id &&
                  (popcornElectronSurfaceStyleValue107(null),
                  popcornElectronSurfaceStyleValue109(``)));
            },
            onToggleReaction: (popcornElectronSurfaceStyleParam150) => {
              onToggleReaction?.(item.id, popcornElectronSurfaceStyleParam150);
            },
          });
        })}
      </div>
      {popcornElectronSurfaceStyleValue101
        ? React.createElement(popcornElectronSurfaceStyleHelper34, {
            value: popcornElectronSurfaceStyleValue102,
            onChange: popcornElectronSurfaceStyleValue103,
            onSubmit: () => {
              let popcornElectronSurfaceStyleValue370 =
                popcornElectronSurfaceStyleValue102.trim();
              !popcornElectronSurfaceStyleValue370 ||
                !onReply ||
                (onReply(popcornElectronSurfaceStyleValue370),
                popcornElectronSurfaceStyleValue103(``));
            },
          })
        : null}
    </div>
  );
}
export function _popcornElectronSurfaceStyleH({
  open: open,
  onOpenChange: onOpenChange,
  trigger: trigger,
  content: content,
}) {
  return React.createElement(
    Popover,
    {
      open: open,
      onOpenChange: onOpenChange,
    },
    [
      React.createElement(
        PopoverTrigger,
        {
          asChild: !0,
        },
        trigger,
      ),
      React.createElement(
        PopoverPortal,
        null,
        React.createElement(
          PopoverContent,
          {
            side: `right`,
            align: `start`,
            sideOffset: 10,
            collisionPadding: 12,
            className: `border-token-border-light bg-token-bg-primary z-[80] rounded-2xl border p-3 shadow-[0_18px_60px_rgba(15,23,42,0.18)]`,
            onOpenAutoFocus: (event) => event.preventDefault(),
            onCloseAutoFocus: (event) => event.preventDefault(),
            onPointerDown: (event) => event.stopPropagation(),
          },
          content,
        ),
      ),
    ],
  );
}
var popcornElectronSurfaceStyleValue62 = 6,
  popcornElectronSurfaceStyleValue63 = 12,
  popcornElectronSurfaceStyleValue64 = 18,
  popcornElectronSurfaceStyleValue65 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%232563eb' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16.75 7.25A6.75 6.75 0 1 0 18.5 12'/%3E%3Cpath d='M15.5 3.75h4.75V8.5'/%3E%3Cpath d='M16.25 4.5 20.25 8.5'/%3E%3C/g%3E%3C/svg%3E") 12 12, grab`;
function _popcornElectronSurfaceStyleD(popcornElectronSurfaceStyleParam50) {
  let popcornElectronSurfaceStyleValue308 = Math.max(
      popcornElectronSurfaceStyleParam50,
      1e-4,
    ),
    popcornElectronSurfaceStyleValue309 =
      popcornElectronSurfaceStyleValue62 / popcornElectronSurfaceStyleValue308;
  return {
    visibleSize: popcornElectronSurfaceStyleValue309,
    halfVisibleSize: popcornElectronSurfaceStyleValue309 / 2,
    hitRadius: Math.max(
      4,
      popcornElectronSurfaceStyleValue63 / popcornElectronSurfaceStyleValue308,
    ),
    rotationBand: Math.max(
      6,
      popcornElectronSurfaceStyleValue64 / popcornElectronSurfaceStyleValue308,
    ),
  };
}
export function _popcornElectronSurfaceStyleF(
  popcornElectronSurfaceStyleParam107,
) {
  return popcornElectronSurfaceStyleParam107
    ? popcornElectronSurfaceStyleParam107 === `nw` ||
      popcornElectronSurfaceStyleParam107 === `se`
      ? `nwse-resize`
      : `nesw-resize`
    : null;
}
export function _popcornElectronSurfaceStyleP() {
  return popcornElectronSurfaceStyleValue65;
}
function popcornElectronSurfaceStyleHelper36(
  popcornElectronSurfaceStyleParam70,
) {
  let popcornElectronSurfaceStyleValue333 =
    (Number.isFinite(popcornElectronSurfaceStyleParam70 ?? NaN)
      ? Number(popcornElectronSurfaceStyleParam70)
      : 0) % 360;
  return (
    popcornElectronSurfaceStyleValue333 >= 180 &&
      (popcornElectronSurfaceStyleValue333 -= 360),
    popcornElectronSurfaceStyleValue333 < -180 &&
      (popcornElectronSurfaceStyleValue333 += 360),
    popcornElectronSurfaceStyleValue333
  );
}
function popcornElectronSurfaceStyleHelper37(
  popcornElectronSurfaceStyleParam119,
) {
  return {
    x:
      popcornElectronSurfaceStyleParam119.left +
      popcornElectronSurfaceStyleParam119.width / 2,
    y:
      popcornElectronSurfaceStyleParam119.top +
      popcornElectronSurfaceStyleParam119.height / 2,
  };
}
function _popcornElectronSurfaceStyleS(popcornElectronSurfaceStyleParam25) {
  let popcornElectronSurfaceStyleValue263 = popcornElectronSurfaceStyleHelper37(
      popcornElectronSurfaceStyleParam25,
    ),
    popcornElectronSurfaceStyleValue264 =
      popcornElectronSurfaceStyleParam25.width / 2,
    popcornElectronSurfaceStyleValue265 =
      popcornElectronSurfaceStyleParam25.height / 2,
    popcornElectronSurfaceStyleValue266 =
      (popcornElectronSurfaceStyleHelper36(
        popcornElectronSurfaceStyleParam25.rotation,
      ) *
        Math.PI) /
      180,
    popcornElectronSurfaceStyleValue267 = Math.cos(
      popcornElectronSurfaceStyleValue266,
    ),
    popcornElectronSurfaceStyleValue268 = Math.sin(
      popcornElectronSurfaceStyleValue266,
    ),
    popcornElectronSurfaceStyleValue269 = (
      popcornElectronSurfaceStyleParam141,
      popcornElectronSurfaceStyleParam142,
    ) => ({
      x:
        popcornElectronSurfaceStyleValue263.x +
        popcornElectronSurfaceStyleParam141 *
          popcornElectronSurfaceStyleValue267 -
        popcornElectronSurfaceStyleParam142 *
          popcornElectronSurfaceStyleValue268,
      y:
        popcornElectronSurfaceStyleValue263.y +
        popcornElectronSurfaceStyleParam141 *
          popcornElectronSurfaceStyleValue268 +
        popcornElectronSurfaceStyleParam142 *
          popcornElectronSurfaceStyleValue267,
    });
  return {
    nw: popcornElectronSurfaceStyleValue269(
      -popcornElectronSurfaceStyleValue264,
      -popcornElectronSurfaceStyleValue265,
    ),
    ne: popcornElectronSurfaceStyleValue269(
      popcornElectronSurfaceStyleValue264,
      -popcornElectronSurfaceStyleValue265,
    ),
    sw: popcornElectronSurfaceStyleValue269(
      -popcornElectronSurfaceStyleValue264,
      popcornElectronSurfaceStyleValue265,
    ),
    se: popcornElectronSurfaceStyleValue269(
      popcornElectronSurfaceStyleValue264,
      popcornElectronSurfaceStyleValue265,
    ),
  };
}
function popcornElectronSurfaceStyleHelper38(
  popcornElectronSurfaceStyleParam54,
  popcornElectronSurfaceStyleParam55,
) {
  let popcornElectronSurfaceStyleValue322 = popcornElectronSurfaceStyleHelper37(
      popcornElectronSurfaceStyleParam54,
    ),
    popcornElectronSurfaceStyleValue323 =
      (-popcornElectronSurfaceStyleHelper36(
        popcornElectronSurfaceStyleParam54.rotation,
      ) *
        Math.PI) /
      180,
    popcornElectronSurfaceStyleValue324 = Math.cos(
      popcornElectronSurfaceStyleValue323,
    ),
    popcornElectronSurfaceStyleValue325 = Math.sin(
      popcornElectronSurfaceStyleValue323,
    ),
    popcornElectronSurfaceStyleValue326 =
      popcornElectronSurfaceStyleParam55.x -
      popcornElectronSurfaceStyleValue322.x,
    popcornElectronSurfaceStyleValue327 =
      popcornElectronSurfaceStyleParam55.y -
      popcornElectronSurfaceStyleValue322.y;
  return {
    x:
      popcornElectronSurfaceStyleValue326 *
        popcornElectronSurfaceStyleValue324 -
      popcornElectronSurfaceStyleValue327 * popcornElectronSurfaceStyleValue325,
    y:
      popcornElectronSurfaceStyleValue326 *
        popcornElectronSurfaceStyleValue325 +
      popcornElectronSurfaceStyleValue327 * popcornElectronSurfaceStyleValue324,
  };
}
function _popcornElectronSurfaceStyleC(
  popcornElectronSurfaceStyleParam81,
  popcornElectronSurfaceStyleParam82,
) {
  let popcornElectronSurfaceStyleValue342 = popcornElectronSurfaceStyleHelper38(
    popcornElectronSurfaceStyleParam81,
    popcornElectronSurfaceStyleParam82,
  );
  return (
    Math.abs(popcornElectronSurfaceStyleValue342.x) <=
      popcornElectronSurfaceStyleParam81.width / 2 &&
    Math.abs(popcornElectronSurfaceStyleValue342.y) <=
      popcornElectronSurfaceStyleParam81.height / 2
  );
}
export function _popcornElectronSurfaceStyleO(
  popcornElectronSurfaceStyleParam63,
  popcornElectronSurfaceStyleParam64,
) {
  return Object.values(
    _popcornElectronSurfaceStyleS(popcornElectronSurfaceStyleParam64),
  ).every(
    (item) =>
      item.x >= popcornElectronSurfaceStyleParam63.left &&
      item.x <=
        popcornElectronSurfaceStyleParam63.left +
          popcornElectronSurfaceStyleParam63.width &&
      item.y >= popcornElectronSurfaceStyleParam63.top &&
      item.y <=
        popcornElectronSurfaceStyleParam63.top +
          popcornElectronSurfaceStyleParam63.height,
  );
}
function _popcornElectronSurfaceStyleL(
  popcornElectronSurfaceStyleParam42,
  popcornElectronSurfaceStyleParam43,
  popcornElectronSurfaceStyleParam44,
) {
  let { hitRadius: hitRadius } = _popcornElectronSurfaceStyleD(
      popcornElectronSurfaceStyleParam44,
    ),
    popcornElectronSurfaceStyleValue303 = _popcornElectronSurfaceStyleS(
      popcornElectronSurfaceStyleParam42,
    );
  for (let [
    popcornElectronSurfaceStyleValue345,
    popcornElectronSurfaceStyleValue346,
  ] of Object.entries(popcornElectronSurfaceStyleValue303))
    if (
      Math.abs(
        popcornElectronSurfaceStyleParam43.x -
          popcornElectronSurfaceStyleValue346.x,
      ) <= hitRadius &&
      Math.abs(
        popcornElectronSurfaceStyleParam43.y -
          popcornElectronSurfaceStyleValue346.y,
      ) <= hitRadius
    )
      return popcornElectronSurfaceStyleValue345;
  return null;
}
export function _popcornElectronSurfaceStyleU(
  popcornElectronSurfaceStyleParam45,
  popcornElectronSurfaceStyleParam46,
  popcornElectronSurfaceStyleParam47,
) {
  if (
    _popcornElectronSurfaceStyleL(
      popcornElectronSurfaceStyleParam45,
      popcornElectronSurfaceStyleParam46,
      popcornElectronSurfaceStyleParam47,
    ) ||
    _popcornElectronSurfaceStyleC(
      popcornElectronSurfaceStyleParam45,
      popcornElectronSurfaceStyleParam46,
    )
  )
    return !1;
  let popcornElectronSurfaceStyleValue304 = popcornElectronSurfaceStyleHelper38(
      popcornElectronSurfaceStyleParam45,
      popcornElectronSurfaceStyleParam46,
    ),
    { rotationBand: rotationBand } = _popcornElectronSurfaceStyleD(
      popcornElectronSurfaceStyleParam47,
    );
  return (
    Math.abs(popcornElectronSurfaceStyleValue304.x) <=
      popcornElectronSurfaceStyleParam45.width / 2 + rotationBand &&
    Math.abs(popcornElectronSurfaceStyleValue304.y) <=
      popcornElectronSurfaceStyleParam45.height / 2 + rotationBand
  );
}
var popcornElectronSurfaceStyleValue66 = 0.002,
  popcornElectronSurfaceStyleValue67 = 0.05,
  popcornElectronSurfaceStyleValue68 = 1,
  popcornElectronSurfaceStyleValue69 = 10,
  popcornElectronSurfaceStyleValue70 = 0.5,
  popcornElectronSurfaceStyleValue71 = 2,
  popcornElectronSurfaceStyleValue72 = 120,
  popcornElectronSurfaceStyleValue73 = 120;
function popcornElectronSurfaceStyleHelper39(
  popcornElectronSurfaceStyleParam79,
  popcornElectronSurfaceStyleParam80,
) {
  return (
    Math.abs(
      popcornElectronSurfaceStyleParam79.x -
        popcornElectronSurfaceStyleParam80.x,
    ) < 0.01 &&
    Math.abs(
      popcornElectronSurfaceStyleParam79.y -
        popcornElectronSurfaceStyleParam80.y,
    ) < 0.01 &&
    Math.abs(
      popcornElectronSurfaceStyleParam79.k -
        popcornElectronSurfaceStyleParam80.k,
    ) < 1e-4
  );
}
function popcornElectronSurfaceStyleHelper40(event) {
  let popcornElectronSurfaceStyleValue295 =
      event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? popcornElectronSurfaceStyleValue67
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? popcornElectronSurfaceStyleValue68
          : popcornElectronSurfaceStyleValue66,
    popcornElectronSurfaceStyleValue296 =
      2 **
      (-event.deltaY *
        popcornElectronSurfaceStyleValue295 *
        popcornElectronSurfaceStyleValue69);
  return Math.max(
    popcornElectronSurfaceStyleValue70,
    Math.min(
      popcornElectronSurfaceStyleValue71,
      popcornElectronSurfaceStyleValue296,
    ),
  );
}
function popcornElectronSurfaceStyleHelper41(
  popcornElectronSurfaceStyleParam74,
  popcornElectronSurfaceStyleParam75,
  popcornElectronSurfaceStyleParam76,
) {
  let popcornElectronSurfaceStyleValue340 = Math.max(
    0.01,
    popcornElectronSurfaceStyleParam76 * 0.0025,
  );
  return (
    Math.abs(
      popcornElectronSurfaceStyleParam76 - popcornElectronSurfaceStyleParam74,
    ) < popcornElectronSurfaceStyleValue340 &&
    ((popcornElectronSurfaceStyleParam75 > popcornElectronSurfaceStyleParam74 &&
      popcornElectronSurfaceStyleParam76 <=
        popcornElectronSurfaceStyleParam74) ||
      (popcornElectronSurfaceStyleParam75 <
        popcornElectronSurfaceStyleParam74 &&
        popcornElectronSurfaceStyleParam76 >=
          popcornElectronSurfaceStyleParam74))
  );
}
function popcornElectronSurfaceStyleHelper42(
  popcornElectronSurfaceStyleParam134,
  popcornElectronSurfaceStyleParam135,
) {
  return popcornElectronSurfaceStyleParam134 >
    popcornElectronSurfaceStyleParam135
    ? `out`
    : popcornElectronSurfaceStyleParam134 < popcornElectronSurfaceStyleParam135
      ? `in`
      : null;
}
var $n = 500;
export const _popcornElectronSurfaceStyleA = class {
  #e = new Map();
  #t = new Set();
  #n = (event) => {
    (this.#v(), event.preventDefault());
    let popcornElectronSurfaceStyleValue191;
    if (event.ctrlKey) {
      let popcornElectronSurfaceStyleValue245 = this.#a;
      if (!popcornElectronSurfaceStyleValue245) return;
      let popcornElectronSurfaceStyleValue246 = _popcornElectronSurfaceStyleY(
          popcornElectronSurfaceStyleValue245,
          event.clientX,
          event.clientY,
        ),
        popcornElectronSurfaceStyleValue247 =
          popcornElectronSurfaceStyleHelper40(event),
        popcornElectronSurfaceStyleValue248 =
          this.#p.k * popcornElectronSurfaceStyleValue247,
        popcornElectronSurfaceStyleValue249 = this.#b(
          popcornElectronSurfaceStyleValue248,
        );
      if (
        popcornElectronSurfaceStyleHelper41(
          this.#p.k,
          popcornElectronSurfaceStyleValue248,
          popcornElectronSurfaceStyleValue249,
        )
      )
        return;
      let popcornElectronSurfaceStyleValue250 =
        this.#i.screenToWorldPoint?.(
          this.#p,
          popcornElectronSurfaceStyleValue246.x,
          popcornElectronSurfaceStyleValue246.y,
        ) ??
        _popcornElectronSurfaceStyleB(
          this.#p,
          popcornElectronSurfaceStyleValue246.x,
          popcornElectronSurfaceStyleValue246.y,
        );
      popcornElectronSurfaceStyleValue191 = {
        k: popcornElectronSurfaceStyleValue249,
        x:
          popcornElectronSurfaceStyleValue246.x -
          popcornElectronSurfaceStyleValue250.x *
            popcornElectronSurfaceStyleValue249,
        y:
          popcornElectronSurfaceStyleValue246.y -
          popcornElectronSurfaceStyleValue250.y *
            popcornElectronSurfaceStyleValue249,
      };
    } else
      popcornElectronSurfaceStyleValue191 = {
        ...this.#p,
        x: this.#p.x - event.deltaX,
        y: this.#p.y - event.deltaY,
      };
    (this.setCamera(popcornElectronSurfaceStyleValue191),
      this.#f != null && window.clearTimeout(this.#f),
      (this.#f = window.setTimeout(() => {
        ((this.#f = null), this.#i.onCameraSettled?.(this.#p));
      }, popcornElectronSurfaceStyleValue73)));
  };
  #r = (event) => {
    let popcornElectronSurfaceStyleValue130 = this.#a;
    if (!popcornElectronSurfaceStyleValue130 || event.pointerType !== `touch`)
      return;
    if (
      event.type === `pointerup` ||
      event.type === `pointercancel` ||
      event.type === `pointerleave`
    ) {
      if (!this.#e.delete(event.pointerId)) return;
      if (
        (this.#c?.pointerId === event.pointerId && (this.#c = null),
        this.#e.size >= 2)
      ) {
        let popcornElectronSurfaceStyleValue232 =
          popcornElectronSurfaceStyleHelper30(this.#e);
        if (!popcornElectronSurfaceStyleValue232) return;
        let popcornElectronSurfaceStyleValue233 =
          this.#i.screenToWorldPoint?.(
            this.#p,
            popcornElectronSurfaceStyleValue232.centerX,
            popcornElectronSurfaceStyleValue232.centerY,
          ) ??
          _popcornElectronSurfaceStyleB(
            this.#p,
            popcornElectronSurfaceStyleValue232.centerX,
            popcornElectronSurfaceStyleValue232.centerY,
          );
        ((this.#o = {
          startK: this.#p.k,
          startDistance: popcornElectronSurfaceStyleValue232.distance,
          anchorWorldX: popcornElectronSurfaceStyleValue233.x,
          anchorWorldY: popcornElectronSurfaceStyleValue233.y,
        }),
          (this.#u = null),
          (this.#s = !0),
          (this.#c = null));
        return;
      }
      if (this.#e.size === 1) {
        let popcornElectronSurfaceStyleValue318 = this.#e
          .entries()
          .next().value;
        if (popcornElectronSurfaceStyleValue318) {
          let [
            popcornElectronSurfaceStyleValue363,
            popcornElectronSurfaceStyleValue364,
          ] = popcornElectronSurfaceStyleValue318;
          this.#c = {
            pointerId: popcornElectronSurfaceStyleValue363,
            lastPoint: {
              ...popcornElectronSurfaceStyleValue364,
            },
          };
        }
        ((this.#o = null), (this.#u = null), (this.#s = !1));
        return;
      }
      ((this.#o = null),
        (this.#u = null),
        (this.#s = !1),
        (this.#c = null),
        (this.#d = performance.now() + popcornElectronSurfaceStyleValue72),
        this.#i.onCameraSettled?.(this.#p));
      return;
    }
    let popcornElectronSurfaceStyleValue131 = _popcornElectronSurfaceStyleY(
      popcornElectronSurfaceStyleValue130,
      event.clientX,
      event.clientY,
    );
    if (event.type === `pointerdown`) {
      if (
        (this.#e.set(event.pointerId, popcornElectronSurfaceStyleValue131),
        this.#e.size < 2)
      ) {
        (this.#v(),
          (this.#c = {
            pointerId: event.pointerId,
            lastPoint: {
              ...popcornElectronSurfaceStyleValue131,
            },
          }),
          event.preventDefault());
        return;
      }
      (this.#v(), (this.#s = !0), (this.#c = null));
      let popcornElectronSurfaceStyleValue203 =
        popcornElectronSurfaceStyleHelper30(this.#e);
      if (!popcornElectronSurfaceStyleValue203) return;
      let popcornElectronSurfaceStyleValue204 =
        this.#i.screenToWorldPoint?.(
          this.#p,
          popcornElectronSurfaceStyleValue203.centerX,
          popcornElectronSurfaceStyleValue203.centerY,
        ) ??
        _popcornElectronSurfaceStyleB(
          this.#p,
          popcornElectronSurfaceStyleValue203.centerX,
          popcornElectronSurfaceStyleValue203.centerY,
        );
      ((this.#o = {
        startK: this.#p.k,
        startDistance: popcornElectronSurfaceStyleValue203.distance,
        anchorWorldX: popcornElectronSurfaceStyleValue204.x,
        anchorWorldY: popcornElectronSurfaceStyleValue204.y,
      }),
        (this.#u = null),
        event.preventDefault());
      return;
    }
    if (this.#e.has(event.pointerId)) {
      if (
        (this.#e.set(event.pointerId, popcornElectronSurfaceStyleValue131),
        event.type !== `pointermove` || this.#e.size < 2)
      ) {
        if (
          event.type === `pointermove` &&
          this.#e.size === 1 &&
          this.#c?.pointerId === event.pointerId
        ) {
          event.preventDefault();
          let popcornElectronSurfaceStyleValue251 =
              popcornElectronSurfaceStyleValue131.x - this.#c.lastPoint.x,
            popcornElectronSurfaceStyleValue252 =
              popcornElectronSurfaceStyleValue131.y - this.#c.lastPoint.y;
          if (
            ((this.#c = {
              pointerId: event.pointerId,
              lastPoint: {
                ...popcornElectronSurfaceStyleValue131,
              },
            }),
            Math.abs(popcornElectronSurfaceStyleValue251) < 0.01 &&
              Math.abs(popcornElectronSurfaceStyleValue252) < 0.01)
          )
            return;
          this.setCamera({
            ...this.#p,
            x: this.#p.x + popcornElectronSurfaceStyleValue251,
            y: this.#p.y + popcornElectronSurfaceStyleValue252,
          });
        }
        return;
      }
      (event.preventDefault(), this.#g());
    }
  };
  #i;
  #a = null;
  #o = null;
  #s = !1;
  #c = null;
  #l = null;
  #u = null;
  #d = 0;
  #f = null;
  #p;
  #m;
  constructor(popcornElectronSurfaceStyleParam113) {
    ((this.#i = popcornElectronSurfaceStyleParam113),
      (this.#p = popcornElectronSurfaceStyleParam113.initialCamera),
      (this.#m = popcornElectronSurfaceStyleParam113.enabled));
  }
  attach(popcornElectronSurfaceStyleParam114) {
    this.#a !== popcornElectronSurfaceStyleParam114 &&
      (this.#S(),
      (this.#a = popcornElectronSurfaceStyleParam114),
      popcornElectronSurfaceStyleParam114 && this.#m && this.#x());
  }
  destroy() {
    (this.#S(),
      this.#l != null && (cancelAnimationFrame(this.#l), (this.#l = null)),
      this.#f != null && (window.clearTimeout(this.#f), (this.#f = null)),
      (this.#c = null),
      this.#t.clear());
  }
  setEnabled(popcornElectronSurfaceStyleParam95) {
    if (this.#m !== popcornElectronSurfaceStyleParam95) {
      if (
        ((this.#m = popcornElectronSurfaceStyleParam95),
        popcornElectronSurfaceStyleParam95 && this.#a)
      ) {
        this.#x();
        return;
      }
      this.#S();
    }
  }
  getCamera() {
    return this.#p;
  }
  getViewportSnapshot() {
    let popcornElectronSurfaceStyleValue313 = this.#a,
      popcornElectronSurfaceStyleValue314 =
        popcornElectronSurfaceStyleUnderscore(this.#p);
    return {
      scrollLeft: popcornElectronSurfaceStyleValue314.left,
      scrollTop: popcornElectronSurfaceStyleValue314.top,
      width: popcornElectronSurfaceStyleValue313?.clientWidth ?? 0,
      height: popcornElectronSurfaceStyleValue313?.clientHeight ?? 0,
    };
  }
  subscribeToCameraChanges(popcornElectronSurfaceStyleParam108) {
    return (
      this.#t.add(popcornElectronSurfaceStyleParam108),
      () => {
        this.#t.delete(popcornElectronSurfaceStyleParam108);
      }
    );
  }
  shouldSuppressMouseInteractions() {
    return this.#s || this.#c != null || performance.now() < this.#d;
  }
  setCamera(
    popcornElectronSurfaceStyleParam31,
    popcornElectronSurfaceStyleParam32,
  ) {
    let popcornElectronSurfaceStyleValue286 = this.#y(
      popcornElectronSurfaceStyleParam31,
    );
    if (
      popcornElectronSurfaceStyleHelper39(
        this.#p,
        popcornElectronSurfaceStyleValue286,
      )
    ) {
      popcornElectronSurfaceStyleParam32?.settled &&
        this.#i.onCameraSettled?.(popcornElectronSurfaceStyleValue286);
      return;
    }
    ((this.#p = popcornElectronSurfaceStyleValue286),
      this.#h(),
      this.#i.requestDraw(),
      popcornElectronSurfaceStyleParam32?.settled &&
        this.#i.onCameraSettled?.(popcornElectronSurfaceStyleValue286));
  }
  zoomTo(
    popcornElectronSurfaceStyleParam28,
    popcornElectronSurfaceStyleParam29,
  ) {
    let popcornElectronSurfaceStyleValue282 = this.#a;
    if (!popcornElectronSurfaceStyleValue282) return;
    let popcornElectronSurfaceStyleValue283 =
        popcornElectronSurfaceStyleParam29?.screenX ??
        popcornElectronSurfaceStyleValue282.clientWidth / 2,
      popcornElectronSurfaceStyleValue284 =
        popcornElectronSurfaceStyleParam29?.screenY ??
        popcornElectronSurfaceStyleValue282.clientHeight / 2;
    this.setCamera(
      popcornElectronSurfaceStyleHelper29(
        this.#p,
        popcornElectronSurfaceStyleValue283,
        popcornElectronSurfaceStyleValue284,
        popcornElectronSurfaceStyleParam28,
        this.#i.minZoom,
        this.#i.maxZoom,
      ),
      {
        settled: popcornElectronSurfaceStyleParam29?.settled,
      },
    );
  }
  panByScroll(
    popcornElectronSurfaceStyleParam77,
    popcornElectronSurfaceStyleParam78,
  ) {
    this.setCamera({
      ...this.#p,
      x: this.#p.x - popcornElectronSurfaceStyleParam77 * this.#p.k,
      y: this.#p.y - popcornElectronSurfaceStyleParam78 * this.#p.k,
    });
  }
  #h() {
    for (let popcornElectronSurfaceStyleValue371 of this.#t)
      popcornElectronSurfaceStyleValue371();
  }
  #g() {
    this.#l ??= requestAnimationFrame(() => {
      ((this.#l = null), this.#_());
    });
  }
  #_() {
    let popcornElectronSurfaceStyleValue186 = this.#o,
      popcornElectronSurfaceStyleValue187 = popcornElectronSurfaceStyleHelper30(
        this.#e,
      );
    if (
      !popcornElectronSurfaceStyleValue186 ||
      !popcornElectronSurfaceStyleValue187
    )
      return;
    let popcornElectronSurfaceStyleValue188 =
        popcornElectronSurfaceStyleValue186.startK *
        (popcornElectronSurfaceStyleValue187.distance /
          Math.max(
            popcornElectronSurfaceStyleValue186.startDistance,
            2 ** -52,
          )),
      popcornElectronSurfaceStyleValue189 = this.#b(
        popcornElectronSurfaceStyleValue188,
      ),
      popcornElectronSurfaceStyleValue190 = popcornElectronSurfaceStyleHelper42(
        popcornElectronSurfaceStyleValue188,
        popcornElectronSurfaceStyleValue189,
      );
    if (
      popcornElectronSurfaceStyleHelper41(
        this.#p.k,
        popcornElectronSurfaceStyleValue188,
        popcornElectronSurfaceStyleValue189,
      )
    ) {
      this.#u = popcornElectronSurfaceStyleValue190;
      return;
    }
    if (this.#u != null) {
      if (popcornElectronSurfaceStyleValue190 === this.#u) return;
      let popcornElectronSurfaceStyleValue253 =
        this.#i.screenToWorldPoint?.(
          this.#p,
          popcornElectronSurfaceStyleValue187.centerX,
          popcornElectronSurfaceStyleValue187.centerY,
        ) ??
        _popcornElectronSurfaceStyleB(
          this.#p,
          popcornElectronSurfaceStyleValue187.centerX,
          popcornElectronSurfaceStyleValue187.centerY,
        );
      ((this.#o = {
        startK: this.#p.k,
        startDistance: popcornElectronSurfaceStyleValue187.distance,
        anchorWorldX: popcornElectronSurfaceStyleValue253.x,
        anchorWorldY: popcornElectronSurfaceStyleValue253.y,
      }),
        (this.#u = null));
      return;
    }
    this.setCamera({
      k: popcornElectronSurfaceStyleValue189,
      x:
        popcornElectronSurfaceStyleValue187.centerX -
        popcornElectronSurfaceStyleValue186.anchorWorldX *
          popcornElectronSurfaceStyleValue189,
      y:
        popcornElectronSurfaceStyleValue187.centerY -
        popcornElectronSurfaceStyleValue186.anchorWorldY *
          popcornElectronSurfaceStyleValue189,
    });
  }
  #v() {
    this.#i.followModeEnabled &&
      !this.#i.isProgrammaticViewportUpdate?.() &&
      this.#i.turnOffFollowMode?.();
  }
  #y(popcornElectronSurfaceStyleParam24) {
    return this.#i.clampCamera
      ? this.#i.clampCamera({
          ...popcornElectronSurfaceStyleParam24,
          k: on(
            popcornElectronSurfaceStyleParam24.k,
            this.#i.minZoom,
            this.#i.maxZoom,
          ),
        })
      : _popcornElectronSurfaceStyleV(
          {
            ...popcornElectronSurfaceStyleParam24,
            k: on(
              popcornElectronSurfaceStyleParam24.k,
              this.#i.minZoom,
              this.#i.maxZoom,
            ),
          },
          this.#i.getViewportSize(),
          this.#i.getWorldSize(),
        );
  }
  #b(popcornElectronSurfaceStyleParam138) {
    return this.#y({
      ...this.#p,
      k: popcornElectronSurfaceStyleParam138,
    }).k;
  }
  #x() {
    let popcornElectronSurfaceStyleValue208 = this.#a;
    if (!popcornElectronSurfaceStyleValue208 || !this.#m) return;
    (this.#S(),
      (this.#a = popcornElectronSurfaceStyleValue208),
      (this.#p = this.#y(this.#p)),
      popcornElectronSurfaceStyleValue208.addEventListener(`wheel`, this.#n, {
        passive: !1,
      }));
    let popcornElectronSurfaceStyleValue209 = {
      capture: !0,
      passive: !1,
    };
    (popcornElectronSurfaceStyleValue208.addEventListener(
      `pointerdown`,
      this.#r,
      popcornElectronSurfaceStyleValue209,
    ),
      popcornElectronSurfaceStyleValue208.addEventListener(
        `pointermove`,
        this.#r,
        popcornElectronSurfaceStyleValue209,
      ),
      popcornElectronSurfaceStyleValue208.addEventListener(
        `pointerup`,
        this.#r,
        popcornElectronSurfaceStyleValue209,
      ),
      popcornElectronSurfaceStyleValue208.addEventListener(
        `pointercancel`,
        this.#r,
        popcornElectronSurfaceStyleValue209,
      ),
      popcornElectronSurfaceStyleValue208.addEventListener(
        `pointerleave`,
        this.#r,
        popcornElectronSurfaceStyleValue209,
      ));
  }
  #S() {
    let popcornElectronSurfaceStyleValue192 = this.#a;
    popcornElectronSurfaceStyleValue192 &&
      (popcornElectronSurfaceStyleValue192.removeEventListener(
        `wheel`,
        this.#n,
      ),
      popcornElectronSurfaceStyleValue192.removeEventListener(
        `pointerdown`,
        this.#r,
        {
          capture: !0,
        },
      ),
      popcornElectronSurfaceStyleValue192.removeEventListener(
        `pointermove`,
        this.#r,
        {
          capture: !0,
        },
      ),
      popcornElectronSurfaceStyleValue192.removeEventListener(
        `pointerup`,
        this.#r,
        {
          capture: !0,
        },
      ),
      popcornElectronSurfaceStyleValue192.removeEventListener(
        `pointercancel`,
        this.#r,
        {
          capture: !0,
        },
      ),
      popcornElectronSurfaceStyleValue192.removeEventListener(
        `pointerleave`,
        this.#r,
        {
          capture: !0,
        },
      ),
      this.#l != null && (cancelAnimationFrame(this.#l), (this.#l = null)),
      this.#e.clear(),
      (this.#o = null),
      (this.#s = !1),
      (this.#c = null),
      (this.#u = null));
  }
};
function popcornElectronSurfaceStyleHelper43(
  popcornElectronSurfaceStyleParam131,
) {
  return (popcornElectronSurfaceStyleParam131 ?? []).filter(
    (item) => item.length > 0,
  );
}
function popcornElectronSurfaceStyleHelper44(
  popcornElectronSurfaceStyleParam66,
  popcornElectronSurfaceStyleParam67,
) {
  let popcornElectronSurfaceStyleValue332 = popcornElectronSurfaceStyleParam66
    .slice(popcornElectronSurfaceStyleParam67)
    .filter((item) => item.length > 0);
  return popcornElectronSurfaceStyleValue332.length === 0
    ? null
    : popcornElectronSurfaceStyleValue332.length === 1
      ? (popcornElectronSurfaceStyleValue332[0] ?? null)
      : q(popcornElectronSurfaceStyleValue332);
}
function popcornElectronSurfaceStyleHelper45(
  popcornElectronSurfaceStyleParam59,
  popcornElectronSurfaceStyleParam60,
) {
  if (popcornElectronSurfaceStyleParam59 === popcornElectronSurfaceStyleParam60)
    return !0;
  if (
    popcornElectronSurfaceStyleParam59.length !==
    popcornElectronSurfaceStyleParam60.length
  )
    return !1;
  for (
    let popcornElectronSurfaceStyleValue361 = 0;
    popcornElectronSurfaceStyleValue361 <
    popcornElectronSurfaceStyleParam59.length;
    popcornElectronSurfaceStyleValue361 += 1
  )
    if (
      popcornElectronSurfaceStyleParam59[
        popcornElectronSurfaceStyleValue361
      ] !==
      popcornElectronSurfaceStyleParam60[popcornElectronSurfaceStyleValue361]
    )
      return !1;
  return !0;
}
function popcornElectronSurfaceStyleHelper46(
  popcornElectronSurfaceStyleParam40,
  popcornElectronSurfaceStyleParam41,
) {
  if (popcornElectronSurfaceStyleParam40 === popcornElectronSurfaceStyleParam41)
    return !0;
  if (
    popcornElectronSurfaceStyleParam40.length !==
    popcornElectronSurfaceStyleParam41.length
  )
    return !1;
  for (
    let popcornElectronSurfaceStyleValue355 = 0;
    popcornElectronSurfaceStyleValue355 <
    popcornElectronSurfaceStyleParam40.length;
    popcornElectronSurfaceStyleValue355 += 1
  ) {
    let popcornElectronSurfaceStyleValue365 =
        popcornElectronSurfaceStyleParam40[popcornElectronSurfaceStyleValue355],
      popcornElectronSurfaceStyleValue366 =
        popcornElectronSurfaceStyleParam41[popcornElectronSurfaceStyleValue355];
    if (
      !popcornElectronSurfaceStyleValue365 ||
      !popcornElectronSurfaceStyleValue366 ||
      !popcornElectronSurfaceStyleHelper45(
        popcornElectronSurfaceStyleValue365,
        popcornElectronSurfaceStyleValue366,
      )
    )
      return !1;
  }
  return !0;
}
function popcornElectronSurfaceStyleHelper47(
  popcornElectronSurfaceStyleParam30,
) {
  let popcornElectronSurfaceStyleValue285 = popcornElectronSurfaceStyleHelper43(
    popcornElectronSurfaceStyleParam30.externalCrdtUpdates,
  );
  return (
    popcornElectronSurfaceStyleParam30.initialCrdtState &&
      popcornElectronSurfaceStyleParam30.initialCrdtState.length > 0 &&
      popcornElectronSurfaceStyleValue285.unshift(
        popcornElectronSurfaceStyleParam30.initialCrdtState,
      ),
    popcornElectronSurfaceStyleValue285.length === 0
      ? popcornElectronSurfaceStyleParam30.initialCrdtState
      : popcornElectronSurfaceStyleValue285.length === 1
        ? popcornElectronSurfaceStyleValue285[0]
        : q(popcornElectronSurfaceStyleValue285)
  );
}
function popcornElectronSurfaceStyleHelper48(
  popcornElectronSurfaceStyleParam38,
) {
  let popcornElectronSurfaceStyleValue294 = popcornElectronSurfaceStyleHelper43(
    popcornElectronSurfaceStyleParam38.externalCrdtUpdates,
  );
  return {
    initialCrdtState: popcornElectronSurfaceStyleHelper47({
      initialCrdtState: popcornElectronSurfaceStyleParam38.initialCrdtState,
      externalCrdtUpdates: popcornElectronSurfaceStyleValue294,
    }),
    bootstrappedExternalCrdtUpdates: popcornElectronSurfaceStyleValue294,
  };
}
function or(popcornElectronSurfaceStyleParam15) {
  let popcornElectronSurfaceStyleValue236 = popcornElectronSurfaceStyleHelper43(
      popcornElectronSurfaceStyleParam15.updates,
    ),
    popcornElectronSurfaceStyleValue237 =
      popcornElectronSurfaceStyleParam15.bootstrapState
        .bootstrappedExternalCrdtUpdates;
  if (
    popcornElectronSurfaceStyleValue237.length === 0 ||
    popcornElectronSurfaceStyleValue236.length <
      popcornElectronSurfaceStyleValue237.length
  )
    return popcornElectronSurfaceStyleValue236;
  for (
    let popcornElectronSurfaceStyleValue356 = 0;
    popcornElectronSurfaceStyleValue356 <
    popcornElectronSurfaceStyleValue237.length;
    popcornElectronSurfaceStyleValue356 += 1
  ) {
    let popcornElectronSurfaceStyleValue367 =
        popcornElectronSurfaceStyleValue237[
          popcornElectronSurfaceStyleValue356
        ],
      popcornElectronSurfaceStyleValue368 =
        popcornElectronSurfaceStyleValue236[
          popcornElectronSurfaceStyleValue356
        ];
    if (
      !popcornElectronSurfaceStyleValue367 ||
      !popcornElectronSurfaceStyleValue368 ||
      !popcornElectronSurfaceStyleHelper45(
        popcornElectronSurfaceStyleValue367,
        popcornElectronSurfaceStyleValue368,
      )
    )
      return popcornElectronSurfaceStyleValue236;
  }
  return popcornElectronSurfaceStyleValue236.slice(
    popcornElectronSurfaceStyleValue237.length,
  );
}
function popcornElectronSurfaceStyleHelper49(
  popcornElectronSurfaceStyleParam56,
  popcornElectronSurfaceStyleParam57,
) {
  return popcornElectronSurfaceStyleParam56 instanceof Error &&
    popcornElectronSurfaceStyleParam56.message.trim().length > 0
    ? popcornElectronSurfaceStyleParam56.message
    : `Failed to restore external ${popcornElectronSurfaceStyleParam57.toLowerCase()} edits.`;
}
export function _popcornElectronSurfaceStyleR({
  initialCrdtState: initialCrdtState,
  externalCrdtUpdates: externalCrdtUpdates,
}) {
  let popcornElectronSurfaceStyleValue234 = (0, React.useRef)(null);
  popcornElectronSurfaceStyleValue234.current ??=
    popcornElectronSurfaceStyleHelper48({
      initialCrdtState: initialCrdtState,
      externalCrdtUpdates: externalCrdtUpdates,
    });
  let popcornElectronSurfaceStyleValue235 =
    popcornElectronSurfaceStyleValue234.current;
  return {
    initialCrdtState: popcornElectronSurfaceStyleValue235.initialCrdtState,
    externalCrdtUpdates: or({
      bootstrapState: popcornElectronSurfaceStyleValue235,
      updates: externalCrdtUpdates,
    }),
  };
}
export function _popcornElectronSurfaceStyleI({
  artifactLabel: artifactLabel,
  controller: controller,
  externalCrdtUpdates = [],
  onCrdtUpdate: onCrdtUpdate,
}) {
  let popcornElectronSurfaceStyleValue151 = (0, React.useRef)(0),
    popcornElectronSurfaceStyleValue152 = (0, React.useRef)(
      externalCrdtUpdates ?? [],
    ),
    [popcornElectronSurfaceStyleValue153, popcornElectronSurfaceStyleValue154] =
      (0, React.useState)(null);
  popcornElectronSurfaceStyleHelper46(
    popcornElectronSurfaceStyleValue152.current,
    externalCrdtUpdates,
  ) || (popcornElectronSurfaceStyleValue152.current = externalCrdtUpdates);
  let popcornElectronSurfaceStyleValue156 =
    popcornElectronSurfaceStyleValue152.current;
  return (
    (0, React.useEffect)(() => {
      if (!(!controller || !onCrdtUpdate))
        return controller.subscribeCrdtUpdates(onCrdtUpdate);
    }, [controller, onCrdtUpdate]),
    (0, React.useEffect)(() => {
      if (!controller) return;
      let popcornElectronSurfaceStyleValue195 =
        popcornElectronSurfaceStyleValue156;
      if (
        popcornElectronSurfaceStyleValue195.length <
        popcornElectronSurfaceStyleValue151.current
      ) {
        ((popcornElectronSurfaceStyleValue151.current =
          popcornElectronSurfaceStyleValue195.length),
          popcornElectronSurfaceStyleValue154(null));
        return;
      }
      if (
        popcornElectronSurfaceStyleValue195.length ===
        popcornElectronSurfaceStyleValue151.current
      ) {
        popcornElectronSurfaceStyleValue154(null);
        return;
      }
      let popcornElectronSurfaceStyleValue196 = !1;
      return (
        (async () => {
          let popcornElectronSurfaceStyleValue219 =
            popcornElectronSurfaceStyleValue195.length -
            popcornElectronSurfaceStyleValue151.current;
          popcornElectronSurfaceStyleValue154(
            popcornElectronSurfaceStyleValue219 >= $n
              ? {
                  kind: `restoring`,
                  pendingUpdateCount: popcornElectronSurfaceStyleValue219,
                }
              : null,
          );
          try {
            let popcornElectronSurfaceStyleValue338 =
              popcornElectronSurfaceStyleHelper44(
                popcornElectronSurfaceStyleValue195,
                popcornElectronSurfaceStyleValue151.current,
              );
            if (
              popcornElectronSurfaceStyleValue196 ||
              (popcornElectronSurfaceStyleValue338 &&
                (await controller.applyCrdtUpdate(
                  popcornElectronSurfaceStyleValue338,
                ),
                popcornElectronSurfaceStyleValue196))
            )
              return;
            ((popcornElectronSurfaceStyleValue151.current =
              popcornElectronSurfaceStyleValue195.length),
              popcornElectronSurfaceStyleValue154(null));
          } catch (popcornElectronSurfaceStyleValue336) {
            if (popcornElectronSurfaceStyleValue196) return;
            popcornElectronSurfaceStyleValue154({
              kind: `failed`,
              artifactLabel: artifactLabel,
              errorMessage: popcornElectronSurfaceStyleHelper49(
                popcornElectronSurfaceStyleValue336,
                artifactLabel,
              ),
              pendingUpdateCount: popcornElectronSurfaceStyleValue219,
            });
          }
        })(),
        () => {
          popcornElectronSurfaceStyleValue196 = !0;
        }
      );
    }, [artifactLabel, controller, popcornElectronSurfaceStyleValue156]),
    popcornElectronSurfaceStyleValue153
  );
}
export function _popcornElectronSurfaceStyleN({
  artifactLabel: artifactLabel,
  restoreState: restoreState,
}) {
  return restoreState ? (
    <div
      className={`absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]`}
    >
      <div
        className={clsx(
          `w-full rounded-xl border px-3 py-2 text-xs shadow-lg`,
          restoreState.kind === `failed`
            ? `border-token-border-default bg-token-bg-primary text-token-editor-warning-foreground`
            : `border-token-border-default bg-token-bg-primary text-token-text-secondary`,
        )}
        role={restoreState.kind === `failed` ? `alert` : `status`}
      >
        {restoreState.kind === `failed` ? (
          <div className={`flex flex-col gap-1`}>
            <div className={`font-medium text-token-text-primary`}>
              {`Could not restore `}
              {artifactLabel.toLowerCase()}
              {` edits`}
            </div>
            <div>
              {restoreState.errorMessage}
              {` Pending CRDT updates:`}
              {` `}
              {restoreState.pendingUpdateCount}
              {`.`}
            </div>
          </div>
        ) : (
          <div className={`flex flex-col gap-1`}>
            <div className={`font-medium text-token-text-primary`}>
              {`Restoring `}
              {artifactLabel.toLowerCase()}
              {` edits`}
            </div>
            <div>
              {`Compacting and applying `}
              {restoreState.pendingUpdateCount}
              {` CRDT updates.`}
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
export function _popcornElectronSurfaceStyleT(
  popcornElectronSurfaceStyleParam148,
) {
  return popcornElectronSurfaceStyleHelper28(
    popcornElectronSurfaceStyleParam148,
  );
}
export {
  popcornElectronSurfaceStyleG,
  popcornElectronSurfaceStyleK,
  popcornElectronSurfaceStyleQ,
  popcornElectronSurfaceStyleUnderscore,
  _popcornElectronSurfaceStyleB,
  _popcornElectronSurfaceStyleC,
  _popcornElectronSurfaceStyleD,
  _popcornElectronSurfaceStyleL,
  _popcornElectronSurfaceStyleQ,
  _popcornElectronSurfaceStyleS,
  popcornElectronSurfaceStyleTt,
  _popcornElectronSurfaceStyleV,
  _popcornElectronSurfaceStyleW,
  _popcornElectronSurfaceStyleY,
};
