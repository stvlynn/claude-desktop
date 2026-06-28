// Restored from ref/webview/assets/chunk-LIHQZDEY-B0GBEU3_.js
// ChunkLIHQZDEY chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27F,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkLIHQZDEYValue1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "TreemapTokenBuilder");
    }
    constructor() {
      super(["treemap"]);
    }
  },
  chunkLIHQZDEYValue2 = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/,
  chunkLIHQZDEYValue3 = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "TreemapValueConverter");
    }
    runCustomConverter(
      chunkLIHQZDEYParam1,
      chunkLIHQZDEYParam2,
      chunkLIHQZDEYParam3,
    ) {
      if (chunkLIHQZDEYParam1.name === "NUMBER2")
        return parseFloat(chunkLIHQZDEYParam2.replace(/,/g, ""));
      if (
        chunkLIHQZDEYParam1.name === "SEPARATOR" ||
        chunkLIHQZDEYParam1.name === "STRING2"
      )
        return chunkLIHQZDEYParam2.substring(1, chunkLIHQZDEYParam2.length - 1);
      if (chunkLIHQZDEYParam1.name === "INDENTATION")
        return chunkLIHQZDEYParam2.length;
      if (chunkLIHQZDEYParam1.name === "ClassDef") {
        if (typeof chunkLIHQZDEYParam2 != "string") return chunkLIHQZDEYParam2;
        let chunkLIHQZDEYValue7 = chunkLIHQZDEYValue2.exec(chunkLIHQZDEYParam2);
        if (chunkLIHQZDEYValue7)
          return {
            $type: "ClassDefStatement",
            className: chunkLIHQZDEYValue7[1],
            styleText: chunkLIHQZDEYValue7[2] || undefined,
          };
      }
    }
  };
function chunkLIHQZDEYHelper1(chunkLIHQZDEYParam6) {
  let chunkLIHQZDEYValue8 = chunkLIHQZDEYParam6.validation.TreemapValidator,
    chunkLIHQZDEYValue9 = chunkLIHQZDEYParam6.validation.ValidationRegistry;
  if (chunkLIHQZDEYValue9) {
    let chunkLIHQZDEYValue12 = {
      Treemap: chunkLIHQZDEYValue8.checkSingleRoot.bind(chunkLIHQZDEYValue8),
    };
    chunkLIHQZDEYValue9.register(chunkLIHQZDEYValue12, chunkLIHQZDEYValue8);
  }
}
chunkK5T4RW27M(chunkLIHQZDEYHelper1, "registerValidationChecks");
var chunkLIHQZDEYValue4 = class {
    static {
      chunkK5T4RW27M(this, "TreemapValidator");
    }
    checkSingleRoot(chunkLIHQZDEYParam4, chunkLIHQZDEYParam5) {
      let chunkLIHQZDEYValue5;
      for (let chunkLIHQZDEYValue6 of chunkLIHQZDEYParam4.TreemapRows)
        chunkLIHQZDEYValue6.item &&
          (chunkLIHQZDEYValue5 === undefined &&
          chunkLIHQZDEYValue6.indent === undefined
            ? (chunkLIHQZDEYValue5 = 0)
            : (chunkLIHQZDEYValue6.indent === undefined ||
                (chunkLIHQZDEYValue5 !== undefined &&
                  chunkLIHQZDEYValue5 >=
                    parseInt(chunkLIHQZDEYValue6.indent, 10))) &&
              chunkLIHQZDEYParam5(
                "error",
                "Multiple root nodes are not allowed in a treemap.",
                {
                  node: chunkLIHQZDEYValue6,
                  property: "item",
                },
              ));
    }
  },
  chunkLIHQZDEYT = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunkLIHQZDEYValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkLIHQZDEYValue3(),
        "ValueConverter",
      ),
    },
    validation: {
      TreemapValidator: chunkK5T4RW27M(
        () => new chunkLIHQZDEYValue4(),
        "TreemapValidator",
      ),
    },
  };
function chunkLIHQZDEYN(chunkLIHQZDEYParam7 = chunkK5T4RW27H) {
  let chunkLIHQZDEYValue10 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkLIHQZDEYParam7),
      chunkK5T4RW27S,
    ),
    chunkLIHQZDEYValue11 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkLIHQZDEYValue10,
      }),
      chunkK5T4RW27F,
      chunkLIHQZDEYT,
    );
  return (
    chunkLIHQZDEYValue10.ServiceRegistry.register(chunkLIHQZDEYValue11),
    chunkLIHQZDEYHelper1(chunkLIHQZDEYValue11),
    {
      shared: chunkLIHQZDEYValue10,
      Treemap: chunkLIHQZDEYValue11,
    }
  );
}
chunkK5T4RW27M(chunkLIHQZDEYN, "createTreemapServices");
export { chunkLIHQZDEYN, chunkLIHQZDEYT };
