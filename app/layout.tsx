import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const quintessential = localFont({
  src: "../public/fonts/Quintessential-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
  description:
    "디지털 화폐와 인공지능 시대의 가치·신뢰·사회를 인문학적으로 탐구하는 학제적 연구 허브",
  keywords:
    "Bitcoinology Lab, 비트코인, 화폐철학, 한양대학교, Bitcoin, Bitcoinology, Value Code Society",
  openGraph: {
    title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
    description: "Where Money, Code, Culture Converge",
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
