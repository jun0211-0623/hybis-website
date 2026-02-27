"use client";

import { FadeIn } from "./FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#050505] border-t border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-[#5F6368] text-[13px] tracking-[0.08em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-white leading-tight mb-4">
              연구소에 대해
              <br />
              더 알고 싶으신가요?
            </h2>
            <p className="text-[#9AA0A6] text-[16px] leading-relaxed mb-8 max-w-md">
              프로그램 참여, 연구 협력, 기타 문의 사항은 아래 연락처로 편하게
              연락 주세요.
            </p>
            <a
              href="mailto:iamyam@hanyang.ac.kr"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A0A0A] text-[14px] font-medium tracking-wide transition-all duration-200 rounded-full hover:bg-[#E8EAED]"
            >
              이메일 보내기
              <span>&rarr;</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8 lg:pt-10">
              <div>
                <p className="text-[#5F6368] text-[12px] tracking-[0.1em] uppercase mb-2">
                  이메일
                </p>
                <a
                  href="mailto:iamyam@hanyang.ac.kr"
                  className="text-[#F1F3F5] hover:text-[#4285F4] transition-colors duration-200 text-[16px]"
                >
                  iamyam@hanyang.ac.kr
                </a>
              </div>
              <div>
                <p className="text-[#5F6368] text-[12px] tracking-[0.1em] uppercase mb-2">
                  전화
                </p>
                <a
                  href="tel:02-2220-0751"
                  className="text-[#F1F3F5] hover:text-[#4285F4] transition-colors duration-200 text-[16px]"
                >
                  02-2220-0751
                </a>
              </div>
              <div>
                <p className="text-[#5F6368] text-[12px] tracking-[0.1em] uppercase mb-2">
                  주소
                </p>
                <p className="text-[#F1F3F5] text-[16px]">
                  서울특별시 성동구 왕십리로 222
                </p>
                <p className="text-[#5F6368] text-[14px] mt-0.5">
                  한양대학교 서울캠퍼스
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5F6368] text-[12px]">
            &copy; {currentYear} HYBIS &mdash; Hanyang Bitcoin Interdisciplinary
            Studies
          </p>
          <p className="text-[#5F6368] text-[12px]">
            한양대학교 비트코인 학제간연구소
          </p>
        </div>
      </div>
    </footer>
  );
}
