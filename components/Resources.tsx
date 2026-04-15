"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

type TabKey = "reports" | "newsletters" | "papers";

const tabs: { key: TabKey; label: string }[] = [
  { key: "reports", label: "정책보고서" },
  { key: "newsletters", label: "뉴스레터" },
  { key: "papers", label: "학술논문" },
];

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

  const hasData = resources && resources.length > 0;

  const grouped = hasData
    ? {
        reports: resources.filter((r) => r.category === "reports"),
        newsletters: resources.filter((r) => r.category === "newsletters"),
        papers: resources.filter((r) => r.category === "papers"),
      }
    : { reports: [], newsletters: [], papers: [] };

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
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <GlassButton
                key={tab.key}
                size="sm"
                onClick={() => setActiveTab(tab.key)}
                className={activeTab === tab.key ? "glass-button-active" : ""}
              >
                {tab.label}
              </GlassButton>
            ))}
          </div>
        </FadeIn>

        {currentItems.length > 0 ? (
          <>
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
                        <span className="text-[#6B7280] text-[13px] font-mono">
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
                      <span className="text-[#6B7280] text-[13px] font-mono flex-shrink-0 sm:w-20 mt-0.5">
                        {item.date}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-white text-[16px] font-medium mb-1 group-hover:text-[#7EBAB5] transition-colors duration-200">
                          {item.title}
                        </h4>
                        <p className="text-[#6B7280] text-[14px] leading-relaxed">
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
          </>
        ) : (
          /* Empty state */
          <FadeIn delay={0.2}>
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7EBAB5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <p className="text-[#9AA0A6] text-[15px] mb-2">
                자료가 준비되면 이곳에 게시됩니다.
              </p>
              <p className="text-[#444] text-[13px]">
                Sanity CMS에서 자료를 등록하면 자동으로 표시됩니다.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
