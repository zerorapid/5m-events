"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ClientSetup() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // We can remove the old vanilla scroll reveal logic 
    // because we will migrate to framer-motion components where appropriate,
    // but for now we'll keep the basic CSS reveal active for sections we haven't converted yet.
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

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
