import Image from "next/image";
import Link from "next/link";
import { portfolioGallery, DIGITAL_WORKS_URL, PORTFOLIO_SITE_URL } from "@/data/gallery";

export function PortfolioGallery() {
  const [featured, ...rest] = portfolioGallery;

  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[200px_200px]">
      <GalleryImageCard
        image={featured}
        className="row-span-2 min-h-[200px] md:col-span-1 md:min-h-0"
        priority
        featured
      />
      {rest.slice(0, 4).map((image) => (
        <GalleryImageCard
          key={image.src}
          image={image}
          className="h-[120px] md:h-auto"
        />
      ))}
      <p className="col-span-2 mt-2 text-center font-sans text-xs text-muted md:col-span-full">
        Digital works from{" "}
        <Link
          href={DIGITAL_WORKS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-mid no-underline hover:text-rose-deep"
        >
          Madeline Rose Art
        </Link>
        . Also on{" "}
        <Link
          href="https://www.instagram.com/madelinerose.arts/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-mid no-underline hover:text-rose-deep"
        >
          Instagram
        </Link>
        .
      </p>
    </div>
  );
}

function GalleryImageCard({
  image,
  className = "",
  priority = false,
  featured = false,
}: {
  image: (typeof portfolioGallery)[number];
  className?: string;
  priority?: boolean;
  featured?: boolean;
}) {
  return (
    <Link
      href={image.portfolioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-[10px] border border-border bg-rose-pale ${className}`}
      aria-label={`${image.title} — view on Madeline Rose Art`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={featured ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 50vw, 20vw"}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={priority}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-rose-deep/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="absolute right-0 bottom-0 left-0 p-3 font-sans text-xs text-cream opacity-0 transition-opacity group-hover:opacity-100">
        <span className="font-medium">{image.title}</span>
        <span className="text-rose-light"> · {image.category}</span>
      </span>
    </Link>
  );
}
