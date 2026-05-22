import Link from "next/link";

export function CtaStrip() {
  return (
    <div
      id="contact"
      className="flex flex-col items-start justify-between gap-8 bg-rose-deep px-6 py-11 md:flex-row md:items-center lg:px-12"
    >
      <div>
        <h2 className="mb-1.5 font-serif text-[22px] font-normal text-rose-pale">
          Ready to bring Rose Creative Labs into your school or organization?
        </h2>
        <p className="font-sans text-[13px] leading-[1.6] text-rose-light">
          Single sessions, multi-week residencies, and custom programs available
          across St. Louis city and county.
        </p>
      </div>
      <Link
        href="/for-schools#inquiry"
        className="shrink-0 rounded-lg bg-rose-warm px-7 py-3.5 font-sans text-sm font-medium whitespace-nowrap text-cream no-underline transition-colors hover:bg-rose-mid"
      >
        Get in touch →
      </Link>
    </div>
  );
}
