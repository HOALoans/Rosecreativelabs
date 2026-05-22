import Link from "next/link";
import { PortfolioGallery } from "./PortfolioGallery";
import { DIGITAL_WORKS_URL } from "@/data/gallery";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/instagram";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-border bg-white px-6 pt-12 pb-[52px] lg:px-12"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            From the studio
          </div>
          <h2 className="mt-1.5 font-serif text-[22px] font-normal text-rose-deep">
            Digital works
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={DIGITAL_WORKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-rose-mid no-underline transition-colors hover:text-rose-deep"
          >
            View all digital works →
          </Link>
          <Link
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-rose-mid no-underline transition-colors hover:text-rose-deep"
          >
            {INSTAGRAM_HANDLE} →
          </Link>
        </div>
      </div>

      <PortfolioGallery />
    </section>
  );
}
