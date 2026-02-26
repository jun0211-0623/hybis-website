"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const academicActivities = [
  {
    icon: "◆",
    category: "학술대회",
    title: "국제 학술대회",
    description:
      "매년 국내외 연구자들이 한자리에 모여 비트코인과 화폐철학 분야의 최신 연구를 발표하고 토론합니다.",
    details: "연 1회 개최 · 국제 참여",
  },
  {
    icon: "◈",
    category: "콜로키움",
    title: "정기 콜로키움",
    description:
      "연구소 소속 연구자들이 진행 중인 연구를 공유하고 심화 토론을 나누는 정기 학술 모임입니다.",
    details: "월 1~2회 · 내부 연구자",
  },
  {
    icon: "◇",
    category: "세미나",
    title: "초청 특별 세미나",
    description:
      "국내외 저명한 학자 및 전문가를 초청하여 비트코인, 화폐, 경제철학 분야의 심층 강연을 진행합니다.",
    details: "비정기 · 외부 전문가 초청",
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-28 lg:py-36 bg-[#0F1A2E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn direction="left" className="mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-3">04</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#E8E6E0]">
            학술 활동
          </h2>
        </FadeIn>

        {/* Activity cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicActivities.map((activity) => (
            <StaggerItem key={activity.category}>
              <div className="group relative border-t border-[#C9A84C]/30 pt-8 hover:border-[#C9A84C] transition-colors duration-300 h-full">
                {/* Icon */}
                <div className="text-[#C9A84C] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {activity.icon}
                </div>

                {/* Category label */}
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-3">
                  {activity.category}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#E8E6E0] mb-4">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {activity.description}
                </p>

                {/* Details badge */}
                <span className="inline-block text-xs text-[#94A3B8] border border-[#1E2D40] px-3 py-1 rounded-full">
                  {activity.details}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
