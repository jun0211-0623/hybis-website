"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const researchAreas = [
  {
    title: "화폐철학 연구",
    description: "화폐의 본질과 의미를 철학적으로 탐구합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 2" />
      </svg>
    ),
    mockup: "philosophy",
  },
  {
    title: "비트코인 분석",
    description: "비트코인의 기술과 구조를 학제적으로 연구합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="20" rx="3" />
        <path d="M12 22V16M16 22V12M20 22V14" />
      </svg>
    ),
    mockup: "bitcoin",
  },
  {
    title: "법·제도 연구",
    description: "암호화폐 관련 규제와 입법 방향을 모색합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L4 10l12 6l12-6L16 4z" />
        <path d="M4 16l12 6l12-6" />
        <path d="M4 22l12 6l12-6" />
      </svg>
    ),
    mockup: "law",
  },
  {
    title: "경제학 연구",
    description: "디지털 화폐의 거시·미시 경제적 함의를 분석합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28L12 16L18 22L28 8" />
        <path d="M22 8H28V14" />
      </svg>
    ),
    mockup: "economics",
  },
  {
    title: "교육 프로그램",
    description: "전문가 수준의 심화 교육을 제공합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8L16 4L28 8L16 12L4 8Z" />
        <path d="M8 10V20C8 20 12 24 16 24C20 24 24 20 24 20V10" />
      </svg>
    ),
    mockup: "education",
  },
  {
    title: "학술 출판",
    description: "연구 성과를 도서와 보고서로 발간합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h8a4 4 0 014 4v16a3 3 0 00-3-3H4V6z" />
        <path d="M28 6h-8a4 4 0 00-4 4v16a3 3 0 013-3h9V6z" />
      </svg>
    ),
    mockup: "publishing",
  },
  {
    title: "국제 컨퍼런스",
    description: "매년 국제 학술대회를 개최합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24M16 4c-4 4-4 12 0 24M16 4c4 4 4 12 0 24" />
      </svg>
    ),
    mockup: "conference",
  },
  {
    title: "정책 자문",
    description: "정부·금융기관에 전문 자문을 제공합니다.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M10 10h12M10 14h12M10 18h8" />
      </svg>
    ),
    mockup: "policy",
  },
];

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "philosophy":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#999]"
                style={{
                  width: `${60 + i * 30}px`,
                  height: `${60 + i * 30}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>
          <div className="relative text-center">
            <p className="text-[24px] font-bold text-[#1A1A1A]/20 font-[family-name:var(--font-playfair)]">
              &#8358;
            </p>
          </div>
        </div>
      );
    case "bitcoin":
      return (
        <div className="mt-4 bg-[#1A1A1A] rounded-xl p-4 h-[140px] flex flex-col justify-end relative overflow-hidden">
          <div className="absolute top-3 right-3 text-[#CDEA68] text-[11px] font-mono">BTC</div>
          <svg viewBox="0 0 200 60" className="w-full h-[50px]" fill="none">
            <path d="M0 50 Q25 45 50 30 T100 25 T150 15 T200 5" stroke="#CDEA68" strokeWidth="2" fill="none" />
            <path d="M0 50 Q25 45 50 30 T100 25 T150 15 T200 5 V60 H0Z" fill="url(#btcGrad)" opacity="0.15" />
            <defs>
              <linearGradient id="btcGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CDEA68" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case "law":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex flex-col gap-2 justify-center">
          {["스테이블코인 규제안", "가상자산 기본법", "CBDC 정책 보고서"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#34A853]' : i === 1 ? 'bg-[#4285F4]' : 'bg-[#FBBC05]'}`} />
              <span className="text-[12px] text-[#666]">{item}</span>
            </div>
          ))}
        </div>
      );
    case "economics":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex items-end gap-1.5 justify-center">
          {[25, 40, 35, 55, 45, 65, 50, 70, 60, 80].map((h, i) => (
            <div
              key={i}
              className="w-[14px] rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i >= 8 ? '#CDEA68' : '#E0E0E0',
              }}
            />
          ))}
        </div>
      );
    case "education":
      return (
        <div className="mt-4 bg-[#F0F7FF] rounded-xl p-4 h-[140px] flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#4285F4]/20 flex items-center justify-center text-[10px] font-bold text-[#4285F4]">12</div>
            <div>
              <p className="text-[11px] font-medium text-[#1A1A1A]">주 심화과정</p>
              <p className="text-[10px] text-[#999]">매 학기 개강</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full ${i < 8 ? 'bg-[#4285F4]' : 'bg-[#E0E0E0]'}`} />
            ))}
          </div>
        </div>
      );
    case "publishing":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex items-center justify-center gap-3">
          <div className="w-[60px] h-[80px] bg-[#1A1A1A] rounded-md flex items-end p-2">
            <div className="w-full">
              <div className="w-6 h-0.5 bg-[#CDEA68] mb-1" />
              <div className="w-8 h-0.5 bg-white/40 mb-0.5" />
              <div className="w-5 h-0.5 bg-white/20" />
            </div>
          </div>
          <div className="w-[60px] h-[80px] bg-[#2D5016] rounded-md flex items-end p-2">
            <div className="w-full">
              <div className="w-6 h-0.5 bg-[#CDEA68] mb-1" />
              <div className="w-8 h-0.5 bg-white/40 mb-0.5" />
              <div className="w-5 h-0.5 bg-white/20" />
            </div>
          </div>
        </div>
      );
    case "conference":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#CDEA68] flex items-center justify-center text-[8px] font-bold">KR</div>
            <div className="w-6 h-6 rounded-full bg-[#4285F4] flex items-center justify-center text-[8px] font-bold text-white">US</div>
            <div className="w-6 h-6 rounded-full bg-[#FBBC05] flex items-center justify-center text-[8px] font-bold">JP</div>
            <div className="w-6 h-6 rounded-full bg-[#EA4335] flex items-center justify-center text-[8px] font-bold text-white">EU</div>
            <span className="text-[10px] text-[#999]">+12</span>
          </div>
          <p className="text-[11px] text-[#666]">Annual Conference 2025</p>
          <p className="text-[10px] text-[#999]">Seoul, South Korea</p>
        </div>
      );
    case "policy":
      return (
        <div className="mt-4 bg-[#FAFAFA] rounded-xl p-4 h-[140px] flex flex-col gap-2 justify-center">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#999]">보고서 제출</span>
            <span className="text-[10px] text-[#34A853] font-medium">완료</span>
          </div>
          <div className="h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden">
            <div className="h-full bg-[#34A853] rounded-full" style={{ width: '100%' }} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#999]">정책 자문</span>
            <span className="text-[10px] text-[#4285F4] font-medium">진행중</span>
          </div>
          <div className="h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden">
            <div className="h-full bg-[#4285F4] rounded-full" style={{ width: '65%' }} />
          </div>
        </div>
      );
    default:
      return <div className="mt-4 bg-[#FAFAFA] rounded-xl h-[140px]" />;
  }
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn className="mb-3">
          <p className="text-[#999] text-[14px] tracking-[0.02em]">
            HYBIS 연구 분야
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em]">
            HYBIS를 소개합니다
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mb-14">
          <p className="text-[#666] text-[16px] leading-relaxed max-w-[520px]">
            비트코인과 화폐의 본질을 학제적으로 탐구하는
            유일한 연구소. 경제학·철학·법학·컴퓨터과학이 만나는 곳.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchAreas.map((area) => (
            <StaggerItem key={area.title}>
              <div className="group bg-[#F7F7F8] rounded-2xl border border-[#EBEBEB] p-6 h-full hover:border-[#DDD] hover:shadow-lg hover:shadow-black/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-1.5">
                  {area.title}
                </h3>
                <p className="text-[13px] text-[#999] leading-relaxed mb-2">
                  {area.description}
                </p>
                <span className="text-[#1A1A1A] text-[13px] font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  자세히 보기
                  <span>&rarr;</span>
                </span>
                <CardMockup type={area.mockup} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
