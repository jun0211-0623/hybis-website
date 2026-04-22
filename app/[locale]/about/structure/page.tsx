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
    title: `${dict.aboutPage.sections.organization.title} — Bitcoinology Lab`,
  };
}

export default async function StructurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const s = dict.aboutPage.sections.organization;

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
            <div className="flex flex-col items-center mb-10">
              <div className="bg-[#0E4A84]/10 border border-[#0E4A84]/30 rounded-2xl px-8 py-5 text-center mb-3">
                <p className="text-[12px] text-[#0E4A84] uppercase tracking-wider mb-1">
                  {s.directorRole}
                </p>
                <p className="text-[20px] font-bold text-[#1C1B1F]">
                  {s.director.name}
                </p>
                <p className="text-[13px] text-[#4A4A4F]">{s.director.dept}</p>
              </div>
              <div className="w-[1px] h-10 bg-[#DADADA]" />
              <div className="flex items-center">
                <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#DADADA] hidden lg:block" />
                <div className="w-2 h-2 rounded-full bg-[#DADADA]" />
                <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#DADADA] hidden lg:block" />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {s.groups.map((group, gi) => (
              <FadeIn key={group.title} delay={0.15 + gi * 0.08}>
                <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] overflow-hidden h-full">
                  <div className="bg-white border-b border-[#E5E5E7] px-6 py-4">
                    <h3 className="text-[15px] font-semibold text-[#1C1B1F] text-center">
                      {group.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {group.members.map((member) => (
                        <li
                          key={member.name}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0E4A84]/50 flex-shrink-0 mt-2" />
                          <div>
                            <p className="text-[14px] text-[#1C1B1F] font-medium">
                              {member.name}
                            </p>
                            {member.dept && (
                              <p className="text-[12px] text-[#6B7280]">
                                {member.dept}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
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
