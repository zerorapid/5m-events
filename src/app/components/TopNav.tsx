"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent dark:bg-midnight-navy fixed top-0 w-full z-50 border-b border-champagne-gold/20 backdrop-blur-md reveal">
      <nav className="flex justify-between items-center w-full px-edge-margin-mobile md:px-edge-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="cursor-pointer relative h-10 w-32">
          <Image
            alt="5M Events Logo"
            className="object-contain"
            fill
            sizes="128px"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY"
          />
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
        <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-on-surface dark:text-on-primary p-2">
          <Menu />
        </button>
      </nav>
    </header>
  );
}
