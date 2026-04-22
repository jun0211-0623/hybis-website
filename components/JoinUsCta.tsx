"use client";

import { FadeIn } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type CtaDict = {
  eyebrow: string;
  title: string;
  body: string;
  contact: string;
  viewPrograms: string;
};

export default function JoinUsCta({
  dict,
  email,
  locale,
}: {
  dict: CtaDict;
  email: string;
  locale: Locale;
}) {
  const programsHref =
    locale === defaultLocale ? "/#programs" : `/${locale}/#programs`;

  return (
    <section id="contact" className="bg-[#1C1B1F] relative overflow-hidden">
      <div className="section-divider-dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5B9BD5]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="w-8 h-[2px] bg-[#5B9BD5]" />
            <span className="text-[#5B9BD5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrow}
            </span>
            <div className="w-8 h-[2px] bg-[#5B9BD5]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
            {dict.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-white/70 text-[16px] mb-10 max-w-[420px] mx-auto leading-relaxed">
            {dict.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            <a href={`mailto:${email}`}>
              <GlassButton size="default" className="glass-on-dark">
                {dict.contact}
              </GlassButton>
            </a>
            <a href={programsHref}>
              <GlassButton size="default" className="glass-on-dark">
                {dict.viewPrograms}
              </GlassButton>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
