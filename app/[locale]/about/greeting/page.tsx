import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubPageShell from "@/components/about/SubPageShell";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type Paragraph = {
  type: string;
  text?: string;
  parts?: { text: string; strong?: boolean }[];
};

function renderParagraph(p: Paragraph, idx: number) {
  if (p.type === "plain") {
    return (
      <p key={idx} className="text-[16px] text-[#4A4A4F] leading-[1.8]">
        {p.text}
      </p>
    );
  }
  return (
    <p key={idx} className="text-[16px] text-[#4A4A4F] leading-[1.8]">
      {(p.parts ?? []).map((part, i) =>
        part.strong ? (
          <strong key={i} className="text-[#1C1B1F]">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: `${dict.aboutPage.sections.bitcoinology.title} — Bitcoinology Lab`,
  };
}

export default async function GreetingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const s = dict.aboutPage.sections.bitcoinology;

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
            <div className="max-w-[760px] space-y-5">
              {s.paragraphs.map(renderParagraph)}
              <div className="pt-6">
                <p className="text-[15px] text-[#1C1B1F] font-medium">
                  {s.director}
                </p>
                <p className="text-[13px] text-[#6B7280]">{s.directorRole}</p>
              </div>
            </div>
          </FadeIn>
        </section>
      </SubPageShell>
      <Footer dict={dict.footer} locale={locale} />
    </main>
  );
}
