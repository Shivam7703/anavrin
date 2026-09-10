"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineChat, MdStickyNote2 } from "react-icons/md";
import { FaChevronRight, FaDownload, FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoChatboxEllipsesOutline, IoSettings } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { GrVisa } from "react-icons/gr";
import { Servicedata } from "@/data/servicedata";

const visaList = [
  { id: 1, title: "Canada Work Permit Visa", href: "/visas/canada-work-permit-visa" },
  { id: 2, title: "Australia Work Permit Visa", href: "/visas/australia-work-permit-visa" },
  { id: 3, title: "Germany Job Seeker Visa", href: "/visas/germany-job-seeker-visa" },
  { id: 4, title: "Luxembourg Work Visa", href: "/visas/luxembourg-work-visa" },
  { id: 5, title: "Ireland Work Visa", href: "/visas/ireland-work-visa" },
  { id: 6, title: "Sweden Work Visa", href: "/visas/sweden-work-visa" },
  { id: 7, title: "Portugal Work Visa", href: "/visas/portugal-work-visa" },
  { id: 8, title: "Croatia Work Visa", href: "/visas/croatia-work-visa" },
  { id: 9, title: "Slovakia Work Visa", href: "/visas/slovakia-work-visa" },
  { id: 10, title: "UK Work Visa", href: "/visas/uk-work-visa" },
  { id: 11, title: "Greece Work Visa", href: "/visas/greece-work-visa" },
  { id: 12, title: "Malta Work Visa", href: "/visas/malta-work-visa" },
  { id: 13, title: "Poland Work Visa", href: "/visas/poland-work-visa" },
];

const inputFields = [
  { name: "name", label: "Name", type: "text", icon: FaRegUserCircle, placeholder: "John Doe" },
  { name: "phone", label: "Phone", type: "tel", icon: FiPhone, placeholder: "+1 (555) 000-0000" },
  { name: "email", label: "Email", type: "email", icon: FiMail, placeholder: "john@example.com" },
  { name: "location", label: "Location", type: "text", icon: FaLocationArrow, placeholder: "City, Country" },
  { name: "subject", label: "Subject", type: "text", icon: IoChatboxEllipsesOutline, placeholder: "How can we help?" },
];

