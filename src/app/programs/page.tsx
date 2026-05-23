import type { Metadata } from "next";
import Link from "next/link";
import { ProgramCatalogJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProgramCatalogCard } from "@/components/ProgramCatalogCard";
import { SiteShell } from "@/components/SiteShell";
import { buildPageMetadata } from "@/lib/metadata";
import { programCatalog } from "@/data/programs";

export const metadata: Metadata = buildPageMetadata({
  title: "Programs",
  description:
    "Browse 15 art programs for elementary, middle, and high school students, corporate team building workshops, and adult continuing education in St. Louis — with pricing and materials included.",
  path: "/programs",
  keywords: [
    "K-12 art program catalog",
    "St. Louis school art residency",
    "art class pricing Missouri",
  ],
});

export default function ProgramsPage() {
  return (
    <SiteShell>
      <ProgramCatalogJsonLd />
      <PageHero
        eyebrow="Program catalog"
        title={
          <>
            Fifteen programs across{" "}
            <em className="italic text-rose-mid">five pathways</em>
          </>
        }
        description="From K–5 mixed media adventures to corporate murals and adult stained glass — every offering includes clear duration, materials, and pricing so you can plan with confidence."
      >
        <Link
          href="/for-schools#inquiry"
          className="inline-block rounded-lg bg-rose-mid px-6 py-3 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          Book a program →
        </Link>
      </PageHero>

      <nav
        aria-label="Program categories"
        className="sticky top-[65px] z-50 border-b border-border bg-cream/95 px-6 py-3 backdrop-blur-md lg:px-12"
      >
        <ul className="flex flex-wrap gap-2">
          {programCatalog.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#${cat.id}`}
                className="rounded-full border border-border bg-white px-3 py-1.5 font-sans text-xs text-muted no-underline transition-colors hover:border-rose-light hover:text-rose-mid"
              >
                {cat.grades}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {programCatalog.map((category, index) => {
        const categoryPageHref =
          category.id === "corporate"
            ? "/corporate-teambuilding"
            : category.id === "adult"
              ? "/adult-continuing-education"
              : null;

        return (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-28 px-6 py-[52px] lg:px-12 ${
            index % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            {category.grades}
          </p>
          <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
            {category.name}
          </h2>
          {categoryPageHref && (
            <Link
              href={categoryPageHref}
              className="mt-2 inline-block font-sans text-sm font-medium text-rose-mid no-underline hover:text-rose-deep"
            >
              View full {category.name.toLowerCase()} page →
            </Link>
          )}
          <p className="mt-3 max-w-3xl font-sans text-sm leading-[1.7] text-rose-mid">
            <span className="font-medium text-rose-deep">Focus: </span>
            {category.focus}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {category.programs.map((program) => (
              <ProgramCatalogCard key={program.title} program={program} />
            ))}
          </div>
        </section>
        );
      })}

      <section className="border-t border-border bg-rose-deep px-6 py-12 text-center lg:px-12">
        <h2 className="font-serif text-[22px] font-normal text-rose-pale">
          Ready to enroll or bring a program to your school?
        </h2>
        <p className="mx-auto mt-2 max-w-lg font-sans text-sm text-rose-light">
          We&apos;ll help you choose the right program for your group, space, and
          budget.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/for-schools#inquiry"
            className="inline-block rounded-lg bg-rose-warm px-8 py-3.5 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-mid"
          >
            Request a custom proposal →
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg border border-rose-light px-8 py-3.5 font-sans text-sm text-rose-pale no-underline transition-colors hover:border-rose-pale"
          >
            Back to home
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
