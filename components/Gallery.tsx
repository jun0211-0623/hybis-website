"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const squareData = [
  { id: 1, src: "/gallery/photo-1.jpg" },
  { id: 2, src: "/gallery/photo-2.jpg" },
  { id: 3, src: "/gallery/photo-3.jpg" },
  { id: 4, src: "/gallery/photo-4.jpg" },
  { id: 5, src: "/gallery/photo-5.jpg" },
  { id: 6, src: "/gallery/photo-6.jpg" },
  { id: 7, src: "/gallery/photo-7.jpg" },
  { id: 8, src: "/gallery/photo-8.jpg" },
  { id: 9, src: "/gallery/photo-9.jpg" },
  { id: 10, src: "/gallery/photo-10.jpg" },
  { id: 11, src: "/gallery/photo-11.jpg" },
  // 16칸 채우기 위해 5장 중복
  { id: 12, src: "/gallery/photo-1.jpg" },
  { id: 13, src: "/gallery/photo-3.jpg" },
  { id: 14, src: "/gallery/photo-5.jpg" },
  { id: 15, src: "/gallery/photo-7.jpg" },
  { id: 16, src: "/gallery/photo-9.jpg" },
];

const shuffle = (array: typeof squareData) => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }
  return shuffled;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

function ShuffleGrid() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setSquares(generateSquares());
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-4 h-[280px] sm:h-[350px] lg:h-[450px] gap-1 sm:gap-1.5 rounded-2xl overflow-hidden">
      {squares}
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-16">
          {/* Text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#7EBAB5]" />
                <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  Beyond the Page
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
                Beyond the Page
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[#9AA0A6] text-[15px] leading-relaxed mb-8 max-w-[400px]">
                북콘서트, 최고위과정 강의, 총동문회 등 Bitcoinology Lab의 주요 활동
                현장을 소개합니다.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <button
                onClick={() =>
                  document
                    .querySelector("#academics")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[#7EBAB5] text-[14px] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                활동 더 보기 <span>&rarr;</span>
              </button>
            </FadeIn>
          </div>

          {/* Shuffle Grid */}
          <FadeIn delay={0.2}>
            <ShuffleGrid />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
