import { sanityFetch, client } from "@/sanity/lib/client";
import { resourceBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

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

function categoryLabel(category: string, dict: { tabs: { report: string; paper: string } }) {
  if (category === "reports") return dict.tabs.report;
  if (category === "papers") return dict.tabs.paper;
  return category;
}

function backHref(locale: Locale) {
  return locale === defaultLocale ? "/#resources" : `/${locale}/#resources`;
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

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

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <DetailLayout
        backHref={backHref(locale)}
        backLabel={dict.resources.title}
        category={categoryLabel(resource.category, dict.resources)}
        date={resource.date}
        title={resource.title}
        description={resource.description}
        body={resource.body}
        emptyBodyText={dict.detail.emptyBody}
      >
        {resource.fileUrl && (
          <div className="mt-12">
            <a
              href={resource.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E4A84] text-white text-[14px] font-medium rounded-full hover:bg-[#0B3E70] transition-colors"
            >
              {dict.detail.downloadFile}
              <span>&darr;</span>
            </a>
          </div>
        )}
      </DetailLayout>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
