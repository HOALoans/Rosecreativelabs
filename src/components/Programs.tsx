import Link from "next/link";
import { IconAfterSchool, IconArtists, IconFoundations } from "./icons";

const programs = [
  {
    title: "Art Foundations Residency",
    description:
      "A 6-week in-school program exploring color, line, shape, and texture through hands-on projects tied to visual arts learning standards.",
    meta: "Ages 6–10 · 6 weeks",
    icon: IconFoundations,
    featured: false,
  },
  {
    title: "Artists Who Changed the World",
    description:
      "A 4-session series connecting art history to social studies. Students explore influential artists and create works inspired by their legacy.",
    meta: "Ages 10–14 · 4 sessions",
    icon: IconArtists,
    featured: true,
  },
  {
    title: "Creative Expression After-School",
    description:
      "A flexible enrichment block for after-school providers, public libraries, and community organizations. Adaptable in length and focus.",
    meta: "All ages · Flexible schedule",
    icon: IconAfterSchool,
    featured: false,
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-white px-6 py-[52px] md:px-12">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
            What we offer
          </div>
          <h2 className="mt-1.5 font-serif text-[22px] font-normal text-rose-deep">
            Signature programs
          </h2>
        </div>
        <Link
          href="#programs"
          className="text-[13px] text-rose-mid no-underline"
        >
          View all programs →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <article
              key={program.title}
              className={`rounded-xl p-6 transition-[border-color] ${
                program.featured
                  ? "border-2 border-rose-mid bg-white"
                  : "border border-border bg-cream hover:border-rose-pale"
              }`}
            >
              {program.featured && (
                <span className="mb-3 inline-block rounded-full bg-rose-ghost px-2.5 py-0.5 text-[11px] font-medium text-rose-dark">
                  Most booked
                </span>
              )}
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-rose-ghost">
                <Icon />
              </div>
              <h3 className="mb-2 font-serif text-[15px] leading-[1.3] text-rose-deep">
                {program.title}
              </h3>
              <p className="mb-4 text-[13px] leading-[1.6] text-muted">
                {program.description}
              </p>
              <span className="inline-block rounded-full bg-rose-ghost px-2.5 py-1 text-xs text-rose-dark">
                {program.meta}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
