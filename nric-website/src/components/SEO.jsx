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
    "Official website of Nahjurrashad Islamic College Chamakkala (NRIC).";

  const DEFAULT_IMAGE = `${SITE_URL}/images/logo.png`;

  /* =========================
     URL NORMALIZATION
  ========================== */
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
     IMAGE RESOLUTION
  ========================== */
  const resolveImage = (img) => {
    if (!img) return DEFAULT_IMAGE;
    if (img.startsWith("http")) return img;
    return `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`;
  };

  const finalImage = resolveImage(image);

  /* =========================
     ORGANIZATION SCHEMA
  ========================== */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: SITE_NAME,
    alternateName: SHORT_NAME,
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chamakkala",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      postalCode: "680687",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/nricchmkla",
      "https://www.instagram.com/nahjurrashad",
    ],
  };

  /* =========================
     ARTICLE SCHEMA (OPTIONAL)
  ========================== */
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: finalTitle,
        description: description || DEFAULT_DESCRIPTION,
        image: finalImage,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_IMAGE,
          },
        },
        mainEntityOfPage: canonicalUrl,
      }
    : null;

  /* =========================
     BREADCRUMB SCHEMA
  ========================== */
  const generateBreadcrumbSchema = () => {
    const segments = pathname.split("/").filter(Boolean);

    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
    ];

    segments.forEach((segment, index) => {
      const name = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      const url =
        SITE_URL +
        "/" +
        segments.slice(0, index + 1).join("/");

      itemListElement.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: url,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };
  };

  const breadcrumbSchema = generateBreadcrumbSchema();

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
      <meta name="robots" content="index, follow" />

      {/* CANONICAL */}
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

      {/* STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
}
