"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const stats = [
  { value: "2019", label: "설립연도" },
  { value: "30+", label: "발간 논문" },
  { value: "2", label: "출판 도서" },
  { value: "500+", label: "수강생 누계" },
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:gap-24 mb-16">
          {/* Left: Section label */}
          <FadeIn direction="left" className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
            <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-3">01</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#E8E6E0] leading-tight">
              연구소 소개
            </h2>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={0.2} className="flex-1">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              HYBIS(Hanyang Bitcoin Interdisciplinary Studies)는 비트코인과 화폐철학을
              학제적으로 연구하는 전문 연구기관입니다.
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              경제학, 철학, 법학, 컴퓨터과학의 경계를 넘어 화폐의 본질과 비트코인의
              사회·경제적 의미를 깊이 탐구합니다. 단순한 기술 분석을 넘어, 화폐가 인류
              문명과 어떻게 맞닿아 있는지를 학문적으로 규명합니다.
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              한양대학교를 기반으로 국내외 연구자들과 함께 정기 콜로키움, 국제 학술대회,
              심화 교육 프로그램을 운영하며 비트코인 연구의 새로운 표준을 만들어갑니다.
            </p>
          </FadeIn>
        </div>

        {/* Divider */}
        <FadeIn>
          <div className="w-full h-px bg-[#1E2D40] mb-16" />
        </FadeIn>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center lg:text-left">
                <p className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#C9A84C] mb-2">
                  {stat.value}
                </p>
                <p className="text-[#94A3B8] text-sm tracking-wide">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
