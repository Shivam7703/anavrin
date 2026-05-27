"use client";
import React from "react";
import Link from "next/link";
import { BsPassportFill } from "react-icons/bs";
import { RiSpeedMiniFill, RiUserCommunityFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export default function Greenbox() {

  const data = [
    {
      id: 1,
      heading: "Visa Process Responsibility",
      para: "Complete assistance with visa filing, ensuring every step is handled accurately for better approval chances.",
      icon: <BsPassportFill />,
    },
    {
      id: 2,
      heading: "Faster & Reliable Executant",
      para: "Proper guidance for preparing and verifying all required documents to avoid errors and delays.",
      icon: <RiSpeedMiniFill />,
    },
    {
      id: 3,
      heading: "Accurate & Expert Advice",
      para: "Dedicated support for every client with clear communication and guidance throughout the entire process.",
      icon: <RiUserCommunityFill />,
    },
    {
      id: 4,
      heading: "Legal Immigration Success",
      para: "Trusted legal expertise to ensure your immigration journey meets all compliance and regulatory requirements.",
      icon: <HiOutlineDocumentCheck />,
    },
  ];

  return (
    <section className="w-full md:py-10 p-4 md:-mt-16">

      {/* Section Header */}
     

      {/* Cards Grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((card) => (
          <div
            key={card.id}
            className="group relative bg-white   overflow-hidden cursor-pointer z-30
              shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              transition-all duration-500
              hover:-translate-y-2
              "
          >

            {/* Decorative background blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full
              bg-gradient-to-br from-color1 to-red-700 
              opacity-10 group-hover:opacity-20
              transition-opacity duration-500 blur-2xl" />

            {/* Icon circle — floats above top edge */}
            <div className="px-6 pt-8 pb-6">
              <div
                className="w-[64px] h-[64px] mb-6 rounded-full
                  bg-gradient-to-br from-color1 to-orange-500
                  flex items-center justify-center text-[26px] text-zinc-50
                  shadow-lg shadow-red-900/40
                  transition-all duration-400
                  group-hover:scale-110 "
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                {card.heading}
              </h3>

              {/* Para */}
              <p className="text-[14px] text-gray-600 leading-[1.75] mb-6">
                {card.para}
              </p>

              {/* Arrow link */}
              <Link
                href="#"
                className="inline-flex items-center justify-center
                  w-8 h-8 rounded-full
                  border border-gray-600 text-gray-600
                  transition-all duration-300
                  group-hover:border-color1 group-hover:text-color1
                  hover:bg-color1 hover:!text-white hover:!border-color1"
              >
                <MdArrowRightAlt className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}