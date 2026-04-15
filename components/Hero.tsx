"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { GlassButton } from "@/components/ui/glass-button";

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
    <BeamsBackground intensity="medium" className="pt-[64px]">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10">
        <div className="max-w-[620px]">
          {/* Accent label */}
          {mounted && (
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-[2px] bg-[#7EBAB5]" />
              <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                Hanyang Bitcoin Interdisciplinary Studies
              </span>
            </motion.div>
          )}

          {mounted && (
            <motion.h1
              {...fadeUp(0.25)}
              className="text-[clamp(2.8rem,6vw,4.5rem)] font-bold text-white leading-[1.08] mb-6 tracking-[-0.03em]"
            >
              화폐의 본질을
              <br />
              <span className="text-[#7EBAB5]">학문</span>으로 증명하다.
            </motion.h1>
          )}

          {mounted && (
            <motion.p
              {...fadeUp(0.4)}
              className="text-[#9AA0A6] text-[17px] leading-[1.7] mb-10 max-w-[460px]"
            >
              한양대학교 화폐철학연구센터(HYBIS)는 경제학, 철학, 법학,
              컴퓨터과학의 관점에서 화폐와 비트코인을 학제적으로 연구합니다.
            </motion.p>
          )}

          {mounted && (
            <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <GlassButton
                size="default"
                onClick={() => handleScroll("#about")}
              >
                연구 살펴보기
              </GlassButton>
              <GlassButton
                size="default"
                onClick={() => handleScroll("#programs")}
              >
                프로그램 안내
              </GlassButton>
            </motion.div>
          )}
        </div>
      </div>
    </BeamsBackground>
  );
}
