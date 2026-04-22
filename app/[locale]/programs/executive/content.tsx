"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { GlassButton } from "@/components/ui/glass-button";
import type { FacultyItem } from "@/lib/i18n/faculty-data";

type ExecutiveDict = {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  stats: { label: string; value: string }[];
  curriculumEyebrow: string;
  curriculumTitle: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
};

export default function ExecutiveContent({
  dict,
  lecturers,
}: {
  dict: ExecutiveDict;
  lecturers: FacultyItem[];
}) {
  return (
    <div className="bg-white pt-[80px]">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <FadeIn>
          <button
            onClick={() => history.back()}
            className="text-[#6B7280] hover:text-[#0E4A84] text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> {dict.back}
          </button>
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
          <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[680px] mb-6">
            {dict.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            {dict.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-[#E5E5E7] rounded-xl px-5 py-3"
              >
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-0.5">
                  {s.label}
                </p>
                <p className="text-[15px] text-[#1C1B1F] font-medium">{s.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* Curriculum */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {dict.curriculumEyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {dict.curriculumTitle}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lecturers.map((lecturer, i) => (
            <motion.div
              key={lecturer.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
            >
              <div className="group bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-5 hover:border-[#0E4A84]/40 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0E4A84]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#0E4A84] text-[12px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[15px] text-[#1C1B1F] font-medium mb-1">
                      {lecturer.topic}
                    </p>
                    <p className="text-[13px] text-[#4A4A4F]">{lecturer.name}</p>
                    <p className="text-[12px] text-[#6B7280]">{lecturer.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <FadeIn>
          <h3 className="text-[24px] font-bold text-[#1C1B1F] mb-4">
            {dict.contactTitle}
          </h3>
          <p className="text-[#4A4A4F] text-[15px] mb-8 max-w-[400px] mx-auto">
            {dict.contactBody}
          </p>
          <a href="mailto:iamyam@hanyang.ac.kr">
            <GlassButton size="default">{dict.contactCta}</GlassButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
