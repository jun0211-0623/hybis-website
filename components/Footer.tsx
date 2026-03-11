"use client";

import { FadeIn } from "./FadeIn";

const footerLinks = [
  {
    title: "연구소",
    links: [
      { label: "소개", href: "#about" },
      { label: "연구진", href: "#" },
      { label: "연혁", href: "#" },
      { label: "오시는 길", href: "#" },
      { label: "채용", href: "#" },
    ],
  },
  {
    title: "연구",
    links: [
      { label: "화폐철학", href: "#research" },
      { label: "비트코인 분석", href: "#research" },
      { label: "법·제도 연구", href: "#research" },
      { label: "경제학 연구", href: "#research" },
      { label: "정책 자문", href: "#research" },
    ],
  },
  {
    title: "프로그램",
    links: [
      { label: "심화과정", href: "#programs" },
      { label: "대학원 협동과정", href: "#programs" },
      { label: "워크숍", href: "#" },
      { label: "수료 안내", href: "#" },
    ],
  },
  {
    title: "학술 활동",
    links: [
      { label: "국제 학술대회", href: "#academics" },
      { label: "정기 콜로키움", href: "#academics" },
      { label: "초청 세미나", href: "#academics" },
      { label: "학술 캘린더", href: "#" },
    ],
  },
  {
    title: "자료실",
    links: [
      { label: "정책보고서", href: "#resources" },
      { label: "뉴스레터", href: "#resources" },
      { label: "학술논문", href: "#resources" },
      { label: "출판물", href: "#resources" },
      { label: "뉴스 & 미디어", href: "#" },
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
              <a
                href="mailto:iamyam@hanyang.ac.kr"
                className="inline-block bg-[#7EBAB5] hover:bg-[#6AA8A3] text-[#0A0A0A] text-[14px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#7EBAB5]/20"
              >
                Contact Us
              </a>
              <button
                onClick={() => handleNavClick("#programs")}
                className="text-white text-[14px] font-medium flex items-center gap-2 border border-[#333] px-6 py-3 rounded-full hover:border-[#555] transition-all duration-200"
              >
                프로그램 보기
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
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
                        className="text-[13px] text-[#5F6368] hover:text-[#7EBAB5] transition-colors duration-200"
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
                className="text-[#5F6368] hover:text-[#7EBAB5] text-[12px] transition-colors duration-200"
              >
                iamyam@hanyang.ac.kr
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <a
                href="tel:02-2220-0751"
                className="text-[#5F6368] hover:text-[#7EBAB5] text-[12px] transition-colors duration-200"
              >
                02-2220-0751
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <span className="text-[#5F6368] text-[12px]">
                서울 성동구 왕십리로 222
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
