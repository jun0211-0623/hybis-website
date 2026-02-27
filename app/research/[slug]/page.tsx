import { sanityFetch, client } from "@/sanity/lib/client";
import { publicationBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const publications = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "publication"]{ slug }`
    );
    return publications.map((p) => ({ slug: p.slug.current }));
  } catch {
    return [];
  }
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = await sanityFetch<{
    _id: string;
    title: string;
    titleEn?: string;
    category: string;
    year: string;
    description: string;
    color: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[];
  }>(publicationBySlugQuery, { slug });

  if (!publication) notFound();

  return (
    <DetailLayout
      backHref="/#research"
      backLabel="연구 성과"
      category={publication.category}
      date={publication.year}
      title={publication.title}
      subtitle={publication.titleEn}
      description={publication.description}
      color={publication.color}
      body={publication.body}
    />
  );
}
