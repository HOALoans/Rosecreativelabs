import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "For Schools & Orgs | Rose Creative Labs",
  description:
    "Book art enrichment programs for your school or organization. Per-session, residency, and grant-funded options in St. Louis.",
};

const packages = [
  {
    title: "Per-session fees",
    price: "$150–$500",
    description:
      "Single workshops or drop-in sessions for classrooms, after-school programs, libraries, and community events.",
  },
  {
    title: "Multi-week residency packages",
    price: "Custom pricing",
    description:
      "In-school residencies with curriculum-aligned lesson sequences, materials, and progress documentation.",
  },
  {
    title: "Grant-funded programs",
    price: "Grant-ready",
    description:
      "Programming structured for arts education grants and nonprofit funding — we help align scope to your application.",
  },
  {
    title: "Summer intensive workshops",
    price: "Seasonal rates",
    description:
      "Concentrated multi-day or week-long summer offerings for camps, rec centers, and district enrichment.",
  },
];

const steps = [
  {
    step: "01",
    title: "Reach out",
    description:
      "Share your organization, audience, timeline, and goals through our inquiry form or email. No commitment required.",
  },
  {
    step: "02",
    title: "Custom proposal",
    description:
      "We design a program scope, schedule, and quote tailored to your budget, space, and learning objectives.",
  },
  {
    step: "03",
    title: "Program delivery",
    description:
      "Madeline leads on-site or hosted sessions with standards-aligned curriculum, materials, and documentation.",
  },
];

type Props = {
  searchParams: Promise<{ program?: string }>;
};

export default async function ForSchoolsPage({ searchParams }: Props) {
  const { program: preselectedProgram } = await searchParams;

  return (
    <SiteShell>
      <PageHero
        eyebrow="For schools & organizations"
        title={
          <>
            A clear path from <em className="italic text-rose-mid">inquiry</em> to
            program day
          </>
        }
        description="Whether you need a single workshop or a full-semester residency, Rose Creative Labs makes booking straightforward — with education-first programming built for real classroom outcomes."
      >
        <Link
          href="#inquiry"
          className="inline-block rounded-lg bg-rose-mid px-6 py-3 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
        >
          Start an inquiry →
        </Link>
      </PageHero>

      <section className="border-b border-border bg-white px-6 py-[52px] lg:px-12">
        <div className="mb-8">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            Pricing & packages
          </p>
          <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
            Flexible options for every budget
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-xl border border-border bg-cream p-6"
            >
              <p className="font-serif text-2xl text-rose-mid">{pkg.price}</p>
              <h3 className="mt-2 font-serif text-lg text-rose-deep">{pkg.title}</h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-muted">
                {pkg.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-rose-pale px-6 py-[52px] lg:px-12">
        <div className="mb-10 text-center">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            How it works
          </p>
          <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
            Three steps to your program
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((item) => (
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
        className="scroll-mt-24 bg-white px-6 py-[52px] lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            Get in touch
          </p>
          <h2 className="mt-1.5 font-serif text-[26px] font-normal text-rose-deep">
            Program inquiry form
          </h2>
          <p className="mt-3 mb-8 font-sans text-sm leading-[1.7] text-muted">
            Tell us about your organization and we&apos;ll follow up with a custom
            proposal within two business days.
          </p>
          <InquiryForm defaultProgram={preselectedProgram} />
        </div>
      </section>
    </SiteShell>
  );
}
