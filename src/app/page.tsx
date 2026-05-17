import { TopNav } from "@/components/top-nav";
import { HeroSection } from "@/components/hero-section";
import { MarqueeBand } from "@/components/marquee-band";
import { CollectionSection } from "@/components/collection-section";
import { LookbookSection } from "@/components/lookbook-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <MarqueeBand />
        <CollectionSection />
        <LookbookSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
