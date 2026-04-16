import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsContent from "./content";

export const metadata = {
  title: "소식 — Bitcoinology Lab",
  description: "Bitcoinology Lab 언론보도, 공지사항 등 최신 소식",
};

export default function NewsPage() {
  return (
    <main>
      <Navigation />
      <NewsContent />
      <Footer />
    </main>
  );
}
