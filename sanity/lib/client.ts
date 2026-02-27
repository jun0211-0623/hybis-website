import { createClient, type QueryParams } from "next-sanity";
import { sanityProjectId, sanityDataset, sanityApiVersion } from "../env";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
});

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
