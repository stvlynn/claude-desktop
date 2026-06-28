// Restored from ref/webview/assets/chunk-CIAEETIT-DnOj_Z7m.js
// ChunkCIAEETIT chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27P,
  chunkK5T4RW27S,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkCIAEETITValue1 = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "WardleyValueConverter");
    }
    runCustomConverter(
      chunkCIAEETITParam1,
      chunkCIAEETITParam2,
      chunkCIAEETITParam3,
    ) {
      switch (chunkCIAEETITParam1.name.toUpperCase()) {
        case "LINK_LABEL":
          return chunkCIAEETITParam2.substring(1).trim();
        default:
          return;
      }
    }
  },
  chunkCIAEETITT = {
    parser: {
      ValueConverter: chunkK5T4RW27M(
        () => new chunkCIAEETITValue1(),
        "ValueConverter",
      ),
    },
  };
function chunkCIAEETITN(chunkCIAEETITParam4 = chunkK5T4RW27H) {
  let chunkCIAEETITValue2 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkCIAEETITParam4),
      chunkK5T4RW27S,
    ),
    chunkCIAEETITValue3 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkCIAEETITValue2,
      }),
      chunkK5T4RW27P,
      chunkCIAEETITT,
    );
  return (
    chunkCIAEETITValue2.ServiceRegistry.register(chunkCIAEETITValue3),
    {
      shared: chunkCIAEETITValue2,
      Wardley: chunkCIAEETITValue3,
    }
  );
}
chunkK5T4RW27M(chunkCIAEETITN, "createWardleyServices");
export { chunkCIAEETITN, chunkCIAEETITT };
