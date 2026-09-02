"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Briefcase, HeartHandshake, Music, MapPin } from "lucide-react";

const featuredEvents = [
  {
    id: "shaadi",
    title: "Shaadi & Celebrations",
    description: "The Grand Indian Wedding redefined. We orchestrate magnificent celebrations that honor sacred traditions while reflecting contemporary elegance and unparalleled scale.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WDPxFAHjpkBe_wPDRigXmDZlJnPUtV-wISTn_leW-OHOEkX9vIum1T7b7szZ7y4OjtRgvw-yIQZwrYXrnSSyh6mN2C_9QFnQmfsDlCtn3HsVh7CCy2UBPqD85hvG3OnbE0PQFbIJfcvu3SzVv_b8fVTH_d-XA_fSu6WfVh0J5Qgv2FVccoOZ81O0Vh3e7ftC45NR8flhI_8uKgiIob3vT_mbO-sGTfTRc_EpmmoDV1RPId8zulvj5bJ5iU",
    alt: "Grand Indian wedding reception"
  },
  {
    id: "gourmet",
    title: "Gourmet Fusion",
    description: "A symphony of flavors from the subcontinent. Our culinary artisans craft bespoke menus that marry traditional spices with avant-garde presentation and global gastronomic techniques.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1X_J_12ke8TEW_GNxzahGg43Tfo-8HIUAZNs6HCWcRs6ol4Qz4YCWDd4R4euA0UYIfQUAxiq-A39reihVBy0CTXT8KgvEhbd442d_tKa1W-Z52GuvXRgdba673E9b0kYArg5UZNeGmW5Dy3t-mhP_pQT2oSjtFfQShYU503_zGWbqqkh_U4j4FeAv_Bd3LVopWyD0EDNiSID901s2VvEekp8XFRg59ryDYImduVn6IV1EQHisrFpR-Q8sqN",
    alt: "Gourmet fusion cuisine"
  },
  {
    id: "corporate",
    title: "Mehfil & Corporate",
    description: "Corporate excellence with a touch of hospitality. We elevate business gatherings into immersive experiences, fostering connection and reflecting your brand's highest aspirations through impeccable service.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlfQDVsreSFbQTUY3pDdPNVPdZfLY_fTovm3QG8_p-M5Y2MrxH4DLQTsVXUmNYYd21lKuEzfS14KESxDde_impDDhCg0Io36pcOkBdmy4H7AMCzGW5QR6E0vbgRvEZjc2IVaYLAUw-QD8P3Ee8M5kPTHiKJqXvYsopWLr6LFqHVMdmcKZwE-nbXruIFOZiTXsGn_E5afZojCJ6FI7xqGHBKkLuHi1kF3qshsVd_YeUqAvOLVMmBmFyBg",
    alt: "Corporate gala setting"
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 3 sections, so divide progress into thirds
    if (latest < 0.33) setActiveIndex(0);
    else if (latest < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  return (
    <section className="py-[160px] px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy/95 text-pearl-white relative" id="services">
      {/* Intro section */}
      <div className="max-w-container-max mx-auto text-center mb-16 reveal">
        <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-lg tracking-[0.2em]">OUR DOMAIN</span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-[56px] text-pearl-white mb-stack-lg font-light leading-tight">Cultural Specializations <br/><span className="text-champagne-gold italic font-serif">&amp;</span> Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mb-40 reveal">
          <div className="bg-navy-muted/30 p-10 border border-champagne-gold/20 rounded-sm hover:border-champagne-gold/60 transition-colors duration-500 interactive">
            <Briefcase className="w-8 h-8 text-[#b3996d] mb-6" strokeWidth={1.5} />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Corporate &amp; Business Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/60 space-y-3 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Conferences &amp; Seminars</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Brand Activations</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Workshops &amp; Team Building</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/30 p-10 border border-champagne-gold/20 rounded-sm hover:border-champagne-gold/60 transition-colors duration-500 interactive">
            <HeartHandshake className="w-8 h-8 text-[#b3996d] mb-6" strokeWidth={1.5} />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Private &amp; Social Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/60 space-y-3 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Weddings &amp; Receptions</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Private Parties &amp; Anniversaries</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Milestone Gatherings</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/30 p-10 border border-champagne-gold/20 rounded-sm hover:border-champagne-gold/60 transition-colors duration-500 interactive">
            <Music className="w-8 h-8 text-[#b3996d] mb-6" strokeWidth={1.5} />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Entertainment &amp; Public Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/60 space-y-3 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Live Concerts &amp; Performances</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Festivals &amp; Cultural Mela</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Art &amp; Exhibition Curation</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/30 p-10 border border-champagne-gold/20 rounded-sm hover:border-champagne-gold/60 transition-colors duration-500 interactive">
            <MapPin className="w-8 h-8 text-[#b3996d] mb-6" strokeWidth={1.5} />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Core Support &amp; Logistics</h4>
            <ul className="font-body-md text-body-md text-pearl-white/60 space-y-3 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Premium Venue Finding</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>Hospitality, VIP &amp; Catering</span></li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50" /><span>End-to-End Orchestration</span></li>
            </ul>
          </div>
      </div>

      {/* Sticky Scroll Layout for Featured Events */}
      <div ref={containerRef} className="max-w-container-max mx-auto relative hidden md:block" style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen flex items-center justify-between gap-24">
          
          {/* Left side: Text content */}
          <div className="w-1/2 h-[70vh] flex flex-col justify-center relative">
            {featuredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="absolute w-full pr-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : (activeIndex < index ? 50 : -50),
                  pointerEvents: activeIndex === index ? "auto" : "none"
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-headline-md text-headline-md text-pearl-white mb-6 font-light">{event.title}</h3>
                <p className="font-body-lg text-body-lg text-pearl-white/60 mb-10 leading-relaxed font-light">{event.description}</p>
                <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps hover:text-pearl-white transition-colors cursor-pointer group tracking-widest interactive" href="#">
                  EXPLORE <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side: Sticky Image */}
          <div className="w-1/2 h-[70vh] relative rounded-md overflow-hidden">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={`${event.id}-img`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 1.05,
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 border border-champagne-gold/20 z-10 pointer-events-none rounded-md" />
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Fallback Layout (non-sticky) */}
      <div className="md:hidden space-y-24">
        {featuredEvents.map((event) => (
          <div key={`${event.id}-mobile`} className="flex flex-col gap-8 reveal">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
               <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-pearl-white mb-4">{event.title}</h3>
              <p className="font-body-lg text-body-lg text-pearl-white/60 mb-6 font-light">{event.description}</p>
              <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps tracking-widest" href="#">
                EXPLORE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
