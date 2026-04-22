"use client";

import NextImage from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import Gallery from "@/components/Gallery";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type Paragraph = {
  type: string;
  text?: string;
  parts?: { text: string; strong?: boolean }[];
};

type AboutPageDict = {
  backHome: string;
  eyebrowAbout: string;
  title: string;
  intro: string;
  sections: {
    bitcoinology: {
      eyebrow: string;
      title: string;
      paragraphs: Paragraph[];
      director: string;
      directorRole: string;
    };
    mission: {
      eyebrow: string;
      title: string;
      items: { num: string; title: string; desc: string }[];
    };
    history: {
      eyebrow: string;
      title: string;
      items: { date: string; event: string }[];
    };
    organization: {
      eyebrow: string;
      title: string;
      directorRole: string;
      director: { name: string; dept: string };
      groups: {
        title: string;
        members: { name: string; dept: string }[];
      }[];
    };
    partners: {
      eyebrow: string;
      title: string;
      items: { name: string; nameEn: string; image: string }[];
    };
    sponsors: {
      eyebrow: string;
      title: string;
      items: { name: string; nameEn: string; image: string }[];
    };
    contact: {
      eyebrow: string;
      title: string;
      email: string;
      phone: string;
      address: string;
      addressValue: string;
    };
  };
};

type GalleryDict = {
  eyebrow: string;
  title: string;
  body: string;
  more: string;
};

function homeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

