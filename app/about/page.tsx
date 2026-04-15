import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutContent from "./content";

export const metadata = {
  title: "센터 소개 — HYBIS",
  description:
    "한양대학교 비트코인화폐철학연구센터(HYBIS) 소개, 조직 구성, 협력 기관 안내",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  );
}
