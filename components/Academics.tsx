"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const academicActivities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    category: "학술대회",
    title: "국제 학술대회",
    description:
      "매년 국내외 연구자들이 한자리에 모여 비트코인과 화폐철학 분야의 최신 연구를 발표하고 토론합니다.",
    details: "연 1회 개최 · 국제 참여",
    color: "#4285F4",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    category: "콜로키움",
    title: "정기 콜로키움",
    description:
      "연구소 소속 연구자들이 진행 중인 연구를 공유하고 심화 토론을 나누는 정기 학술 모임입니다.",
    details: "월 1~2회 · 내부 연구자",
    color: "#34A853",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    category: "세미나",
    title: "초청 특별 세미나",
    description:
      "국내외 저명한 학자 및 전문가를 초청하여 비트코인, 화폐, 경제철학 분야의 심층 강연을 진행합니다.",
    details: "비정기 · 외부 전문가 초청",
    color: "#FBBC05",
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="mb-12">
          <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-3">
            Academics
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-semibold text-white leading-tight">
            학술 활동
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {academicActivities.map((activity) => (
            <StaggerItem key={activity.category}>
              <div className="group bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] p-7 h-full hover:border-[#3A3A3A] hover:bg-[#1E1E1E] transition-all duration-300">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: activity.color + "15", color: activity.color }}
                >
                  {activity.icon}
                </div>

                <p className="text-[12px] font-medium text-[#5F6368] tracking-[0.06em] uppercase mb-3">
                  {activity.category}
                </p>

                <h3 className="text-[20px] font-semibold text-[#F1F3F5] mb-3">
                  {activity.title}
                </h3>

                <p className="text-[14px] text-[#9AA0A6] leading-relaxed mb-6">
                  {activity.description}
                </p>

                <span className="inline-block text-[12px] text-[#9AA0A6] bg-[#2A2A2A] px-3 py-1.5 rounded-full">
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
