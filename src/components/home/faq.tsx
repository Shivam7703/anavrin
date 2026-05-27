"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { plane, } from "@/assets";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FaqItem from "../global/faqs";



// Main Component
export default function FaqSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const faqQuestions = [
    {
      que: "What Is Visa Immigration Services?",
      ans: "Visa immigration services help individuals and families navigate the complex process of obtaining visas and immigration documentation for international travel and relocation.",
    },
    {
      que: "Have Any Visa Consultant?",
      ans: "Yes, we have certified visa consultants with over 10 years of experience in handling various visa categories and immigration cases.",
    },
    {
      que: "Which country is good for residents?",
      ans: "Countries like Canada, Australia, Germany, and New Zealand are popular for residents due to their quality of life, healthcare, and education systems.",
    },
    {
      que: "How Many Cost For Visa Immigrations?",
      ans: "Visa costs vary by country and visa type, typically ranging from $100 to $1000+. Contact us for a personalized quote.",
    },
  ];

  return (
    <motion.section
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gradient-to-br from-gray-50 to-white py-8 md:py-20 relative overflow-hidden"
    >
      <Image src={plane} alt="Plane" className="absolute top-3 right-6 w-fit h-96 z-0 object-contain opacity-30" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
          
          {/* LEFT SIDE - CONTACT FORM */}
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="w-full lg:w-1/2 z-10 "
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              {/* Header */}
              <div className="mb-6">
                <span className="text-color1 font-bold uppercase text-xs tracking-[0.22em]">
                  HAVE ANY QUESTIONS?
                </span>
               
                <p className="text-gray-800 text-xl sm:text-3xl font-bold mt-1">
                  Feel Free to Contact Us
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 outline-none transition"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enter Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 outline-none transition"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 outline-none transition"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 outline-none transition resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-color1 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message →
                </motion.button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-color1" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-color1" />
                    <span>info@consultancy.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-color1" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FAQ SECTION */}
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            className="w-full lg:w-1/2"
          >
            <div className="bg-transparent">
              {/* Header */}
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
faq                            </p>
                          </motion.div>
              
                          {/* Heading */}
                          <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.55 }}
                            viewport={{ once: true }}
                            className="text-zinc-800 mb-5 font-bold leading-tight
                              text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                          >
                            Fraquently Asked{" "}
                            <span className="text-color1 relative inline-block">
                              Questions                             
                            </span>
                          </motion.h2>

              {/* FAQ List */}
              <FaqItem data={faqQuestions} />

              {/* Description */}
              <p className="text-gray-800 leading-relaxed mt-6 pt-4 border-t border-gray-200">
                Sed perspiciatis unde omniste natus voluptatem accusantie doloremque 
                laudantium totam aperiam eaque quae inventore veritatis et quasi 
                architecto beatae vitae dicta.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}