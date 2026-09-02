import Image from "next/image";
import Link from "next/link";
import CanvasBackground from "./components/CanvasBackground";
import TopNav from "./components/TopNav";
import ClientSetup from "./components/ClientSetup";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { ChevronRight, Briefcase, HeartHandshake, Music, MapPin, ArrowRight, Crown, Gem, Building2, Feather, Shield, Compass } from "lucide-react";

export default function Home() {
  return (
    <div className="text-midnight-navy font-body-md antialiased overflow-x-hidden selection:bg-champagne-gold selection:text-midnight-navy relative min-h-screen">
      <ClientSetup />
      <CanvasBackground />
      <TopNav />

      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative w-full h-[870px] flex items-center justify-center overflow-hidden reveal">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBixZpewMyz91W2FiIzHG76Z7pAx0T1_eRMmsg6Gem5RYsiQLxKbmjgnJOlnRWgdefMv0fCCzfwnZKYF8Wu0cOi9MhGGov3LjWYQ45JEIGaM9mmhVVhXZq_QbtLniUxFQ-a8CURbyNEq0XKuyczjQEWwCHvC-tW4AjSfgrQql6o5g8bM6y11f6NtpbQDEQrpGDKhO4N3J6aYLxUEWsicjMJPwWr3KLHrky1z2DQB3zrmQSzFK7ViUqoZg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/90 to-transparent z-0"></div>
          <div className="relative z-10 text-center px-edge-margin-mobile md:px-edge-margin-desktop max-w-4xl mx-auto">
            <h1 className="font-display-lg text-display-lg text-pearl-white mb-stack-lg reveal">Shubh Aarambh: Orchestrating the Extraordinary.</h1>
            <p className="font-body-lg text-body-lg text-pearl-white/80 max-w-2xl mx-auto mb-stack-lg font-light tracking-wide reveal">
              Step into experiences where imagination meets meticulous craft stage by stage, light by light, story by story.
            </p>
            <a className="inline-block border border-champagne-gold text-champagne-gold px-10 py-4 font-label-caps text-label-caps hover:bg-champagne-gold hover:text-midnight-navy transition-all duration-500 tracking-[0.2em] rounded-sm btn-hover reveal" href="#contact">
              COMMENCE THE JOURNEY
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white relative border-b border-champagne-gold/20 reveal">
          <div className="absolute inset-0 gold-pattern-bg"></div>
          <div className="relative max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-champagne-gold/20">
            <div className="pt-8 md:pt-0">
              <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">10+</div>
              <div className="font-label-caps text-label-caps text-navy-muted">Years of Experience</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">500+</div>
              <div className="font-label-caps text-label-caps text-navy-muted">Events Completed</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">500+</div>
              <div className="font-label-caps text-label-caps text-navy-muted">Satisfied Customers</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">100+</div>
              <div className="font-label-caps text-label-caps text-navy-muted">Respected Vendors</div>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto bg-pearl-white reveal" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 md:col-start-2 reveal">
              <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OUR VIRASAT (LEGACY)</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-midnight-navy mb-stack-lg">The Philosophy of 'Khaas' Hospitality.</h2>
              <p className="font-body-lg text-body-lg text-navy-muted mb-stack-md">
                We believe true luxury is found not in abundance, but in deliberate curation and deep cultural resonance. A friendly, detail-obsessed crew that listens first and plans with clarity—so your event feels uniquely yours and execution feels effortless.
              </p>
              <p className="font-body-md text-body-md text-navy-muted/80">
                By weaving together heritage and modern refinement, we reveal the profound essence of your celebration, creating environments that feel both intimately personal and architecturally significant.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-8 reveal relative mt-12 md:mt-0 hover-gold-glow aspect-[3/4]">
              <div className="absolute inset-0 bg-champagne-gold/20 -translate-x-4 translate-y-4 rounded-sm"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1WlOR1G7jfbVyAt_z4CqwrEafA1L0HNeW4011AC-PKzjgeAOdtdEDiMyNX1VxgNa2_4x-mzkukgFdwIVS2HCC59MtFesIta38tpG8WqzPBtvrFUwwX1ZbNTLJXh-rYOepSPRPOXBUmyWHHfPR8_XXhiC209xvOrRWcydqxf_ph-TvMttyMOSPUfB7pfasM9VNZjQxPmZgkVnPHxUKeIDDc2HzFR_kjngvYxni3EzAHOqtGkbO-r45DX6zBn"
                alt="Heritage"
                fill
                className="relative object-cover border border-champagne-gold p-2 bg-pearl-white rounded-sm"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy/80 text-pearl-white reveal" id="services">
          <div className="max-w-container-max mx-auto text-center mb-24 reveal">
            <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OUR DOMAIN</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pearl-white mb-stack-lg">Cultural Specializations &amp; Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16 max-w-5xl mx-auto">
              <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
                <Briefcase className="w-8 h-8 text-[#b3996d] mb-4" />
                <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Corporate &amp; Business Events</h4>
                <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Conferences &amp; Seminars</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Brand Activations</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Workshops &amp; Team Building</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Corporate Incentives</span></li>
                </ul>
              </div>
              <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
                <HeartHandshake className="w-8 h-8 text-[#b3996d] mb-4" />
                <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Private &amp; Social Events</h4>
                <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Weddings (Planning &amp; Receptions)</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Private Parties &amp; Anniversaries</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Weekend Celebrations</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Milestone Gatherings</span></li>
                </ul>
              </div>
              <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
                <Music className="w-8 h-8 text-[#b3996d] mb-4" />
                <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Entertainment &amp; Public Events</h4>
                <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Live Concerts &amp; Performances</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Festivals &amp; Cultural Mela</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Community Gatherings</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Art &amp; Exhibition Curation</span></li>
                </ul>
              </div>
              <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
                <MapPin className="w-8 h-8 text-[#b3996d] mb-4" />
                <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Core Event Support &amp; Logistics</h4>
                <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Premium Venue Finding</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Hospitality, VIP &amp; Catering</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Event Technology</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>End-to-End Orchestration</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-container-max mx-auto space-y-24 mt-24">
            {/* Shaadi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
              <div className="order-2 md:order-1 md:pr-12">
                <h3 className="font-headline-md text-headline-md text-pearl-white mb-4">Shaadi &amp; Celebrations</h3>
                <p className="font-body-lg text-body-lg text-pearl-white/70 mb-6 opacity-90">The Grand Indian Wedding redefined. We orchestrate magnificent celebrations that honor sacred traditions while reflecting contemporary elegance and unparalleled scale.</p>
                <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps hover:text-pearl-white transition-colors cursor-pointer group" href="#">
                  EXPLORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              <div className="order-1 md:order-2 hover-gold-glow rounded-sm aspect-[4/3] relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WDPxFAHjpkBe_wPDRigXmDZlJnPUtV-wISTn_leW-OHOEkX9vIum1T7b7szZ7y4OjtRgvw-yIQZwrYXrnSSyh6mN2C_9QFnQmfsDlCtn3HsVh7CCy2UBPqD85hvG3OnbE0PQFbIJfcvu3SzVv_b8fVTH_d-XA_fSu6WfVh0J5Qgv2FVccoOZ81O0Vh3e7ftC45NR8flhI_8uKgiIob3vT_mbO-sGTfTRc_EpmmoDV1RPId8zulvj5bJ5iU"
                  alt="Shaadi"
                  fill
                  className="object-cover border border-champagne-gold p-1 bg-midnight-navy rounded-sm shadow-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="py-16 bg-navy-muted/10 border-y border-champagne-gold/20 overflow-hidden relative reveal">
          <div className="absolute inset-0 gold-pattern-bg"></div>
          <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto relative z-10">
            <p className="text-center font-label-caps text-label-caps text-navy-muted mb-12">TRUSTED BY VISIONARIES AT</p>
            <div className="flex overflow-hidden group">
              <div className="flex space-x-16 md:space-x-24 animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500 items-center">
                <div className="flex items-center gap-3"><Crown className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Atelier</span></div>
                <div className="flex items-center gap-3"><Gem className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Lumière</span></div>
                <div className="flex items-center gap-3"><Building2 className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Maison</span></div>
                <div className="flex items-center gap-3"><Feather className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Elysium</span></div>
                <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Vanguard</span></div>
                <div className="flex items-center gap-3"><Compass className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Oasis</span></div>
              </div>
            </div>
          </div>
        </section>

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

      </main>

      {/* Footer */}
      <footer className="bg-midnight-navy/90 w-full py-section-padding border-t border-champagne-gold/10 flat reveal">
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-edge-margin-desktop max-w-container-max mx-auto gap-8">
          <div>
            <div className="h-12 w-32 relative mx-auto md:mx-0 flex items-center">
              <Image
                alt="5M Events Logo"
                className="object-contain"
                fill
                sizes="128px"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <Link className="font-body-md text-body-md text-on-primary/60 hover:text-champagne-gold transition-colors focus:outline-none" href="#">Privacy Policy</Link>
              <Link className="font-body-md text-body-md text-on-primary/60 hover:text-champagne-gold transition-colors focus:outline-none" href="#">Terms of Service</Link>
            </div>
          </div>
          <div className="font-body-md text-body-md text-on-primary/60 text-center md:text-right w-full md:w-auto">
            © 2024 5M Events. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
