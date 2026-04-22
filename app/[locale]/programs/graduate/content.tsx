"use client";

import { FadeIn } from "@/components/FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

type GraduateDict = {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  purposeEyebrow: string;
  purposeTitle: string;
  purposeBody: string;
  goalsEyebrow: string;
  goalsTitle: string;
  goals: string[];
  curriculumEyebrow: string;
  curriculumTitle: string;
  curriculum: Record<string, Record<string, string[]>>;
  requirementsEyebrow: string;
  requirementsTitle: string;
  requirements: { label: string; value: string }[];
  careersEyebrow: string;
  careersTitle: string;
  careers: { title: string; desc: string }[];
  careersBody: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  phoneCta: string;
  deptCta: string;
};

export default function GraduateContent({ dict }: { dict: GraduateDict }) {
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
          <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[680px]">
            {dict.intro}
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {dict.purposeEyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-6 tracking-[-0.02em]">
            {dict.purposeTitle}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#4A4A4F] text-[16px] leading-[1.8] max-w-[680px] mb-8">
            {dict.purposeBody}
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {dict.goalsEyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {dict.goalsTitle}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dict.goals.map((goal, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <div className="bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-6 h-full hover:border-[#0E4A84]/40 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0E4A84]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0E4A84] text-[13px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4A4A4F] leading-[1.7]">
                    {goal}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

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

        <div className="space-y-6">
          {Object.entries(dict.curriculum).map(([semester, years]) => (
            <FadeIn key={semester} delay={0.1}>
              <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] overflow-hidden">
                <div className="bg-white border-b border-[#E5E5E7] px-6 py-4">
                  <h3 className="text-[16px] font-semibold text-[#1C1B1F]">
                    {semester}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E7]">
                  {Object.entries(years).map(([year, subjects]) => (
                    <div key={year} className="p-6">
                      <p className="text-[12px] text-[#0E4A84] font-medium uppercase tracking-wider mb-4">
                        {year}
                      </p>
                      <ul className="space-y-3">
                        {subjects.map((subject) => (
                          <li
                            key={subject}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0E4A84]/50 flex-shrink-0" />
                            <span className="text-[14px] text-[#4A4A4F]">
                              {subject}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {dict.requirementsEyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {dict.requirementsTitle}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {dict.requirements.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.06}>
              <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {item.label}
                </p>
                <p className="text-[15px] text-[#1C1B1F] font-medium">
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {dict.careersEyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {dict.careersTitle}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {dict.careers.map((career, i) => (
            <FadeIn key={career.title} delay={0.1 + i * 0.06}>
              <div className="bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-5 hover:border-[#0E4A84]/40 transition-colors duration-200">
                <h4 className="text-[15px] text-[#1C1B1F] font-medium mb-1">
                  {career.title}
                </h4>
                <p className="text-[13px] text-[#4A4A4F]">{career.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-[14px] text-[#6B7280] mt-6 max-w-[600px]">
            {dict.careersBody}
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <FadeIn>
          <h3 className="text-[24px] font-bold text-[#1C1B1F] mb-4">
            {dict.contactTitle}
          </h3>
          <p className="text-[#4A4A4F] text-[15px] mb-8 max-w-[400px] mx-auto">
            {dict.contactBody}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:iamyam@hanyang.ac.kr">
              <GlassButton size="default">{dict.contactCta}</GlassButton>
            </a>
            <a href="tel:02-2220-0751">
              <GlassButton size="default">{dict.phoneCta}</GlassButton>
            </a>
            <a
              href="https://bitcoinphilosophy.hanyang.ac.kr/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlassButton size="default">{dict.deptCta}</GlassButton>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
