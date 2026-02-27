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
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="mb-6">
          <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase">
            About
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-16">
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-semibold text-white leading-tight max-w-2xl">
            비트코인과 화폐철학을
            <br />
            학제적으로 연구합니다
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <FadeIn delay={0.15}>
            <p className="text-[#9AA0A6] text-[17px] leading-[1.7]">
              HYBIS(Hanyang Bitcoin Interdisciplinary Studies)는 비트코인과
              화폐철학을 학제적으로 연구하는 전문 연구기관입니다. 경제학, 철학,
              법학, 컴퓨터과학의 경계를 넘어 화폐의 본질과 비트코인의 사회·경제적
              의미를 깊이 탐구합니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-[#9AA0A6] text-[17px] leading-[1.7]">
              한양대학교를 기반으로 국내외 연구자들과 함께 정기 콜로키움, 국제
              학술대회, 심화 교육 프로그램을 운영하며 비트코인 연구의 새로운 표준을
              만들어갑니다. 단순한 기술 분석을 넘어, 화폐가 인류 문명과 어떻게
              맞닿아 있는지를 학문적으로 규명합니다.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="border-t border-[#1A1A1A] pt-12" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div>
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white mb-1 font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </p>
                <p className="text-[#5F6368] text-[14px]">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
