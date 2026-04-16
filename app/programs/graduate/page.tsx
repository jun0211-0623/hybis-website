import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GraduateContent from "./content";

export const metadata = {
  title: "비트코인화폐철학과 대학원 협동과정 — Bitcoinology Lab",
  description:
    "디지털 화폐와 블록체인 기술이 야기한 경제·정치·문화 변화를 인문학적 관점에서 연구하는 대학원 협동과정",
};

export default function GraduateProgramPage() {
  return (
    <main>
      <Navigation />
      <GraduateContent />
      <Footer />
    </main>
  );
}
