import { createClient, type QueryParams } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// a-z, 0-9, dashes만 허용
const isValidProjectId = /^[a-z0-9-]+$/.test(projectId);

export const isSanityConfigured = isValidProjectId;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
