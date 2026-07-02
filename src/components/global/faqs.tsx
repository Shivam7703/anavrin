"use client";
import { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

// FAQ Component
export default function FaqItem({ data }: { data: { que: string; ans: string }[] }){
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const isOpen = expandedIndex === index;

        return (
          <div
            key={index}
            className={`group relative rounded-xl border transition-all duration-300 overflow-hidden bg-white
              ${isOpen
                ? "border-red-200 shadow-lg shadow-red-100"
                : "border-gray-200 hover:border-red-200 hover:shadow-md"
              }`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300
                ${isOpen ? "bg-color1" : "bg-transparent group-hover:bg-red-300"}`}
            />

            {/* Question row */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <h3
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 leading-snug pr-4
                  ${isOpen ? "text-blue-700" : "text-gray-800"}`}
              >
                {item.que}
              </h3>

              <BsArrowUpRightCircleFill
                className={`text-xl shrink-0 transition-all duration-300
                  ${isOpen
                    ? "rotate-[135deg] text-color1"
                    : "text-gray-400 group-hover:text-red-400"
                  }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.ans}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};