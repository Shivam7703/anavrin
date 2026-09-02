// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Visadetails from "@/components/visa/visadetail";
import { Servicedata } from "@/data/serviceData";

interface Pageprops {
    params: {
        slug: string;
    };
}

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
    if (!title) return "";
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

// Enable static site generation for Vercel builds
export function generateStaticParams() {
    if (!Servicedata) return [];
    return Servicedata.map((visa: any) => ({
        slug: createSlug(visa.title),
    }));
}

export default function Visapage({ params }: Pageprops) {
    const decodedSlug = createSlug(params?.slug);
    const singlevisa = Servicedata?.find(
        (visa: any) => createSlug(visa.title) === decodedSlug
    );

    if (!singlevisa) {
        notFound();
    }

    return (
        <main>
            <Banner
                img={bann}
                title={singlevisa.title}
                para={singlevisa?.metadesc}
                slug={`visas/${createSlug(singlevisa.title)}`}
            />
            <Visadetails data={singlevisa} />
        </main>
    );
}