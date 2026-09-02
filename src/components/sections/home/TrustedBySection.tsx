import { Crown, Gem, Building2, Feather, Shield, Compass } from "lucide-react";

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-navy-muted/10 border-y border-champagne-gold/20 overflow-hidden relative reveal">
      <div className="absolute inset-0 gold-pattern-bg"></div>
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto relative z-10">
        <p className="text-center font-label-caps text-label-caps text-navy-muted mb-12">TRUSTED BY VISIONARIES AT</p>
        <div className="flex overflow-hidden group">
          <div className="flex space-x-16 md:space-x-32 animate-marquee whitespace-nowrap opacity-40 blur-[1px] hover:blur-none hover:opacity-90 transition-all duration-700 items-center">
            <div className="flex items-center gap-3"><Crown className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Atelier</span></div>
            <div className="flex items-center gap-3"><Gem className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Lumière</span></div>
            <div className="flex items-center gap-3"><Building2 className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Maison</span></div>
            <div className="flex items-center gap-3"><Feather className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Elysium</span></div>
            <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Vanguard</span></div>
            <div className="flex items-center gap-3"><Compass className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Oasis</span></div>
            {/* Repeat for infinite scroll illusion */}
            <div className="flex items-center gap-3"><Crown className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Atelier</span></div>
            <div className="flex items-center gap-3"><Gem className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Lumière</span></div>
            <div className="flex items-center gap-3"><Building2 className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Maison</span></div>
            <div className="flex items-center gap-3"><Feather className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Elysium</span></div>
            <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Vanguard</span></div>
            <div className="flex items-center gap-3"><Compass className="w-6 h-6 text-champagne-gold" /><span className="font-headline-sm text-champagne-gold uppercase tracking-widest">Oasis</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
