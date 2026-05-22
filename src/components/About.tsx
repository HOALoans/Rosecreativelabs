export function About() {
  return (
    <section id="about" className="border-t border-rose/10 bg-rose py-24 text-white lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-rose-muted">
              About us
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight lg:text-5xl">
              A small studio with big ideas
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-rose-muted">
            <p>
              Rose Creative Labs is an independent creative studio focused on
              helping founders and teams build brands that feel as good as they
              look.
            </p>
            <p>
              We believe great design starts with listening — understanding your
              audience, your goals, and what makes you different. Then we craft
              work that&apos;s elegant, intentional, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
