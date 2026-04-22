import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { monographs, papersAndReports } from "@/lib/i18n/resource-data";

export default async function Home({
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
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Programs dict={dict.programs} locale={locale} />
      <Resources
        dict={dict.resources}
        monographs={monographs}
        papersAndReports={papersAndReports}
      />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
