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

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center hero-mesh bg-[#0A0A0A]">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {mounted && (
          <motion.p
            {...fadeUp(0.15)}
            className="text-[#5F6368] text-[13px] tracking-[0.15em] uppercase mb-8"
          >
            Hanyang Bitcoin Interdisciplinary Studies
          </motion.p>
        )}

        {mounted && (
          <motion.h1
            {...fadeUp(0.35)}
            className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,6vw,5.5rem)] font-semibold text-white leading-[1.1] mb-6 tracking-tight"
          >
            새로운 화폐의
            <br />
            언어를 탐구하다
          </motion.h1>
        )}

        {mounted && (
          <motion.p
            {...fadeUp(0.55)}
            className="text-[#9AA0A6] text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12"
          >
            비트코인과 화폐철학의 교차점에서,
            <br className="hidden sm:block" />
            경제학·철학·법학이 함께 새로운 답을 찾습니다.
          </motion.p>
        )}

        {mounted && (
          <motion.div
            {...fadeUp(0.75)}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button
              onClick={() => handleScroll("#about")}
              className="px-7 py-3 bg-white hover:bg-[#E8EAED] text-[#0A0A0A] text-[14px] font-medium tracking-wide transition-colors duration-200 rounded-full"
            >
              연구 살펴보기
            </button>
            <button
              onClick={() => handleScroll("#programs")}
              className="px-7 py-3 border border-[#333] hover:border-[#555] text-[#F1F3F5] text-[14px] font-medium tracking-wide transition-all duration-200 rounded-full hover:bg-[#1A1A1A]"
            >
              프로그램 신청
            </button>
          </motion.div>
        )}
      </div>

      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#333] to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
