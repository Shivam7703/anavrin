"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsPassportFill } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";

const stats = [
  {
    id: 1,
    icon: <MdVerified className="text-[20px] sm:text-[24px] lg:text-[28px]" />,
    suffix: "k+",
    title: "Visa Approval",
    Value: 5,
  },
  {
    id: 2,
    icon: (
      <BsPassportFill className="text-[20px] sm:text-[24px] lg:text-[28px]" />
    ),
    suffix: "k+",
    title: "Visa Consultation",
    Value: 38,
  },
  {
    id: 3,
    icon: (
      <RiShieldCheckFill className="text-[20px] sm:text-[24px] lg:text-[28px]" />
    ),
    suffix: "+",
    title: "Visa Categories",
    Value: 25,
  },
  {
    id: 4,
    icon: <FaUsers className="text-[20px] sm:text-[24px] lg:text-[28px]" />,
    suffix: "+",
    title: "Expert Consultants",
    Value: 80,
  },
];

function CountDown() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 pt-6 -mb-[4.25rem] relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-color1 rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 relative">
          
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.13 }}
              className="flex group items-center gap-3 sm:gap-4 relative"
            >
              {/* Icon Box */}
              <div
                className="flex-shrink-0
                w-12 h-12
                md:w-16 md:h-16
                flex items-center justify-center
                text-white border border-white/50 rounded-md
                group-hover:border-white/60
                group-hover:bg-white/30
                transition-all duration-300"
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-white font-bold  leading-none tracking-tight text-[24px] sm:text-[32px] md:text-5xl">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.Value}
                      duration={2.5}
                    />
                  ) : (
                    "0"
                  )}
                 {" "} {item.suffix}
                </p>

                <p className="text-white/80 text-[11px] sm:text-base font-medium mt-1 leading-tight">
                  {item.title}
                </p>
              </div>

              {/* Divider */}
              {index < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2
                  w-px h-14 bg-white/20"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CountDown;