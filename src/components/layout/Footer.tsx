import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-midnight-navy/95 w-full pt-32 pb-16 border-t border-champagne-gold/20 text-pearl-white/80">
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Logo & Address */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="h-20 w-20 relative flex items-center justify-center md:justify-start">
              <Logo />
            </div>
            <div className="text-center md:text-left space-y-2">
              <p className="font-body-md text-navy-muted">Address:</p>
              <p className="font-body-md">Nashville, TN</p>
            </div>
            <div className="text-center md:text-left space-y-2">
              <p className="font-body-md text-navy-muted">Contact:</p>
              <a href="mailto:info@mdntevents.com" className="font-body-md hover:text-champagne-gold transition-colors interactive">
                info@mdntevents.com
              </a>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-label-caps text-label-caps text-champagne-gold mb-4">Quick Links</h4>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/">Home</Link>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/work-with-us">Work With Us</Link>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/contact">Get in Touch</Link>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/case-studies">Case Studies</Link>
          </div>

          {/* Navigation Column 2 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-label-caps text-label-caps text-champagne-gold mb-4">Services</h4>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/for-brands">For Brands</Link>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/for-events">For Events</Link>
            <Link className="font-body-md hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/#">MDNT at Midday</Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="font-label-caps text-label-caps text-champagne-gold mb-2">Connect</h4>
            <div className="flex gap-6">
              <a href="#" className="text-pearl-white/60 hover:text-champagne-gold transition-colors interactive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-pearl-white/60 hover:text-champagne-gold transition-colors interactive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-pearl-white/60 hover:text-champagne-gold transition-colors interactive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-pearl-white/60 hover:text-champagne-gold transition-colors interactive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-champagne-gold/10">
          <p className="font-body-sm text-navy-muted">
            © 2026 MDNT. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link className="font-body-sm text-navy-muted hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/privacy-policy">Privacy Policy</Link>
            <Link className="font-body-sm text-navy-muted hover:text-champagne-gold transition-colors interactive" href="https://www.mdntevents.com/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
