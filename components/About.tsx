"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const researchAreas = [
  {
    title: "화폐철학 연구",
    description:
      "화폐의 본질과 의미를 철학적으로 탐구합니다. 화폐란 무엇인가라는 근본 질문에서 출발합니다.",
    mockup: "philosophy",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "비트코인 분석",
    description: "비트코인의 기술과 구조를 학제적으로 연구합니다.",
    mockup: "bitcoin",
    span: "",
    featured: false,
  },
  {
    title: "법·제도 연구",
    description: "암호화폐 관련 규제와 입법 방향을 모색합니다.",
    mockup: "law",
    span: "",
    featured: false,
  },
  {
    title: "경제학 연구",
    description: "디지털 화폐의 거시·미시 경제적 함의를 분석합니다.",
    mockup: "economics",
    span: "",
    featured: false,
  },
  {
    title: "국제 컨퍼런스",
    description: "매년 국제 학술대회를 개최하고 글로벌 네트워크를 구축합니다.",
    mockup: "conference",
    span: "",
    featured: false,
  },
  {
    title: "정책 자문",
    description: "정부·금융기관에 전문 자문을 제공합니다.",
    mockup: "policy",
    span: "lg:col-span-2",
    featured: false,
  },
];

function CardMockup({ type, featured }: { type: string; featured?: boolean }) {
  switch (type) {
    case "philosophy":
      return (
        <div className="mt-6 bg-[#0A0A0A]/60 rounded-xl p-5 h-[200px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#7EBAB5]"
                style={{
                  width: `${50 + i * 35}px`,
                  height: `${50 + i * 35}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
          <div className="relative text-center">
            <p className="text-[64px] font-bold text-[#7EBAB5]/10 font-[family-name:var(--font-playfair)]">
              &#8358;
            </p>
            <p className="text-[13px] text-[#5F6368] mt-2">
              Monetary Philosophy
            </p>
          </div>
        </div>
      );
    case "bitcoin":
      return (
        <div className="mt-4 bg-[#0A0A0A]/60 rounded-xl p-4 h-[120px] flex flex-col justify-end relative overflow-hidden">
          <div className="absolute top-3 right-3 text-[#7EBAB5] text-[11px] font-mono opacity-60">
            BTC
          </div>
          <svg
            viewBox="0 0 200 60"
            className="w-full h-[45px]"
            fill="none"
          >
            <path
              d="M0 50 Q25 45 50 30 T100 25 T150 15 T200 5"
              stroke="#7EBAB5"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 50 Q25 45 50 30 T100 25 T150 15 T200 5 V60 H0Z"
              fill="url(#btcGradDark)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="btcGradDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7EBAB5" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case "law":
      return (
        <div className="mt-4 bg-[#0A0A0A]/60 rounded-xl p-4 h-[120px] flex flex-col gap-2 justify-center">
          {["스테이블코인 규제안", "가상자산 기본법", "CBDC 정책 보고서"].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === 0
                      ? "bg-[#7EBAB5]"
                      : i === 1
                      ? "bg-[#7A8FA6]"
                      : "bg-[#A89078]"
                  }`}
                />
                <span className="text-[12px] text-[#9AA0A6]">{item}</span>
              </div>
            )
          )}
        </div>
      );
    case "economics":
      return (
        <div className="mt-4 bg-[#0A0A0A]/60 rounded-xl p-4 h-[120px] flex items-end gap-1.5 justify-center">
          {[25, 40, 35, 55, 45, 65, 50, 70, 60, 80].map((h, i) => (
            <div
              key={i}
              className="w-[12px] rounded-t-sm transition-all duration-300"
              style={{
                height: `${h}%`,
                background: i >= 8 ? "#7EBAB5" : "#2A2A2A",
              }}
            />
          ))}
        </div>
      );
    case "conference":
      return (
        <div className="mt-4 bg-[#0A0A0A]/60 rounded-xl p-4 h-[120px] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            {[
              { code: "KR", bg: "#7EBAB5", text: "#0A0A0A" },
              { code: "US", bg: "#7A8FA6", text: "#fff" },
              { code: "JP", bg: "#A89078", text: "#0A0A0A" },
              { code: "EU", bg: "#9B7A7A", text: "#fff" },
            ].map((c) => (
              <div
                key={c.code}
                className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold"
                style={{ background: c.bg, color: c.text }}
              >
                {c.code}
              </div>
            ))}
            <span className="text-[10px] text-[#5F6368]">+12</span>
          </div>
          <p className="text-[11px] text-[#9AA0A6]">Annual Conference 2025</p>
        </div>
      );
    case "policy":
      return (
        <div className="mt-4 bg-[#0A0A0A]/60 rounded-xl p-4 h-[100px] flex items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-[#5F6368]">보고서 제출</span>
              <span className="text-[10px] text-[#7EBAB5] font-medium">
                완료
              </span>
            </div>
            <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7EBAB5] rounded-full"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-[#5F6368]">정책 자문</span>
              <span className="text-[10px] text-[#7A8FA6] font-medium">
                진행중
              </span>
            </div>
            <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7A8FA6] rounded-full"
                style={{ width: "65%" }}
              />
            </div>
          </div>
        </div>
      );
    default:
      return <div className="mt-4 bg-[#1A1A1A] rounded-xl h-[120px]" />;
  }
}

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
              <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
                Research Areas
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em]">
            HYBIS를 소개합니다
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mb-14">
          <p className="text-[#9AA0A6] text-[16px] leading-relaxed max-w-[520px]">
            비트코인과 화폐의 본질을 학제적으로 탐구하는 유일한 연구소.
            <br />
            경제학·철학·법학·컴퓨터과학이 만나는 곳.
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {researchAreas.map((area) => (
            <StaggerItem key={area.title} className={area.span}>
              <div
                className={`group rounded-2xl border p-6 h-full hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
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
                  className={`font-semibold text-white mb-1.5 ${
                    area.featured ? "text-[22px]" : "text-[18px]"
                  }`}
                >
                  {area.title}
                </h3>
                <p className="text-[13px] text-[#5F6368] leading-relaxed mb-2">
                  {area.description}
                </p>
                <span className="text-white text-[13px] font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-[#7EBAB5] transition-all duration-200">
                  자세히 보기 <span>&rarr;</span>
                </span>
                <CardMockup type={area.mockup} featured={area.featured} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
