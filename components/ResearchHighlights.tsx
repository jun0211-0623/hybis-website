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
    color: "#4285F4",
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
    color: "#34A853",
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
    color: "#FBBC05",
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

export default function ResearchHighlights({
  publications,
}: {
  publications?: Publication[];
}) {
  const data =
    publications && publications.length > 0 ? publications : fallbackPublications;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="research" ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-4">
            우리의 연구가 말해줍니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#5F6368] text-[15px] text-center mb-14 max-w-[400px] mx-auto">
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
                  <div
                    className="h-[200px] relative overflow-hidden flex items-center justify-center"
                    style={{ background: `${pub.color}08` }}
                  >
                    <div
                      className="w-[100px] h-[140px] rounded-md shadow-lg flex flex-col justify-end p-3 group-hover:scale-105 transition-transform duration-500"
                      style={{ background: pub.color }}
                    >
                      <div className="w-8 h-0.5 bg-white/60 mb-1.5" />
                      <p className="text-[10px] font-bold text-white leading-tight">{pub.title}</p>
                      <p className="text-[7px] text-white/60 mt-0.5">HYBIS</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0A0A0A]/70 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <span className="text-[11px] font-medium text-white">{pub.year}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-[#9AA0A6] bg-[#1A1A1A] px-2.5 py-1 rounded-full">
                        {pub.category}
                      </span>
                    </div>

                    {pub.quote && (
                      <p className="text-[15px] text-white font-medium leading-relaxed mb-4">
                        &ldquo;{pub.quote}&rdquo;
                      </p>
                    )}

                    {pub.reviewer && (
                      <div>
                        <p className="text-[13px] font-medium text-[#F1F3F5]">{pub.reviewer}</p>
                        <p className="text-[12px] text-[#5F6368]">{pub.role}</p>
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
