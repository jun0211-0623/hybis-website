"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./FadeIn";

interface Publication {
  _id: string;
  category: string;
  title: string;
  titleEn?: string;
  description: string;
  year: string;
  color: string;
  slug: { current: string };
  author?: string;
  publisher?: string;
  accessUrl?: string;
}

export default function ResearchHighlights({
  publications,
}: {
  publications?: Publication[];
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const hasData = publications && publications.length > 0;

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
            <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Publications
            </span>
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-4">
            연구성과 및 발간물
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#9AA0A6] text-[15px] text-center mb-16 max-w-[450px] mx-auto">
            HYBIS의 주요 출판물과 연구 성과를 확인하세요.
          </p>
        </FadeIn>

        {hasData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publications.map((pub, index) => (
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
                    {/* Color accent bar */}
                    <div
                      className="h-1 w-full"
                      style={{ background: pub.color }}
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                          style={{
                            color: pub.color,
                            background: `${pub.color}15`,
                          }}
                        >
                          {pub.category}
                        </span>
                        <span className="text-[12px] font-mono text-[#6B7280]">
                          {pub.year}
                        </span>
                      </div>

                      <h3 className="text-[18px] font-semibold text-white mb-1.5 group-hover:text-[#7EBAB5] transition-colors duration-200">
                        {pub.title}
                      </h3>
                      {pub.titleEn && (
                        <p className="text-[13px] text-[#6B7280] italic mb-3">
                          {pub.titleEn}
                        </p>
                      )}

                      <p className="text-[14px] text-[#9AA0A6] leading-relaxed mb-4">
                        {pub.description}
                      </p>

                      {/* Publication metadata */}
                      <div className="space-y-1.5 pt-4 border-t border-[#1E1E1E]">
                        {pub.author && (
                          <p className="text-[13px] text-[#6B7280]">
                            <span className="text-[#9AA0A6]">저자</span>{" "}
                            {pub.author}
                          </p>
                        )}
                        {pub.publisher && (
                          <p className="text-[13px] text-[#6B7280]">
                            <span className="text-[#9AA0A6]">발행</span>{" "}
                            {pub.publisher}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[13px] text-[#6B7280] group-hover:text-[#7EBAB5] transition-colors duration-200 flex items-center gap-1">
                          자세히 보기 <span>&rarr;</span>
                        </span>
                        {pub.accessUrl && (
                          <span className="text-[11px] text-[#7EBAB5] bg-[#7EBAB5]/10 px-2 py-0.5 rounded-full">
                            PDF
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <FadeIn delay={0.2}>
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7EBAB5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <p className="text-[#9AA0A6] text-[15px] mb-2">
                발간물이 준비되면 이곳에 게시됩니다.
              </p>
              <p className="text-[#444] text-[13px]">
                Sanity CMS에서 출판물을 등록하면 자동으로 표시됩니다.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
