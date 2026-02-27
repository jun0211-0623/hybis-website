import { sanityFetch, client } from "@/sanity/lib/client";
import { resourceBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const resources = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "resource"]{ slug }`
    );
    return resources.map((r) => ({ slug: r.slug.current }));
  } catch {
    return [];
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await sanityFetch<{
    _id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[];
    fileUrl?: string;
  }>(resourceBySlugQuery, { slug });

  if (!resource) notFound();

  const categoryLabel =
    resource.category === "reports"
      ? "정책보고서"
      : resource.category === "newsletters"
      ? "뉴스레터"
      : "학술논문";

  return (
    <DetailLayout
      backHref="/#resources"
      backLabel="연구 자료"
      category={categoryLabel}
      date={resource.date}
      title={resource.title}
      description={resource.description}
      body={resource.body}
    >
      {resource.fileUrl && (
        <div className="mt-12">
          <a
            href={resource.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A0A0A] text-[14px] font-medium rounded-full hover:bg-[#E8EAED] transition-colors"
          >
            파일 다운로드
            <span>&darr;</span>
          </a>
        </div>
      )}
    </DetailLayout>
  );
}
