import { Navbar } from "@/components/navbar";
import { HeroScroll } from "@/components/hero-scroll";
import { CollectionGrid } from "@/components/collection-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroScroll />
        <CollectionGrid />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
