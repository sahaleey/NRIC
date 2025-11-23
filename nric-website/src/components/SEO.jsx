import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, image, article = false }) {
  const { pathname } = useLocation();
  const siteUrl = "https://nric-chamakkala.vercel.app";

  // Defaults
  const defaultTitle = "NRIC - Nahjurrashad Islamic College Chamakkala";
  const defaultDescription =
    "Nahjurrashad Islamic College (NRIC) Chamakkala - Empowering Minds, Enriching Souls. Explore our academic programs, campus life, and community engagement.";
  const defaultImage = `${siteUrl}/images/dji-hero-desktop.jpg`;

  // Construction
  const seo = {
    title: title ? `${title} | NRIC` : defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      {/* 1. Standard Metadata */}
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* 2. Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* 3. Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}
