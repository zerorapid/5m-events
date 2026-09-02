import Image from "next/image";

export default function OurCrew() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-surface border-t border-champagne-gold/20">
      <div className="max-w-container-max mx-auto text-center mb-16 reveal">
        <h2 className="font-headline-lg text-headline-lg text-midnight-navy">Our Crew</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">The Team Behind Every Extraordinary Experience.</p>
      </div>
      <div className="max-w-sm mx-auto reveal">
        <div className="relative group overflow-hidden border border-champagne-gold bg-white text-center pb-6">
          <div className="relative w-full h-80">
            <Image 
              alt="Jaideep Raviprakash - Founder" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1X_J_12ke8TEW_GNxzahGg43Tfo-8HIUAZNs6HCWcRs6ol4Qz4YCWDd4R4euA0UYIfQUAxiq-A39reihVBy0CTXT8KgvEhbd442d_tKa1W-Z52GuvXRgdba673E9b0kYArg5UZNeGmW5Dy3t-mhP_pQT2oSjtFfQShYU503_zGWbqqkh_U4j4FeAv_Bd3LVopWyD0EDNiSID901s2VvEekp8XFRg59ryDYImduVn6IV1EQHisrFpR-Q8sqN"
              fill
              className="object-cover"
            />
          </div>
          <div className="pt-6 px-4">
            <h3 className="font-headline-md text-midnight-navy">Jaideep Raviprakash</h3>
            <span className="text-champagne-gold font-label-caps text-label-caps tracking-widest uppercase block mt-2">Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
