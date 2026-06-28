// Restored from ref/webview/assets/chunk-ORNJ4GCN-Dtggxgv1.js
// ChunkORNJ4GCN chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27D,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var chunkORNJ4GCNValue1 = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "TreeViewValueConverter");
    }
    runCustomConverter(
      chunkORNJ4GCNParam1,
      chunkORNJ4GCNParam2,
      chunkORNJ4GCNParam3,
    ) {
      if (chunkORNJ4GCNParam1.name === "INDENTATION")
        return chunkORNJ4GCNParam2?.length || 0;
      if (chunkORNJ4GCNParam1.name === "STRING2")
        return chunkORNJ4GCNParam2.substring(1, chunkORNJ4GCNParam2.length - 1);
    }
  },
  chunkORNJ4GCNValue2 = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "TreeViewTokenBuilder");
    }
    constructor() {
      super(["treeView-beta"]);
    }
  },
  chunkORNJ4GCNT = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new chunkORNJ4GCNValue2(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new chunkORNJ4GCNValue1(),
        "ValueConverter",
      ),
    },
  };
function chunkORNJ4GCNN(chunkORNJ4GCNParam4 = chunkK5T4RW27H) {
  let chunkORNJ4GCNValue3 = chunkK5T4RW27G(
      chunkK5T4RW27V(chunkORNJ4GCNParam4),
      chunkK5T4RW27S,
    ),
    chunkORNJ4GCNValue4 = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: chunkORNJ4GCNValue3,
      }),
      chunkK5T4RW27D,
      chunkORNJ4GCNT,
    );
  return (
    chunkORNJ4GCNValue3.ServiceRegistry.register(chunkORNJ4GCNValue4),
    {
      shared: chunkORNJ4GCNValue3,
      TreeView: chunkORNJ4GCNValue4,
    }
  );
}
chunkK5T4RW27M(chunkORNJ4GCNN, "createTreeViewServices");
export { chunkORNJ4GCNN, chunkORNJ4GCNT };
