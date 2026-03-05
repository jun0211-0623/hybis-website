"use client";

import { FadeIn } from "./FadeIn";

const features = [
  {
    title: "학제적 접근.",
    description:
      "경제학, 철학, 법학, 컴퓨터과학을 아우르는 다학제적 연구 방법론으로 화폐의 본질에 접근합니다.",
    mockup: (
      <div className="mt-8 flex flex-col gap-2">
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-4 flex items-center gap-3 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#4285F4"><circle cx="8" cy="8" r="3" /></svg>
          </div>
          <span className="text-[13px] font-medium text-[#1A1A1A]">경제학</span>
          <div className="ml-auto w-5 h-5 rounded-full border border-[#EBEBEB] flex items-center justify-center">
            <span className="text-[10px] text-[#999]">+</span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-4 flex items-center gap-3 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-[#34A853]/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#34A853"><circle cx="8" cy="8" r="3" /></svg>
          </div>
          <span className="text-[13px] font-medium text-[#1A1A1A]">철학</span>
          <div className="ml-auto w-5 h-5 rounded-full border border-[#EBEBEB] flex items-center justify-center">
            <span className="text-[10px] text-[#999]">+</span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-4 flex items-center gap-3 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-[#FBBC05]/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FBBC05"><circle cx="8" cy="8" r="3" /></svg>
          </div>
          <span className="text-[13px] font-medium text-[#1A1A1A]">법학</span>
          <div className="ml-auto w-5 h-5 rounded-full border border-[#EBEBEB] flex items-center justify-center">
            <span className="text-[10px] text-[#999]">+</span>
          </div>
        </div>
      </div>
    ),
    large: true,
  },
  {
    title: "전문가 네트워크.",
    description:
      "국내외 저명한 학자 및 전문가와의 지속적인 협업을 통해 연구의 깊이를 더합니다.",
    mockup: (
      <div className="mt-8">
        <div className="bg-[#CDEA68] rounded-xl p-5">
          <p className="text-[16px] font-semibold text-[#1A1A1A] mb-2">How can I help?</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center text-[9px] font-bold">YK</div>
            <span className="text-[12px] text-[#1A1A1A]/70">HYBIS Research Team</span>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-3">
          <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
          <div className="w-2 h-2 rounded-full bg-[#DDD]" />
          <div className="w-2 h-2 rounded-full bg-[#DDD]" />
        </div>
      </div>
    ),
    large: false,
  },
  {
    title: "글로벌 연구 협력.",
    description:
      "전 세계 비트코인 연구 기관과의 협력을 통해 국경을 넘는 학술 교류를 추진합니다.",
    mockup: (
      <div className="mt-8 bg-white rounded-xl border border-[#EBEBEB] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-[#999]">Global Network</span>
          <span className="text-[11px] text-[#34A853] font-medium">Active</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["MIT", "Stanford", "Oxford", "ETH", "한양대", "서울대", "+8"].map((name) => (
            <span
              key={name}
              className="text-[10px] px-2 py-1 rounded-full bg-[#F5F5F5] text-[#666] font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    ),
    large: false,
  },
  {
    title: "실시간 연구 공유.",
    description:
      "정기 콜로키움과 초청 세미나를 통해 최신 연구 성과를 실시간으로 공유합니다.",
    mockup: (
      <div className="mt-8 space-y-2">
        {[
          { type: "국제 학술대회", freq: "연 1회", color: "#4285F4" },
          { type: "정기 콜로키움", freq: "월 1~2회", color: "#34A853" },
          { type: "초청 세미나", freq: "비정기", color: "#FBBC05" },
        ].map((item) => (
          <div
            key={item.type}
            className="bg-white rounded-xl border border-[#EBEBEB] p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-[12px] text-[#1A1A1A] font-medium">{item.type}</span>
            </div>
            <span className="text-[11px] text-[#999]">{item.freq}</span>
          </div>
        ))}
      </div>
    ),
    large: true,
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] text-center mb-4">
            학부생, 대학원생, 연구자,
            <br />
            그리고 모든 지식인을 위해.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#999] text-[15px] text-center mb-14 max-w-[520px] mx-auto">
            학제적 접근, 전문가 네트워크, 글로벌 협력으로
            비트코인 연구의 새로운 표준을 만들어갑니다.
          </p>
        </FadeIn>

        {/* Feature Grid - like Ramp's Enterprise section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={0.1 + i * 0.08}>
              <div className="bg-[#F7F7F8] rounded-2xl border border-[#EBEBEB] p-8 h-full hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed max-w-[380px]">
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
