"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { VscChromeClose } from "react-icons/vsc";
import { IoMail, IoMenu } from "react-icons/io5";
import {
  FaCreditCard,
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaSquarePhone,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";

import { canadaflag, logo, logo2, ukflag, usflag } from "@/assets";
import { navigationMenu } from "@/data/homeData";


const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(current < lastScrollY || current < 90);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setNavItems(header?.navItems || []);
  }, [header]);

  return (
    <>
      {/* HEADER SPACER */}
      <div className="h-20 md:h-36 bg-color5" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${isAtTop ? " top-0" : "md:-top-0 -top-1"}`}
      >
        {/* ================= DESKTOP HEADER ================= */}
        <div className="max-md:hidden shadow-md w-full">
          <div className="w-full flex relative items-stretch">
            {/* decorative gradient shapes */}

            {/* LOGO */}
            <Link
              href={header?.href || "/"}
              className="w-72 py-3 relative flex justify-center items-center bg-white z-10"
            >
              <Image
                src={logo}
                alt="Globesway Immigration"
                className="w-[70%] mx-auto object-contain hover:scale-105 transition"
              />
            </Link>

            <div className="w-full  relative z-10">


              {/* NAV BAR */}
              <div className="flex bg-color1  justify-between items-center w-full px-10 py-4 relative"><div
                className="absolute bg-color3 h-[130%] w-1/2 scale-x-[-1]  -right-4 -top-2 z-0"
                style={{
                  clipPath: "polygon( 100% 0, 80% 100%, 0 100%, 0 0)",
                }}
              />
                {/* MENU */}
                <Menu
                  navItemsArray={navItems}
                  Items={navigationMenu.primaryMenu}
                  Isprimary={true}
                  onTop={isAtTop}
                />

                <div className="flex gap-3.5 text-xl">
                  {/* Facebook */}
                  <div
                    className="group relative w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm
                      border-[1.5px] border-white flex items-center justify-center cursor-pointer
                        overflow-hidden transition-all duration-300
                        hover:-translate-y-1 hover:scale-110 hover:border-transparent
                        hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/globeswayimmigration",
                        "_blank"
                      )
                    }
                  >
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#1877F2] to-[#0a5bb5]"
                    />
                    <FaFacebook className="text-base text-[#1877F2] group-hover:text-white relative z-10 transition-colors duration-300" />
                  </div>

                  {/* Instagram */}
                  <div
                    className="group relative w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/globeswayimmigration/",
                        "_blank"
                      )
                    }
                  >
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                      }}
                    />
                    <AiFillInstagram className="text-lg text-rose-600 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </div>

                  {/* LinkedIn */}
                  <div
                    className="group relative w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/globesway-immigration/",
                        "_blank"
                      )
                    }
                  >
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#0A66C2] to-[#004182]"
                    />
                    <FaLinkedinIn className="text-lg text-[#0A66C2] group-hover:text-white relative z-10 transition-colors duration-300" />
                  </div>

                  {/* YouTube */}
                  <div
                    className="group relative w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm
      border-[1.5px] border-white flex items-center justify-center cursor-pointer
      overflow-hidden transition-all duration-300
      hover:-translate-y-1 hover:scale-110 hover:border-transparent
      hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@GlobeswayImmigration",
                        "_blank"
                      )
                    }
                  >
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-br from-[#FF0000] to-[#cc0000]"
                    />
                    <TbBrandYoutubeFilled className="text-lg text-[#FF0000] group-hover:text-white relative z-10 transition-colors duration-300" />
                  </div>
                </div>


                {/* BUTTONS WRAPPER */}
                <div className="flex items-center gap-5">
                  <PaymentButton />
                </div>
              </div>
              <div className=" bg-white w-full justify-between flex py-2.5 px-6 ">
                <Menu
                  navItemsArray={navItems}
                  Items={navigationMenu.secondaryMenu}
                  Isprimary={false}
                  onTop={isAtTop}
                />

                <div className="flex items-center  gap-6 max-lg:hidden">
                  {/* Phone Link */}
                  <a
                    href="tel:+1234567890"
                    className="group flex items-center gap-2.5 text-sm font-bold text-zinc-600 transition-colors duration-200 hover:text-color1"
                  >
                    <FaPhone className="text-lg text-color1 transition-colors duration-200 group-hover:text-color3" />
                    <span>+91 123 456 7890</span>
                  </a>

                  {/* Divider Line */}
                  <span className="h-4 w-px bg-zinc-200" />

                  {/* Email Link */}
                  <a
                    href="mailto:info@anavrinadviser.com"
                    className="group flex items-center gap-2.5 text-sm font-bold text-zinc-600 transition-colors duration-200 hover:text-color1"
                  >
                    <IoMail className="text-xl text-color1 transition-colors duration-200 group-hover:text-color3" />
                    <span>info@anavrinadviser.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div
          className={`flex md:hidden items-center justify-between px-4 h-20 transition ${isAtTop ? "bg-color1" : "bg-white shadow-md"
            }`}
        >
          <Link href={header?.href || "/"}>
            <Image
              src={isAtTop ? logo2 : logo}
              alt="Globesway Immigration"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {isMobileMenuOpen ? (
            <VscChromeClose
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <IoMenu
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-20 left-0 h-screen w-full md:hidden transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } ${isAtTop ? "bg-black" : "bg-white"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </header >
    </>
  );
};

export default Header;


function PaymentButton() {
  return (
    <div className="flex items-end gap-4 flex-shrink-0">

      {/* ── CALL ANYTIME (matches image: red circle icon + text) ── */}
      {/* <a
        href="tel:+911234567890 z-10"
        className="group flex items-center gap-3 flex-shrink-0"
      >
        <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-red-600 flex items-center justify-center
          
          group-hover:shadow-[0_0_0_8px_rgba(203,0,0,0.2)]
          transition-all duration-300">
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30" />
          <FaPhone className="text-white text-base relative z-10" />
        </div>

        <div className="leading-tight z-10 sticky">
          <p className="text-xs text-white/80 font-medium tracking-wide uppercase">
            Support 24 X 7
          </p>
          <p className="text-base text-white font-bold tracking-wide">
          +91 1234567890
          </p>
        </div>
      </a> */}



      {/* ── PAY NOW BUTTON ── */}
      <Link
        href="/payment"
        className="group relative inline-flex items-center gap-3 overflow-hidden
  rounded-xl bg-color1 px-6 py-4 hover:bg-zinc-700
  text-white font-semibold text-[14px] tracking-wide
  shadow-lg shadow-blue-800/30
  transition-all duration-300 hover:scale-[1.03] hover:shadow-color3/50"
      >


        {/* Shine Effect */}
        <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>

        {/* Content */}
        <span className="relative z-10 overflow-hidden h-[1.3em] flex items-center">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
            Pay Now    </span>

          <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
            Pay Now
          </span>
        </span>

        <FaCreditCard className="relative z-10 text-[15px] text-white transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
