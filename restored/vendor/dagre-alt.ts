// Restored from ref/webview/assets/dagre-Ba2O9HBx.js
// Dagre chunk restored from the Codex webview bundle.
import { reduceT as reduceC, reduceL, _reduceS } from "./lodash-reduce";
import { baseForG } from "./lodash-base-for";
import { flattenA, flattenT as flattenN, flattenR } from "./lodash-flatten";
import {
  zipObjectH as zipObjectA,
  zipObjectG as zipObjectC,
  zipObjectM as zipObjectD,
  zipObjectP as zipObjectF,
  zipObjectF as zipObjectG,
  zipObjectD as zipObjectH,
  zipObjectU as zipObjectI,
  zipObjectL,
  zipObjectC as zipObjectM,
  zipObjectS as zipObjectN,
  zipObjectO,
  zipObjectA as zipObjectP,
  zipObjectI as zipObjectR,
  zipObjectR as zipObjectS,
  zipObjectN as zipObjectT,
  zipObjectT as zipObjectU,
  zipObjectUnderscore,
} from "./lodash-zip-object";
import { mergeG, mergeT } from "./lodash-merge";
import { unionN, unionT } from "./lodash-union";
import { Graphlib } from "./graphlib-alt";
var dagreValue1 = class {
  constructor() {
    var dagreValue361 = {};
    dagreValue361._next = dagreValue361._prev = dagreValue361;
    this._sentinel = dagreValue361;
  }
  dequeue() {
    var dagreValue356 = this._sentinel,
      dagreValue357 = dagreValue356._prev;
    if (dagreValue357 !== dagreValue356)
      return (dagreHelper1(dagreValue357), dagreValue357);
  }
  enqueue(dagreParam223) {
    var dagreValue303 = this._sentinel;
    dagreParam223._prev && dagreParam223._next && dagreHelper1(dagreParam223);
    dagreParam223._next = dagreValue303._next;
    dagreValue303._next._prev = dagreParam223;
    dagreValue303._next = dagreParam223;
    dagreParam223._prev = dagreValue303;
  }
  toString() {
    for (
      var dagreValue304 = [],
        dagreValue305 = this._sentinel,
        dagreValue306 = dagreValue305._prev;
      dagreValue306 !== dagreValue305;

    ) {
      dagreValue304.push(JSON.stringify(dagreValue306, dagreHelper2));
      dagreValue306 = dagreValue306._prev;
    }
    return "[" + dagreValue304.join(", ") + "]";
  }
};
function dagreHelper1(dagreParam284) {
  dagreParam284._prev._next = dagreParam284._next;
  dagreParam284._next._prev = dagreParam284._prev;
  delete dagreParam284._next;
  delete dagreParam284._prev;
}
function dagreHelper2(dagreParam346, dagreParam347) {
  if (dagreParam346 !== "_next" && dagreParam346 !== "_prev")
    return dagreParam347;
}
var dagreValue2 = mergeG(1);
function dagreHelper3(dagreParam206, dagreParam207) {
  if (dagreParam206.nodeCount() <= 1) return [];
  var dagreValue286 = dagreHelper6(dagreParam206, dagreParam207 || dagreValue2);
  return flattenR(
    flattenA(
      dagreHelper4(
        dagreValue286.graph,
        dagreValue286.buckets,
        dagreValue286.zeroIdx,
      ),
      function (dagreParam363) {
        return dagreParam206.outEdges(dagreParam363.v, dagreParam363.w);
      },
    ),
  );
}
function dagreHelper4(dagreParam99, dagreParam100, dagreParam101) {
  for (
    var dagreValue155 = [],
      dagreValue156 = dagreParam100[dagreParam100.length - 1],
      dagreValue157 = dagreParam100[0],
      dagreValue158;
    dagreParam99.nodeCount();

  ) {
    for (; (dagreValue158 = dagreValue157.dequeue()); )
      dagreHelper5(dagreParam99, dagreParam100, dagreParam101, dagreValue158);
    for (; (dagreValue158 = dagreValue156.dequeue()); )
      dagreHelper5(dagreParam99, dagreParam100, dagreParam101, dagreValue158);
    if (dagreParam99.nodeCount()) {
      for (
        var dagreValue159 = dagreParam100.length - 2;
        dagreValue159 > 0;
        --dagreValue159
      )
        if (
          ((dagreValue158 = dagreParam100[dagreValue159].dequeue()),
          dagreValue158)
        ) {
          dagreValue155 = dagreValue155.concat(
            dagreHelper5(
              dagreParam99,
              dagreParam100,
              dagreParam101,
              dagreValue158,
              true,
            ),
          );
          break;
        }
    }
  }
  return dagreValue155;
}
function dagreHelper5(
  dagreParam85,
  dagreParam86,
  dagreParam87,
  dagreParam88,
  dagreParam89,
) {
  var dagreValue143 = dagreParam89 ? [] : undefined;
  return (
    reduceL(dagreParam85.inEdges(dagreParam88.v), function (dagreParam257) {
      var dagreValue328 = dagreParam85.edge(dagreParam257),
        dagreValue329 = dagreParam85.node(dagreParam257.v);
      dagreParam89 &&
        dagreValue143.push({
          v: dagreParam257.v,
          w: dagreParam257.w,
        });
      dagreValue329.out -= dagreValue328;
      dagreHelper7(dagreParam86, dagreParam87, dagreValue329);
    }),
    reduceL(dagreParam85.outEdges(dagreParam88.v), function (dagreParam285) {
      var dagreValue341 = dagreParam85.edge(dagreParam285),
        dagreValue342 = dagreParam285.w,
        dagreValue343 = dagreParam85.node(dagreValue342);
      dagreValue343.in -= dagreValue341;
      dagreHelper7(dagreParam86, dagreParam87, dagreValue343);
    }),
    dagreParam85.removeNode(dagreParam88.v),
    dagreValue143
  );
}
function dagreHelper6(dagreParam44, dagreParam45) {
  var dagreValue68 = new Graphlib(),
    dagreValue69 = 0,
    dagreValue70 = 0;
  reduceL(dagreParam44.nodes(), function (dagreParam355) {
    dagreValue68.setNode(dagreParam355, {
      v: dagreParam355,
      in: 0,
      out: 0,
    });
  });
  reduceL(dagreParam44.edges(), function (dagreParam175) {
    var dagreValue261 =
        dagreValue68.edge(dagreParam175.v, dagreParam175.w) || 0,
      dagreValue262 = dagreParam45(dagreParam175),
      dagreValue263 = dagreValue261 + dagreValue262;
    dagreValue68.setEdge(dagreParam175.v, dagreParam175.w, dagreValue263);
    dagreValue70 = Math.max(
      dagreValue70,
      (dagreValue68.node(dagreParam175.v).out += dagreValue262),
    );
    dagreValue69 = Math.max(
      dagreValue69,
      (dagreValue68.node(dagreParam175.w).in += dagreValue262),
    );
  });
  var dagreValue71 = zipObjectA(dagreValue70 + dagreValue69 + 3).map(
      function () {
        return new dagreValue1();
      },
    ),
    dagreValue72 = dagreValue69 + 1;
  return (
    reduceL(dagreValue68.nodes(), function (dagreParam401) {
      dagreHelper7(
        dagreValue71,
        dagreValue72,
        dagreValue68.node(dagreParam401),
      );
    }),
    {
      graph: dagreValue68,
      buckets: dagreValue71,
      zeroIdx: dagreValue72,
    }
  );
}
function dagreHelper7(dagreParam254, dagreParam255, dagreParam256) {
  dagreParam256.out
    ? dagreParam256.in
      ? dagreParam254[
          dagreParam256.out - dagreParam256.in + dagreParam255
        ].enqueue(dagreParam256)
      : dagreParam254[dagreParam254.length - 1].enqueue(dagreParam256)
    : dagreParam254[0].enqueue(dagreParam256);
}
function dagreHelper8(dagreParam125) {
  reduceL(
    dagreParam125.graph().acyclicer === "greedy"
      ? dagreHelper3(dagreParam125, dagreHelper131(dagreParam125))
      : dagreHelper9(dagreParam125),
    function (dagreParam236) {
      var dagreValue317 = dagreParam125.edge(dagreParam236);
      dagreParam125.removeEdge(dagreParam236);
      dagreValue317.forwardName = dagreParam236.name;
      dagreValue317.reversed = true;
      dagreParam125.setEdge(
        dagreParam236.w,
        dagreParam236.v,
        dagreValue317,
        zipObjectN("rev"),
      );
    },
  );
  function dagreHelper131(dagreParam328) {
    return function (dagreParam374) {
      return dagreParam328.edge(dagreParam374).weight;
    };
  }
}
function dagreHelper9(dagreParam116) {
  var dagreValue187 = [],
    dagreValue188 = {},
    dagreValue189 = {};
  function dagreHelper130(dagreParam164) {
    Object.prototype.hasOwnProperty.call(dagreValue189, dagreParam164) ||
      ((dagreValue189[dagreParam164] = true),
      (dagreValue188[dagreParam164] = true),
      reduceL(dagreParam116.outEdges(dagreParam164), function (dagreParam310) {
        Object.prototype.hasOwnProperty.call(dagreValue188, dagreParam310.w)
          ? dagreValue187.push(dagreParam310)
          : dagreHelper130(dagreParam310.w);
      }),
      delete dagreValue188[dagreParam164]);
  }
  return (reduceL(dagreParam116.nodes(), dagreHelper130), dagreValue187);
}
function dagreHelper10(dagreParam172) {
  reduceL(dagreParam172.edges(), function (dagreParam210) {
    var dagreValue288 = dagreParam172.edge(dagreParam210);
    if (dagreValue288.reversed) {
      dagreParam172.removeEdge(dagreParam210);
      var dagreValue289 = dagreValue288.forwardName;
      delete dagreValue288.reversed;
      delete dagreValue288.forwardName;
      dagreParam172.setEdge(
        dagreParam210.w,
        dagreParam210.v,
        dagreValue288,
        dagreValue289,
      );
    }
  });
}
function dagreHelper11(
  dagreParam280,
  dagreParam281,
  dagreParam282,
  dagreParam283,
) {
  var dagreValue340;
  do dagreValue340 = zipObjectN(dagreParam283);
  while (dagreParam280.hasNode(dagreValue340));
  return (
    (dagreParam282.dummy = dagreParam281),
    dagreParam280.setNode(dagreValue340, dagreParam282),
    dagreValue340
  );
}
function dagreHelper12(dagreParam98) {
  var dagreValue154 = new Graphlib().setGraph(dagreParam98.graph());
  return (
    reduceL(dagreParam98.nodes(), function (dagreParam375) {
      dagreValue154.setNode(dagreParam375, dagreParam98.node(dagreParam375));
    }),
    reduceL(dagreParam98.edges(), function (dagreParam178) {
      var dagreValue266 = dagreValue154.edge(
          dagreParam178.v,
          dagreParam178.w,
        ) || {
          weight: 0,
          minlen: 1,
        },
        dagreValue267 = dagreParam98.edge(dagreParam178);
      dagreValue154.setEdge(dagreParam178.v, dagreParam178.w, {
        weight: dagreValue266.weight + dagreValue267.weight,
        minlen: Math.max(dagreValue266.minlen, dagreValue267.minlen),
      });
    }),
    dagreValue154
  );
}
function dagreHelper13(dagreParam151) {
  var dagreValue233 = new Graphlib({
    multigraph: dagreParam151.isMultigraph(),
  }).setGraph(dagreParam151.graph());
  return (
    reduceL(dagreParam151.nodes(), function (dagreParam341) {
      dagreParam151.children(dagreParam341).length ||
        dagreValue233.setNode(dagreParam341, dagreParam151.node(dagreParam341));
    }),
    reduceL(dagreParam151.edges(), function (dagreParam376) {
      dagreValue233.setEdge(dagreParam376, dagreParam151.edge(dagreParam376));
    }),
    dagreValue233
  );
}
function dagreHelper14(dagreParam78, dagreParam79) {
  var dagreValue128 = dagreParam78.x,
    dagreValue129 = dagreParam78.y,
    dagreValue130 = dagreParam79.x - dagreValue128,
    dagreValue131 = dagreParam79.y - dagreValue129,
    dagreValue132 = dagreParam78.width / 2,
    dagreValue133 = dagreParam78.height / 2;
  if (!dagreValue130 && !dagreValue131)
    throw Error("Not possible to find intersection inside of the rectangle");
  var dagreValue134, dagreValue135;
  return (
    Math.abs(dagreValue131) * dagreValue132 >
    Math.abs(dagreValue130) * dagreValue133
      ? (dagreValue131 < 0 && (dagreValue133 = -dagreValue133),
        (dagreValue134 = (dagreValue133 * dagreValue130) / dagreValue131),
        (dagreValue135 = dagreValue133))
      : (dagreValue130 < 0 && (dagreValue132 = -dagreValue132),
        (dagreValue134 = dagreValue132),
        (dagreValue135 = (dagreValue132 * dagreValue131) / dagreValue130)),
    {
      x: dagreValue128 + dagreValue134,
      y: dagreValue129 + dagreValue135,
    }
  );
}
function dagreHelper15(dagreParam181) {
  var dagreValue269 = flattenA(
    zipObjectA(dagreHelper19(dagreParam181) + 1),
    function () {
      return [];
    },
  );
  return (
    reduceL(dagreParam181.nodes(), function (dagreParam306) {
      var dagreValue352 = dagreParam181.node(dagreParam306),
        dagreValue353 = dagreValue352.rank;
      unionN(dagreValue353) ||
        (dagreValue269[dagreValue353][dagreValue352.order] = dagreParam306);
    }),
    dagreValue269
  );
}
function dagreHelper16(dagreParam208) {
  var dagreValue287 = flattenN(
    flattenA(dagreParam208.nodes(), function (dagreParam388) {
      return dagreParam208.node(dagreParam388).rank;
    }),
  );
  reduceL(dagreParam208.nodes(), function (dagreParam335) {
    var dagreValue364 = dagreParam208.node(dagreParam335);
    zipObjectU(dagreValue364, "rank") && (dagreValue364.rank -= dagreValue287);
  });
}
function dagreHelper17(dagreParam76) {
  var dagreValue121 = flattenN(
      flattenA(dagreParam76.nodes(), function (dagreParam366) {
        return dagreParam76.node(dagreParam366).rank;
      }),
    ),
    dagreValue122 = [];
  reduceL(dagreParam76.nodes(), function (dagreParam316) {
    var dagreValue359 = dagreParam76.node(dagreParam316).rank - dagreValue121;
    dagreValue122[dagreValue359] || (dagreValue122[dagreValue359] = []);
    dagreValue122[dagreValue359].push(dagreParam316);
  });
  var dagreValue123 = 0,
    dagreValue124 = dagreParam76.graph().nodeRankFactor;
  reduceL(dagreValue122, function (dagreParam251, dagreParam252) {
    unionN(dagreParam251) && dagreParam252 % dagreValue124 !== 0
      ? --dagreValue123
      : dagreValue123 &&
        reduceL(dagreParam251, function (dagreParam364) {
          dagreParam76.node(dagreParam364).rank += dagreValue123;
        });
  });
}
function dagreHelper18(
  dagreParam231,
  dagreParam232,
  dagreParam233,
  dagreParam234,
) {
  var dagreValue316 = {
    width: 0,
    height: 0,
  };
  return (
    arguments.length >= 4 &&
      ((dagreValue316.rank = dagreParam233),
      (dagreValue316.order = dagreParam234)),
    dagreHelper11(dagreParam231, "border", dagreValue316, dagreParam232)
  );
}
function dagreHelper19(dagreParam262) {
  return zipObjectC(
    flattenA(dagreParam262.nodes(), function (dagreParam336) {
      var dagreValue365 = dagreParam262.node(dagreParam336).rank;
      if (!unionN(dagreValue365)) return dagreValue365;
    }),
  );
}
function dagreHelper20(dagreParam242, dagreParam243) {
  var dagreValue321 = {
    lhs: [],
    rhs: [],
  };
  return (
    reduceL(dagreParam242, function (dagreParam353) {
      dagreParam243(dagreParam353)
        ? dagreValue321.lhs.push(dagreParam353)
        : dagreValue321.rhs.push(dagreParam353);
    }),
    dagreValue321
  );
}
function _e(dagreParam264, dagreParam265) {
  var dagreValue332 = zipObjectG();
  try {
    return dagreParam265();
  } finally {
    console.log(
      dagreParam264 + " time: " + (zipObjectG() - dagreValue332) + "ms",
    );
  }
}
function dagreHelper21(dagreParam420, dagreParam421) {
  return dagreParam421();
}
function dagreHelper22(dagreParam82) {
  function dagreHelper127(dagreParam110) {
    var dagreValue178 = dagreParam82.children(dagreParam110),
      dagreValue179 = dagreParam82.node(dagreParam110);
    if (
      (dagreValue178.length && reduceL(dagreValue178, dagreHelper127),
      Object.prototype.hasOwnProperty.call(dagreValue179, "minRank"))
    ) {
      dagreValue179.borderLeft = [];
      dagreValue179.borderRight = [];
      for (
        var dagreValue180 = dagreValue179.minRank,
          dagreValue181 = dagreValue179.maxRank + 1;
        dagreValue180 < dagreValue181;
        ++dagreValue180
      ) {
        dagreHelper23(
          dagreParam82,
          "borderLeft",
          "_bl",
          dagreParam110,
          dagreValue179,
          dagreValue180,
        );
        dagreHelper23(
          dagreParam82,
          "borderRight",
          "_br",
          dagreParam110,
          dagreValue179,
          dagreValue180,
        );
      }
    }
  }
  reduceL(dagreParam82.children(), dagreHelper127);
}
function dagreHelper23(
  dagreParam184,
  dagreParam185,
  dagreParam186,
  dagreParam187,
  dagreParam188,
  dagreParam189,
) {
  var dagreValue272 = {
      width: 0,
      height: 0,
      rank: dagreParam189,
      borderType: dagreParam185,
    },
    dagreValue273 = dagreParam188[dagreParam185][dagreParam189 - 1],
    dagreValue274 = dagreHelper11(
      dagreParam184,
      "border",
      dagreValue272,
      dagreParam186,
    );
  dagreParam188[dagreParam185][dagreParam189] = dagreValue274;
  dagreParam184.setParent(dagreValue274, dagreParam187);
  dagreValue273 &&
    dagreParam184.setEdge(dagreValue273, dagreValue274, {
      weight: 1,
    });
}
function be(dagreParam308) {
  var dagreValue354 = dagreParam308.graph().rankdir.toLowerCase();
  (dagreValue354 === "lr" || dagreValue354 === "rl") &&
    dagreHelper25(dagreParam308);
}
function dagreHelper24(dagreParam244) {
  var dagreValue322 = dagreParam244.graph().rankdir.toLowerCase();
  (dagreValue322 === "bt" || dagreValue322 === "rl") &&
    dagreHelper27(dagreParam244);
  (dagreValue322 === "lr" || dagreValue322 === "rl") &&
    (dagreHelper29(dagreParam244), dagreHelper25(dagreParam244));
}
function dagreHelper25(dagreParam258) {
  reduceL(dagreParam258.nodes(), function (dagreParam415) {
    dagreHelper26(dagreParam258.node(dagreParam415));
  });
  reduceL(dagreParam258.edges(), function (dagreParam412) {
    dagreHelper26(dagreParam258.edge(dagreParam412));
  });
}
function dagreHelper26(dagreParam333) {
  var dagreValue362 = dagreParam333.width;
  dagreParam333.width = dagreParam333.height;
  dagreParam333.height = dagreValue362;
}
function dagreHelper27(dagreParam190) {
  reduceL(dagreParam190.nodes(), function (dagreParam416) {
    dagreHelper28(dagreParam190.node(dagreParam416));
  });
  reduceL(dagreParam190.edges(), function (dagreParam274) {
    var dagreValue336 = dagreParam190.edge(dagreParam274);
    reduceL(dagreValue336.points, dagreHelper28);
    Object.prototype.hasOwnProperty.call(dagreValue336, "y") &&
      dagreHelper28(dagreValue336);
  });
}
function dagreHelper28(dagreParam424) {
  dagreParam424.y = -dagreParam424.y;
}
function dagreHelper29(dagreParam191) {
  reduceL(dagreParam191.nodes(), function (dagreParam417) {
    dagreHelper30(dagreParam191.node(dagreParam417));
  });
  reduceL(dagreParam191.edges(), function (dagreParam275) {
    var dagreValue337 = dagreParam191.edge(dagreParam275);
    reduceL(dagreValue337.points, dagreHelper30);
    Object.prototype.hasOwnProperty.call(dagreValue337, "x") &&
      dagreHelper30(dagreValue337);
  });
}
function dagreHelper30(dagreParam357) {
  var dagreValue368 = dagreParam357.x;
  dagreParam357.x = dagreParam357.y;
  dagreParam357.y = dagreValue368;
}
function dagreHelper31(dagreParam299) {
  dagreParam299.graph().dummyChains = [];
  reduceL(dagreParam299.edges(), function (dagreParam418) {
    dagreHelper32(dagreParam299, dagreParam418);
  });
}
function dagreHelper32(dagreParam36, dagreParam37) {
  var dagreValue51 = dagreParam37.v,
    dagreValue52 = dagreParam36.node(dagreValue51).rank,
    dagreValue53 = dagreParam37.w,
    dagreValue54 = dagreParam36.node(dagreValue53).rank,
    dagreValue55 = dagreParam37.name,
    dagreValue56 = dagreParam36.edge(dagreParam37),
    dagreValue57 = dagreValue56.labelRank;
  if (dagreValue54 !== dagreValue52 + 1) {
    dagreParam36.removeEdge(dagreParam37);
    var dagreValue58 = undefined,
      dagreValue59,
      dagreValue60;
    for (
      dagreValue60 = 0, ++dagreValue52;
      dagreValue52 < dagreValue54;
      ++dagreValue60, ++dagreValue52
    ) {
      dagreValue56.points = [];
      dagreValue58 = {
        width: 0,
        height: 0,
        edgeLabel: dagreValue56,
        edgeObj: dagreParam37,
        rank: dagreValue52,
      };
      dagreValue59 = dagreHelper11(dagreParam36, "edge", dagreValue58, "_d");
      dagreValue52 === dagreValue57 &&
        ((dagreValue58.width = dagreValue56.width),
        (dagreValue58.height = dagreValue56.height),
        (dagreValue58.dummy = "edge-label"),
        (dagreValue58.labelpos = dagreValue56.labelpos));
      dagreParam36.setEdge(
        dagreValue51,
        dagreValue59,
        {
          weight: dagreValue56.weight,
        },
        dagreValue55,
      );
      dagreValue60 === 0 && dagreParam36.graph().dummyChains.push(dagreValue59);
      dagreValue51 = dagreValue59;
    }
    dagreParam36.setEdge(
      dagreValue51,
      dagreValue53,
      {
        weight: dagreValue56.weight,
      },
      dagreValue55,
    );
  }
}
function dagreHelper33(dagreParam71) {
  reduceL(dagreParam71.graph().dummyChains, function (dagreParam84) {
    var dagreValue140 = dagreParam71.node(dagreParam84),
      dagreValue141 = dagreValue140.edgeLabel,
      dagreValue142;
    for (
      dagreParam71.setEdge(dagreValue140.edgeObj, dagreValue141);
      dagreValue140.dummy;

    ) {
      dagreValue142 = dagreParam71.successors(dagreParam84)[0];
      dagreParam71.removeNode(dagreParam84);
      dagreValue141.points.push({
        x: dagreValue140.x,
        y: dagreValue140.y,
      });
      dagreValue140.dummy === "edge-label" &&
        ((dagreValue141.x = dagreValue140.x),
        (dagreValue141.y = dagreValue140.y),
        (dagreValue141.width = dagreValue140.width),
        (dagreValue141.height = dagreValue140.height));
      dagreParam84 = dagreValue142;
      dagreValue140 = dagreParam71.node(dagreParam84);
    }
  });
}
function dagreHelper34(dagreParam113) {
  var dagreValue183 = {};
  function dagreHelper129(dagreParam133) {
    var dagreValue215 = dagreParam113.node(dagreParam133);
    if (Object.prototype.hasOwnProperty.call(dagreValue183, dagreParam133))
      return dagreValue215.rank;
    dagreValue183[dagreParam133] = true;
    var dagreValue216 = flattenN(
      flattenA(dagreParam113.outEdges(dagreParam133), function (dagreParam354) {
        return (
          dagreHelper129(dagreParam354.w) -
          dagreParam113.edge(dagreParam354).minlen
        );
      }),
    );
    return (
      (dagreValue216 === 1 / 0 || dagreValue216 == null) && (dagreValue216 = 0),
      (dagreValue215.rank = dagreValue216)
    );
  }
  reduceL(dagreParam113.sources(), dagreHelper129);
}
function dagreHelper35(dagreParam321, dagreParam322) {
  return (
    dagreParam321.node(dagreParam322.w).rank -
    dagreParam321.node(dagreParam322.v).rank -
    dagreParam321.edge(dagreParam322).minlen
  );
}
function dagreHelper36(dagreParam169) {
  var dagreValue250 = new Graphlib({
      directed: false,
    }),
    dagreValue251 = dagreParam169.nodes()[0],
    dagreValue252 = dagreParam169.nodeCount();
  dagreValue250.setNode(dagreValue251, {});
  for (
    var dagreValue253, dagreValue254;
    dagreHelper37(dagreValue250, dagreParam169) < dagreValue252;

  ) {
    dagreValue253 = dagreHelper38(dagreValue250, dagreParam169);
    dagreValue254 = dagreValue250.hasNode(dagreValue253.v)
      ? dagreHelper35(dagreParam169, dagreValue253)
      : -dagreHelper35(dagreParam169, dagreValue253);
    dagreHelper39(dagreValue250, dagreParam169, dagreValue254);
  }
  return dagreValue250;
}
function dagreHelper37(dagreParam149, dagreParam150) {
  function dagreHelper132(dagreParam193) {
    reduceL(dagreParam150.nodeEdges(dagreParam193), function (dagreParam229) {
      var dagreValue314 = dagreParam229.v,
        dagreValue315 =
          dagreParam193 === dagreValue314 ? dagreParam229.w : dagreValue314;
      !dagreParam149.hasNode(dagreValue315) &&
        !dagreHelper35(dagreParam150, dagreParam229) &&
        (dagreParam149.setNode(dagreValue315, {}),
        dagreParam149.setEdge(dagreParam193, dagreValue315, {}),
        dagreHelper132(dagreValue315));
    });
  }
  return (
    reduceL(dagreParam149.nodes(), dagreHelper132),
    dagreParam149.nodeCount()
  );
}
function dagreHelper38(dagreParam276, dagreParam277) {
  return zipObjectS(dagreParam277.edges(), function (dagreParam337) {
    if (
      dagreParam276.hasNode(dagreParam337.v) !==
      dagreParam276.hasNode(dagreParam337.w)
    )
      return dagreHelper35(dagreParam277, dagreParam337);
  });
}
function dagreHelper39(dagreParam323, dagreParam324, dagreParam325) {
  reduceL(dagreParam323.nodes(), function (dagreParam408) {
    dagreParam324.node(dagreParam408).rank += dagreParam325;
  });
}
mergeG(1);
mergeG(1);
dagreHelper40.CycleException = dagreHelper41;
function dagreHelper40(dagreParam109) {
  var dagreValue175 = {},
    dagreValue176 = {},
    dagreValue177 = [];
  function dagreHelper128(dagreParam168) {
    if (Object.prototype.hasOwnProperty.call(dagreValue176, dagreParam168))
      throw new dagreHelper41();
    Object.prototype.hasOwnProperty.call(dagreValue175, dagreParam168) ||
      ((dagreValue176[dagreParam168] = true),
      (dagreValue175[dagreParam168] = true),
      reduceL(dagreParam109.predecessors(dagreParam168), dagreHelper128),
      delete dagreValue176[dagreParam168],
      dagreValue177.push(dagreParam168));
  }
  if (
    (reduceL(dagreParam109.sinks(), dagreHelper128),
    zipObjectI(dagreValue175) !== dagreParam109.nodeCount())
  )
    throw new dagreHelper41();
  return dagreValue177;
}
function dagreHelper41() {}
dagreHelper41.prototype = Error();
function dagreHelper42(dagreParam139, dagreParam140, dagreParam141) {
  baseForG(dagreParam140) || (dagreParam140 = [dagreParam140]);
  var dagreValue219 = (
      dagreParam139.isDirected()
        ? dagreParam139.successors
        : dagreParam139.neighbors
    ).bind(dagreParam139),
    dagreValue220 = [],
    dagreValue221 = {};
  return (
    reduceL(dagreParam140, function (dagreParam263) {
      if (!dagreParam139.hasNode(dagreParam263))
        throw Error("Graph does not have node: " + dagreParam263);
      dagreHelper43(
        dagreParam139,
        dagreParam263,
        dagreParam141 === "post",
        dagreValue221,
        dagreValue219,
        dagreValue220,
      );
    }),
    dagreValue220
  );
}
function dagreHelper43(
  dagreParam200,
  dagreParam201,
  dagreParam202,
  dagreParam203,
  dagreParam204,
  dagreParam205,
) {
  Object.prototype.hasOwnProperty.call(dagreParam203, dagreParam201) ||
    ((dagreParam203[dagreParam201] = true),
    dagreParam202 || dagreParam205.push(dagreParam201),
    reduceL(dagreParam204(dagreParam201), function (dagreParam393) {
      dagreHelper43(
        dagreParam200,
        dagreParam393,
        dagreParam202,
        dagreParam203,
        dagreParam204,
        dagreParam205,
      );
    }),
    dagreParam202 && dagreParam205.push(dagreParam201));
}
function dagreHelper44(dagreParam394, dagreParam395) {
  return dagreHelper42(dagreParam394, dagreParam395, "post");
}
function dagreHelper45(dagreParam402, dagreParam403) {
  return dagreHelper42(dagreParam402, dagreParam403, "pre");
}
dagreHelper46.initLowLimValues = dagreHelper50;
dagreHelper46.initCutValues = dagreHelper47;
dagreHelper46.calcCutValue = dagreHelper49;
dagreHelper46.leaveEdge = dagreHelper52;
dagreHelper46.enterEdge = dagreHelper53;
dagreHelper46.exchangeEdges = dagreHelper54;
function dagreHelper46(dagreParam250) {
  dagreParam250 = dagreHelper12(dagreParam250);
  dagreHelper34(dagreParam250);
  var dagreValue324 = dagreHelper36(dagreParam250);
  dagreHelper50(dagreValue324);
  dagreHelper47(dagreValue324, dagreParam250);
  for (
    var dagreValue325, dagreValue326;
    (dagreValue325 = dagreHelper52(dagreValue324));

  ) {
    dagreValue326 = dagreHelper53(dagreValue324, dagreParam250, dagreValue325);
    dagreHelper54(dagreValue324, dagreParam250, dagreValue325, dagreValue326);
  }
}
function dagreHelper47(dagreParam259, dagreParam260) {
  var dagreValue330 = dagreHelper44(dagreParam259, dagreParam259.nodes());
  dagreValue330 = dagreValue330.slice(0, dagreValue330.length - 1);
  reduceL(dagreValue330, function (dagreParam413) {
    dagreHelper48(dagreParam259, dagreParam260, dagreParam413);
  });
}
function dagreHelper48(dagreParam317, dagreParam318, dagreParam319) {
  var dagreValue360 = dagreParam317.node(dagreParam319).parent;
  dagreParam317.edge(dagreParam319, dagreValue360).cutvalue = dagreHelper49(
    dagreParam317,
    dagreParam318,
    dagreParam319,
  );
}
function dagreHelper49(dagreParam63, dagreParam64, dagreParam65) {
  var dagreValue108 = dagreParam63.node(dagreParam65).parent,
    dagreValue109 = true,
    dagreValue110 = dagreParam64.edge(dagreParam65, dagreValue108),
    dagreValue111 = 0;
  return (
    (dagreValue110 ||=
      ((dagreValue109 = false),
      dagreParam64.edge(dagreValue108, dagreParam65))),
    (dagreValue111 = dagreValue110.weight),
    reduceL(dagreParam64.nodeEdges(dagreParam65), function (dagreParam148) {
      var dagreValue228 = dagreParam148.v === dagreParam65,
        dagreValue229 = dagreValue228 ? dagreParam148.w : dagreParam148.v;
      if (dagreValue229 !== dagreValue108) {
        var dagreValue230 = dagreValue228 === dagreValue109,
          dagreValue231 = dagreParam64.edge(dagreParam148).weight;
        if (
          ((dagreValue111 += dagreValue230 ? dagreValue231 : -dagreValue231),
          dagreHelper56(dagreParam63, dagreParam65, dagreValue229))
        ) {
          var dagreValue232 = dagreParam63.edge(
            dagreParam65,
            dagreValue229,
          ).cutvalue;
          dagreValue111 += dagreValue230 ? -dagreValue232 : dagreValue232;
        }
      }
    }),
    dagreValue111
  );
}
function dagreHelper50(dagreParam326, dagreParam327) {
  arguments.length < 2 && (dagreParam327 = dagreParam326.nodes()[0]);
  dagreHelper51(dagreParam326, {}, 1, dagreParam327);
}
function dagreHelper51(
  dagreParam134,
  dagreParam135,
  dagreParam136,
  dagreParam137,
  dagreParam138,
) {
  var dagreValue217 = dagreParam136,
    dagreValue218 = dagreParam134.node(dagreParam137);
  return (
    (dagreParam135[dagreParam137] = true),
    reduceL(dagreParam134.neighbors(dagreParam137), function (dagreParam312) {
      Object.prototype.hasOwnProperty.call(dagreParam135, dagreParam312) ||
        (dagreParam136 = dagreHelper51(
          dagreParam134,
          dagreParam135,
          dagreParam136,
          dagreParam312,
          dagreParam137,
        ));
    }),
    (dagreValue218.low = dagreValue217),
    (dagreValue218.lim = dagreParam136++),
    dagreParam138
      ? (dagreValue218.parent = dagreParam138)
      : delete dagreValue218.parent,
    dagreParam136
  );
}
function dagreHelper52(dagreParam313) {
  return zipObjectP(dagreParam313.edges(), function (dagreParam367) {
    return dagreParam313.edge(dagreParam367).cutvalue < 0;
  });
}
function dagreHelper53(dagreParam90, dagreParam91, dagreParam92) {
  var dagreValue144 = dagreParam92.v,
    dagreValue145 = dagreParam92.w;
  dagreParam91.hasEdge(dagreValue144, dagreValue145) ||
    ((dagreValue144 = dagreParam92.w), (dagreValue145 = dagreParam92.v));
  var dagreValue146 = dagreParam90.node(dagreValue144),
    dagreValue147 = dagreParam90.node(dagreValue145),
    dagreValue148 = dagreValue146,
    dagreValue149 = false;
  return (
    dagreValue146.lim > dagreValue147.lim &&
      ((dagreValue148 = dagreValue147), (dagreValue149 = true)),
    zipObjectS(
      reduceC(dagreParam91.edges(), function (dagreParam311) {
        return (
          dagreValue149 ===
            dagreHelper57(
              dagreParam90,
              dagreParam90.node(dagreParam311.v),
              dagreValue148,
            ) &&
          dagreValue149 !==
            dagreHelper57(
              dagreParam90,
              dagreParam90.node(dagreParam311.w),
              dagreValue148,
            )
        );
      }),
      function (dagreParam404) {
        return dagreHelper35(dagreParam91, dagreParam404);
      },
    )
  );
}
function dagreHelper54(
  dagreParam266,
  dagreParam267,
  dagreParam268,
  dagreParam269,
) {
  var dagreValue333 = dagreParam268.v,
    dagreValue334 = dagreParam268.w;
  dagreParam266.removeEdge(dagreValue333, dagreValue334);
  dagreParam266.setEdge(dagreParam269.v, dagreParam269.w, {});
  dagreHelper50(dagreParam266);
  dagreHelper47(dagreParam266, dagreParam267);
  dagreHelper55(dagreParam266, dagreParam267);
}
function dagreHelper55(dagreParam111, dagreParam112) {
  var dagreValue182 = dagreHelper45(
    dagreParam111,
    zipObjectP(dagreParam111.nodes(), function (dagreParam373) {
      return !dagreParam112.node(dagreParam373).parent;
    }),
  );
  dagreValue182 = dagreValue182.slice(1);
  reduceL(dagreValue182, function (dagreParam194) {
    var dagreValue280 = dagreParam111.node(dagreParam194).parent,
      dagreValue281 = dagreParam112.edge(dagreParam194, dagreValue280),
      dagreValue282 = false;
    dagreValue281 ||
      ((dagreValue281 = dagreParam112.edge(dagreValue280, dagreParam194)),
      (dagreValue282 = true));
    dagreParam112.node(dagreParam194).rank =
      dagreParam112.node(dagreValue280).rank +
      (dagreValue282 ? dagreValue281.minlen : -dagreValue281.minlen);
  });
}
function dagreHelper56(dagreParam379, dagreParam380, dagreParam381) {
  return dagreParam379.hasEdge(dagreParam380, dagreParam381);
}
function dagreHelper57(dagreParam349, dagreParam350, dagreParam351) {
  return (
    dagreParam351.low <= dagreParam350.lim &&
    dagreParam350.lim <= dagreParam351.lim
  );
}
function dagreHelper58(dagreParam173) {
  switch (dagreParam173.graph().ranker) {
    case "network-simplex":
      dagreHelper60(dagreParam173);
      break;
    case "tight-tree":
      dagreHelper59(dagreParam173);
      break;
    case "longest-path":
      dagreValue3(dagreParam173);
      break;
    default:
      dagreHelper60(dagreParam173);
  }
}
var dagreValue3 = dagreHelper34;
function dagreHelper59(dagreParam423) {
  dagreHelper34(dagreParam423);
  dagreHelper36(dagreParam423);
}
function dagreHelper60(dagreParam425) {
  dagreHelper46(dagreParam425);
}
function dagreHelper61(dagreParam121) {
  var dagreValue196 = dagreHelper11(dagreParam121, "root", {}, "_root"),
    dagreValue197 = dagreHelper63(dagreParam121),
    dagreValue198 = zipObjectC(unionT(dagreValue197)) - 1,
    dagreValue199 = 2 * dagreValue198 + 1;
  dagreParam121.graph().nestingRoot = dagreValue196;
  reduceL(dagreParam121.edges(), function (dagreParam389) {
    dagreParam121.edge(dagreParam389).minlen *= dagreValue199;
  });
  var dagreValue200 = dagreHelper64(dagreParam121) + 1;
  reduceL(dagreParam121.children(), function (dagreParam396) {
    dagreHelper62(
      dagreParam121,
      dagreValue196,
      dagreValue199,
      dagreValue200,
      dagreValue198,
      dagreValue197,
      dagreParam396,
    );
  });
  dagreParam121.graph().nodeRankFactor = dagreValue199;
}
function dagreHelper62(
  dagreParam25,
  dagreParam26,
  dagreParam27,
  dagreParam28,
  dagreParam29,
  dagreParam30,
  dagreParam31,
) {
  var dagreValue44 = dagreParam25.children(dagreParam31);
  if (!dagreValue44.length) {
    dagreParam31 !== dagreParam26 &&
      dagreParam25.setEdge(dagreParam26, dagreParam31, {
        weight: 0,
        minlen: dagreParam27,
      });
    return;
  }
  var dagreValue45 = dagreHelper18(dagreParam25, "_bt"),
    dagreValue46 = dagreHelper18(dagreParam25, "_bb"),
    dagreValue47 = dagreParam25.node(dagreParam31);
  dagreParam25.setParent(dagreValue45, dagreParam31);
  dagreValue47.borderTop = dagreValue45;
  dagreParam25.setParent(dagreValue46, dagreParam31);
  dagreValue47.borderBottom = dagreValue46;
  reduceL(dagreValue44, function (dagreParam107) {
    dagreHelper62(
      dagreParam25,
      dagreParam26,
      dagreParam27,
      dagreParam28,
      dagreParam29,
      dagreParam30,
      dagreParam107,
    );
    var dagreValue165 = dagreParam25.node(dagreParam107),
      dagreValue166 = dagreValue165.borderTop
        ? dagreValue165.borderTop
        : dagreParam107,
      dagreValue167 = dagreValue165.borderBottom
        ? dagreValue165.borderBottom
        : dagreParam107,
      dagreValue168 = dagreValue165.borderTop ? dagreParam28 : 2 * dagreParam28,
      dagreValue169 =
        dagreValue166 === dagreValue167
          ? dagreParam29 - dagreParam30[dagreParam31] + 1
          : 1;
    dagreParam25.setEdge(dagreValue45, dagreValue166, {
      weight: dagreValue168,
      minlen: dagreValue169,
      nestingEdge: true,
    });
    dagreParam25.setEdge(dagreValue167, dagreValue46, {
      weight: dagreValue168,
      minlen: dagreValue169,
      nestingEdge: true,
    });
  });
  dagreParam25.parent(dagreParam31) ||
    dagreParam25.setEdge(dagreParam26, dagreValue45, {
      weight: 0,
      minlen: dagreParam29 + dagreParam30[dagreParam31],
    });
}
function dagreHelper63(dagreParam155) {
  var dagreValue241 = {};
  function dagreHelper133(dagreParam240, dagreParam241) {
    var dagreValue320 = dagreParam155.children(dagreParam240);
    dagreValue320 &&
      dagreValue320.length &&
      reduceL(dagreValue320, function (dagreParam409) {
        dagreHelper133(dagreParam409, dagreParam241 + 1);
      });
    dagreValue241[dagreParam240] = dagreParam241;
  }
  return (
    reduceL(dagreParam155.children(), function (dagreParam422) {
      dagreHelper133(dagreParam422, 1);
    }),
    dagreValue241
  );
}
function dagreHelper64(dagreParam279) {
  return _reduceS(
    dagreParam279.edges(),
    function (dagreParam358, dagreParam359) {
      return dagreParam358 + dagreParam279.edge(dagreParam359).weight;
    },
    0,
  );
}
function dagreHelper65(dagreParam216) {
  var dagreValue299 = dagreParam216.graph();
  dagreParam216.removeNode(dagreValue299.nestingRoot);
  delete dagreValue299.nestingRoot;
  reduceL(dagreParam216.edges(), function (dagreParam348) {
    dagreParam216.edge(dagreParam348).nestingEdge &&
      dagreParam216.removeEdge(dagreParam348);
  });
}
function dagreHelper66(dagreParam127, dagreParam128, dagreParam129) {
  var dagreValue211 = {},
    dagreValue212;
  reduceL(dagreParam129, function (dagreParam159) {
    for (
      var dagreValue245 = dagreParam127.parent(dagreParam159),
        dagreValue246,
        dagreValue247;
      dagreValue245;

    ) {
      if (
        ((dagreValue246 = dagreParam127.parent(dagreValue245)),
        dagreValue246
          ? ((dagreValue247 = dagreValue211[dagreValue246]),
            (dagreValue211[dagreValue246] = dagreValue245))
          : ((dagreValue247 = dagreValue212), (dagreValue212 = dagreValue245)),
        dagreValue247 && dagreValue247 !== dagreValue245)
      ) {
        dagreParam128.setEdge(dagreValue247, dagreValue245);
        return;
      }
      dagreValue245 = dagreValue246;
    }
  });
}
function dagreHelper67(dagreParam11, dagreParam12, dagreParam13) {
  var dagreValue29 = dagreHelper68(dagreParam11),
    dagreValue30 = new Graphlib({
      compound: true,
    })
      .setGraph({
        root: dagreValue29,
      })
      .setDefaultNodeLabel(function (dagreParam392) {
        return dagreParam11.node(dagreParam392);
      });
  return (
    reduceL(dagreParam11.nodes(), function (dagreParam47) {
      var dagreValue73 = dagreParam11.node(dagreParam47),
        dagreValue74 = dagreParam11.parent(dagreParam47);
      (dagreValue73.rank === dagreParam12 ||
        (dagreValue73.minRank <= dagreParam12 &&
          dagreParam12 <= dagreValue73.maxRank)) &&
        (dagreValue30.setNode(dagreParam47),
        dagreValue30.setParent(dagreParam47, dagreValue74 || dagreValue29),
        reduceL(
          dagreParam11[dagreParam13](dagreParam47),
          function (dagreParam212) {
            var dagreValue291 =
                dagreParam212.v === dagreParam47
                  ? dagreParam212.w
                  : dagreParam212.v,
              dagreValue292 = dagreValue30.edge(dagreValue291, dagreParam47),
              dagreValue293 = unionN(dagreValue292) ? 0 : dagreValue292.weight;
            dagreValue30.setEdge(dagreValue291, dagreParam47, {
              weight: dagreParam11.edge(dagreParam212).weight + dagreValue293,
            });
          },
        ),
        Object.prototype.hasOwnProperty.call(dagreValue73, "minRank") &&
          dagreValue30.setNode(dagreParam47, {
            borderLeft: dagreValue73.borderLeft[dagreParam12],
            borderRight: dagreValue73.borderRight[dagreParam12],
          }));
    }),
    dagreValue30
  );
}
function dagreHelper68(dagreParam339) {
  for (
    var dagreValue367;
    dagreParam339.hasNode((dagreValue367 = zipObjectN("_root")));

  );
  return dagreValue367;
}
function dagreHelper69(dagreParam302, dagreParam303) {
  for (
    var dagreValue349 = 0, dagreValue350 = 1;
    dagreValue350 < dagreParam303.length;
    ++dagreValue350
  )
    dagreValue349 += dagreHelper70(
      dagreParam302,
      dagreParam303[dagreValue350 - 1],
      dagreParam303[dagreValue350],
    );
  return dagreValue349;
}
function dagreHelper70(dagreParam17, dagreParam18, dagreParam19) {
  for (
    var dagreValue35 = zipObjectT(
        dagreParam19,
        flattenA(dagreParam19, function (dagreParam397, dagreParam398) {
          return dagreParam398;
        }),
      ),
      dagreValue36 = flattenR(
        flattenA(dagreParam18, function (dagreParam209) {
          return zipObjectR(
            flattenA(
              dagreParam17.outEdges(dagreParam209),
              function (dagreParam314) {
                return {
                  pos: dagreValue35[dagreParam314.w],
                  weight: dagreParam17.edge(dagreParam314).weight,
                };
              },
            ),
            "pos",
          );
        }),
      ),
      dagreValue37 = 1;
    dagreValue37 < dagreParam19.length;

  )
    dagreValue37 <<= 1;
  var dagreValue38 = 2 * dagreValue37 - 1;
  --dagreValue37;
  var dagreValue39 = flattenA(Array(dagreValue38), function () {
      return 0;
    }),
    dagreValue40 = 0;
  return (
    reduceL(
      dagreValue36.forEach(function (item) {
        var dagreValue275 = item.pos + dagreValue37;
        dagreValue39[dagreValue275] += item.weight;
        for (var dagreValue276 = 0; dagreValue275 > 0; ) {
          dagreValue275 % 2 &&
            (dagreValue276 += dagreValue39[dagreValue275 + 1]);
          dagreValue275 = (dagreValue275 - 1) >> 1;
          dagreValue39[dagreValue275] += item.weight;
        }
        dagreValue40 += item.weight * dagreValue276;
      }),
    ),
    dagreValue40
  );
}
function $e(dagreParam60) {
  var dagreValue104 = {},
    dagreValue105 = reduceC(dagreParam60.nodes(), function (dagreParam360) {
      return !dagreParam60.children(dagreParam360).length;
    }),
    dagreValue106 = flattenA(
      zipObjectA(
        zipObjectC(
          flattenA(dagreValue105, function (dagreParam356) {
            return dagreParam60.node(dagreParam356).rank;
          }),
        ) + 1,
      ),
      function () {
        return [];
      },
    );
  function dagreHelper126(dagreParam307) {
    zipObjectU(dagreValue104, dagreParam307) ||
      ((dagreValue104[dagreParam307] = true),
      dagreValue106[dagreParam60.node(dagreParam307).rank].push(dagreParam307),
      reduceL(dagreParam60.successors(dagreParam307), dagreHelper126));
  }
  return (
    reduceL(
      zipObjectR(dagreValue105, function (dagreParam368) {
        return dagreParam60.node(dagreParam368).rank;
      }),
      dagreHelper126,
    ),
    dagreValue106
  );
}
function dagreHelper71(dagreParam66, dagreParam67) {
  return flattenA(dagreParam67, function (dagreParam74) {
    var dagreValue119 = dagreParam66.inEdges(dagreParam74);
    if (dagreValue119.length) {
      var dagreValue120 = _reduceS(
        dagreValue119,
        function (dagreParam198, dagreParam199) {
          var dagreValue284 = dagreParam66.edge(dagreParam199),
            dagreValue285 = dagreParam66.node(dagreParam199.v);
          return {
            sum: dagreParam198.sum + dagreValue284.weight * dagreValue285.order,
            weight: dagreParam198.weight + dagreValue284.weight,
          };
        },
        {
          sum: 0,
          weight: 0,
        },
      );
      return {
        v: dagreParam74,
        barycenter: dagreValue120.sum / dagreValue120.weight,
        weight: dagreValue120.weight,
      };
    } else
      return {
        v: dagreParam74,
      };
  });
}
function dagreHelper72(dagreParam69, dagreParam70) {
  var dagreValue117 = {};
  return (
    reduceL(dagreParam69, function (dagreParam219, dagreParam220) {
      var dagreValue302 = (dagreValue117[dagreParam219.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [dagreParam219.v],
        i: dagreParam220,
      });
      unionN(dagreParam219.barycenter) ||
        ((dagreValue302.barycenter = dagreParam219.barycenter),
        (dagreValue302.weight = dagreParam219.weight));
    }),
    reduceL(dagreParam70.edges(), function (dagreParam278) {
      var dagreValue338 = dagreValue117[dagreParam278.v],
        dagreValue339 = dagreValue117[dagreParam278.w];
      !unionN(dagreValue338) &&
        !unionN(dagreValue339) &&
        (dagreValue339.indegree++,
        dagreValue338.out.push(dagreValue117[dagreParam278.w]));
    }),
    dagreHelper73(
      reduceC(dagreValue117, function (dagreParam382) {
        return !dagreParam382.indegree;
      }),
    )
  );
}
function dagreHelper73(dagreParam48) {
  var dagreValue75 = [];
  function dagreHelper124(dagreParam224) {
    return function (dagreParam253) {
      dagreParam253.merged ||
        ((unionN(dagreParam253.barycenter) ||
          unionN(dagreParam224.barycenter) ||
          dagreParam253.barycenter >= dagreParam224.barycenter) &&
          dagreHelper74(dagreParam224, dagreParam253));
    };
  }
  function dagreHelper125(dagreParam301) {
    return function (dagreParam342) {
      dagreParam342.in.push(dagreParam301);
      --dagreParam342.indegree === 0 && dagreParam48.push(dagreParam342);
    };
  }
  for (; dagreParam48.length; ) {
    var dagreValue76 = dagreParam48.pop();
    dagreValue75.push(dagreValue76);
    reduceL(dagreValue76.in.reverse(), dagreHelper124(dagreValue76));
    reduceL(dagreValue76.out, dagreHelper125(dagreValue76));
  }
  return flattenA(
    reduceC(dagreValue75, function (dagreParam407) {
      return !dagreParam407.merged;
    }),
    function (dagreParam340) {
      return zipObjectO(dagreParam340, ["vs", "i", "barycenter", "weight"]);
    },
  );
}
function dagreHelper74(dagreParam130, dagreParam131) {
  var dagreValue213 = 0,
    dagreValue214 = 0;
  dagreParam130.weight &&
    ((dagreValue213 += dagreParam130.barycenter * dagreParam130.weight),
    (dagreValue214 += dagreParam130.weight));
  dagreParam131.weight &&
    ((dagreValue213 += dagreParam131.barycenter * dagreParam131.weight),
    (dagreValue214 += dagreParam131.weight));
  dagreParam130.vs = dagreParam131.vs.concat(dagreParam130.vs);
  dagreParam130.barycenter = dagreValue213 / dagreValue214;
  dagreParam130.weight = dagreValue214;
  dagreParam130.i = Math.min(dagreParam131.i, dagreParam130.i);
  dagreParam131.merged = true;
}
function dagreHelper75(dagreParam53, dagreParam54) {
  var dagreValue95 = dagreHelper20(dagreParam53, function (dagreParam320) {
      return Object.prototype.hasOwnProperty.call(dagreParam320, "barycenter");
    }),
    dagreValue96 = dagreValue95.lhs,
    dagreValue97 = zipObjectR(dagreValue95.rhs, function (dagreParam414) {
      return -dagreParam414.i;
    }),
    dagreValue98 = [],
    dagreValue99 = 0,
    dagreValue100 = 0,
    dagreValue101 = 0;
  dagreValue96.sort(dagreHelper76(!!dagreParam54));
  dagreValue101 = at(dagreValue98, dagreValue97, dagreValue101);
  reduceL(dagreValue96, function (dagreParam235) {
    dagreValue101 += dagreParam235.vs.length;
    dagreValue98.push(dagreParam235.vs);
    dagreValue99 += dagreParam235.barycenter * dagreParam235.weight;
    dagreValue100 += dagreParam235.weight;
    dagreValue101 = at(dagreValue98, dagreValue97, dagreValue101);
  });
  var dagreValue102 = {
    vs: flattenR(dagreValue98),
  };
  return (
    dagreValue100 &&
      ((dagreValue102.barycenter = dagreValue99 / dagreValue100),
      (dagreValue102.weight = dagreValue100)),
    dagreValue102
  );
}
function at(dagreParam294, dagreParam295, dagreParam296) {
  for (
    var dagreValue348;
    dagreParam295.length &&
    (dagreValue348 = zipObjectM(dagreParam295)).i <= dagreParam296;

  ) {
    dagreParam295.pop();
    dagreParam294.push(dagreValue348.vs);
    dagreParam296++;
  }
  return dagreParam296;
}
function dagreHelper76(dagreParam197) {
  return function (dagreParam221, dagreParam222) {
    return dagreParam221.barycenter < dagreParam222.barycenter
      ? -1
      : dagreParam221.barycenter > dagreParam222.barycenter
        ? 1
        : dagreParam197
          ? dagreParam222.i - dagreParam221.i
          : dagreParam221.i - dagreParam222.i;
  };
}
function dagreHelper77(dagreParam4, dagreParam5, dagreParam6, dagreParam7) {
  var dagreValue19 = dagreParam4.children(dagreParam5),
    dagreValue20 = dagreParam4.node(dagreParam5),
    dagreValue21 = dagreValue20 ? dagreValue20.borderLeft : undefined,
    dagreValue22 = dagreValue20 ? dagreValue20.borderRight : undefined,
    dagreValue23 = {};
  dagreValue21 &&
    (dagreValue19 = reduceC(dagreValue19, function (dagreParam369) {
      return dagreParam369 !== dagreValue21 && dagreParam369 !== dagreValue22;
    }));
  var dagreValue24 = dagreHelper71(dagreParam4, dagreValue19);
  reduceL(dagreValue24, function (dagreParam214) {
    if (dagreParam4.children(dagreParam214.v).length) {
      var dagreValue296 = dagreHelper77(
        dagreParam4,
        dagreParam214.v,
        dagreParam6,
        dagreParam7,
      );
      dagreValue23[dagreParam214.v] = dagreValue296;
      Object.prototype.hasOwnProperty.call(dagreValue296, "barycenter") &&
        dagreHelper79(dagreParam214, dagreValue296);
    }
  });
  var dagreValue25 = dagreHelper72(dagreValue24, dagreParam6);
  dagreHelper78(dagreValue25, dagreValue23);
  var dagreValue26 = dagreHelper75(dagreValue25, dagreParam7);
  if (
    dagreValue21 &&
    ((dagreValue26.vs = flattenR([
      dagreValue21,
      dagreValue26.vs,
      dagreValue22,
    ])),
    dagreParam4.predecessors(dagreValue21).length)
  ) {
    var dagreValue27 = dagreParam4.node(
        dagreParam4.predecessors(dagreValue21)[0],
      ),
      dagreValue28 = dagreParam4.node(
        dagreParam4.predecessors(dagreValue22)[0],
      );
    Object.prototype.hasOwnProperty.call(dagreValue26, "barycenter") ||
      ((dagreValue26.barycenter = 0), (dagreValue26.weight = 0));
    dagreValue26.barycenter =
      (dagreValue26.barycenter * dagreValue26.weight +
        dagreValue27.order +
        dagreValue28.order) /
      (dagreValue26.weight + 2);
    dagreValue26.weight += 2;
  }
  return dagreValue26;
}
function dagreHelper78(dagreParam248, dagreParam249) {
  reduceL(dagreParam248, function (dagreParam293) {
    dagreParam293.vs = flattenR(
      dagreParam293.vs.map(function (item) {
        return dagreParam249[item] ? dagreParam249[item].vs : item;
      }),
    );
  });
}
function dagreHelper79(dagreParam166, dagreParam167) {
  unionN(dagreParam166.barycenter)
    ? ((dagreParam166.barycenter = dagreParam167.barycenter),
      (dagreParam166.weight = dagreParam167.weight))
    : ((dagreParam166.barycenter =
        (dagreParam166.barycenter * dagreParam166.weight +
          dagreParam167.barycenter * dagreParam167.weight) /
        (dagreParam166.weight + dagreParam167.weight)),
      (dagreParam166.weight += dagreParam167.weight));
}
function dagreHelper80(dagreParam122) {
  var dagreValue201 = dagreHelper19(dagreParam122),
    dagreValue202 = dagreHelper81(
      dagreParam122,
      zipObjectA(1, dagreValue201 + 1),
      "inEdges",
    ),
    dagreValue203 = dagreHelper81(
      dagreParam122,
      zipObjectA(dagreValue201 - 1, -1, -1),
      "outEdges",
    ),
    dagreValue204 = $e(dagreParam122);
  dagreHelper83(dagreParam122, dagreValue204);
  for (
    var dagreValue205 = 1 / 0,
      dagreValue206,
      dagreValue207 = 0,
      dagreValue208 = 0;
    dagreValue208 < 4;
    ++dagreValue207, ++dagreValue208
  ) {
    dagreHelper82(
      dagreValue207 % 2 ? dagreValue202 : dagreValue203,
      dagreValue207 % 4 >= 2,
    );
    dagreValue204 = dagreHelper15(dagreParam122);
    var dagreValue209 = dagreHelper69(dagreParam122, dagreValue204);
    dagreValue209 < dagreValue205 &&
      ((dagreValue208 = 0),
      (dagreValue206 = zipObjectUnderscore(dagreValue204)),
      (dagreValue205 = dagreValue209));
  }
  dagreHelper83(dagreParam122, dagreValue206);
}
function dagreHelper81(dagreParam329, dagreParam330, dagreParam331) {
  return flattenA(dagreParam330, function (dagreParam410) {
    return dagreHelper67(dagreParam329, dagreParam410, dagreParam331);
  });
}
function dagreHelper82(dagreParam195, dagreParam196) {
  var dagreValue283 = new Graphlib();
  reduceL(dagreParam195, function (dagreParam237) {
    var dagreValue318 = dagreParam237.graph().root,
      dagreValue319 = dagreHelper77(
        dagreParam237,
        dagreValue318,
        dagreValue283,
        dagreParam196,
      );
    reduceL(dagreValue319.vs, function (dagreParam383, dagreParam384) {
      dagreParam237.node(dagreParam383).order = dagreParam384;
    });
    dagreHelper66(dagreParam237, dagreValue283, dagreValue319.vs);
  });
}
function dagreHelper83(dagreParam297, dagreParam298) {
  reduceL(dagreParam298, function (dagreParam332) {
    reduceL(dagreParam332, function (dagreParam385, dagreParam386) {
      dagreParam297.node(dagreParam385).order = dagreParam386;
    });
  });
}
function dagreHelper84(dagreParam41) {
  var dagreValue66 = dagreHelper86(dagreParam41);
  reduceL(dagreParam41.graph().dummyChains, function (dagreParam50) {
    for (
      var dagreValue83 = dagreParam41.node(dagreParam50),
        dagreValue84 = dagreValue83.edgeObj,
        dagreValue85 = dagreHelper85(
          dagreParam41,
          dagreValue66,
          dagreValue84.v,
          dagreValue84.w,
        ),
        dagreValue86 = dagreValue85.path,
        dagreValue87 = dagreValue85.lca,
        dagreValue88 = 0,
        dagreValue89 = dagreValue86[dagreValue88],
        dagreValue90 = true;
      dagreParam50 !== dagreValue84.w;

    ) {
      if (((dagreValue83 = dagreParam41.node(dagreParam50)), dagreValue90)) {
        for (
          ;
          (dagreValue89 = dagreValue86[dagreValue88]) !== dagreValue87 &&
          dagreParam41.node(dagreValue89).maxRank < dagreValue83.rank;

        )
          dagreValue88++;
        dagreValue89 === dagreValue87 && (dagreValue90 = false);
      }
      if (!dagreValue90) {
        for (
          ;
          dagreValue88 < dagreValue86.length - 1 &&
          dagreParam41.node((dagreValue89 = dagreValue86[dagreValue88 + 1]))
            .minRank <= dagreValue83.rank;

        )
          dagreValue88++;
        dagreValue89 = dagreValue86[dagreValue88];
      }
      dagreParam41.setParent(dagreParam50, dagreValue89);
      dagreParam50 = dagreParam41.successors(dagreParam50)[0];
    }
  });
}
function dagreHelper85(
  dagreParam117,
  dagreParam118,
  dagreParam119,
  dagreParam120,
) {
  var dagreValue190 = [],
    dagreValue191 = [],
    dagreValue192 = Math.min(
      dagreParam118[dagreParam119].low,
      dagreParam118[dagreParam120].low,
    ),
    dagreValue193 = Math.max(
      dagreParam118[dagreParam119].lim,
      dagreParam118[dagreParam120].lim,
    ),
    dagreValue194 = dagreParam119,
    dagreValue195;
  do {
    dagreValue194 = dagreParam117.parent(dagreValue194);
    dagreValue190.push(dagreValue194);
  } while (
    dagreValue194 &&
    (dagreParam118[dagreValue194].low > dagreValue192 ||
      dagreValue193 > dagreParam118[dagreValue194].lim)
  );
  for (
    dagreValue195 = dagreValue194, dagreValue194 = dagreParam120;
    (dagreValue194 = dagreParam117.parent(dagreValue194)) !== dagreValue195;

  )
    dagreValue191.push(dagreValue194);
  return {
    path: dagreValue190.concat(dagreValue191.reverse()),
    lca: dagreValue195,
  };
}
function dagreHelper86(dagreParam225) {
  var dagreValue307 = {},
    dagreValue308 = 0;
  function dagreHelper134(dagreParam315) {
    var dagreValue358 = dagreValue308;
    reduceL(dagreParam225.children(dagreParam315), dagreHelper134);
    dagreValue307[dagreParam315] = {
      low: dagreValue358,
      lim: dagreValue308++,
    };
  }
  return (reduceL(dagreParam225.children(), dagreHelper134), dagreValue307);
}
function dagreHelper87(dagreParam42, dagreParam43) {
  var dagreValue67 = {};
  function dagreHelper123(dagreParam51, dagreParam52) {
    var dagreValue91 = 0,
      dagreValue92 = 0,
      dagreValue93 = dagreParam51.length,
      dagreValue94 = zipObjectM(dagreParam52);
    return (
      reduceL(dagreParam52, function (dagreParam80, dagreParam81) {
        var dagreValue136 = dagreHelper88(dagreParam42, dagreParam80),
          dagreValue137 = dagreValue136
            ? dagreParam42.node(dagreValue136).order
            : dagreValue93;
        (dagreValue136 || dagreParam80 === dagreValue94) &&
          (reduceL(
            dagreParam52.slice(dagreValue92, dagreParam81 + 1),
            function (dagreParam174) {
              reduceL(
                dagreParam42.predecessors(dagreParam174),
                function (dagreParam226) {
                  var dagreValue309 = dagreParam42.node(dagreParam226),
                    dagreValue310 = dagreValue309.order;
                  (dagreValue310 < dagreValue91 ||
                    dagreValue137 < dagreValue310) &&
                    !(
                      dagreValue309.dummy &&
                      dagreParam42.node(dagreParam174).dummy
                    ) &&
                    dagreHelper89(dagreValue67, dagreParam226, dagreParam174);
                },
              );
            },
          ),
          (dagreValue92 = dagreParam81 + 1),
          (dagreValue91 = dagreValue137));
      }),
      dagreParam52
    );
  }
  return (_reduceS(dagreParam43, dagreHelper123), dagreValue67);
}
function _t(dagreParam38, dagreParam39) {
  var dagreValue61 = {};
  function dagreHelper121(
    dagreParam143,
    dagreParam144,
    dagreParam145,
    dagreParam146,
    dagreParam147,
  ) {
    var dagreValue227;
    reduceL(zipObjectA(dagreParam144, dagreParam145), function (dagreParam176) {
      dagreValue227 = dagreParam143[dagreParam176];
      dagreParam38.node(dagreValue227).dummy &&
        reduceL(
          dagreParam38.predecessors(dagreValue227),
          function (dagreParam272) {
            var dagreValue335 = dagreParam38.node(dagreParam272);
            dagreValue335.dummy &&
              (dagreValue335.order < dagreParam146 ||
                dagreValue335.order > dagreParam147) &&
              dagreHelper89(dagreValue61, dagreParam272, dagreValue227);
          },
        );
    });
  }
  function dagreHelper122(dagreParam114, dagreParam115) {
    var dagreValue184 = -1,
      dagreValue185,
      dagreValue186 = 0;
    return (
      reduceL(dagreParam115, function (dagreParam162, dagreParam163) {
        if (dagreParam38.node(dagreParam162).dummy === "border") {
          var dagreValue248 = dagreParam38.predecessors(dagreParam162);
          dagreValue248.length &&
            ((dagreValue185 = dagreParam38.node(dagreValue248[0]).order),
            dagreHelper121(
              dagreParam115,
              dagreValue186,
              dagreParam163,
              dagreValue184,
              dagreValue185,
            ),
            (dagreValue186 = dagreParam163),
            (dagreValue184 = dagreValue185));
        }
        dagreHelper121(
          dagreParam115,
          dagreValue186,
          dagreParam115.length,
          dagreValue185,
          dagreParam114.length,
        );
      }),
      dagreParam115
    );
  }
  return (_reduceS(dagreParam39, dagreHelper122), dagreValue61);
}
function dagreHelper88(dagreParam270, dagreParam271) {
  if (dagreParam270.node(dagreParam271).dummy)
    return zipObjectP(
      dagreParam270.predecessors(dagreParam271),
      function (dagreParam387) {
        return dagreParam270.node(dagreParam387).dummy;
      },
    );
}
function dagreHelper89(dagreParam104, dagreParam105, dagreParam106) {
  if (dagreParam105 > dagreParam106) {
    var dagreValue163 = dagreParam105;
    dagreParam105 = dagreParam106;
    dagreParam106 = dagreValue163;
  }
  Object.prototype.hasOwnProperty.call(dagreParam104, dagreParam105) ||
    Object.defineProperty(dagreParam104, dagreParam105, {
      enumerable: true,
      configurable: true,
      value: {},
      writable: true,
    });
  var dagreValue164 = dagreParam104[dagreParam105];
  Object.defineProperty(dagreValue164, dagreParam106, {
    enumerable: true,
    configurable: true,
    value: true,
    writable: true,
  });
}
function dagreHelper90(dagreParam245, dagreParam246, dagreParam247) {
  if (dagreParam246 > dagreParam247) {
    var dagreValue323 = dagreParam246;
    dagreParam246 = dagreParam247;
    dagreParam247 = dagreValue323;
  }
  return (
    !!dagreParam245[dagreParam246] &&
    Object.prototype.hasOwnProperty.call(
      dagreParam245[dagreParam246],
      dagreParam247,
    )
  );
}
function dagreHelper91(dagreParam32, dagreParam33, dagreParam34, dagreParam35) {
  var dagreValue48 = {},
    dagreValue49 = {},
    dagreValue50 = {};
  return (
    reduceL(dagreParam33, function (dagreParam304) {
      reduceL(dagreParam304, function (dagreParam344, dagreParam345) {
        dagreValue48[dagreParam344] = dagreParam344;
        dagreValue49[dagreParam344] = dagreParam344;
        dagreValue50[dagreParam344] = dagreParam345;
      });
    }),
    reduceL(dagreParam33, function (dagreParam55) {
      var dagreValue103 = -1;
      reduceL(dagreParam55, function (dagreParam68) {
        var dagreValue112 = dagreParam35(dagreParam68);
        if (dagreValue112.length) {
          dagreValue112 = zipObjectR(dagreValue112, function (dagreParam377) {
            return dagreValue50[dagreParam377];
          });
          for (
            var dagreValue113 = (dagreValue112.length - 1) / 2,
              dagreValue114 = Math.floor(dagreValue113),
              dagreValue115 = Math.ceil(dagreValue113);
            dagreValue114 <= dagreValue115;
            ++dagreValue114
          ) {
            var dagreValue116 = dagreValue112[dagreValue114];
            dagreValue49[dagreParam68] === dagreParam68 &&
              dagreValue103 < dagreValue50[dagreValue116] &&
              !dagreHelper90(dagreParam34, dagreParam68, dagreValue116) &&
              ((dagreValue49[dagreValue116] = dagreParam68),
              (dagreValue49[dagreParam68] = dagreValue48[dagreParam68] =
                dagreValue48[dagreValue116]),
              (dagreValue103 = dagreValue50[dagreValue116]));
          }
        }
      });
    }),
    {
      root: dagreValue48,
      align: dagreValue49,
    }
  );
}
function dagreHelper92(
  dagreParam20,
  dagreParam21,
  dagreParam22,
  dagreParam23,
  dagreParam24,
) {
  var dagreValue41 = {},
    dagreValue42 = dagreHelper93(
      dagreParam20,
      dagreParam21,
      dagreParam22,
      dagreParam24,
    ),
    dagreValue43 = dagreParam24 ? "borderLeft" : "borderRight";
  function dagreHelper118(dagreParam227, dagreParam228) {
    for (
      var dagreValue311 = dagreValue42.nodes(),
        dagreValue312 = dagreValue311.pop(),
        dagreValue313 = {};
      dagreValue312;

    ) {
      dagreValue313[dagreValue312]
        ? dagreParam227(dagreValue312)
        : ((dagreValue313[dagreValue312] = true),
          dagreValue311.push(dagreValue312),
          (dagreValue311 = dagreValue311.concat(dagreParam228(dagreValue312))));
      dagreValue312 = dagreValue311.pop();
    }
  }
  function dagreHelper119(dagreParam273) {
    dagreValue41[dagreParam273] = dagreValue42
      .inEdges(dagreParam273)
      .reduce(function (accumulator, current) {
        return Math.max(
          accumulator,
          dagreValue41[current.v] + dagreValue42.edge(current),
        );
      }, 0);
  }
  function dagreHelper120(dagreParam177) {
    var dagreValue264 = dagreValue42.outEdges(dagreParam177).reduce(function (
        accumulator,
        current,
      ) {
        return Math.min(
          accumulator,
          dagreValue41[current.w] - dagreValue42.edge(current),
        );
      }, 1 / 0),
      dagreValue265 = dagreParam20.node(dagreParam177);
    dagreValue264 !== 1 / 0 &&
      dagreValue265.borderType !== dagreValue43 &&
      (dagreValue41[dagreParam177] = Math.max(
        dagreValue41[dagreParam177],
        dagreValue264,
      ));
  }
  return (
    dagreHelper118(
      dagreHelper119,
      dagreValue42.predecessors.bind(dagreValue42),
    ),
    dagreHelper118(dagreHelper120, dagreValue42.successors.bind(dagreValue42)),
    reduceL(dagreParam23, function (dagreParam411) {
      dagreValue41[dagreParam411] = dagreValue41[dagreParam22[dagreParam411]];
    }),
    dagreValue41
  );
}
function dagreHelper93(dagreParam94, dagreParam95, dagreParam96, dagreParam97) {
  var dagreValue151 = new Graphlib(),
    dagreValue152 = dagreParam94.graph(),
    dagreValue153 = dagreHelper98(
      dagreValue152.nodesep,
      dagreValue152.edgesep,
      dagreParam97,
    );
  return (
    reduceL(dagreParam95, function (dagreParam157) {
      var dagreValue243;
      reduceL(dagreParam157, function (dagreParam192) {
        var dagreValue277 = dagreParam96[dagreParam192];
        if ((dagreValue151.setNode(dagreValue277), dagreValue243)) {
          var dagreValue278 = dagreParam96[dagreValue243],
            dagreValue279 = dagreValue151.edge(dagreValue278, dagreValue277);
          dagreValue151.setEdge(
            dagreValue278,
            dagreValue277,
            Math.max(
              dagreValue153(dagreParam94, dagreParam192, dagreValue243),
              dagreValue279 || 0,
            ),
          );
        }
        dagreValue243 = dagreParam192;
      });
    }),
    dagreValue151
  );
}
function dagreHelper94(dagreParam160, dagreParam161) {
  return zipObjectS(unionT(dagreParam161), function (dagreParam183) {
    var dagreValue270 = -1 / 0,
      dagreValue271 = 1 / 0;
    return (
      zipObjectF(dagreParam183, function (dagreParam287, dagreParam288) {
        var dagreValue345 = dagreHelper99(dagreParam160, dagreParam288) / 2;
        dagreValue270 = Math.max(dagreParam287 + dagreValue345, dagreValue270);
        dagreValue271 = Math.min(dagreParam287 - dagreValue345, dagreValue271);
      }),
      dagreValue270 - dagreValue271
    );
  });
}
function dagreHelper95(dagreParam102, dagreParam103) {
  var dagreValue160 = unionT(dagreParam103),
    dagreValue161 = flattenN(dagreValue160),
    dagreValue162 = zipObjectC(dagreValue160);
  reduceL(["u", "d"], function (dagreParam132) {
    reduceL(["l", "r"], function (dagreParam154) {
      var dagreValue237 = dagreParam132 + dagreParam154,
        dagreValue238 = dagreParam102[dagreValue237],
        dagreValue239;
      if (dagreValue238 !== dagreParam103) {
        var dagreValue240 = unionT(dagreValue238);
        dagreValue239 =
          dagreParam154 === "l"
            ? dagreValue161 - flattenN(dagreValue240)
            : dagreValue162 - zipObjectC(dagreValue240);
        dagreValue239 &&
          (dagreParam102[dagreValue237] = zipObjectL(
            dagreValue238,
            function (dagreParam361) {
              return dagreParam361 + dagreValue239;
            },
          ));
      }
    });
  });
}
function dagreHelper96(dagreParam238, dagreParam239) {
  return zipObjectL(dagreParam238.ul, function (dagreParam289, dagreParam290) {
    if (dagreParam239)
      return dagreParam238[dagreParam239.toLowerCase()][dagreParam290];
    var dagreValue346 = zipObjectR(flattenA(dagreParam238, dagreParam290));
    return (dagreValue346[1] + dagreValue346[2]) / 2;
  });
}
function dagreHelper97(dagreParam40) {
  var dagreValue62 = dagreHelper15(dagreParam40),
    dagreValue63 = mergeT(
      dagreHelper87(dagreParam40, dagreValue62),
      _t(dagreParam40, dagreValue62),
    ),
    dagreValue64 = {},
    dagreValue65;
  return (
    reduceL(["u", "d"], function (dagreParam59) {
      dagreValue65 =
        dagreParam59 === "u" ? dagreValue62 : unionT(dagreValue62).reverse();
      reduceL(["l", "r"], function (dagreParam77) {
        dagreParam77 === "r" &&
          (dagreValue65 = flattenA(dagreValue65, function (dagreParam352) {
            return unionT(dagreParam352).reverse();
          }));
        var dagreValue125 = (
            dagreParam59 === "u"
              ? dagreParam40.predecessors
              : dagreParam40.successors
          ).bind(dagreParam40),
          dagreValue126 = dagreHelper91(
            dagreParam40,
            dagreValue65,
            dagreValue63,
            dagreValue125,
          ),
          dagreValue127 = dagreHelper92(
            dagreParam40,
            dagreValue65,
            dagreValue126.root,
            dagreValue126.align,
            dagreParam77 === "r",
          );
        dagreParam77 === "r" &&
          (dagreValue127 = zipObjectL(dagreValue127, function (dagreParam370) {
            return -dagreParam370;
          }));
        dagreValue64[dagreParam59 + dagreParam77] = dagreValue127;
      });
    }),
    dagreHelper95(dagreValue64, dagreHelper94(dagreParam40, dagreValue64)),
    dagreHelper96(dagreValue64, dagreParam40.graph().align)
  );
}
function dagreHelper98(dagreParam8, dagreParam9, dagreParam10) {
  return function (dagreParam14, dagreParam15, dagreParam16) {
    var dagreValue31 = dagreParam14.node(dagreParam15),
      dagreValue32 = dagreParam14.node(dagreParam16),
      dagreValue33 = 0,
      dagreValue34;
    if (
      ((dagreValue33 += dagreValue31.width / 2),
      Object.prototype.hasOwnProperty.call(dagreValue31, "labelpos"))
    )
      switch (dagreValue31.labelpos.toLowerCase()) {
        case "l":
          dagreValue34 = -dagreValue31.width / 2;
          break;
        case "r":
          dagreValue34 = dagreValue31.width / 2;
          break;
      }
    if (
      (dagreValue34 &&
        (dagreValue33 += dagreParam10 ? dagreValue34 : -dagreValue34),
      (dagreValue34 = 0),
      (dagreValue33 += (dagreValue31.dummy ? dagreParam9 : dagreParam8) / 2),
      (dagreValue33 += (dagreValue32.dummy ? dagreParam9 : dagreParam8) / 2),
      (dagreValue33 += dagreValue32.width / 2),
      Object.prototype.hasOwnProperty.call(dagreValue32, "labelpos"))
    )
      switch (dagreValue32.labelpos.toLowerCase()) {
        case "l":
          dagreValue34 = dagreValue32.width / 2;
          break;
        case "r":
          dagreValue34 = -dagreValue32.width / 2;
          break;
      }
    return (
      dagreValue34 &&
        (dagreValue33 += dagreParam10 ? dagreValue34 : -dagreValue34),
      (dagreValue34 = 0),
      dagreValue33
    );
  };
}
function dagreHelper99(dagreParam399, dagreParam400) {
  return dagreParam399.node(dagreParam400).width;
}
function dagreHelper100(dagreParam300) {
  dagreParam300 = dagreHelper13(dagreParam300);
  dagreHelper101(dagreParam300);
  zipObjectD(
    dagreHelper97(dagreParam300),
    function (dagreParam405, dagreParam406) {
      dagreParam300.node(dagreParam406).x = dagreParam405;
    },
  );
}
function dagreHelper101(dagreParam152) {
  var dagreValue234 = dagreHelper15(dagreParam152),
    dagreValue235 = dagreParam152.graph().ranksep,
    dagreValue236 = 0;
  reduceL(dagreValue234, function (dagreParam211) {
    var dagreValue290 = zipObjectC(
      flattenA(dagreParam211, function (dagreParam365) {
        return dagreParam152.node(dagreParam365).height;
      }),
    );
    reduceL(dagreParam211, function (dagreParam378) {
      dagreParam152.node(dagreParam378).y = dagreValue236 + dagreValue290 / 2;
    });
    dagreValue236 += dagreValue290 + dagreValue235;
  });
}
export function Dagre(dagreParam179, dagreParam180) {
  var dagreValue268 =
    dagreParam180 && dagreParam180.debugTiming ? _e : dagreHelper21;
  dagreValue268("layout", () => {
    var dagreValue327 = dagreValue268("  buildLayoutGraph", () =>
      dagreHelper104(dagreParam179),
    );
    dagreValue268("  runLayout", () =>
      dagreHelper102(dagreValue327, dagreValue268),
    );
    dagreValue268("  updateInputGraph", () =>
      dagreHelper103(dagreParam179, dagreValue327),
    );
  });
}
function dagreHelper102(dagreParam1, dagreParam2) {
  dagreParam2("    makeSpaceForEdgeLabels", () => dagreHelper105(dagreParam1));
  dagreParam2("    removeSelfEdges", () => $t(dagreParam1));
  dagreParam2("    acyclic", () => dagreHelper8(dagreParam1));
  dagreParam2("    nestingGraph.run", () => dagreHelper61(dagreParam1));
  dagreParam2("    rank", () => dagreHelper58(dagreHelper13(dagreParam1)));
  dagreParam2("    injectEdgeLabelProxies", () => dagreHelper106(dagreParam1));
  dagreParam2("    removeEmptyRanks", () => dagreHelper17(dagreParam1));
  dagreParam2("    nestingGraph.cleanup", () => dagreHelper65(dagreParam1));
  dagreParam2("    normalizeRanks", () => dagreHelper16(dagreParam1));
  dagreParam2("    assignRankMinMax", () => dagreHelper107(dagreParam1));
  dagreParam2("    removeEdgeLabelProxies", () => dagreHelper108(dagreParam1));
  dagreParam2("    normalize.run", () => dagreHelper31(dagreParam1));
  dagreParam2("    parentDummyChains", () => dagreHelper84(dagreParam1));
  dagreParam2("    addBorderSegments", () => dagreHelper22(dagreParam1));
  dagreParam2("    order", () => dagreHelper80(dagreParam1));
  dagreParam2("    insertSelfEdges", () => dagreHelper114(dagreParam1));
  dagreParam2("    adjustCoordinateSystem", () => be(dagreParam1));
  dagreParam2("    position", () => dagreHelper100(dagreParam1));
  dagreParam2("    positionSelfEdges", () => dagreHelper115(dagreParam1));
  dagreParam2("    removeBorderNodes", () => dagreHelper113(dagreParam1));
  dagreParam2("    normalize.undo", () => dagreHelper33(dagreParam1));
  dagreParam2("    fixupEdgeLabelCoords", () => dagreHelper111(dagreParam1));
  dagreParam2("    undoCoordinateSystem", () => dagreHelper24(dagreParam1));
  dagreParam2("    translateGraph", () => dagreHelper109(dagreParam1));
  dagreParam2("    assignNodeIntersects", () => dagreHelper110(dagreParam1));
  dagreParam2("    reversePoints", () => dagreHelper112(dagreParam1));
  dagreParam2("    acyclic.undo", () => dagreHelper10(dagreParam1));
}
function dagreHelper103(dagreParam57, dagreParam58) {
  reduceL(dagreParam57.nodes(), function (dagreParam215) {
    var dagreValue297 = dagreParam57.node(dagreParam215),
      dagreValue298 = dagreParam58.node(dagreParam215);
    dagreValue297 &&
      ((dagreValue297.x = dagreValue298.x),
      (dagreValue297.y = dagreValue298.y),
      dagreParam58.children(dagreParam215).length &&
        ((dagreValue297.width = dagreValue298.width),
        (dagreValue297.height = dagreValue298.height)));
  });
  reduceL(dagreParam57.edges(), function (dagreParam213) {
    var dagreValue294 = dagreParam57.edge(dagreParam213),
      dagreValue295 = dagreParam58.edge(dagreParam213);
    dagreValue294.points = dagreValue295.points;
    Object.prototype.hasOwnProperty.call(dagreValue295, "x") &&
      ((dagreValue294.x = dagreValue295.x),
      (dagreValue294.y = dagreValue295.y));
  });
  dagreParam57.graph().width = dagreParam58.graph().width;
  dagreParam57.graph().height = dagreParam58.graph().height;
}
var dagreValue4 = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
  dagreValue5 = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb",
  },
  dagreValue6 = ["acyclicer", "ranker", "rankdir", "align"],
  dagreValue7 = ["width", "height"],
  dagreValue8 = {
    width: 0,
    height: 0,
  },
  dagreValue9 = ["minlen", "weight", "width", "height", "labeloffset"],
  dagreValue10 = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r",
  },
  dagreValue11 = ["labelpos"];
