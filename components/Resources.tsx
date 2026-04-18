"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

type TabKey = "monograph" | "paper" | "report";

const TABS: { key: TabKey; label: string }[] = [
  { key: "monograph", label: "모노그래프" },
  { key: "paper", label: "학술논문" },
  { key: "report", label: "정책보고서" },
];

interface MonographItem {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  image: string;
  isbn: string;
  publisher: string;
  year: string;
}

interface PaperItem {
  id: string;
  category: "학술논문" | "정책보고서";
  title: string;
  summary: string;
  date: string;
  color: string;
  url: string;
}

const monographs: MonographItem[] = [
  {
    id: "in-search-of-satoshi",
    title: "사토시를 찾아서",
    subtitle: "비트코인 지성사를 위하여",
    author: "윤성호",
    description:
      "비트코인의 창시자 사토시 나카모토의 사상적 배경을 추적하며, 암호학·경제학·철학이 어떻게 결합되어 비트코인이라는 혁신을 만들어냈는지를 지성사적 관점에서 탐구합니다.",
    image: "/books/9788972188513.jpg",
    isbn: "978-89-7218-851-3",
    publisher: "한양대학교 출판부",
    year: "2025",
  },
  {
    id: "no-future-without-bitcoin",
    title: "비트코인 없는 미래는 없다",
    subtitle: "",
    author: "오태민, 손혜민, 김유정",
    description:
      "화폐의 본질을 신뢰의 기록으로 정의하며, 비트코인이 분산된 기술 구조와 합의 메커니즘을 통해 세계 경제 질서를 어떻게 재편할 수 있는지를 인문학적 관점에서 탐구합니다.",
    image: "/books/9791193869338.jpg",
    isbn: "979-11-93869-33-8",
    publisher: "",
    year: "2025",
  },
  {
    id: "language-of-currency",
    title: "화폐의 언어",
    subtitle: "돈은 어떻게 우리에게 말을 거는가",
    author: "이광희",
    description:
      "화폐가 단순한 교환 수단을 넘어 사회적 소통의 매개이자 제도적 언어임을 철학적·경제학적으로 분석합니다. 화폐의 본질에 대한 근본적 질문을 던지는 학술서입니다.",
    image: "/books/9788972188537.jpg",
    isbn: "978-89-7218-853-7",
    publisher: "한양대학교 출판부",
    year: "2025",
  },
];

