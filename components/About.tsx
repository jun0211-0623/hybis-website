"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";

type Area = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

type AboutDict = {
  eyebrow: string;
  title: string;
  body: string;
  coreResearchBadge: string;
  areas: Area[];
};

export default function About({ dict }: { dict: AboutDict }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    const prevOverflow = document.body.style.overflow;
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-2.5 mb-4">
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-[2px] bg-[#0E4A84]" />
              <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {dict.eyebrow}
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em]">
            {dict.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mb-14">
          <p className="text-[#4A4A4F] text-[16px] leading-relaxed max-w-[520px]">
            {dict.body}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-[1080px]">
          {dict.areas.map((area, i) => (
            <motion.button
              key={area.title}
              layoutId={`area-card-${i}`}
              onClick={() => setSelected(i)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5F8FC] to-[#E7EEF7] border border-[#CFDCEB]/60 hover:border-[#0E4A84]/40 hover:shadow-2xl hover:shadow-[#0E4A84]/10 transition-shadow duration-300 cursor-pointer text-left"
              aria-label={area.title}
            >
              <motion.div
                layoutId={`area-image-${i}`}
                className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 transition-transform duration-500 group-hover:scale-[1.04]"
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority={i < 2}
                />
              </motion.div>

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />

              <motion.h3
                layoutId={`area-title-${i}`}
                className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-[12px] sm:text-[14px] lg:text-[16px] font-semibold text-[#1C1B1F] leading-snug tracking-[-0.01em]"
              >
                {area.title}
              </motion.h3>

              {area.featured && (
                <motion.span
                  layoutId={`area-badge-${i}`}
                  className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 text-[8px] sm:text-[9px] font-medium tracking-[0.08em] uppercase text-[#0E4A84] bg-[#0E4A84]/10 px-1.5 py-0.5 sm:px-2 rounded-full"
                >
                  {dict.coreResearchBadge}
                </motion.span>
              )}

              <span className="hidden sm:flex absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/90 border border-transparent group-hover:border-[#CFDCEB] items-center justify-center text-[#0E4A84] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-[#0A1B2E]/55 backdrop-blur-md" />

            <motion.div
              layoutId={`area-card-${selected}`}
              className="relative z-10 w-full max-w-[1180px] max-h-[88vh] bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(14,74,132,0.45)] overflow-hidden grid grid-cols-1 md:grid-cols-[5fr_7fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                layoutId={`area-image-${selected}`}
                className="relative aspect-square md:aspect-auto bg-gradient-to-br from-[#F5F8FC] to-[#E7EEF7] flex items-center justify-center p-8 md:p-14"
              >
                <Image
                  src={dict.areas[selected].image}
                  alt={dict.areas[selected].title}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain max-w-[460px]"
                />
              </motion.div>

              <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center overflow-y-auto">
                {dict.areas[selected].featured && (
                  <motion.span
                    layoutId={`area-badge-${selected}`}
                    className="inline-block self-start text-[11px] font-medium tracking-[0.08em] uppercase text-[#0E4A84] bg-[#0E4A84]/10 px-3 py-1 rounded-full mb-6"
                  >
                    {dict.coreResearchBadge}
                  </motion.span>
                )}
                <motion.h3
                  layoutId={`area-title-${selected}`}
                  className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-[#1C1B1F] leading-[1.2] tracking-[-0.02em] mb-6"
                >
                  {dict.areas[selected].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.35 } }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className="text-[16px] md:text-[18px] text-[#3A3A3F] leading-[1.85]"
                >
                  {dict.areas[selected].description}
                </motion.p>
              </div>

              <motion.button
                onClick={() => setSelected(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.18 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-[#E5E5E7] hover:border-[#C4C4C8] flex items-center justify-center text-[#4A4A4F] hover:text-[#1C1B1F] transition-colors shadow-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
