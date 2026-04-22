import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";

const quintessential = localFont({
  src: "../public/fonts/Quintessential-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
  description:
    "An interdisciplinary research hub exploring how value, trust, and society are being reconstituted in the age of digital money and artificial intelligence.",
  keywords:
    "Bitcoinology Lab, Bitcoin, monetary philosophy, Hanyang University, 비트코인, 화폐철학, Value Code Society",
  openGraph: {
    title: "Bitcoinology Lab — Where Money, Code, Culture Converge",
    description: "Where Money, Code, Culture Converge",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const locale = h.get("x-locale") ?? "ko";
  return (
    <html lang={locale} className={quintessential.variable}>
      <body>{children}</body>
    </html>
  );
}
