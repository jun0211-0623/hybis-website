import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { getPapersAndReports } from "@/lib/i18n/resource-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: `${dict.resources.tabs.report} — Bitcoinology Lab`,
  };
}

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const r = dict.resources;
  const reports = getPapersAndReports(locale).filter(
    (i) => i.categoryKey === "report",
  );

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow="Reports"
        title={r.tabs.report}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((item, i) => (
              <FadeIn key={item.id} delay={0.05 + i * 0.05}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl border border-[#E5E5E7] bg-white overflow-hidden hover:border-[#0E4A84]/40 hover:shadow-xl hover:shadow-[#0E4A84]/10 transition-all duration-300"
                >
                  <div
                    className="aspect-[3/2] relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 50%, ${item.color}20 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                          style={{
                            color: item.color,
                            background: `${item.color}20`,
                          }}
                        >
                          {r.tabs.report}
                        </span>
                        <span className="text-[12px] font-mono text-[#6B7280]">
                          {item.date}
                        </span>
                      </div>
                      <div>
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${item.color}15` }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={item.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-[16px] font-semibold text-[#1C1B1F] mb-2 group-hover:text-[#0E4A84] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#4A4A4F] leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          {reports.length === 0 && (
            <p className="text-center text-[#6B7280] py-10">
              {dict.research.emptyMessage}
            </p>
          )}
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
