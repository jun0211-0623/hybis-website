"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

type AboutDict = {
  eyebrow: string;
  title: string;
  body: string;
  coreResearchBadge: string;
  areas: {
    title: string;
    description: string;
    featured?: boolean;
  }[];
};

const spans = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
];

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-2.5 mb-4">
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#0E4A84]" />
              <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {dict.eyebrow}
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em]">
            {dict.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mb-14">
          <p className="text-[#4A4A4F] text-[16px] leading-relaxed max-w-[520px]">
            {dict.body}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {dict.areas.map((area, i) => (
            <StaggerItem key={area.title} className={spans[i] ?? ""}>
              <div
                className={`group rounded-2xl border p-6 h-full hover:-translate-y-0.5 transition-all duration-300 ${
                  area.featured
                    ? "bg-gradient-to-br from-[#E7EEF7] to-[#F5F8FC] border-[#CFDCEB] hover:border-[#0E4A84]/35 hover:shadow-xl hover:shadow-[#0E4A84]/10"
                    : "bg-[#F5F5F7] border-[#E5E5E7] hover:border-[#C4C4C8] hover:shadow-lg hover:shadow-[#0E4A84]/5"
                }`}
              >
                {area.featured && (
                  <span className="inline-block text-[10px] font-medium tracking-[0.08em] uppercase text-[#0E4A84] bg-[#0E4A84]/10 px-2.5 py-1 rounded-full mb-3">
                    {dict.coreResearchBadge}
                  </span>
                )}
                <h3
                  className={`font-semibold text-[#1C1B1F] mb-2.5 ${
                    area.featured ? "text-[22px]" : "text-[18px]"
                  }`}
                >
                  {area.title}
                </h3>
                <p
                  className={`text-[14px] text-[#4A4A4F] leading-[1.7] ${
                    area.featured ? "max-w-[480px]" : ""
                  }`}
                >
                  {area.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
