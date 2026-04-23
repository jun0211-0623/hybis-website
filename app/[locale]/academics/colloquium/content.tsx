import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";
import type { ColloquiumItem } from "@/lib/i18n/colloquium-data";

type ColloquiumDict = {
  backHome: string;
  eyebrow: string;
  title: string;
  body: string;
  listEyebrow: string;
  listTitle: string;
  statusUpcoming: string;
  statusPast: string;
  topicLabel: string;
  speakerLabel: string;
  dateLabel: string;
  venueLabel: string;
  hostLabel: string;
  posterAlt: string;
};

function homeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export default function ColloquiumContent({
  dict,
  locale,
  items,
}: {
  dict: ColloquiumDict;
  locale: Locale;
  items: ColloquiumItem[];
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
                {dict.listEyebrow}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] tracking-[-0.02em] mb-10 md:mb-14">
              {dict.listTitle}
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-8 md:gap-12">
            {items.map((item, i) => {
              const statusLabel =
                item.status === "upcoming"
                  ? dict.statusUpcoming
                  : dict.statusPast;
              const statusColor =
                item.status === "upcoming" ? item.color : "#6B7280";

              return (
                <FadeIn key={item.id} delay={0.05 + i * 0.05}>
                  <article className="group grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-10 rounded-2xl border border-[#E5E5E7] bg-white p-5 md:p-6 hover:border-[#CFDCEB] hover:shadow-[0_12px_40px_-16px_rgba(14,74,132,0.18)] transition-all">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#F5F5F7]">
                      <Image
                        src={item.poster}
                        alt={`${item.topic} — ${dict.posterAlt}`}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 100vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2.5 mb-4">
                        <span
                          className="text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
                          style={{
                            color: statusColor,
                            background: `${statusColor}15`,
                          }}
                        >
                          {statusLabel}
                        </span>
                        <span className="text-[13px] font-mono text-[#6B7280]">
                          {item.date} · {item.time}
                        </span>
                      </div>

                      <h3 className="text-[22px] md:text-[26px] font-bold text-[#1C1B1F] leading-[1.3] mb-5 tracking-[-0.01em]">
                        {item.topic}
                      </h3>

                      <dl className="grid grid-cols-[80px_1fr] gap-y-3 gap-x-4 text-[14px]">
                        <dt className="text-[#6B7280] font-medium">
                          {dict.speakerLabel}
                        </dt>
                        <dd className="text-[#1C1B1F]">
                          <span className="font-semibold">{item.speaker}</span>
                          <span className="text-[#4A4A4F]">
                            {" "}
                            · {item.speakerRole}
                          </span>
                        </dd>

                        <dt className="text-[#6B7280] font-medium">
                          {dict.venueLabel}
                        </dt>
                        <dd className="text-[#1C1B1F]">{item.venue}</dd>

                        <dt className="text-[#6B7280] font-medium">
                          {dict.hostLabel}
                        </dt>
                        <dd className="text-[#4A4A4F]">{item.host}</dd>
                      </dl>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
