'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import type { Locale } from '@/lib/i18n/config';
import { defaultLocale, locales } from '@/lib/i18n/config';

type NavChild = { label: string; href: string };
type NavLink =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

type NavDict = {
  links: NavLink[];
  contact: string;
  openMenu: string;
  closeMenu: string;
};

function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(`/${l}`.length);
  }
  return pathname;
}

function withLocale(path: string, locale: Locale): string {
  if (path.startsWith('#')) return path;
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

export default function Navigation({
  dict,
  locale,
}: {
  dict: NavDict;
  locale: Locale;
}) {
  const scrolledY = useScroll(10);
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const homePath = locale === defaultLocale ? '/' : `/${locale}`;
  const onHome = pathname === homePath;
  const onDarkHero = onHome && !scrolledY;
  const scrolled = !onDarkHero;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const navigateTo = (href: string) => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
    if (href.startsWith('#')) {
      if (!onHome) {
        router.push(`${homePath}${href}`);
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    router.push(withLocale(href, locale));
  };

  const switchLocale = (target: Locale) => {
    if (target === locale) return;
    const relative = stripLocale(pathname);
    const nextPath = withLocale(relative, target);
    router.push(nextPath);
  };

  return (
    <>
      <header
        onMouseLeave={() => setOpenMenu(null)}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
          {
            'bg-white/90 supports-[backdrop-filter]:bg-white/70 border-[#E5E5E7] backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-[0_10px_40px_-12px_rgba(14,74,132,0.18)]':
              scrolled || openMenu !== null,
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
          <a
            href={homePath}
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              router.push(homePath);
            }}
          >
            <Image
              src="/brand/icon-128.png"
              alt=""
              width={28}
              height={28}
              priority
              className={cn(
                'h-7 w-7 transition-all duration-300',
                scrolled || openMenu !== null ? '' : 'brightness-0 invert',
              )}
            />
            <span
              className={cn(
                'font-bold text-[18px] tracking-[0.02em] font-[family-name:var(--font-display)] transition-colors',
                scrolled || openMenu !== null ? 'text-[#0E4A84]' : 'text-white',
              )}
            >
              Bitcoinology Lab
            </span>
          </a>

          {/* Desktop: inline nav links */}
          <div className="hidden md:flex items-center gap-1">
            {dict.links.map((link) => {
              const isDropdown = 'children' in link && link.children;
              const isOpen = openMenu === link.label;
              const btnColor =
                scrolled || openMenu !== null
                  ? 'text-[#4A4A4F] hover:text-[#0E4A84] hover:bg-[#E7EEF7]'
                  : 'text-white/80 hover:text-white hover:bg-white/10';

              if (!isDropdown) {
                return (
                  <button
                    key={link.label}
                    onClick={() => navigateTo(link.href!)}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'text-[13px] px-3 h-10 flex-shrink-0 transition-colors',
                      btnColor,
                    )}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                >
                  <button
                    onClick={() => setOpenMenu(isOpen ? null : link.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'text-[13px] px-3 h-10 flex-shrink-0 transition-colors gap-1',
                      btnColor,
                      isOpen && 'text-[#0E4A84] bg-[#E7EEF7]',
                    )}
                  >
                    {link.label}
                    <svg
                      className={cn(
                        'h-3 w-3 transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2 min-w-[200px] z-50"
                    >
                      <div className="rounded-xl border border-[#E5E5E7] bg-white shadow-[0_12px_40px_-12px_rgba(14,74,132,0.22)] py-1.5">
                        {link.children!.map((child) => (
                          <button
                            key={child.href}
                            role="menuitem"
                            onClick={() => navigateTo(child.href)}
                            className="w-full text-left px-4 py-2.5 text-[13px] text-[#1C1B1F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Locale switcher */}
            <div
              className={cn(
                'ml-2 flex items-center gap-0.5 rounded-full p-0.5 border text-[11px] font-medium tracking-[0.1em] uppercase transition-colors',
                scrolled || openMenu !== null
                  ? 'border-[#E5E5E7] bg-white'
                  : 'border-white/20 bg-white/5 backdrop-blur-sm',
              )}
            >
              {locales.map((l) => {
                const active = l === locale;
                const light = scrolled || openMenu !== null;
                return (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    aria-pressed={active}
                    className={cn(
                      'px-2.5 h-7 rounded-full transition-colors',
                      active
                        ? light
                          ? 'bg-[#0E4A84] text-white'
                          : 'bg-white text-[#0E4A84]'
                        : light
                        ? 'text-[#4A4A4F] hover:text-[#0E4A84]'
                        : 'text-white/70 hover:text-white',
                    )}
                  >
                    {l}
                  </button>
                );
              })}
            </div>

            <GlassButton
              size="sm"
              onClick={() => navigateTo('#contact')}
              className={cn(
                'flex-shrink-0 ml-1',
                !(scrolled || openMenu !== null) && 'glass-on-dark',
              )}
            >
              {dict.contact}
            </GlassButton>
          </div>

          {/* Mobile: hamburger toggle */}
          <button
            type="button"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors',
              scrolled
                ? 'text-[#1C1B1F] hover:text-[#0E4A84] hover:bg-[#E7EEF7]'
                : 'text-white hover:bg-white/10',
            )}
          >
            <MenuToggleIcon open={open} className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <aside
        id="primary-navigation"
        aria-hidden={!open}
        className={cn(
          'md:hidden fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm border-l border-[#E5E5E7] bg-white shadow-2xl shadow-[#0E4A84]/10 transition-transform duration-300 ease-out overflow-y-auto',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 sticky top-0 bg-white z-10 border-b border-[#E5E5E7]">
          <div className="flex items-center gap-0.5 rounded-full p-0.5 border border-[#E5E5E7] bg-white text-[11px] font-medium tracking-[0.1em] uppercase">
            {locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  aria-pressed={active}
                  className={cn(
                    'px-2.5 h-7 rounded-full transition-colors',
                    active
                      ? 'bg-[#0E4A84] text-white'
                      : 'text-[#4A4A4F] hover:text-[#0E4A84]',
                  )}
                >
                  {l}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            aria-label={dict.closeMenu}
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#1C1B1F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] transition-colors"
          >
            <MenuToggleIcon open={true} className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-4 pt-2 pb-10">
          {dict.links.map((link) => {
            const isDropdown = 'children' in link && link.children;

            if (!isDropdown) {
              return (
                <button
                  key={link.label}
                  onClick={() => navigateTo(link.href!)}
                  className="text-left text-[#1C1B1F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] rounded-md px-3 py-3 text-[16px] font-medium tracking-[-0.01em] transition-colors"
                >
                  {link.label}
                </button>
              );
            }

            const expanded = mobileExpanded === link.label;
            return (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(expanded ? null : link.label)
                  }
                  aria-expanded={expanded}
                  className="w-full flex items-center justify-between text-[#1C1B1F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] rounded-md px-3 py-3 text-[16px] font-medium tracking-[-0.01em] transition-colors"
                >
                  <span>{link.label}</span>
                  <svg
                    className={cn(
                      'h-4 w-4 transition-transform text-[#6B7280]',
                      expanded && 'rotate-180',
                    )}
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {expanded && (
                  <div className="ml-3 mb-1 border-l border-[#E5E5E7] pl-3">
                    {link.children!.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => navigateTo(child.href)}
                        className="w-full text-left text-[#4A4A4F] hover:text-[#0E4A84] hover:bg-[#E7EEF7] rounded-md px-3 py-2.5 text-[14px] transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-6 px-1">
            <GlassButton
              size="sm"
              onClick={() => navigateTo('#contact')}
              className="w-full"
            >
              {dict.contact}
            </GlassButton>
          </div>
        </nav>
      </aside>
    </>
  );
}
