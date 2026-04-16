"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

const educationGoals = [
  "화폐·금융·정보철학 전통 위에서 비트코인 현상을 학술적으로 해석할 이론 역량을 기른다.",
  "블록체인 거버넌스와 정치경제 구조, 디지털 윤리 쟁점을 비판적으로 분석하는 사고력을 배양한다.",
  "DAO·스마트콘트랙트·메타버스 등 최신 의제를 현장 문제 해결과 연계할 융합 연구 능력을 강화한다.",
  "국제 학술 네트워크 참여를 통해 글로벌 연구·협업 역량을 증진한다.",
];

const curriculum = {
  "1학기": {
    "1년차": ["비트코인 지성사", "정보철학 특강", "비트코인 화폐현상", "비트코인 기술과 산업"],
    "2년차": ["크립토 문화연구", "DAO의 정치 철학", "비트코인과 달러의 지정학", "화폐의 역사"],
  },
  "2학기": {
    "1년차": ["디지털 윤리학특강", "메타버스의 인문학과 경제학", "국제금융기초", "석사논문작성법"],
    "2년차": ["공급사슬 금융 스마트 계약", "암호화폐 핵심 인물연구", "크립토 핵심 인물연구", "화폐와 언어의 철학"],
  },
};

const careers = [
  { title: "학계·연구기관", desc: "블록체인 철학·디지털 윤리·금융인문학 연구자" },
  { title: "핀테크·크립토 기업", desc: "정책·전략·거버넌스 컨설턴트" },
  { title: "규제기관", desc: "디지털 자산 규제기관 정책 연구원" },
  { title: "미디어·평론", desc: "디지털 금융·블록체인 문화 평론가" },
  { title: "국제기구·NGO", desc: "포용금융 프로젝트 매니저" },
];

const requirements = [
  { label: "학위", value: "문학석사 (Master of Arts)" },
  { label: "이수 학점", value: "정규 교과 27학점 이상" },
  { label: "전공 학점", value: "18학점 이상" },
  { label: "모집 인원", value: "매년 20명" },
  { label: "졸업 요건", value: "종합시험 → 논문 지도 → 학위청구 논문 발표" },
];

export default function GraduateContent() {
  return (
    <div className="bg-[#0A0A0A] pt-[80px]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href="/#programs"
            className="text-[#6B7280] hover:text-white text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> 프로그램
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Graduate Cooperative Program
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4 tracking-[-0.02em]">
            비트코인화폐철학과 대학원 협동과정
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-12 h-1 rounded-full bg-[#7EBAB5] mb-8" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[#9AA0A6] text-[17px] leading-[1.8] max-w-[680px]">
            인문과학대학의 학과간 협동과정으로, 디지털 화폐와 블록체인 기술이 야기한
            경제·정치·문화 변화를 인문학적 관점에서 연구합니다. 4차 산업혁명 시대의
            핵심 의제인 탈중앙화된 화폐를 학제적으로 분석하는 학문적 중심지를
            지향합니다.
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* 설립목적 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Purpose
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-6 tracking-[-0.02em]">
            설립목적
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#9AA0A6] text-[16px] leading-[1.8] max-w-[680px] mb-8">
            디지털 자산의 주류 자산화, 전통 금융 플랫폼의 재편, 탈중앙화 거버넌스(DAO)
            확산 등 시대적 변곡점에 대응하기 위해 설립되었습니다. 철학, 경제학, 정치학을
            아우르는 융합 연구를 수행하고, 블록체인 생태계의 가치·윤리·제도적 함의를
            비판적으로 검토합니다.
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* 교육 목표 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Education Goals
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            교육 목표
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationGoals.map((goal, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <div className="bg-[#111111] rounded-xl border border-[#1E1E1E] p-6 h-full hover:border-[#333] transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7EBAB5] text-[13px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#9AA0A6] leading-[1.7]">
                    {goal}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 커리큘럼 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Curriculum
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            커리큘럼
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {Object.entries(curriculum).map(([semester, years]) => (
            <FadeIn key={semester} delay={0.1}>
              <div className="bg-[#111111] rounded-2xl border border-[#1E1E1E] overflow-hidden">
                <div className="bg-[#141414] border-b border-[#1E1E1E] px-6 py-4">
                  <h3 className="text-[16px] font-semibold text-white">{semester}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1E1E1E]">
                  {Object.entries(years).map(([year, subjects]) => (
                    <div key={year} className="p-6">
                      <p className="text-[12px] text-[#7EBAB5] font-medium uppercase tracking-wider mb-4">
                        {year}
                      </p>
                      <ul className="space-y-3">
                        {subjects.map((subject) => (
                          <li key={subject} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7EBAB5]/50 flex-shrink-0" />
                            <span className="text-[14px] text-[#9AA0A6]">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 이수 요건 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Requirements
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            이수 요건
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {requirements.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.06}>
              <div className="bg-[#141414] rounded-xl border border-[#1E1E1E] p-5">
                <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                  {item.label}
                </p>
                <p className="text-[15px] text-white font-medium">
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 졸업 후 진로 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Career Paths
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            졸업 후 진로
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {careers.map((career, i) => (
            <FadeIn key={career.title} delay={0.1 + i * 0.06}>
              <div className="bg-[#111111] rounded-xl border border-[#1E1E1E] p-5 hover:border-[#333] transition-colors duration-200">
                <h4 className="text-[15px] text-white font-medium mb-1">
                  {career.title}
                </h4>
                <p className="text-[13px] text-[#9AA0A6]">{career.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-[14px] text-[#6B7280] mt-6 max-w-[600px]">
            업계 장학금, 연구센터 네트워크, 최고위과정과의 연계를 통해 진로를 적극 지원합니다.
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* Contact CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <FadeIn>
          <h3 className="text-[24px] font-bold text-white mb-4">
            지원을 원하시나요?
          </h3>
          <p className="text-[#9AA0A6] text-[15px] mb-8 max-w-[400px] mx-auto">
            대학원 협동과정에 대한 문의 사항이 있으시면 연락해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:iamyam@hanyang.ac.kr">
              <GlassButton size="default">
                문의하기 →
              </GlassButton>
            </a>
            <a href="tel:02-2220-0751">
              <GlassButton size="default">
                02-2220-0751
              </GlassButton>
            </a>
            <a href="https://bitcoinphilosophy.hanyang.ac.kr/home" target="_blank" rel="noopener noreferrer">
              <GlassButton size="default">
                학과 홈페이지 →
              </GlassButton>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
