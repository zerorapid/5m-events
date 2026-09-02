"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import Logo from "@/components/ui/Logo";

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
        <div className="cursor-pointer relative h-16 w-16 interactive flex items-center">
          <Logo />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="https://www.5meventss.com/">Home</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="/about">About</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#services">Services</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#team">Our Team</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#gallery">Gallery</Link>
          <Link className="font-label-caps text-label-caps text-pearl-white/70 hover:text-champagne-gold transition-colors duration-300 interactive" href="#contact">Contact</Link>
        </div>
        <button className="hidden md:block bg-champagne-gold text-midnight-navy font-label-caps text-label-caps px-8 py-4 hover:bg-pearl-white transition-colors cursor-pointer rounded-sm interactive uppercase tracking-widest">
          Inquire
        </button>
        <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-pearl-white p-2 interactive z-50 relative">
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className="fixed inset-0 bg-midnight-navy z-40 overflow-hidden flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="https://www.5meventss.com/">Home</Link>
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="/about">About</Link>
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="#services">Services</Link>
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="#team">Our Team</Link>
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="#gallery">Gallery</Link>
        <Link onClick={() => setIsOpen(false)} className="font-headline-sm text-headline-sm-mobile text-pearl-white hover:text-champagne-gold transition-colors" href="#contact">Contact</Link>
      </motion.div>
    </motion.header>
  );
}
