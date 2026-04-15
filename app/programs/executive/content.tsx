"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { GlassButton } from "@/components/ui/glass-button";

const lecturers = [
  { name: "Roland B Wilson", topic: "한반도에 대한 지정학적 이해: 미국의 관점", role: "한국조지메이슨대학교 분쟁분석 및 해결학부 교수" },
  { name: "고동진", topic: "AI의 현재! 우리는 무엇을 준비해야하는가?", role: "서울 강남구병 국회의원, 전 삼성전자 대표이사" },
  { name: "김동욱", topic: "비트코인 상용화의 첫 걸음: 라이트닝 네트워크", role: "㈜BetweenBits 대표" },
  { name: "김승주", topic: "비트코인과 국내외 스캠코인의 본질적 차이", role: "고려대학교 정보보호대학원 교수" },
  { name: "김연규", topic: "21세기 지정학과 기술: 글로벌 공급망과 전기차 배터리", role: "한양대학교 국제학대학원장" },
  { name: "김희진", topic: "느리게 나이 드는 기억력의 비밀", role: "한양대학교 의과대학 신경과학교실 교수" },
  { name: "남석관", topic: "손실 없는 투자원칙", role: "베스트인컴 회장" },
  { name: "백용기", topic: "블록체인분석을 통한 자금세탁방지(AML) 방안", role: "체이널리시스 코리아 지사장" },
  { name: "안병진", topic: "트럼피즘과 미국대선", role: "경희대학교 미래문명원 교수" },
  { name: "오태민", topic: "비트코인과 화폐현상", role: "한양대학교 비트코인화폐철학 겸임교수" },
  { name: "유철균", topic: "신라왕경 메타버스", role: "경북연구원장" },
  { name: "윤성호", topic: "나카모토 사토시를 찾아서", role: "한양대학교 영어영문학과 교수" },
  { name: "이상욱", topic: "NFT 인문학, 인공지능과 예술, AI 시대 미래", role: "한양대학교 철학과 및 인공지능학과 교수" },
  { name: "이장원", topic: "가상자산 과세 유예와 국세청 과세 체계", role: "세무법인 리치 대표" },
  { name: "이정엽", topic: "가상자산 규제와 금융혁신", role: "법무법인 로집사 대표변호사" },
  { name: "정석문", topic: "가상자산의 본질과 제도권화 트렌드", role: "프레스토 리서치 센터장" },
  { name: "정지열", topic: "암호화폐와 자금세탁", role: "한양대학교 컴퓨터S/W학부 겸임교수" },
  { name: "정희원", topic: "불확실성과 스트레스에서 나를 지키는 습관", role: "서울아산병원 노년내과 임상조교수" },
  { name: "조재우", topic: "비트코인 채굴과 내재가치", role: "한성대학교 사회과학부 교수" },
  { name: "최진홍", topic: "가상자산 투자 사기의 주요 유형 및 법률적 쟁점", role: "법무법인YK 파트너변호사" },
  { name: "홍남기", topic: "한국경제 점프업을 위한 6개 매듭풀이와 가상자산", role: "한국항공대학교 석좌교수, 전 경제부총리" },
];

export default function ExecutiveContent() {
  return (
    <div className="bg-[#0A0A0A] pt-[80px]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href="/#programs"
            className="text-[#6B7280] hover:text-white text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> 프로그램
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Executive Program
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4 tracking-[-0.02em]">
            비트코인화폐철학 최고위과정
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-12 h-1 rounded-full bg-[#7EBAB5] mb-8" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[#9AA0A6] text-[17px] leading-[1.8] max-w-[680px] mb-6">
            비트코인이라는 지적 현상은 화폐의 모든 이슈가 &lsquo;오래된 미래&rsquo;임을 보여줍니다.
            본 과정은 비트코인을 단순한 기술이나 경제 현상이 아닌 &lsquo;화폐현상&rsquo;으로 정의하며,
            새로운 금융 형태의 탐구뿐 아니라 인류의 가치관과 사회 구조에 미치는 영향을
            다학제적으로 분석합니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-xl px-5 py-3">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-0.5">주임교수</p>
              <p className="text-[15px] text-white font-medium">윤성호</p>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-xl px-5 py-3">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-0.5">강사진</p>
              <p className="text-[15px] text-white font-medium">21명</p>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-xl px-5 py-3">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-0.5">대상</p>
              <p className="text-[15px] text-white font-medium">기업 임원·정책 관계자·전문가</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* Curriculum */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Curriculum
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            커리큘럼
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lecturers.map((lecturer, i) => (
            <motion.div
              key={lecturer.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
            >
              <div className="group bg-[#111111] rounded-xl border border-[#1E1E1E] p-5 hover:border-[#333] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#7EBAB5] text-[12px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[15px] text-white font-medium mb-1">
                      {lecturer.topic}
                    </p>
                    <p className="text-[13px] text-[#9AA0A6]">
                      {lecturer.name}
                    </p>
                    <p className="text-[12px] text-[#6B7280]">
                      {lecturer.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <FadeIn>
          <h3 className="text-[24px] font-bold text-white mb-4">
            참여를 원하시나요?
          </h3>
          <p className="text-[#9AA0A6] text-[15px] mb-8 max-w-[400px] mx-auto">
            최고위과정에 대한 문의 사항이 있으시면 연락해 주세요.
          </p>
          <a href="mailto:iamyam@hanyang.ac.kr">
            <GlassButton size="default">
              문의하기 →
            </GlassButton>
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
