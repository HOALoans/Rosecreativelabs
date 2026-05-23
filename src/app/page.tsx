import type { Metadata } from "next";
import { About } from "@/components/About";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: { absolute: "Rose Creative Labs | Art Enrichment Programs in St. Louis" },
  description:
    "Curriculum-aligned art enrichment for K–12 schools, corporate team building, and adult classes in St. Louis. Led by licensed educator Madeline Rose Kirschner.",
  path: "/",
  keywords: [
    "Madeline Rose Kirschner art teacher",
    "St. Louis art enrichment programs",
  ],
});
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
