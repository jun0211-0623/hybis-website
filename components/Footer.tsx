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
      {/* Bottom CTA */}
      <div className="bg-[#0A0A0A] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#34A853] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
                </svg>
              </div>
              <span className="text-[14px] text-white font-medium">5 star rating</span>
              <span className="text-[14px] text-[#5F6368] ml-1">연구자 만족도 평가</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-8">
              화폐의 본질을 학문으로 증명하다.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center gap-0 max-w-[440px] mx-auto">
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="flex-1 min-w-0 px-5 py-3.5 text-[15px] border border-[#333] border-r-0 rounded-l-full outline-none focus:border-[#CDEA68] focus:ring-2 focus:ring-[#CDEA68]/20 transition-all duration-200 bg-[#141414] text-white placeholder:text-[#555]"
              />
              <button className="flex-shrink-0 bg-[#CDEA68] hover:bg-[#B8D84E] text-[#0A0A0A] text-[14px] font-semibold px-6 py-3.5 rounded-r-full transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-[#CDEA68]/15">
                프로그램 신청
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#1A1A1A] h-[1px]" />

      {/* Footer Links */}
      <div className="bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[14px] font-semibold text-white mb-4">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-[13px] text-[#5F6368] hover:text-white transition-colors duration-200"
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
              <a href="mailto:iamyam@hanyang.ac.kr" className="text-[#5F6368] hover:text-white text-[12px] transition-colors duration-200">
                iamyam@hanyang.ac.kr
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <a href="tel:02-2220-0751" className="text-[#5F6368] hover:text-white text-[12px] transition-colors duration-200">
                02-2220-0751
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <span className="text-[#5F6368] text-[12px]">서울 성동구 왕십리로 222</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
