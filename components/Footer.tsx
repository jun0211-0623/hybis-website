"use client";

import { FadeIn } from "./FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#080E1A] border-t border-[#1E2D40]">
      {/* Contact section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: CTA */}
          <FadeIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#E8E6E0] mb-4 leading-tight">
              연구소에 대해
              <br />
              <span className="text-[#C9A84C]">더 알고 싶으신가요?</span>
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              프로그램 참여, 연구 협력, 기타 문의 사항은 아래 연락처로 편하게 연락 주세요.
            </p>
            <a
              href="mailto:iamyam@hanyang.ac.kr"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] text-sm tracking-wide transition-all duration-200 rounded-sm hover:bg-[#C9A84C]/5"
            >
              이메일 보내기
              <span>→</span>
            </a>
          </FadeIn>

          {/* Right: Contact info */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-2">이메일</p>
                <a
                  href="mailto:iamyam@hanyang.ac.kr"
                  className="text-[#E8E6E0] hover:text-[#C9A84C] transition-colors duration-200"
                >
                  iamyam@hanyang.ac.kr
                </a>
              </div>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-2">전화</p>
                <a
                  href="tel:02-2220-0751"
                  className="text-[#E8E6E0] hover:text-[#C9A84C] transition-colors duration-200"
                >
                  02-2220-0751
                </a>
              </div>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-2">주소</p>
                <p className="text-[#E8E6E0]">
                  서울특별시 성동구 왕십리로 222
                  <br />
                  <span className="text-[#94A3B8] text-sm">한양대학교 서울캠퍼스</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2D40]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94A3B8] text-xs tracking-wide">
            © {currentYear} HYBIS — Hanyang Bitcoin Interdisciplinary Studies
          </p>
          <p className="text-[#94A3B8] text-xs">
            한양대학교 비트코인 학제간연구소
          </p>
        </div>
      </div>
    </footer>
  );
}
