export default function NorthStar() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-midnight-navy mb-4">Our North Star</h2>
          <div className="h-px w-24 bg-champagne-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="space-y-4 p-8 border border-champagne-gold/20 bg-white">
            <span className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest">Vision</span>
            <p className="font-body-lg text-body-lg text-midnight-navy">To be the global benchmark for invisible excellence, where every celebration becomes a timeless cultural landmark.</p>
          </div>
          <div className="space-y-4 p-8 border border-champagne-gold/20 bg-white">
            <span className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest">Mission</span>
            <p className="font-body-lg text-body-lg text-midnight-navy">Orchestrating extraordinary experiences through a meticulous blend of traditional heritage, modern precision, and absolute discretion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
