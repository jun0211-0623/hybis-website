"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FadeIn } from "./FadeIn";

interface ResourceItem {
  id: string;
  category: "정책보고서" | "학술논문";
  title: string;
  summary: string;
  date: string;
  color: string;
  url: string;
}

const items: ResourceItem[] = [
  {
    id: "r1",
    category: "정책보고서",
    title: "스테이블코인의 지정학: 디지털 달러가 재편하는 세계체제와 한국의 대응 전략",
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
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

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
                Bitcoinology Lab의 정책보고서와 학술논문을 확인하세요.
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
      </div>

      <div className="w-full">
        <Carousel
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
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 max-w-[280px] sm:max-w-[340px] md:max-w-[420px]"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full">
                  {/* Color cover with category + date */}
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
                      {/* Border */}
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
