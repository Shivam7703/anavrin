// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import { Blogdata } from "@/data/blogData";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Blogdetails from "@/components/blog/blog-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

const SITE_URL = "https://www.anavrinadviser.com/";
const SITE_NAME = "Anavrin Adviser";
const SITE_LOGO = `${SITE_URL}/logo.png`; // update to actual logo path

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Helper to strip HTML tags from title strings
const stripHtml = (html: string): string =>
  html.replace(/<[^>]*>/g, "").trim();

// Extract first paragraph from blog content as description fallback
const getFirstParagraph = (content: any[]): string => {
  for (const section of content || []) {
    for (const sub of section?.subcontent || []) {
      if (sub?.para) return sub.para;
    }
  }
  return "";
};

// Generate static paths
export function generateStaticParams() {
  return Blogdata.map((blog: any) => ({
    slug: createSlug(blog.title),
  }));
}

// ─── generateMetadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleBlog = Blogdata.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) {
    return {
      title: "Blog Not Found | Anavrin Adviser",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${SITE_URL}/blogs/${createSlug(singleBlog.title)}`;
  const title = singleBlog.metatitle || singleBlog.title;
  const description =
    singleBlog.metadesc || getFirstParagraph(singleBlog.content);
  const keywords = singleBlog.metakey || "";
  const ogImage = singleBlog.img
    ? typeof singleBlog.img === "string"
      ? singleBlog.img
      : `${SITE_URL}/og-blog.jpg`
    : `${SITE_URL}/og-blog.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: singleBlog.date
        ? new Date(singleBlog.date).toISOString()
        : undefined,
      authors: [SITE_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@AnavrinAdviser", // update if you have a Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

// ─── JSON-LD Schema Builder ───────────────────────────────────────────────────
function buildJsonLd(singleBlog: any, slug: string) {
  const canonicalUrl = `${SITE_URL}/blogs/${slug}`;
  const title = singleBlog.metatitle || singleBlog.title;
  const description =
    singleBlog.metadesc || getFirstParagraph(singleBlog.content);
  const ogImage =
    typeof singleBlog.img === "string"
      ? singleBlog.img
      : `${SITE_URL}/og-blog.jpg`;
  const datePublished = singleBlog.date
    ? new Date(singleBlog.date).toISOString()
    : new Date().toISOString();

  // 1. BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: ogImage,
    url: canonicalUrl,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: singleBlog.metakey || "",
    articleSection: singleBlog.tag || "Immigration",
    inLanguage: "en-IN",
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: stripHtml(singleBlog.title),
        item: canonicalUrl,
      },
    ],
  };

  // 3. FAQPage Schema (if blog has FAQs)
  const faqSchema =
    singleBlog.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: singleBlog.faq.map((item: any) => ({
            "@type": "Question",
            name: item.que,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.ans,
            },
          })),
        }
      : null;

  // 4. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919311936564",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "H-150, H Block, Sector 63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    sameAs: [
      // Add your actual social media URLs here
      "https://www.facebook.com/anavrinadviser",
      "https://www.instagram.com/anavrinadviser",
    ],
  };

  return { blogPostingSchema, breadcrumbSchema, faqSchema, organizationSchema };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleBlog = Blogdata.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) {
    notFound();
  }

  const slug = createSlug(singleBlog.title);
  const { blogPostingSchema, breadcrumbSchema, faqSchema, organizationSchema } =
    buildJsonLd(singleBlog, slug);

  return (
    <main>
      {/* ── JSON-LD Schema Tags ── */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      /> 
      {faqSchema && ( 
      <script 
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      )}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── Page Content ── */}
      <Banner 
        img={bann}
        title={singleBlog.title}
        para={singleBlog.metadesc}
        slug={`blogs/${slug}`}
      />
      <Blogdetails data={singleBlog}/>
    </main>
  );
}