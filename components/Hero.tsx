"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = ["/hero-network.jpg", "/hero-geometry.jpg"];
const IMAGE_INTERVAL = 8000;

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
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, IMAGE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-[64px] bg-[#0A0A0A] overflow-hidden">
      {/* Background images — crossfade (both visible simultaneously) */}
      <AnimatePresence>
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[imageIndex]}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 pointer-events-none" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 lg:pt-28 pb-24 lg:pb-36">
        <div className="max-w-[620px]">
          {/* Accent label */}
          {mounted && (
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-[2px] bg-[#7EBAB5]" />
              <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
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
              비트코인과 화폐철학의 교차점에서 경제학, 철학, 법학,
              컴퓨터과학이 함께 새로운 답을 찾습니다.
            </motion.p>
          )}

          {mounted && (
            <motion.div {...fadeUp(0.55)} className="flex items-center gap-4">
              <button
                onClick={() => handleScroll("#about")}
                className="bg-[#7EBAB5] hover:bg-[#6AA8A3] text-[#0A0A0A] text-[14px] font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#7EBAB5]/20"
              >
                연구 살펴보기
              </button>
              <button
                onClick={() => handleScroll("#programs")}
                className="text-white text-[14px] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200 group border border-[#333] px-5 py-2.5 rounded-full hover:border-[#555]"
              >
                프로그램 안내
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                  &rarr;
                </span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Image indicator dots (vertical) */}
        {mounted && (
          <motion.div
            {...fadeUp(0.7)}
            className="absolute bottom-32 lg:bottom-40 right-6 lg:right-10 flex flex-col gap-2"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`w-1.5 rounded-full transition-all duration-500 ${
                  i === imageIndex ? "h-8 bg-[#7EBAB5]" : "h-1.5 bg-[#555] hover:bg-[#888]"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 scroll-indicator"
        >
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-[#555] hover:text-[#9AA0A6] transition-colors"
          >
            <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Partner logos strip */}
      <div className="relative z-10 border-t border-[#1A1A1A] bg-[#0A0A0A]/80 backdrop-blur-sm py-6">
        <p className="text-center text-[12px] text-[#444] mb-5 tracking-[0.06em] uppercase">
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
