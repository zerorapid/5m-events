"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export default function TestimonialCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    { name: "PATRIARCH", role: "Global Horizons Family", text: `"The grandeur was breathtaking, but it was the quiet grace—the anticipation of our families' every need during the week-long festivities—that truly defined the 5M experience."` },
    { name: "ANANYA S.", role: "CEO, Vanguard Corp", text: `"Their meticulous attention to detail transformed our corporate summit into an immersive experience. A seamless fusion of professionalism and unparalleled luxury hospitality."` },
    { name: "MEERA R.", role: "Founder, Silk & Heritage", text: `"Our brand launch was nothing short of magical. The cultural nuances they wove into the event design perfectly captured the essence of our new collection."` },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto min-h-[400px] md:min-h-[350px]">
      {testimonials.map((testimonial, i) => (
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
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setActiveSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-opacity duration-300 carousel-dot ${activeSlide === i ? "opacity-100" : "opacity-30"}`}></button>
        ))}
      </div>
    </div>
  );
}
