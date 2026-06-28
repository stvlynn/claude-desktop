// Restored from ref/webview/assets/use-is-dark-Dz6aJFFs.js
// UseIsDark chunk restored from the Codex webview bundle.
import React from "react";
var darkLocal3 = null,
  darkLocal4 = new Set(),
  darkLocal5 = null,
  darkLocal6 = null,
  darkLocal7 = null;
function darkRoutine1() {
  for (let darkLocal49 of darkLocal4) darkLocal49();
}
function darkRoutine2() {
  let darkLocal48 = darkRoutine15();
  darkLocal48 !== darkLocal3 && ((darkLocal3 = darkLocal48), darkRoutine1());
}
function darkRoutine3(input6) {
  if (input6.rel !== "stylesheet") return;
  if (input6.sheet) {
    queueMicrotask(() => {
      darkRoutine2();
    });
    return;
  }
  let darkLocal25 = () => {
    darkRoutine2();
  };
  input6.addEventListener("load", darkLocal25, {
    once: true,
  });
  input6.addEventListener("error", darkLocal25, {
    once: true,
  });
}
function darkRoutine4(event) {
  if (event.type === "childList") {
    let darkLocal28 = false;
    for (let darkLocal37 of Array.from(event.addedNodes))
      darkLocal37 instanceof HTMLLinkElement &&
        darkLocal37.rel === "stylesheet" &&
        (darkRoutine3(darkLocal37), (darkLocal28 = true));
    (event.removedNodes.length > 0 || !darkLocal28) && darkRoutine2();
    return;
  }
  if (event.type === "attributes") {
    let darkLocal26 = event.target;
    if (
      darkLocal26 instanceof HTMLLinkElement &&
      darkLocal26.rel === "stylesheet" &&
      (event.attributeName === "href" ||
        event.attributeName === "media" ||
        event.attributeName === "rel")
    ) {
      darkRoutine3(darkLocal26);
      return;
    }
    darkRoutine2();
  }
}
function darkRoutine5() {
  if (typeof window > "u" || darkLocal5 || darkLocal6) return;
  darkRoutine2();
  darkLocal5 = new MutationObserver((input14) => {
    for (let darkLocal47 of input14)
      if (darkLocal47.type === "attributes") {
        darkRoutine2();
        break;
      }
  });
  darkLocal5.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "style"],
  });
  let darkLocal11 = document.head;
  darkLocal11 &&
    ((darkLocal6 = new MutationObserver((input11) => {
      for (let darkLocal44 of input11)
        if (
          darkLocal44.type === "childList" ||
          darkLocal44.type === "attributes"
        ) {
          darkRoutine4(darkLocal44);
          break;
        }
    })),
    darkLocal6.observe(darkLocal11, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "media", "rel"],
    }));
  typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    ((darkLocal7 = window.matchMedia("(prefers-color-scheme: dark)")),
    darkLocal7.addEventListener("change", darkRoutine2));
}
function darkRoutine6() {
  darkLocal5?.disconnect();
  darkLocal6?.disconnect();
  darkLocal5 = null;
  darkLocal6 = null;
  darkLocal7?.removeEventListener("change", darkRoutine2);
  darkLocal7 = null;
}
function darkRoutine7(input12) {
  return (
    darkLocal4.add(input12),
    darkRoutine5(),
    () => {
      darkLocal4.delete(input12);
      darkLocal4.size === 0 && darkRoutine6();
    }
  );
}
function darkRoutine8() {
  return darkLocal3;
}
export function useIsDark() {
  return React.useSyncExternalStore(darkRoutine7, darkRoutine8, darkRoutine8);
}
function darkRoutine9(input8, input9, input10) {
  let darkLocal30 = (input13) => {
      let darkLocal46 = input13 / 255;
      return darkLocal46 <= 0.03928
        ? darkLocal46 / 12.92
        : ((darkLocal46 + 0.055) / 1.055) ** 2.4;
    },
    darkLocal31 = darkLocal30(input8),
    darkLocal32 = darkLocal30(input9),
    darkLocal33 = darkLocal30(input10);
  return 0.2126 * darkLocal31 + 0.7152 * darkLocal32 + 0.0722 * darkLocal33;
}
function darkRoutine10(input1) {
  let darkLocal8 = input1.trim().toLowerCase();
  if (!darkLocal8) return null;
  if (darkLocal8.startsWith("#")) {
    let darkLocal19 = darkLocal8.slice(1),
      darkLocal20 = (input15) => input15 + input15;
    return darkLocal19.length === 3 || darkLocal19.length === 4
      ? {
          r: parseInt(darkLocal20(darkLocal19[0]), 16),
          g: parseInt(darkLocal20(darkLocal19[1]), 16),
          b: parseInt(darkLocal20(darkLocal19[2]), 16),
        }
      : darkLocal19.length === 6 || darkLocal19.length === 8
        ? {
            r: parseInt(darkLocal19.slice(0, 2), 16),
            g: parseInt(darkLocal19.slice(2, 4), 16),
            b: parseInt(darkLocal19.slice(4, 6), 16),
          }
        : null;
  }
  let darkLocal9 = darkLocal8.match(/^rgba?\(([^)]+)\)$/);
  if (darkLocal9) {
    let darkLocal27 = darkLocal9[1].split(/\s*,\s*/).map((item) => item.trim());
    if (darkLocal27.length >= 3) {
      let darkLocal38 = darkRoutine11(darkLocal27[0]),
        darkLocal39 = darkRoutine11(darkLocal27[1]),
        darkLocal40 = darkRoutine11(darkLocal27[2]);
      if (darkLocal38 != null && darkLocal39 != null && darkLocal40 != null)
        return {
          r: darkLocal38,
          g: darkLocal39,
          b: darkLocal40,
        };
    }
    return null;
  }
  let darkLocal10 = darkLocal8.match(/^hsla?\(([^)]+)\)$/);
  if (darkLocal10) {
    let darkLocal23 = darkLocal10[1]
      .split(/\s*,\s*/)
      .map((item) => item.trim());
    if (darkLocal23.length >= 3) {
      let darkLocal34 = parseFloat(darkLocal23[0]),
        darkLocal35 = darkRoutine12(darkLocal23[1]),
        darkLocal36 = darkRoutine12(darkLocal23[2]);
      if (
        [darkLocal34, darkLocal35, darkLocal36].every(
          (item) => !Number.isNaN(item),
        )
      ) {
        let { r, g, b } = darkRoutine13(darkLocal34, darkLocal35, darkLocal36);
        return {
          r,
          g,
          b,
        };
      }
    }
    return null;
  }
  return null;
}
function darkRoutine11(input5) {
  if (input5.endsWith("%")) {
    let darkLocal41 = parseFloat(input5.slice(0, -1));
    return Number.isNaN(darkLocal41)
      ? null
      : Math.round((darkLocal41 / 100) * 255);
  }
  let darkLocal24 = parseFloat(input5);
  return Number.isNaN(darkLocal24)
    ? null
    : Math.max(0, Math.min(255, darkLocal24));
}
function darkRoutine12(input7) {
  if (input7.endsWith("%")) {
    let darkLocal45 = parseFloat(input7.slice(0, -1));
    return Number.isNaN(darkLocal45) ? 0 : darkLocal45 / 100;
  }
  let darkLocal29 = parseFloat(input7);
  return Number.isNaN(darkLocal29) ? 0 : darkLocal29 / 100;
}
function darkRoutine13(input2, input3, input4) {
  let darkLocal12 = (1 - Math.abs(2 * input4 - 1)) * input3,
    darkLocal13 = (input2 % 360) / 60,
    darkLocal14 = darkLocal12 * (1 - Math.abs((darkLocal13 % 2) - 1)),
    darkLocal15 = 0,
    darkLocal16 = 0,
    darkLocal17 = 0;
  darkLocal13 >= 0 && darkLocal13 < 1
    ? ([darkLocal15, darkLocal16, darkLocal17] = [darkLocal12, darkLocal14, 0])
    : darkLocal13 >= 1 && darkLocal13 < 2
      ? ([darkLocal15, darkLocal16, darkLocal17] = [
          darkLocal14,
          darkLocal12,
          0,
        ])
      : darkLocal13 >= 2 && darkLocal13 < 3
        ? ([darkLocal15, darkLocal16, darkLocal17] = [
            0,
            darkLocal12,
            darkLocal14,
          ])
        : darkLocal13 >= 3 && darkLocal13 < 4
          ? ([darkLocal15, darkLocal16, darkLocal17] = [
              0,
              darkLocal14,
              darkLocal12,
            ])
          : darkLocal13 >= 4 && darkLocal13 < 5
            ? ([darkLocal15, darkLocal16, darkLocal17] = [
                darkLocal14,
                0,
                darkLocal12,
              ])
            : darkLocal13 >= 5 &&
              darkLocal13 < 6 &&
              ([darkLocal15, darkLocal16, darkLocal17] = [
                darkLocal12,
                0,
                darkLocal14,
              ]);
  let darkLocal18 = input4 - darkLocal12 / 2;
  return {
    r: Math.round((darkLocal15 + darkLocal18) * 255),
    g: Math.round((darkLocal16 + darkLocal18) * 255),
    b: Math.round((darkLocal17 + darkLocal18) * 255),
  };
}
function darkRoutine14() {
  if (typeof window > "u") return null;
  try {
    let darkLocal21 = document.createElement("div");
    darkLocal21.style.display = "none";
    darkLocal21.style.backgroundColor = "var(--color-token-editor-background)";
    document.body.appendChild(darkLocal21);
    let darkLocal22 = getComputedStyle(darkLocal21).backgroundColor || "";
    return (darkLocal21.remove(), darkLocal22);
  } catch {
    return null;
  }
}
function darkRoutine15() {
  let darkLocal42 = darkRoutine14();
  if (!darkLocal42) return null;
  let darkLocal43 = darkRoutine10(darkLocal42);
  return darkLocal43
    ? darkRoutine9(darkLocal43.r, darkLocal43.g, darkLocal43.b) < 0.5
    : null;
}
