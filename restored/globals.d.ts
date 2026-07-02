declare module "cytoscape-cose-bilkent" {
  import type cytoscape from "cytoscape";

  const cytoscapeCoseBilkent: (cy: typeof cytoscape) => void;
  export default cytoscapeCoseBilkent;
}
