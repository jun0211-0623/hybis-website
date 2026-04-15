"use client";

import { FadeIn } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

const footerLinks = [
  {
    title: "연구소",
    links: [
      { label: "소개", href: "#about" },
      { label: "연구 분야", href: "#about" },
    ],
  },
  {
    title: "프로그램",
    links: [
      { label: "석사 과정", href: "#programs" },
      { label: "박사 과정", href: "#programs" },
    ],
  },
  {
    title: "학술 활동",
    links: [
      { label: "행사 및 활동", href: "#academics" },
    ],
  },
  {
    title: "자료",
    links: [
      { label: "연구성과", href: "#research" },
      { label: "정책보고서", href: "#resources" },
      { label: "뉴스레터", href: "#resources" },
      { label: "학술논문", href: "#resources" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact">
      {/* CTA section */}
      <div className="bg-[#0A0A0A] relative overflow-hidden">
        <div className="section-divider" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7EBAB5]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-8 h-[2px] bg-[#7EBAB5]" />
              <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
                Join Us
              </span>
              <div className="w-8 h-[2px] bg-[#7EBAB5]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
              함께 연구에 참여하세요.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-[#9AA0A6] text-[16px] mb-10 max-w-[420px] mx-auto leading-relaxed">
              비트코인과 화폐철학의 미래를 함께 만들어갈 연구자, 학생, 기관의 참여를 기다립니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:iamyam@hanyang.ac.kr">
                <GlassButton size="default">
                  Contact Us
                </GlassButton>
              </a>
              <GlassButton
                size="default"
                onClick={() => handleNavClick("#programs")}
              >
                프로그램 보기
              </GlassButton>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[14px] font-semibold text-white mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-[13px] text-[#6B7280] hover:text-[#7EBAB5] transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#1A1A1A]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[15px]">HYBIS</span>
              <span className="text-[#333] text-[12px]">
                &copy; {currentYear} Hanyang Bitcoin Interdisciplinary Studies
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:iamyam@hanyang.ac.kr"
                className="text-[#6B7280] hover:text-[#7EBAB5] text-[12px] transition-colors duration-200"
              >
                iamyam@hanyang.ac.kr
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <a
                href="tel:02-2220-0751"
                className="text-[#6B7280] hover:text-[#7EBAB5] text-[12px] transition-colors duration-200"
              >
                02-2220-0751
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <span className="text-[#6B7280] text-[12px]">
                서울 성동구 왕십리로 222
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
