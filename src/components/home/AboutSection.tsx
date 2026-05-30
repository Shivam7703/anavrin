"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPlane } from "react-icons/fa";
import Buttonmain from "../global/button";

export default function AboutSection({ data }: any) {

  const skillBars = data?.skillBars || [
    { label: "Visa Consulting", percent: 85 },
        { label: "Immigration Consultancy", percent: 90 },

  ];

  const checklist = data?.checklist || [
    { id: 1, label: "Visa Consulting" },
    { id: 2, label: "Immigration Consultancy" },
  ];

  const sideNote =
    data?.sideNote ||
    "At vero eoset accusam etusto odio dignissimos ducimus qui";

  return (
<section className="w-full py-12 px-4 md:px-12 lg:px-20 xl:px-24 relative">
      {/* ───────── DYNAMIC SHAPES ───────── */}

 
      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-color1/10 blur-xl"
      />

     

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-stretch justify-between gap-10 lg:gap-16 relative z-10">

        {/* ─── LEFT CONTENT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center"
        >

          {/* Badge */}
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="block w-8 h-[3px] bg-color1 rounded-full" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {data?.title1 || "About Company"}
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-5"
          >
            {data?.title2 || "Greetings to Experience"}{" "}
            <span className="text-color1 relative inline-block">
              {data?.title3 || "Visa Consulting Firm."}

             
            </span>
          </motion.h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            {data?.para ||
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}
          </p>

          {/* Skill Bars */}
          <div className="mb-8 space-y-4">
            {skillBars.map((bar: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-gray-800">
                    {bar.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {bar.percent}%
                  </span>
                </div>

                <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.percent}%` }}
                    transition={{ duration: 1, delay: 0.2 * i }}
                    viewport={{ once: true }}
                    className="h-full bg-color1  rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checklist */}
          <div className="flex flex-col sm:flex-row gap-6 mb-9">

            <div className="flex flex-col gap-3 sm:w-[45%]">
              {checklist.map((item: any) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <FaCheckCircle className="text-color2 text-lg transition-all duration-300 group-hover:scale-125 group-hover:text-color1" />
                  <span className="text-sm font-semibold text-gray-800">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="hidden sm:block w-px bg-gray-200 self-stretch" />

            <motion.div
              whileHover={{ y: -4 }}
              className="sm:w-[50%] flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="text-sm text-gray-600 leading-relaxed">
                {sideNote}
              </p>
            </motion.div>

          </div>

          {/* CTA */}
          <Buttonmain
            href="/about"
            text1="Read More"
            text2="Learn More"
          />

        </motion.div>

        {/* ─── RIGHT SIDE IMAGES ─── */}
        <div className="lg:w-[48%] relative">
          <div className="relative w-full min-h-[420px] md:min-h-[520px] h-full">

            {/* animated line */}
            <motion.div
              animate={{
                width: ["10%", "40%", "10%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-0 h-[6px] bg-color1 z-[5] rounded-sm"
            />

            {/* MAIN IMAGE */}
            {data?.img1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.04,
                  rotate: -1,
                }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="group absolute top-[2%] left-0 w-[57%] h-[90%]
                overflow-hidden shadow-2xl"
                
              >
                <Image
                  src={data.img1}
                  alt="immigration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            )}

            {/* SECOND IMAGE */}
            {data?.img2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.04,
                  rotate: 1,
                }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="group absolute top-[18%] right-0 w-[44%] h-[82%]
                overflow-hidden shadow-2xl"
                
              >
                <Image
                  src={data.img2}
                  alt="consultants"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-color1/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            )}

            {/* Floating Plane */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-10 flex items-center justify-center
              w-[78px] h-[78px] rounded-full bg-color1
              shadow-2xl shadow-red-400/40 cursor-pointer"
              style={{
                bottom: "18%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <FaPlane className="text-white text-2xl -rotate-45" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}