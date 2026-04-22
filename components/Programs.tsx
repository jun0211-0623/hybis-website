"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type ProgramDetails = {
  title: string;
  subtitle: string;
  description: string;
  highlights: { label: string; value: string }[];
};

type ProgramsDict = {
  eyebrow: string;
  title: string;
  tabs: { executive: string; graduate: string };
  detailCta: string;
  deptCta: string;
  executive: ProgramDetails;
  graduate: ProgramDetails;
};

type TabKey = "executive" | "graduate";

function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export default function Programs({
  dict,
  locale,
}: {
  dict: ProgramsDict;
  locale: Locale;
}) {
  const [activeTab, setActiveTab] = useState<TabKey>("executive");
  const current = dict[activeTab];
  const detailHref =
    activeTab === "executive"
      ? localePath("/programs/executive", locale)
      : localePath("/programs/graduate", locale);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#0E4A84]" />
            <span className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrow}
            </span>
            <div className="w-8 h-[2px] bg-[#0E4A84]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em] text-center mb-12 max-w-[600px] mx-auto">
            {dict.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
            {(["executive", "graduate"] as const).map((key) => (
              <GlassButton
                key={key}
                size="sm"
                onClick={() => setActiveTab(key)}
                className={activeTab === key ? "glass-button-active" : ""}
              >
                {dict.tabs[key]}
              </GlassButton>
            ))}
          </div>
        </FadeIn>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl border border-[#E5E5E7] shadow-[0_10px_40px_-20px_rgba(14,74,132,0.18)] p-5 sm:p-8 lg:p-10 max-w-[800px] mx-auto">
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.08em] uppercase mb-3 font-[family-name:var(--font-display)]">
              {current.subtitle}
            </p>
            <h3 className="text-[22px] lg:text-[26px] font-bold text-[#1C1B1F] mb-4">
              {current.title}
            </h3>
            <p className="text-[15px] text-[#4A4A4F] leading-[1.7] mb-8">
              {current.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {current.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-4"
                >
                  <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-[14px] text-[#1C1B1F] font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link href={detailHref}>
                <GlassButton size="default">{dict.detailCta}</GlassButton>
              </Link>
              <a
                href="https://bitcoinphilosophy.hanyang.ac.kr/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton size="default">{dict.deptCta}</GlassButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
