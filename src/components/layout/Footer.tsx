import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight-navy/90 w-full py-section-padding border-t border-champagne-gold/10 flat reveal">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-edge-margin-desktop max-w-container-max mx-auto gap-8">
        <div>
          <div className="h-12 w-32 relative mx-auto md:mx-0 flex items-center">
            <Image
              alt="5M Events Logo"
              className="object-contain"
              fill
              sizes="128px"
              src="https://lh3.googleusercontent.com/aida/AEtjO1W6VbbaamX_Oa-v4_ws-DO6ldwpwhLHXYASrNF6qiEmGG4i5AJQZIMUL_SiSVmybgUmkwnzbGpvp5K3peJSwIPOIHTkEM2aQmWHpUj6pdCSbgGSibAE84uNHjJtWQdcXiK2tW_S14C51vfy8eYSaIyYSKx9PxQDtMgJag1cK7612P66kH8rzcxJfzyB19S3FXRnqT84-dbkjH8EGY1VT5Oz2NBNUru1m6j4g2mMLg-Ihkt7cP02JAtwxAY"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <Link className="font-body-md text-body-md text-on-primary/60 hover:text-champagne-gold transition-colors focus:outline-none" href="#">Privacy Policy</Link>
            <Link className="font-body-md text-body-md text-on-primary/60 hover:text-champagne-gold transition-colors focus:outline-none" href="#">Terms of Service</Link>
            <Link className="font-body-md text-body-md text-on-primary/60 hover:text-champagne-gold transition-colors focus:outline-none" href="#">Press Kit</Link>
          </div>
        </div>
        <div className="font-body-md text-body-md text-on-primary/60 text-center md:text-right w-full md:w-auto">
          © 2024 5M Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
