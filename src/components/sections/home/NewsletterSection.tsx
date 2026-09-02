export default function NewsletterSection() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white relative border-b border-champagne-gold/20 reveal" id="newsletter">
      <div className="absolute inset-0 gold-pattern-bg"></div>
      <div className="max-w-3xl mx-auto text-center reveal relative z-10">
        <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">THE ARCHIVE</span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-midnight-navy mb-stack-lg">Subscribe to Our Newsletter.</h2>
        <p className="font-body-lg text-body-lg text-navy-muted mb-12">Join an exclusive circle receiving quarterly insights into the art of extraordinary gatherings, cultural nuances, and the quiet luxury of event architecture.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input className="flex-1 bg-pearl-white border border-champagne-gold/50 px-6 py-4 font-body-md text-midnight-navy focus:outline-none focus:border-champagne-gold transition-colors rounded-sm" placeholder="Your Email Address" required type="email" />
          <button className="bg-champagne-gold text-midnight-navy font-label-caps text-label-caps px-10 py-4 hover:bg-midnight-navy hover:text-champagne-gold transition-colors duration-300 tracking-widest rounded-sm btn-hover" type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}
