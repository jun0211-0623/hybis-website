import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutContent from "./content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
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
    title: `${dict.aboutPage.title} — Bitcoinology Lab`,
  };
}

export default async function AboutPage({
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
      <AboutContent dict={dict.aboutPage} galleryDict={dict.gallery} locale={locale} />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
