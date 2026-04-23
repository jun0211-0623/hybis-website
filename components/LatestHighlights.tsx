"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "./FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HighlightItem } from "@/lib/i18n/highlights-data";

type HighlightsDict = {
  eyebrow: string;
  title: string;
  body: string;
  readMore: string;
  viewArticle: string;
  prev: string;
  next: string;
};

export default function LatestHighlights({
  dict,
  items,
}: {
  dict: HighlightsDict;
  items: HighlightItem[];
}) {
  const router = useRouter();
  if (items.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFB]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
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
              <p className="text-[#4A4A4F] text-[16px] leading-relaxed max-w-[520px]">
                {dict.body}
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <Carousel
            opts={{ align: "start", loop: false }}
            className="relative"
          >
            <CarouselContent className="-ml-4">
              {items.map((item) => {
                const handleClick = () => {
                  if (item.external) {
                    window.open(item.href, "_blank", "noopener,noreferrer");
                  } else {
                    router.push(item.href);
                  }
                };

                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 basis-[82%] sm:basis-[55%] md:basis-[42%] lg:basis-[32%] xl:basis-[28%]"
                  >
                    <button
                      type="button"
                      onClick={handleClick}
                      className="group relative flex flex-col h-full w-full text-left rounded-2xl overflow-hidden border border-[#E5E5E7] bg-white hover:border-[#CFDCEB] hover:shadow-[0_14px_40px_-16px_rgba(14,74,132,0.2)] transition-all duration-300"
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F7]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1280px) 360px, (min-width: 1024px) 32vw, (min-width: 768px) 42vw, (min-width: 640px) 55vw, 82vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${item.kindColor}22, ${item.kindColor}05)`,
                            }}
                          >
                            <span
                              className="text-[18px] md:text-[22px] font-semibold tracking-[-0.01em] px-6 text-center"
                              style={{ color: item.kindColor }}
                            >
                              {item.source ?? item.kindLabel}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-1 p-5 md:p-6">
                        <div className="flex items-center gap-2.5 mb-3">
                          <span
                            className="text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
                            style={{
                              color: item.kindColor,
                              background: `${item.kindColor}15`,
                            }}
                          >
                            {item.kindLabel}
                          </span>
                          <span className="text-[12px] font-mono text-[#6B7280]">
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-[17px] md:text-[18px] font-semibold text-[#1C1B1F] leading-[1.4] mb-2 line-clamp-2 group-hover:text-[#0E4A84] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-[13px] md:text-[14px] text-[#4A4A4F] leading-[1.7] line-clamp-3 mb-4">
                          {item.summary}
                        </p>

                        <div className="mt-auto flex items-center text-[13px] text-[#6B7280] group-hover:text-[#0E4A84] transition-colors">
                          {item.external ? dict.viewArticle : dict.readMore}
                          <ArrowUpRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious
                aria-label={dict.prev}
                className="-left-4 lg:-left-12 bg-white border-[#E5E5E7] text-[#1C1B1F] hover:bg-[#0E4A84] hover:text-white hover:border-[#0E4A84]"
              />
              <CarouselNext
                aria-label={dict.next}
                className="-right-4 lg:-right-12 bg-white border-[#E5E5E7] text-[#1C1B1F] hover:bg-[#0E4A84] hover:text-white hover:border-[#0E4A84]"
              />
            </div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
