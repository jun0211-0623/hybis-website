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
  // 예: "[학술세미나] 연세대·한양대 '한국인의 리걸 리터러시' 사업..."
  title: string;
  // 행사 일자. 예: "2026.01.23"
  date: string;
};

const photos: Photo[] = [
  { id: 3, src: "/gallery/photo-3.jpg", title: "비트코인 화폐철학 북콘서트 01", date: "2025.11.26" },
  { id: 2, src: "/gallery/photo-2.jpg", title: "비트코인 화폐철학 북콘서트 02", date: "2025.11.26" },
  { id: 4, src: "/gallery/photo-4.jpg", title: "비트코인 화폐철학 북콘서트 03", date: "2025.11.26" },
  { id: 6, src: "/gallery/photo-6.jpg", title: "최고위 총동문회 01", date: "2025.11.26" },
  { id: 5, src: "/gallery/photo-5.jpg", title: "최고위 총동문회 02", date: "2025.11.26" },
  { id: 1, src: "/gallery/photo-1.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
  { id: 7, src: "/gallery/photo-7.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
  { id: 8, src: "/gallery/photo-8.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
  { id: 9, src: "/gallery/photo-9.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
  { id: 10, src: "/gallery/photo-10.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
  { id: 11, src: "/gallery/photo-11.jpg", title: "제목을 입력하세요", date: "YYYY.MM.DD" },
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
            {photos.map((p, i) => (
              <FadeIn key={p.id} delay={0.03 + i * 0.03}>
                <article className="flex flex-col">
                  <div className="relative aspect-square rounded-xl overflow-hidden group">
                    <NextImage
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mt-4 text-[14px] sm:text-[15px] font-semibold leading-snug text-[#1C1B1F] line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#6B7280]">{p.date}</p>
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
