import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Briefcase, HeartHandshake, Music, MapPin, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-section-padding px-edge-margin-mobile md:px-edge-margin-desktop bg-midnight-navy/80 text-pearl-white reveal" id="services">
      <div className="max-w-container-max mx-auto text-center mb-24 reveal">
        <span className="font-label-caps text-label-caps text-champagne-gold block mb-stack-md">OUR DOMAIN</span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pearl-white mb-stack-lg">Cultural Specializations &amp; Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16 max-w-5xl mx-auto">
          <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
            <Briefcase className="w-8 h-8 text-[#b3996d] mb-4" />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Corporate &amp; Business Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Conferences &amp; Seminars</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Brand Activations</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Workshops &amp; Team Building</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Corporate Incentives</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
            <HeartHandshake className="w-8 h-8 text-[#b3996d] mb-4" />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Private &amp; Social Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Weddings (Planning &amp; Receptions)</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Private Parties &amp; Anniversaries</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Weekend Celebrations</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Milestone Gatherings</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
            <Music className="w-8 h-8 text-[#b3996d] mb-4" />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Entertainment &amp; Public Events</h4>
            <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Live Concerts &amp; Performances</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Festivals &amp; Cultural Mela</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Community Gatherings</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Art &amp; Exhibition Curation</span></li>
            </ul>
          </div>
          <div className="bg-navy-muted/50 p-8 border border-champagne-gold/30 rounded-sm transition-all hover-gold-glow">
            <MapPin className="w-8 h-8 text-[#b3996d] mb-4" />
            <h4 className="font-headline-sm text-headline-sm text-pearl-white mb-4">Core Event Support &amp; Logistics</h4>
            <ul className="font-body-md text-body-md text-pearl-white/70 space-y-3">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Premium Venue Finding</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Hospitality, VIP &amp; Catering</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>Event Technology</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#b3996d] mt-1 shrink-0" /><span>End-to-End Orchestration</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto space-y-24 mt-24">
        {/* Shaadi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="order-2 md:order-1 md:pr-12">
            <h3 className="font-headline-md text-headline-md text-pearl-white mb-4">Shaadi &amp; Celebrations</h3>
            <p className="font-body-lg text-body-lg text-pearl-white/70 mb-6 opacity-90">The Grand Indian Wedding redefined. We orchestrate magnificent celebrations that honor sacred traditions while reflecting contemporary elegance and unparalleled scale.</p>
            <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps hover:text-pearl-white transition-colors cursor-pointer group" href="#">
              EXPLORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 hover-gold-glow rounded-sm aspect-[4/3] relative">
            <Image
              className="object-cover border border-champagne-gold p-1 bg-midnight-navy rounded-sm shadow-md"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WDPxFAHjpkBe_wPDRigXmDZlJnPUtV-wISTn_leW-OHOEkX9vIum1T7b7szZ7y4OjtRgvw-yIQZwrYXrnSSyh6mN2C_9QFnQmfsDlCtn3HsVh7CCy2UBPqD85hvG3OnbE0PQFbIJfcvu3SzVv_b8fVTH_d-XA_fSu6WfVh0J5Qgv2FVccoOZ81O0Vh3e7ftC45NR8flhI_8uKgiIob3vT_mbO-sGTfTRc_EpmmoDV1RPId8zulvj5bJ5iU"
              alt="Grand Indian wedding reception"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Gourmet Fusion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="order-1 md:order-1 hover-gold-glow rounded-sm aspect-[4/3] relative">
            <Image
              className="object-cover border border-champagne-gold p-1 bg-midnight-navy rounded-sm shadow-md"
              src="https://lh3.googleusercontent.com/aida/AEtjO1X_J_12ke8TEW_GNxzahGg43Tfo-8HIUAZNs6HCWcRs6ol4Qz4YCWDd4R4euA0UYIfQUAxiq-A39reihVBy0CTXT8KgvEhbd442d_tKa1W-Z52GuvXRgdba673E9b0kYArg5UZNeGmW5Dy3t-mhP_pQT2oSjtFfQShYU503_zGWbqqkh_U4j4FeAv_Bd3LVopWyD0EDNiSID901s2VvEekp8XFRg59ryDYImduVn6IV1EQHisrFpR-Q8sqN"
              alt="Gourmet fusion cuisine"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-2 md:order-2 md:pl-12">
            <h3 className="font-headline-md text-headline-md text-pearl-white mb-4">Gourmet Fusion</h3>
            <p className="font-body-lg text-body-lg text-pearl-white/70 mb-6 opacity-90">A symphony of flavors from the subcontinent. Our culinary artisans craft bespoke menus that marry traditional spices with avant-garde presentation and global gastronomic techniques.</p>
            <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps hover:text-pearl-white transition-colors cursor-pointer group" href="#">
              EXPLORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Mehfil & Corporate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="order-2 md:order-1 md:pr-12">
            <h3 className="font-headline-md text-headline-md text-pearl-white mb-4">Mehfil &amp; Corporate</h3>
            <p className="font-body-lg text-body-lg text-pearl-white/70 mb-6 opacity-90">Corporate excellence with a touch of hospitality. We elevate business gatherings into immersive experiences, fostering connection and reflecting your brand's highest aspirations through impeccable service.</p>
            <Link className="inline-flex items-center text-champagne-gold font-label-caps text-label-caps hover:text-pearl-white transition-colors cursor-pointer group" href="#">
              EXPLORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 hover-gold-glow rounded-sm aspect-[4/3] relative">
            <Image
              className="object-cover border border-champagne-gold p-1 bg-midnight-navy rounded-sm shadow-md filter grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfQDVsreSFbQTUY3pDdPNVPdZfLY_fTovm3QG8_p-M5Y2MrxH4DLQTsVXUmNYYd21lKuEzfS14KESxDde_impDDhCg0Io36pcOkBdmy4H7AMCzGW5QR6E0vbgRvEZjc2IVaYLAUw-QD8P3Ee8M5kPTHiKJqXvYsopWLr6LFqHVMdmcKZwE-nbXruIFOZiTXsGn_E5afZojCJ6FI7xqGHBKkLuHi1kF3qshsVd_YeUqAvOLVMmBmFyBg"
              alt="Corporate gala setting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
