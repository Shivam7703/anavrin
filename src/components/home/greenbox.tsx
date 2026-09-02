"use client";
import React from "react";
import Link from "next/link";
import { BsPassportFill } from "react-icons/bs";
import { RiSpeedMiniFill, RiUserCommunityFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import {boxdata as data} from "@/data/homeData";


export default function Greenbox() {

 

  return (
    <section className="w-full md:py-10 p-4 md:-mt-20">

      {/* Section Header */}
     

      {/* Cards Grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((card) => (
          <div
            key={card.id}
            className="group relative bg-white cursor-pointer z-30
              shadow-lg rounded-xl 
              transition-all duration-500
              hover:-translate-y-2
              "
          >

            {/* Icon circle — floats above top edge */}
            <div className="px-6 -mt-6 pb-6">
              <div
                className="w-[64px] h-[64px] mb-6  rounded-full
                  bg-gradient-to-br from-color3 to-blue-500
                  flex items-center justify-center text-[26px] text-zinc-50
                  shadow-lg shadow-red-900/30
                  transition-all duration-400
                  group-hover:scale-110 "
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl  font-bold text-blue-800 mb-3 leading-snug">
                {card.heading}
              </h3>

              {/* Para */}
              <p className="text-[14px] text-gray-800 leading-[1.75] mb-6">
                {card.para}
              </p>

              
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}