"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

function homeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export default function SubPageShell({
  eyebrow,
  title,
  intro,
  backLabel,
  locale,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  backLabel: string;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white pt-[80px]">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-10 lg:pt-20 lg:pb-14">
        <FadeIn>
          <Link
            href={homeHref(locale)}
            className="text-[#6B7280] hover:text-[#0E4A84] text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> {backLabel}
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {eyebrow}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1C1B1F] leading-tight mb-4 tracking-[-0.02em]">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-12 h-1 rounded-full bg-[#0E4A84] mb-8" />
        </FadeIn>

        {intro && (
          <FadeIn delay={0.25}>
            <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[760px]">
              {intro}
            </p>
          </FadeIn>
        )}
      </section>

      <div className="section-divider" />

      {children}
    </div>
  );
}
