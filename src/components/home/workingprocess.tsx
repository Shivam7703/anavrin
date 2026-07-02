import React from "react";
import Buttonmain from "../global/button";
import { footerImage } from "@/assets";
import Image from "next/image";
import { workingprocess as data } from "@/data/homeData";

export default function WorkProcessSlider() {
  return (
    <div className="w-full bg-zinc-800 relative pt-9 p-6 sm:p-12 lg:p-20 xl:px-28">
      
      <div className="max-w-[1500px] pt-14 mx-auto !relative flex flex-wrap justify-between gap-y-8 items-start">
        
        {/* LEFT CONTENT */}
        
        <div className="lg:w-[47%] w-full lg:sticky lg:top-32 left-0 h-full flex flex-col justify-center">
          
          {/* Small heading */}
          <div className="flex items-center gap-3 sm:mb-6 mb-4">
            <span className="w-10 h-[3px] bg-color1" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">
              {data?.title1}
            </p>
          </div>

          {/* Main heading */}
          <h2 className="text-white font-bold  !leading-snug  text-2xl md:text-4xl lg:text-5xl max-w-[700px]">
            {data?.title2}
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base leading-7 mt-5 sm:mt-8 max-w-[520px]">
           {data?.para}
          </p>

          {/* Button */}
          <div className="mt-10">
            <Buttonmain
              href="/contact-us"
              text1="Get Free Consulting"
              text2="Get Free Consulting"
            />
          </div>
           <Image
                  src={footerImage}
                  alt="immigration"
                  className="  object-contain w-max sm:h-56  scale-x-[-1] h-0  pointer-events-none"
                />
        </div>

        {/* RIGHT CARDS */}
        <div className="lg:w-[48%] w-full space-y-4  sm:space-y-8">
          
          {data?.cards?.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              
              {/* Arrow Shape */}
              <div className="absolute left-[-34px] top-8 hidden lg:block">
                <div
                  className="w-0 h-0 border-t-[18px] border-b-[18px]
                  border-r-[34px]
                  border-t-transparent border-b-transparent
                  border-r-[#161618]"
                />
              </div>

              {/* Card */}
              <div
                className="bg-[#161618]
                
                flex items-center
                px-5 py-8  sm:p-8 md:p-12
                border border-white/5
                hover:border-[#ff003c]/30
                transition-all duration-500"
              >
                
                {/* STEP NUMBER */}
                <div className="flex flex-col items-center justify-center mr-6 sm:mr-10 md:mr-14 shrink-0">
                  
                  <h3
                    className="text-color1
                    font-black
                    text-3xl sm:text-5xl md:text-7xl
                    leading-none
                    rotate-[-90deg]"
                  >
                    {item.step}
                  </h3>

                  <span
                    className="uppercase text-[#ff003c]
                    tracking-[3px]
                    text-xs sm:text-xs
                    font-semibold
                    mt-8"
                  >
                    Step
                  </span>
                </div>

                {/* CONTENT */}
                <div className="max-w-[520px]">
                  
                  <h3 className="text-white font-bold text-lg sm:text-2xl mb-3 md:mb-5 !leading-snug">
                    {item.heading}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-lg !leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
