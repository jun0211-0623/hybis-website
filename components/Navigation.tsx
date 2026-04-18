'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';

const navLinks = [
  { label: "소개", href: "/about" },
  { label: "소식", href: "/news" },
  { label: "프로그램", href: "#programs" },
  { label: "자료", href: "#resources" },
];

export default function Navigation() {
  const scrolled = useScroll(10);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    }
  };

  return (
    <>
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
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-[18px] tracking-[0.02em] font-[family-name:var(--font-display)]">
              Bitcoinology Lab
            </span>
          </a>

          {/* Desktop: inline nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'text-[#9AA0A6] hover:text-white hover:bg-[#1A1A1A] text-[13px] px-3 h-10 flex-shrink-0'
                )}
              >
                {link.label}
              </button>
            ))}
            <GlassButton
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="flex-shrink-0 ml-1"
            >
              문의하기
            </GlassButton>
          </div>

          {/* Mobile: hamburger toggle */}
          <button
            type="button"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#E5E7EB] hover:text-white hover:bg-[#1A1A1A] transition-colors"
          >
            <MenuToggleIcon open={open} className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden="true"
      />

      {/* Mobile drawer panel (slides in from the right, unfolding leftward) */}
      <aside
        id="primary-navigation"
        aria-hidden={!open}
        className={cn(
          'md:hidden fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm border-l border-[#1E1E1E] bg-[#0A0A0A] shadow-2xl shadow-black/40 transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-14 items-center justify-end px-4">
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#E5E7EB] hover:text-white hover:bg-[#1A1A1A] transition-colors"
          >
            <MenuToggleIcon open={true} className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-4 pb-10 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[#E5E7EB] hover:text-white hover:bg-[#151515] rounded-md px-3 py-3.5 text-[17px] font-medium tracking-[-0.01em] transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="mt-6 px-1">
            <GlassButton
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="w-full"
            >
              문의하기
            </GlassButton>
          </div>
        </nav>
      </aside>
    </>
  );
}
