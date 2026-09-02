import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[870px] flex items-center justify-center overflow-hidden reveal">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBixZpewMyz91W2FiIzHG76Z7pAx0T1_eRMmsg6Gem5RYsiQLxKbmjgnJOlnRWgdefMv0fCCzfwnZKYF8Wu0cOi9MhGGov3LjWYQ45JEIGaM9mmhVVhXZq_QbtLniUxFQ-a8CURbyNEq0XKuyczjQEWwCHvC-tW4AjSfgrQql6o5g8bM6y11f6NtpbQDEQrpGDKhO4N3J6aYLxUEWsicjMJPwWr3KLHrky1z2DQB3zrmQSzFK7ViUqoZg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/90 via-midnight-navy/40 to-transparent z-0"></div>
      <div className="relative z-10 text-center px-edge-margin-mobile md:px-edge-margin-desktop max-w-4xl mx-auto mt-20">
        <h1 className="font-display-lg text-display-lg text-pearl-white mb-stack-lg reveal font-light drop-shadow-lg">Shubh Aarambh: Orchestrating the Extraordinary.</h1>
        <p className="font-body-lg text-body-lg text-pearl-white/80 max-w-2xl mx-auto mb-16 font-light tracking-wide reveal drop-shadow-md">
          Step into experiences where imagination meets meticulous craft stage by stage, light by light, story by story.
        </p>
        <MagneticButton>
          <Link className="inline-block border border-champagne-gold/60 text-champagne-gold px-12 py-5 font-label-caps text-label-caps hover:bg-champagne-gold hover:text-midnight-navy hover:shadow-[0_0_25px_rgba(179,153,109,0.4)] transition-all duration-700 tracking-[0.2em] rounded-sm backdrop-blur-sm" href="#contact">
            COMMENCE THE JOURNEY
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
