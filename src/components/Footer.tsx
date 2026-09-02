"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { navigationMenu } from "@/data/homeData";
import { logo } from "@/assets";
import { FormatHref } from "./header/Menu";

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className=" bg-zinc-100">
        {/* Footer links section  */}
        <div className="grid sm:p-8 p-6 md:px-24  w-full text-black bg-color5  grid-cols-3 sm:grid-cols-6 gap-6 lg:gap-10 lg:grid-cols-12">
          <div className="col-span-3 flex flex-col gap-y-2">
            <Image
              src={logo}
              alt="logo"
              className="max-w-56 w-[80vw] object-contain"
            />
            <p className=" w-full text-base mt-3  max-sm:mt-3">
              {footer?.text}
            </p>
            {/* Socials  */}
            {(
              <div className="flex gap-3 mt-5">
                {/* Facebook */}
                <div
                  className="group relative w-11 h-11 rounded-xl  
                                    border-[1.5px]  flex items-center justify-center cursor-pointer
                                       transition-all duration-300
                                      hover:-translate-y-1 hover:scale-110 border-white marker:
                                      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/anavrinadviser",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-100  transition-opacity duration-300
                    bg-gradient-to-br from-[#1877F2] to-[#0a5bb5]"
                  />
                  <FaFacebook className="text-xl text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* Instagram */}
                <div
                  className="group relative w-11 h-11 rounded-xl  
                    border-[1.5px]  flex items-center justify-center cursor-pointer
                     transition-all duration-300
                    hover:-translate-y-1 hover:scale-110 border-white marker:
                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/anavrinadviser/",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-100  transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                    }}
                  />
                  <AiFillInstagram className="text-2xl text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* LinkedIn */}
                <div
                  className="group relative w-11 h-11 rounded-xl  
                    border-[1.5px]  flex items-center justify-center cursor-pointer
                     transition-all duration-300
                    hover:-translate-y-1 hover:scale-110 border-white marker:
                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/anavrinadviser-immigration/",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-100  transition-opacity duration-300
                    bg-gradient-to-br from-[#0A66C2] to-[#004182]"
                  />
                  <FaLinkedinIn className="text-xl text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* YouTube */}
                <div
                  className="group relative w-11 h-11 rounded-xl  
                    border-[1.5px]  flex items-center justify-center cursor-pointer
                     transition-all duration-300
                    hover:-translate-y-1 hover:scale-110 border-white marker:
                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@anavrinadviser",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="absolute inset-0 rounded-xl  duration-300
                    bg-gradient-to-br from-[#FF0000] to-[#cc0000]"
                  />
                  <TbBrandYoutubeFilled className="text-xl text-white relative z-10 " />
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
          <div className="col-span-2 flex flex-col gap-y-2 max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list2?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-600 duration-300 hover:text-green2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col gap-y-2  max-sm:mt-5">
            <h4 className="my-2 text-xl font-semibold">
              {footer?.list1?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list1?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.href}
                    className=" transition:all text-base text-zinc-600 duration-300 hover:text-green2 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>

          <div className=" flex flex-col max-sm:mt-5 space-y-2  col-span-3">
            <h4 className="my-2  text-xl font-semibold">
              {footer?.newLetter?.title}
            </h4>
            <p className=" transition:all text-base text-zinc-600 duration-300 hover: hover:text-main ">
              <strong>Phone: </strong>&nbsp;0679513203,0677066361
            </p>
            <p className=" transition:all text-base text-zinc-600 duration-300 hover: hover:text-main ">
              <strong>E-mail: </strong>&nbsp;info@anavrinadviser.com
            </p>
            <p className=" transition:all text-base text-zinc-600 duration-300 hover: hover:text-main ">
              <strong>Address: </strong>&nbsp;Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum voluptate necessitatibus quod
              beatae.
            </p>
          </div>
        </div>
        <div className="text-black space-y-7  py-6 px-6 md:px-24 ">
          {navigationMenu?.secondaryMenu?.map((item: any) => (
            <div key={item.id}>
              <span className="font-bold">{item?.label}: </span>
              {item?.subNav?.map((navitem: any) => (
                <div key={navitem?.id}>
                  <Link
                    title={navitem?.label}
                    className="text-zinc-700"
                    href={FormatHref(navitem.href)}
                  >
                    {navitem?.label}
                    {"  "}&nbsp; | {"  "}&nbsp;
                  </Link>
                  {navitem?.subNav?.map((subNavItem: any) => (
                    <>
                      <Link
                        title={subNavItem?.label}
                        className="text-zinc-700"
                        key={subNavItem?.id}
                        href={FormatHref(subNavItem.href)}
                      >
                        {subNavItem?.label}
                        {"  "}&nbsp; | {"  "}&nbsp;
                      </Link>
                      {subNavItem?.subNavv?.map((data: any) => (
                        <Link
                          title={data?.label}
                          className="text-zinc-700"
                          key={data?.id}
                          href={FormatHref(data.href)}
                        >
                          {data?.label}
                          {"  "}&nbsp; | {"  "}&nbsp;
                        </Link>
                      ))}
                    </>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* footplane */}
        {/* <Footplane /> */}
        {/* copyright  */}
        <div className="flex items-center justify-center bg-color1 text-white bg-color5 py-5 max-md:flex-col">
          <p className="text-center text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-black transition-all font-semibold cursor-pointer">
              <a href="https://skywarddigitalsolutions.com">
                Skyward Digital Solutions
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

