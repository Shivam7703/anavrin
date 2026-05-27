import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillPersonFill, BsChatDots } from "react-icons/bs";
import Link from "next/link";
import { box3 } from "@/assets";

export default function Blogs({ isHome }: any) {

  const slugify = (str: string) =>
    str.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      className={`relative w-full overflow-hidden bg-white max-w-[1450px] mx-auto ${
        isHome
          ? "px-4 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 xl:px-20"
          : "px-3 pb-5"
      }`}
    >

      {/* ── HEADER ── */}
      {isHome && (
        <div className="text-center mb-10 sm:mb-14">

          {/* Small label with red line */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <p className="text-color1 font-bold uppercase text-xs tracking-[0.22em]">
              {data?.title1 || "News & Blog"}
            </p>
          </div>

          <h2 className="text-zinc-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            {"Read Our Latest News & Blog"}
          </h2>

        </div>
      )}

      {/* ── GRID ── */}
      <div
        className={`grid gap-6 sm:gap-7 mx-auto
          sm:grid-cols-2 ${isHome ? "lg:grid-cols-3" : ""}`}
      >
        {(isHome ? data?.blog?.slice(0, 3) : data?.blog)?.map(
          (blog: any, index: number) => (
            <div
              key={index}
              className="group bg-white w-full overflow-hidden
                border border-gray-150 shadow-[0_2px_16px_rgba(0,0,0,0.07)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)]
                hover:-translate-y-1
                transition-all duration-400"
            >

              {/* ── IMAGE ── */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <Image
                  src={blog?.img || box3}
                  alt={blog.heading}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400" />

                {/* Date badge — bottom left */}
                {blog?.date && (
                  <div className="absolute bottom-0 left-6
                    bg-color1 text-white text-center
                    px-3 pt-2 pb-3 min-w-[58px]
                    shadow-lg z-10">
                    <p className="text-2xl font-black leading-none">
                      {blog.date.split(" ")[0]}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider font-semibold mt-0.5 opacity-90">
                      {blog.date.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                )}
              </div>

              {/* ── CONTENT ── */}
              <div className="px-6 pt-5 pb-6">

                {/* Meta: author + comments */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <BsFillPersonFill className="text-color1 text-xs" />
                    By {blog?.author || "Shadhin"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BsChatDots className="text-color1 text-xs" />
                    {blog?.comments || "No Comments"}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-4" />

                {/* Title */}
                <Link href={`/blogs/${slugify(blog.heading)}`}>
                  <h2 className="text-[17px] sm:text-xl font-bold leading-snug
                    text-zinc-900 group-hover:text-color3
                    transition-colors duration-300 line-clamp-2 mb-3 cursor-pointer">
                    {blog.heading}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-5">
                  {blog?.para?.slice(0, 120) ||
                    "These case are perfectly simple easy to distinguish free ho take trivial"}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-4" />

                {/* Read More */}
                <Link
                  href={`/blogs/${slugify(blog.heading)}`}
                  className="inline-flex items-center gap-2.5 text-xs font-bold
                    uppercase tracking-widest text-zinc-800
                    group-hover:text-color1 transition-colors duration-300
                    hover:gap-3.5"
                >
                  Read More
                  {/* Red circle arrow */}
                  <span className="w-6 h-6 rounded-full bg-color1
                    flex items-center justify-center flex-shrink-0
                    transition-transform duration-300 group-hover:translate-x-1">
                    <FaArrowRight className="text-white text-[9px]" />
                  </span>
                </Link>

              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}