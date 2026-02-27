"use client";

import Link from "next/link";
import { StaggerContainer, StaggerItem, FadeIn } from "./FadeIn";

// Sanity에 데이터가 없을 때 사용할 기본 데이터
const fallbackPublications = [
  {
    _id: "1",
    category: "단행본",
    title: "사토시를 찾아서",
    titleEn: "In Search of Satoshi",
    description:
      "비트코인의 창시자 사토시 나카모토의 사상과 철학을 추적하며, 화폐의 본질에 대한 근본적인 질문을 던집니다.",
    year: "2023",
    color: "#4285F4",
    slug: { current: "in-search-of-satoshi" },
  },
  {
    _id: "2",
    category: "단행본",
    title: "화폐의 언어",
    titleEn: "The Language of Currency",
    description:
      "화폐가 단순한 교환 수단을 넘어 인류의 언어이자 제도임을 철학적·경제학적으로 분석합니다.",
    year: "2022",
    color: "#34A853",
    slug: { current: "language-of-currency" },
  },
  {
    _id: "3",
    category: "정책보고서",
    title: "스테이블코인 입법 방향",
    titleEn: "Stablecoin Legislation",
    description:
      "국내외 스테이블코인 규제 현황을 분석하고 바람직한 입법 방향을 제시한 정책 연구 보고서입니다.",
    year: "2024",
    color: "#FBBC05",
    slug: { current: "stablecoin-legislation" },
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
}

export default function ResearchHighlights({
  publications,
}: {
  publications?: Publication[];
}) {
  const data = publications && publications.length > 0 ? publications : fallbackPublications;

  return (
    <section id="research" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <FadeIn>
            <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-3">
              Research
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-semibold text-white leading-tight">
              연구 성과
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <button
              onClick={() =>
                document
                  .querySelector("#resources")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[#9AA0A6] hover:text-white text-[14px] transition-colors duration-200 flex items-center gap-1.5"
            >
              전체 자료 보기
              <span className="text-[16px]">&rarr;</span>
            </button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((pub) => (
            <StaggerItem key={pub._id}>
              <Link href={`/research/${pub.slug.current}`}>
                <article className="group bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] p-7 h-full hover:border-[#3A3A3A] hover:bg-[#1E1E1E] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
                  <div
                    className="w-8 h-1 rounded-full mb-6"
                    style={{ background: pub.color }}
                  />
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[12px] font-medium text-[#9AA0A6] bg-[#2A2A2A] px-2.5 py-1 rounded-full">
                      {pub.category}
                    </span>
                    <span className="text-[12px] text-[#5F6368]">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#F1F3F5] mb-1 group-hover:text-[#4285F4] transition-colors duration-200">
                    {pub.title}
                  </h3>
                  {pub.titleEn && (
                    <p className="text-[13px] text-[#5F6368] italic mb-4">
                      {pub.titleEn}
                    </p>
                  )}
                  <p className="text-[14px] text-[#9AA0A6] leading-relaxed">
                    {pub.description}
                  </p>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
