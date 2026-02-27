import { sanityFetch, client } from "@/sanity/lib/client";
import { programBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const programs = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "program"]{ slug }`
    );
    return programs.map((p) => ({ slug: p.slug.current }));
  } catch {
    return [];
  }
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await sanityFetch<{
    _id: string;
    title: string;
    subtitle?: string;
    description: string;
    details?: string[];
    color: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[];
  }>(programBySlugQuery, { slug });

  if (!program) notFound();

  return (
    <DetailLayout
      backHref="/#programs"
      backLabel="프로그램"
      title={program.title}
      subtitle={program.subtitle}
      description={program.description}
      color={program.color}
      body={program.body}
    >
      {program.details && program.details.length > 0 && (
        <div className="mt-12 p-6 bg-[#141414] rounded-2xl border border-[#2A2A2A]">
          <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-4">
            세부 사항
          </p>
          <ul className="space-y-2.5">
            {program.details.map((detail: string) => (
              <li
                key={detail}
                className="flex items-center gap-3 text-[14px] text-[#9AA0A6]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: program.color || "#4285F4" }}
                />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </DetailLayout>
  );
}
