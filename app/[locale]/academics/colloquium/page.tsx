import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ColloquiumContent from "./content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getColloquiumItems } from "@/lib/i18n/colloquium-data";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: `${dict.colloquiumPage.title} — Bitcoinology Lab`,
  };
}

export default async function ColloquiumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <ColloquiumContent
        dict={dict.colloquiumPage}
        locale={locale}
        items={getColloquiumItems(locale)}
      />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
