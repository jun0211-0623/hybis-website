import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";
import type { PressItem } from "@/lib/i18n/press-data";

type NewsDict = {
  backHome: string;
  eyebrow: string;
  title: string;
  body: string;
  pressEyebrow: string;
  pressTitle: string;
  articleLink: string;
};

function homeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export default function NewsContent({
  dict,
  locale,
  pressItems,
}: {
  dict: NewsDict;
  locale: Locale;
  pressItems: PressItem[];
}) {
  return (
    <div className="bg-white pt-[80px]">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 pb-16 md:pt-12 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href={homeHref(locale)}
            className="text-[#6B7280] hover:text-[#0E4A84] text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> {dict.backHome}
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrow}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1C1B1F] leading-tight mb-4 tracking-[-0.02em]">
            {dict.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-12 h-1 rounded-full bg-[#0E4A84] mb-8" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[680px]">
            {dict.body}
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px] bg-[#0E4A84]" />
              <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {dict.pressEyebrow}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] tracking-[-0.02em] mb-10 md:mb-14">
              {dict.pressTitle}
            </h2>
          </FadeIn>

          <div className="flex flex-col divide-y divide-[#E5E5E7] border-y border-[#E5E5E7]">
            {pressItems.map((item, i) => (
              <FadeIn key={item.id} delay={0.05 + i * 0.05}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row gap-5 md:gap-8 py-8 md:py-10 hover:bg-[#F5F5F7]/60 transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10"
                >
                  <div
                    className="md:w-[200px] md:flex-shrink-0 flex md:flex-col items-start md:items-start justify-between md:justify-start gap-2"
                  >
                    <span
                      className="text-[12px] font-medium px-2.5 py-1 rounded-full w-fit"
                      style={{
                        color: item.color,
                        background: `${item.color}15`,
                      }}
                    >
                      {item.source}
                    </span>
                    <span className="text-[13px] font-mono text-[#6B7280]">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1C1B1F] leading-[1.4] mb-3 group-hover:text-[#0E4A84] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#4A4A4F] leading-[1.75] mb-4">
                      {item.summary}
                    </p>
                    <div className="flex items-center text-[13px] text-[#6B7280] group-hover:text-[#0E4A84] transition-colors">
                      {dict.articleLink}
                      <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
