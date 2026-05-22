import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProgramCatalogCard } from "@/components/ProgramCatalogCard";
import { SiteShell } from "@/components/SiteShell";
import { programCatalog } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs | Rose Creative Labs",
  description:
    "Full catalog of art enrichment programs for elementary, middle, and high school, corporate teams, and adult learners in St. Louis.",
};

export default function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Program catalog"
        title={
          <>
            Programs for every <em className="italic text-rose-mid">age & setting</em>
          </>
        }
        description="From K–5 classrooms to corporate retreats and adult studio series — every offering is designed with curriculum rigor and led by a master's-level educator and working artist."
      >
        <Link
          href="/for-schools#inquiry"
          className="inline-block rounded-lg bg-rose-mid px-6 py-3 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          Book a program →
        </Link>
      </PageHero>

      {programCatalog.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 px-6 py-[52px] lg:px-12 ${
            index % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            Category
          </p>
          <h2 className="mt-1.5 mb-8 font-serif text-[26px] font-normal text-rose-deep">
            {category.name}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {category.programs.map((program) => (
              <ProgramCatalogCard key={program.title} program={program} />
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-rose-deep px-6 py-12 text-center lg:px-12">
        <h2 className="font-serif text-[22px] font-normal text-rose-pale">
          Not sure which program fits?
        </h2>
        <p className="mx-auto mt-2 max-w-lg font-sans text-sm text-rose-light">
          We&apos;ll help you choose the right format for your group, space, and
          budget.
        </p>
        <Link
          href="/for-schools#inquiry"
          className="mt-6 inline-block rounded-lg bg-rose-warm px-8 py-3.5 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-mid"
        >
          Request a custom proposal →
        </Link>
      </section>
    </SiteShell>
  );
}
