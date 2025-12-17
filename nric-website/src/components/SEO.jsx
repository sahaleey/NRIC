import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, image, article = false }) {
  const { pathname } = useLocation();
  const siteUrl = "https://nric.in";

  // Defaults
  const brandTitle = "Nahjurrashad Islamic College Chammakkala";
  const defaultDescription =
    "Nahjurrashad Islamic College (NRIC), Chammakkala – Empowering Minds, Enriching Souls. Explore academic programs, campus life, and community engagement.";
  const defaultImage = `${siteUrl}/images/logo.jpg`;

  // Title logic (this is the fix)
  const isHome = !title || title.toLowerCase() === "home";

  const finalTitle = isHome ? brandTitle : `${title} | NRIC Chammakkala`;

  const seo = {
    title: finalTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      {/* Title */}
      <title>{seo.title}</title>

      {/* Standard Metadata */}
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}
