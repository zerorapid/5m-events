import Image from "next/image";

export default function HeritageSection() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto bg-pearl-white reveal" id="philosophy">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 md:col-start-2 reveal">
          <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OUR VIRASAT (LEGACY)</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-midnight-navy mb-stack-lg">The Philosophy of 'Khaas' Hospitality.</h2>
          <p className="font-body-lg text-body-lg text-navy-muted mb-stack-md">
            We believe true luxury is found not in abundance, but in deliberate curation and deep cultural resonance. A friendly, detail-obsessed crew that listens first and plans with clarity—so your event feels uniquely yours and execution feels effortless.
          </p>
          <p className="font-body-md text-body-md text-navy-muted/80">
            By weaving together heritage and modern refinement, we reveal the profound essence of your celebration, creating environments that feel both intimately personal and architecturally significant.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-8 reveal relative mt-12 md:mt-0 hover-gold-glow aspect-[3/4]">
          <div className="absolute inset-0 bg-champagne-gold/20 -translate-x-4 translate-y-4 rounded-sm"></div>
          <Image
            className="relative object-cover border border-champagne-gold p-2 bg-pearl-white rounded-sm"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WlOR1G7jfbVyAt_z4CqwrEafA1L0HNeW4011AC-PKzjgeAOdtdEDiMyNX1VxgNa2_4x-mzkukgFdwIVS2HCC59MtFesIta38tpG8WqzPBtvrFUwwX1ZbNTLJXh-rYOepSPRPOXBUmyWHHfPR8_XXhiC209xvOrRWcydqxf_ph-TvMttyMOSPUfB7pfasM9VNZjQxPmZgkVnPHxUKeIDDc2HzFR_kjngvYxni3EzAHOqtGkbO-r45DX6zBn"
            alt="A close-up of intricate henna (mehndi) designs on hands, adorned with gold jewelry, set against a backdrop of rich silk fabric."
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
