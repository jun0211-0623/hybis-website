"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const researchAreas = [
  {
    title: "화폐철학 연구",
    description:
      "화폐의 본질과 의미를 철학적으로 탐구합니다. '화폐란 무엇인가'라는 근본 질문에서 출발하여, 가치 저장·교환 매개·회계 단위로서의 화폐 기능을 존재론적·인식론적 관점에서 분석합니다.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "비트코인 분석",
    description:
      "비트코인의 기술 구조, 프로토콜 설계, 합의 메커니즘을 학제적으로 연구합니다. 사토시 나카모토의 백서에 담긴 화폐관과 오스트리아학파 경제학의 연관성을 탐구합니다.",
    span: "",
    featured: false,
  },
  {
    title: "법·제도 연구",
    description:
      "암호화폐 및 디지털 자산 관련 국내외 규제 현황을 분석하고, 바람직한 입법 방향을 모색합니다. 가상자산 기본법, 스테이블코인 규제, CBDC 정책 등을 다룹니다.",
    span: "",
    featured: false,
  },
  {
    title: "경제학 연구",
    description:
      "디지털 화폐가 거시·미시 경제에 미치는 함의를 분석합니다. 통화정책, 금융 시스템, 국제 자본 이동에 대한 비트코인과 암호화폐의 영향을 연구합니다.",
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
            비트코인과 화폐의 본질을 학제적으로 탐구합니다.
            <br />
            경제학·철학·법학·컴퓨터과학이 만나는 곳.
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
