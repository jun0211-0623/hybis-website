"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const programs = [
  {
    title: "비트코인 화폐철학 심화과정",
    subtitle: "Advanced Course",
    description:
      "비트코인의 기술적 구조부터 화폐철학적 함의까지, 전문가 수준의 심층 이해를 목표로 합니다. 경제학자, 철학자, 개발자, 법학자가 함께 참여하는 학제적 토론 중심 과정입니다.",
    details: [
      "매 학기 개강 (봄·가을)",
      "총 12주 과정",
      "소규모 세미나 형식",
      "수료증 발급",
    ],
    color: "#4285F4",
  },
  {
    title: "대학원 협동과정",
    subtitle: "Graduate Program",
    description:
      "한양대학교 대학원과 연계한 협동과정으로, 비트코인 및 디지털 화폐를 주제로 석·박사 학위 연구를 진행할 수 있습니다.",
    details: [
      "한양대학교 대학원 연계",
      "석사·박사 과정",
      "연구소 멘토링 지원",
      "논문 발표 기회 제공",
    ],
    color: "#34A853",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="mb-12">
          <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-3">
            Programs
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-semibold text-white leading-tight">
            프로그램
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <div className="group bg-[#141414] rounded-2xl border border-[#2A2A2A] p-8 lg:p-10 h-full hover:border-[#3A3A3A] transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: program.color }}
                  />
                  <span className="text-[13px] text-[#5F6368] tracking-[0.06em] uppercase">
                    {program.subtitle}
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold text-[#F1F3F5] mb-4 leading-snug">
                  {program.title}
                </h3>

                <p className="text-[15px] text-[#9AA0A6] leading-relaxed mb-8">
                  {program.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {program.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-[14px] text-[#9AA0A6]"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: program.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="text-[#F1F3F5] text-[14px] font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  자세히 보기
                  <span>&rarr;</span>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
