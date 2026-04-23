import NextImage from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { getMonographs, formatMonographDate } from "@/lib/i18n/resource-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: `${dict.resources.tabs.monograph} — Bitcoinology Lab`,
  };
}

export default async function MonographsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const r = dict.resources;
  const m = dict.monographs;
  const monographs = getMonographs(locale);

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={m.eyebrow}
        title={r.tabs.monograph}
        intro={m.body}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monographs.map((book, i) => (
              <FadeIn key={book.id} delay={0.05 + i * 0.05}>
                <div className="group rounded-2xl border border-[#E5E5E7] bg-white overflow-hidden hover:border-[#0E4A84]/40 hover:shadow-xl hover:shadow-[#0E4A84]/10 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-[240px] lg:h-[280px] overflow-hidden bg-gradient-to-b from-[#F5F5F7] to-[#ECECEF] flex items-center justify-center">
                    <div className="relative w-[130px] lg:w-[150px] h-[190px] lg:h-[220px] group-hover:scale-[1.03] transition-transform duration-500">
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full blur-xl bg-[#0E4A84]/20" />
                      <NextImage
                        src={book.image}
                        alt={book.title}
                        fill
                        sizes="(max-width: 640px) 130px, 150px"
                        className="object-cover rounded-sm shadow-2xl"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 border border-[#E5E5E7]">
                      <span className="text-[12px] font-mono text-[#1C1B1F]">
                        {formatMonographDate(book, locale)}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 lg:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[11px] font-medium text-[#0E4A84] bg-[#0E4A84]/10 px-2.5 py-1 rounded-full">
                        {m.badge}
                      </span>
                      <span className="text-[12px] text-[#6B7280]">
                        {book.author}
                        {m.authorSuffix}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-semibold text-[#1C1B1F] mb-1">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-[14px] text-[#6B7280] italic mb-3">
                        {book.subtitle}
                      </p>
                    )}
                    <p className="text-[14px] text-[#4A4A4F] leading-relaxed mb-4">
                      {book.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#E5E5E7] space-y-1">
                      {book.publisher && (
                        <p className="text-[12px] text-[#6B7280]">
                          {book.publisher}
                        </p>
                      )}
                      <p className="text-[12px] text-[#6B7280] font-mono">
                        {m.isbnPrefix} {book.isbn}
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
