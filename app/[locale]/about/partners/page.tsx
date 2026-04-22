import NextImage from "next/image";
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
    title: `${dict.aboutPage.sections.partners.title} — Bitcoinology Lab`,
  };
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const partners = dict.aboutPage.sections.partners;
  const sponsors = dict.aboutPage.sections.sponsors;

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={partners.eyebrow}
        title={partners.title}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partners.items.map((partner, i) => (
              <FadeIn key={partner.name} delay={0.1 + i * 0.08}>
                <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-8 flex flex-col items-center text-center hover:border-[#0E4A84]/40 transition-colors duration-200">
                  <div className="relative w-[260px] h-[110px] mb-5 flex items-center justify-center bg-white/90 rounded-xl p-4">
                    <NextImage
                      src={partner.image}
                      alt={partner.name}
                      width={260}
                      height={110}
                      className="object-contain max-h-[90px]"
                    />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#1C1B1F] mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-[13px] text-[#6B7280]">{partner.nameEn}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px] bg-[#0E4A84]" />
              <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {sponsors.eyebrow}
              </p>
            </div>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
              {sponsors.title}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[600px]">
            {sponsors.items.map((sponsor, i) => (
              <FadeIn key={sponsor.name} delay={0.1 + i * 0.08}>
                <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-8 flex flex-col items-center text-center hover:border-[#0E4A84]/40 transition-colors duration-200">
                  <div className="relative w-[160px] h-[70px] mb-5 flex items-center justify-center rounded-xl overflow-hidden">
                    <NextImage
                      src={sponsor.image}
                      alt={sponsor.name}
                      width={160}
                      height={70}
                      className="object-contain max-h-[70px]"
                    />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#1C1B1F] mb-1">
                    {sponsor.name}
                  </h3>
                  <p className="text-[13px] text-[#6B7280]">{sponsor.nameEn}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
