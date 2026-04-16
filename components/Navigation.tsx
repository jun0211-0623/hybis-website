'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';

const navLinks = [
  { label: "소개", href: "/about" },
  { label: "소식", href: "/news" },
  { label: "프로그램", href: "#programs" },
  { label: "학술", href: "#academics" },
  { label: "자료", href: "#resources" },
];

export default function Navigation() {
  const scrolled = useScroll(10);

  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // 현재 페이지에 해당 요소가 없으면 메인 페이지로 이동
        router.push(`/${href}`);
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-[#0A0A0A]/90 supports-[backdrop-filter]:bg-[#0A0A0A]/50 border-[#1E1E1E] backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-lg md:shadow-black/20':
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group"
        >
          <span className="text-white font-bold text-[18px] tracking-[0.02em] font-[family-name:var(--font-display)]">
            HYBIS
          </span>
        </a>

        {/* Nav links - always visible */}
        <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-[#9AA0A6] hover:text-white hover:bg-[#1A1A1A] text-[11px] sm:text-[13px] px-2 sm:px-3 h-8 sm:h-10 flex-shrink-0'
              )}
            >
              {link.label}
            </button>
          ))}
          <GlassButton
            size="sm"
            onClick={() => handleNavClick("#contact")}
            className="flex-shrink-0 hidden sm:inline-block"
          >
            문의하기
          </GlassButton>
        </div>
      </nav>

    </header>
  );
}
