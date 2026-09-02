import { Sparkles, Layers, PlayCircle, History } from "lucide-react";

export default function Methodology() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy text-pearl-white">
      <div className="max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">The 5M Methodology</h2>
          <p className="font-body-md text-pearl-white/60">Our sacred approach to orchestration.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-champagne-gold"><Sparkles className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">01. Siddhat</h3>
            <p className="font-body-md text-pearl-white/80"><span className="text-champagne-gold font-semibold">(Intent):</span> Understanding the soul of the gathering.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><Layers className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">02. Tayaari</h3>
            <p className="font-body-md text-pearl-white/80"><span className="text-champagne-gold font-semibold">(Preparation):</span> Meticulous orchestration and detail.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><PlayCircle className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">03. Jashn</h3>
            <p className="font-body-md text-pearl-white/80"><span className="text-champagne-gold font-semibold">(Celebration):</span> Flawless execution and immersion.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><History className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">04. Yaadein</h3>
            <p className="font-body-md text-pearl-white/80"><span className="text-champagne-gold font-semibold">(Legacy):</span> Creating memories that transcend time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
