import Image from "next/image";
import Link from "next/link";

const pills = ["K–8 schools", "Nonprofits", "Community orgs"];

export function Hero() {
  return (
    <section className="grid min-h-[480px] lg:grid-cols-[1fr_420px]">
      <div className="flex flex-col justify-center bg-rose-pale px-8 py-12 md:px-14 md:py-16 lg:px-14">
        <p className="animate-fade-up animate-fade-up-delay-1 mb-[18px] font-sans text-[11px] font-medium tracking-[2px] text-rose-mid uppercase">
          Art enrichment &nbsp;·&nbsp; St. Louis, MO
        </p>
        <h1 className="animate-fade-up animate-fade-up-delay-2 mb-5 max-w-[540px] font-serif text-[32px] leading-[1.18] font-normal text-rose-deep md:text-[42px]">
          Art programs built for{" "}
          <em className="italic text-rose-mid">real learning</em> — not just a
          fun afternoon
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-3 mb-8 max-w-[480px] font-sans text-[15px] leading-[1.75] text-rose-mid">
          Rose Creative Labs brings structured, curriculum-aligned art programs
          to schools, nonprofits, and community organizations across St. Louis.
          Designed by a master&apos;s-level educator. Led by a working artist.
        </p>
        <div className="animate-fade-up animate-fade-up-delay-4 flex flex-wrap items-center gap-3">
          <Link
            href="/programs"
            className="rounded-lg bg-rose-mid px-6 py-3 font-sans text-sm font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
          >
            See our programs →
          </Link>
          <Link
            href="#about"
            className="rounded-lg border-[1.5px] border-rose-light px-[22px] py-[11px] font-sans text-sm text-rose-mid no-underline transition-colors hover:border-rose-mid"
          >
            Meet Madeline
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3.5 bg-rose-deep px-9 py-12">
        <div className="relative mb-1 h-[88px] w-[88px] overflow-hidden rounded-full border-2 border-rose-warm">
          <Image
            src="/about-palette.jpg"
            alt="Paintbrush and oil paints on an artist palette"
            fill
            sizes="88px"
            className="object-cover object-center"
            priority
          />
        </div>
        <p className="text-center font-serif text-base text-rose-pale">
          Madeline Rose Kirschner
        </p>
        <p className="text-center font-sans text-xs leading-[1.6] text-rose-light">
          M.Ed. &nbsp;·&nbsp; Artist &nbsp;·&nbsp; Teaching educator
          <br />
          St. Louis, Missouri
        </p>
        <div className="h-px w-10 bg-rose-mid" />
        <div className="flex flex-wrap justify-center gap-1.5">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-rose-mid px-2.5 py-1 font-sans text-[11px] text-rose-pale"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
