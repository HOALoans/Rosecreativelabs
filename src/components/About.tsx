import Image from "next/image";
import Link from "next/link";
import { ABOUT_PORTFOLIO_URL, credentials, madelineBio } from "@/data/about";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="grid lg:grid-cols-[minmax(280px,360px)_1fr]">
        <div className="border-border bg-rose-pale px-6 py-[52px] lg:border-r lg:px-12">
          <div className="relative mx-auto aspect-[4/5] max-w-[320px] overflow-hidden rounded-xl border border-border">
            <Image
              src="/about-palette.jpg"
              alt="Paintbrush and oil paints on an artist palette"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover"
              priority={false}
            />
          </div>
          <p className="mt-4 text-center font-serif text-base text-rose-deep">
            Madeline Rose Kirschner
          </p>
          <p className="text-center font-sans text-xs text-rose-mid">
            M.Ed. · Artist · Teaching educator · St. Louis, MO
          </p>
          <Link
            href={ABOUT_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center font-sans text-xs text-rose-mid no-underline hover:text-rose-deep"
          >
            Artist portfolio →
          </Link>
        </div>

        <div className="bg-white px-6 py-[52px] lg:px-12">
          <h2 className="mb-[18px] font-serif text-[26px] leading-[1.25] font-normal text-rose-deep">
            Education-first.
            <br />
            <em className="italic text-rose-mid">Art-always.</em>
          </h2>
          <div className="space-y-3.5">
            {madelineBio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-sans text-sm leading-[1.8] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-cream px-6 py-[52px] lg:px-12">
        <h3 className="mb-5 font-sans text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
          Credentials & capabilities
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred) => (
            <li
              key={cred}
              className="flex items-start gap-3 font-sans text-[13.5px] leading-[1.4] text-rose-mid"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-mid" />
              {cred}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
