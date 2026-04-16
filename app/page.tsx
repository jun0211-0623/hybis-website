import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Monographs from "@/components/Monographs";
import Programs from "@/components/Programs";
import Academics from "@/components/Academics";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Monographs />
      <Programs />
      <Academics />
      <Resources />
      <Footer />
    </main>
  );
}
