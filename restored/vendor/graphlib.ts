// Restored from ref/webview/assets/graphlib-DGNlaJmK.js
// Graphlib chunk restored from the Codex webview bundle.
import {
  isArrayLikeObjectE,
  isArrayLikeObjectP,
  isArrayLikeObjectR,
  _isArrayLikeObjectT,
} from "./lodash-array-like-object";
import {
  baseUniqC as _baseUniqS,
  baseUniqM,
  baseUniqI as baseUniqD,
  _baseUniqC,
  baseUniqJ,
  _baseUniqM,
  baseUniqC,
  baseUniqP,
} from "./lodash-base-uniq";
import { isEmptyT } from "./lodash-is-empty-alt";
var graphlibValue1 = isArrayLikeObjectE(function (graphlibParam60) {
    return baseUniqP(baseUniqC(graphlibParam60, 1, _isArrayLikeObjectT, true));
  }),
  Graphlib = class {
    constructor(graphlibParam1 = {}) {
      this._isDirected = Object.prototype.hasOwnProperty.call(
        graphlibParam1,
        "directed",
      )
        ? graphlibParam1.directed
        : true;
      this._isMultigraph = Object.prototype.hasOwnProperty.call(
        graphlibParam1,
        "multigraph",
      )
        ? graphlibParam1.multigraph
        : false;
      this._isCompound = Object.prototype.hasOwnProperty.call(
        graphlibParam1,
        "compound",
      )
        ? graphlibParam1.compound
        : false;
      this._label = undefined;
      this._defaultNodeLabelFn = isArrayLikeObjectP(undefined);
      this._defaultEdgeLabelFn = isArrayLikeObjectP(undefined);
      this._nodes = {};
      this._isCompound &&
        ((this._parent = {}),
        (this._children = {}),
        (this._children["\0"] = {}));
      this._in = {};
      this._preds = {};
      this._out = {};
      this._sucs = {};
      this._edgeObjs = {};
      this._edgeLabels = {};
    }
    isDirected() {
      return this._isDirected;
    }
    isMultigraph() {
      return this._isMultigraph;
    }
    isCompound() {
      return this._isCompound;
    }
    setGraph(graphlibParam52) {
      return ((this._label = graphlibParam52), this);
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(graphlibParam38) {
      return (
        isArrayLikeObjectR(graphlibParam38) ||
          (graphlibParam38 = isArrayLikeObjectP(graphlibParam38)),
        (this._defaultNodeLabelFn = graphlibParam38),
        this
      );
    }
    nodeCount() {
      return this._nodeCount;
    }
    nodes() {
      return baseUniqD(this._nodes);
    }
    sources() {
      var graphlibValue40 = this;
      return baseUniqM(this.nodes(), function (graphlibParam63) {
        return isEmptyT(graphlibValue40._in[graphlibParam63]);
      });
    }
    sinks() {
      var graphlibValue42 = this;
      return baseUniqM(this.nodes(), function (graphlibParam61) {
        return isEmptyT(graphlibValue42._out[graphlibParam61]);
      });
    }
    setNodes(graphlibParam20, graphlibParam21) {
      var graphlibValue25 = arguments,
        graphlibValue26 = this;
      return (
        _baseUniqS(graphlibParam20, function (graphlibParam48) {
          graphlibValue25.length > 1
            ? graphlibValue26.setNode(graphlibParam48, graphlibParam21)
            : graphlibValue26.setNode(graphlibParam48);
        }),
        this
      );
    }
    setNode(graphlibParam4, graphlibParam5) {
      return Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam4)
        ? (arguments.length > 1 &&
            (this._nodes[graphlibParam4] = graphlibParam5),
          this)
        : ((this._nodes[graphlibParam4] =
            arguments.length > 1
              ? graphlibParam5
              : this._defaultNodeLabelFn(graphlibParam4)),
          this._isCompound &&
            ((this._parent[graphlibParam4] = "\0"),
            (this._children[graphlibParam4] = {}),
            (this._children["\0"][graphlibParam4] = true)),
          (this._in[graphlibParam4] = {}),
          (this._preds[graphlibParam4] = {}),
          (this._out[graphlibParam4] = {}),
          (this._sucs[graphlibParam4] = {}),
          ++this._nodeCount,
          this);
    }
    node(graphlibParam64) {
      return this._nodes[graphlibParam64];
    }
    hasNode(graphlibParam43) {
      return Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam43);
    }
    removeNode(graphlibParam3) {
      if (Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam3)) {
        var graphlibValue16 = (graphlibParam53) =>
          this.removeEdge(this._edgeObjs[graphlibParam53]);
        delete this._nodes[graphlibParam3];
        this._isCompound &&
          (this._removeFromParentsChildList(graphlibParam3),
          delete this._parent[graphlibParam3],
          _baseUniqS(this.children(graphlibParam3), (graphlibParam67) => {
            this.setParent(graphlibParam67);
          }),
          delete this._children[graphlibParam3]);
        _baseUniqS(baseUniqD(this._in[graphlibParam3]), graphlibValue16);
        delete this._in[graphlibParam3];
        delete this._preds[graphlibParam3];
        _baseUniqS(baseUniqD(this._out[graphlibParam3]), graphlibValue16);
        delete this._out[graphlibParam3];
        delete this._sucs[graphlibParam3];
        --this._nodeCount;
      }
      return this;
    }
    setParent(graphlibParam6, graphlibParam7) {
      if (!this._isCompound)
        throw Error("Cannot set parent in a non-compound graph");
      if (_baseUniqM(graphlibParam7)) graphlibParam7 = "\0";
      else {
        graphlibParam7 += "";
        for (
          var graphlibValue17 = graphlibParam7;
          !_baseUniqM(graphlibValue17);
          graphlibValue17 = this.parent(graphlibValue17)
        )
          if (graphlibValue17 === graphlibParam6)
            throw Error(
              "Setting " +
                graphlibParam7 +
                " as parent of " +
                graphlibParam6 +
                " would create a cycle",
            );
        this.setNode(graphlibParam7);
      }
      return (
        this.setNode(graphlibParam6),
        this._removeFromParentsChildList(graphlibParam6),
        (this._parent[graphlibParam6] = graphlibParam7),
        (this._children[graphlibParam7][graphlibParam6] = true),
        this
      );
    }
    _removeFromParentsChildList(graphlibParam41) {
      delete this._children[this._parent[graphlibParam41]][graphlibParam41];
    }
    parent(graphlibParam42) {
      if (this._isCompound) {
        var graphlibValue43 = this._parent[graphlibParam42];
        if (graphlibValue43 !== "\0") return graphlibValue43;
      }
    }
    children(graphlibParam14) {
      if (
        (_baseUniqM(graphlibParam14) && (graphlibParam14 = "\0"),
        this._isCompound)
      ) {
        var graphlibValue21 = this._children[graphlibParam14];
        if (graphlibValue21) return baseUniqD(graphlibValue21);
      } else if (graphlibParam14 === "\0") return this.nodes();
      else if (this.hasNode(graphlibParam14)) return [];
    }
    predecessors(graphlibParam47) {
      var graphlibValue44 = this._preds[graphlibParam47];
      if (graphlibValue44) return baseUniqD(graphlibValue44);
    }
    successors(graphlibParam49) {
      var graphlibValue45 = this._sucs[graphlibParam49];
      if (graphlibValue45) return baseUniqD(graphlibValue45);
    }
    neighbors(graphlibParam40) {
      var graphlibValue41 = this.predecessors(graphlibParam40);
      if (graphlibValue41)
        return graphlibValue1(
          graphlibValue41,
          this.successors(graphlibParam40),
        );
    }
    isLeaf(graphlibParam35) {
      return (
        (this.isDirected()
          ? this.successors(graphlibParam35)
          : this.neighbors(graphlibParam35)
        ).length === 0
      );
    }
    filterNodes(graphlibParam2) {
      var graphlibValue13 = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound,
      });
      graphlibValue13.setGraph(this.graph());
      var graphlibValue14 = this;
      _baseUniqS(this._nodes, function (graphlibParam56, graphlibParam57) {
        graphlibParam2(graphlibParam57) &&
          graphlibValue13.setNode(graphlibParam57, graphlibParam56);
      });
      _baseUniqS(this._edgeObjs, function (graphlibParam44) {
        graphlibValue13.hasNode(graphlibParam44.v) &&
          graphlibValue13.hasNode(graphlibParam44.w) &&
          graphlibValue13.setEdge(
            graphlibParam44,
            graphlibValue14.edge(graphlibParam44),
          );
      });
      var graphlibValue15 = {};
      function graphlibHelper6(graphlibParam30) {
        var graphlibValue35 = graphlibValue14.parent(graphlibParam30);
        return graphlibValue35 === undefined ||
          graphlibValue13.hasNode(graphlibValue35)
          ? ((graphlibValue15[graphlibParam30] = graphlibValue35),
            graphlibValue35)
          : graphlibValue35 in graphlibValue15
            ? graphlibValue15[graphlibValue35]
            : graphlibHelper6(graphlibValue35);
      }
      return (
        this._isCompound &&
          _baseUniqS(graphlibValue13.nodes(), function (graphlibParam62) {
            graphlibValue13.setParent(
              graphlibParam62,
              graphlibHelper6(graphlibParam62),
            );
          }),
        graphlibValue13
      );
    }
    setDefaultEdgeLabel(graphlibParam39) {
      return (
        isArrayLikeObjectR(graphlibParam39) ||
          (graphlibParam39 = isArrayLikeObjectP(graphlibParam39)),
        (this._defaultEdgeLabelFn = graphlibParam39),
        this
      );
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return _baseUniqC(this._edgeObjs);
    }
    setPath(graphlibParam18, graphlibParam19) {
      var graphlibValue23 = this,
        graphlibValue24 = arguments;
      return (
        baseUniqJ(graphlibParam18, function (graphlibParam45, graphlibParam46) {
          return (
            graphlibValue24.length > 1
              ? graphlibValue23.setEdge(
                  graphlibParam45,
                  graphlibParam46,
                  graphlibParam19,
                )
              : graphlibValue23.setEdge(graphlibParam45, graphlibParam46),
            graphlibParam46
          );
        }),
        this
      );
    }
    setEdge() {
      var graphlibValue5,
        graphlibValue6,
        graphlibValue7,
        graphlibValue8,
        graphlibValue9 = false,
        graphlibValue10 = arguments[0];
      typeof graphlibValue10 == "object" &&
      graphlibValue10 &&
      "v" in graphlibValue10
        ? ((graphlibValue5 = graphlibValue10.v),
          (graphlibValue6 = graphlibValue10.w),
          (graphlibValue7 = graphlibValue10.name),
          arguments.length === 2 &&
            ((graphlibValue8 = arguments[1]), (graphlibValue9 = true)))
        : ((graphlibValue5 = graphlibValue10),
          (graphlibValue6 = arguments[1]),
          (graphlibValue7 = arguments[3]),
          arguments.length > 2 &&
            ((graphlibValue8 = arguments[2]), (graphlibValue9 = true)));
      graphlibValue5 = "" + graphlibValue5;
      graphlibValue6 = "" + graphlibValue6;
      _baseUniqM(graphlibValue7) || (graphlibValue7 = "" + graphlibValue7);
      var graphlibValue11 = graphlibHelper3(
        this._isDirected,
        graphlibValue5,
        graphlibValue6,
        graphlibValue7,
      );
      if (
        Object.prototype.hasOwnProperty.call(this._edgeLabels, graphlibValue11)
      )
        return (
          graphlibValue9 &&
            (this._edgeLabels[graphlibValue11] = graphlibValue8),
          this
        );
      if (!_baseUniqM(graphlibValue7) && !this._isMultigraph)
        throw Error("Cannot set a named edge when isMultigraph = false");
      this.setNode(graphlibValue5);
      this.setNode(graphlibValue6);
      this._edgeLabels[graphlibValue11] = graphlibValue9
        ? graphlibValue8
        : this._defaultEdgeLabelFn(
            graphlibValue5,
            graphlibValue6,
            graphlibValue7,
          );
      var graphlibValue12 = graphlibHelper4(
        this._isDirected,
        graphlibValue5,
        graphlibValue6,
        graphlibValue7,
      );
      return (
        (graphlibValue5 = graphlibValue12.v),
        (graphlibValue6 = graphlibValue12.w),
        Object.freeze(graphlibValue12),
        (this._edgeObjs[graphlibValue11] = graphlibValue12),
        graphlibHelper1(this._preds[graphlibValue6], graphlibValue5),
        graphlibHelper1(this._sucs[graphlibValue5], graphlibValue6),
        (this._in[graphlibValue6][graphlibValue11] = graphlibValue12),
        (this._out[graphlibValue5][graphlibValue11] = graphlibValue12),
        this._edgeCount++,
        this
      );
    }
    edge(graphlibParam15, graphlibParam16, graphlibParam17) {
      var graphlibValue22 =
        arguments.length === 1
          ? graphlibHelper5(this._isDirected, arguments[0])
          : graphlibHelper3(
              this._isDirected,
              graphlibParam15,
              graphlibParam16,
              graphlibParam17,
            );
      return this._edgeLabels[graphlibValue22];
    }
    hasEdge(graphlibParam11, graphlibParam12, graphlibParam13) {
      var graphlibValue20 =
        arguments.length === 1
          ? graphlibHelper5(this._isDirected, arguments[0])
          : graphlibHelper3(
              this._isDirected,
              graphlibParam11,
              graphlibParam12,
              graphlibParam13,
            );
      return Object.prototype.hasOwnProperty.call(
        this._edgeLabels,
        graphlibValue20,
      );
    }
    removeEdge(graphlibParam8, graphlibParam9, graphlibParam10) {
      var graphlibValue18 =
          arguments.length === 1
            ? graphlibHelper5(this._isDirected, arguments[0])
            : graphlibHelper3(
                this._isDirected,
                graphlibParam8,
                graphlibParam9,
                graphlibParam10,
              ),
        graphlibValue19 = this._edgeObjs[graphlibValue18];
      return (
        graphlibValue19 &&
          ((graphlibParam8 = graphlibValue19.v),
          (graphlibParam9 = graphlibValue19.w),
          delete this._edgeLabels[graphlibValue18],
          delete this._edgeObjs[graphlibValue18],
          graphlibHelper2(this._preds[graphlibParam9], graphlibParam8),
          graphlibHelper2(this._sucs[graphlibParam8], graphlibParam9),
          delete this._in[graphlibParam9][graphlibValue18],
          delete this._out[graphlibParam8][graphlibValue18],
          this._edgeCount--),
        this
      );
    }
    inEdges(graphlibParam28, graphlibParam29) {
      var graphlibValue33 = this._in[graphlibParam28];
      if (graphlibValue33) {
        var graphlibValue34 = _baseUniqC(graphlibValue33);
        return graphlibParam29
          ? baseUniqM(graphlibValue34, function (graphlibParam65) {
              return graphlibParam65.v === graphlibParam29;
            })
          : graphlibValue34;
      }
    }
    outEdges(graphlibParam26, graphlibParam27) {
      var graphlibValue31 = this._out[graphlibParam26];
      if (graphlibValue31) {
        var graphlibValue32 = _baseUniqC(graphlibValue31);
        return graphlibParam27
          ? baseUniqM(graphlibValue32, function (graphlibParam66) {
              return graphlibParam66.w === graphlibParam27;
            })
          : graphlibValue32;
      }
    }
    nodeEdges(graphlibParam36, graphlibParam37) {
      var graphlibValue39 = this.inEdges(graphlibParam36, graphlibParam37);
      if (graphlibValue39)
        return graphlibValue39.concat(
          this.outEdges(graphlibParam36, graphlibParam37),
        );
    }
  };
