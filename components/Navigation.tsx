"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "연구", href: "#research" },
  { label: "프로그램", href: "#programs" },
  { label: "학술", href: "#academics" },
  { label: "자료", href: "#resources" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#EBEBEB]"
          : "bg-white"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-[#1A1A1A] font-bold text-[18px] tracking-[0.02em]">
            HYBIS
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#1A1A1A]">
            <path d="M2 14L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>

        {/* Center Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[#666] hover:text-[#1A1A1A] text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-[#F5F5F5] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick("#contact")}
            className="text-[#666] hover:text-[#1A1A1A] text-[14px] font-medium px-3 py-2 transition-colors duration-200"
          >
            Sign in
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="bg-[#CDEA68] hover:bg-[#B8D84E] text-[#1A1A1A] text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#CDEA68]/20"
          >
            문의하기
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[#1A1A1A] origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-[#1A1A1A]"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[#1A1A1A] origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#EBEBEB] overflow-hidden"
          >
            <ul className="px-6 py-3 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#1A1A1A] text-[15px] w-full text-left py-3 hover:text-[#666] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 w-full bg-[#CDEA68] text-[#1A1A1A] text-[14px] font-semibold px-5 py-3 rounded-full"
                >
                  문의하기
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
