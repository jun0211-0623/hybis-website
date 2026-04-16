"use client";

import NextImage from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import Gallery from "@/components/Gallery";

const history = [
  { date: "2025.07", event: "비트코인화폐철학 대학원협동과정 출범" },
  { date: "2025.01", event: "Bitcoinology Lab 모노그래프 시리즈 출간" },
  { date: "2024.05", event: "Bitcoinology Lab 설립" },
  { date: "2024.03", event: "제1기 비트코인화폐철학 최고위과정 개설" },
  { date: "2024.02", event: "비트코인화폐철학 대학원협동과정 정식 인가" },
];

const orgData = {
  director: {
    name: "윤성호 교수",
    dept: "영어영문학과",
    role: "센터장",
  },
  groups: [
    {
      title: "참여교수",
      members: [
        { name: "오태민", dept: "비트코인화폐철학과" },
        { name: "이상욱", dept: "철학과" },
        { name: "이광희", dept: "대중문화시나리오학과" },
        { name: "김승우", dept: "사학과" },
        { name: "이형섭", dept: "영문과" },
        { name: "신성환", dept: "미래인문융합전공학부" },
      ],
    },
    {
      title: "자문위원",
      members: [
        { name: "홍남기", dept: "전 부총리·기획재정부 장관" },
        { name: "윤호주", dept: "한양대학교 의료원장" },
        { name: "유규창", dept: "전 경영대학장, 백남학술정보관장" },
        { name: "김판규", dept: "전 나이지리아 대사, 해군사관학교장" },
        { name: "전진우", dept: "삼일회계법인 파트너 공인회계사" },
        { name: "황재성", dept: "리딩투자증권 헤지펀드운용 본부장" },
        { name: "이원희", dept: "이원희세무회계 대표" },
      ],
    },
    {
      title: "연구원",
      members: [
        { name: "김성현", dept: "" },
        { name: "이승종", dept: "" },
        { name: "강대홍", dept: "" },
        { name: "이창준", dept: "대학원 조교" },
      ],
    },
  ],
};

const partners = [
  {
    name: "경북대 디지털 인문공학 연구센터",
    nameEn: "Digital Humanities Engineering Center",
    image: "/partners/dhec.jpeg",
  },
  {
    name: "오태버스(주)",
    nameEn: "OtaVerse Inc.",
    image: "/partners/otaverse.png",
  },
];

