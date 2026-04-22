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

type ResourcesDict = {
  eyebrow: string;
  title: string;
  body: string;
  tabs: { monograph: string; paper: string; report: string };
  monographBadge: string;
  authorSuffix: string;
  isbnPrefix: string;
  moreLink: string;
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

interface PaperItem {
  id: string;
  categoryKey: "paper" | "report";
  title: string;
  summary: string;
  date: string;
  color: string;
  url: string;
}

export default function Resources({
  dict,
  monographs,
  papersAndReports,
}: {
  dict: ResourcesDict;
  monographs: MonographItem[];
  papersAndReports: PaperItem[];
}) {
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
      ? papersAndReports.filter((i) => i.categoryKey === "paper")
      : activeTab === "report"
      ? papersAndReports.filter((i) => i.categoryKey === "report")
      : [];

  const TABS: { key: TabKey; label: string }[] = [
    { key: "monograph", label: dict.tabs.monograph },
    { key: "paper", label: dict.tabs.paper },
    { key: "report", label: dict.tabs.report },
  ];

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-10 flex flex-col justify-between md:mb-14 md:flex-row md:items-end">
          <div>
            <FadeIn>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-[2px] bg-[#0E4A84]" />
                <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                  {dict.eyebrow}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em] mb-3">
                {dict.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#4A4A4F] text-[15px] max-w-[440px]">
                {dict.body}
              </p>
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

        <FadeIn delay={0.15}>
          <div
            role="tablist"
            aria-label={dict.title}
            className="mb-10 flex flex-wrap gap-2 border-b border-[#E5E5E7]"
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
                    active ? "text-[#0E4A84]" : "text-[#4A4A4F] hover:text-[#1C1B1F]"
                  )}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-px h-[2px] bg-[#0E4A84] rounded-full" />
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
                    <div className="group rounded-2xl border border-[#E5E5E7] bg-white overflow-hidden hover:border-[#0E4A84]/40 hover:shadow-xl hover:shadow-[#0E4A84]/10 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-gradient-to-b from-[#F5F5F7] to-[#ECECEF] flex items-center justify-center">
                        <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] h-[175px] sm:h-[200px] lg:h-[230px] group-hover:scale-[1.03] transition-transform duration-500">
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full blur-xl bg-[#0E4A84]/20" />
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                            className="object-cover rounded-sm shadow-2xl"
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 border border-[#E5E5E7]">
                          <span className="text-[12px] font-mono text-[#1C1B1F]">
                            {book.year}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[11px] font-medium text-[#0E4A84] bg-[#0E4A84]/10 px-2.5 py-1 rounded-full">
                            {dict.monographBadge}
                          </span>
                          <span className="text-[12px] text-[#6B7280]">
                            {book.author}
                            {dict.authorSuffix}
                          </span>
                        </div>

                        <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#1C1B1F] mb-1">
                          {book.title}
                        </h3>
                        {book.subtitle && (
                          <p className="text-[14px] text-[#6B7280] italic mb-3">
                            {book.subtitle}
                          </p>
                        )}
                        <p className="text-[14px] text-[#4A4A4F] leading-relaxed mb-4 line-clamp-3">
                          {book.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-[#E5E5E7] space-y-1">
                          {book.publisher && (
                            <p className="text-[12px] text-[#6B7280]">
                              {book.publisher}
                            </p>
                          )}
                          <p className="text-[12px] text-[#6B7280] font-mono">
                            {dict.isbnPrefix} {book.isbn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              : paperItems.map((item) => {
                  const categoryLabel =
                    item.categoryKey === "paper"
                      ? dict.tabs.paper
                      : dict.tabs.report;
                  return (
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
                                  {categoryLabel}
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
                                <p className="text-[13px] text-[#4A4A4F] leading-relaxed line-clamp-2">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                            <div
                              className="absolute inset-0 rounded-xl border transition-colors duration-200 group-hover:border-[#C4C4C8]"
                              style={{ borderColor: `${item.color}20` }}
                            />
                          </div>
                        </div>
                        <div className="mb-2 line-clamp-3 break-words pt-4 text-[17px] font-semibold text-[#1C1B1F] md:mb-3 md:text-[18px] group-hover:text-[#0E4A84] transition-colors duration-200">
                          {item.title}
                        </div>
                        <div className="mb-6 line-clamp-2 text-[14px] text-[#4A4A4F] leading-relaxed">
                          {item.summary}
                        </div>
                        <div className="flex items-center text-[13px] text-[#6B7280] group-hover:text-[#0E4A84] transition-colors duration-200">
                          {dict.moreLink}
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </a>
                    </CarouselItem>
                  );
                })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
