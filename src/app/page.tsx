"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CanvasBackground from "./components/CanvasBackground";
import { Menu, ChevronRight, Briefcase, HeartHandshake, Music, MapPin, ArrowRight, Crown, Gem, Building2, Feather, Shield, Compass, Quote } from "lucide-react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Scroll reveal animation effect
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-midnight-navy font-body-md antialiased overflow-x-hidden selection:bg-champagne-gold selection:text-midnight-navy relative min-h-screen">
      <CanvasBackground />

      {/* TopNavBar */}
      <header className="bg-transparent dark:bg-midnight-navy fixed top-0 w-full z-50 border-b border-champagne-gold/20 backdrop-blur-md reveal">
        <nav className="flex justify-between items-center w-full px-edge-margin-mobile md:px-edge-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="cursor-pointer">
            <div className="h-10 w-auto flex items-center">
              <img
                alt="5M Events Logo"
                className="h-full w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary/70 hover:text-champagne-gold transition-colors duration-300" href="#weddings">Portfolio</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary/70 hover:text-champagne-gold transition-colors duration-300" href="#services">Services</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary/70 hover:text-champagne-gold transition-colors duration-300" href="#concierge">Concierge</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary/70 hover:text-champagne-gold transition-colors duration-300" href="#archive">The Archive</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary/70 hover:text-champagne-gold transition-colors duration-300" href="#contact">Contact</Link>
          </div>
          <button className="hidden md:block bg-champagne-gold text-midnight-navy font-label-caps text-label-caps px-8 py-4 hover:bg-midnight-navy hover:text-champagne-gold transition-colors cursor-pointer border border-transparent hover:border-champagne-gold rounded-sm btn-hover">
            Inquire
          </button>
          {/* Mobile Menu Toggle */}
          <button aria-label="Open Menu" className="md:hidden text-on-surface dark:text-on-primary p-2">
            <Menu />
          </button>
        </nav>
      </header>

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
            <div className="md:col-span-4 md:col-start-8 reveal relative mt-12 md:mt-0 hover-gold-glow">
              <div className="absolute inset-0 bg-champagne-gold/20 -translate-x-4 translate-y-4 rounded-sm"></div>
              <img className="relative w-full h-auto object-cover border border-champagne-gold p-2 bg-pearl-white rounded-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1WlOR1G7jfbVyAt_z4CqwrEafA1L0HNeW4011AC-PKzjgeAOdtdEDiMyNX1VxgNa2_4x-mzkukgFdwIVS2HCC59MtFesIta38tpG8WqzPBtvrFUwwX1ZbNTLJXh-rYOepSPRPOXBUmyWHHfPR8_XXhiC209xvOrRWcydqxf_ph-TvMttyMOSPUfB7pfasM9VNZjQxPmZgkVnPHxUKeIDDc2HzFR_kjngvYxni3EzAHOqtGkbO-r45DX6zBn" alt="Heritage" />
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
              <div className="order-1 md:order-2 hover-gold-glow rounded-sm">
                <img className="w-full h-auto object-cover border border-champagne-gold p-1 bg-midnight-navy rounded-sm shadow-md" src="https://lh3.googleusercontent.com/aida/AEtjO1WDPxFAHjpkBe_wPDRigXmDZlJnPUtV-wISTn_leW-OHOEkX9vIum1T7b7szZ7y4OjtRgvw-yIQZwrYXrnSSyh6mN2C_9QFnQmfsDlCtn3HsVh7CCy2UBPqD85hvG3OnbE0PQFbIJfcvu3SzVv_b8fVTH_d-XA_fSu6WfVh0J5Qgv2FVccoOZ81O0Vh3e7ftC45NR8flhI_8uKgiIob3vT_mbO-sGTfTRc_EpmmoDV1RPId8zulvj5bJ5iU" alt="Shaadi" />
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
            <div className="relative w-full max-w-3xl mx-auto min-h-[400px] md:min-h-[350px]" id="testimonial-carousel">
              {[
                { name: "PATRIARCH", role: "Global Horizons Family", text: `"The grandeur was breathtaking, but it was the quiet grace... that truly defined the 5M experience."` },
                { name: "ANANYA S.", role: "CEO, Vanguard Corp", text: `"Their meticulous attention to detail transformed our corporate summit into an immersive experience."` },
                { name: "MEERA R.", role: "Founder, Silk & Heritage", text: `"Our brand launch was nothing short of magical. The cultural nuances they wove... perfectly captured the essence of our new collection."` },
              ].map((testimonial, i) => (
                <div key={i} className={`testimonial-slide absolute inset-0 transition-opacity duration-1000 flex ${activeSlide === i ? "active-slide" : ""}`}>
                  <div className="bg-navy-muted p-8 rounded-sm border border-champagne-gold/20 flex flex-col w-full h-full hover-gold-glow">
                    <Quote className="text-champagne-gold w-8 h-8 mb-6" />
                    <p className="font-body-lg text-body-lg italic font-light mb-8 flex-grow text-pearl-white/90">{testimonial.text}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-champagne-gold/20 flex items-center justify-center text-champagne-gold font-headline-sm">{testimonial.name[0]}</div>
                      <div>
                        <p className="font-label-caps text-label-caps text-champagne-gold tracking-widest">{testimonial.name}</p>
                        <p className="font-body-md text-sm text-pearl-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
                {[0, 1, 2].map((i) => (
                  <button key={i} onClick={() => setActiveSlide(i)} className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-opacity duration-300 carousel-dot ${activeSlide === i ? "opacity-100" : "opacity-30"}`}></button>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-midnight-navy/90 w-full py-section-padding border-t border-champagne-gold/10 flat reveal">
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-edge-margin-desktop max-w-container-max mx-auto gap-8">
          <div>
            <div className="h-12 w-auto mx-auto md:mx-0 flex items-center">
              <img alt="5M Events Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY" />
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
