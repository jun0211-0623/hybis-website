import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JoinUsCta from "@/components/JoinUsCta";
import GraduateContent from "./content";
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
    title: `${dict.graduatePage.title} — Bitcoinology Lab`,
  };
}

export default async function GraduateProgramPage({
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
      <GraduateContent dict={dict.graduatePage} />
      <JoinUsCta
        dict={dict.footer.cta}
        email={dict.footer.contacts.email}
        locale={locale}
      />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
