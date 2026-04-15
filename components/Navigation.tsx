'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

const navLinks = [
  { label: "소개", href: "/about" },
  { label: "소식", href: "/news" },
  { label: "프로그램", href: "#programs" },
  { label: "학술", href: "#academics" },
  { label: "자료", href: "#resources" },
];

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const router = useRouter();

  const handleNavClick = (href: string) => {
    setOpen(false);
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
            scrolled && !open,
          'bg-[#0A0A0A]/90': open,
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

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-[#9AA0A6] hover:text-white hover:bg-[#1A1A1A] text-[13px]'
              )}
            >
              {link.label}
            </button>
          ))}
          <GlassButton
            size="sm"
            onClick={() => handleNavClick("#contact")}
          >
            문의하기
          </GlassButton>
        </div>

        {/* Mobile hamburger */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-[#2A2A2A] bg-transparent hover:bg-[#1A1A1A] text-white"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'bg-[#0A0A0A]/95 backdrop-blur-xl fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-[#1E1E1E] md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start text-[#F1F3F5] hover:text-[#7EBAB5] hover:bg-[#1A1A1A] text-[15px]'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <GlassButton
              size="default"
              className="w-full"
              onClick={() => handleNavClick("#contact")}
            >
              문의하기
            </GlassButton>
          </div>
        </div>
      </div>
    </header>
  );
}
