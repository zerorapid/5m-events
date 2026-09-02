import { Compass, Palette, CheckCircle2, Camera } from "lucide-react";

export default function FourPillars() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-surface text-midnight-navy">
      <div className="max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">The Four Pillars</h2>
          <p className="font-body-md text-on-surface-variant">Our sacred approach to orchestration.</p>
          <div className="h-px w-24 bg-champagne-gold mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-champagne-gold"><Compass className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">01. Strategy First</h3>
            <p className="font-body-md text-on-surface-variant">Clear objectives and profound audience insights guiding every decision.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><Palette className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">02. Design That Moves</h3>
            <p className="font-body-md text-on-surface-variant">Thematic decor, dramatic lighting, and deeply immersive staging.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><CheckCircle2 className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">03. Flawless Execution</h3>
            <p className="font-body-md text-on-surface-variant">Program scripting and run-of-show precision executed with absolute discretion.</p>
          </div>
          <div className="space-y-4">
            <div className="text-champagne-gold"><Camera className="w-8 h-8" strokeWidth={1.5} /></div>
            <h3 className="font-headline-sm text-headline-sm">04. Content That Lives On</h3>
            <p className="font-body-md text-on-surface-variant">Captivating photo and video storytelling, generating enduring social assets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
