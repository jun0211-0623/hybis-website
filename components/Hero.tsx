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
    <section className="relative pt-[64px] bg-[#0A0A0A] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#0D1A2A] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="max-w-[560px]">
          <div>
            {mounted && (
              <motion.h1
                {...fadeUp(0.25)}
                className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold text-white leading-[1.1] mb-5 tracking-[-0.02em]"
              >
                화폐의 본질을
                <br />
                학문으로 증명하다.
              </motion.h1>
            )}

            {mounted && (
              <motion.p
                {...fadeUp(0.4)}
                className="text-[#9AA0A6] text-[17px] leading-[1.6] mb-8 max-w-[440px]"
              >
                비트코인과 화폐철학의 교차점에서 경제학, 철학, 법학,
                컴퓨터과학이 함께 새로운 답을 찾습니다.
              </motion.p>
            )}

            {mounted && (
              <motion.button
                {...fadeUp(0.65)}
                onClick={() => handleScroll("#about")}
                className="text-white text-[14px] font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 group"
              >
                연구 살펴보기
                <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </motion.button>
            )}
          </div>

        </div>
      </div>

      <div className="relative z-10 border-t border-[#1A1A1A] bg-[#0A0A0A]/80 py-6">
        <p className="text-center text-[13px] text-[#5F6368] mb-5">
          국내외 주요 기관과 함께 연구합니다
        </p>
        <div className="overflow-hidden">
          <div className="logo-strip-animate flex items-center gap-16 whitespace-nowrap w-max">
            {[...partnerLogos, ...partnerLogos].map((name, i) => (
              <span
                key={i}
                className="text-[#333] text-[14px] font-bold tracking-wide uppercase select-none"
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