const papersAndReports: PaperItem[] = [
  {
    id: "r1",
    category: "정책보고서",
    title:
      "스테이블코인의 지정학: 디지털 달러가 재편하는 세계체제와 한국의 대응 전략",
    summary:
      "디지털 달러 중심의 스테이블코인이 국제 금융 질서에 미치는 지정학적 영향과 한국의 전략적 대응 방안을 분석한 정책보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "/resources/stablecoin-geopolitics.pdf",
  },
  {
    id: "r2",
    category: "정책보고서",
    title: "스테이블 코인 해외입법례와 국내법안 비교",
    summary:
      "미국, EU 등 주요국의 스테이블코인 규제 법안과 국내 입법 동향을 비교 분석한 보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "/resources/stablecoin-legislation.pdf",
  },
  {
    id: "r3",
    category: "정책보고서",
    title: "자산 토큰화 혁신 및 머니 레고 기반 탈중앙 금융",
    summary:
      "진성훈. 자산 토큰화의 혁신적 접근과 머니 레고 구조를 활용한 탈중앙화 금융(DeFi) 체계를 분석한 보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "https://bitcoinphilosophy.hanyang.ac.kr/home",
  },
  {
    id: "r4",
    category: "정책보고서",
    title: "자산 토큰화(RWA) 보고서",
    summary:
      "이창준. 실물 자산 토큰화(Real World Assets)의 현황과 전망을 다룬 정책 보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "https://bitcoinphilosophy.hanyang.ac.kr/home",
  },
  {
    id: "r5",
    category: "정책보고서",
    title: "토큰화 경제: 삼성전자의 글로벌 전략",
    summary:
      "노성준. 토큰화 경제 패러다임 속에서 삼성전자의 글로벌 전략적 대응을 분석한 보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "https://bitcoinphilosophy.hanyang.ac.kr/home",
  },
  {
    id: "r6",
    category: "정책보고서",
    title: "인프라시설 토큰화의 필요성과 유용성",
    summary:
      "박수훈. 공공 인프라 시설의 토큰화가 가져올 효율성과 접근성 개선 방안을 제시한 보고서",
    date: "2025",
    color: "#7EBAB5",
    url: "https://bitcoinphilosophy.hanyang.ac.kr/home",
  },
  {
    id: "p1",
    category: "학술논문",
    title: "반연방과 반연준: 미국 자유지상주의의 통화론",
    summary:
      "김승우. 미국 자유지상주의 전통에서 연방준비제도에 대한 비판과 대안적 통화 체계 논의를 다룬 학술논문 (『미국사연구』 제62호, 2025)",
    date: "2025",
    color: "#7A8FA6",
    url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003267129",
  },
  {
    id: "p2",
    category: "학술논문",
    title: "출력제한 전력의 가치화: 암호화폐 채굴을 통한 계통 유연성 확보",
    summary:
      "유종민, 이서진 공저. 출력 제한 전력을 암호화폐 채굴에 활용하여 전력 계통의 유연성을 확보하는 방안을 제시 (『한국기후변화학회지』 제16권 6호, 2025)",
    date: "2025",
    color: "#7A8FA6",
    url: "/resources/mining-energy.pdf",
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<TabKey>("monograph");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  const paperItems =
    activeTab === "paper"
      ? papersAndReports.filter((i) => i.category === "학술논문")
      : activeTab === "report"
      ? papersAndReports.filter((i) => i.category === "정책보고서")
      : [];

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#111111]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-10 flex flex-col justify-between md:mb-14 md:flex-row md:items-end">
          <div>
            <FadeIn>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#7EBAB5]" />
                <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  Resources
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-3">
                연구 자료
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#9AA0A6] text-[15px] max-w-[440px]">
                Bitcoinology Lab의 모노그래프, 학술논문, 정책보고서를 확인하세요.
              </p>
            </FadeIn>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2 md:mt-0">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="text-[#9AA0A6] hover:text-white hover:bg-[#1A1A1A] disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="text-[#9AA0A6] hover:text-white hover:bg-[#1A1A1A] disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <FadeIn delay={0.15}>
          <div
            role="tablist"
            aria-label="연구 자료 유형"
            className="mb-10 flex flex-wrap gap-2 border-b border-[#1E1E1E]"
          >
            {TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative px-4 py-3 text-[14px] font-medium transition-colors",
                    active
                      ? "text-white"
                      : "text-[#9AA0A6] hover:text-[#E5E7EB]"
                  )}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-px h-[2px] bg-[#7EBAB5] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <div className="w-full">
        <Carousel
          key={activeTab}
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 lg:ml-[max(2.5rem,calc(50vw-600px+1rem))] lg:mr-[max(0rem,calc(50vw-600px-1rem))]">
            {activeTab === "monograph"
              ? monographs.map((book) => (
                  <CarouselItem
                    key={book.id}
                    className="pl-4 max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
                  >
                    <div className="group rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] overflow-hidden hover:border-[#333] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#0A0A0A] flex items-center justify-center">
                        <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] h-[175px] sm:h-[200px] lg:h-[230px] group-hover:scale-[1.03] transition-transform duration-500">
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full blur-xl bg-black/60" />
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                            className="object-cover rounded-sm shadow-2xl"
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-[#0A0A0A]/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-[12px] font-mono text-white">
                            {book.year}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[11px] font-medium text-[#7EBAB5] bg-[#7EBAB5]/10 px-2.5 py-1 rounded-full">
                            모노그래프
                          </span>
                          <span className="text-[12px] text-[#6B7280]">
                            {book.author} 지음
                          </span>
                        </div>

                        <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-1">
                          {book.title}
                        </h3>
                        {book.subtitle && (
                          <p className="text-[14px] text-[#6B7280] italic mb-3">
                            {book.subtitle}
                          </p>
                        )}
                        <p className="text-[14px] text-[#9AA0A6] leading-relaxed mb-4 line-clamp-3">
                          {book.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-[#1E1E1E] space-y-1">
                          {book.publisher && (
                            <p className="text-[12px] text-[#6B7280]">
                              {book.publisher}
                            </p>
                          )}
                          <p className="text-[12px] text-[#6B7280] font-mono">
                            ISBN {book.isbn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              : paperItems.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 max-w-[280px] sm:max-w-[340px] md:max-w-[420px]"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between h-full"
                    >
                      <div>
                        <div
                          className="flex aspect-[3/2] overflow-clip rounded-xl relative"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 50%, ${item.color}20 100%)`,
                          }}
                        >
                          <div className="absolute inset-0 flex flex-col justify-between p-6">
                            <div className="flex items-center justify-between">
                              <span
                                className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                                style={{
                                  color: item.color,
                                  background: `${item.color}20`,
                                }}
                              >
                                {item.category}
                              </span>
                              <span className="text-[12px] font-mono text-[#6B7280]">
                                {item.date}
                              </span>
                            </div>
                            <div>
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                                style={{ background: `${item.color}15` }}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={item.color}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1="16" y1="13" x2="8" y2="13" />
                                  <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                              </div>
                              <p className="text-[13px] text-[#9AA0A6] leading-relaxed line-clamp-2">
                                {item.title}
                              </p>
                            </div>
                          </div>
                          <div
                            className="absolute inset-0 rounded-xl border transition-colors duration-200 group-hover:border-[#333]"
                            style={{ borderColor: `${item.color}15` }}
                          />
                        </div>
                      </div>
                      <div className="mb-2 line-clamp-3 break-words pt-4 text-[17px] font-semibold text-white md:mb-3 md:text-[18px] group-hover:text-[#7EBAB5] transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-[14px] text-[#9AA0A6] leading-relaxed">
                        {item.summary}
                      </div>
                      <div className="flex items-center text-[13px] text-[#6B7280] group-hover:text-[#7EBAB5] transition-colors duration-200">
                        자세히 보기
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </a>
                  </CarouselItem>
                ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
