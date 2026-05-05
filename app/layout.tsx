import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";

const quintessential = localFont({
  src: "../public/fonts/Quintessential-Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://hy-bitcoinology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bitcoinology Lab — Where Value, Trust, and Culture Converge",
  description:
    "An interdisciplinary research hub exploring how value, trust, and society are being reconstituted in the age of digital money and artificial intelligence.",
  keywords:
    "Bitcoinology Lab, Bitcoin, monetary philosophy, Hanyang University, 비트코인, 화폐철학, Value Trust Society",
  openGraph: {
    title: "Bitcoinology Lab — Where Value, Trust, and Culture Converge",
    description: "Where Value, Trust, and Culture Converge.",
    type: "website",
    siteName: "Bitcoinology Lab",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoinology Lab — Where Value, Trust, and Culture Converge",
    description: "Where Value, Trust, and Culture Converge.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const locale = h.get("x-locale") ?? "en";
  return (
    <html lang={locale} className={quintessential.variable}>
      <body>{children}</body>
    </html>
  );
}
