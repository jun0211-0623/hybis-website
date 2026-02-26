"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "./FadeIn";

const publications = [
  {
    category: "단행본",
    title: "사토시를 찾아서",
    titleEn: "In Search of Satoshi",
    description:
      "비트코인의 창시자 사토시 나카모토의 사상과 철학을 추적하며, 화폐의 본질에 대한 근본적인 질문을 던집니다.",
    year: "2023",
    color: "from-[#1a2640] to-[#0f1a2e]",
    accent: "#C9A84C",
  },
  {
    category: "단행본",
    title: "화폐의 언어",
    titleEn: "The Language of Currency",
    description:
      "화폐가 단순한 교환 수단을 넘어 인류의 언어이자 제도임을 철학적·경제학적으로 분석합니다.",
    year: "2022",
    color: "from-[#1a2030] to-[#0d1525]",
    accent: "#A8924C",
  },
  {
    category: "정책보고서",
    title: "스테이블코인 입법 방향",
    titleEn: "Stablecoin Legislation",
    description:
      "국내외 스테이블코인 규제 현황을 분석하고 바람직한 입법 방향을 제시한 정책 연구 보고서입니다.",
    year: "2024",
    color: "from-[#141e30] to-[#0b1520]",
    accent: "#8BA0C9",
  },
];

export default function ResearchHighlights() {
  return (
    <section className="py-28 lg:py-36 bg-[#0F1A2E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <FadeIn direction="left">
            <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-3">02</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#E8E6E0]">
              연구 성과
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#resources"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#94A3B8] hover:text-[#C9A84C] text-sm tracking-wide transition-colors duration-200 gold-link"
            >
              전체 자료 보기 →
            </a>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((pub) => (
            <StaggerItem key={pub.title}>
              <div
                className={`relative group bg-gradient-to-br ${pub.color} border border-[#1E2D40] rounded-sm p-8 h-full
                  hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer
                  hover:-translate-y-1`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: pub.accent }}
                />

                {/* Category + Year */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs tracking-[0.15em] uppercase font-medium"
                    style={{ color: pub.accent }}
                  >
                    {pub.category}
                  </span>
                  <span className="text-[#94A3B8] text-xs">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#E8E6E0] mb-1">
                  {pub.title}
                </h3>
                <p className="text-[#94A3B8] text-sm italic mb-4">{pub.titleEn}</p>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed">{pub.description}</p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: pub.accent }}>
                  <span>더 보기</span>
                  <span>→</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
