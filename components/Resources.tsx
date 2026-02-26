"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

type TabKey = "reports" | "newsletters" | "papers";

const tabs: { key: TabKey; label: string }[] = [
  { key: "reports", label: "정책보고서" },
  { key: "newsletters", label: "뉴스레터" },
  { key: "papers", label: "학술논문" },
];

const resources: Record<TabKey, { title: string; date: string; description: string }[]> = {
  reports: [
    {
      title: "스테이블코인 입법 방향에 관한 연구",
      date: "2024.03",
      description: "국내외 스테이블코인 규제 현황 분석 및 바람직한 입법 방향 제시",
    },
    {
      title: "비트코인 채굴의 에너지 경제학",
      date: "2023.11",
      description: "비트코인 채굴이 에너지 시장 및 탄소 정책에 미치는 영향 분석",
    },
    {
      title: "중앙은행 디지털화폐(CBDC)와 화폐 주권",
      date: "2023.06",
      description: "CBDC 도입이 화폐 주권 및 금융 시스템에 미치는 함의",
    },
  ],
  newsletters: [
    {
      title: "HYBIS 뉴스레터 Vol.12",
      date: "2024.02",
      description: "2024년 상반기 연구 활동 소개 및 주요 학술 이슈 정리",
    },
    {
      title: "HYBIS 뉴스레터 Vol.11",
      date: "2023.12",
      description: "연말 결산: 2023년 주요 연구 성과 및 행사 돌아보기",
    },
    {
      title: "HYBIS 뉴스레터 Vol.10",
      date: "2023.09",
      description: "국제 학술대회 보고 및 신규 연구 과제 소개",
    },
  ],
  papers: [
    {
      title: "비트코인의 화폐적 특성에 관한 철학적 고찰",
      date: "2024.01",
      description: "비트코인을 화폐철학의 관점에서 분석한 학술 논문",
    },
    {
      title: "탈중앙화 화폐와 국가 권력: 이론적 탐구",
      date: "2023.08",
      description: "국가 통제를 벗어난 화폐 시스템의 정치철학적 의미",
    },
    {
      title: "사토시 나카모토의 화폐관과 오스트리아 경제학파",
      date: "2023.04",
      description: "비트코인 백서에 담긴 화폐 철학과 오스트리아학파의 연관성",
    },
  ],
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState<TabKey>("reports");

  return (
    <section id="resources" className="py-28 lg:py-36 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn direction="left" className="mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-3">05</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#E8E6E0]">
            연구 자료
          </h2>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1} className="mb-10">
          <div className="flex gap-0 border-b border-[#1E2D40]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-sm tracking-wide transition-all duration-200 relative ${
                  activeTab === tab.key
                    ? "text-[#C9A84C]"
                    : "text-[#94A3B8] hover:text-[#E8E6E0]"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C]" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Resource list */}
        <StaggerContainer key={activeTab} className="space-y-0">
          {resources[activeTab].map((item, i) => (
            <StaggerItem key={item.title}>
              <div
                className={`group flex flex-col sm:flex-row sm:items-start gap-4 py-6 cursor-pointer
                  hover:bg-[#0F1A2E]/50 px-4 -mx-4 transition-colors duration-200
                  ${i < resources[activeTab].length - 1 ? "border-b border-[#1E2D40]" : ""}`}
              >
                {/* Date */}
                <span className="text-[#94A3B8] text-sm font-mono flex-shrink-0 sm:w-20 mt-0.5">
                  {item.date}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-[#E8E6E0] text-base font-medium mb-1 group-hover:text-[#C9A84C] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-[#94A3B8] group-hover:text-[#C9A84C] transition-all duration-200 flex-shrink-0 group-hover:translate-x-1 text-sm mt-0.5">
                  →
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
