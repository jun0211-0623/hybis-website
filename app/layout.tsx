import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const quintessential = localFont({
  src: "../public/fonts/Quintessential-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYBIS — 한양대학교 비트코인 학제간연구소",
  description:
    "새로운 화폐의 언어를 탐구하다. 비트코인과 화폐철학의 교차점에서 학문이 새로운 답을 찾습니다.",
  keywords:
    "HYBIS, 비트코인, 화폐철학, 한양대학교, 학제간연구소, Bitcoin, 암호화폐",
  openGraph: {
    title: "HYBIS — 한양대학교 비트코인 학제간연구소",
    description: "새로운 화폐의 언어를 탐구하다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={quintessential.variable}>
      <body>{children}</body>
    </html>
  );
}
