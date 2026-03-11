"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./FadeIn";

const fallbackPublications = [
  {
    _id: "1",
    category: "단행본",
    title: "사토시를 찾아서",
    titleEn: "In Search of Satoshi",
    description:
      "비트코인의 창시자 사토시 나카모토의 사상과 철학을 추적하며, 화폐의 본질에 대한 근본적인 질문을 던집니다.",
    year: "2025",
    color: "#7A8FA6",
    slug: { current: "in-search-of-satoshi" },
    quote: "화폐란 무엇인가? 사토시가 던진 질문에 학문이 답하다.",
    reviewer: "윤성호 교수",
    role: "한양대학교 경제학과",
  },
  {
    _id: "2",
    category: "단행본",
    title: "화폐의 언어",
    titleEn: "The Language of Currency",
    description:
      "화폐가 단순한 교환 수단을 넘어 인류의 언어이자 제도임을 철학적·경제학적으로 분석합니다.",
    year: "2026",
    color: "#7A9A82",
    slug: { current: "language-of-currency" },
    quote: "화폐는 인류가 만든 가장 보편적인 언어다.",
    reviewer: "이광희 교수",
    role: "HYBIS 선임연구원",
  },
  {
    _id: "3",
    category: "정책보고서",
    title: "스테이블코인 입법 방향",
    titleEn: "Stablecoin Legislation",
    description:
      "국내외 스테이블코인 규제 현황을 분석하고 바람직한 입법 방향을 제시한 정책 연구 보고서입니다.",
    year: "2025",
    color: "#A89078",
    slug: { current: "stablecoin-legislation" },
    quote: "규제와 혁신 사이, 학문이 균형점을 찾아야 합니다.",
    reviewer: "김성환, 진성훈 원생",
    role: "HYBIS 연구원",
  },
];

interface Publication {
  _id: string;
  category: string;
  title: string;
  titleEn?: string;
  description: string;
  year: string;
  color: string;
  slug: { current: string };
  quote?: string;
  reviewer?: string;
  role?: string;
}

function BookMockup({ pub }: { pub: Publication }) {
  return (
    <div className="relative group-hover:scale-[1.03] transition-transform duration-500">
      {/* Book shadow */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-4 rounded-full blur-xl opacity-40"
        style={{ background: pub.color }}
      />
      {/* Book body */}
      <div className="relative">
        {/* Spine edge */}
        <div
          className="absolute left-0 top-1 bottom-1 w-[6px] rounded-l-sm"
          style={{ background: pub.color, filter: "brightness(0.7)" }}
        />
        {/* Front cover */}
        <div
          className="relative w-[130px] h-[180px] rounded-r-md rounded-l-sm ml-[3px] flex flex-col justify-between p-4 overflow-hidden"
          style={{ background: pub.color }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-3 right-3 w-16 h-16 border border-white/40 rounded-full" />
            <div className="absolute top-7 right-7 w-8 h-8 border border-white/30 rounded-full" />
          </div>
          {/* Content */}
          <div className="relative z-10">
            <div className="w-10 h-[2px] bg-white/50 mb-2" />
            <p className="text-[11px] font-bold text-white leading-tight">
              {pub.title}
            </p>
            {pub.titleEn && (
              <p className="text-[8px] text-white/50 mt-1 italic">
                {pub.titleEn}
              </p>
            )}
          </div>
          <div className="relative z-10">
            <p className="text-[7px] text-white/60 uppercase tracking-wider">
              HYBIS Press
            </p>
            <p className="text-[7px] text-white/40">{pub.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResearchHighlights({
  publications,
}: {
  publications?: Publication[];
}) {
  const data =
    publications && publications.length > 0
      ? publications
      : fallbackPublications;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0A0A0A]"
    >
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
            <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Publications
            </span>
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-4">
            우리의 연구가 말해줍니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#5F6368] text-[15px] text-center mb-16 max-w-[400px] mx-auto">
            HYBIS의 주요 출판물과 연구 성과를 확인하세요.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((pub, index) => (
            <motion.div
              key={pub._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.15,
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link href={`/research/${pub.slug.current}`}>
                <div className="group bg-[#111111] rounded-2xl border border-[#1E1E1E] overflow-hidden h-full hover:border-[#333] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Book display area */}
                  <div className="h-[240px] relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#111] to-[#0A0A0A]">
                    {/* Ambient glow behind book */}
                    <div
                      className="absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-[0.08]"
                      style={{ background: pub.color }}
                    />
                    <BookMockup pub={pub} />
                    <div className="absolute top-3 right-3 bg-[#0A0A0A]/70 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <span className="text-[11px] font-medium text-white">
                        {pub.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          color: pub.color,
                          background: `${pub.color}15`,
                        }}
                      >
                        {pub.category}
                      </span>
                    </div>

                    {pub.quote && (
                      <p className="text-[15px] text-white font-medium leading-relaxed mb-4">
                        &ldquo;{pub.quote}&rdquo;
                      </p>
                    )}

                    {pub.reviewer && (
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{
                            background: `${pub.color}20`,
                            color: pub.color,
                          }}
                        >
                          {pub.reviewer.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#F1F3F5]">
                            {pub.reviewer}
                          </p>
                          <p className="text-[12px] text-[#5F6368]">
                            {pub.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
