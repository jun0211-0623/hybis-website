"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const researchAreas = [
  {
    title: "가치·신뢰·사회의 인문학적 탐구",
    description:
      "비트코인을 문명사적 실험으로 읽어내며, 공동체의 조율 방식, 권위의 정당화, 화폐와 자유의 의미가 어떻게 재편되는지 인문학적으로 분석합니다.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "연산적 신뢰의 인프라 연구",
    description:
      "블록체인, 플랫폼, AI 기반 의사결정 시스템 등 computational trust의 인프라와 상상력을 철학·윤리·정치사상의 렌즈로 분석합니다.",
    span: "",
    featured: false,
  },
  {
    title: "학제적 융합 연구",
    description:
      "철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS)을 연결하고, 시장·규제·일상 실천에 대한 경험적 연구를 결합합니다.",
    span: "",
    featured: false,
  },
  {
    title: "학문적 엄밀성과 공적 통찰",
    description:
      "세미나·워크숍·출판·공동 프로젝트를 통해 엄밀한 학술 연구와 사회적 통찰을 함께 생산하고, 더 책임 있는 미래를 설계합니다.",
    span: "lg:col-span-2",
    featured: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0A0A0A]">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-2.5 mb-4">
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#7EBAB5]" />
              <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                Research Areas
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em]">
            연구 분야
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mb-14">
          <p className="text-[#9AA0A6] text-[16px] leading-relaxed max-w-[520px]">
            디지털 화폐와 인공지능 시대에 가치·신뢰·사회가 어떻게 재구성되는지를
            인문학적으로 탐구합니다.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {researchAreas.map((area) => (
            <StaggerItem key={area.title} className={area.span}>
              <div
                className={`group rounded-2xl border p-6 h-full hover:-translate-y-0.5 transition-all duration-300 ${
                  area.featured
                    ? "bg-gradient-to-br from-[#111111] to-[#101A19] border-[#203A38] hover:border-[#7EBAB5]/30 hover:shadow-xl hover:shadow-[#7EBAB5]/5"
                    : "bg-[#111111] border-[#1E1E1E] hover:border-[#333] hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                {area.featured && (
                  <span className="inline-block text-[10px] font-medium tracking-[0.08em] uppercase text-[#7EBAB5] bg-[#7EBAB5]/10 px-2.5 py-1 rounded-full mb-3">
                    Core Research
                  </span>
                )}
                <h3
                  className={`font-semibold text-white mb-2.5 ${
                    area.featured ? "text-[22px]" : "text-[18px]"
                  }`}
                >
                  {area.title}
                </h3>
                <p
                  className={`text-[14px] text-[#9AA0A6] leading-[1.7] ${
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
