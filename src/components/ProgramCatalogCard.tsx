import Link from "next/link";
import type { Program } from "@/data/programs";

export function ProgramCatalogCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="flex h-full flex-col rounded-xl border border-border bg-cream p-6 no-underline transition-[border-color,box-shadow] hover:border-rose-light hover:shadow-md hover:shadow-rose-deep/5"
    >
      <h3 className="font-serif text-lg leading-[1.3] text-rose-deep">
        {program.title}
      </h3>
      <p className="mt-3 line-clamp-4 flex-1 font-sans text-[13px] leading-[1.65] text-muted">
        {program.description}
      </p>
      <dl className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
        <MetaRow label="Duration" value={program.duration} />
        <MetaRow label="Materials" value={program.materialsIncluded} />
        <div className="flex justify-between gap-4 pt-2 font-sans text-sm">
          <span className="font-medium text-rose-deep">Price</span>
          <span className="font-semibold text-rose-mid">{program.pricing}</span>
        </div>
      </dl>
      <span className="mt-4 font-sans text-xs font-medium text-rose-mid">
        View program details →
      </span>
    </Link>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 font-sans text-xs">
      <span className="text-muted">{label}</span>
      <span className="text-right font-medium text-rose-deep">{value}</span>
    </div>
  );
}
