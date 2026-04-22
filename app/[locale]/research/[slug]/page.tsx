import { sanityFetch, client } from "@/sanity/lib/client";
import { publicationBySlugQuery } from "@/sanity/lib/queries";
import DetailLayout from "@/components/DetailLayout";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

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

function backHref(locale: Locale) {
  return locale === defaultLocale ? "/#research" : `/${locale}/#research`;
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

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
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <DetailLayout
        backHref={backHref(locale)}
        backLabel={dict.research.title}
        category={publication.category}
        date={publication.year}
        title={publication.title}
        subtitle={publication.titleEn}
        description={publication.description}
        color={publication.color}
        body={publication.body}
        emptyBodyText={dict.detail.emptyBody}
      />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
