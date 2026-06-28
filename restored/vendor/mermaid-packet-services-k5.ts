// Restored from ref/webview/assets/chunk-FOC6F5B3-BgcFtwB_.js
// ChunkFOC6F5B3 chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27C,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkFOC6F5B3Value1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "PacketTokenBuilder");
    }
    constructor() {
      super(["packet"]);
    }
  },
  chunkFOC6F5B3T = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunkFOC6F5B3Value1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkK5T4RW27I(),
        "ValueConverter",
      ),
    },
  };
function chunkFOC6F5B3N(chunkFOC6F5B3Param1 = chunkK5T4RW27H) {
  let chunkFOC6F5B3Value2 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkFOC6F5B3Param1),
      chunkK5T4RW27S,
    ),
    chunkFOC6F5B3Value3 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkFOC6F5B3Value2,
      }),
      chunkK5T4RW27C,
      chunkFOC6F5B3T,
    );
  return (
    chunkFOC6F5B3Value2.ServiceRegistry.register(chunkFOC6F5B3Value3),
    {
      shared: chunkFOC6F5B3Value2,
      Packet: chunkFOC6F5B3Value3,
    }
  );
}
chunkK5T4RW27M(chunkFOC6F5B3N, "createPacketServices");
export { chunkFOC6F5B3N, chunkFOC6F5B3T };
