// Restored from ref/webview/assets/chunk-AA7GKIK3-Bic0nqP_.js
// ChunkAA7GKIK3 chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27L,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkAA7GKIK3Value1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "PieTokenBuilder");
    }
    constructor() {
      super(["pie", "showData"]);
    }
  },
  chunkAA7GKIK3Value2 = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "PieValueConverter");
    }
    runCustomConverter(
      chunkAA7GKIK3Param2,
      chunkAA7GKIK3Param3,
      chunkAA7GKIK3Param4,
    ) {
      if (chunkAA7GKIK3Param2.name === "PIE_SECTION_LABEL")
        return chunkAA7GKIK3Param3.replace(/"/g, "").trim();
    }
  },
  chunkAA7GKIK3T = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunkAA7GKIK3Value1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkAA7GKIK3Value2(),
        "ValueConverter",
      ),
    },
  };
function chunkAA7GKIK3N(chunkAA7GKIK3Param1 = chunkK5T4RW27H) {
  let chunkAA7GKIK3Value3 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkAA7GKIK3Param1),
      chunkK5T4RW27S,
    ),
    chunkAA7GKIK3Value4 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkAA7GKIK3Value3,
      }),
      chunkK5T4RW27L,
      chunkAA7GKIK3T,
    );
  return (
    chunkAA7GKIK3Value3.ServiceRegistry.register(chunkAA7GKIK3Value4),
    {
      shared: chunkAA7GKIK3Value3,
      Pie: chunkAA7GKIK3Value4,
    }
  );
}
chunkK5T4RW27M(chunkAA7GKIK3N, "createPieServices");
export { chunkAA7GKIK3N, chunkAA7GKIK3T };
