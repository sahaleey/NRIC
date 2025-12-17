import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, image, article = false }) {
  const { pathname } = useLocation();

  // ✅ ONE canonical domain. No www unless you commit to it.
  const siteUrl = "https://www.nric.in";

  const brandTitle = "Nahjurrashad Islamic College Chamakkala";
  const defaultDescription =
    "Nahjurrashad Islamic College (NRIC), Chamakkala – Empowering Minds, Enriching Souls. Explore academic programs, campus life, and community engagement.";

  const defaultImage = `${siteUrl}/images/logo.jpg`;

  const isHome = !title || title.toLowerCase() === "home";
  const finalTitle = isHome ? brandTitle : `${title} | NRIC`;

  // ✅ Safe image handling
  const finalImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultImage;

  const seoUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{finalTitle}</title>

      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={seoUrl} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={finalImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
}
