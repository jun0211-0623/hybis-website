import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import { sanityProjectId, sanityDataset } from "./sanity/env";

export default defineConfig({
  name: "bitcoinology-lab",
  title: "Bitcoinology Lab 관리자",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
