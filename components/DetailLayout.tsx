"use client";

import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface DetailLayoutProps {
  backHref: string;
  backLabel: string;
  category?: string;
  date?: string;
  title: string;
  subtitle?: string;
  description?: string;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
  children?: React.ReactNode;
}

export default function DetailLayout({
  backHref,
  backLabel,
  category,
  date,
  title,
  subtitle,
  description,
  color = "#4285F4",
  body,
  children,
}: DetailLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Nav */}
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center">
        <Link
          href={backHref}
          className="text-[#9AA0A6] hover:text-white text-[14px] flex items-center gap-2 transition-colors"
        >
          <span>&larr;</span>
          {backLabel}
        </Link>
      </nav>

      {/* Header */}
      <header className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="max-w-3xl">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            {category && (
              <span
                className="text-[12px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: color + "20", color }}
              >
                {category}
              </span>
            )}
            {date && (
              <span className="text-[#5F6368] text-[13px] font-mono">
                {date}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white leading-tight mb-3">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[#5F6368] text-[18px] italic mb-4">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-[#9AA0A6] text-[17px] leading-relaxed">
              {description}
            </p>
          )}

          {/* Color bar */}
          <div
            className="w-12 h-1 rounded-full mt-8"
            style={{ background: color }}
          />
        </div>
      </header>

      {/* Body */}
      <article className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
        <div className="max-w-3xl">
          {body && body.length > 0 ? (
            <div className="prose-custom">
              <PortableText
                value={body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-[#C8C8C8] text-[16px] leading-[1.8] mb-6">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-white text-[24px] font-semibold mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-white text-[20px] font-semibold mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-[#333] pl-5 my-6 text-[#9AA0A6] italic">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc list-inside text-[#C8C8C8] text-[16px] leading-[1.8] mb-6 space-y-1">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal list-inside text-[#C8C8C8] text-[16px] leading-[1.8] mb-6 space-y-1">
                        {children}
                      </ol>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="text-[#9AA0A6]">{children}</em>
                    ),
                    link: ({ value, children }) => (
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4285F4] hover:underline"
                      >
                        {children}
                      </a>
                    ),
                  },
                }}
              />
            </div>
          ) : (
            <p className="text-[#5F6368] text-[16px]">
              아직 작성된 본문이 없습니다. 관리자 페이지에서 콘텐츠를 추가해주세요.
            </p>
          )}

          {children}
        </div>
      </article>
    </div>
  );
}
