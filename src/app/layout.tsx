import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import Image from "next/image";

/**
 * Cormorant Garamond — editorial serif for headings
 * Refined, trustworthy, used by law firms & luxury brands
 */

export const metadata: Metadata = {
  title: "Anavrin Adviser",
  description: "Premium Immigration & Visa Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` font-sans relative`}
        style={{
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
      
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
