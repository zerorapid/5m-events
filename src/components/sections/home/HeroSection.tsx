import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[870px] flex items-center justify-center overflow-hidden reveal">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBixZpewMyz91W2FiIzHG76Z7pAx0T1_eRMmsg6Gem5RYsiQLxKbmjgnJOlnRWgdefMv0fCCzfwnZKYF8Wu0cOi9MhGGov3LjWYQ45JEIGaM9mmhVVhXZq_QbtLniUxFQ-a8CURbyNEq0XKuyczjQEWwCHvC-tW4AjSfgrQql6o5g8bM6y11f6NtpbQDEQrpGDKhO4N3J6aYLxUEWsicjMJPwWr3KLHrky1z2DQB3zrmQSzFK7ViUqoZg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/90 to-transparent z-0"></div>
      <div className="relative z-10 text-center px-edge-margin-mobile md:px-edge-margin-desktop max-w-4xl mx-auto">
        <h1 className="font-display-lg text-display-lg text-pearl-white mb-stack-lg reveal">Shubh Aarambh: Orchestrating the Extraordinary.</h1>
        <p className="font-body-lg text-body-lg text-pearl-white/80 max-w-2xl mx-auto mb-stack-lg font-light tracking-wide reveal">
          Step into experiences where imagination meets meticulous craft stage by stage, light by light, story by story.
        </p>
        <Link className="inline-block border border-champagne-gold text-champagne-gold px-10 py-4 font-label-caps text-label-caps hover:bg-champagne-gold hover:text-midnight-navy transition-all duration-500 tracking-[0.2em] rounded-sm btn-hover reveal" href="#contact">
          COMMENCE THE JOURNEY
        </Link>
      </div>
    </section>
  );
}
