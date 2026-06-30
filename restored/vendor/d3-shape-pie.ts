// Restored from ref/webview/assets/pie-ChHHloNp.js
// D3 pie generator restored from the Codex webview bundle.
import { pathN } from "./d3-path";
import { mathP } from "./d3-geo-math";
import { array } from "../utils/array";

type PieDatum = any;
type PieData = PieDatum[];
type PieValueAccessor = (
  datum: PieDatum,
  index: number,
  data: PieData,
) => number;
type PieAngleAccessor = (...args: any[]) => number;
type PieComparator<T> = (first: T, second: T) => number;
type PieArcDatum = {
  data: PieDatum;
  index: number;
  value: number;
  startAngle: number;
  endAngle: number;
  padAngle: number;
};
type PieGenerator = {
  (
    this: any,
    data: Iterable<PieDatum> | ArrayLike<PieDatum>,
    ...args: any[]
  ): PieArcDatum[];
  value(): PieValueAccessor;
  value(accessor: PieValueAccessor | number): PieGenerator;
  sortValues(): PieComparator<number> | null;
  sortValues(compare: PieComparator<number> | null): PieGenerator;
  sort(): PieComparator<PieDatum> | null;
  sort(compare: PieComparator<PieDatum> | null): PieGenerator;
  startAngle(): PieAngleAccessor;
  startAngle(accessor: PieAngleAccessor | number): PieGenerator;
  endAngle(): PieAngleAccessor;
  endAngle(accessor: PieAngleAccessor | number): PieGenerator;
  padAngle(): PieAngleAccessor;
  padAngle(accessor: PieAngleAccessor | number): PieGenerator;
};

function descendingValueComparator(firstValue: number, secondValue: number) {
  return secondValue < firstValue
    ? -1
    : secondValue > firstValue
      ? 1
      : secondValue >= firstValue
        ? 0
        : NaN;
}
function identityValueAccessor(datum: PieDatum) {
  return datum;
}
export function pie(): PieGenerator {
  var valueAccessor: PieValueAccessor = identityValueAccessor,
    sortValuesComparator: PieComparator<number> | null =
      descendingValueComparator,
    sortDataComparator: PieComparator<PieDatum> | null = null,
    startAngleAccessor: PieAngleAccessor = pathN(0),
    endAngleAccessor: PieAngleAccessor = pathN(mathP),
    padAngleAccessor: PieAngleAccessor = pathN(0);
  function generatePieArcs(
    this: any,
    dataInput: Iterable<PieDatum> | ArrayLike<PieDatum>,
  ): PieArcDatum[] {
    var scanIndex,
      data = array(dataInput) as PieData,
      dataLength = data.length,
      datumIndex,
      arcIndex,
      totalValue = 0,
      sortOrder = Array(dataLength),
      arcValues = Array(dataLength),
      arcs = Array(dataLength),
      startAngle = +startAngleAccessor.apply(this, arguments),
      angleSpan = Math.min(
        mathP,
        Math.max(-mathP, endAngleAccessor.apply(this, arguments) - startAngle),
      ),
      nextAngle,
      padAngle = Math.min(
        Math.abs(angleSpan) / dataLength,
        padAngleAccessor.apply(this, arguments),
      ),
      signedPadAngle = padAngle * (angleSpan < 0 ? -1 : 1),
      value;
    for (scanIndex = 0; scanIndex < dataLength; ++scanIndex)
      (value = arcValues[(sortOrder[scanIndex] = scanIndex)] =
        +valueAccessor(data[scanIndex], scanIndex, data)) > 0 &&
        (totalValue += value);
    for (
      sortValuesComparator == null
        ? sortDataComparator != null &&
          sortOrder.sort(function (firstIndex, secondIndex) {
            return sortDataComparator!(data[firstIndex], data[secondIndex]);
          })
        : sortOrder.sort(function (firstIndex, secondIndex) {
            return sortValuesComparator!(
              arcValues[firstIndex],
              arcValues[secondIndex],
            );
          }),
        scanIndex = 0,
        arcIndex = totalValue
          ? (angleSpan - dataLength * signedPadAngle) / totalValue
          : 0;
      scanIndex < dataLength;
      ++scanIndex, startAngle = nextAngle
    ) {
      datumIndex = sortOrder[scanIndex];
      value = arcValues[datumIndex];
      nextAngle =
        startAngle + (value > 0 ? value * arcIndex : 0) + signedPadAngle;
      arcs[datumIndex] = {
        data: data[datumIndex],
        index: scanIndex,
        value,
        startAngle,
        endAngle: nextAngle,
        padAngle,
      };
    }
    return arcs;
  }
  var pieGenerator = generatePieArcs as PieGenerator;
  return (
    (pieGenerator.value = function (accessor) {
      return arguments.length
        ? ((valueAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          pieGenerator)
        : valueAccessor;
    }),
    (pieGenerator.sortValues = function (compare) {
      return arguments.length
        ? ((sortValuesComparator = compare),
          (sortDataComparator = null),
          pieGenerator)
        : sortValuesComparator;
    }),
    (pieGenerator.sort = function (compare) {
      return arguments.length
        ? ((sortDataComparator = compare),
          (sortValuesComparator = null),
          pieGenerator)
        : sortDataComparator;
    }),
    (pieGenerator.startAngle = function (accessor) {
      return arguments.length
        ? ((startAngleAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          pieGenerator)
        : startAngleAccessor;
    }),
    (pieGenerator.endAngle = function (accessor) {
      return arguments.length
        ? ((endAngleAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          pieGenerator)
        : endAngleAccessor;
    }),
    (pieGenerator.padAngle = function (accessor) {
      return arguments.length
        ? ((padAngleAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          pieGenerator)
        : padAngleAccessor;
    }),
    pieGenerator
  );
}
