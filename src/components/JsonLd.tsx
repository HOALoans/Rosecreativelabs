import { getAllPrograms } from "@/data/programs";
import { siteConfig, siteUrl } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide Organization + WebSite schema for Google rich results. */
export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    email: siteConfig.email,
    areaServed: {
      "@type": "City",
      name: siteConfig.location.city,
      containedInPlace: {
        "@type": "State",
        name: siteConfig.location.state,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.stateCode,
      addressCountry: "US",
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.portfolio],
    founder: {
      "@type": "Person",
      name: "Madeline Rose Kirschner",
      url: siteConfig.social.portfolio,
    },
    knowsAbout: [
      "Art education",
      "K-12 art enrichment",
      "Corporate team building workshops",
      "Adult art classes",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
    </>
  );
}

/** Course-style listings for program detail pages (Google can surface in search). */
export function ProgramJsonLd({
  title,
  description,
  slug,
  pricing,
  duration,
}: {
  title: string;
  description: string;
  slug: string;
  pricing: string;
  duration: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: `${siteUrl}/programs/${slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: pricing.replace(/[^0-9.]/g, "") || undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/for-schools#inquiry`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      duration,
      location: {
        "@type": "Place",
        name: siteConfig.location.city,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.stateCode,
          addressCountry: "US",
        },
      },
    },
  };

  return <JsonLdScript data={data} />;
}

/** Breadcrumb trail for program pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };

  return <JsonLdScript data={data} />;
}

/** ItemList of programs for the catalog page. */
export function ProgramCatalogJsonLd() {
  const programs = getAllPrograms();
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rose Creative Labs Art Programs",
    numberOfItems: programs.length,
    itemListElement: programs.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/programs/${program.slug}`,
      name: program.title,
    })),
  };

  return <JsonLdScript data={data} />;
}
