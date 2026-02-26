"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function fadeItem(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.9, ease: EASE },
  };
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Hero glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        {mounted && (
          <motion.div {...fadeItem(0.2)} className="mb-8">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] text-sm tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-[#C9A84C] inline-block" />
              Hanyang Bitcoin Interdisciplinary Studies
              <span className="w-8 h-px bg-[#C9A84C] inline-block" />
            </span>
          </motion.div>
        )}

        {/* Main heading */}
        {mounted && (
          <>
            <motion.h1
              {...fadeItem(0.5)}
              className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl font-bold text-[#E8E6E0] leading-tight mb-2"
            >
              새로운 화폐의
            </motion.h1>
            <motion.h1
              {...fadeItem(0.7)}
              className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl font-bold text-[#C9A84C] leading-tight mb-10"
            >
              언어를 탐구하다
            </motion.h1>
          </>
        )}

        {/* Subtext */}
        {mounted && (
          <motion.p
            {...fadeItem(0.9)}
            className="text-[#94A3B8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            비트코인과 화폐철학의 교차점에서,
            <br className="hidden sm:block" />
            경제학·철학·법학이 함께 새로운 답을 찾습니다.
          </motion.p>
        )}

        {/* CTAs */}
        {mounted && (
          <motion.div
            {...fadeItem(1.1)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => handleScroll("#about")}
              className="px-8 py-3.5 bg-[#C9A84C] hover:bg-[#D4B862] text-[#0B1220] text-sm font-semibold tracking-wider transition-colors duration-200 rounded-sm"
            >
              연구 살펴보기
            </button>
            <button
              onClick={() => handleScroll("#programs")}
              className="px-8 py-3.5 border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] text-sm font-semibold tracking-wider transition-all duration-200 rounded-sm hover:bg-[#C9A84C]/5"
            >
              프로그램 신청
            </button>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <span className="text-[#94A3B8] text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
