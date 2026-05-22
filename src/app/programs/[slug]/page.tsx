import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import {
  getAllProgramSlugs,
  getCategoryInquiryPath,
  getCategoryPagePath,
  getProgramBySlug,
} from "@/data/programs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program | Rose Creative Labs" };

  return {
    title: `${program.title} | Rose Creative Labs`,
    description: program.description.slice(0, 160),
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const inquiryBase = getCategoryInquiryPath(program.categoryId);
  const inquiryHref = `${inquiryBase.replace("#inquiry", "")}?program=${encodeURIComponent(program.title)}#inquiry`;
  const categoryHref = getCategoryPagePath(program.categoryId);

  return (
    <SiteShell>
      <article className="border-b border-border bg-rose-pale px-6 py-10 md:px-12 md:py-14">
        <nav className="mb-6 font-sans text-sm text-muted">
          <Link href="/programs" className="text-rose-mid no-underline hover:text-rose-deep">
            Programs
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={categoryHref}
            className="text-rose-mid no-underline hover:text-rose-deep"
          >
            {program.categoryName}
          </Link>
        </nav>

        <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-rose-mid uppercase">
          {program.categoryGrades}
        </p>
        <h1 className="mt-2 max-w-3xl font-serif text-[32px] leading-[1.15] font-normal text-rose-deep md:text-[40px]">
          {program.title}
        </h1>
        <p className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.75] text-rose-mid">
          {program.description}
        </p>
      </article>

      <section className="grid gap-8 border-b border-border bg-white px-6 py-[52px] lg:grid-cols-[1fr_320px] lg:px-12">
        <div>
          <h2 className="font-serif text-[22px] font-normal text-rose-deep">
            Program details
          </h2>
          <dl className="mt-6 flex flex-col gap-4">
            <DetailRow label="Audience" value={program.ageRange} />
            <DetailRow label="Duration" value={program.duration} />
            <DetailRow label="Materials" value={program.materialsIncluded} />
            {program.cateringAllowed && (
              <DetailRow label="Catering" value={program.cateringAllowed} />
            )}
            <DetailRow label="Category focus" value={program.categoryFocus} />
          </dl>
        </div>

        <aside className="h-fit rounded-xl border-2 border-rose-mid bg-cream p-6">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            Pricing
          </p>
          <p className="mt-2 font-serif text-4xl text-rose-mid">{program.pricing}</p>
          <p className="mt-3 font-sans text-sm leading-[1.7] text-muted">
            {program.pricingDetail}
          </p>
          {program.categoryId === "corporate" || program.categoryId === "adult" ? (
            <p className="mt-4 border-t border-border pt-4 font-sans text-xs leading-relaxed text-muted">
              See{" "}
              <Link href={categoryHref} className="text-rose-mid no-underline hover:text-rose-deep">
                {program.categoryName}
              </Link>{" "}
              for full workshop details, logistics, and enrollment information.
            </p>
          ) : (
            <p className="mt-4 border-t border-border pt-4 font-sans text-xs leading-relaxed text-muted">
              Schools and organizations: see{" "}
              <Link href="/for-schools" className="text-rose-mid no-underline hover:text-rose-deep">
                per-session and residency packages
              </Link>{" "}
              for custom quotes and grant-funded options.
            </p>
          )}
          <Link
            href={inquiryHref}
            className="mt-6 block rounded-lg bg-rose-mid py-3 text-center font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
          >
            Request this program →
          </Link>
        </aside>
      </section>

      <section className="bg-cream px-6 py-10 text-center lg:px-12">
        <Link
          href={categoryHref}
          className="font-sans text-sm text-rose-mid no-underline hover:text-rose-deep"
        >
          ← More {program.categoryName} programs
        </Link>
      </section>
    </SiteShell>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border pb-4 last:border-0">
      <dt className="font-sans text-xs font-medium text-muted">{label}</dt>
      <dd className="mt-1 font-sans text-sm text-rose-deep">{value}</dd>
    </div>
  );
}
