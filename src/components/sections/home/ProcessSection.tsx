export default function ProcessSection() {
  return (
    <>
      {/* Operational Precision */}
      <section className="py-24 px-edge-margin-mobile md:px-edge-margin-desktop bg-navy-muted/60 border-y border-champagne-gold/20 text-pearl-white reveal">
        <div className="max-w-container-max mx-auto text-center reveal">
          <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OPERATIONAL PRECISION</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-champagne-gold mb-8">The Craft Behind the Magic</h2>
          <p className="font-body-lg text-body-lg max-w-3xl mx-auto mb-16 opacity-90">
            Our process involves concept mood boards, 3D layouts, stage fabrication, lighting, sound, and artist management to ensure every detail is executed flawlessly.
          </p>
        </div>
      </section>

      {/* The 5M Process */}
      <section className="py-24 px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white border-y border-champagne-gold/20 reveal">
        <div className="max-w-container-max mx-auto text-center reveal">
          <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OUR APPROACH</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-midnight-navy mb-16">The 5M Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center hover-gold-glow p-4 rounded-sm">
              <div className="w-16 h-16 rounded-full border-2 border-champagne-gold flex items-center justify-center text-champagne-gold font-headline-md mb-6">1</div>
              <h4 className="font-headline-sm text-headline-sm text-midnight-navy mb-3">Siddhat (Intent)</h4>
              <p className="font-body-md text-navy-muted">Understanding the profound purpose and vision behind your gathering.</p>
            </div>
            <div className="flex flex-col items-center relative hover-gold-glow p-4 rounded-sm">
              <div className="hidden md:block absolute top-8 -left-[20%] w-[40%] h-[1px] bg-champagne-gold/30"></div>
              <div className="w-16 h-16 rounded-full border-2 border-champagne-gold flex items-center justify-center text-champagne-gold font-headline-md mb-6 bg-pearl-white z-10">2</div>
              <div className="hidden md:block absolute top-8 -right-[20%] w-[40%] h-[1px] bg-champagne-gold/30"></div>
              <h4 className="font-headline-sm text-headline-sm text-midnight-navy mb-3">Tayaari (Preparation)</h4>
              <p className="font-body-md text-navy-muted">Meticulous orchestration and uncompromising attention to detail.</p>
            </div>
            <div className="flex flex-col items-center hover-gold-glow p-4 rounded-sm">
              <div className="w-16 h-16 rounded-full border-2 border-champagne-gold flex items-center justify-center text-champagne-gold font-headline-md mb-6">3</div>
              <h4 className="font-headline-sm text-headline-sm text-midnight-navy mb-3">Jashn (Celebration)</h4>
              <p className="font-body-md text-navy-muted">Flawless execution, leaving you free to immerse in the moment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
