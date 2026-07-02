"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaGlobe,
  FaLanguage,
  FaStethoscope,
} from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import { footerImage, para } from "@/assets";
import { FaUniversity, FaFileAlt } from "react-icons/fa";

import {coachingData as data} from "@/data/homeData";



export default function Coaching() {
  const uniqueId = "coaching123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    modules: [Autoplay, Navigation],
    breakpoints: {
      180:  { slidesPerView: 2 },
      768:  { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };

  return (
    <section className="ser-bg relative overflow-hidden
      py-10 px-4
      sm:py-12 sm:px-8
      md:py-14 md:px-12
      lg:py-16 lg:px-16
      xl:px-20">

      {/* Decorative images */}
      <Image
        src={footerImage}
        alt="decoration"
        className="pointer-events-none z-0 absolute -bottom-2 right-[2%]
          object-contain h-20 sm:h-40 md:h-52 w-auto opacity-60"
      />
      <Image
        src={para}
        alt="decoration"
        className="pointer-events-none z-0 absolute top-[6%] left-[1%]
          object-contain h-10 sm:h-20 md:h-28 w-auto animate-y opacity-80"
      />

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-color1 mb-2 sm:mb-3">
{data?.title1}        </p>
        <h2 className="text-white font-bold leading-tight mx-auto
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
           md:max-w-3xl">
{data?.title2}        </h2>
      </div>

      {/* ── SWIPER ── */}
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <Swiper {...swiperOptions} className={uniqueId}>
          {data?.cards?.map((item, index) => {
            // Last visible card gets red highlight (like screenshot)
            return (
              <SwiperSlide key={item.title} className="!h-auto mt-5">
                <div
                  className={`group relative flex flex-col h-full 
                    transition-all duration-300
                     border-white/15 
                    p-5 sm:p-6 md:p-8 
                    bg-zinc-700 hover:bg-color1 cursor-default`}
                >
                  {/* Icon circle */}
                  <div className={`absolute -top-5 right-4 mb-5 sm:mb-6
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full
                    flex items-center justify-center
                    text-xl sm:text-2xl
                    transition-all bg-color1 group-hover:bg-white group-hover:text-color1 text-white duration-300 group-hover:scale-110
                    `}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold leading-snug mb-3
                    text-[15px] sm:text-base md:text-lg">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm text-white leading-relaxed flex-1 mb-5
                    `}>
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px mb-4 bg-white/25`} />

                  {/* Link */}
                  <Link
  href={`/${item.href}`}
  className="inline-flex items-center overflow-hidden text-sm font-bold text-gray-300 group-hover:text-white transition-all duration-300"
>
  {/* Text Slide */}
  <span
    className="max-w-0 opacity-0 translate-x-[-10px]
    overflow-hidden whitespace-nowrap
    group-hover:max-w-[120px]
    group-hover:opacity-100
    group-hover:translate-x-0
    transition-all duration-500"
  >
    Read More
  </span>

  {/* Arrow */}
  <MdArrowRight
    className="text-lg ml-1 transition-all duration-300 group-hover:translate-x-1"
  />
</Link>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ── NAV ARROWS ── */}
      <button
        className={`${uniqueId}-next absolute z-30
          right-1 md:right-4 top-[62%] -translate-y-1/2
          w-9 h-9 sm:w-11 sm:h-11
          border border-white/20 rounded-full bg-white/10 hover:bg-color1
          flex items-center justify-center text-white shadow-lg
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowRightLong className="text-xs sm:text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30
          left-1 md:left-4 top-[62%] -translate-y-1/2
          w-9 h-9 sm:w-11 sm:h-11
          border border-white/20 rounded-full bg-white/10 hover:bg-color1
          flex items-center justify-center text-white shadow-lg
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowLeftLong className="text-xs sm:text-sm" />
      </button>

    </section>
  );
}