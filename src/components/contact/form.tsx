import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { contat } from "@/assets"; // सुनिश्चित करें कि यह इम्पोर्ट सही है

const pointers = [
  "Over 20 years of experience in immigration consulting services",
  "Strong success record across work, study, and PR visa categories",
  "Expert guidance for 150+ global immigration destinations",
  "Complete support from profile evaluation to final visa decision",
  "Transparent process with clear communication at every step",
  "Dedicated support team available 6 days a week for assistance",
];

function Form() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 lg:px-24 !pt-16 md:p-16 sm:px-10 p-6 ">
      
      {/* Ambient Premium Background Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-color1/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-color2/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* ── LEFT SIDE: IMAGE (FIXED HEIGHT FOR GUARANTEED VISIBILITY) ── */}
          <div className="lg:col-span-5 w-full ">
            <div className="w-full max-w-[650px]">
              
              {/* यहाँ fill हटाकर width/height या standard responsive layout यूज़ किया है */}
              {contat ? (
                <Image
                  src={contat}
                  alt="Contact Illustration"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.44)] transition-transform duration-700 hover:scale-[1.02]"
                />
              ) : (
                <span className="text-xs text-gray-400">Image Asset Missing</span>
              )}

            </div>
          </div>

          {/* ── RIGHT SIDE: POINTERS PANEL WITH BORDER & PADDING ── */}
          <div className="lg:col-span-7 w-full bg-white border border-gray-100/80 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,40,100,0.03)]">
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-color1" />
                <span className="text-color1 font-semibold text-xs uppercase tracking-[0.2em]">
                  Need Any Help?
                </span>
              </div>
              <h3 className="text-gray-950 font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
                Making Your Immigration Journey Simple And Clear
 <br />
                <span className=" text-color1">With Trusted Expert Guidance
</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
Get personalized immigration support from experienced consultants who understand your goals and guide you through every stage. From eligibility check to final submission, we ensure a smooth, clear, and well-managed process for better outcomes.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-gray-100 mb-4" />

            <ul className="flex flex-col gap-5">
              {pointers.map((pt, i) => (
                <li key={i} className="group flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 text-color3 group-hover:text-color2 transition-colors duration-300">
                    <FaCheckCircle size={18} className="opacity-90 drop-shadow-sm" />
                  </span>
                  <span className="text-gray-700 text-base md:text-lg font-light leading-relaxed tracking-wide">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Form;