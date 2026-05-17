import { Nav } from "@/components/nav";
import { SiteLogo } from "@/components/site-logo";
import { HeroSection } from "@/components/hero-section";
import { MarqueeBand } from "@/components/marquee-band";
import { CollectionSection } from "@/components/collection-section";
import { LookbookSection } from "@/components/lookbook-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteLogo />
      <Nav />
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
