// Restored from ref/webview/assets/line-DIsP-Yv_.js
// Line chunk restored from the Codex webview bundle.
import { pathN, pathT } from "./d3-path";
import { array } from "../utils/array";
import { monotoneR } from "./d3-curve-monotone";
function lineHelper1(lineParam8) {
  return lineParam8[0];
}
function lineHelper2(lineParam9) {
  return lineParam9[1];
}
export function line(_line, lineParam1) {
  var lineValue1 = pathN(true),
    lineValue2 = null,
    lineValue3 = monotoneR,
    lineValue4 = null,
    lineValue5 = pathT(lineHelper3);
  _line =
    typeof _line == "function"
      ? _line
      : _line === undefined
        ? lineHelper1
        : pathN(_line);
  lineParam1 =
    typeof lineParam1 == "function"
      ? lineParam1
      : lineParam1 === undefined
        ? lineHelper2
        : pathN(lineParam1);
  function lineHelper3(lineParam2) {
    var lineValue6,
      lineValue7 = (lineParam2 = array(lineParam2)).length,
      lineValue8,
      lineValue9 = false,
      lineValue10;
    for (
      lineValue2 ?? (lineValue4 = lineValue3((lineValue10 = lineValue5()))),
        lineValue6 = 0;
      lineValue6 <= lineValue7;
      ++lineValue6
    ) {
      !(
        lineValue6 < lineValue7 &&
        lineValue1(
          (lineValue8 = lineParam2[lineValue6]),
          lineValue6,
          lineParam2,
        )
      ) === lineValue9 &&
        ((lineValue9 = !lineValue9)
          ? lineValue4.lineStart()
          : lineValue4.lineEnd());
      lineValue9 &&
        lineValue4.point(
          +_line(lineValue8, lineValue6, lineParam2),
          +lineParam1(lineValue8, lineValue6, lineParam2),
        );
    }
    if (lineValue10) return ((lineValue4 = null), lineValue10 + "" || null);
  }
  return (
    (lineHelper3.x = function (lineParam4) {
      return arguments.length
        ? ((_line =
            typeof lineParam4 == "function" ? lineParam4 : pathN(+lineParam4)),
          lineHelper3)
        : _line;
    }),
    (lineHelper3.y = function (lineParam5) {
      return arguments.length
        ? ((lineParam1 =
            typeof lineParam5 == "function" ? lineParam5 : pathN(+lineParam5)),
          lineHelper3)
        : lineParam1;
    }),
    (lineHelper3.defined = function (lineParam3) {
      return arguments.length
        ? ((lineValue1 =
            typeof lineParam3 == "function" ? lineParam3 : pathN(!!lineParam3)),
          lineHelper3)
        : lineValue1;
    }),
    (lineHelper3.curve = function (lineParam7) {
      return arguments.length
        ? ((lineValue3 = lineParam7),
          lineValue2 != null && (lineValue4 = lineValue3(lineValue2)),
          lineHelper3)
        : lineValue3;
    }),
    (lineHelper3.context = function (lineParam6) {
      return arguments.length
        ? (lineParam6 == null
            ? (lineValue2 = lineValue4 = null)
            : (lineValue4 = lineValue3((lineValue2 = lineParam6))),
          lineHelper3)
        : lineValue2;
    }),
    lineHelper3
  );
}
