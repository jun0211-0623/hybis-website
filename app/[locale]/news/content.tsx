"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/FadeIn";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type NewsDict = {
  backHome: string;
  eyebrow: string;
  title: string;
  body: string;
  pressEyebrow: string;
  pressTitle: string;
  articleLink: string;
};

interface PressItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  color: string;
}

const pressItems: PressItem[] = [
  {
    id: "press-4",
    title: "2026년은 이더리움이 제도권 금융 표준되는 '대관식'의 해가 될까",
    source: "조선경제 WEEKLY BIZ",
    date: "2025.01.11",
    summary:
      "JP모건의 이더리움 기반 머니마켓펀드 토큰화 상품 출시, 실물 자산 토큰화 시장 확대 등 이더리움이 제도권 금융의 표준 플랫폼으로 부상하는 현황을 분석한 기고문",
    url: "https://www.chosun.com/economy/weeklybiz/2026/01/08/PMI7ZXCSTZDMDBNEE3XKJHQL3A/",
    color: "#0E4A84",
  },
  {
    id: "press-3",
    title: "'인문학의 새로운 길 찾기 혹은 길 내기에 관하여' 윤성호 교수",
    source: "대학지성 In&Out",
    date: "2024.12.22",
    summary:
      "윤성호 교수가 저술한 『사토시를 찾아서』에 관한 인터뷰. 비트코인을 둘러싼 인문학적 논의와 학계의 역할을 탐구",
    url: "https://www.unipress.co.kr/news/articleView.html?idxno=13721",
    color: "#3A6EA5",
  },
  {
    id: "press-2",
    title: "'사토시를 찾아서' (윤성호 지음)",
    source: "국민일보",
    date: "2024.11.06",
    summary:
      "비트코인 창시자의 지성사적 계보를 추적하는 책 서평. 미국 프런티어 정신, 히피 운동, 캘리포니아 이데올로기 등 역사문화적 뿌리를 탐색",
    url: "https://www.kmib.co.kr/article/view.asp?arcid=1761730142",
    color: "#A89078",
  },
  {
    id: "press-1",
    title: "'비트코인 없는 미래는 없다'",
    source: "조선일보 (월간조선)",
    date: "2024.11.06",
    summary:
      "오태민·손혜민·김유정 공저. 화폐의 본질을 신뢰의 기록으로 정의하며, 비트코인이 세계 경제 질서를 어떻게 재편할 수 있는지를 인문학적 관점에서 탐구",
    url: "https://m.monthly.chosun.com/client/news/viw.asp?ctcd=F&nNewsNumb=202511100037",
    color: "#9B7A7A",
  },
];

function homeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export default function NewsContent({
  dict,
  locale,
}: {
  dict: NewsDict;
  locale: Locale;
}) {
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
    <div className="bg-white pt-[80px]">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 pb-16 md:pt-12 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href={homeHref(locale)}
            className="text-[#6B7280] hover:text-[#0E4A84] text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> {dict.backHome}
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrow}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1C1B1F] leading-tight mb-4 tracking-[-0.02em]">
            {dict.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-12 h-1 rounded-full bg-[#0E4A84] mb-8" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[680px]">
            {dict.body}
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="mb-10 flex flex-col justify-between md:mb-14 md:flex-row md:items-end">
            <div>
              <FadeIn>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-[2px] bg-[#0E4A84]" />
                  <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                    {dict.pressEyebrow}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] tracking-[-0.02em]">
                  {dict.pressTitle}
                </h2>
              </FadeIn>
            </div>
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2 md:mt-0">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="text-[#4A4A4F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] disabled:opacity-30"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="text-[#4A4A4F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] disabled:opacity-30"
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
              {pressItems.map((item) => (
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
                        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                              style={{
                                color: item.color,
                                background: `${item.color}20`,
                              }}
                            >
                              {item.source}
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
                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                <path d="M18 14h-8" />
                                <path d="M15 18h-5" />
                                <path d="M10 6h8v4h-8V6Z" />
                              </svg>
                            </div>
                            <p className="text-[13px] text-[#4A4A4F] leading-relaxed line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <div
                          className="absolute inset-0 rounded-xl border transition-colors duration-200 group-hover:border-[#0E4A84]/40"
                          style={{ borderColor: `${item.color}15` }}
                        />
                      </div>
                    </div>

                    <div className="mb-2 line-clamp-3 break-words pt-4 text-[16px] sm:text-[17px] font-semibold text-[#1C1B1F] md:mb-3 group-hover:text-[#0E4A84] transition-colors duration-200">
                      {item.title}
                    </div>
                    <div className="mb-6 line-clamp-2 text-[14px] text-[#4A4A4F] leading-relaxed">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-[13px] text-[#6B7280] group-hover:text-[#0E4A84] transition-colors duration-200">
                      {dict.articleLink}
                      <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
