"use client";

import { FadeIn } from "./FadeIn";

const features = [
  {
    title: "학제적 접근.",
    description:
      "경제학, 철학, 법학, 컴퓨터과학을 아우르는 다학제적 연구 방법론으로 화폐의 본질에 접근합니다.",
    span: "lg:col-span-2",
    featured: true,
    mockup: (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "경제학", color: "#7EBAB5", desc: "거시·미시 분석" },
          { label: "철학", color: "#7A8FA6", desc: "화폐 존재론" },
          { label: "법학", color: "#A89078", desc: "규제 프레임워크" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#0A0A0A]/60 rounded-xl border border-[#1E1E1E] p-4 flex flex-col gap-3 hover:border-[#333] transition-colors"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: `${item.color}12` }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: item.color }}
              />
            </div>
            <div>
              <span className="text-[14px] font-medium text-white block">
                {item.label}
              </span>
              <span className="text-[12px] text-[#5F6368]">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "전문가 네트워크.",
    description:
      "국내외 저명한 학자 및 전문가와의 지속적인 협업을 통해 연구의 깊이를 더합니다.",
    span: "",
    featured: false,
    mockup: (
      <div className="mt-8">
        <div className="bg-[#7EBAB5] rounded-xl p-5">
          <p className="text-[16px] font-semibold text-[#0A0A0A] mb-2">
            How can I help?
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center text-[9px] font-bold text-[#0A0A0A]">
              YK
            </div>
            <span className="text-[12px] text-[#0A0A0A]/60">
              HYBIS Research Team
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-3">
          <div className="w-2 h-2 rounded-full bg-[#7EBAB5]" />
          <div className="w-2 h-2 rounded-full bg-[#333]" />
          <div className="w-2 h-2 rounded-full bg-[#333]" />
        </div>
      </div>
    ),
  },
  {
    title: "글로벌 연구 협력.",
    description:
      "전 세계 비트코인 연구 기관과의 협력을 통해 국경을 넘는 학술 교류를 추진합니다.",
    span: "",
    featured: false,
    mockup: (
      <div className="mt-8 bg-[#0A0A0A]/60 rounded-xl border border-[#1E1E1E] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-[#5F6368]">Global Network</span>
          <span className="text-[11px] text-[#7EBAB5] font-medium">
            Active
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["MIT", "Stanford", "Oxford", "ETH", "한양대", "서울대", "+8"].map(
            (name) => (
              <span
                key={name}
                className="text-[10px] px-2 py-1 rounded-full bg-[#1A1A1A] text-[#9AA0A6] font-medium border border-[#2A2A2A]"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "실시간 연구 공유.",
    description:
      "정기 콜로키움과 초청 세미나를 통해 최신 연구 성과를 실시간으로 공유합니다.",
    span: "lg:col-span-2",
    featured: false,
    mockup: (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          { type: "국제 학술대회", freq: "연 1회", color: "#7EBAB5" },
          { type: "정기 콜로키움", freq: "월 1~2회", color: "#7A8FA6" },
          { type: "초청 세미나", freq: "비정기", color: "#A89078" },
        ].map((item) => (
          <div
            key={item.type}
            className="bg-[#0A0A0A]/60 rounded-xl border border-[#1E1E1E] p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-[13px] text-white font-medium">
                {item.type}
              </span>
            </div>
            <span className="text-[12px] text-[#5F6368]">{item.freq}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
            <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Academics
            </span>
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-4">
            학부생, 대학원생, 연구자,
            <br />그리고 모든{" "}
            <span className="text-[#7EBAB5]">지식인</span>을 위해.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#5F6368] text-[15px] text-center mb-14 max-w-[520px] mx-auto">
            학제적 접근, 전문가 네트워크, 글로벌 협력으로 비트코인 연구의 새로운
            표준을 만들어갑니다.
          </p>
        </FadeIn>

        {/* Asymmetric grid: first card spans 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FadeIn
              key={feature.title}
              delay={0.1 + i * 0.08}
              className={feature.span}
            >
              <div
                className={`rounded-2xl border p-8 h-full transition-all duration-300 ${
                  feature.featured
                    ? "bg-gradient-to-br from-[#111111] to-[#101A19] border-[#203A38] hover:border-[#7EBAB5]/30 hover:shadow-xl hover:shadow-[#7EBAB5]/5"
                    : "bg-[#111111] border-[#1E1E1E] hover:shadow-lg hover:shadow-black/15 hover:border-[#333]"
                }`}
              >
                <h3 className="text-[20px] font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#9AA0A6] leading-relaxed max-w-[480px]">
                  {feature.description}
                </p>
                {feature.mockup}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
