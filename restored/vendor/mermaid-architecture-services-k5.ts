// Restored from ref/webview/assets/chunk-7N4EOEYR-BEkdQLCb.js
// Chunk7N4EOEYR chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27R,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunk7N4EOEYRValue1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "ArchitectureTokenBuilder");
    }
    constructor() {
      super(["architecture"]);
    }
  },
  chunk7N4EOEYRValue2 = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "ArchitectureValueConverter");
    }
    runCustomConverter(
      chunk7N4EOEYRParam1,
      chunk7N4EOEYRParam2,
      chunk7N4EOEYRParam3,
    ) {
      if (chunk7N4EOEYRParam1.name === "ARCH_ICON")
        return chunk7N4EOEYRParam2.replace(/[()]/g, "").trim();
      if (chunk7N4EOEYRParam1.name === "ARCH_TEXT_ICON")
        return chunk7N4EOEYRParam2.replace(/["()]/g, "");
      if (chunk7N4EOEYRParam1.name === "ARCH_TITLE") {
        let chunk7N4EOEYRValue3 = chunk7N4EOEYRParam2
          .replace(/^\[|]$/g, "")
          .trim();
        return (
          ((chunk7N4EOEYRValue3.startsWith('"') &&
            chunk7N4EOEYRValue3.endsWith('"')) ||
            (chunk7N4EOEYRValue3.startsWith("'") &&
              chunk7N4EOEYRValue3.endsWith("'"))) &&
            ((chunk7N4EOEYRValue3 = chunk7N4EOEYRValue3.slice(1, -1)),
            (chunk7N4EOEYRValue3 = chunk7N4EOEYRValue3
              .replace(/\\"/g, '"')
              .replace(/\\'/g, "'"))),
          chunk7N4EOEYRValue3.trim()
        );
      }
    }
  },
  chunk7N4EOEYRT = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunk7N4EOEYRValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunk7N4EOEYRValue2(),
        "ValueConverter",
      ),
    },
  };
function chunk7N4EOEYRN(chunk7N4EOEYRParam4 = chunkK5T4RW27H) {
  let chunk7N4EOEYRValue4 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunk7N4EOEYRParam4),
      chunkK5T4RW27S,
    ),
    chunk7N4EOEYRValue5 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunk7N4EOEYRValue4,
      }),
      chunkK5T4RW27R,
      chunk7N4EOEYRT,
    );
  return (
    chunk7N4EOEYRValue4.ServiceRegistry.register(chunk7N4EOEYRValue5),
    {
      shared: chunk7N4EOEYRValue4,
      Architecture: chunk7N4EOEYRValue5,
    }
  );
}
chunkK5T4RW27M(chunk7N4EOEYRN, "createArchitectureServices");
export { chunk7N4EOEYRN, chunk7N4EOEYRT };