Graphlib.prototype._nodeCount = 0;
Graphlib.prototype._edgeCount = 0;
function graphlibHelper1(graphlibParam58, graphlibParam59) {
  graphlibParam58[graphlibParam59]
    ? graphlibParam58[graphlibParam59]++
    : (graphlibParam58[graphlibParam59] = 1);
}
function graphlibHelper2(graphlibParam54, graphlibParam55) {
  --graphlibParam54[graphlibParam55] || delete graphlibParam54[graphlibParam55];
}
function graphlibHelper3(
  graphlibParam31,
  graphlibParam32,
  graphlibParam33,
  graphlibParam34,
) {
  var graphlibValue36 = "" + graphlibParam32,
    graphlibValue37 = "" + graphlibParam33;
  if (!graphlibParam31 && graphlibValue36 > graphlibValue37) {
    var graphlibValue38 = graphlibValue36;
    graphlibValue36 = graphlibValue37;
    graphlibValue37 = graphlibValue38;
  }
  return (
    graphlibValue36 +
    "" +
    graphlibValue37 +
    "" +
    (_baseUniqM(graphlibParam34) ? "\0" : graphlibParam34)
  );
}
function graphlibHelper4(
  graphlibParam22,
  graphlibParam23,
  graphlibParam24,
  graphlibParam25,
) {
  var graphlibValue27 = "" + graphlibParam23,
    graphlibValue28 = "" + graphlibParam24;
  if (!graphlibParam22 && graphlibValue27 > graphlibValue28) {
    var graphlibValue29 = graphlibValue27;
    graphlibValue27 = graphlibValue28;
    graphlibValue28 = graphlibValue29;
  }
  var graphlibValue30 = {
    v: graphlibValue27,
    w: graphlibValue28,
  };
  return (
    graphlibParam25 && (graphlibValue30.name = graphlibParam25),
    graphlibValue30
  );
}
function graphlibHelper5(graphlibParam50, graphlibParam51) {
  return graphlibHelper3(
    graphlibParam50,
    graphlibParam51.v,
    graphlibParam51.w,
    graphlibParam51.name,
  );
}
export { Graphlib };
