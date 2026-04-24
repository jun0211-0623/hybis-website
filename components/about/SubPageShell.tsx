"use client";

import Image from "next/image";
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
  subtitle,
  intro,
  backLabel,
  locale,
  showLogo = false,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  intro?: string;
  backLabel: string;
  locale: Locale;
  showLogo?: boolean;
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

        <div className="flex items-start justify-between gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#0E4A84]" />
                <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  {eyebrow}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-bold text-[#1C1B1F] leading-tight mb-4 tracking-[-0.02em] flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-[clamp(2rem,4vw,3.5rem)]">{title}</span>
                {subtitle && (
                  <span className="text-[clamp(1.05rem,1.8vw,1.5rem)] font-medium text-[#6B7280] tracking-[-0.01em]">
                    {subtitle}
                  </span>
                )}
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
          </div>

          {showLogo && (
            <FadeIn delay={0.1} className="hidden sm:block flex-shrink-0">
              <Image
                src="/brand/logo-full.png"
                alt="HY-Bitcoinology Lab"
                width={520}
                height={520}
                priority
                className="w-[140px] md:w-[180px] lg:w-[220px] h-auto"
              />
            </FadeIn>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {children}
    </div>
  );
}
