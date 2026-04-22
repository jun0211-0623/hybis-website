import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
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
    title: `${dict.aboutPage.sections.contact.title} — Bitcoinology Lab`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const s = dict.aboutPage.sections.contact;

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={s.eyebrow}
        title={s.title}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
              <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {s.email}
                </p>
                <a
                  href="mailto:iamyam@hanyang.ac.kr"
                  className="text-[15px] text-[#1C1B1F] font-medium hover:text-[#0E4A84] transition-colors"
                >
                  iamyam@hanyang.ac.kr
                </a>
              </div>
              <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {s.phone}
                </p>
                <a
                  href="tel:02-2220-0751"
                  className="text-[15px] text-[#1C1B1F] font-medium hover:text-[#0E4A84] transition-colors"
                >
                  02-2220-0751
                </a>
              </div>
              <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {s.address}
                </p>
                <p className="text-[15px] text-[#1C1B1F] font-medium">
                  {s.addressValue}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7]">
              <iframe
                title="Hanyang University Location"
                src="https://maps.google.com/maps?q=%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EC%84%9C%EC%9A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[420px] md:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
