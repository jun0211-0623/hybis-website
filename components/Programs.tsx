"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const programs = [
  {
    number: "01",
    title: "비트코인 화폐철학 심화과정",
    subtitle: "Advanced Course",
    description:
      "비트코인의 기술적 구조부터 화폐철학적 함의까지, 전문가 수준의 심층 이해를 목표로 합니다. 경제학자, 철학자, 개발자, 법학자가 함께 참여하는 학제적 토론 중심 과정입니다.",
    details: [
      "매 학기 개강 (봄·가을)",
      "총 12주 과정",
      "소규모 세미나 형식",
      "수료증 발급",
    ],
    cta: "과정 자세히 보기",
  },
  {
    number: "02",
    title: "대학원 협동과정",
    subtitle: "Graduate Program",
    description:
      "한양대학교 대학원과 연계한 협동과정으로, 비트코인 및 디지털 화폐를 주제로 석·박사 학위 연구를 진행할 수 있습니다.",
    details: [
      "한양대학교 대학원 연계",
      "석사·박사 과정",
      "연구소 멘토링 지원",
      "논문 발표 기회 제공",
    ],
    cta: "입학 안내 보기",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 lg:py-36 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn direction="left" className="mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-3">03</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#E8E6E0]">
            프로그램
          </h2>
        </FadeIn>

        {/* Program cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <StaggerItem key={program.number}>
              <div className="group relative bg-[#0F1A2E] border border-[#1E2D40] rounded-sm p-10 h-full hover:border-[#C9A84C]/30 transition-all duration-300">
                {/* Number */}
                <span className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-[#1E2D40] absolute top-8 right-10 leading-none select-none group-hover:text-[#C9A84C]/10 transition-colors duration-300">
                  {program.number}
                </span>

                {/* Subtitle */}
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-4">
                  {program.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#E8E6E0] mb-6 leading-snug">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2 mb-10">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="text-[#C9A84C] text-sm tracking-wide hover:text-[#D4B862] transition-colors duration-200 flex items-center gap-2 gold-link">
                  {program.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
