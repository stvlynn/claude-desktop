// Restored from ref/webview/assets/chunk-2KRD3SAO-Bdi3VHck.js
// Chunk2KRD3SAO chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27U,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunk2KRD3SAOValue1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "RadarTokenBuilder");
    }
    constructor() {
      super(["radar-beta"]);
    }
  },
  chunk2KRD3SAOT = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunk2KRD3SAOValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkK5T4RW27I(),
        "ValueConverter",
      ),
    },
  };
function chunk2KRD3SAON(chunk2KRD3SAOParam1 = chunkK5T4RW27H) {
  let chunk2KRD3SAOValue2 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunk2KRD3SAOParam1),
      chunkK5T4RW27S,
    ),
    chunk2KRD3SAOValue3 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunk2KRD3SAOValue2,
      }),
      chunkK5T4RW27U,
      chunk2KRD3SAOT,
    );
  return (
    chunk2KRD3SAOValue2.ServiceRegistry.register(chunk2KRD3SAOValue3),
    {
      shared: chunk2KRD3SAOValue2,
      Radar: chunk2KRD3SAOValue3,
    }
  );
}
chunkK5T4RW27M(chunk2KRD3SAON, "createRadarServices");
export { chunk2KRD3SAON, chunk2KRD3SAOT };
