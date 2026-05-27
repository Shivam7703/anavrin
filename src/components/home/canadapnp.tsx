"use client";
import React from "react";
import { canadapnp as data } from "@/data/homeData";
import Image from "next/image";
import Countryslider from "./countryslider";
import { plane } from "@/assets";


export default function Canadapnp() {
  return (
    <section className="relative w-full overflow-hidden">
 {/* Background image — darkened */}
        <Image
          src={plane}
          alt="background"
          
          className="object-contain absolute top-[10%] left-10 w-32 h-max animate-y"
        />
      <div className="relative w-full">
<div  className="absolute top-32 left-10 w-44 h-44 rounded-full bg-color1/10 blur-xl"/>


<div  className="max-sm:hidden absolute -top-8 right-28 w-36 h-36 bg-color1/60 rotate-45"/>



<div  className="max-sm:hidden absolute -top-8 -right-5 w-44 h-44  bg-color3 rotate-45"/>


       

        {/* Header text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-9 pb-28 md:pt-12 md:pb-32">
          {data?.title1 && (
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-color1 sm:mb-5 mb-2">
              {data.title1}
            </p>
          )}
          <h2 className="text-zinc-800 font-bold text-2xl md:text-5xl !leading-tight mb-4 max-w-3xl mx-auto">
            {data?.title2}
          </h2>
        </div>
      </div>

  
      <div
        className="  sm:p-12 md:p-16 lg:px-20 sticky -mt-28 md:-mt-44"
      >
      
      <Countryslider data={data} uniqueId = {"canadaSlider"}/>
      </div>

    </section>
  );
}