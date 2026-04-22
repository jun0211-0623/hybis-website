import { sanityFetch, client } from "@/sanity/lib/client";
import { programBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

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

function backHref(locale: Locale) {
  return locale === defaultLocale ? "/#programs" : `/${locale}/#programs`;
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

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
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <DetailLayout
        backHref={backHref(locale)}
        backLabel={dict.programs.title}
        title={program.title}
        subtitle={program.subtitle}
        description={program.description}
        color={program.color}
        body={program.body}
      >
        {program.details && program.details.length > 0 && (
          <div className="mt-12 p-6 bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7]">
            <p className="text-[#6B7280] text-[13px] tracking-[0.08em] uppercase mb-4">
              {dict.detail.details}
            </p>
            <ul className="space-y-2.5">
              {program.details.map((detail: string) => (
                <li
                  key={detail}
                  className="flex items-center gap-3 text-[14px] text-[#3A3A3F]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: program.color || "#0E4A84" }}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DetailLayout>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
