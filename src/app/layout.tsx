import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import CustomCursor from "@/components/ui/CustomCursor";
import ClientSetup from "@/components/ui/ClientSetup";

export const metadata: Metadata = {
  title: "5M Events - Shubh Aarambh",
  description: "Premier Event Management in Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-none">
        <ClientSetup />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
