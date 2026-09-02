"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { visaSliderdata as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { footerImage, para, plane } from "@/assets";

export default function VisaSlider() {
  const uniqueId = "caseStudy123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 28,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    modules: [Autoplay, Navigation],
    breakpoints: {
      140:  { slidesPerView: 1 },
      560:  { slidesPerView: 2 },
      924:  { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    },
  };

  return (
    <section className="bg-zinc-100   relative overflow-hidden py-14 px-4 md:px-12 lg:px-20">

      {/* Floating plane decoration */}
      <Image
        src={para}
        alt="immigration"
        className="z-0 absolute top-0 right-0  object-cover w-full h-full opacity-20   pointer-events-none"
      />
      

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center mb-12">
        {data?.title1 && (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-color1 mb-3">
{data?.title1}          </p>
        )}
        <h2 className="text-gray-900  font-bold md:text-4xl text-2xl lg:text-5xl !leading-tight mb-5 max-w-3xl mx-auto">
          {data?.title2} 
        </h2>
      </div>

      {/* ── SWIPER ── */}
      <div className="relative mx-auto max-w-[1450px] z-10">
        <Swiper {...swiperOptions} className={uniqueId}>
          {data?.cards.map((card: any) => (
            <SwiperSlide key={card.id} className="group !h-auto pb-2">

              {/* CARD */}
              <div className="flex flex-col relative  overflow-hidden rounded-xl 
                bg-white pb-4  h-full">

                {/* ── IMAGE ── */}
                <div className=" w-full overflow-hidden h-52 md:h-72">
                  <Image
                    alt={card?.heading}
                    src={card?.img}
                    
                    className="object-cover h-full w-full  object-center
                      transition-transform duration-700 group-hover:scale-105"
                  />                  
                </div>

                {/* ── CONTENT ── */}
                <div className="w-[92%] mx-auto  sticky z-10 -mt-20 md:-mt-32 shadow-black/10">
{/* Red icon badge — bottom-left of image */}
                  <div className="
                    w-14 h-14 bg-color1
                    flex items-center justify-center
                    text-white text-2xl
                    shadow-lg">
                    {card?.icon || <HiArrowUpRight />}
                  </div>
                  <div className="px-6 pt-5 pb-6 space-y-4 shadow-sm shadow-black/30 rounded-b-xl text-center bg-white">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug  sm:mb-2 
                    group-hover:text-color1 transition-colors duration-300">
                    {card?.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-3 line-clamp-2">
                    {card?.text}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-300 mb-4 mt-auto" />

                  {/* Read More */}
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2
                      text-sm font-semibold text-color1
                      hover:gap-3 transition-all duration-300
                      group/link"
                  >
                    Read More
                    <HiArrowUpRight className="text-base transition-transform duration-300
                      group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── NAV ARROWS ── */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-5 top-[62%] -translate-y-1/2
          w-11 h-11 border border-gray-200 rounded-full bg-white hover:bg-color1
          flex items-center justify-center text-gray-600 hover:text-white shadow-lg
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-5 top-[62%] -translate-y-1/2
          w-11 h-11 border border-gray-200 rounded-full bg-white hover:bg-color1
          flex items-center justify-center text-gray-600 hover:text-white shadow-lg
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>

    </section>
  );
}