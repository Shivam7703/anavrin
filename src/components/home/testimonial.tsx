"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData as data } from "@/data/homeData";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

export default function Testimonials() {
  const uniqueId = "testimonial-modern";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 28,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:px-20 xl:px-24">
      
      {/* LEFT RED CIRCLE */}
    

      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6 md:px-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:w-[34%] z-10 w-full ">
          
          <div>
            {/* TOP SMALL TITLE */}
            {/* <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-[2px] bg-color1 rounded-full" />
              <p className="uppercase tracking-[0.22em] text-zinc-600 text-xs font-bold">
                {data.title1}
              </p>
            </div> */}

            {/* MAIN HEADING */}
            <h2 className="text-zinc-800 font-bold leading-snug text-2xl md:text-4xl lg:text-5xl">
              {data.title2} <span className="text-color1"> {data.title3}</span>
            </h2>

            {/* PARAGRAPH */}
            <p className="text-zinc-700 text-base my-4 max-w-[450px]">
              {data.para}
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center gap-5 mt-4 ">
            
            <button
              className={`${uniqueId}-prev w-16 h-16 rounded-full bg-white shadow-lg shadow-black/30 hover:bg-color1 hover:text-white transition-all duration-300 flex items-center justify-center text-color1`}
            >
              <FaArrowLeftLong className="text-lg" />
            </button>

            <button
              className={`${uniqueId}-next w-16 h-16 rounded-full bg-white shadow-lg shadow-black/30 hover:bg-color1 hover:text-white transition-all duration-300 flex items-center justify-center text-color1`}
            >
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:w-[66%] w-full">
          
          <Swiper
            {...swiperOptions}
            className={`w-full ${uniqueId}`}
          >
            {data?.testimonials?.map((cards: any, index: number) => (
              <SwiperSlide key={index} className="h-auto my-8">
                
               <div className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 md:p-8 border border-zinc-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300">
      
      {/* TESTIMONIAL CONTENT */}
      <div className="relative z-10 space-y-4">
        {/* QUOTE ICON */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <FaQuoteLeft className="text-base" />
          </div>

          {/* RATING STARS */}
          <div className="flex items-center gap-1" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-sm md:text-base" />
            ))}
          </div>
        </div>

        {/* QUOTE TEXT */}
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal pt-1">
          &ldquo;{cards?.text}&rdquo;
        </p>
      </div>

      {/* USER PROFILE FOOTER */}
      <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-4">
        {/* AVATAR */}
        <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-2 ring-zinc-100">
          <Image
            src={cards?.img}
            alt={cards?.title || "Customer Avatar"}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>

        {/* USER DETAILS */}
        <div className="min-w-0 flex-1">
          <h3 className="text-zinc-900 font-semibold text-base truncate">
            {cards?.title}
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm truncate">
            Verified Customer
          </p>
        </div>
      </div>
    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}