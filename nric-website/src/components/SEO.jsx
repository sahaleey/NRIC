import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  image,
  article = false,
}) {
  const { pathname } = useLocation();

  /* =========================
     SITE CONSTANTS
  ========================== */
  const SITE_URL = "https://www.nric.in";
  const SITE_NAME = "Nahjurrashad Islamic College Chamakkala";
  const SHORT_NAME = "NRIC";

  const DEFAULT_DESCRIPTION =
    "Nahjurrashad Islamic College (NRIC), Chamakkala – Empowering Minds, Enriching Souls. Explore academics, campus life, events, and community engagement.";

  const DEFAULT_IMAGE = `${SITE_URL}/images/logo.png`;

  /* =========================
     URL NORMALIZATION
  ========================== */

  // Remove trailing slash except for homepage
  const normalizePath = (path) => {
    if (!path || path === "/") return "";
    return path.endsWith("/") ? path.slice(0, -1) : path;
  };

  const cleanPath = normalizePath(pathname);
  const canonicalUrl = `${SITE_URL}${cleanPath}`;

  /* =========================
     TITLE LOGIC
  ========================== */

  const finalTitle = title
    ? `${title} | ${SHORT_NAME}`
    : SITE_NAME;

  /* =========================
     IMAGE NORMALIZATION
  ========================== */

  const resolveImage = (img) => {
    if (!img) return DEFAULT_IMAGE;
    if (img.startsWith("http")) return img;
    return `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`;
  };

  const finalImage = resolveImage(image);

  /* =========================
     META OUTPUT
  ========================== */

  return (
    <Helmet>
      {/* BASIC */}
      <meta charSet="utf-8" />
      <title>{finalTitle}</title>
      <meta
        name="description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ROBOTS */}
      <meta name="robots" content="index, follow" />

      {/* CANONICAL (MOST IMPORTANT) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OPEN GRAPH */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content="en_IN" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta
        name="twitter:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
}
