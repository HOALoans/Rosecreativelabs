import Link from "next/link";
import { signaturePrograms } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="bg-white px-6 py-[52px] lg:px-12">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            What we offer
          </div>
          <h2 className="mt-1.5 font-serif text-[22px] font-normal text-rose-deep">
            Signature programs
          </h2>
          <p className="mt-2 max-w-lg font-sans text-sm text-muted">
            Five pathways from K–5 through adult education — browse all 15
            programs with full pricing.
          </p>
        </div>
        <Link
          href="/programs"
          className="shrink-0 rounded-lg bg-rose-mid px-5 py-2.5 font-sans text-[13px] font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          See our programs →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {signaturePrograms.map((program) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className={`block rounded-xl p-6 no-underline transition-[border-color,box-shadow] hover:shadow-md hover:shadow-rose-deep/5 ${
              program.featured
                ? "border-2 border-rose-mid bg-white"
                : "border border-border bg-cream hover:border-rose-light"
            }`}
          >
            {program.featured && (
              <span className="mb-3 inline-block rounded-full bg-rose-pale px-2.5 py-0.5 font-sans text-[11px] font-medium text-rose-mid">
                Popular
              </span>
            )}
            <h3 className="font-serif text-[15px] leading-[1.3] text-rose-deep">
              {program.title}
            </h3>
            <p className="mt-2 font-sans text-[13px] leading-[1.6] text-muted">
              {program.description}
            </p>
            <span className="mt-4 inline-block font-sans text-xs font-medium text-rose-mid">
              {program.meta} →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Link
          href="/programs#elementary"
          className="rounded-full bg-rose-pale px-3 py-1 font-sans text-xs text-rose-mid no-underline hover:bg-rose-light"
        >
          K–5
        </Link>
        <Link
          href="/programs#middle"
          className="rounded-full bg-rose-pale px-3 py-1 font-sans text-xs text-rose-mid no-underline hover:bg-rose-light"
        >
          6–8
        </Link>
        <Link
          href="/programs#high"
          className="rounded-full bg-rose-pale px-3 py-1 font-sans text-xs text-rose-mid no-underline hover:bg-rose-light"
        >
          9–12
        </Link>
        <Link
          href="/corporate-teambuilding"
          className="rounded-full bg-rose-pale px-3 py-1 font-sans text-xs text-rose-mid no-underline hover:bg-rose-light"
        >
          Corporate
        </Link>
        <Link
          href="/adult-continuing-education"
          className="rounded-full bg-rose-pale px-3 py-1 font-sans text-xs text-rose-mid no-underline hover:bg-rose-light"
        >
          Adults
        </Link>
      </div>
    </section>
  );
}
