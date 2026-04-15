import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExecutiveContent from "./content";

export const metadata = {
  title: "비트코인화폐철학 최고위과정 — HYBIS",
  description:
    "비트코인을 화폐현상으로 정의하고, 경제·정치·문화적 변화를 다학제적으로 분석하는 최고위 과정",
};

export default function ExecutiveProgramPage() {
  return (
    <main>
      <Navigation />
      <ExecutiveContent />
      <Footer />
    </main>
  );
}