const sponsors = [
  {
    name: "모비커스(주)",
    nameEn: "Mobickers Inc.",
    image: "/partners/mobickers.png",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-[#0A0A0A] pt-[80px]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href="/"
            className="text-[#6B7280] hover:text-white text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> 홈
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              About Bitcoinology Lab
            </p>
          </div>
        </FadeIn>

        <div className="flex items-start justify-between gap-8">
          <div>
            <FadeIn delay={0.15}>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4 tracking-[-0.02em]">
                센터 소개
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="w-12 h-1 rounded-full bg-[#7EBAB5] mb-8" />
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-[#9AA0A6] text-[17px] leading-[1.8] max-w-[680px]">
                Bitcoinology Lab은 디지털 화폐와 인공지능이 결합하는 시대에
                가치(value)·신뢰(trust)·사회(society)가 어떻게 재구성되는지를
                인문학적으로 탐구하는 학제적 연구 허브입니다.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <NextImage
              src="/logo-hybis.jpeg"
              alt="Bitcoinology Lab Logo"
              width={180}
              height={150}
              className="rounded-xl flex-shrink-0 hidden md:block"
            />
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* 소개 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              About
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-8 tracking-[-0.02em]">
            Bitcoinology란
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-[720px] space-y-5">
            <p className="text-[16px] text-[#9AA0A6] leading-[1.8]">
              &lsquo;Bitcoinology&rsquo;는 비트코인을 단순한 기술이나 투자대상이 아니라, <strong className="text-white">신뢰의 계산화·제도화, 화폐와 주권의 재배치, 자유와 공동체의 재정의</strong>를 촉발하는 문명사적 실험으로 읽어내는 연구영역을 뜻합니다.
            </p>
            <p className="text-[16px] text-[#9AA0A6] leading-[1.8]">
              본 랩은 철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS) 등을 연결하여 블록체인, 플랫폼, AI 기반 의사결정 시스템 등 <strong className="text-white">연산적 신뢰(computational trust)</strong>의 인프라와 상상력을 분석합니다.
            </p>
            <p className="text-[16px] text-[#9AA0A6] leading-[1.8]">
              개념 분석과 텍스트 읽기를 기반으로 하되, 시장·규제·일상적 실천에 대한 경험적 연구를 결합해 실제 세계의 변화를 입체적으로 해명합니다. 세미나·워크숍·출판·공동 프로젝트를 통해 학문적 엄밀성과 공적 통찰을 함께 생산하는 것이 목표입니다.
            </p>
            <div className="pt-4">
              <p className="text-[15px] text-white font-medium">윤성호</p>
              <p className="text-[13px] text-[#6B7280]">Bitcoinology Lab 센터장 · 한양대학교 영어영문학과 교수</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* 설립 취지 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Mission
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            설립 취지
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              num: "01",
              title: "가치·신뢰·사회의 인문학적 탐구",
              desc: "비트코인을 문명사적 실험으로 읽어내며, 공동체의 조율 방식, 권위의 정당화, 화폐와 자유의 의미가 어떻게 재편되는지 인문학적으로 분석합니다.",
            },
            {
              num: "02",
              title: "연산적 신뢰의 인프라 연구",
              desc: "블록체인, 플랫폼, AI 기반 의사결정 시스템 등 computational trust의 인프라와 상상력을 철학·윤리·정치사상의 렌즈로 분석합니다.",
            },
            {
              num: "03",
              title: "학제적 융합 연구",
              desc: "철학, 문학·문화연구, 지성사, 윤리학, 정치사상, 과학기술학(STS)을 연결하고, 시장·규제·일상 실천에 대한 경험적 연구를 결합합니다.",
            },
            {
              num: "04",
              title: "학문적 엄밀성과 공적 통찰",
              desc: "세미나·워크숍·출판·공동 프로젝트를 통해 엄밀한 학술 연구와 사회적 통찰을 함께 생산하고, 더 책임 있는 미래를 설계합니다.",
            },
          ].map((item, i) => (
            <FadeIn key={item.num} delay={0.1 + i * 0.08}>
              <div className="bg-[#111111] rounded-xl border border-[#1E1E1E] p-6 h-full hover:border-[#333] transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7EBAB5] text-[13px] font-bold">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15px] text-white font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#9AA0A6] leading-[1.7]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 연혁 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              History
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            연혁
          </h2>
        </FadeIn>

        <div className="max-w-[600px]">
          {history.map((item, i) => (
            <FadeIn key={item.date} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-6 relative">
                {/* Timeline line */}
                {i < history.length - 1 && (
                  <div className="absolute left-[39px] top-8 bottom-0 w-[1px] bg-[#1E1E1E]" />
                )}
                {/* Dot */}
                <div className="w-[14px] h-[14px] rounded-full border-2 border-[#7EBAB5] bg-[#0A0A0A] flex-shrink-0 mt-1.5 ml-[33px] relative z-10" />
                {/* Content */}
                <div className="pb-8">
                  <p className="text-[13px] font-mono text-[#7EBAB5] mb-1">
                    {item.date}
                  </p>
                  <p className="text-[15px] text-white font-medium">
                    {item.event}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Beyond the Page - 활동 사진 */}
      <Gallery />

      {/* 조직도 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Organization
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-12 tracking-[-0.02em]">
            조직 구성
          </h2>
        </FadeIn>

        {/* Director */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center mb-10">
            <div className="bg-[#7EBAB5]/10 border border-[#7EBAB5]/30 rounded-2xl px-8 py-5 text-center mb-3">
              <p className="text-[12px] text-[#7EBAB5] uppercase tracking-wider mb-1">
                {orgData.director.role}
              </p>
              <p className="text-[20px] font-bold text-white">
                {orgData.director.name}
              </p>
              <p className="text-[13px] text-[#9AA0A6]">
                {orgData.director.dept}
              </p>
            </div>
            {/* Connector line */}
            <div className="w-[1px] h-10 bg-[#2A2A2A]" />
            <div className="flex items-center">
              <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#2A2A2A] hidden lg:block" />
              <div className="w-2 h-2 rounded-full bg-[#2A2A2A]" />
              <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#2A2A2A] hidden lg:block" />
            </div>
          </div>
        </FadeIn>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {orgData.groups.map((group, gi) => (
            <FadeIn key={group.title} delay={0.15 + gi * 0.08}>
              <div className="bg-[#111111] rounded-2xl border border-[#1E1E1E] overflow-hidden h-full">
                <div className="bg-[#141414] border-b border-[#1E1E1E] px-6 py-4">
                  <h3 className="text-[15px] font-semibold text-white text-center">
                    {group.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {group.members.map((member) => (
                      <li key={member.name} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7EBAB5]/50 flex-shrink-0 mt-2" />
                        <div>
                          <p className="text-[14px] text-white font-medium">
                            {member.name}
                          </p>
                          {member.dept && (
                            <p className="text-[12px] text-[#6B7280]">
                              {member.dept}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 협력 기관 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Partners
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            협력 기관
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {partners.map((partner, i) => (
            <FadeIn key={partner.name} delay={0.1 + i * 0.08}>
              <div className="bg-[#111111] rounded-2xl border border-[#1E1E1E] p-8 flex flex-col items-center text-center hover:border-[#333] transition-colors duration-200">
                <div className="relative w-[260px] h-[110px] mb-5 flex items-center justify-center bg-white/90 rounded-xl p-4">
                  <NextImage
                    src={partner.image}
                    alt={partner.name}
                    width={260}
                    height={110}
                    className="object-contain max-h-[90px]"
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {partner.name}
                </h3>
                <p className="text-[13px] text-[#6B7280]">{partner.nameEn}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 협력 활동 사진 슬라이더 */}
      <div className="py-12 lg:py-16 overflow-hidden">
        <div className="partner-slider-mask">
          <div className="partner-slider-animate flex gap-4 w-max">
            {[2, 3, 4, 5, 2, 3, 4, 5].map((num, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] lg:w-[340px] lg:h-[220px] rounded-xl overflow-hidden"
              >
                <NextImage
                  src={`/partner-photos/partner-${num}.jpg`}
                  alt={`협력 활동 사진 ${num}`}
                  width={340}
                  height={220}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* 후원 기관 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Sponsors
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-10 tracking-[-0.02em]">
            후원 기관
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[600px]">
          {sponsors.map((sponsor, i) => (
            <FadeIn key={sponsor.name} delay={0.1 + i * 0.08}>
              <div className="bg-[#111111] rounded-2xl border border-[#1E1E1E] p-8 flex flex-col items-center text-center hover:border-[#333] transition-colors duration-200">
                <div className="relative w-[160px] h-[70px] mb-5 flex items-center justify-center rounded-xl overflow-hidden">
                  <NextImage
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={160}
                    height={70}
                    className="object-contain max-h-[70px]"
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-1">
                  {sponsor.name}
                </h3>
                <p className="text-[13px] text-[#6B7280]">{sponsor.nameEn}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* 연락처 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Contact
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-8 tracking-[-0.02em]">
            연락처
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-[#141414] rounded-xl border border-[#1E1E1E] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                Email
              </p>
              <a
                href="mailto:iamyam@hanyang.ac.kr"
                className="text-[15px] text-white font-medium hover:text-[#7EBAB5] transition-colors"
              >
                iamyam@hanyang.ac.kr
              </a>
            </div>
            <div className="bg-[#141414] rounded-xl border border-[#1E1E1E] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                Phone
              </p>
              <a
                href="tel:02-2220-0751"
                className="text-[15px] text-white font-medium hover:text-[#7EBAB5] transition-colors"
              >
                02-2220-0751
              </a>
            </div>
            <div className="bg-[#141414] rounded-xl border border-[#1E1E1E] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                Address
              </p>
              <p className="text-[15px] text-white font-medium">
                서울 성동구 왕십리로 222 한양대학교
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
