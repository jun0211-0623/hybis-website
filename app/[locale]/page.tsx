import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import JoinUsCta from "@/components/JoinUsCta";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

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
      <JoinUsCta
        dict={dict.footer.cta}
        email={dict.footer.contacts.email}
        locale={locale}
      />
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
