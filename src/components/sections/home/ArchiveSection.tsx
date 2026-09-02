import Image from "next/image";
import Link from "next/link";

export default function ArchiveSection() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy/95 border-t border-champagne-gold/20 reveal" id="archive">
      <div className="max-w-container-max mx-auto text-center mb-16 reveal">
        <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">THE ARCHIVE</span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pearl-white">Curated Memories</h2>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 reveal">
        <div className="hover-gold-glow rounded-sm overflow-hidden h-64 md:h-96 relative">
          <Image
            alt="High-end event photography 1"
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X_J_12ke8TEW_GNxzahGg43Tfo-8HIUAZNs6HCWcRs6ol4Qz4YCWDd4R4euA0UYIfQUAxiq-A39reihVBy0CTXT8KgvEhbd442d_tKa1W-Z52GuvXRgdba673E9b0kYArg5UZNeGmW5Dy3t-mhP_pQT2oSjtFfQShYU503_zGWbqqkh_U4j4FeAv_Bd3LVopWyD0EDNiSID901s2VvEekp8XFRg59ryDYImduVn6IV1EQHisrFpR-Q8sqN"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="hover-gold-glow rounded-sm overflow-hidden h-64 md:h-96 relative">
          <Image
            alt="High-end event photography 2"
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WlOR1G7jfbVyAt_z4CqwrEafA1L0HNeW4011AC-PKzjgeAOdtdEDiMyNX1VxgNa2_4x-mzkukgFdwIVS2HCC59MtFesIta38tpG8WqzPBtvrFUwwX1ZbNTLJXh-rYOepSPRPOXBUmyWHHfPR8_XXhiC209xvOrRWcydqxf_ph-TvMttyMOSPUfB7pfasM9VNZjQxPmZgkVnPHxUKeIDDc2HzFR_kjngvYxni3EzAHOqtGkbO-r45DX6zBn"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="hover-gold-glow rounded-sm overflow-hidden h-64 md:h-96 relative">
          <Image
            alt="High-end event photography 3"
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WDPxFAHjpkBe_wPDRigXmDZlJnPUtV-wISTn_leW-OHOEkX9vIum1T7b7szZ7y4OjtRgvw-yIQZwrYXrnSSyh6mN2C_9QFnQmfsDlCtn3HsVh7CCy2UBPqD85hvG3OnbE0PQFbIJfcvu3SzVv_b8fVTH_d-XA_fSu6WfVh0J5Qgv2FVccoOZ81O0Vh3e7ftC45NR8flhI_8uKgiIob3vT_mbO-sGTfTRc_EpmmoDV1RPId8zulvj5bJ5iU"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="text-center reveal">
        <Link className="inline-block border border-champagne-gold text-champagne-gold px-10 py-4 font-label-caps text-label-caps hover:bg-champagne-gold hover:text-midnight-navy transition-all duration-500 tracking-[0.2em] rounded-sm btn-hover" href="#">
          VIEW FULL ARCHIVE
        </Link>
      </div>
    </section>
  );
}
