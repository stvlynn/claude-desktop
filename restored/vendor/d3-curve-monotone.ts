// Restored from ref/webview/assets/monotone-DKOUTWfZ.js
// d3-shape linear and monotone curve factories restored from the Codex webview bundle.
import type { Curve, CurveContext } from "./d3-shape-curve-context";
import { curveLinear } from "./d3-shape-curve-linear";
export { curveLinear } from "./d3-shape-curve-linear";

interface MonotoneState {
  _context: CurveContext;
  _x0: number;
  _x1: number;
  _y0: number;
  _y1: number;
  _t0: number;
}

function sign(value: number): -1 | 1 {
  return value < 0 ? -1 : 1;
}

function slope3(curve: MonotoneState, x: number, y: number): number {
  const h0 = curve._x1 - curve._x0;
  const h1 = x - curve._x1;
  const s0 = (curve._y1 - curve._y0) / (h0 || (h1 < 0 ? -0 : 0));
  const s1 = (y - curve._y1) / (h1 || (h0 < 0 ? -0 : 0));
  const p = (s0 * h1 + s1 * h0) / (h0 + h1);

  return (
    (sign(s0) + sign(s1)) *
      Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0
  );
}

function slope2(curve: MonotoneState, t: number): number {
  const h = curve._x1 - curve._x0;
  return h ? ((3 * (curve._y1 - curve._y0)) / h - t) / 2 : t;
}

function point(curve: MonotoneState, t0: number, t1: number): void {
  const x0 = curve._x0;
  const y0 = curve._y0;
  const x1 = curve._x1;
  const y1 = curve._y1;
  const dx = (x1 - x0) / 3;

  curve._context.bezierCurveTo(
    x0 + dx,
    y0 + dx * t0,
    x1 - dx,
    y1 - dx * t1,
    x1,
    y1,
  );
}

class MonotoneX implements Curve, MonotoneState {
  readonly _context: CurveContext;
  _x0 = NaN;
  _x1 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _t0 = NaN;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext) {
    this._context = context;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  }

  lineEnd(): void {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) {
      this._context.closePath();
    }
    this._line = 1 - this._line;
  }

  point(x: number, y: number): void {
    let t1 = NaN;
    x = +x;
    y = +y;

    if (x === this._x1 && y === this._y1) return;

    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, (t1 = slope3(this, x, y))), t1);
        break;
      default:
        point(this, this._t0, (t1 = slope3(this, x, y)));
        break;
    }

    this._x0 = this._x1;
    this._x1 = x;
    this._y0 = this._y1;
    this._y1 = y;
    this._t0 = t1;
  }
}

class MonotoneY extends MonotoneX {
  constructor(context: CurveContext) {
    super(new ReflectContext(context));
  }

  override point(x: number, y: number): void {
    super.point(y, x);
  }
}

class ReflectContext implements CurveContext {
  private readonly _context: CurveContext;

  constructor(context: CurveContext) {
    this._context = context;
  }

  moveTo(x: number, y: number): void {
    this._context.moveTo(y, x);
  }

  lineTo(x: number, y: number): void {
    this._context.lineTo(y, x);
  }

  closePath(): void {
    this._context.closePath();
  }

  bezierCurveTo(
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    x: number,
    y: number,
  ): void {
    this._context.bezierCurveTo(cy1, cx1, cy2, cx2, y, x);
  }
}

export function curveMonotoneX(context: CurveContext): Curve {
  return new MonotoneX(context);
}

export function curveMonotoneY(context: CurveContext): Curve {
  return new MonotoneY(context);
}

export const monotoneR = curveLinear;
export const monotoneT = curveMonotoneX;
export const monotoneN = curveMonotoneY;
