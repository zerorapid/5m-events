
export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-midnight-navy">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 blur-sm" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUnARiT8Sz7jL6qa5qLJo9NJgoPBFHvvNip2hgsAUquEuyck4rcPKisW60S_7YqnlVmZKYMSuXlq-SN2tcV_6-mDhMPxfoJtIDEnI-Lj71_gig3inPNepQC5zp2Mt_J5qiQ6-V98PGe5Mu3jZy7t94WoQtazFdbAtFGVODJv1jZfEp03jkgPHTweJy9Hxp4wlf8_YwHMq-576wv61uXiGmNViN8pd3ZiEIOogwZ5DnfxfoURlkIeu2Dg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy via-transparent to-midnight-navy/50"></div>
      </div>
      <div className="relative z-10 text-center px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto reveal">
        <span className="font-label-caps text-label-caps text-champagne-gold tracking-widest uppercase mb-4 block">The 5M Legacy</span>
        <h1 className="font-display-lg text-display-lg text-pearl-white mb-6">Hamari Virasat</h1>
        <p className="font-body-lg text-body-lg text-pearl-white/80 max-w-2xl mx-auto">
          Decades of crafting the unseen architecture of luxury. We don&apos;t just plan events; we orchestrate legacies.
        </p>
      </div>
    </section>
  );
}
