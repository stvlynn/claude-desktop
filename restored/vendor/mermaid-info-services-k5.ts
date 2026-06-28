// Restored from ref/webview/assets/chunk-KGLVRYIC-DZY-IxHR.js
// ChunkKGLVRYIC chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27O,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkKGLVRYICValue1 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "InfoTokenBuilder");
    }
    constructor() {
      super(["info", "showInfo"]);
    }
  },
  chunkKGLVRYICT = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunkKGLVRYICValue1(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkK5T4RW27I(),
        "ValueConverter",
      ),
    },
  };
function chunkKGLVRYICN(chunkKGLVRYICParam1 = chunkK5T4RW27H) {
  let chunkKGLVRYICValue2 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkKGLVRYICParam1),
      chunkK5T4RW27S,
    ),
    chunkKGLVRYICValue3 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkKGLVRYICValue2,
      }),
      chunkK5T4RW27O,
      chunkKGLVRYICT,
    );
  return (
    chunkKGLVRYICValue2.ServiceRegistry.register(chunkKGLVRYICValue3),
    {
      shared: chunkKGLVRYICValue2,
      Info: chunkKGLVRYICValue3,
    }
  );
}
chunkK5T4RW27M(chunkKGLVRYICN, "createInfoServices");
export { chunkKGLVRYICN, chunkKGLVRYICT };
