"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

type TabKey = "reports" | "newsletters" | "papers";

const tabs: { key: TabKey; label: string }[] = [
  { key: "reports", label: "정책보고서" },
  { key: "newsletters", label: "뉴스레터" },
  { key: "papers", label: "학술논문" },
];

const resources: Record<
  TabKey,
  { title: string; date: string; description: string }[]
> = {
  reports: [
    {
      title: "스테이블코인 입법 방향에 관한 연구",
      date: "2024.03",
      description:
        "국내외 스테이블코인 규제 현황 분석 및 바람직한 입법 방향 제시",
    },
    {
      title: "비트코인 채굴의 에너지 경제학",
      date: "2023.11",
      description:
        "비트코인 채굴이 에너지 시장 및 탄소 정책에 미치는 영향 분석",
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
      description:
        "2024년 상반기 연구 활동 소개 및 주요 학술 이슈 정리",
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
      description:
        "비트코인 백서에 담긴 화폐 철학과 오스트리아학파의 연관성",
    },
  ],
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState<TabKey>("reports");

  return (
    <section id="resources" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="mb-10">
          <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-3">
            Resources
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-semibold text-white leading-tight">
            연구 자료
          </h2>
        </FadeIn>

        {/* Tabs — pill style */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex gap-1 bg-[#1A1A1A] p-1 rounded-full w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 text-[14px] rounded-full transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#2A2A2A] text-white font-medium"
                    : "text-[#9AA0A6] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Resource list */}
        <StaggerContainer key={activeTab} className="space-y-0">
          {resources[activeTab].map((item, i) => (
            <StaggerItem key={item.title}>
              <div
                className={`group flex flex-col sm:flex-row sm:items-start gap-4 py-5 cursor-pointer hover:bg-[#111111] px-5 -mx-5 rounded-xl transition-colors duration-200 ${
                  i < resources[activeTab].length - 1
                    ? "border-b border-[#1A1A1A]"
                    : ""
                }`}
              >
                <span className="text-[#5F6368] text-[13px] font-mono flex-shrink-0 sm:w-20 mt-0.5">
                  {item.date}
                </span>

                <div className="flex-1">
                  <h4 className="text-[#F1F3F5] text-[16px] font-medium mb-1 group-hover:text-[#4285F4] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-[#9AA0A6] text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <span className="text-[#5F6368] group-hover:text-[#4285F4] transition-all duration-200 flex-shrink-0 group-hover:translate-x-1 text-[14px] mt-0.5">
                  &rarr;
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
