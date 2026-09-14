import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getConferenceItems } from "@/lib/i18n/conference-data";
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
    title: `${dict.internationalConferencePage.title} — Bitcoinology Lab`,
  };
}

export default async function InternationalConferencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const p = dict.internationalConferencePage;
  const conferences = getConferenceItems(locale);

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={p.eyebrow}
        title={p.title}
        backLabel={p.backHome}
        locale={locale}
      >
        {conferences.map((conf) => (
          <section
            key={conf.id}
            className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24"
          >
            <FadeIn>
              <article className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-8 md:gap-12">
                <div className="relative w-full aspect-[891/1260] overflow-hidden rounded-xl border border-[#E5E5E7] bg-[#F5F5F7]">
                  <Image
                    src={conf.poster}
                    alt={`${conf.title} ${p.posterAlt}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-[#0E4A84] text-[13px] font-medium mb-3">
                    {conf.label}
                  </p>
                  <h2 className="text-[26px] md:text-[34px] font-bold text-[#1C1B1F] leading-[1.25] tracking-[-0.02em] mb-2">
                    {conf.title}
                  </h2>
                  {conf.subtitle && (
                    <p className="text-[16px] md:text-[18px] text-[#6B7280] leading-snug">
                      {conf.subtitle}
                    </p>
                  )}

                  <dl className="mt-8 grid grid-cols-[80px_1fr] gap-y-3 gap-x-4 text-[15px]">
                    <dt className="text-[#6B7280] font-medium">{p.dateLabel}</dt>
                    <dd className="text-[#1C1B1F]">{conf.date}</dd>

                    <dt className="text-[#6B7280] font-medium">{p.venueLabel}</dt>
                    <dd className="text-[#1C1B1F]">{conf.venue}</dd>

                    <dt className="text-[#6B7280] font-medium">{p.keynoteLabel}</dt>
                    <dd className="text-[#1C1B1F]">
                      <span className="font-semibold">{conf.keynote.name}</span>
                      <span className="text-[#4A4A4F]">
                        {" "}
                        · {conf.keynote.affiliation}, {conf.keynote.role}
                      </span>
                    </dd>

                    <dt className="text-[#6B7280] font-medium">{p.hostLabel}</dt>
                    <dd className="text-[#4A4A4F]">{conf.host}</dd>

                    <dt className="text-[#6B7280] font-medium">{p.contactLabel}</dt>
                    <dd>
                      <a
                        href={`mailto:${conf.contact}`}
                        className="text-[#0E4A84] hover:underline"
                      >
                        {conf.contact}
                      </a>
                    </dd>
                  </dl>
                </div>
              </article>
            </FadeIn>

            <div className="mt-16 md:mt-20">
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-[2px] bg-[#0E4A84]" />
                  <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                    {p.scheduleEyebrow}
                  </p>
                </div>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] tracking-[-0.02em] mb-10">
                  {p.scheduleTitle}
                </h2>
              </FadeIn>

              <div className="flex flex-col gap-12">
                {conf.days.map((day) => (
                  <FadeIn key={day.label}>
                    <div>
                      <h3 className="flex items-baseline gap-3 pb-3 border-b-2 border-[#0E4A84]">
                        <span className="text-[#0E4A84] text-[20px] font-bold">
                          {day.label}
                        </span>
                        <span className="text-[#1C1B1F] text-[18px] font-semibold">
                          {day.date}
                        </span>
                      </h3>

                      {day.sessions.map((session, i) => (
                        <div key={i} className="mt-6">
                          {session.title && (
                            <p className="text-[15px] md:text-[16px] font-semibold text-[#1C1B1F] mb-1">
                              {session.title}
                            </p>
                          )}
                          <ul className="divide-y divide-[#EDEDEF]">
                            {session.entries.map((entry) => (
                              <li
                                key={entry.time}
                                className="grid grid-cols-[104px_1fr] md:grid-cols-[140px_1fr] gap-4 py-3 text-[14px] md:text-[15px]"
                              >
                                <span className="font-mono text-[#6B7280]">
                                  {entry.time}
                                </span>
                                {entry.speaker ? (
                                  <div>
                                    <p className="font-semibold text-[#1C1B1F] leading-snug">
                                      {entry.title}
                                    </p>
                                    <p className="text-[#4A4A4F] mt-1">
                                      {entry.speaker} · {entry.affiliation}
                                    </p>
                                  </div>
                                ) : (
                                  <span className="text-[#6B7280]">{entry.title}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        ))}
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
