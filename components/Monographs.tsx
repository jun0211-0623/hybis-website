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

type MonographsDict = {
  eyebrow: string;
  title: string;
  body: string;
  badge: string;
  authorSuffix: string;
  isbnPrefix: string;
};

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

export default function Monographs({
  dict,
  items,
}: {
  dict: MonographsDict;
  items: MonographItem[];
}) {
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
    <section id="monographs" className="py-20 lg:py-28 bg-white">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between lg:mb-14">
          <div>
            <FadeIn>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#0E4A84]" />
                <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  {dict.eyebrow}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em] mb-4">
                {dict.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[#4A4A4F] text-[15px] max-w-[480px] leading-relaxed">
                {dict.body}
              </p>
            </FadeIn>
          </div>

          <div className="hidden shrink-0 gap-2 md:flex">
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
        >
          <CarouselContent className="ml-6 lg:ml-[max(2.5rem,calc(50vw-600px))] mr-6 lg:mr-[max(2.5rem,calc(50vw-600px))]">
            {items.map((book) => (
              <CarouselItem
                key={book.id}
                className="max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] pl-4"
              >
                <div className="group rounded-2xl border border-[#E5E5E7] bg-white overflow-hidden hover:border-[#0E4A84]/40 hover:shadow-xl hover:shadow-[#0E4A84]/10 transition-all duration-300 h-full">
                  <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-gradient-to-b from-[#F5F5F7] to-[#ECECEF] flex items-center justify-center">
                    <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] h-[175px] sm:h-[200px] lg:h-[230px] group-hover:scale-[1.03] transition-transform duration-500">
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full blur-xl bg-[#0E4A84]/20" />
                      {book.image ? (
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          className="object-cover rounded-sm shadow-2xl"
                        />
                      ) : (
                        <div className="w-full h-full rounded-sm shadow-2xl bg-gradient-to-br from-[#0E4A84]/20 to-[#ECECEF] flex flex-col justify-between p-4">
                          <div className="w-8 h-[2px] bg-[#0E4A84]/60" />
                          <div>
                            <p className="text-[11px] font-bold text-[#1C1B1F] leading-tight">
                              {book.title}
                            </p>
                            <p className="text-[8px] text-[#4A4A4F] mt-1">
                              {book.author}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 border border-[#E5E5E7]">
                      <span className="text-[12px] font-mono text-[#1C1B1F]">
                        {book.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-[#0E4A84] bg-[#0E4A84]/10 px-2.5 py-1 rounded-full">
                        {dict.badge}
                      </span>
                      <span className="text-[12px] text-[#6B7280]">
                        {book.author}
                        {dict.authorSuffix}
                      </span>
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#1C1B1F] mb-1">
                      {book.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] italic mb-3">
                      {book.subtitle}
                    </p>
                    <p className="text-[14px] text-[#4A4A4F] leading-relaxed mb-4 line-clamp-3">
                      {book.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E5E7] space-y-1">
                      <p className="text-[12px] text-[#6B7280]">
                        {book.publisher}
                      </p>
                      <p className="text-[12px] text-[#6B7280] font-mono">
                        {dict.isbnPrefix} {book.isbn}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#0E4A84]" : "bg-[#D0D3D8]"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
