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
    title: `${dict.aboutPage.sections.mission.title} — Bitcoinology Lab`,
  };
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const s = dict.aboutPage.sections.mission;

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {s.items.map((item, i) => (
              <FadeIn key={item.num} delay={0.1 + i * 0.08}>
                <div className="bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-6 h-full hover:border-[#0E4A84]/40 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0E4A84]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0E4A84] text-[13px] font-bold">
                        {item.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[15px] text-[#1C1B1F] font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-[#4A4A4F] leading-[1.7]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
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
