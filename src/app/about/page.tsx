import AboutHero from "@/components/sections/about/AboutHero";
import NorthStar from "@/components/sections/about/NorthStar";
import Essence from "@/components/sections/about/Essence";
import Methodology from "@/components/sections/about/Methodology";
import FourPillars from "@/components/sections/about/FourPillars";
import FounderPerspective from "@/components/sections/about/FounderPerspective";
import OurCrew from "@/components/sections/about/OurCrew";
import GlobalReach from "@/components/sections/about/GlobalReach";
import AboutCTA from "@/components/sections/about/AboutCTA";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip selection:bg-champagne-gold selection:text-midnight-navy">
      <TopNav />
      <main className="flex-1">
        <AboutHero />
        <NorthStar />
      <Essence />
      
      {/* Impact Stats */}
      <section className="py-16 px-edge-margin-mobile md:px-edge-margin-desktop bg-surface border-b border-champagne-gold/20">
        <div className="max-w-container-max mx-auto reveal">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <div className="text-center">
              <span className="font-headline-lg text-midnight-navy block">11+</span>
              <span className="font-label-caps text-[10px] text-champagne-gold uppercase tracking-widest">Years of Experience</span>
            </div>
            <div className="text-center">
              <span className="font-headline-lg text-midnight-navy block">11+</span>
              <span className="font-label-caps text-[10px] text-champagne-gold uppercase tracking-widest">Events Completed</span>
            </div>
            <div className="text-center">
              <span className="font-headline-lg text-midnight-navy block">10+</span>
              <span className="font-label-caps text-[10px] text-champagne-gold uppercase tracking-widest">Satisfied Customers</span>
            </div>
            <div className="text-center">
              <span className="font-headline-lg text-midnight-navy block">29+</span>
              <span className="font-label-caps text-[10px] text-champagne-gold uppercase tracking-widest">Respected Vendors</span>
            </div>
          </div>
        </div>
      </section>

      <Methodology />
      <FourPillars />
      <FounderPerspective />
      <OurCrew />
      <GlobalReach />
      <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
