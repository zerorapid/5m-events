import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import CanvasBackground from "@/components/ui/CanvasBackground";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import HeritageSection from "@/components/sections/home/HeritageSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ArchiveSection from "@/components/sections/home/ArchiveSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import TrustedBySection from "@/components/sections/home/TrustedBySection";
import NewsletterSection from "@/components/sections/home/NewsletterSection";

export default function Home() {
  return (
    <div className="text-midnight-navy font-body-md antialiased overflow-clip selection:bg-champagne-gold selection:text-midnight-navy relative min-h-screen">
      <CanvasBackground />
      <TopNav />

      <main className="pt-[100px]">
        <HeroSection />
        <StatsSection />
        <HeritageSection />
        <ServicesSection />
        <ArchiveSection />
        <ProcessSection />
        <TrustedBySection />

        {/* Testimonials */}
        <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy/90 text-pearl-white reveal">
          <div className="max-w-container-max mx-auto reveal">
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">VOICES OF ELEGANCE</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pearl-white">Client Testimonials</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
