"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const tabs = [
  { key: "master", label: "석사" },
  { key: "doctor", label: "박사" },
];

const programData: Record<string, { title: string; items: string[] }[]> = {
  master: [
    {
      title: "기초를 다지다.",
      items: [
        "화폐의 역사와 본질 이해",
        "비트코인 백서 정독 및 분석",
        "경제학·철학 기초 프레임워크",
      ],
    },
    {
      title: "깊이를 더하다.",
      items: [
        "오스트리아 경제학파와 비트코인",
        "화폐철학 주요 이론 심화 학습",
        "사례 기반 토론 참여",
      ],
    },
    {
      title: "전문가로 거듭나다.",
      items: [
        "독립 연구 주제 발표",
        "학술 논문 작성 지도",
        "수료증 발급 및 연구소 네트워크",
      ],
    },
  ],
  doctor: [
    {
      title: "연구 기반을 세우다.",
      items: [
        "화폐철학 심화 이론 탐구",
        "비트코인 프로토콜 분석",
        "학제간 연구 방법론 수립",
      ],
    },
    {
      title: "독자적 연구를 수행하다.",
      items: [
        "박사 논문 주제 설정 및 연구",
        "국제 학술대회 발표",
        "해외 연구기관 협력",
      ],
    },
    {
      title: "학문적 리더가 되다.",
      items: [
        "학술지 논문 게재",
        "후학 양성 및 멘토링",
        "정책 자문 및 사회 기여",
      ],
    },
  ],
};


export default function Programs() {
  const [activeTab, setActiveTab] = useState("master");

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-12 max-w-[600px] mx-auto">
            프로그램
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-0 mb-8 max-w-[400px] mx-auto">
            {tabs.map((tab, i) => (
              <div key={tab.key} className="flex items-center flex-1">
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 border ${
                    activeTab === tab.key
                      ? "bg-white text-[#0A0A0A] border-white"
                      : "bg-transparent text-[#9AA0A6] border-[#2A2A2A] hover:border-[#444]"
                  }`}
                >
                  {tab.label}
                </button>
                {i < tabs.length - 1 && (
                  <div className="flex-1 h-[1px] bg-[#2A2A2A] mx-2" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programData[activeTab].map((step, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`bg-[#141414] rounded-2xl border p-7 transition-all duration-300 ${
                i === 0
                  ? "border-[#444] shadow-lg shadow-black/20"
                  : "border-[#1E1E1E]"
              }`}
            >
              <h3 className="text-[18px] font-semibold text-white mb-5">{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
                      <path
                        d="M4.5 9L7.5 12L13.5 6"
                        stroke={i === 0 ? "#CDEA68" : "#333"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[14px] text-[#9AA0A6] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
