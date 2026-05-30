"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaFileSignature,
  FaShieldAlt,
} from "react-icons/fa";
import { Whychoose as data } from "@/data/homeData";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Direct Online Interviews",
    text: "Nam libero tempore cusoluta nobis est eligendi optio cumque nihil impedit quo minus maxime placeat.",
  },
  {
    icon: <FaFileSignature />,
    title: "Quick & Easy Process",
    text: "Nam libero tempore cusoluta nobis est eligendi optio cumque nihil impedit quo minus maxime placeat.",
  },
  {
    icon: <FaUserGraduate />,
    title: "99% Visa Approvals",
    text: "Nam libero tempore cusoluta nobis est eligendi optio cumque nihil impedit quo minus maxime placeat.",
  },
];

export default function WhychooseSection() {
  return (
    <section className="w-full bg-white pb-6 sm:pb-10 relative">

            <div className="absolute -z-0 -right-44 translate-y-1/2 bottom-0 w-[350px] h-[350px] border-[26px] border-color3 rounded-full opacity-20 sm:opacity-80" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* ─── LEFT: IMAGE COLLAGE ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[48%] flex justify-center"
          >
            <div className="relative w-full max-w-[520px] h-[460px] sm:h-[500px] md:h-[540px]">
              
              {/* BIG LEFT IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-0 w-[55%] h-[73%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer z-[2]"
              >
                <Image 
                  src={data?.img || "/placeholder.jpg"} 
                  alt="immigration main" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* TOP RIGHT IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="absolute right-0 top-0 w-[43%] h-[38%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer z-[2]"
              >
                <Image 
                  src={data?.img || "/placeholder.jpg"} 
                  alt="immigration top right" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* BOTTOM RIGHT IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="absolute right-0 bottom-0 w-[43%] h-[60%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer z-[2]"
              >
                <Image 
                  src={data?.img || "/placeholder.jpg"} 
                  alt="immigration bottom right" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>


              {/* TRUST CARD - floating */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="absolute left-[12%] bottom-[5%] z-20 
                  bg-color1 backdrop-blur-sm 
                  w-[200px] xs:w-[220px] sm:w-[250px]
                  px-5 sm:px-6 py-5 sm:py-7
                  rounded-xl shadow-2xl
                  cursor-default"
              >
                <h3 className="text-white font-black text-xl sm:text-2xl md:text-[26px] leading-tight">
                  10k+ Trusted<br />Customers
                </h3>

                {/* AVATARS */}
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((item, idx) => (
                    <div
                      key={item}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden
                        border-2 border-white shadow-md
                        ${idx !== 0 ? '-ml-2' : ''}`}
                    >
                      <Image 
                        src={data?.img || "/placeholder.jpg"} 
                        alt={`avatar ${idx + 1}`}
                        width={36} 
                        height={36} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full
                    bg-white text-clor1 font-black text-sm
                    flex items-center justify-center
                    border-2 border-white -ml-2 shadow-md">
                    +
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ─── RIGHT: CONTENT ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[52%]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="block h-[3px] bg-color1 rounded-full"
                style={{ width: "2rem" }}
              />
              <p className="uppercase tracking-[0.22em] text-xs font-bold text-color1">
                Why Choose Us
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              viewport={{ once: true }}
              className="text-zinc-800 font-bold leading-tight
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Some Reasons People Like{" "}
              <span className="text-color1 relative inline-block">
                Our Consultancy
                
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="text-gray-500 leading-relaxed text-base sm:text-lg mt-5 max-w-lg"
            >
              At vero eoset accusam etusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quose.
            </motion.p>

            {/* Reasons List */}
            <div className="mt-10 space-y-6">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0
                    w-14 h-14 sm:w-16 sm:h-16
                    flex items-center justify-center
                    text-2xl sm:text-3xl text-color1
                    bg-red-50 rounded-2xl
                    group-hover:bg-color1 group-hover:text-white
                    group-hover:shadow-lg group-hover:shadow-red-200
                    transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-gray-800 font-bold text-base sm:text-lg
                      group-hover:text-color1 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-1">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
        
          </motion.div>

        </div>
      </div>
    </section>
  );
}