function renderParagraph(p: Paragraph, idx: number) {
  if (p.type === "plain") {
    return (
      <p key={idx} className="text-[16px] text-[#4A4A4F] leading-[1.8]">
        {p.text}
      </p>
    );
  }
  return (
    <p key={idx} className="text-[16px] text-[#4A4A4F] leading-[1.8]">
      {(p.parts ?? []).map((part, i) =>
        part.strong ? (
          <strong key={i} className="text-[#1C1B1F]">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  );
}

export default function AboutContent({
  dict,
  galleryDict,
  locale,
}: {
  dict: AboutPageDict;
  galleryDict: GalleryDict;
  locale: Locale;
}) {
  const s = dict.sections;
  return (
    <div className="bg-white pt-[80px]">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <FadeIn>
          <Link
            href={homeHref(locale)}
            className="text-[#6B7280] hover:text-[#0E4A84] text-[14px] flex items-center gap-2 transition-colors mb-8"
          >
            <span>&larr;</span> {dict.backHome}
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrowAbout}
            </p>
          </div>
        </FadeIn>

        <div className="flex items-start justify-between gap-8">
          <div>
            <FadeIn delay={0.15}>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1C1B1F] leading-tight mb-4 tracking-[-0.02em]">
                {dict.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="w-12 h-1 rounded-full bg-[#0E4A84] mb-8" />
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-[#4A4A4F] text-[17px] leading-[1.8] max-w-[680px]">
                {dict.intro}
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

      {/* Bitcoinology intro */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {s.bitcoinology.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-8 tracking-[-0.02em]">
            {s.bitcoinology.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-[720px] space-y-5">
            {s.bitcoinology.paragraphs.map(renderParagraph)}
            <div className="pt-4">
              <p className="text-[15px] text-[#1C1B1F] font-medium">
                {s.bitcoinology.director}
              </p>
              <p className="text-[13px] text-[#6B7280]">
                {s.bitcoinology.directorRole}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* Mission */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {s.mission.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {s.mission.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {s.mission.items.map((item, i) => (
            <FadeIn key={item.num} delay={0.1 + i * 0.08}>
              <div className="bg-[#F5F5F7] rounded-xl border border-[#E5E5E7] p-6 h-full hover:border-[#0E4A84]/40 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0E4A84]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0E4A84] text-[13px] font-bold">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15px] text-[#1C1B1F] font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#4A4A4F] leading-[1.7]">
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

      {/* History */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {s.history.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {s.history.title}
          </h2>
        </FadeIn>

        <div className="max-w-[600px]">
          {s.history.items.map((item, i) => (
            <FadeIn key={item.date} delay={0.1 + i * 0.06}>
              <div className="flex items-start gap-6 relative">
                {i < s.history.items.length - 1 && (
                  <div className="absolute left-[39px] top-8 bottom-0 w-[1px] bg-[#E5E5E7]" />
                )}
                <div className="w-[14px] h-[14px] rounded-full border-2 border-[#0E4A84] bg-white flex-shrink-0 mt-1.5 ml-[33px] relative z-10" />
                <div className="pb-8">
                  <p className="text-[13px] font-mono text-[#0E4A84] mb-1">
                    {item.date}
                  </p>
                  <p className="text-[15px] text-[#1C1B1F] font-medium">
                    {item.event}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Beyond the Page */}
      <Gallery dict={galleryDict} />

      {/* Organization */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {s.organization.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-12 tracking-[-0.02em]">
            {s.organization.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center mb-10">
            <div className="bg-[#0E4A84]/10 border border-[#0E4A84]/30 rounded-2xl px-8 py-5 text-center mb-3">
              <p className="text-[12px] text-[#0E4A84] uppercase tracking-wider mb-1">
                {s.organization.directorRole}
              </p>
              <p className="text-[20px] font-bold text-[#1C1B1F]">
                {s.organization.director.name}
              </p>
              <p className="text-[13px] text-[#4A4A4F]">
                {s.organization.director.dept}
              </p>
            </div>
            <div className="w-[1px] h-10 bg-[#DADADA]" />
            <div className="flex items-center">
              <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#DADADA] hidden lg:block" />
              <div className="w-2 h-2 rounded-full bg-[#DADADA]" />
              <div className="w-[calc(50vw-200px)] max-w-[300px] h-[1px] bg-[#DADADA] hidden lg:block" />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {s.organization.groups.map((group, gi) => (
            <FadeIn key={group.title} delay={0.15 + gi * 0.08}>
              <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] overflow-hidden h-full">
                <div className="bg-white border-b border-[#E5E5E7] px-6 py-4">
                  <h3 className="text-[15px] font-semibold text-[#1C1B1F] text-center">
                    {group.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {group.members.map((member) => (
                      <li key={member.name} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0E4A84]/50 flex-shrink-0 mt-2" />
                        <div>
                          <p className="text-[14px] text-[#1C1B1F] font-medium">
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

      {/* Partners */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {s.partners.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {s.partners.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {s.partners.items.map((partner, i) => (
            <FadeIn key={partner.name} delay={0.1 + i * 0.08}>
              <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-8 flex flex-col items-center text-center hover:border-[#0E4A84]/40 transition-colors duration-200">
                <div className="relative w-[260px] h-[110px] mb-5 flex items-center justify-center bg-white/90 rounded-xl p-4">
                  <NextImage
                    src={partner.image}
                    alt={partner.name}
                    width={260}
                    height={110}
                    className="object-contain max-h-[90px]"
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-[#1C1B1F] mb-1">
                  {partner.name}
                </h3>
                <p className="text-[13px] text-[#6B7280]">{partner.nameEn}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

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
                  alt=""
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

      {/* Sponsors */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {s.sponsors.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-10 tracking-[-0.02em]">
            {s.sponsors.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[600px]">
          {s.sponsors.items.map((sponsor, i) => (
            <FadeIn key={sponsor.name} delay={0.1 + i * 0.08}>
              <div className="bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-8 flex flex-col items-center text-center hover:border-[#0E4A84]/40 transition-colors duration-200">
                <div className="relative w-[160px] h-[70px] mb-5 flex items-center justify-center rounded-xl overflow-hidden">
                  <NextImage
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={160}
                    height={70}
                    className="object-contain max-h-[70px]"
                  />
                </div>
                <h3 className="text-[16px] font-semibold text-[#1C1B1F] mb-1">
                  {sponsor.name}
                </h3>
                <p className="text-[13px] text-[#6B7280]">{sponsor.nameEn}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px] bg-[#0E4A84]" />
            <p className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase">
              {s.contact.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1C1B1F] mb-8 tracking-[-0.02em]">
            {s.contact.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                {s.contact.email}
              </p>
              <a
                href="mailto:iamyam@hanyang.ac.kr"
                className="text-[15px] text-[#1C1B1F] font-medium hover:text-[#0E4A84] transition-colors"
              >
                iamyam@hanyang.ac.kr
              </a>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                {s.contact.phone}
              </p>
              <a
                href="tel:02-2220-0751"
                className="text-[15px] text-[#1C1B1F] font-medium hover:text-[#0E4A84] transition-colors"
              >
                02-2220-0751
              </a>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E5E7] p-5">
              <p className="text-[11px] text-[#6B7280] uppercase tracking-wider mb-1.5">
                {s.contact.address}
              </p>
              <p className="text-[15px] text-[#1C1B1F] font-medium">
                {s.contact.addressValue}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
