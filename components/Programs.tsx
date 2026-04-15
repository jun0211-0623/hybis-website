"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

const tabs = [
  { key: "executive", label: "최고위 과정" },
  { key: "graduate", label: "대학원 협동과정" },
];

const programData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    highlights: { label: string; value: string }[];
    href: string;
  }
> = {
  executive: {
    title: "비트코인화폐철학 최고위과정",
    subtitle: "Bitcoin & Monetary Philosophy Executive Program",
    description:
      "비트코인이라는 지적 현상은 화폐의 모든 이슈가 '오래된 미래'임을 보여줍니다. 본 과정은 비트코인을 단순 기술이 아닌 '화폐현상'으로 정의하고, 경제·정치·문화적 변화를 다학제적으로 분석합니다.",
    highlights: [
      { label: "주임교수", value: "윤성호" },
      { label: "강사진", value: "21명 (학계·산업·정책 전문가)" },
      { label: "대상", value: "기업 임원, 정책 관계자, 전문가" },
    ],
    href: "/programs/executive",
  },
  graduate: {
    title: "비트코인화폐철학과 대학원 협동과정",
    subtitle: "Graduate Cooperative Program in Bitcoin & Monetary Philosophy",
    description:
      "인문과학대학의 학과간 협동과정으로, 디지털 화폐와 블록체인 기술이 야기한 경제·정치·문화 변화를 인문학적 관점에서 연구합니다. 문학석사(M.A.) 학위를 수여하며 매년 20명을 모집합니다.",
    highlights: [
      { label: "학위", value: "문학석사 (Master of Arts)" },
      { label: "이수 학점", value: "27학점 이상 (전공 18학점 이상)" },
      { label: "모집 인원", value: "매년 20명" },
    ],
    href: "/programs/graduate",
  },
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("executive");
  const current = programData[activeTab];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#111111]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
            <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Programs
            </span>
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-12 max-w-[600px] mx-auto">
            프로그램
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
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

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#141414] rounded-2xl border border-[#1E1E1E] p-5 sm:p-8 lg:p-10 max-w-[800px] mx-auto">
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.08em] uppercase mb-3 font-[family-name:var(--font-display)]">
              {current.subtitle}
            </p>
            <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-4">
              {current.title}
            </h3>
            <p className="text-[15px] text-[#9AA0A6] leading-[1.7] mb-8">
              {current.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {current.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0A0A0A]/60 rounded-xl border border-[#1E1E1E] p-4"
                >
                  <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-[14px] text-white font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link href={current.href}>
              <GlassButton size="default">
                자세히 보기 →
              </GlassButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
