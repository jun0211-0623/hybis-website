"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

type TabKey = "reports" | "newsletters" | "papers";

const tabs: { key: TabKey; label: string }[] = [
  { key: "reports", label: "정책보고서" },
  { key: "newsletters", label: "뉴스레터" },
  { key: "papers", label: "학술논문" },
];

const fallbackResources: Record<
  TabKey,
  {
    _id: string;
    title: string;
    date: string;
    description: string;
    slug: { current: string };
  }[]
> = {
  reports: [
    {
      _id: "r1",
      title: "스테이블코인 입법 방향에 관한 연구",
      date: "2024.03",
      description:
        "국내외 스테이블코인 규제 현황 분석 및 바람직한 입법 방향 제시",
      slug: { current: "stablecoin-legislation-report" },
    },
    {
      _id: "r2",
      title: "비트코인 채굴의 에너지 경제학",
      date: "2023.11",
      description:
        "비트코인 채굴이 에너지 시장 및 탄소 정책에 미치는 영향 분석",
      slug: { current: "bitcoin-mining-energy" },
    },
    {
      _id: "r3",
      title: "중앙은행 디지털화폐(CBDC)와 화폐 주권",
      date: "2023.06",
      description:
        "CBDC 도입이 화폐 주권 및 금융 시스템에 미치는 함의",
      slug: { current: "cbdc-monetary-sovereignty" },
    },
  ],
  newsletters: [
    {
      _id: "n1",
      title: "HYBIS 뉴스레터 Vol.12",
      date: "2024.02",
      description:
        "2024년 상반기 연구 활동 소개 및 주요 학술 이슈 정리",
      slug: { current: "newsletter-vol-12" },
    },
    {
      _id: "n2",
      title: "HYBIS 뉴스레터 Vol.11",
      date: "2023.12",
      description:
        "연말 결산: 2023년 주요 연구 성과 및 행사 돌아보기",
      slug: { current: "newsletter-vol-11" },
    },
    {
      _id: "n3",
      title: "HYBIS 뉴스레터 Vol.10",
      date: "2023.09",
      description:
        "국제 학술대회 보고 및 신규 연구 과제 소개",
      slug: { current: "newsletter-vol-10" },
    },
  ],
  papers: [
    {
      _id: "p1",
      title: "비트코인의 화폐적 특성에 관한 철학적 고찰",
      date: "2024.01",
      description:
        "비트코인을 화폐철학의 관점에서 분석한 학술 논문",
      slug: { current: "bitcoin-monetary-philosophy" },
    },
    {
      _id: "p2",
      title: "탈중앙화 화폐와 국가 권력: 이론적 탐구",
      date: "2023.08",
      description:
        "국가 통제를 벗어난 화폐 시스템의 정치철학적 의미",
      slug: { current: "decentralized-money-state-power" },
    },
    {
      _id: "p3",
      title: "사토시 나카모토의 화폐관과 오스트리아 경제학파",
      date: "2023.04",
      description:
        "비트코인 백서에 담긴 화폐 철학과 오스트리아학파의 연관성",
      slug: { current: "satoshi-austrian-economics" },
    },
  ],
};

interface Resource {
  _id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  slug: { current: string };
}

export default function Resources({ resources }: { resources?: Resource[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>("reports");

  const grouped =
    resources && resources.length > 0
      ? {
          reports: resources.filter((r) => r.category === "reports"),
          newsletters: resources.filter((r) => r.category === "newsletters"),
          papers: resources.filter((r) => r.category === "papers"),
        }
      : fallbackResources;

  const currentItems = grouped[activeTab] || [];
  const featuredItem = currentItems[0];
  const restItems = currentItems.slice(1);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#111111]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-2.5 mb-4">
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#7EBAB5]" />
              <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
                Resources
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.05} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em]">
            연구 자료
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-10">
          <p className="text-[#9AA0A6] text-[15px] max-w-[440px]">
            HYBIS의 정책보고서, 뉴스레터, 학술논문을 확인하세요.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mb-10">
          <div className="flex gap-1 bg-[#1A1A1A] p-1 rounded-full w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 text-[14px] rounded-full transition-all duration-200 font-medium ${
                  activeTab === tab.key
                    ? "bg-[#7EBAB5] text-[#0A0A0A]"
                    : "text-[#5F6368] hover:text-white hover:bg-[#2A2A2A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Featured first item */}
        {featuredItem && (
          <FadeIn key={`featured-${activeTab}`} className="mb-6">
            <Link href={`/resources/${featuredItem.slug.current}`}>
              <div className="group bg-gradient-to-r from-[#141414] to-[#111111] rounded-2xl border border-[#1E1E1E] p-8 hover:border-[#7EBAB5]/30 hover:shadow-xl hover:shadow-[#7EBAB5]/5 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#7EBAB5]/10 flex items-center justify-center">
                      <span className="text-[#7EBAB5] text-[18px] font-bold">
                        01
                      </span>
                    </div>
                    <span className="text-[#5F6368] text-[13px] font-mono">
                      {featuredItem.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#7EBAB5] bg-[#7EBAB5]/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                      Latest
                    </span>
                    <h4 className="text-white text-[20px] font-semibold mb-2 group-hover:text-[#7EBAB5] transition-colors duration-200">
                      {featuredItem.title}
                    </h4>
                    <p className="text-[#9AA0A6] text-[15px] leading-relaxed">
                      {featuredItem.description}
                    </p>
                  </div>
                  <span className="text-[#333] group-hover:text-[#7EBAB5] transition-all duration-200 flex-shrink-0 group-hover:translate-x-1 text-[18px] mt-2">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Rest of items */}
        <StaggerContainer key={activeTab} className="space-y-0">
          {restItems.map((item, i) => (
            <StaggerItem key={item._id}>
              <Link href={`/resources/${item.slug.current}`}>
                <div
                  className={`group flex flex-col sm:flex-row sm:items-start gap-4 py-5 cursor-pointer hover:bg-[#1A1A1A] px-5 -mx-5 rounded-xl transition-all duration-200 ${
                    i < restItems.length - 1
                      ? "border-b border-[#1E1E1E]"
                      : ""
                  }`}
                >
                  <span className="text-[#5F6368] text-[13px] font-mono flex-shrink-0 sm:w-20 mt-0.5">
                    {item.date}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-white text-[16px] font-medium mb-1 group-hover:text-[#7EBAB5] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-[#5F6368] text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[#333] group-hover:text-[#7EBAB5] transition-all duration-200 flex-shrink-0 group-hover:translate-x-1 text-[14px] mt-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
