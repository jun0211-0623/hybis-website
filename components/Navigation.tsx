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
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#1E1E1E]"
          : "bg-[#0A0A0A]"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-white font-bold text-[18px] tracking-[0.02em]">
            HYBIS
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M2 14L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[#9AA0A6] hover:text-white text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-[#1A1A1A] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick("#contact")}
            className="text-[#9AA0A6] hover:text-white text-[14px] font-medium px-3 py-2 transition-colors duration-200"
          >
            Sign in
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="bg-[#CDEA68] hover:bg-[#B8D84E] text-[#0A0A0A] text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#CDEA68]/15"
          >
            문의하기
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#1E1E1E] overflow-hidden"
          >
            <ul className="px-6 py-3 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#F1F3F5] text-[15px] w-full text-left py-3 hover:text-[#CDEA68] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 w-full bg-[#CDEA68] text-[#0A0A0A] text-[14px] font-semibold px-5 py-3 rounded-full"
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
