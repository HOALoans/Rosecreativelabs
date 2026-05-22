import { About } from "@/components/About";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header as Navbar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { StatsBar } from "@/components/StatsBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Programs />
        <About />
        <Gallery />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
