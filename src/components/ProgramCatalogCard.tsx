import type { Program } from "@/data/programs";

export function ProgramCatalogCard({ program }: { program: Program }) {
  return (
    <article className="rounded-xl border border-border bg-cream p-6 transition-[border-color] hover:border-rose-light">
      <h3 className="font-serif text-lg leading-[1.3] text-rose-deep">{program.title}</h3>
      <p className="mt-2 font-sans text-[13px] leading-[1.6] text-muted">
        {program.description}
      </p>
      <dl className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
        <div className="flex justify-between gap-4 font-sans text-xs">
          <dt className="text-muted">Age range</dt>
          <dd className="text-right font-medium text-rose-deep">{program.ageRange}</dd>
        </div>
        <div className="flex justify-between gap-4 font-sans text-xs">
          <dt className="text-muted">Duration</dt>
          <dd className="text-right font-medium text-rose-deep">{program.duration}</dd>
        </div>
        <div className="flex justify-between gap-4 font-sans text-xs">
          <dt className="text-muted">Pricing</dt>
          <dd className="text-right font-medium text-rose-mid">{program.pricing}</dd>
        </div>
      </dl>
    </article>
  );
}