function dagreHelper104(dagreParam83) {
  var dagreValue138 = new Graphlib({
      multigraph: true,
      compound: true,
    }),
    dagreValue139 = $(dagreParam83.graph());
  return (
    dagreValue138.setGraph(
      mergeT(
        {},
        dagreValue5,
        dagreHelper116(dagreValue139, dagreValue4),
        zipObjectO(dagreValue139, dagreValue6),
      ),
    ),
    reduceL(dagreParam83.nodes(), function (dagreParam291) {
      var dagreValue347 = $(dagreParam83.node(dagreParam291));
      dagreValue138.setNode(
        dagreParam291,
        zipObjectH(dagreHelper116(dagreValue347, dagreValue7), dagreValue8),
      );
      dagreValue138.setParent(
        dagreParam291,
        dagreParam83.parent(dagreParam291),
      );
    }),
    reduceL(dagreParam83.edges(), function (dagreParam309) {
      var dagreValue355 = $(dagreParam83.edge(dagreParam309));
      dagreValue138.setEdge(
        dagreParam309,
        mergeT(
          {},
          dagreValue10,
          dagreHelper116(dagreValue355, dagreValue9),
          zipObjectO(dagreValue355, dagreValue11),
        ),
      );
    }),
    dagreValue138
  );
}
function dagreHelper105(dagreParam123) {
  var dagreValue210 = dagreParam123.graph();
  dagreValue210.ranksep /= 2;
  reduceL(dagreParam123.edges(), function (dagreParam165) {
    var dagreValue249 = dagreParam123.edge(dagreParam165);
    dagreValue249.minlen *= 2;
    dagreValue249.labelpos.toLowerCase() !== "c" &&
      (dagreValue210.rankdir === "TB" || dagreValue210.rankdir === "BT"
        ? (dagreValue249.width += dagreValue249.labeloffset)
        : (dagreValue249.height += dagreValue249.labeloffset));
  });
}
function dagreHelper106(dagreParam153) {
  reduceL(dagreParam153.edges(), function (dagreParam170) {
    var dagreValue255 = dagreParam153.edge(dagreParam170);
    if (dagreValue255.width && dagreValue255.height) {
      var dagreValue256 = dagreParam153.node(dagreParam170.v);
      dagreHelper11(
        dagreParam153,
        "edge-proxy",
        {
          rank:
            (dagreParam153.node(dagreParam170.w).rank - dagreValue256.rank) /
              2 +
            dagreValue256.rank,
          e: dagreParam170,
        },
        "_ep",
      );
    }
  });
}
function dagreHelper107(dagreParam156) {
  var dagreValue242 = 0;
  reduceL(dagreParam156.nodes(), function (dagreParam217) {
    var dagreValue300 = dagreParam156.node(dagreParam217);
    dagreValue300.borderTop &&
      ((dagreValue300.minRank = dagreParam156.node(
        dagreValue300.borderTop,
      ).rank),
      (dagreValue300.maxRank = dagreParam156.node(
        dagreValue300.borderBottom,
      ).rank),
      (dagreValue242 = zipObjectC(dagreValue242, dagreValue300.maxRank)));
  });
  dagreParam156.graph().maxRank = dagreValue242;
}
function dagreHelper108(dagreParam230) {
  reduceL(dagreParam230.nodes(), function (dagreParam261) {
    var dagreValue331 = dagreParam230.node(dagreParam261);
    dagreValue331.dummy === "edge-proxy" &&
      ((dagreParam230.edge(dagreValue331.e).labelRank = dagreValue331.rank),
      dagreParam230.removeNode(dagreParam261));
  });
}
function dagreHelper109(dagreParam3) {
  var dagreValue12 = 1 / 0,
    dagreValue13 = 0,
    dagreValue14 = 1 / 0,
    dagreValue15 = 0,
    dagreValue16 = dagreParam3.graph(),
    dagreValue17 = dagreValue16.marginx || 0,
    dagreValue18 = dagreValue16.marginy || 0;
  function dagreHelper117(dagreParam171) {
    var dagreValue257 = dagreParam171.x,
      dagreValue258 = dagreParam171.y,
      dagreValue259 = dagreParam171.width,
      dagreValue260 = dagreParam171.height;
    dagreValue12 = Math.min(dagreValue12, dagreValue257 - dagreValue259 / 2);
    dagreValue13 = Math.max(dagreValue13, dagreValue257 + dagreValue259 / 2);
    dagreValue14 = Math.min(dagreValue14, dagreValue258 - dagreValue260 / 2);
    dagreValue15 = Math.max(dagreValue15, dagreValue258 + dagreValue260 / 2);
  }
  reduceL(dagreParam3.nodes(), function (dagreParam419) {
    dagreHelper117(dagreParam3.node(dagreParam419));
  });
  reduceL(dagreParam3.edges(), function (dagreParam305) {
    var dagreValue351 = dagreParam3.edge(dagreParam305);
    Object.prototype.hasOwnProperty.call(dagreValue351, "x") &&
      dagreHelper117(dagreValue351);
  });
  dagreValue12 -= dagreValue17;
  dagreValue14 -= dagreValue18;
  reduceL(dagreParam3.nodes(), function (dagreParam338) {
    var dagreValue366 = dagreParam3.node(dagreParam338);
    dagreValue366.x -= dagreValue12;
    dagreValue366.y -= dagreValue14;
  });
  reduceL(dagreParam3.edges(), function (dagreParam158) {
    var dagreValue244 = dagreParam3.edge(dagreParam158);
    reduceL(dagreValue244.points, function (dagreParam362) {
      dagreParam362.x -= dagreValue12;
      dagreParam362.y -= dagreValue14;
    });
    Object.prototype.hasOwnProperty.call(dagreValue244, "x") &&
      (dagreValue244.x -= dagreValue12);
    Object.prototype.hasOwnProperty.call(dagreValue244, "y") &&
      (dagreValue244.y -= dagreValue14);
  });
  dagreValue16.width = dagreValue13 - dagreValue12 + dagreValue17;
  dagreValue16.height = dagreValue15 - dagreValue14 + dagreValue18;
}
function dagreHelper110(dagreParam124) {
  reduceL(dagreParam124.edges(), function (dagreParam142) {
    var dagreValue222 = dagreParam124.edge(dagreParam142),
      dagreValue223 = dagreParam124.node(dagreParam142.v),
      dagreValue224 = dagreParam124.node(dagreParam142.w),
      dagreValue225,
      dagreValue226;
    dagreValue222.points
      ? ((dagreValue225 = dagreValue222.points[0]),
        (dagreValue226 = dagreValue222.points[dagreValue222.points.length - 1]))
      : ((dagreValue222.points = []),
        (dagreValue225 = dagreValue224),
        (dagreValue226 = dagreValue223));
    dagreValue222.points.unshift(dagreHelper14(dagreValue223, dagreValue225));
    dagreValue222.points.push(dagreHelper14(dagreValue224, dagreValue226));
  });
}
function dagreHelper111(dagreParam75) {
  reduceL(dagreParam75.edges(), function (dagreParam93) {
    var dagreValue150 = dagreParam75.edge(dagreParam93);
    if (Object.prototype.hasOwnProperty.call(dagreValue150, "x"))
      switch (
        ((dagreValue150.labelpos === "l" || dagreValue150.labelpos === "r") &&
          (dagreValue150.width -= dagreValue150.labeloffset),
        dagreValue150.labelpos)
      ) {
        case "l":
          dagreValue150.x -=
            dagreValue150.width / 2 + dagreValue150.labeloffset;
          break;
        case "r":
          dagreValue150.x +=
            dagreValue150.width / 2 + dagreValue150.labeloffset;
          break;
      }
  });
}
function dagreHelper112(dagreParam292) {
  reduceL(dagreParam292.edges(), function (dagreParam334) {
    var dagreValue363 = dagreParam292.edge(dagreParam334);
    dagreValue363.reversed && dagreValue363.points.reverse();
  });
}
function dagreHelper113(dagreParam61) {
  reduceL(dagreParam61.nodes(), function (dagreParam108) {
    if (dagreParam61.children(dagreParam108).length) {
      var dagreValue170 = dagreParam61.node(dagreParam108),
        dagreValue171 = dagreParam61.node(dagreValue170.borderTop),
        dagreValue172 = dagreParam61.node(dagreValue170.borderBottom),
        dagreValue173 = dagreParam61.node(zipObjectM(dagreValue170.borderLeft)),
        dagreValue174 = dagreParam61.node(
          zipObjectM(dagreValue170.borderRight),
        );
      dagreValue170.width = Math.abs(dagreValue174.x - dagreValue173.x);
      dagreValue170.height = Math.abs(dagreValue172.y - dagreValue171.y);
      dagreValue170.x = dagreValue173.x + dagreValue170.width / 2;
      dagreValue170.y = dagreValue171.y + dagreValue170.height / 2;
    }
  });
  reduceL(dagreParam61.nodes(), function (dagreParam343) {
    dagreParam61.node(dagreParam343).dummy === "border" &&
      dagreParam61.removeNode(dagreParam343);
  });
}
function $t(dagreParam182) {
  reduceL(dagreParam182.edges(), function (dagreParam218) {
    if (dagreParam218.v === dagreParam218.w) {
      var dagreValue301 = dagreParam182.node(dagreParam218.v);
      dagreValue301.selfEdges ||= [];
      dagreValue301.selfEdges.push({
        e: dagreParam218,
        label: dagreParam182.edge(dagreParam218),
      });
      dagreParam182.removeEdge(dagreParam218);
    }
  });
}
function dagreHelper114(dagreParam56) {
  reduceL(dagreHelper15(dagreParam56), function (dagreParam62) {
    var dagreValue107 = 0;
    reduceL(dagreParam62, function (dagreParam72, dagreParam73) {
      var dagreValue118 = dagreParam56.node(dagreParam72);
      dagreValue118.order = dagreParam73 + dagreValue107;
      reduceL(dagreValue118.selfEdges, function (dagreParam126) {
        dagreHelper11(
          dagreParam56,
          "selfedge",
          {
            width: dagreParam126.label.width,
            height: dagreParam126.label.height,
            rank: dagreValue118.rank,
            order: dagreParam73 + ++dagreValue107,
            e: dagreParam126.e,
            label: dagreParam126.label,
          },
          "_se",
        );
      });
      delete dagreValue118.selfEdges;
    });
  });
}
function dagreHelper115(dagreParam46) {
  reduceL(dagreParam46.nodes(), function (dagreParam49) {
    var dagreValue77 = dagreParam46.node(dagreParam49);
    if (dagreValue77.dummy === "selfedge") {
      var dagreValue78 = dagreParam46.node(dagreValue77.e.v),
        dagreValue79 = dagreValue78.x + dagreValue78.width / 2,
        dagreValue80 = dagreValue78.y,
        dagreValue81 = dagreValue77.x - dagreValue79,
        dagreValue82 = dagreValue78.height / 2;
      dagreParam46.setEdge(dagreValue77.e, dagreValue77.label);
      dagreParam46.removeNode(dagreParam49);
      dagreValue77.label.points = [
        {
          x: dagreValue79 + (2 * dagreValue81) / 3,
          y: dagreValue80 - dagreValue82,
        },
        {
          x: dagreValue79 + (5 * dagreValue81) / 6,
          y: dagreValue80 - dagreValue82,
        },
        {
          x: dagreValue79 + dagreValue81,
          y: dagreValue80,
        },
        {
          x: dagreValue79 + (5 * dagreValue81) / 6,
          y: dagreValue80 + dagreValue82,
        },
        {
          x: dagreValue79 + (2 * dagreValue81) / 3,
          y: dagreValue80 + dagreValue82,
        },
      ];
      dagreValue77.label.x = dagreValue77.x;
      dagreValue77.label.y = dagreValue77.y;
    }
  });
}
function dagreHelper116(dagreParam390, dagreParam391) {
  return zipObjectL(zipObjectO(dagreParam390, dagreParam391), Number);
}
function $(dagreParam286) {
  var dagreValue344 = {};
  return (
    reduceL(dagreParam286, function (dagreParam371, dagreParam372) {
      dagreValue344[dagreParam372.toLowerCase()] = dagreParam371;
    }),
    dagreValue344
  );
}
