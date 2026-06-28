// Restored from ref/webview/assets/chunk-67CJDMHE-B3_SAS71.js
// Chunk67CJDMHE chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27A,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunk67CJDMHEValue1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "GitGraphTokenBuilder");
    }
    constructor() {
      super(["gitGraph"]);
    }
  },
  chunk67CJDMHET = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunk67CJDMHEValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkK5T4RW27I(),
        "ValueConverter",
      ),
    },
  };
function chunk67CJDMHEN(chunk67CJDMHEParam1 = chunkK5T4RW27H) {
  let chunk67CJDMHEValue2 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunk67CJDMHEParam1),
      chunkK5T4RW27S,
    ),
    chunk67CJDMHEValue3 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunk67CJDMHEValue2,
      }),
      chunkK5T4RW27A,
      chunk67CJDMHET,
    );
  return (
    chunk67CJDMHEValue2.ServiceRegistry.register(chunk67CJDMHEValue3),
    {
      shared: chunk67CJDMHEValue2,
      GitGraph: chunk67CJDMHEValue3,
    }
  );
}
chunkK5T4RW27M(chunk67CJDMHEN, "createGitGraphServices");
export { chunk67CJDMHEN, chunk67CJDMHET };
