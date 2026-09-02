"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${hasScrolled ? 'bg-midnight-navy/70 backdrop-blur-xl border-b border-champagne-gold/10' : 'bg-transparent border-b border-transparent'}`}
    >
      <nav className="flex justify-between items-center w-full px-edge-margin-mobile md:px-edge-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="cursor-pointer relative h-10 w-32 interactive">
          <Image
            alt="5M Events Logo"
            className="object-contain"
            fill
            sizes="128px"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY"
          />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#portfolio">Portfolio</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#services">Services</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#philosophy">Concierge</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#archive">The Archive</Link>
        </div>
        <button className="hidden md:block bg-champagne-gold text-midnight-navy font-label-caps text-label-caps px-8 py-4 hover:bg-pearl-white transition-colors cursor-pointer rounded-sm interactive uppercase tracking-widest">
          Inquire
        </button>
        <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-pearl-white p-2 interactive">
          <Menu />
        </button>
      </nav>
    </motion.header>
  );
}
