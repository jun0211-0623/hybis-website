"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { GlassButton } from "@/components/ui/glass-button";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const ease = [0.25, 0.4, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease },
  };
}

type HeroDict = {
  eyebrow: string;
  title: string;
  tagline: { prefix: string; highlight: string; suffix: string };
  body: string;
  ctaResearch: string;
  ctaPrograms: string;
};

export default function Hero({ dict }: { dict: HeroDict }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BeamsBackground intensity="medium" className="pt-[64px]">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10">
        <div className="max-w-[620px]">
          {mounted && (
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-[2px] bg-[#5B9BD5]" />
              <span className="text-[#5B9BD5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {dict.eyebrow}
              </span>
            </motion.div>
          )}

          {mounted && (
            <motion.div {...fadeUp(0.25)} className="mb-10">
              <AnimatedText
                as="h1"
                text={dict.title}
                textClassName="text-[clamp(3.6rem,8vw,6rem)] font-bold text-white leading-[1.02] tracking-[-0.035em] font-[family-name:var(--font-display)]"
                underlineClassName="text-[#5B9BD5]"
                underlineDuration={1.8}
              />
            </motion.div>
          )}

          {mounted && (
            <motion.p
              {...fadeUp(0.35)}
              className="text-[clamp(1.25rem,2.3vw,1.75rem)] text-white/90 font-medium leading-[1.35] mb-8 tracking-[-0.01em]"
            >
              {dict.tagline.prefix}
              <span className="text-[#5B9BD5]">{dict.tagline.highlight}</span>
              {dict.tagline.suffix}
            </motion.p>
          )}

          {mounted && (
            <motion.p
              {...fadeUp(0.45)}
              className="text-white/70 text-[17px] leading-[1.7] mb-10 max-w-[460px]"
            >
              {dict.body}
            </motion.p>
          )}

          {mounted && (
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <GlassButton
                size="default"
                onClick={() => handleScroll("#about")}
                className="glass-on-dark"
              >
                {dict.ctaResearch}
              </GlassButton>
              <GlassButton
                size="default"
                onClick={() => handleScroll("#programs")}
                className="glass-on-dark"
              >
                {dict.ctaPrograms}
              </GlassButton>
            </motion.div>
          )}
        </div>
      </div>
    </BeamsBackground>
  );
}
