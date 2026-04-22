"use client";

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

  return (
    <footer>
      <div className="bg-[#1C1B1F]">
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
