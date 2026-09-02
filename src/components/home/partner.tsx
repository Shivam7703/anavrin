"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } from "@/assets";

const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

export default function Partners() {
  return (
    <section className="w-full bg-white py-7 sm:py-12 md:py-20 relative">

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-5 left-1/4 w-72 h-72 bg-red-100 rounded-full blur-3xl" />
        <div className="absolute bottom-9 rigt-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
      </div>

      {/* Header Text */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 mb-3">
          Trusted by{" "}
          <span className="text-color1">
            500+ Companies
          </span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto px-4">
          We partner with leading organizations worldwide to deliver exceptional results
        </p>
      </div>
      

      {/* Marquee Container - using react-fast-marquee for better control */}
      <div className="relative z-10">
        <Marquee
          speed={40} // Slower speed (default is 50)
          pauseOnHover={true}
          gradient={false}
          delay={0}
          loop={0}
          autoFill={true}
          className="py-4"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center mx-6 md:mx-10
                w-[130px] sm:w-[150px] md:w-[170px] flex-shrink-0"
            >
              <div className="relative w-full h-12 sm:h-14 md:h-16
                grayscale opacity-60
                group-hover:grayscale-0 group-hover:opacity-100
                transition-all duration-500 ease-in-out
                hover:scale-110 transform">
                <Image
                  src={partner}
                  alt={`partner-${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 150px, 170px"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Optional: Second row with reverse direction for visual interest */}
      <div className="relative z-10 mt-8 opacity-70">
        <Marquee
          speed={35}
          pauseOnHover={true}
          gradient={false}
          delay={0}
          loop={0}
          autoFill={true}
          direction="right"
          className="py-4"
        >
          {[...partners].reverse().map((partner, index) => (
            <div
              key={`reverse-${index}`}
              className="group flex items-center justify-center mx-6 md:mx-10
                w-[130px] sm:w-[150px] md:w-[170px] flex-shrink-0"
            >
              <div className="relative w-full h-12 sm:h-14 md:h-16
                grayscale opacity-70
                group-hover:grayscale-0 group-hover:opacity-100
                transition-all duration-500 ease-in-out
                hover:scale-110 transform">
                <Image
                  src={partner}
                  alt={`partner-${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 150px, 170px"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}