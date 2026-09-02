import Image from "next/image";

export default function Essence() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-pearl-white">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center reveal">
        <div className="relative">
          <div className="absolute inset-0 bg-champagne-gold/10 transform translate-x-4 translate-y-4 -z-10"></div>
          <Image 
            alt="Intricate Henna Design" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1WlOR1G7jfbVyAt_z4CqwrEafA1L0HNeW4011AC-PKzjgeAOdtdEDiMyNX1VxgNa2_4x-mzkukgFdwIVS2HCC59MtFesIta38tpG8WqzPBtvrFUwwX1ZbNTLJXh-rYOepSPRPOXBUmyWHHfPR8_XXhiC209xvOrRWcydqxf_ph-TvMttyMOSPUfB7pfasM9VNZjQxPmZgkVnPHxUKeIDDc2HzFR_kjngvYxni3EzAHOqtGkbO-r45DX6zBn"
            width={800}
            height={600}
            className="w-full h-auto object-cover border border-champagne-gold p-2 bg-white" 
          />
        </div>
        <div className="lg:pl-12 space-y-6">
          <h2 className="font-headline-lg text-headline-lg text-midnight-navy">The Essence of Khaas</h2>
          <div className="h-px w-24 bg-champagne-gold"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Founded in 2024 by Jaideep Raviprakash, 5M Events delivers end-to-end event solutions where every grand affair is handled by a passionate, multidisciplinary crew. True luxury whispers; it does not shout. We specialize in the &apos;invisible architecture&apos; of celebration.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our heritage is rooted in the rich traditions of South Asian hospitality, elevated by a contemporary, global sensibility. We create spaces where tradition feels modern, and modern feels timeless. Every detail is curated to create an atmosphere of effortless elegance.
          </p>
          <button className="mt-8 bg-transparent border border-champagne-gold text-midnight-navy px-8 py-4 font-label-caps text-label-caps hover:bg-champagne-gold/10 transition-colors interactive">
            Discover Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
}
