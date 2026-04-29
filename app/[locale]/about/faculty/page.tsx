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
    title: `${dict.aboutPage.sections.faculty.title} — Bitcoinology Lab`,
  };
}

export default async function FacultyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const f = dict.aboutPage.sections.faculty;

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={f.eyebrow}
        title={f.title}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <FadeIn>
            <p className="text-[15px] lg:text-[16px] text-[#4A4A4F] leading-[1.7] max-w-[820px] mb-12">
              {f.intro}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {f.people.map((person, i) => (
              <FadeIn key={person.name} delay={0.1 + i * 0.06}>
                <article className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-6 lg:p-8 h-full flex flex-col hover:border-[#0E4A84]/30 transition-colors duration-200">
                  <div className="flex gap-5 lg:gap-6 mb-5">
                    <div className="relative w-[96px] h-[128px] lg:w-[110px] lg:h-[150px] flex-shrink-0 rounded-xl overflow-hidden bg-white border border-[#E5E5E7]">
                      {person.photo ? (
                        <NextImage
                          src={person.photo}
                          alt={person.name}
                          fill
                          sizes="110px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#C5C5C9] text-[11px]">
                          No Photo
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[18px] lg:text-[20px] font-bold text-[#1C1B1F] mb-1">
                        {person.name}
                      </h3>
                      <p className="text-[13px] text-[#0E4A84] font-medium mb-2">
                        {person.role}
                      </p>
                      <p className="text-[12px] lg:text-[13px] text-[#4A4A4F] leading-[1.5] mb-1">
                        {person.affiliation}
                      </p>
                      {person.field && (
                        <p className="text-[12px] text-[#6B7280] leading-[1.5]">
                          {person.field}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-[13px] lg:text-[14px] text-[#1C1B1F] leading-[1.7] mb-4">
                    {person.bio || (
                      <span className="text-[#9CA0A6] italic">
                        {f.placeholderBio}
                      </span>
                    )}
                  </p>

                  {person.works.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-[#E5E5E7]">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#0E4A84] font-medium mb-2">
                        {f.worksLabel}
                      </p>
                      <ul className="space-y-1">
                        {person.works.map((w) => (
                          <li
                            key={w}
                            className="text-[12px] lg:text-[13px] text-[#4A4A4F] leading-[1.5] flex gap-2"
                          >
                            <span className="text-[#0E4A84]/40">·</span>
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
