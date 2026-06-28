// Restored from ref/webview/assets/chunk-S6J4BHB3-BiRR_8vz.js
// ChunkS6J4BHB3 chunk restored from the Codex webview bundle.
import {
  chunkFPAJGGOCA,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var chunkS6J4BHB3Value1 = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "GitGraphTokenBuilder");
    }
    constructor() {
      super(["gitGraph"]);
    }
  },
  chunkS6J4BHB3T = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new chunkS6J4BHB3Value1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new chunkFPAJGGOCI(),
        "ValueConverter",
      ),
    },
  };
function chunkS6J4BHB3N(chunkS6J4BHB3Param1 = chunkFPAJGGOCP) {
  let chunkS6J4BHB3Value2 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkS6J4BHB3Param1),
      chunkFPAJGGOCS,
    ),
    chunkS6J4BHB3Value3 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkS6J4BHB3Value2,
      }),
      chunkFPAJGGOCA,
      chunkS6J4BHB3T,
    );
  return (
    chunkS6J4BHB3Value2.ServiceRegistry.register(chunkS6J4BHB3Value3),
    {
      shared: chunkS6J4BHB3Value2,
      GitGraph: chunkS6J4BHB3Value3,
    }
  );
}
chunkFPAJGGOCF(chunkS6J4BHB3N, "createGitGraphServices");
export { chunkS6J4BHB3N, chunkS6J4BHB3T };
