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
    title: `${dict.aboutPage.sections.history.title} — Bitcoinology Lab`,
  };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const s = dict.aboutPage.sections.history;

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
          <div className="max-w-[640px]">
            {s.items.map((item, i) => (
              <FadeIn key={item.date} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-6 relative">
                  {i < s.items.length - 1 && (
                    <div className="absolute left-[39px] top-8 bottom-0 w-[1px] bg-[#E5E5E7]" />
                  )}
                  <div className="w-[14px] h-[14px] rounded-full border-2 border-[#0E4A84] bg-white flex-shrink-0 mt-1.5 ml-[33px] relative z-10" />
                  <div className="pb-8">
                    <p className="text-[13px] font-mono text-[#0E4A84] mb-1">
                      {item.date}
                    </p>
                    <p className="text-[15px] text-[#1C1B1F] font-medium">
                      {item.event}
                    </p>
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
