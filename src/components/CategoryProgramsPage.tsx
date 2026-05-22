import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { ProgramCatalogCard } from "@/components/ProgramCatalogCard";
import { SiteShell } from "@/components/SiteShell";
import type { CategoryPageContent } from "@/data/category-pages";
import { getCategoryById } from "@/data/programs";

type Props = {
  content: CategoryPageContent;
  preselectedProgram?: string;
};

export function CategoryProgramsPage({ content, preselectedProgram }: Props) {
  const category = getCategoryById(content.categoryId);
  if (!category) return null;

  return (
    <SiteShell>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.heroDescription}
      >
        <Link
          href="#programs"
          className="mr-3 inline-block rounded-lg border border-rose-light bg-white px-6 py-3 font-sans text-sm font-medium text-rose-deep no-underline transition-colors hover:border-rose-mid"
        >
          View workshops →
        </Link>
        <Link
          href="#inquiry"
          className="inline-block rounded-lg bg-rose-mid px-6 py-3 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          Get in touch →
        </Link>
      </PageHero>

      <section className="border-b border-border bg-white px-6 py-[52px] lg:px-12">
        <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
          {content.benefitsTitle}
        </p>
        <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
          Built for {category.grades.toLowerCase()}
        </h2>
        <p className="mt-3 max-w-3xl font-sans text-sm leading-[1.7] text-rose-mid">
          <span className="font-medium text-rose-deep">Focus: </span>
          {category.focus}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-cream p-6"
            >
              <h3 className="font-serif text-lg text-rose-deep">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="programs"
        className="scroll-mt-28 border-b border-border bg-cream px-6 py-[52px] lg:px-12"
      >
        <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
          {category.grades}
        </p>
        <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
          {category.name} programs
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {category.programs.map((program) => (
            <ProgramCatalogCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-rose-pale px-6 py-[52px] lg:px-12">
        <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
          {content.logisticsTitle}
        </p>
        <dl className="mx-auto mt-6 grid max-w-3xl gap-4">
          {content.logistics.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 sm:flex-row sm:justify-between sm:gap-8"
            >
              <dt className="shrink-0 font-sans text-sm font-medium text-rose-deep">
                {item.label}
              </dt>
              <dd className="font-sans text-sm leading-[1.7] text-muted sm:text-right">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-b border-border bg-white px-6 py-[52px] lg:px-12">
        <div className="mb-10 text-center">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            {content.stepsTitle}
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {content.steps.map((item) => (
            <div key={item.step} className="text-center md:text-left">
              <span className="font-serif text-3xl text-rose-light">{item.step}</span>
              <h3 className="mt-2 font-serif text-xl text-rose-deep">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="inquiry"
        className="scroll-mt-24 bg-cream px-6 py-[52px] lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            Get in touch
          </p>
          <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
            Request information
          </h2>
          <p className="mt-3 mb-8 font-sans text-sm leading-[1.7] text-muted">
            {content.inquiryLead}
          </p>
          <InquiryForm defaultProgram={preselectedProgram} />
        </div>
      </section>
    </SiteShell>
  );
}
