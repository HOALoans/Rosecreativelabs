import Link from "next/link";
import { IconGallery } from "./icons";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-border bg-white px-6 pt-12 pb-[52px] md:px-12"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            From the studio
          </div>
          <h2 className="mt-1.5 font-serif text-[22px] font-normal text-rose-deep">
            Program gallery
          </h2>
        </div>
        <Link href="#gallery" className="text-[13px] text-rose-mid no-underline">
          View full gallery →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[120px_120px]">
        <div className="row-span-2 flex items-center justify-center rounded-[10px] border border-border bg-rose-ghost md:col-span-1">
          <IconGallery />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex h-[120px] items-center justify-center rounded-[10px] border border-border bg-rose-ghost"
          >
            <IconGallery />
          </div>
        ))}
      </div>
    </section>
  );
}
