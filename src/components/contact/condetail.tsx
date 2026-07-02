"use client";
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContactUsSection() {
  return (
    <section className="bg-white lg:px-20 md:p-14 sm:p-10 p-6 max-w-[1240px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ── LEFT SIDE: FORM WITH BORDER & PADDING ── */}
        <div className="lg:col-span-7 w-full rounded-[24px] bg-[#fcfdfe] p-6 sm:p-8 md:p-10 shadow-[0_8px_20px_rgba(0,0,0,0.32)]">
          
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl tracking-tight">
Reach Out To Us
            </h2>
          </div>

          {/* Form Inputs */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 shadow-sm shadow-black/10 border rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-300"
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-5 py-3.5 shadow-sm shadow-black/10 border rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3.5 shadow-sm shadow-black/10 border rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-300"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-5 py-3.5 shadow-sm shadow-black/10 border rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-5 py-3.5 shadow-sm shadow-black/10 border rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-200 focus:bg-white transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-color1 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-color3 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ── RIGHT SIDE: DETAILS PANEL ── */}
        <div className="lg:col-span-5 w-full lg:pt-4">
          
          {/* Text Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-color1 font-bold text-xs uppercase tracking-widest">
                Need Any Help?
              </span>
            </div>
            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Get in touch with us
            </h2>
            <p className="text-gray-800 max-sm:text-sm leading-relaxed font-normal">
Our team is here to provide clear guidance and prompt support for all your immigration queries. Whether you need consultation, service details, or application assistance, we’re ready to help you at every step of the way.
            </p>
          </div>

          {/* Info Details List */}
          <div className="space-y-6 mt-8">
            
            {/* Phone Card */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-color1 text-white shadow-md shadow-zinc-700/40 group-hover:scale-105 transition duration-300 flex-shrink-0">
                <FiPhone size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-base">Phone</span>
                <a href="tel:+911234567890" className="text-gray-500 text-sm font-medium hover:text-color1 transition">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-color1 text-white shadow-md shadow-zinc-700/40 group-hover:scale-105 transition duration-300 flex-shrink-0">
                <FiMail size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-base">Email</span>
                <a href="mailto:contact@anavrinadviser.com" className="text-gray-500 text-sm font-medium hover:text-color1 transition">
                  contact@anavrinadviser.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-color1 text-white shadow-md shadow-zinc-700/40 group-hover:scale-105 transition duration-300 flex-shrink-0">
                <FaMapMarkerAlt size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-base">Address</span>
                <span className="text-gray-500 text-sm font-medium">
                 lorem ipsum dolor sit amet, consectetur adipiscing elit, .
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUsSection;