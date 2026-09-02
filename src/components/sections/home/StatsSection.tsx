export default function StatsSection() {
  return (
    <section className="py-24 px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white relative border-b border-champagne-gold/20 reveal">
      <div className="absolute inset-0 gold-pattern-bg"></div>
      <div className="relative max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-champagne-gold/20">
        <div className="pt-8 md:pt-0">
          <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">10+</div>
          <div className="font-label-caps text-label-caps text-navy-muted">Years of Experience</div>
        </div>
        <div className="pt-8 md:pt-0">
          <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">500+</div>
          <div className="font-label-caps text-label-caps text-navy-muted">Events Completed</div>
        </div>
        <div className="pt-8 md:pt-0">
          <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">500+</div>
          <div className="font-label-caps text-label-caps text-navy-muted">Satisfied Customers</div>
        </div>
        <div className="pt-8 md:pt-0">
          <div className="font-headline-lg text-headline-lg text-champagne-gold mb-2">100+</div>
          <div className="font-label-caps text-label-caps text-navy-muted">Respected Vendors</div>
        </div>
      </div>
    </section>
  );
}
