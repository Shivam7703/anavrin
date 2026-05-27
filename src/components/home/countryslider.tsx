import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

export default function Countryslider({ data, uniqueId }: any) {
  return (
    <>
      <div className="relative px-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: `.${uniqueId}-next`,
            prevEl: `.${uniqueId}-prev`,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            500:  { slidesPerView: 2 },
            924:  { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className={uniqueId}
        >
          {data?.cards?.map((card: any, index: number) => (
            <SwiperSlide key={index}>

              <div className="group relative my-6 bg-white overflow-hidden
                shadow-[0_4px_20px_rgba(0,0,0,0.29)]
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                transition-all duration-500 hover:-translate-y-2">

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.heading ?? card.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Country name overlay on image */}
                  <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                    <span className="text-white font-bold text-xl drop-shadow-lg tracking-wide">
                      {card.heading ?? card.name}
                    </span>
                  </div>

                  {/* Red triangle corner accent */}
                  <div
                    className="absolute top-0 left-0 w-12 h-12 bg-color1 z-10"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  />
                </div>

                {/* FLAG + STAT ROW */}
                <div className="flex items-center justify-between px-5 -mt-6 relative z-20 mb-3">

                  {/* Flag circle */}
                  <div className="w-14 h-14 rounded-full border-[3px] border-white
                    shadow-xl overflow-hidden flex-shrink-0
                    transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src={card.flag}
                      alt={card.heading ?? card.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Visa pill */}
                  <div className="bg-white  text-color1 text-[11px] font-bold
                    px-3 py-1 rounded-full border border-color1/20 tracking-wide uppercase">
                    Visa Available
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 pb-5">

                  {/* Animated red line */}
                  <div className="w-8 h-[2px] bg-color1 rounded-full mb-3
                    transition-all duration-500 group-hover:w-28" />

                  {/* Description */}
                  <p className="text-zinc-700 leading-relaxed mb-5 line-clamp-3">
                    {card.text ?? "Explore seamless visa opportunities and immigration pathways."}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href="/service"
                    className="group/btn flex items-center justify-between
                      w-full px-4 py-2
                      bg-color3 text-white text-sm font-semibold
                      transition-all duration-300 hover:bg-color1
                      hover:shadow-lg hover:shadow-color1/30"
                  >
                    <span>Explore Now</span>
                    <span className="w-7 h-7 rounded-full bg-white/15
                      flex items-center justify-center
                      transition-transform duration-300 group-hover/btn:translate-x-1">
                      <HiArrowUpRight className="text-sm" />
                    </span>
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NAV ARROWS */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[62%] -translate-y-1/2
          w-12 h-12 border border-gray-200 rounded-full bg-white hover:bg-color1
          flex items-center justify-center text-gray-700 hover:text-white shadow-xl
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowRightLong className="text-sm" />
      </button>
      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[62%] -translate-y-1/2
          w-12 h-12 border border-gray-200 rounded-full bg-white hover:bg-color1
          flex items-center justify-center text-gray-700 hover:text-white shadow-xl
          transition-all duration-300 hover:scale-110 hover:border-color1`}
      >
        <FaArrowLeftLong className="text-sm" />
      </button>
    </>
  );
}