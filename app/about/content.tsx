"use client";

import NextImage from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const history = [
  { date: "2025.07", event: "비트코인화폐철학 대학원협동과정 출범" },
  { date: "2025.01", event: "HYBIS 모노그래프 시리즈 출간" },
  { date: "2024.05", event: "HYBIS 설립" },
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
    image: "/partners/mobickers.jpg",
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
              About HYBIS
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
                한양대학교 비트코인화폐철학연구센터(HYBIS)는 경제학, 철학, 법학,
                컴퓨터과학의 관점에서 화폐와 비트코인을 학제적으로 연구하는
                인문과학대학 소속 연구센터입니다.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <NextImage
              src="/logo-hybis.jpeg"
              alt="HYBIS Logo"
              width={180}
              height={150}
              className="rounded-xl flex-shrink-0 hidden md:block"
            />
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* 인사말 */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#7EBAB5]" />
            <p className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase">
              Greeting
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-8 tracking-[-0.02em]">
            센터장 인사말
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-[720px] space-y-5">
            <p className="text-[16px] text-[#9AA0A6] leading-[1.8]">
              HYBIS는 비트코인 연구에서 기술적 접근보다 <strong className="text-white">인문학적 질문</strong>을 중심에 놓습니다.
              &lsquo;블록체인의 처리 속도와 비용&rsquo;이 아니라 &lsquo;디지털 희소성이 인간의 삶과 공동체를 어떻게 다시
              사유하게 만드는가?&rsquo;라는 질문을 던집니다.
            </p>
            <p className="text-[16px] text-[#9AA0A6] leading-[1.8]">
              HYBIS의 학제성은 철학·역사·문화 연구에 기반하면서, 경제학과 컴퓨터공학 기법을 선택적으로 활용합니다.
              서로 다른 언어코드와 텍스트, 데이터와 은유, 수식과 윤리가 맞부딪치는 접점에서 새로운 지식을 창출하려 합니다.
            </p>
            <div className="pt-4">
              <p className="text-[15px] text-white font-medium">윤성호</p>
              <p className="text-[13px] text-[#6B7280]">HYBIS 센터장 · 한양대학교 영어영문학과 교수</p>
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
              title: "화폐 개념의 전환적 탐구",
              desc: "아리스토텔레스부터 현대 코드 기반 합의까지 연속적으로 검토하여, 가치·권력·윤리의 삼중 구조를 동시대 언어로 재구성합니다.",
            },
            {
              num: "02",
              title: "지식의 다차원적 연결",
              desc: "철학·역사·문화연구를 주축으로 하되, 암호경제학·분산시스템 공학·법·회계 등을 유기적으로 결합합니다.",
            },
            {
              num: "03",
              title: "현실 문제에 대한 실천적 개입",
              desc: "경험적 데이터와 비판적 이론을 결합하여 디지털 화폐의 다층적 영향을 분석하고, 정책·교육·사회 예술 프로그램으로 환류시킵니다.",
            },
            {
              num: "04",
              title: "다음 세대를 위한 학습 생태계",
              desc: "대학원 전공·집중 워크숍·최고위과정을 통해 코드·데이터·담론을 통합적으로 해석하고 설계하는 역량을 개발합니다.",
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

      <div className="section-divider" />

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
                <div className="relative w-[140px] h-[60px] mb-5 flex items-center justify-center">
                  <NextImage
                    src={partner.image}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="object-contain max-h-[60px]"
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
                <div className="relative w-[140px] h-[60px] mb-5 flex items-center justify-center">
                  <NextImage
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={140}
                    height={60}
                    className="object-contain max-h-[60px]"
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
