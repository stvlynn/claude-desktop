// Restored from ref/webview/assets/graphlib-ichArG6F.js
// Graphlib chunk restored from the Codex webview bundle.
import {
  reduceT as reduceC,
  reduceL,
  _reduceS,
  reduceX,
} from "./lodash-reduce";
import { baseForC } from "./lodash-base-for";
import { isEmptyT } from "./lodash-is-empty";
import { mergeG } from "./lodash-merge";
import { unionN, unionT as unionR, unionI } from "./lodash-union";
var Graphlib = class {
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
    this._defaultNodeLabelFn = mergeG(undefined);
    this._defaultEdgeLabelFn = mergeG(undefined);
    this._nodes = {};
    this._isCompound &&
      ((this._parent = {}), (this._children = {}), (this._children["\0"] = {}));
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
      baseForC(graphlibParam38) || (graphlibParam38 = mergeG(graphlibParam38)),
      (this._defaultNodeLabelFn = graphlibParam38),
      this
    );
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return reduceX(this._nodes);
  }
  sources() {
    var graphlibValue39 = this;
    return reduceC(this.nodes(), function (graphlibParam62) {
      return isEmptyT(graphlibValue39._in[graphlibParam62]);
    });
  }
  sinks() {
    var graphlibValue41 = this;
    return reduceC(this.nodes(), function (graphlibParam60) {
      return isEmptyT(graphlibValue41._out[graphlibParam60]);
    });
  }
  setNodes(graphlibParam20, graphlibParam21) {
    var graphlibValue24 = arguments,
      graphlibValue25 = this;
    return (
      reduceL(graphlibParam20, function (graphlibParam48) {
        graphlibValue24.length > 1
          ? graphlibValue25.setNode(graphlibParam48, graphlibParam21)
          : graphlibValue25.setNode(graphlibParam48);
      }),
      this
    );
  }
  setNode(graphlibParam4, graphlibParam5) {
    return Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam4)
      ? (arguments.length > 1 && (this._nodes[graphlibParam4] = graphlibParam5),
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
  node(graphlibParam63) {
    return this._nodes[graphlibParam63];
  }
  hasNode(graphlibParam43) {
    return Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam43);
  }
  removeNode(graphlibParam3) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, graphlibParam3)) {
      var graphlibValue15 = (graphlibParam53) =>
        this.removeEdge(this._edgeObjs[graphlibParam53]);
      delete this._nodes[graphlibParam3];
      this._isCompound &&
        (this._removeFromParentsChildList(graphlibParam3),
        delete this._parent[graphlibParam3],
        reduceL(this.children(graphlibParam3), (graphlibParam66) => {
          this.setParent(graphlibParam66);
        }),
        delete this._children[graphlibParam3]);
      reduceL(reduceX(this._in[graphlibParam3]), graphlibValue15);
      delete this._in[graphlibParam3];
      delete this._preds[graphlibParam3];
      reduceL(reduceX(this._out[graphlibParam3]), graphlibValue15);
      delete this._out[graphlibParam3];
      delete this._sucs[graphlibParam3];
      --this._nodeCount;
    }
    return this;
  }
  setParent(graphlibParam6, graphlibParam7) {
    if (!this._isCompound)
      throw Error("Cannot set parent in a non-compound graph");
    if (unionN(graphlibParam7)) graphlibParam7 = "\0";
    else {
      graphlibParam7 += "";
      for (
        var graphlibValue16 = graphlibParam7;
        !unionN(graphlibValue16);
        graphlibValue16 = this.parent(graphlibValue16)
      )
        if (graphlibValue16 === graphlibParam6)
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
      var graphlibValue42 = this._parent[graphlibParam42];
      if (graphlibValue42 !== "\0") return graphlibValue42;
    }
  }
  children(graphlibParam14) {
    if (
      (unionN(graphlibParam14) && (graphlibParam14 = "\0"), this._isCompound)
    ) {
      var graphlibValue20 = this._children[graphlibParam14];
      if (graphlibValue20) return reduceX(graphlibValue20);
    } else if (graphlibParam14 === "\0") return this.nodes();
    else if (this.hasNode(graphlibParam14)) return [];
  }
  predecessors(graphlibParam47) {
    var graphlibValue43 = this._preds[graphlibParam47];
    if (graphlibValue43) return reduceX(graphlibValue43);
  }
  successors(graphlibParam49) {
    var graphlibValue44 = this._sucs[graphlibParam49];
    if (graphlibValue44) return reduceX(graphlibValue44);
  }
  neighbors(graphlibParam40) {
    var graphlibValue40 = this.predecessors(graphlibParam40);
    if (graphlibValue40)
      return unionI(graphlibValue40, this.successors(graphlibParam40));
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
    var graphlibValue12 = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound,
    });
    graphlibValue12.setGraph(this.graph());
    var graphlibValue13 = this;
    reduceL(this._nodes, function (graphlibParam56, graphlibParam57) {
      graphlibParam2(graphlibParam57) &&
        graphlibValue12.setNode(graphlibParam57, graphlibParam56);
    });
    reduceL(this._edgeObjs, function (graphlibParam44) {
      graphlibValue12.hasNode(graphlibParam44.v) &&
        graphlibValue12.hasNode(graphlibParam44.w) &&
        graphlibValue12.setEdge(
          graphlibParam44,
          graphlibValue13.edge(graphlibParam44),
        );
    });
    var graphlibValue14 = {};
    function graphlibHelper6(graphlibParam30) {
      var graphlibValue34 = graphlibValue13.parent(graphlibParam30);
      return graphlibValue34 === undefined ||
        graphlibValue12.hasNode(graphlibValue34)
        ? ((graphlibValue14[graphlibParam30] = graphlibValue34),
          graphlibValue34)
        : graphlibValue34 in graphlibValue14
          ? graphlibValue14[graphlibValue34]
          : graphlibHelper6(graphlibValue34);
    }
    return (
      this._isCompound &&
        reduceL(graphlibValue12.nodes(), function (graphlibParam61) {
          graphlibValue12.setParent(
            graphlibParam61,
            graphlibHelper6(graphlibParam61),
          );
        }),
      graphlibValue12
    );
  }
  setDefaultEdgeLabel(graphlibParam39) {
    return (
      baseForC(graphlibParam39) || (graphlibParam39 = mergeG(graphlibParam39)),
      (this._defaultEdgeLabelFn = graphlibParam39),
      this
    );
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return unionR(this._edgeObjs);
  }
  setPath(graphlibParam18, graphlibParam19) {
    var graphlibValue22 = this,
      graphlibValue23 = arguments;
    return (
      _reduceS(graphlibParam18, function (graphlibParam45, graphlibParam46) {
        return (
          graphlibValue23.length > 1
            ? graphlibValue22.setEdge(
                graphlibParam45,
                graphlibParam46,
                graphlibParam19,
              )
            : graphlibValue22.setEdge(graphlibParam45, graphlibParam46),
          graphlibParam46
        );
      }),
      this
    );
  }
  setEdge() {
    var graphlibValue4,
      graphlibValue5,
      graphlibValue6,
      graphlibValue7,
      graphlibValue8 = false,
      graphlibValue9 = arguments[0];
    typeof graphlibValue9 == "object" && graphlibValue9 && "v" in graphlibValue9
      ? ((graphlibValue4 = graphlibValue9.v),
        (graphlibValue5 = graphlibValue9.w),
        (graphlibValue6 = graphlibValue9.name),
        arguments.length === 2 &&
          ((graphlibValue7 = arguments[1]), (graphlibValue8 = true)))
      : ((graphlibValue4 = graphlibValue9),
        (graphlibValue5 = arguments[1]),
        (graphlibValue6 = arguments[3]),
        arguments.length > 2 &&
          ((graphlibValue7 = arguments[2]), (graphlibValue8 = true)));
    graphlibValue4 = "" + graphlibValue4;
    graphlibValue5 = "" + graphlibValue5;
    unionN(graphlibValue6) || (graphlibValue6 = "" + graphlibValue6);
    var graphlibValue10 = graphlibHelper3(
      this._isDirected,
      graphlibValue4,
      graphlibValue5,
      graphlibValue6,
    );
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, graphlibValue10))
      return (
        graphlibValue8 && (this._edgeLabels[graphlibValue10] = graphlibValue7),
        this
      );
    if (!unionN(graphlibValue6) && !this._isMultigraph)
      throw Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(graphlibValue4);
    this.setNode(graphlibValue5);
    this._edgeLabels[graphlibValue10] = graphlibValue8
      ? graphlibValue7
      : this._defaultEdgeLabelFn(
          graphlibValue4,
          graphlibValue5,
          graphlibValue6,
        );
    var graphlibValue11 = graphlibHelper4(
      this._isDirected,
      graphlibValue4,
      graphlibValue5,
      graphlibValue6,
    );
    return (
      (graphlibValue4 = graphlibValue11.v),
      (graphlibValue5 = graphlibValue11.w),
      Object.freeze(graphlibValue11),
      (this._edgeObjs[graphlibValue10] = graphlibValue11),
      graphlibHelper1(this._preds[graphlibValue5], graphlibValue4),
      graphlibHelper1(this._sucs[graphlibValue4], graphlibValue5),
      (this._in[graphlibValue5][graphlibValue10] = graphlibValue11),
      (this._out[graphlibValue4][graphlibValue10] = graphlibValue11),
      this._edgeCount++,
      this
    );
  }
  edge(graphlibParam15, graphlibParam16, graphlibParam17) {
    var graphlibValue21 =
      arguments.length === 1
        ? graphlibHelper5(this._isDirected, arguments[0])
        : graphlibHelper3(
            this._isDirected,
            graphlibParam15,
            graphlibParam16,
            graphlibParam17,
          );
    return this._edgeLabels[graphlibValue21];
  }
  hasEdge(graphlibParam11, graphlibParam12, graphlibParam13) {
    var graphlibValue19 =
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
      graphlibValue19,
    );
  }
  removeEdge(graphlibParam8, graphlibParam9, graphlibParam10) {
    var graphlibValue17 =
        arguments.length === 1
          ? graphlibHelper5(this._isDirected, arguments[0])
          : graphlibHelper3(
              this._isDirected,
              graphlibParam8,
              graphlibParam9,
              graphlibParam10,
            ),
      graphlibValue18 = this._edgeObjs[graphlibValue17];
    return (
      graphlibValue18 &&
        ((graphlibParam8 = graphlibValue18.v),
        (graphlibParam9 = graphlibValue18.w),
        delete this._edgeLabels[graphlibValue17],
        delete this._edgeObjs[graphlibValue17],
        graphlibHelper2(this._preds[graphlibParam9], graphlibParam8),
        graphlibHelper2(this._sucs[graphlibParam8], graphlibParam9),
        delete this._in[graphlibParam9][graphlibValue17],
        delete this._out[graphlibParam8][graphlibValue17],
        this._edgeCount--),
      this
    );
  }
  inEdges(graphlibParam28, graphlibParam29) {
    var graphlibValue32 = this._in[graphlibParam28];
    if (graphlibValue32) {
      var graphlibValue33 = unionR(graphlibValue32);
      return graphlibParam29
        ? reduceC(graphlibValue33, function (graphlibParam64) {
            return graphlibParam64.v === graphlibParam29;
          })
        : graphlibValue33;
    }
  }
  outEdges(graphlibParam26, graphlibParam27) {
    var graphlibValue30 = this._out[graphlibParam26];
    if (graphlibValue30) {
      var graphlibValue31 = unionR(graphlibValue30);
      return graphlibParam27
        ? reduceC(graphlibValue31, function (graphlibParam65) {
            return graphlibParam65.w === graphlibParam27;
          })
        : graphlibValue31;
    }
  }
  nodeEdges(graphlibParam36, graphlibParam37) {
    var graphlibValue38 = this.inEdges(graphlibParam36, graphlibParam37);
    if (graphlibValue38)
      return graphlibValue38.concat(
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
  var graphlibValue35 = "" + graphlibParam32,
    graphlibValue36 = "" + graphlibParam33;
  if (!graphlibParam31 && graphlibValue35 > graphlibValue36) {
    var graphlibValue37 = graphlibValue35;
    graphlibValue35 = graphlibValue36;
    graphlibValue36 = graphlibValue37;
  }
  return (
    graphlibValue35 +
    "" +
    graphlibValue36 +
    "" +
    (unionN(graphlibParam34) ? "\0" : graphlibParam34)
  );
}
function graphlibHelper4(
  graphlibParam22,
  graphlibParam23,
  graphlibParam24,
  graphlibParam25,
) {
  var graphlibValue26 = "" + graphlibParam23,
    graphlibValue27 = "" + graphlibParam24;
  if (!graphlibParam22 && graphlibValue26 > graphlibValue27) {
    var graphlibValue28 = graphlibValue26;
    graphlibValue26 = graphlibValue27;
    graphlibValue27 = graphlibValue28;
  }
  var graphlibValue29 = {
    v: graphlibValue26,
    w: graphlibValue27,
  };
  return (
    graphlibParam25 && (graphlibValue29.name = graphlibParam25),
    graphlibValue29
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
function initGraphlibAltChunk(): void {}
export { Graphlib, initGraphlibAltChunk };
