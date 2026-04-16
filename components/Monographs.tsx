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
    image: "",
    isbn: "",
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

export default function Monographs() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="monographs" className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between lg:mb-14">
          <div>
            <FadeIn>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#7EBAB5]" />
                <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  Monograph Series
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
                모노그래프
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[#9AA0A6] text-[15px] max-w-[480px] leading-relaxed">
                Hanyang University Monograph Series on Bitcoin and the
                Humanities. HYBIS 연구진의 학술 단행본 시리즈입니다.
              </p>
            </FadeIn>
          </div>

          <div className="hidden shrink-0 gap-2 md:flex">
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
        >
          <CarouselContent className="ml-6 lg:ml-[max(2.5rem,calc(50vw-600px))] mr-6 lg:mr-[max(2.5rem,calc(50vw-600px))]">
            {monographs.map((book) => (
              <CarouselItem
                key={book.id}
                className="max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] pl-4"
              >
                <div className="group rounded-2xl border border-[#1E1E1E] bg-[#111111] overflow-hidden hover:border-[#333] hover:shadow-xl hover:shadow-black/20 transition-all duration-300 h-full">
                  {/* Book cover */}
                  <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#0A0A0A] flex items-center justify-center">
                    <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] h-[175px] sm:h-[200px] lg:h-[230px] group-hover:scale-[1.03] transition-transform duration-500">
                      {/* Book shadow */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full blur-xl bg-black/60" />
                      {book.image ? (
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          className="object-cover rounded-sm shadow-2xl"
                        />
                      ) : (
                        <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-br from-[#7EBAB5]/20 to-[#141414] flex flex-col justify-between p-4">
                          <div className="w-8 h-[2px] bg-[#7EBAB5]/40" />
                          <div>
                            <p className="text-[11px] font-bold text-white/80 leading-tight">{book.title}</p>
                            <p className="text-[8px] text-white/40 mt-1">{book.author}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Year badge */}
                    <div className="absolute top-4 right-4 bg-[#0A0A0A]/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-[12px] font-mono text-white">
                        {book.year}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-[#7EBAB5] bg-[#7EBAB5]/10 px-2.5 py-1 rounded-full">
                        단행본
                      </span>
                      <span className="text-[12px] text-[#6B7280]">
                        {book.author} 지음
                      </span>
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] italic mb-3">
                      {book.subtitle}
                    </p>
                    <p className="text-[14px] text-[#9AA0A6] leading-relaxed mb-4 line-clamp-3">
                      {book.description}
                    </p>

                    <div className="pt-4 border-t border-[#1E1E1E] space-y-1">
                      <p className="text-[12px] text-[#6B7280]">
                        {book.publisher}
                      </p>
                      <p className="text-[12px] text-[#6B7280] font-mono">
                        ISBN {book.isbn}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {monographs.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#7EBAB5]" : "bg-[#333]"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
