import NextImage from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type Photo = {
  id: number;
  src: string;
  titleKo: string;
  titleEn: string;
  dateKo: string;
  dateEn: string;
};

const photos: Photo[] = [
  {
    id: 100,
    src: "/gallery/photo-colloq-ha-taekyung.jpg",
    titleKo: "콜로퀴움 — 하태경 원장 강연",
    titleEn: "Colloquium — Lecture by President Ha Tae-kyung",
    dateKo: "2026.04.27",
    dateEn: "April 27, 2026",
  },
  {
    id: 3,
    src: "/gallery/photo-3.jpg",
    titleKo: "비트코인 화폐철학 북콘서트 01",
    titleEn: "Bitcoin and Monetary Philosophy Book Concert 01",
    dateKo: "2025.11.26",
    dateEn: "November 26, 2025",
  },
  {
    id: 2,
    src: "/gallery/photo-2.jpg",
    titleKo: "비트코인 화폐철학 북콘서트 02",
    titleEn: "Bitcoin and Monetary Philosophy Book Concert 02",
    dateKo: "2025.11.26",
    dateEn: "November 26, 2025",
  },
  {
    id: 4,
    src: "/gallery/photo-4.jpg",
    titleKo: "비트코인 화폐철학 북콘서트 03",
    titleEn: "Bitcoin and Monetary Philosophy Book Concert 03",
    dateKo: "2025.11.26",
    dateEn: "November 26, 2025",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: `${locale === "en" ? "Photos" : "행사 사진"} — Bitcoinology Lab`,
  };
}

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const isKo = locale === "ko";

  return (
    <main>
      <Navigation dict={dict.nav} locale={locale} />
      <SubPageShell
        eyebrow={dict.gallery.eyebrow}
        title={isKo ? "행사 사진" : "Event Photos"}
        intro={dict.gallery.body}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-5 sm:gap-y-12">
            {photos.map((p, i) => {
              const title = isKo ? p.titleKo : p.titleEn;
              const date = isKo ? p.dateKo : p.dateEn;
              return (
                <FadeIn key={p.id} delay={0.03 + i * 0.03}>
                  <article className="flex flex-col">
                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                      <NextImage
                        src={p.src}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="mt-4 text-[14px] sm:text-[15px] font-semibold leading-snug text-[#1C1B1F] line-clamp-2">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#6B7280]">{date}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
