import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-rose-muted/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cream blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-rose">
          Creative Studio
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Where ideas bloom into{" "}
          <span className="text-rose">beautiful brands</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">
          We craft thoughtful brand identities, digital experiences, and visual
          stories that help ambitious brands stand out and connect.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#work"
            className="rounded-full bg-rose px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-rose-light"
          >
            View our work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-rose/20 px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-rose/40 hover:bg-rose-muted/50"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
