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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px", // triggers 100px before element enters viewport
        threshold: 0.1,
      }
    );

    reveals.forEach((reveal) => {
      observer.observe(reveal);
      // Fallback: immediately show if already in viewport on load
      const rect = reveal.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        reveal.classList.add("active");
      }
    });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