const createSlug = (title: string) =>
  title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export default function ServiceAside() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    const path = lastSegment || "home";
    setActiveItem(path);
  }, [pathname]);

  const isHref = (title: string) => createSlug(title) === activeItem;

  return (
    <div className="flex flex-col gap-4 md:gap-7">
      {/* ── 1. Inquiry Form ── */}
      <SideCard title="Quick Inquiry" icon={<MdStickyNote2 size={14} />}>
        <form className="p-4 flex flex-col gap-3">
          {/* 2-col grid for first 4 inputs */}
          <div className="grid grid-cols-2 gap-2.5">
            {inputFields.slice(0, 4).map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.name}>
                  <label className="block text-xs font-semibold uppercase tracking-[.08em] text-zinc-700 my-2">
                    {f.label}
                  </label>
                  <div className="relative">
                    <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color1 opacity-60 z-10" />
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg shadow text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-color1 border border-zinc-200"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject — full width */}
          {inputFields.slice(4).map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.name}>
                <label className="block text-xs font-semibold uppercase tracking-[.08em] text-zinc-700 my-2">
                  {f.label}
                </label>
                <div className="relative">
                  <Icon size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-color1 opacity-60 z-10" />
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg border border-zinc-200 shadow text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-color1"
                  />
                </div>
              </div>
            );
          })}

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.08em] text-zinc-700 mb-1.5">
              Message
            </label>
            <div className="relative">
              <MdOutlineChat size={13} className="absolute left-2.5 top-3 text-color1 opacity-60 z-10" />
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us more about your inquiry..."
                className="w-full pl-7 pr-2.5 py-2 text-xs rounded-lg border border-zinc-200 shadow text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-color1 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="self-start flex items-center gap-2 bg-color1 hover:bg-opacity-90 text-white text-[12px] font-semibold uppercase tracking-[.04em] px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
          >
            Submit Now
            <span className="w-[18px] h-[18px] rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
              <BiRightArrowAlt size={12} className="text-color1" />
            </span>
          </button>
        </form>
      </SideCard>

      {/* ── 2. Our Services ── */}
      <SideCard title="Our Services" icon={<IoSettings size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {Servicedata.map((service: any, i: number) => {
            const active = isHref(service.title);

            return (
              <Link
                key={i}
                href={`/services/${createSlug(service.title)}`}
                className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] border-[1.5px] transition-all duration-200 ${
                  active
                    ? "bg-color1 border-color1 text-white"
                    : "border-zinc-200 bg-zinc-100 hover:border-color1 hover:bg-white"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    active ? "bg-white" : "bg-color1"
                  }`}
                />

                <span
                  className={`flex-1 text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-zinc-700 group-hover:text-color1"
                  }`}
                >
                  {service.title}
                </span>

                <span
                  className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors ${
                    active ? "bg-white" : "bg-zinc-200 group-hover:bg-color1"
                  }`}
                >
                  <BiRightArrowAlt
                    size={12}
                    className={active ? "text-color1" : "text-zinc-700 group-hover:text-white"}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </SideCard>

      {/* ── 3. Visas We Offer ── */}
      <SideCard title="Visas We Offer" icon={<GrVisa size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {visaList.map((v) => (
            <Link
              key={v.id}
              href={v.href}
              className="group flex items-center overflow-hidden rounded-[9px] border-[1.5px] border-zinc-200 bg-white hover:border-color1 transition-all duration-200"
            >
              <div className="w-[34px] self-stretch flex items-center justify-center bg-zinc-100 border-r border-zinc-200 group-hover:bg-color1 group-hover:border-color1 transition-all flex-shrink-0">
                <FaChevronRight size={12} className="text-zinc-700 group-hover:text-white transition-colors" />
              </div>
              <span className="px-3 py-2.5 text-sm font-medium text-zinc-700 group-hover:text-color1 transition-colors">
                {v.title}
              </span>
            </Link>
          ))}
        </div>
      </SideCard>

      {/* ── 4. Migrate ── */}
      {/* <SideCard title="Migrate" icon={<FaLocationArrow size={14} />}>
        <div className="p-3 flex flex-col gap-1.5">
          {visaList.map((v) => (
            <Link
              key={v.id}
              href={v.href}
              className="group flex items-center overflow-hidden rounded-[9px] border-[1.5px] border-zinc-200 bg-white hover:border-color1 transition-all duration-200"
            >
              <div className="w-[34px] self-stretch flex items-center justify-center bg-zinc-100 border-r border-zinc-200 group-hover:bg-color1 group-hover:border-color1 transition-all flex-shrink-0">
                <FaChevronRight size={12} className="text-zinc-700 group-hover:text-white transition-colors" />
              </div>
              <span className="px-3 py-2.5 text-sm font-medium text-zinc-700 group-hover:text-color1 transition-colors">
                {v.title.split(" ")[0]}
              </span>
            </Link>
          ))}
        </div>
      </SideCard> */}


      {/* ── 6. CTA (Using Color3 as Accent) ── */}
      <div className="rounded-2xl bg-color3 p-5">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-white/70 mb-1.5">Need Help?</p>
        <p className="text-base font-bold text-white leading-snug mb-3">
          Get a Free Immigration Consultation Today
        </p>
        <a
          href="tel:+91 7289822078"
          className="w-full flex items-center justify-center gap-2 bg-color1 text-white text-xs font-bold uppercase tracking-[.08em] py-2.5 rounded-[9px] hover:bg-opacity-90 transition-colors"
        >
          <MdOutlineChat size={14} />
          Book a Call →
        </a>
      </div>
    </div>
  );
}

// ── Reusable card wrapper ───────────────────────────────
function SideCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-color3">
        <div className="w-[26px] h-[26px] rounded-[7px] bg-zinc-100 text-color3 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <span className="text-sm sm:text-base font-bold text-white tracking-wide">{title}</span>
      </div>
      {children}
    </div>
  );
}