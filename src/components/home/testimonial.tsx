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
      <div className="absolute -z-0 -left-44 bottom-0 w-[350px] h-[350px] border-[26px] border-color1 rounded-full opacity-20 sm:opacity-80" />

      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6 md:px-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:w-[34%] z-10 w-full ">
          
          <div>
            {/* TOP SMALL TITLE */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-[3px] bg-color1 rounded-full" />
              <p className="uppercase tracking-[0.22em] text-color1 text-xs  font-bold">
                {data.title1}
              </p>
            </div>

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
              className={`${uniqueId}-prev w-16 h-16 rounded-full bg-white shadow-md hover:bg-color1 hover:text-white transition-all duration-300 flex items-center justify-center text-color1`}
            >
              <FaArrowLeftLong className="text-lg" />
            </button>

            <button
              className={`${uniqueId}-next w-16 h-16 rounded-full bg-white shadow-md hover:bg-color1 hover:text-white transition-all duration-300 flex items-center justify-center text-color1`}
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
                
                <div
                  className="relative bg-color3/10  hover:bg-color1/80 backdrop-blur-lg  group duration-300
                  min-h-max rounded-2xl 
                  shadow-lg border-black/5
                  p-6 md:p-8"
                >
                  
                  {/* TOP PROFILE SECTION */}
                  <div className="flex items-start gap-7 relative z-10">
                    
                    {/* RED QUOTE SHAPE */}
                    <div
                      className="relative -mt-14  sm:-mt-16
                      bg-color1
                      w-[100px]
                      h-[170px]
                      rounded-t-full
                      rounded-b-full
                      flex flex-col items-center"
                    >
                      
                      {/* PROFILE IMAGE */}
                      <div className="w-24 h-24 rounded-full overflow-hidden border-[6px] border-color1 bg-white mt-1">
                        <Image
                          src={cards.img}
                          alt={cards.title}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* QUOTE ICON */}
                      <FaQuoteLeft className="text-white text-5xl mt-0 opacity-95" />
                    </div>

                    {/* USER INFO */}
                    <div className="">
                      
                      <h3 className="text-zinc-700 text-lg md:text-xl font-bold group-hover:text-white">
                        {cards.title}
                      </h3>

                      <p className="text-zinc-500 group-hover:text-white text-sm">
                        CEO & Founder
                      </p>

                      {/* STARS */}
                      <div className="flex items-center gap-2 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-color1 group-hover:text-white text-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TESTIMONIAL TEXT */}
                  <div className=" relative mt-3 z-10">
                    <p
                      className="text-zinc-600 group-hover:text-white
                      leading-[2]
                      text-sm md:text-base
                      font-medium"
                    >
                      <span className="text-color1 text-5xl font-black mr-2 group-hover:text-white">
                        “{" "}
                      </span>
                      {cards.text}
                     
                    </p>
                  </div>

                  {/* BOTTOM LIGHT BG DESIGN */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[160px]
                    opacity-[0.04]
                    bg-[url('/images/pattern.png')]
                    bg-contain bg-bottom bg-no-repeat"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}