"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const timelineSteps = [
  {
    label: "시작",
    title: "기초를 다지다.",
    items: [
      "화폐의 역사와 본질 이해",
      "비트코인 백서 정독 및 분석",
      "경제학·철학 기초 프레임워크",
    ],
  },
  {
    label: "4주차",
    title: "깊이를 더하다.",
    items: [
      "오스트리아 경제학파와 비트코인",
      "화폐철학 주요 이론 심화 학습",
      "사례 기반 토론 참여",
    ],
  },
  {
    label: "12주차",
    title: "전문가로 거듭나다.",
    items: [
      "독립 연구 주제 발표",
      "학술 논문 작성 지도",
      "수료증 발급 및 연구소 네트워크",
    ],
  },
];

const fallbackPrograms = [
  {
    _id: "1",
    title: "비트코인 화폐철학 심화과정",
    subtitle: "Advanced Course",
    description:
      "비트코인의 기술적 구조부터 화폐철학적 함의까지, 전문가 수준의 심층 이해를 목표로 합니다.",
    details: [
      "매 학기 개강 (봄·가을)",
      "총 12주 과정",
      "소규모 세미나 형식",
      "수료증 발급",
    ],
    color: "#4285F4",
    slug: { current: "advanced-course" },
  },
  {
    _id: "2",
    title: "대학원 협동과정",
    subtitle: "Graduate Program",
    description:
      "한양대학교 대학원과 연계한 협동과정으로, 석·박사 학위 연구를 진행할 수 있습니다.",
    details: [
      "한양대학교 대학원 연계",
      "석사·박사 과정",
      "연구소 멘토링 지원",
      "논문 발표 기회 제공",
    ],
    color: "#34A853",
    slug: { current: "graduate-program" },
  },
];

interface Program {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  color: string;
  slug: { current: string };
}

export default function Programs({ programs }: { programs?: Program[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const data = programs && programs.length > 0 ? programs : fallbackPrograms;

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Timeline Section - like Ramp's 30-day section */}
        <FadeIn>
          <p className="text-[#999] text-[14px] text-center mb-3">
            12주면 충분합니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] text-center mb-4 max-w-[600px] mx-auto">
            비트코인 화폐철학,
            <br />
            이렇게 시작하세요.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-1.5 mx-auto text-[14px] text-[#1A1A1A] font-medium mb-12 hover:gap-2.5 transition-all duration-200"
          >
            프로그램 신청하기
            <span>&rarr;</span>
          </button>
        </FadeIn>

        {/* Timeline Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-0 mb-8 max-w-[600px] mx-auto">
            {timelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                <button
                  onClick={() => setActiveStep(i)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 border ${
                    activeStep === i
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[#666] border-[#EBEBEB] hover:border-[#CCC]"
                  }`}
                >
                  {step.label}
                </button>
                {i < timelineSteps.length - 1 && (
                  <div className="flex-1 h-[1px] bg-[#EBEBEB] mx-2">
                    <div
                      className="h-full bg-[#1A1A1A] transition-all duration-500"
                      style={{ width: activeStep > i ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {timelineSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: activeStep >= i ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-2xl border p-7 transition-all duration-300 ${
                activeStep === i
                  ? "border-[#1A1A1A] shadow-lg shadow-black/[0.04]"
                  : "border-[#EBEBEB]"
              }`}
            >
              <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-5">
                {step.title}
              </h3>
              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M4.5 9L7.5 12L13.5 6"
                        stroke={activeStep >= i ? "#CDEA68" : "#DDD"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[14px] text-[#666] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Program Cards */}
        <FadeIn>
          <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-[#1A1A1A] text-center mb-3 tracking-[-0.01em]">
            학부생부터 전문 연구자까지
          </h3>
          <p className="text-[#999] text-[15px] text-center mb-10 max-w-[460px] mx-auto">
            다양한 배경의 학습자를 위한 맞춤형 교육 프로그램을 운영합니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((program, i) => (
            <FadeIn key={program._id} delay={0.1 + i * 0.1}>
              <Link href={`/programs/${program.slug.current}`}>
                <div className="group bg-white rounded-2xl border border-[#EBEBEB] p-8 h-full hover:border-[#DDD] hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: program.color }}
                    />
                    {program.subtitle && (
                      <span className="text-[12px] text-[#999] tracking-[0.04em] uppercase font-medium">
                        {program.subtitle}
                      </span>
                    )}
                  </div>

                  <h4 className="text-[22px] font-semibold text-[#1A1A1A] mb-3 leading-snug">
                    {program.title}
                  </h4>

                  <p className="text-[14px] text-[#666] leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {program.details && (
                    <ul className="space-y-2 mb-6">
                      {program.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2.5 text-[13px] text-[#666]"
                        >
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: program.color }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="text-[#1A1A1A] text-[14px] font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    자세히 보기
                    <span>&rarr;</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
