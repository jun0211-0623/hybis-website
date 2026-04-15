"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const researchAreas = [
  {
    title: "화폐 개념의 전환적 탐구",
    description:
      "비트코인은 코드와 네트워크 합의만으로 희소성과 가치를 보장합니다. 아리스토텔레스부터 현대 암호경제까지 화폐의 역사를 연속적으로 검토하고, 가치·권력·윤리의 삼중 구조를 동시대 언어로 재구성합니다.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "학제적 융합 연구",
    description:
      "철학·역사·문화연구를 기축으로 암호경제학, 분산시스템 공학, 법, 회계 등을 유기적으로 연결하는 입체적 연구 모델을 개발합니다.",
    span: "",
    featured: false,
  },
  {
    title: "정책·사회 실천",
    description:
      "주권 구조, 금융 접근성, 기후 행동에 미치는 영향을 경험적 데이터와 비판적 이론으로 분석하고, 정책 브리프와 공개 교육 자료로 환류합니다.",
    span: "",
    featured: false,
  },
  {
    title: "인재 양성",
    description:
      "대학원 전공, 집중 워크숍, 최고위과정을 통해 코드·데이터·담론을 통합적으로 해석하고 설계할 수 있는 다음 세대의 연구자를 양성합니다.",
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
            이론 창출, 학제 연대, 사회 실천, 인재 양성의 네 축을 통합하여
            디지털 네트워크 위에서 형성되는 인간·공동체·경제의 미래를 설계합니다.
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
