import Logo from "@/components/ui/Logo";

export default function FounderPerspective() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white">
      <div className="max-w-3xl mx-auto text-center reveal">
        <div className="mb-8 flex justify-center">
          <div className="h-16 w-16 relative opacity-50">
            <Logo />
          </div>
        </div>
        <blockquote className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-midnight-navy italic mb-6">
          &quot;Khaas is not a service we provide; it is a feeling we protect. It is the quiet confidence that every detail has been considered before it was even imagined.&quot;
        </blockquote>
        <cite className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest block not-italic">— The Founder, 5M Events</cite>
      </div>
    </section>
  );
}
