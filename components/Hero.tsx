"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.25, 0.4, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease },
  };
}

const partnerLogos = [
  "한양대학교",
  "서울대학교",
  "고려대학교",
  "KAIST",
  "Bitcoin Magazine",
  "한국은행",
  "금융위원회",
  "한국경제학회",
  "Bitcoin Policy Institute",
  "Digital Currency Initiative",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-[64px] bg-white overflow-hidden">
      {/* Subtle gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#EBF3FE] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-[560px]">
            {mounted && (
              <motion.div
                {...fadeUp(0.1)}
                className="flex items-center gap-2 mb-7"
              >
                <div className="w-5 h-5 rounded-full bg-[#34A853] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                    <path d="M8.5 3.5L4.25 7.75L1.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <span className="text-[#666] text-[14px]">
                  <strong className="text-[#1A1A1A]">2019년 설립</strong> · 30+ 연구 논문
                </span>
              </motion.div>
            )}

            {mounted && (
              <motion.h1
                {...fadeUp(0.25)}
                className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold text-[#1A1A1A] leading-[1.1] mb-5 tracking-[-0.02em]"
              >
                화폐의 본질을
                <br />
                학문으로 증명하다.
              </motion.h1>
            )}

            {mounted && (
              <motion.p
                {...fadeUp(0.4)}
                className="text-[#666] text-[17px] leading-[1.6] mb-8 max-w-[440px]"
              >
                비트코인과 화폐철학의 교차점에서 경제학, 철학, 법학,
                컴퓨터과학이 함께 새로운 답을 찾습니다.
              </motion.p>
            )}

            {mounted && (
              <motion.div
                {...fadeUp(0.55)}
                className="flex items-center gap-0 mb-5 max-w-[440px]"
              >
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="flex-1 min-w-0 px-5 py-3.5 text-[15px] border border-[#DDD] border-r-0 rounded-l-full outline-none focus:border-[#CDEA68] focus:ring-2 focus:ring-[#CDEA68]/20 transition-all duration-200 bg-white text-[#1A1A1A] placeholder:text-[#BBB]"
                />
                <button className="flex-shrink-0 bg-[#CDEA68] hover:bg-[#B8D84E] text-[#1A1A1A] text-[14px] font-semibold px-6 py-3.5 rounded-r-full transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-[#CDEA68]/25">
                  프로그램 신청
                </button>
              </motion.div>
            )}

            {mounted && (
              <motion.button
                {...fadeUp(0.65)}
                onClick={() => handleScroll("#about")}
                className="text-[#1A1A1A] text-[14px] font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 group"
              >
                연구 살펴보기
                <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </motion.button>
            )}
          </div>

          {/* Right Mockup */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease }}
              className="relative hidden lg:block"
            >
              {/* Main Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/8 border border-[#E8E8E8] p-6 w-[480px] ml-auto">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[14px] font-semibold text-[#1A1A1A]">Research Dashboard</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                    <span className="text-[11px] text-[#999]">Live</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-[#FAFAFA] rounded-xl p-4 mb-4">
                  <div className="flex items-end justify-between h-[120px] gap-2">
                    {[40, 55, 35, 65, 50, 80, 60, 75, 90, 70, 85, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease }}
                        className="flex-1 rounded-t-sm"
                        style={{
                          background: i >= 9 ? '#CDEA68' : i >= 6 ? '#4285F4' : '#E0E0E0',
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-[#BBB]">2019</span>
                    <span className="text-[10px] text-[#BBB]">2025</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#FAFAFA] rounded-lg p-3">
                    <p className="text-[10px] text-[#999] mb-0.5">논문 발간</p>
                    <p className="text-[18px] font-bold text-[#1A1A1A]">30<span className="text-[#34A853] text-[11px] ml-1">+</span></p>
                  </div>
                  <div className="bg-[#FAFAFA] rounded-lg p-3">
                    <p className="text-[10px] text-[#999] mb-0.5">출판 도서</p>
                    <p className="text-[18px] font-bold text-[#1A1A1A]">2<span className="text-[#4285F4] text-[11px] ml-1">권</span></p>
                  </div>
                  <div className="bg-[#FAFAFA] rounded-lg p-3">
                    <p className="text-[10px] text-[#999] mb-0.5">수강생</p>
                    <p className="text-[18px] font-bold text-[#1A1A1A]">500<span className="text-[#FBBC05] text-[11px] ml-1">+</span></p>
                  </div>
                </div>
              </div>

              {/* Floating Book Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease }}
                className="absolute -left-8 bottom-4 bg-[#1A1A1A] rounded-xl p-4 w-[180px] shadow-xl"
              >
                <div className="w-8 h-1 rounded-full bg-[#CDEA68] mb-3" />
                <p className="text-[11px] text-[#999] mb-1">최신 출간</p>
                <p className="text-[14px] font-semibold text-white leading-tight">사토시를 찾아서</p>
                <p className="text-[11px] text-[#666] mt-1 italic">In Search of Satoshi</p>
              </motion.div>

              {/* Floating Notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, ease }}
                className="absolute -right-2 top-[-20px] bg-white rounded-xl p-3 shadow-lg border border-[#EBEBEB] w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#CDEA68] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#1A1A1A">
                      <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium text-[#1A1A1A]">국제 학술대회</span>
                </div>
                <p className="text-[10px] text-[#999]">2025 HYBIS Annual Conference 참가 신청 오픈</p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Logo Strip */}
      <div className="relative z-10 border-t border-[#F0F0F0] bg-white/80 py-6">
        <p className="text-center text-[13px] text-[#999] mb-5">
          국내외 주요 기관과 함께 연구합니다
        </p>
        <div className="overflow-hidden">
          <div className="logo-strip-animate flex items-center gap-16 whitespace-nowrap w-max">
            {[...partnerLogos, ...partnerLogos].map((name, i) => (
              <span
                key={i}
                className="text-[#CCC] text-[14px] font-bold tracking-wide uppercase select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
