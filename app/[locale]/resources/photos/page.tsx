import NextImage from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const photos = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/photo-${i + 1}.jpg`,
}));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: `${locale === "en" ? "Photos" : "학술행사 사진"} — Bitcoinology Lab`,
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
        title={isKo ? "학술행사 사진" : "Event Photos"}
        intro={dict.gallery.body}
        backLabel={dict.aboutPage.backHome}
        locale={locale}
      >
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((p, i) => (
              <FadeIn key={p.id} delay={0.03 + i * 0.03}>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <NextImage
                    src={p.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
