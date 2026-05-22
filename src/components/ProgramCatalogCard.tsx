import type { Program } from "@/data/programs";

export function ProgramCatalogCard({ program }: { program: Program }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-cream p-6 transition-[border-color] hover:border-rose-light">
      <h3 className="font-serif text-lg leading-[1.3] text-rose-deep">{program.title}</h3>
      <p className="mt-3 flex-1 font-sans text-[13px] leading-[1.65] text-muted">
        {program.description}
      </p>
      <dl className="mt-5 flex flex-col gap-2.5 border-t border-border pt-4">
        <DetailRow label="Grades / audience" value={program.ageRange} />
        <DetailRow label="Duration" value={program.duration} />
        <DetailRow label="Materials" value={program.materialsIncluded} />
        {program.cateringAllowed && (
          <DetailRow label="Catering" value={program.cateringAllowed} />
        )}
        <div className="flex justify-between gap-4 border-t border-border pt-3 font-sans text-sm">
          <dt className="font-medium text-rose-deep">Price</dt>
          <dd className="text-right font-semibold text-rose-mid">{program.pricing}</dd>
        </div>
      </dl>
    </article>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
      <dt className="shrink-0 font-sans text-xs text-muted">{label}</dt>
      <dd className="font-sans text-xs leading-snug font-medium text-rose-deep sm:text-right">
        {value}
      </dd>
    </div>
  );
}
