// Restored from ref/webview/assets/globals.d.ts
// @ts-nocheck

declare module "cytoscape-cose-bilkent" {
  import type cytoscape from "cytoscape";

  const cytoscapeCoseBilkent: (cy: typeof cytoscape) => void;
  export default cytoscapeCoseBilkent;
}

declare module "lodash/_*" {
  const lodashInternalModule: any;
  export default lodashInternalModule;
}

declare module "@segment/analytics-next/dist/cjs/plugins/ajs-destination" {
  export * from "@segment/analytics-next/dist/types/plugins/ajs-destination";
}

declare module "mongoose";
declare module "d3-format";
declare module "@dnd-kit/utilities";
declare module "@dnd-kit/core";
