"use client";

import { FadeIn } from "./FadeIn";
import { GlassButton } from "@/components/ui/glass-button";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type FooterDict = {
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    contact: string;
    viewPrograms: string;
  };
  groups: { title: string; links: { label: string; href: string }[] }[];
  copyright: string;
  contacts: {
    email: string;
    phone: string;
    address: string;
    deptLink: string;
  };
};

function withLocale(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (locale === defaultLocale) return href;
  // Handle "/#academics" style
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export default function Footer({
  dict,
  locale,
}: {
  dict: FooterDict;
  locale: Locale;
}) {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href === "#") return;
    router.push(withLocale(href, locale));
  };

  const programsHref = withLocale("/#programs", locale);

  return (
    <footer id="contact">
      {/* CTA section */}
      <div className="bg-[#1C1B1F] relative overflow-hidden">
        <div className="section-divider-dark" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5B9BD5]/[0.08] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-8 h-[2px] bg-[#5B9BD5]" />
              <span className="text-[#5B9BD5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
                {dict.cta.eyebrow}
              </span>
              <div className="w-8 h-[2px] bg-[#5B9BD5]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
              {dict.cta.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-white/70 text-[16px] mb-10 max-w-[420px] mx-auto leading-relaxed">
              {dict.cta.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <a href={`mailto:${dict.contacts.email}`}>
                <GlassButton size="default" className="glass-on-dark">
                  {dict.cta.contact}
                </GlassButton>
              </a>
              <a href={programsHref}>
                <GlassButton size="default" className="glass-on-dark">
                  {dict.cta.viewPrograms}
                </GlassButton>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#1C1B1F] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {dict.groups.map((group) => (
              <div key={group.title}>
                <h4 className="text-[14px] font-semibold text-white mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-[13px] text-white/50 hover:text-[#5B9BD5] transition-colors duration-200"
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

        <div className="border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[15px] font-[family-name:var(--font-display)]">
                {dict.copyright}
              </span>
              <span className="text-white/30 text-[12px]">
                &copy; {currentYear} {dict.copyright}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1">
              <a
                href={`mailto:${dict.contacts.email}`}
                className="text-white/50 hover:text-[#5B9BD5] text-[12px] transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {dict.contacts.email}
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a
                href={`tel:${dict.contacts.phone.replace(/[^0-9+]/g, "")}`}
                className="text-white/50 hover:text-[#5B9BD5] text-[12px] transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {dict.contacts.phone}
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-white/50 text-[12px]">
                {dict.contacts.address}
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a
                href="https://bitcoinphilosophy.hanyang.ac.kr/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#5B9BD5] text-[12px] transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {dict.contacts.deptLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
